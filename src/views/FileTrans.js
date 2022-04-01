import React from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { connect } from "react-redux";
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { pink } from '@mui/material/colors';
import { FileUploader } from "react-drag-drop-files";

import Login from "./login"
import { defaultTostStyle } from "../utils/constants"
import { setToken } from "../store/actions/auth"
import BasicModal from "../components/model/model";
import Languages from "../store/data/languages.json"
import Result from './result';
import { fetchFileTranslateAPI } from '../store/actions/api'

const fileTypes = ["txt", "json", "strings", "resx", "xml", "html"];


function FIleTrans(props) {
    const [tokenExist, setTokenExist] = React.useState(false);
    const [selectedLanguage, setSelectedLanguage] = React.useState("");
    const [resultExist, setResultExist] = React.useState({ open: false, value: "" });
    const [file, setFile] = React.useState(null);

    const handleSubmit = async () => {
        if (!props.token || props.token.trim() === "") {
            return setTokenExist(true)
        }
        if (!selectedLanguage || !file) {
            return toast("Please fill all the details", {
                type: "error",
                ...defaultTostStyle
            });
        }

        const formData = new FormData();
        formData.append("file", file, file.name);
        formData.append('to', selectedLanguage);
        let response = await props.fetchFileTranslateAPI({ formData })
        if (response?.data) {
            setResultExist({ open: true, value: response.data.data.translated })
            toast("Successfully Translation Done", {
                type: "success",
                ...defaultTostStyle
            });
        }
    }



    let handleLoginSubmit = async (token) => {
        if (!token || token.length !== 50) {
            return toast("Enter valid Token", {
                type: "error",
                ...defaultTostStyle
            });
        }
        props.setToken(token)
        setTokenExist(false)
    }

    let handleCloseResult = async () => {
        setResultExist({ ...resultExist, open: false })
    }

    const handleChange = async (fileData) => {
        if (!props.token || props.token.trim() === "") {
            return setTokenExist(true)
        }
        if (file) {
            return toast("Only Single Allowed", { type: "error", ...defaultTostStyle });
        }
        setFile(fileData);
    };

    return (
        <div style={{ marginTop: "20px" }}>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined" style={props.style} >{
                    <React.Fragment>
                        <h1>File Translator</h1>
                        <BasicModal open={resultExist.open}><Result value={resultExist.value} handleSubmit={handleCloseResult} /></BasicModal>
                        <BasicModal open={tokenExist}><Login handleSubmit={handleLoginSubmit} /></BasicModal>
                        <CardContent sx={{ width: "60%" }} style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <FormControl style={{ marginBottom: "20px" }} fullWidth>
                                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectedLanguage}
                                    label="Language"
                                    style={{ borderRadius: "15px" }}
                                    onChange={e => setSelectedLanguage(e.target.value)}
                                >
                                    {Languages.map(lan => (<MenuItem key={lan.code} value={lan.code}>{lan.language}</MenuItem>))}
                                </Select>
                            </FormControl>
                            <FileUploader
                                multiple={false}
                                handleChange={handleChange}
                                name="file"
                                types={fileTypes}
                            />
                            {file ? <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center"
                            }}>
                                <p style={{ marginRight: "10px" }}>{`File name: ${file.name}`}</p>
                                <DeleteForeverIcon sx={{ color: pink[500] }} onClick={() => setFile(null)} />
                            </div> :
                                <p style={{ color: "red" }}>no files uploaded yet</p>}
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" size="medium" onClick={handleSubmit}>Submit</Button>
                        </CardActions>
                    </React.Fragment>
                }</Card>
            </Box>
        </div >
    )
}

FIleTrans.propTypes = {
    style: PropTypes.object,
}

FIleTrans.defaultProps = {
    style: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "15px",
        boxShadow: `-15px -15px 15px rgba(255,255,255,0.2),
                    15px 15px 15px rgba(0,0,0,0.1),
                    inset -15px -15px 15px rgba(255,255,255,0.2),
                    inset 15px 15px 15px rgba(0,0,0,0.1)
                    `,
        padding: "30px"
    }

}

export default connect(
    state => {
        return { token: state.authentication.token };
    }, {
    setToken,
    fetchFileTranslateAPI
}
)(FIleTrans);



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

import Login from "./login"
import { defaultTostStyle } from "../utils/constants"
import { setToken } from "../store/actions/auth"
import BasicModal from "../components/model/model";
import TextArea from "../components/textArea/textArea";
import Languages from "../store/data/languages.json"
import Result from './result';
import { fetchAiTranslateAPI } from '../store/actions/api'


function AiBoard(props) {
    const [textInput, setTextInput] = React.useState('');
    const [tokenExist, setTokenExist] = React.useState(false);
    const [selectedLanguage, setSelectedLanguage] = React.useState("");
    const [resultExist, setResultExist] = React.useState({ open: false, value: "" });

    const handleSubmit = async () => {
        if (!props.token || props.token.trim() === "") {
            return setTokenExist(true)
        }
        if (!selectedLanguage || !textInput) {
            return toast("Please fill all the details", {
                type: "error",
                ...defaultTostStyle
            });
        }
        let response = await props.fetchAiTranslateAPI({
            data: textInput,
            lan: selectedLanguage
        })
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

    return (
        <div style={{ marginTop: "20px" }}>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined" style={props.style} >{
                    <React.Fragment>
                        <h1>AI Translator</h1>
                        <BasicModal open={resultExist.open}><Result value={resultExist.value} handleSubmit={handleCloseResult} /></BasicModal>
                        <BasicModal open={tokenExist}><Login handleSubmit={handleLoginSubmit} /></BasicModal>
                        <CardContent sx={{ minWidth: "60%" }}>
                            <TextArea textInput={textInput} setTextInput={setTextInput} />
                            <FormControl style={{ marginTop: "20px" }} fullWidth>
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
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" size="medium" onClick={handleSubmit}>Submit</Button>
                        </CardActions>
                    </React.Fragment>
                }</Card>
            </Box>
        </div>
    )
}

AiBoard.propTypes = {
    style: PropTypes.object,
}

AiBoard.defaultProps = {
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
    fetchAiTranslateAPI
}
)(AiBoard);



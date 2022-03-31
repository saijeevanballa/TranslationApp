import React from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { connect } from "react-redux";
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Login from "./login"
import { alertConst } from "../utils/constants"
import { setToken } from "../store/actions/auth"
import BasicModal from "../components/model/model";
import TextArea from "../components/textArea/textArea";

function AiBoard(props) {
    const [textInput, setTextInput] = React.useState('');
    const [tokenExist, setTokenExist] = React.useState(false);

    const handleSubmit = () => {
        if (!props.token || props.token.trim() === "") {
            return setTokenExist(true)
        }
        toast("Successfully Translation Done", {
            type: "success",
            ...alertConst
        });
    }

    let handleLoginSubmit = async (token) => {
        if (!token || token.length !== 50) {
            return toast("Enter valid Token", {
                type: "error",
                ...alertConst
            });
        }
        props.setToken(token)
        setTokenExist(false)
    }

    return (
        <div style={{ marginTop: "20px" }}>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined" style={props.style} >{
                    <React.Fragment>
                        <BasicModal open={tokenExist}><Login handleSubmit={handleLoginSubmit} /></BasicModal>
                        <CardContent sx={{ minWidth: "60%" }}>
                            <TextArea textInput={textInput} setTextInput={setTextInput} />
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
    setToken
}
)(AiBoard);



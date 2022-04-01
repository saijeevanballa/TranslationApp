import React from 'react'
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField"
import { hash } from '../utils/constants';

function Login(props) {
    let [token, setToken] = React.useState("")

    return (
        <>
            <TextField id="outlined-basic" label="Enter your Token" variant="outlined" value={token} onChange={e => setToken(e.target.value)} /><br />

            <Button variant="outlined" size="small" onClick={() => props.handleSubmit(token)}>Submit</Button>
            <p style={{ color: "red", fontSize: "13px" }}>
                Note: Guest account expire soon. Please register you account for free
            </p>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "Center",
                margin: "5px"
            }}>
                <Button ><a style={{ textDecoration: "none", color: "inherit" }} href='https://rapidapi.com/saijeevanballa-SQhbMuR2KtK/api/ai-translation-apis/' target="_blank" rel="noreferrer">Register</a></Button>
                <div>
                    continue as
                    <Button size="small" onClick={() => props.handleSubmit(window.atob(hash))}>Guest</Button>
                </div>
            </div>


        </>
    )
}

export default Login;
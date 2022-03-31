import React from 'react'
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField"

function Login(props) {
    let [token, setToken] = React.useState("")

    return (
        <>
            <TextField id="outlined-basic" label="Enter your Token" variant="outlined" value={token} onChange={e => setToken(e.target.value)} /><br />

            <Button variant="outlined" size="small" onClick={() => props.handleSubmit(token)}>Submit</Button>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "Center"
            }}>
                <Button ><a style={{ textDecoration: "none", color: "inherit" }} href='https://rapidapi.com/saijeevanballa-SQhbMuR2KtK/api/ai-translation-apis/' target="_blank" rel="noreferrer">Register</a></Button>
                <div>
                    continue as
                    <Button size="small" onClick={() => props.handleSubmit('8a2e173057mshbb26ac18047d2f2p1e40fbjsnd15d9cfcd782')}>Guest</Button>
                </div>
            </div>

        </>
    )
}

export default Login;
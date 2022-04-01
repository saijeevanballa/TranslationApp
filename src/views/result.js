import React from 'react'

import TextArea from "../components/textArea/textArea";
import Button from '@mui/material/Button';
import CopyToClipboard from 'react-copy-to-clipboard';
import { anchorStyle, defaultTostStyle } from '../utils/constants';
import { toast } from 'react-toastify';


function Result(props) {
    let onCopy = () => {
        toast("successfully copied.", { type: "success", ...defaultTostStyle })
    }

    let onClickDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(props.value)], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "Translator.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click()
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around"
        }}>
            <TextArea textInput={JSON.stringify(props.value, null, 2)} style={{
                width: "90%",
                borderColor: "#1976d2",
                borderRadius: "15px",
                boxShadow: `-15px -15px 15px rgba(255,255,255,0.2), 15px 15px 15px rgba(0,0,0,0.1)`,
                padding: "15px",
                margin: "10px"
            }} />
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center"
            }}>
                <div>

                    <Button variant="outlined" size="small" onClick={() => props.handleSubmit()}>close</Button>
                    <CopyToClipboard text={JSON.stringify(props.value)} onCopy={onCopy} style={{ marginLeft: "10px", marginRight: "10px" }}>
                        <Button variant="outlined" size="small" color="error">copy</Button>
                    </CopyToClipboard>
                    <Button variant="outlined" size="small" color="success" onClick={onClickDownload}>download</Button>
                </div>
                <a href='https://rapidapi.com/saijeevanballa-SQhbMuR2KtK/api/ai-translation-apis/details'
                    target="_blank" rel="noreferrer" style={anchorStyle}
                >Please Rate Us.</a>
            </div>
        </div>
    )
}

export default Result
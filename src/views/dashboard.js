import React from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import MinHeightTextarea from "../components/textArea/textArea";

function Dashboard(props) {
    const [inputValue, setInputValue] = React.useState('plain');
    const [textInput, setTextInput] = React.useState('');

    const handleSubmit = () => {
        alert(JSON.stringify({ inputValue, textInput }, null, 2))
    }

    return (
        <div style={{ marginTop: "20px" }}>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined" style={props.style} >{
                    <React.Fragment>
                        <CardContent sx={{ minWidth: "60%" }}>
                            <MinHeightTextarea textInput={textInput} setTextInput={setTextInput} />
                            <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                >
                                    {props.inputs.map(input => <FormControlLabel key={input} value={input} control={<Radio />} label={input.toUpperCase()} />)}
                                </RadioGroup>
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

Dashboard.propTypes = {
    style: PropTypes.object,
    inputs: PropTypes.array
}

Dashboard.defaultProps = {
    inputs: ["plain", "json", "html", "android", "ios", "srt", "xamarin", "yaml"],
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

export default Dashboard
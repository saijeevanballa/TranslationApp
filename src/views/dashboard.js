import React from 'react'
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


function Dashboard() {
    return (
        <div style={{ marginTop: "20px" }}>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined" style={{
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
                }} >{
                        <React.Fragment>
                            <CardContent sx={{ minWidth: "60%" }}>
                                <MinHeightTextarea></MinHeightTextarea>
                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                </FormControl>
                            </CardContent>
                            <CardActions>
                                <Button variant="outlined" size="medium">Submit</Button>
                            </CardActions>
                        </React.Fragment>
                    }</Card>
            </Box>
        </div>
    )
}

export default Dashboard
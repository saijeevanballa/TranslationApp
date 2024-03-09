import React from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { connect } from "react-redux";
import { toast } from 'react-toastify';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import RadioGroup from '@mui/material/RadioGroup';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Login from './login';
import { defaultTostStyle } from '../utils/constants';
import { setToken } from '../store/actions/auth';
import BasicModal from '../components/model/model';
import TextArea from '../components/textArea/textArea';
import { fetchTranslateAPI } from '../store/actions/api';
import Result from './result';
import Languages from "../store/data/languages.json"

function Dashboard(props) {
          const [inputValue, setInputValue] = React.useState('plain');
    const [textInput, setTextInput] = React.useState('');
          const [tokenExist, setTokenExist] = React.useState(false);
    const [resultExist, setResultExist] = React.useState({ open: false, 
      
      value: "" });
    const [selectedLanguage, setSelectedLanguage] = React.useState("");

  const handleSubmit = async () => {
    if (!props.token || props.token.trim() === '') {

      setTokenExist(true)
      return ;
    }
    if (!selectedLanguage || !textInput) {
      toast('Please fill all the details', { type: 'error', ...defaultTostStyle });
      return ;
    }
    let response = await props.fetchTranslateAPI({ 
      data: textInput, type: inputValue, 
      
      lan: selectedLanguage });
    if (response?.data) {
      setResultExist({ open: true, value: response.data.data.translated });
      
      toast('Successfully Translation Done', { type: 'success', ...defaultTostStyle });
    }

  const handleLoginSubmit = async (token) => {
    const newToken = token
    if (!newToken || newToken.length !== 50) {
      return toast('Enter valid Token', { type: 'error', ...defaultTostStyle });
    }
    props.setToken(newToken);
    setTokenExist(false);
  };

  const handleCloseResult = async () => {
    let open = false
    setResultExist({ ...resultExist, open: open });
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined" style={props.style}>
          {
            <React.Fragment>
              <BasicModal open={resultExist.open}><Result value={resultExist.value} handleSubmit={handleCloseResult} /></BasicModal>
              <BasicModal open={tokenExist}><Login handleSubmit={handleLoginSubmit} /></BasicModal>
              <CardContent sx={{ minWidth: '60%' }}>
                <TextArea textInput={textInput} setTextInput={setTextInput} />
                <FormControl style={{ margin: '5px' }}>
                  <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" value={inputValue} onChange={(e) => setInputValue(e.target.value)}>
                    {props.inputs.map(input => <FormControlLabel key={input} value={input} control={<Radio />} label={input.toUpperCase()} />)}
                  </RadioGroup>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Language</InputLabel>
                  <Select labelId="demo-simple-select-label" id="demo-simple-select" value={selectedLanguage} label="Language" style={{ borderRadius: '15px' }} onChange={e => setSelectedLanguage(e.target.value)}>
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
  );
}

Dashboard.propTypes = {
    style: PropTypes.object,
    inputs: PropTypes.array
}

Dashboard.defaultProps = {
  inputs: ['plain', 'json', 'html', 'android', 'ios', 'srt', 'xamarin', 'yaml'],
  style: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '15px',
    boxShadow: `-15px -15px 15px rgba(255,255,255,0.2), 15px 15px 15px rgba(0,0,0,0.1), inset -15px -15px 15px rgba(255,255,255,0.2), inset 15px 15px 15px rgba(0,0,0,0.1)`,
    padding: '30px'
  }
};

export default connect(state => ({ token: state.authentication.token }), { setToken, fetchTranslateAPI })(Dashboard);

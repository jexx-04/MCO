import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Carousel from './carousel'
import { Box, Typography} from '@mui/material';
import {Theme} from'./themes';
import { ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';

export function Body(){
  return(
  <body>
  <span class="maindiv">
  <span class="carousel">
  <Carousel />
  </span>
  <span class="registerbox">
  <BoxSx></BoxSx>
  </span>
  </span>
  </body>
  );
};
const RegisterButton = styled(Button)(({ theme }) => ({
  color: '#454545',
  backgroundColor: Theme.palette.primary.main,
  '&:hover': {
    backgroundColor: '#bf7e1d',
    color: 'black',
  },
  width: 150, 
  fontFamily: 'Roboto',
  fontWeight: '400',
  
}));
export const ThemeTextField = styled(TextField)({
  "& label": {
    color: "Theme.palette.primary.dark"
  },
});

function BoxSx() {
  const navigate = useNavigate();
  const emailRef = useRef(); //creating a refernce for TextField Component
  const passwordRef = useRef(); //creating a refernce for TextField Component
  const [valid, setValid] = useState(1);
  const loguser = () => {
    const emails = ["1@gmail.com","2@gmail.com","3@gmail.com","4@gmail.com","5@gmail.com"];
    const passwords = ["12345","23451","34512","45123","51234"];

    for(var i=0; i < 5; i++){
      if(emails[i] == emailRef.current.value && passwords[i] == passwordRef.current.value)
        navigate('/home/main', {state:{id:{i},}})
    }    
    setValid(0);
  };
  const typevalid = () => {
    setValid(1)
  }
  return (
    <ThemeProvider theme={Theme}>
    <Box
        sx={{
          width: 500,
          height: 600,
          borderRadius: 1,
          bgcolor: 'primary.light',
          boxShadow: '3px 5px 9px #000000',
          alignItems: 'center',
        }}
      >
        <div class="register2">
          <Typography variant='h3' color="primary.dark" fontFamily="Roboto" fontWeight="100">Login Account</Typography>
        <span class="registerinput1">      
          <ThemeTextField error={valid==0 } onClick={typevalid} inputRef={emailRef} id="email" size="small" label="Email/Username" variant="filled" color="secondary" sx={{opacity: 1, width: '55ch',  input: { color: 'primary.dark' } }}/>
        </span>
        <span class="registerinput2">      
          <ThemeTextField error={valid==0} inputRef={passwordRef} type="password" id="password" size="small" label="Password" variant="filled" color="secondary" sx={{opacity: 1, width: '55ch'}}/>
        </span>
        <RegisterButton variant="outlined" color="secondary" size="large" style={{boxShadow: '1px 1px 1px #000000'}} href="/home/main" onClick={loguser}>
            Login</RegisterButton>
        </div>
        
      </Box>
      </ThemeProvider>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../Css/Contactus.css'   
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from "@mui/material/Button";


const Contactus = () => {
  return (
    <div>
        <h1 className='mt-4 mb-4' >Contact Us</h1>
        <p>Grow you business to a new heights </p>

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <Box className='mt-5'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='mt-5' >
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue=""
        />
        <TextField className='mt-5'
          id="outlined-input"
          label="Subject"
          type="text"
          autoComplete="current-password"
        />
        <TextField className='mt-5'
          id="outlined-input"
          label="Message"
          defaultValue=""
          
        />
    
        
      </div>
      <Button variant="contained">Get Started</Button>
      
      
      
      
      </Box>
                </div>
                <div className="col-md-6">
                    <iframe title='Our Location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.508011136956!2d74.35820931462991!3d31.50686228137945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918f9d1c4f4f4f7%3A0x3b5b7f8b0e8c3b1e!2sArfa%20Software%20Technology%20Park!5e0!3m2!1sen!2s!4v1633611517557!5m2!1sen!2s" width="600" height="350" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </div>  
            </div>
        </div>

        
      
    </div>
  )
}
export default Contactus

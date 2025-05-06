import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { TextField, Typography, Container, Stack, Button } from '@mui/material';
import "../styles/Login.css"
import { LoginService } from '../functions/authentication';




export default function LoginPage(props){
    const [username, setUserName] =React.useState("")
    const [password, setPassword] = React.useState("")
    return (
        <>
        <Typography variant='h4' className='heading'>
            Login
        </Typography>
        <br></br>
        <Container maxWidth={'sm'} className='contament'>
            <Stack spacing={5}>
                <TextField 
                    label="User Name" 
                    className='username'
                    onChange={(e) =>setUserName(e.target.value)}
                />
                <TextField 
                    label="Password" 
                    type='Password' 
                    className='username'
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <Button onClick={()=>LoginService(username, password) }>
                    Login
                </Button>
                <Button>
                    Forgot Password
                </Button>
            </Stack>
        </Container>
      
        
        </>
    )
}
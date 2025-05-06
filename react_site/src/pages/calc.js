import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';



export default function Calc(props){

    const [equas, setEquas] = useState("")

    function updateVal(e){
        let txt=e.target.textContent;
        let equasion = equas
        console.log(equasion)
        
        const base_mx = equas.match(/[\d\.]+\s*\^/);
        const carrot_mx = equas.match(/\^\s*[\d\.]+/);
        if (base_mx && carrot_mx){
            equasion=equas.substring(0, base_mx.index) + " Math.pow(" +base_mx[0].slice(0,-1) +" , " + carrot_mx[0].slice(1) + " )" + equas.substring(carrot_mx.index + carrot_mx[0].length, equas.length)
            console.log(equasion);
        }
        // equasion=equas.substring(0, base_mx.index) + " Math.pow(" +base_mx[0].slice(0,-1) +" , " + carrot_mx[0].slice(1) + " )" + equas.substring(carrot_mx.index + carrot_mx[0].length, equas.length)
        console.log(base_mx);
        console.log(carrot_mx);
        
        // console.log(e.target.textContent);
        if (txt =='clr'){
            setEquas('');
        }else if (txt ==='+-') {
            setEquas((-1*eval(equas)).toString());
        }else if (txt ==='1/x') {
            setEquas((1/eval(equas)).toString());
        }else if (txt ==="="){
            setEquas(eval(equasion).toString());
        }else if (["0","1","2","3","4","5","6","7","8","9","^","(", ")", "."].includes(txt)){
            setEquas(equas + e.target.textContent);
        
        }else {
        setEquas(equas +" "+ e.target.textContent+" ");
        }
    }
    

    function NumberDiv (props) {
        // console.log(props.num);
        return(
            <Grid xs={3}>
             <Button variant="contained" 
             sx={{
                bgcolor:'#C28A48',
                borderRadius:3,
                minHeight: '50px',
                fontSize:'15pt'
            }}fullWidth
             onClick={updateVal}>{props.num}</Button>
            </Grid>
        )  
    }
    const button_vals =["1", "2", "3", "+",
                        "4", "5", "6", "-", 
                        "7", "8", "9", "*", 
                        "0", "clr", "+-", "=",
                        "/", "^", "(", ")",
                        ".", "1/x"];
    return (
        
        <Box className='App'>
            <Container  maxWidth="sm" sx={{border:3, margin:'auto', padding:3 }}>
            <Typography variant='h3'> My calculator </Typography>
            <Box sx={{ flexGrow: 1 }}>
            <Typography variant='h4' 
                sx={{
                    minHeight :65,
                    color:'white',
                    paddingTop: 4
                    }} >{equas}</Typography> 

            <Grid container spacing={2}>
                {button_vals.map((x) => <NumberDiv num={x} />)}
 
             
            </Grid>
            </Box>
            </Container>
        </Box>
      );
}
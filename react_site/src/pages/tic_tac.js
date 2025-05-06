import { Box, Stack } from '@mui/material';
import * as React from 'react';
import { Container, Typography } from '@mui/material';
import {useState} from 'react'
import { Grid } from '@mui/material';
import { Button } from '@mui/material';

export default function TicTac(props){

    const [gameBoard, setGameBoard] = useState(["X", " ", " ", "O", " ", " ", " ", " ", " "])
    const [refresh, setRefresh] = useState(false)
    function playMove(event){
        const idx =event.target.id;
        if (gameBoard[idx] ==" "){
            let gmbd = gameBoard;
            gmbd[idx]='X';
            let openSpots =[]
            for (let val in gameBoard){
                if(gameBoard[val]==" "){
                    openSpots.push(val);
                }
            }
            gmbd[openSpots[Math.floor(Math.random() * openSpots.length)]]='O';
            console.log(openSpots)
            console.log(gmbd);
            setGameBoard(gmbd);
            setRefresh(!refresh);
        }   
    }
    function resetGame(){
        setGameBoard([" ", " ", " ", " ", " ", " ", " ", " ", " ",])
        setRefresh(!refresh)
    }

    return (
        <>
        <Typography variant='h3' sx={{
            width:'100vw',
            textAlign:"center",
            color:"gray",
            bgcolor:'black'
        }}
         >Tick Tac Toe</Typography>
        
        <Box className ="AppTic">
        <Stack>
            <Box sx={{width:'100vw', margin:'auto'}}>
                <Button sx={{width:"50%", fontSize:"15pt", color:"red"}} onClick={resetGame} size='Large' variant='outlined'>New Game</Button>
            </Box>
        
            <Container  maxWidth="sm" sx={{border:3, margin:'auto', padding:3 }}>
   
                    <Grid container>
                        {gameBoard.map((val, i ) => {
                            return (
                            <Grid item key={(i+20).toString()}  xs={4}>
                                <Box key={i.toString()}  sx={{
                                    border:1, 
                                    height:100,
                                    alignContent:"center",
                                    fontSize:60}} onClick= {playMove} id={i} junk ={refresh.toString()}>{val}
                                </Box>
                            </Grid> 
                        )})}
                        
                    </Grid>

            </Container>
            </Stack>
        </Box>
        
        
        
        
        </>
    )
}
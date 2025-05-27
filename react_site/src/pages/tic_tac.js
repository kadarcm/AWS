import { Box, Stack } from '@mui/material';
import * as React from 'react';
import { Container, Typography } from '@mui/material';
import {useState} from 'react'
import { Grid } from '@mui/material';
import { Button } from '@mui/material';

export default function TicTac(props){

    const [gameBoard, setGameBoard] = useState(["X", " ", " ", "O", " ", " ", " ", " ", " "])
    const [refresh, setRefresh] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    function playMove(event){
        if (gameOver) {
            alert("Game Over! Please start a new game.");
            return;
        }else{    
        const idx =event.target.id;
        if (gameBoard[idx] ==" "){
            let gmbd = gameBoard;
            gmbd[idx]='X';
            setGameBoard(gmbd);
            if (checkWinner()) {
                return; // Exit if the game is over after the player's move
            }
            setRefresh(!refresh);
            let openSpots =[]
            for (let val in gameBoard){
                if(gameBoard[val]==" "){
                    openSpots.push(val);
                }
            }
            
            gmbd[openSpots[Math.floor(Math.random() * openSpots.length)]]='O';
            checkWinner();
            console.log(openSpots)
            console.log(gmbd);
            setGameBoard(gmbd);
            setRefresh(!refresh);
        }
    }   
    }
    function resetGame(){
        setGameBoard([" ", " ", " ", " ", " ", " ", " ", " ", " ",])
        setRefresh(!refresh)
        setGameOver(false);
    }
    function checkWinner(){
        let XSpots =[]
        let OSpots =[]
        for (let val in gameBoard)
        {
            if(gameBoard[val]=="X"){
               XSpots.push(parseInt(val));
            }
            if(gameBoard[val]=="O"){
                OSpots.push(parseInt(val));
             }
        }
        
        const winingCombos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]];
    
        for (let i = 0; i < winingCombos.length; i++) 
        {
            if (winingCombos[i].every(val => XSpots.includes(val))) {
                alert("X wins!");
                setGameOver(true);
                return true

            
            }else if (winingCombos[i].every(val => OSpots.includes(val))) {
                alert("O wins!");
                setGameOver(true);  
                return true

            }else if (gameBoard.every(val => val !== " ")) {
                alert("It's a draw!");
                setGameOver(true);
                return true
            }
            // setRefresh(!refresh)
        }
        return false;
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
                <Button id="rset" sx={{width:"50%", fontSize:"15pt", color:"red"}} onClick={resetGame} size='Large' variant='outlined'>New Game</Button>
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
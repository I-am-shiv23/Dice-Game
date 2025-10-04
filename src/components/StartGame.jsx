import React from 'react'
import styled from 'styled-components'
import dice from '/images/Dice.png'
import { Button } from './Styled/Button';
const StartGame = ({toggle}) => {
  return (
       <Container>
         <img src={dice} alt="" />
          <div className='content'>
          <h1>Dice Game</h1>
          <Button onClick={toggle}>Play Now</Button>
          </div>    
       </Container>      
  );
};

export default StartGame
    
const Container = styled.div`
max-width: 1180px;
height:100vh;
display:flex;
margin: 0 auto;
align-items: center;
/* justify-content: center; */
margin-right: 650px;
.content{
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
}
`;


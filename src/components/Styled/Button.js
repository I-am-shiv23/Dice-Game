import styled from "styled-components";

export const Button = styled.button`
color:#FFFFFF;
padding:10px 18px;
gap:10px;
width:220px;
background: #000000;
border-radius: 5px;   
border:none;
border: 1px solid transparent;
 transition: 0.3s all ease-in-out;
&:hover{
    cursor: pointer;    
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s all ease-in-out;
    }  
`;

export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color:black;
&:hover{
background-color:black;
color:white;
}
`;

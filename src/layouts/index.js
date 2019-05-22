import React from 'react';
import styled from 'styled-components';

export const StyledContainer = styled.div`
max-width: 500px;
height: 100vmin;
background-color: lightblue;
display: flex;
align-items: center;
flex-direction: column;
overflow: auto;
`;


export const AddTask = styled.button`
position: relative;
width: 100px;
height: 30px;
border-radius: 15px;
margin: 5px;

`;

export const TaskList = styled.div`


`;



export const  StyledPriority = styled.div`
display: flex;

`;

export const StyledPriorityButton = styled.button`
width: 100px;
height: 30px;
border-radius: 15px;
margin: 5px;


border-left-color: lightgrey;
border-top-color: lightgrey;
border-bottom-color: #555;
border-right-color: #555;

 &:hover {
    background: #555;
    border-left-color: #555;
    border-top-color: #555;
    border-bottom-color: white;
    border-right-color: white;
  }
  
`;

export const LoadingView = () => {
  return (
    <span>Loading</span>
  )
};
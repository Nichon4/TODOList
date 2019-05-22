import React from 'react';
import styled from "styled-components";

export const TaskBlock = styled.div`

background-color: lightgrey;
min-width: 200px;
max-width: 450px;
min-height: 100px;
border-radius: 10px;
padding: 0;
margin-bottom: 3px;
`;

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
`;

export const StyledHeader = styled.input.attrs({
  placeholder: "Header",
})`
border: none;
min-width: 200px;
height: 40px;
padding:  0 0 0 20px;
font-size: 30px;
background: linear-gradient(to top, gray 0%,lightgrey 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

&:focus {
  outline: none;
}
`;

export const StyledText = styled.textarea.attrs({
  placeholder: "Task",
  rows: "2"
})`
border: none;
min-width: 200px;
min-height: 40px;
padding:  5px 0 0 10px;
 resize: none;
font-size: 15px;
background: linear-gradient(to top, gray 0%,lightgrey 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

&:focus {
  outline: none;
}
`;

export const StyledRow = styled.div`
display: flex;
flex-direction: row;
border: none;
min-width: 200px;
height: 20px;
padding:  10px 0 10px 10px;
font-size: 15px;
background: linear-gradient(to top, gray 0%,lightgrey 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

`;

export const StyledDate = styled.input`
margin-left: 10px;
height: 20px;
border: none;
background: none;
`;

export const StyledSelect = styled.select`
background: transparent;
margin-left: 10px;
`;

export const CompletedDate = ({date}) => {
  return (
    <StyledRow>
      <>Completed</>
      <StyledDate name={"expireDate"}
                  type="datetime-local" readOnly={true}
                  defaultValue={date}/>
    </StyledRow>
  )
};
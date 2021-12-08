import React from 'react';
import styled from 'styled-components';

type TabloPropsType = {
    value: number
}

export const Tablo = ({value, ...props}: TabloPropsType) => {


    return (
        <div>
            <InputStyle value={value}/>
        </div>
    )
}

const InputStyle = styled.input`
  background-color: #61dafb;
  color: black;
  max-width: 165px;
  min-width: 165px;
  max-height: 50px;
  min-height: 50px;
  font-size: 35px;
  margin: 12px;
  text-align: center;
  border: 2px solid black;
  border-radius: 5px;
`

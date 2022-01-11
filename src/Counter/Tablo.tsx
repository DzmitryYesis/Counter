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
  background-color: #282c34;
  color: #61dafb;
  max-width: 165px;
  min-width: 165px;
  max-height: 65px;
  min-height: 65px;
  font-size: 35px;
  margin: 12px;
  text-align: center;
  border: 2px solid #61dafb;
  border-radius: 5px;
`

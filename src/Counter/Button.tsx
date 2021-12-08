import React from 'react';
import styled from 'styled-components';

type CounterPropsType = {
    value: number
    inc:()=>void
    reset:()=>void
    maxValue:number
    minValue:number
}

export const Button = ({value, inc,reset,maxValue, minValue, ...props}: CounterPropsType) => {

    return (
        <ButtonsStyle>
            <ButtonStyle disabled={value === maxValue} onClick={inc}>inc</ButtonStyle>
            <ButtonStyle disabled={value === minValue} onClick={reset}>reset</ButtonStyle>
        </ButtonsStyle>

    )

}

const ButtonsStyle = styled.div`
  display: inline-block;
  background-color: #282c34;
  width: 170px;
  height: 50px;
  margin: 0px 12px 12px 12px;
  border: 2px solid #61dafb;
  border-radius: 5px;
`

const ButtonStyle = styled.button`
  background-color: #61dafb;
  border-radius: 2px;
  margin: 15px 7px 7px 7px;
  width: 70px;
`
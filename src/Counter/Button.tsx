import React from 'react';
import styled from 'styled-components';

type CounterPropsType = {
    value: number
    inc: () => void
    reset: () => void
    maxValue: number
    minValue: number
}

export const Button = ({value, inc, reset, maxValue, minValue, ...props}: CounterPropsType) => {

    return (
        <ButtonsCounterStyle>
            <ButtonCounterStyle disabled={value === maxValue} onClick={inc}>inc</ButtonCounterStyle>
            <ButtonCounterStyle disabled={value === minValue} onClick={reset}>reset</ButtonCounterStyle>
        </ButtonsCounterStyle>

    )

}

const ButtonsCounterStyle = styled.div`
  display: inline-block;
  background-color: #282c34;
  width: 170px;
  height: 50px;
  margin: 0px 12px 12px 12px;
  border: 2px solid #61dafb;
  border-radius: 5px;
`
const ButtonCounterStyle = styled.button`
  background-color: #61dafb;
  border-radius: 2px;
  margin: 15px 7px 7px 7px;
  width: 70px;
`
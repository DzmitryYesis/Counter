import React from 'react';
import styled from 'styled-components';

type CounterPropsType = {
    value: string
    inc: () => void
    reset: () => void
    maxValue: number
    startValue: number
    addStartValue: number
    addMaxValue: number
}

export const Button = ({value, inc, reset, maxValue, startValue, addStartValue, addMaxValue, ...props}: CounterPropsType) => {

    return (
        <ButtonsCounterStyle>
            <ButtonCounterStyle disabled={+value === maxValue||addMaxValue===addStartValue} onClick={inc}>inc</ButtonCounterStyle>
            <ButtonCounterStyle disabled={+value === startValue||addMaxValue===addStartValue} onClick={reset}>reset</ButtonCounterStyle>
        </ButtonsCounterStyle>

    )

}

export const ButtonsCounterStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #282c34;
  width: 170px;
  height: 35px;
  margin: 0px 12px 12px 12px;
  border: 2px solid #61dafb;
  border-radius: 5px;
`
export const ButtonCounterStyle = styled.button`
  background-color: #61dafb;
  border-radius: 2px;
  margin: 7px 7px 7px 7px;
  width: 70px;
`
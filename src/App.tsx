import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Button} from './Counter/Button';
import {Tablo} from './Counter/Tablo';
import styled from 'styled-components';

function App() {
    let [minValue, setMinValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [value, setValue] = useState<number>(minValue)


    const inc = () => setValue(value + 1)

    const reset = () => setValue(minValue)

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(+e.currentTarget.value)
    }
    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }
    const confirmValue = () => setValue(minValue)


    return (
        <AppStyle>
            <SettingStyle>
                <input type={'number'} value={minValue} onChange={changeMinValue}/>
                <input type={'number'} value={maxValue} onChange={changeMaxValue}/>
                <button onClick={confirmValue}>set</button>
            </SettingStyle>
            <CounterStyle>
                <Tablo value={value}/>
                <Button value={value} inc={inc} reset={reset} maxValue={maxValue} minValue={minValue}/>
            </CounterStyle>
        </AppStyle>
    );
}

export default App;

const CounterStyle = styled.div`
  background-color: #282c34;
  border: 2px solid #61dafb;
  border-radius: 5px;
  width: 200px;
  margin: 2px;
`

const SettingStyle = styled.div`
  background-color: #282c34;
  border: 2px solid #61dafb;
  border-radius: 5px;
  width: 200px;
  margin: 2px;
`

const AppStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 200px;
`
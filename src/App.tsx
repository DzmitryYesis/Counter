import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Button, ButtonCounterStyle, ButtonsCounterStyle} from './Counter/Button';
import {Tablo} from './Counter/Tablo';
import styled from 'styled-components';

function App() {
    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [value, setValue] = useState<number>(0)

    useEffect(() => {
        let finish = localStorage.getItem('maxValue')
        if (finish) {
            setMaxValue(JSON.parse(finish))
        }
        let start = localStorage.getItem('startValue')
        if (start) {
            setStartValue(JSON.parse(start))
            setValue(JSON.parse(start))
        }
    }, [])

// пока не засетаешь новые значения, счетчик работает со старыми
    const inc = () => setValue(value + 1)

    const reset = () => setValue(Number(localStorage.getItem('startValue')))

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }
    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }
    const confirmValue = () => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        //setValue(startValue)
    }

    let checkValue = JSON.stringify(value)
    if (startValue===maxValue||startValue>maxValue) {
        checkValue = 'ERROR'
    }

    return (
        <AppStyle>
            <SettingStyle>
                <AddValueStyle>
                    <LineSetStyle>
                        startValue: <InputSetStyle type={'number'} value={startValue} onChange={changeMinValue}/>
                    </LineSetStyle>
                    <LineSetStyle>
                        maxValue: <InputSetStyle type={'number'} value={maxValue} onChange={changeMaxValue}/>
                    </LineSetStyle>
                </AddValueStyle>
                <ButtonsCounterStyle>
                    <ButtonCounterStyle disabled={startValue===maxValue||startValue>maxValue} onClick={confirmValue}>set</ButtonCounterStyle>
                </ButtonsCounterStyle>
            </SettingStyle>
            <CounterStyle>
                <Tablo value={checkValue}/>
                <Button value={checkValue} inc={inc} reset={reset} maxValue={maxValue} startValue={startValue}/>
            </CounterStyle>
        </AppStyle>
    );
}

export default App;

const CounterStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #282c34;
  border: 2px solid #61dafb;
  border-radius: 5px;
  width: 200px;
  margin: 2px;
`

const SettingStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const InputSetStyle = styled.input`
  background-color: #61dafb;
  color: black;
  width: 50px;
  text-align: center;
  font-size: 15px;
`
const AddValueStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #282c34;
  color: #61dafb;
  max-width: 170px;
  min-width: 170px;
  max-height: 65px;
  min-height: 65px;
  margin: 12px;
  border: 2px solid #61dafb;
  border-radius: 5px;
`

const LineSetStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3px;
`
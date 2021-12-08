import React, {useState} from 'react';
import './App.css';
import {Button} from './Counter/Button';
import {Tablo} from './Counter/Tablo';
import styled from 'styled-components';

function App() {
    const minValue = 0
    const maxValue = 5
    let [value, setValue] = useState<number>(minValue)


    const inc = () => setValue(value + 1)

    const reset = () => setValue(minValue)


    return (
        <AppStyle>
            <Tablo value={value}/>
            <Button value={value} inc={inc} reset={reset} maxValue={maxValue} minValue={minValue}/>
        </AppStyle>
    );
}

export default App;

const AppStyle = styled.div`
  background-color: #282c34;
  margin-right: auto;
  margin-left: auto;
  margin-top: 200px;
  width: 200px;
  border: 2px solid #61dafb;
  border-radius: 5px;
`
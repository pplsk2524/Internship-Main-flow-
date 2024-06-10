import React, { useState } from 'react';
import './calculator.css';

function Calculator() {
    const [currentOperand, setCurrentOperand] = useState('');
    const [previousOperand, setPreviousOperand] = useState('');
    const [operation, setOperation] = useState(null);

    const inputNum = (e) => {
        const value = e.target.textContent;
        if (value === '.' && currentOperand.includes('.')) return;
        setCurrentOperand(currentOperand + value);
    };

    const operatorType = (e) => {
        if (currentOperand === '') return;
        if (previousOperand !== '') {
            let value = compute();
            setPreviousOperand(value);
        } else {
            setPreviousOperand(currentOperand);
        }
        setCurrentOperand('');
        setOperation(e.target.textContent);
    };

    const compute = () => {
        let result;
        let prev = parseFloat(previousOperand);
        let current = parseFloat(currentOperand);
        if (isNaN(prev) || isNaN(current)) return '';
        switch (operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }
        return result.toString();
    };

    const equals = () => {
        let value = compute();
        if (value === undefined || value == null) return;
        setCurrentOperand(value);
        setPreviousOperand('');
        setOperation(null);
    };

    const reset = () => {
        setCurrentOperand('');
        setPreviousOperand('');
        setOperation(null);
    };

    const dele = () => {
        setCurrentOperand(currentOperand.slice(0, -1));
    };

    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand">{previousOperand} {operation}</div>
                <div className="current-operand">{currentOperand}</div>
            </div>
            <button className="span-two operator" onClick={reset}>AC</button>
            <button className="operator"onClick={dele}>DEL</button>
            <button className="operator" onClick={operatorType}>/</button>
            <button onClick={inputNum}>1</button>
            <button onClick={inputNum}>2</button>
            <button onClick={inputNum}>3</button>
            <button className="operator" onClick={operatorType}>+</button>
            <button onClick={inputNum}>4</button>
            <button onClick={inputNum}>5</button>
            <button onClick={inputNum}>6</button>
            <button className="operator" onClick={operatorType}>*</button>
            <button onClick={inputNum}>7</button>
            <button onClick={inputNum}>8</button>
            <button onClick={inputNum}>9</button>
            <button className="operator" onClick={operatorType}>-</button>
            <button onClick={inputNum}>.</button>
            <button onClick={inputNum}>0</button>
            <button className="span-two equals" onClick={equals}>=</button>
        </div>
    );
}

export default Calculator;

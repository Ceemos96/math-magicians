import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator-wrapper">

        <div className="calculator">
          <div className="output">
            <span>0</span>
          </div>
          <div className="operators-and-digits">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button type="button" className="colored">÷</button>
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button" className="colored">x</button>
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button" className="colored">-</button>
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button" className="colored">+</button>
            <button type="button" className="wide">0</button>
            <button type="button">.</button>
            <button type="button" className="colored">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

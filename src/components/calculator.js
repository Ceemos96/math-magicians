import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [value, setValue] = useState({
    total: '',
    next: '',
  });

  const handleClick = (event) => {
    const btnValue = event.target.value;
    setValue((prevState) => ({
      ...calculate(prevState, btnValue),
    }));
  };

  const { total, next } = value;
  return (
    <div className="calculator-wrapper">
      <div className="calculator">
        <div className="output">
          {next || total || 0}
        </div>
        <div className="operators-and-digits">
          <button type="button" value="AC" onClick={handleClick}>
            AC
          </button>
          <button type="button" value="+/-" onClick={handleClick}>+/-</button>
          <button type="button" value="%" onClick={handleClick}>%</button>
          <button type="button" value="÷" className="colored" onClick={handleClick}>
            ÷
          </button>
          <button type="button" value="7" onClick={handleClick}>7</button>
          <button type="button" value="8" onClick={handleClick}>8</button>
          <button type="button" value="9" onClick={handleClick}>9</button>
          <button type="button" value="x" className="colored" onClick={handleClick}>
            x
          </button>
          <button type="button" value="4" onClick={handleClick}>4</button>
          <button type="button" value="5" onClick={handleClick}>5</button>
          <button type="button" value="6" onClick={handleClick}>6</button>
          <button type="button" value="-" className="colored" onClick={handleClick}>
            -
          </button>
          <button type="button" value="1" onClick={handleClick}>1</button>
          <button type="button" value="2" onClick={handleClick}>2</button>
          <button type="button" value="3" onClick={handleClick}>3</button>
          <button type="button" value="+" className="colored" onClick={handleClick}>
            +
          </button>
          <button type="button" value="0" className="wide" onClick={handleClick}>
            0
          </button>
          <button type="button" value="." onClick={handleClick}>.</button>
          <button type="button" value="=" className="colored" onClick={handleClick}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

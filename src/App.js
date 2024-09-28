import React, { useEffect, useState } from "react";
import "./styles.css";
function App() {
  return <CustomProgram />;
}

const half = (number) => number / 2;
const double = (number) => number * 2;
const increment = (number) => number + 1;
const decrement = (number) => number - 1;

const CustomProgram = () => {
  // KODUNUZU BURAYA EKLEYİN
  const [value, setValue] = useState(""); 
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState([]);


  const handleSumit=(e)=>{
    e.preventDefault()
    let currentValue=parseFloat(value)

    operation.forEach(op=>{
      if(op==='half'){
        currentValue=half(currentValue)
      }else if(op==='double'){
        currentValue=double(currentValue)
      }else if(op==='increment'){
        currentValue=increment(currentValue)
      }else if(op==='decrement'){
        currentValue=decrement(currentValue)
      }
    })
    setResult(currentValue)
    
  }

  const addOperation = (op) => {
    setOperation((prev) => [...prev, op]);
  };

  const clearAll = () => {
    setValue('');
    setOperation([]);
    setResult(0); 
  };


  return (
    <div className="Custom">
      <div className="custom-button">
      
        <button onClick={() => addOperation('half')}>Yarım</button>
        <button onClick={() => addOperation('double')}>İki Kat</button>
        <button onClick={() => addOperation('increment')}>Arttır</button>
        <button onClick={() => addOperation('decrement')}>Eksilt</button>
        <button onClick={clearAll}>Temizle</button>

      </div>

      <h1>Fonksiyonum</h1>
      <ul>
        {operation.map((item,inedx)=>(
          <li key={inedx}>{item}</li>
        ))}
      </ul>
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Bir sayı girin"
          />
        <button style={{ backgroundColor: "green", color: "white" }}
        onClick={handleSumit}
        >
          Gönder
        </button>

        <div className="sonuc">
          {result !== null && (
            <p>{`${parseFloat(value) || 0} > Fonksiyon > ${result}`}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

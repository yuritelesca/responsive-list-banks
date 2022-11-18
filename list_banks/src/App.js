import './App.css';
import React, {useState, useEffect} from 'react';

function App() {


  // useState
  const [vetor, setVetor] = useState([]);

  // useEffect
  useEffect(() => {
    getData();
  });

  // Function to get Data
  const getData = async () => {
    const data = await fetch('https://brasilapi.com.br/api/banks/v1')
    const convert = await data.json();
    setVetor(convert);
  };

  return (
    <div className="App"> 

        <h1>Lista de bancos</h1>
         
        <ul>
          {vetor.map(object => (
              <li>
                <h2>ISPB: {object.ispb}</h2>
                <h2>Código: {object.code}</h2>
                <h2>Nome: {object.fullName}</h2>
              </li>
            ))}
        </ul>
    </div>
  );
}

export default App;

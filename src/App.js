import React, { useState } from 'react';
import './App.css'; // Certifique-se de importar seu arquivo CSS

function App() {
  const [soma, setSoma] = useState(0);
  const [resultadoCorreto, setResultadoCorreto] = useState(false);

  const calcularSoma = () => {
    let indice = 13;
    let somaTemp = 0;
    let k = 0;

    while (k < indice) {
      k = k + 1;
      somaTemp = somaTemp + k;
    }

    setSoma(somaTemp);
    setResultadoCorreto(somaTemp === 91); // Verifica se o resultado é 91
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>TESTE 1</h1>
      <pre className='pre-test'>
        <code>
          {`int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { 
K = K + 1; 
SOMA = SOMA + K; }

Imprimir(SOMA);`}
        </code>
      </pre>
      <h2>Resultado:</h2>
      <p className={resultadoCorreto ? 'resultado-correto' : ''}>
        SOMA: {soma}
      </p>
      <button className='btn' onClick={calcularSoma}>Calcular</button>
    </div>
  );
}

export default App;


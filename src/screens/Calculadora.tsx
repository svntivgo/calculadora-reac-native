import React, { useState } from 'react';
import Display from '../components/Display';
import Inputs from '../components/Inputs';

const Calculadora = () => {
  const [display, setDisplay] = useState('');
  const [operacion, setOperacion] = useState('');

  return (
    <>
      <Display display={display} operacion={operacion} />
      <Inputs setDisplay={setDisplay} setOperacion={setOperacion} />
    </>
  );
};

export default Calculadora;

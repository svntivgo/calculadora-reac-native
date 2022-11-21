import React, { MutableRefObject, useRef } from 'react';
import { View } from 'react-native';
import { inputsTheme as styles } from '../themes/inputs';
import { colores } from '../themes/colores';
import Boton from './Boton';

interface Props {
  setDisplay: (value: string) => void;
  setOperacion: (value: string) => void;
}
const Inputs = ({ setDisplay, setOperacion }: Props) => {
  const numeros: any = useRef([]);
  const operaciones: any = useRef([]);
  const operacion: MutableRefObject<string> = useRef('0');
  // const simbolos: string[] = ['+', '−', '×', '÷'];
  const resultado = useRef(0);

  const { claro, oscuro, naranja } = colores();

  const botonHandler = (texto: string) => {
    operacion.current = operacion.current + texto;
    setOperacion(operacion.current);
  };

  const operacionHandler = (operador?: string) => {
    operacion.current = operacion.current + operador;
    setOperacion(operacion.current);
    let numeroExtraido = operacion.current.split(/[+−×÷]+/);
    const numero = parseFloat(numeroExtraido[numeroExtraido.length - 2]);
    numeros.current.push(numero);
    operaciones.current.push(operador);
  };

  const botonReset = () => {
    setDisplay('');
    operacion.current = '';
    setOperacion('');
    numeros.current = [];
    operaciones.current = [];
  };

  const botonIgual = () => {
    let resultadoFinal = 0;
    let numeroExtraido = operacion.current.split(/[+−×÷]+/);
    const numero = parseFloat(numeroExtraido[numeroExtraido.length - 1]);
    numeros.current.push(numero);
    console.log(numeros);
    numeros.current.forEach((num: number, i: number) => {
      switch (operaciones.current[i - 1]) {
        case '+':
          console.log(num);
          resultadoFinal += num;
          break;
        case '−':
          resultadoFinal -= num;
          break;
        case '×':
          resultadoFinal *= num;
          break;
        case '÷':
          resultadoFinal /= num;
          break;
        default:
          resultadoFinal = num;
          break;
      }
    });
    resultado.current = resultadoFinal;
    setDisplay(resultado.current.toString());
    return;
  };

  return (
    <View style={styles.contenedorBotones}>
      <Boton accion={botonReset} estilo={claro} valor={'C'} />
      <Boton accion={botonHandler} estilo={claro} valor={'+/-'} />
      <Boton accion={botonHandler} estilo={claro} valor={'del'} />
      <Boton accion={operacionHandler} estilo={naranja} valor={'÷'} />
      <Boton accion={botonHandler} estilo={oscuro} valor={'1'} />
      <Boton accion={botonHandler} estilo={oscuro} valor={'2'} />
      <Boton accion={botonHandler} estilo={oscuro} valor={'3'} />
      <Boton accion={operacionHandler} estilo={naranja} valor={'×'} />
      <Boton accion={botonHandler} estilo={oscuro} valor={'4'} />
      <Boton accion={botonHandler} estilo={oscuro} valor={'5'} />
      <Boton accion={botonHandler} estilo={oscuro} valor={'6'} />
      <Boton accion={operacionHandler} estilo={naranja} valor={'−'} />
      <Boton accion={botonHandler} estilo={oscuro} valor={'7'} />
      <Boton accion={botonHandler} estilo={oscuro} valor={'8'} />
      <Boton accion={botonHandler} estilo={oscuro} valor={'9'} />
      <Boton accion={operacionHandler} estilo={naranja} valor={'+'} />
      <Boton
        accion={botonHandler}
        estilo={oscuro}
        botonCero={true}
        valor={'0'}
      />
      <Boton accion={botonHandler} estilo={oscuro} valor={'.'} />
      <Boton accion={botonIgual} estilo={naranja} valor={'='} />
    </View>
  );
};

export default Inputs;

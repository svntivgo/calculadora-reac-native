import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { inputsTheme as styles } from '../themes/inputs';
import { colores } from '../themes/colores';

interface Props {
  accion: (texto: string) => void;
  estilo: string;
  botonCero?: boolean;
  valor: string;
}

const { claro, oscuro } = colores();

const Boton = ({ accion, estilo, botonCero, valor }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => accion(valor)}
      style={{
        ...styles.botones,
        backgroundColor: estilo,
        ...(botonCero ? styles.botonCero : null),
      }}>
      <Text
        style={{
          ...styles.textoBotones,
          ...(estilo === claro ? { color: oscuro } : null),
        }}>
        {valor}
      </Text>
    </TouchableOpacity>
  );
};

export default Boton;

import React from 'react';
import { Text, View } from 'react-native';
import { displayTheme as styles } from '../themes/display';

interface Props {
  display: string;
  operacion: string;
}
const Display = ({ display, operacion }: Props) => {
  return (
    <View style={styles.display}>
      <Text
        style={{
          ...styles.resultado,
          ...(display !== '' ? styles.displayResultado : null),
        }}>
        {operacion === '' ? '0' : operacion}
      </Text>
      <Text
        style={{
          ...styles.resultado,
          ...(display === '' ? styles.displayResultado : null),
        }}>
        {display === '' ? '0' : display}
      </Text>
    </View>
  );
};

export default Display;

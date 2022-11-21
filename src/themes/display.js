const { StyleSheet } = require('react-native');
import { colores } from './colores';

const { claro } = colores();

export const displayTheme = StyleSheet.create({
  display: {
    flex: 3,
    backgroundColor: 'black',
    textAlign: 'right',
    paddingTop: 25,
    paddingHorizontal: 25,
  },
  historial: {
    flex: 2,
  },
  historialItem: {
    flex: 1,
    color: '#bebfc1',
    fontSize: 30,
    textAlign: 'right',
  },
  resultado: {
    flex: 2,
    color: 'white',
    fontSize: 100,
    textAlign: 'right',
  },
  displayResultado: {
    color: claro,
    fontSize: 33,
    lineHeight: 100,
  },
});

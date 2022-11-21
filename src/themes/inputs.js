const { StyleSheet } = require('react-native');

export const inputsTheme = StyleSheet.create({
  contenedorBotones: {
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  botones: {
    width: 75,
    height: 75,
    marginHorizontal: 7,
    marginVertical: 6,
    backgroundColor: '#29342e',
    borderRadius: 50,
  },
  textoBotones: {
    color: 'white',
    textAlign: 'center',
    lineHeight: 75,
    fontSize: 35,
  },
  botonCero: {
    width: 164,
    textAlign: 'center',
  },
});

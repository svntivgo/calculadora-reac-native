/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const textoBotonClaro: string[] = ['C', '+/-', 'del'];
const textoBotonNaranja: string[] = ['÷', '×', '−', '+', '='];
const historialItems: string[] = ['12÷2=6', '2+12=14', '26×2=52'];
const botonesClaros: object[] = [];
const botonesOscuros: object[] = [];
const botonesNaranjas: object[] = [];
const historial: object[] = [];
const operacion: string = '2+2';

const App = () => {
  historialItems.forEach(item => {
    historial.push(
      <Text key={`boton__${item}`} style={styles.historialItem}>
        {item}
      </Text>,
    );
  });

  textoBotonClaro.forEach(texto => {
    botonesClaros.push(
      <TouchableOpacity
        key={`boton__${texto}`}
        style={[styles.botones, styles.botonesClaros]}>
        <Text style={[styles.textoBotones, styles.textoBotonesClaros]}>
          {texto}
        </Text>
      </TouchableOpacity>,
    );
  });

  for (let i = 1; i < 10; i++) {
    botonesOscuros.push(
      <TouchableOpacity key={`boton__${i}`} style={styles.botones}>
        <Text style={styles.textoBotones}>{i}</Text>
      </TouchableOpacity>,
    );
  }

  textoBotonNaranja.forEach(texto => {
    botonesNaranjas.push(
      <TouchableOpacity
        key={`boton__${texto}`}
        style={[styles.botones, styles.botonesNaranjas]}>
        <Text style={styles.textoBotones}>{texto}</Text>
      </TouchableOpacity>,
    );
  });

  return (
    <SafeAreaView style={styles.contenedorPrincipal}>
      <View style={styles.contenedorResultado}>
        <View style={styles.historial}>{historial}</View>
        <Text style={styles.resultado}>{operacion}</Text>
      </View>
      <View style={styles.contenedorBotones}>
        <View style={styles.contenedorIzquierdo}>
          {botonesClaros}
          {botonesOscuros}
          <TouchableOpacity style={[styles.botones, styles.botonCero]}>
            <Text style={[styles.textoBotones, styles.botonCero]}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botones}>
            <Text style={[styles.textoBotones, styles.botonPunto]}>.</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contenedorDerecho}>{botonesNaranjas}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
  },
  contenedorResultado: {
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
  contenedorBotones: {
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 'auto',
    backgroundColor: 'black',
  },
  contenedorIzquierdo: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  contenedorDerecho: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: -10,
  },
  botones: {
    width: 75,
    height: 75,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#29342e',
    borderRadius: 50,
  },
  textoBotones: {
    color: 'white',
    textAlign: 'center',
    lineHeight: 75,
    fontSize: 35,
  },
  textoBotonesClaros: {
    color: '#29342e',
    fontSize: 25,
  },
  botonesClaros: {
    backgroundColor: '#bebfc1',
  },
  botonesNaranjas: {
    backgroundColor: '#f1b02e',
  },
  botonCero: {
    width: 170,
    textAlign: 'center',
  },
  botonPunto: {
    textAlign: 'center',
    lineHeight: 55,
  },
});

export default App;

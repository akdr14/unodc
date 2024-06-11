import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Usojson from "./../../datos/uso.json";


const Uso = () => {
  const [usojson, setUsoJson] = useState([]);
  const [txtBus, setTxtBus] = useState('');
  useEffect(() => {
    setUsoJson(Usojson);
  }, []);
  const abrirResp = (itemid) => {
    let usojsonTemp = [...usojson];
    let indJson = usojsonTemp.findIndex((ij) => ij.id === itemid);
    if (indJson > -1) {
      usojsonTemp[indJson].visible = !usojsonTemp[indJson].visible;
    }
    setUsoJson(usojsonTemp);
  }
  return (
    <View style={stylesUso.container}>
    <Text style={{backgroundColor:"#A0B23E", color:"#FFFFFF",fontSize: 25,  fontWeight: 'bold'}}>01 Uso de la ICCS y conceptos básicos</Text>
      <TextInput
        style={stylesUso.inputBus}
        setTxtBus={setTxtBus}
        value={txtBus}
        placeholder=" Búsqueda"
      />
      {/* <Text>json: {JSON.stringify(usojson)}</Text> */}
      <ScrollView
        contentContainerStyle={stylesUso.scrollContainer}>
        {
          usojson?.map((uj, index) => (
            <View key={"ujP" + index.toString()}>
              <TouchableOpacity onPress={() => abrirResp(uj.id)} key={"uj" + index.toString()}>
                <Text style={stylesUso.txtlist} >{uj.question}</Text>
              </TouchableOpacity>
              <View style={uj.visible ? stylesUso.displayBlock : stylesUso.displayNone} key={"ujx" + index.toString()}>
                <Text style={stylesUso.txtlistA} >{uj.answer}</Text>
              </View>
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
}
const stylesUso = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    width: "100%",
    height: "300%",
    top: 20,
    padding: 1
  },
  scrollContainer: {
    alignItems: 'justify',
    backgroundColor: 'white',
  },
  txtlist: {
    fontSize: 20,
    fontStyle: 'italic'
  },
  txtlistA: {
      fontSize: 20,
    },
  displayBlock: {
    display: "block"
  },
  displayNone: {
    display: "none"
  },
  inputBus: {
    height: 40,
    width: "80%",
    borderWidth: 1,
    marginLeft: 15,
    marginTop: 15,
    marginRight: 15,
    marginBottom: 30,
    fontSize: 30,
    fontStyle: 'italic'
  },
})

export default Uso
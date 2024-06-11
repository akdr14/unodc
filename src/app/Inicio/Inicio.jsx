import React, { useState } from "react";
import { TagCloud } from 'react-tagcloud/rn';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const Inicio = () => {
  const navigation = useNavigation();
  //useNavigation es un hook o gancho que da acceso al objeto
  const [txtBus, setTxtBus] = useState('');
  //Nube de palabras
  const data = [
    { value: '07042', count: 35 },
    { value: '02032', count: 25 },
    { value: '08041', count: 20 },
    { value: '04014', count: 30 },
    { value: '07031', count: 15 },
    { value: '0601', count: 18 },
    { value: '0101', count: 10 },
    { value: '0302', count: 30 },
    { value: '090322', count: 8 },
    { value: '090112', count: 20 },
  ]

  //opc. Es un parámetro que recibe desde App.js
  const abrirTema = (opc) => {
    navigation.navigate(opc)
  }
  return (
    <View style={stylesInicio.vieInicioP}>
      <View style={stylesInicio.vieInicio}>
        <View><Text>Imagen</Text></View>
        <View style={stylesInicio.vieTag}>
          <TagCloud
            minSize={12}
            maxSize={35}
            tags={data}
          />
        </View>
      </View>
      <View style={stylesInicio.vieBus}>
        <TextInput
          style={stylesInicio.inputBus}
          setTxtBus={setTxtBus}
          value={txtBus}
          placeholder=" Búsqueda"
        />
        <View><Text>Imagen</Text></View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={stylesInicio.vieInicio2}>
          <TouchableOpacity onPress={() => abrirTema('Uso')} style={stylesInicio.tema01}>
            <View>
              <Text style={stylesInicio.titTemas}>01{"\n"}</Text>
              <Text style={stylesInicio.titTemas2}>Uso</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => abrirTema('Delitos')} style={stylesInicio.tema02}>
            <View style={stylesInicio.tema02}>
              <Text style={stylesInicio.titTemas}>02{"\n"}</Text>
              <Text style={stylesInicio.titTemas2}>Delitos</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => abrirTema('Etiquetas')} style={stylesInicio.tema03}>
            <View style={stylesInicio.tema03}>
              <Text style={stylesInicio.titTemas}>03{"\n"}</Text>
              <Text style={stylesInicio.titTemas2}>Etiquetas</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => abrirTema('Mapeo')} style={stylesInicio.tema04}>
            <View style={stylesInicio.tema04}>
              <Text style={stylesInicio.titTemas}>04{"\n"}</Text>
              <Text style={stylesInicio.titTemas2}>Mapeo</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={stylesInicio.vieInicio3}>
          <TouchableOpacity onPress={() => abrirTema('Materiales')} style={stylesInicio.tema05}>
            <View style={stylesInicio.tema05}>
              <Text style={stylesInicio.titTemas}>05{"\n"}</Text>
              <Text style={stylesInicio.titTemas2}>Materiales</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => abrirTema('Paises')} style={stylesInicio.tema06}>
            <View style={stylesInicio.tema06}>
              <Text style={stylesInicio.titTemas}>06{"\n"}</Text>
              <Text style={stylesInicio.titTemas2}>Países</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => abrirTema('Talleres')} style={stylesInicio.tema07}>
            <View style={stylesInicio.tema07}>
              <Text style={stylesInicio.titTemas}>07{"\n"}</Text>
              <Text style={stylesInicio.titTemas2}>Talleres</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => abrirTema('Contacto')} style={stylesInicio.tema08}>
            <View style={stylesInicio.tema08}>
              <Text style={stylesInicio.titTemas}>08{"\n"}</Text>
              <Text style={stylesInicio.titTemas2}>Contacto</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const stylesInicio = StyleSheet.create({
  vieInicioP: {
    borderWidth: 0,
    height: "150%"
  },
  vieInicio: {
    width: "90%",
    flexDirection: 'row',
    top: 20
  },
  vieBus: {
    width: "90%",
    flexDirection: 'row',
    marginTop: 20
  },
  vieInicio2: {
    width: "90%",
    flexDirection: 'row',
    flex: 1,
    borderWidth: 0,
  },
  vieInicio3: {
    width: "90%",
    flexDirection: 'row',
    flex: 1,
    borderWidth: 0,
    top: -40
  },
  vieTag: {
    textAlign: "right"
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
  tema01: {
    width: "25%",
    height: "100%",
    marginLeft: 10,
    backgroundColor: "#A0B23E",
    position: "relative"
  },
  tema02: {
    width: "25%",
    height: "80%",
    marginLeft: 10,
    backgroundColor: "#4A817B"
  },
  tema03: {
    width: "25%",
    height: "70%",
    marginLeft: 10,
    backgroundColor: "#2A6CA4"
  },
  tema04: {
    width: "25%",
    height: "70%",
    marginLeft: 10,
    backgroundColor: "#5A2A78"
  },
  tema05: {
    width: "25%",
    height: "70%",
    marginLeft: 10,
    backgroundColor: "#8E2A55"
  },
  tema06: {
    width: "25%",
    height: "70%",
    marginLeft: 10,
    backgroundColor: "#A22541"
  },
  tema07: {
    width: "25%",
    height: "70%",
    marginLeft: 10,
    backgroundColor: "#B86638"
  },
  tema08: {
    width: "25%",
    height: "70%",
    marginLeft: 10,
    backgroundColor: "#D7B339"
  },
  titTemas: {
    fontSize: 25,
    color: "#ffffff",
    borderWidth: 0,
    height: 38,
    width: 100
  },
  titTemas2: {
    fontSize: 18,
    color: "#ffffff",
    height: 38,
    width: 100,
    textAlignVertical: 'top'
  }
})
export default Inicio
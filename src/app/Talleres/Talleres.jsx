import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Encabezado from '../Encabezado/Encabezado';
import Pie from '../Pie/Pie';


const Talleres=()=> {
  return (
    <View>
<View style={stylesEnc.enc}><Encabezado /></View>
      <View style={stylesEnc.lineEnc}></View>
      <View style={stylesEnc.pie}><Pie /></View>
</View>
  );
}

 const stylesEnc = StyleSheet.create({
   enc: {
     //flex: 1
   },
   con: {
     //flex: 2,
     //top: -120
   },
   pie: {
     bottom: 0,
     top: 150
   },
   container: {
     //flex: 1,
     backgroundColor: '#fff',
     //alignItems: 'center',
     //justifyContent: 'center',
     width: "100%"
   },
 })


export default Talleres

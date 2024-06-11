import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Encabezado=()=> {
  return (
    <View>
      <Image style={stylesEnc.imgEnc}
      source={require('../../shared/images/logo/es/iccs-es.logo.png')} />
      <View style={stylesEnc.lineEnc}></View>
    </View>
  );
}
  const stylesEnc = StyleSheet.create({
    imgEnc:{
      width: '100%',
      height: '65%',
      resizeMode: 'contain'
    },
    lineEnc:{
      width:"100%", 
      height:"2%", 
      backgroundColor:"#4392C3",
    }
  })

export default Encabezado


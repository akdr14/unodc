import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const Contacto=()=> {
  return (
    <View>

      <Image style={stylesEnc.imgEnc}
      source={require('../../shared/images/materials/06-Nota-Informativa-ICCS-Homicidio-Intencional-Optica-ICCS-min.png')} />
      <View style={stylesEnc.lineEnc}></View>
      <Text>Contacto</Text>
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

export default Contacto

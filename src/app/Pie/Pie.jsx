import React from 'react';
import { StyleSheet, View, Image} from 'react-native';

const Pie=()=> {
  return (
    <View style={stylesPie.viePie}>
      <Image  style={stylesPie.imgPie}
      source={require('../../shared/images/logo/es/unodc-es.logo.png')} />
    </View>
  );
}
  const stylesPie = StyleSheet.create({
    imgPie:{
      width: '100%',
      height: '100%',
      resizeMode: 'contain'
    },
    viePie:{
      borderWidth:0,
      height:"30%"
    }
    
  })

export default Pie
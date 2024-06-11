import React, { useEffect, useState } from 'react';

import Encabezado from '../Encabezado/Encabezado';
import Pie from '../Pie/Pie';
import Inicio from '../Inicio/Inicio';
import Uso from '../Uso/Uso';
import Materiales from '../Materiales/Materiales';
//import Delitos from '../Delitos/Delitos';

import { StyleSheet, View, Text } from 'react-native';


const Principal = ({ route }) => {
  //const { opc } = route.params;
  const [paramopc, setparamOpc] = useState("");
  useEffect(() => {
    setparamOpc(route.params.opc);
  }, []);


  return (
    <View style={stylesPrin.container}>
      {/* <Text>opc: {paramopc}</Text>  */}
      <View style={stylesPrin.enc}><Encabezado /></View>
      {paramopc === "P" ?
        <View style={stylesPrin.con} >
          <Inicio />
        </View>
        :
        paramopc === "U" ?
          <View style={stylesPrin.con}>
            <Uso />
          </View>
          :
          paramopc === "D" ?
            <View style={stylesPrin.con}>
              <Delitos />
            </View>
            :
            paramopc === "E" ?
              <View style={stylesPrin.con}>
                <Accordian />
              </View>
              :

              paramopc === "MP" ?
                <View style={stylesPrin.con}>
                  <Mapeo />
                </View>
                :
                paramopc === "M" ?
                  <View style={stylesPrin.con}>
                    <Materiales />
                  </View>
                  : null
      }
      {/*       <View style={stylesPrin.con}><Contenido param= {paramopc}/></View>
 */}
      <View style={stylesPrin.pie}><Pie /></View>
    </View>
  );
}
const stylesPrin = StyleSheet.create({
  enc: {
    flex: 1
  },
  con: {
    flex: 2,
    top: -120
  },
  pie: {
    bottom: 0,
    top: 150
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    width: "100%"
  },
})

export default Principal
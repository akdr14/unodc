import { StyleSheet, View, Image, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import DM from "./../../shared/translations/es/downloadable-materials.es";
import React, { useState, useEffect } from 'react';
const img03 = require("./../../shared/images/materials/03-ICCS_English_2016_web-min.png")
const img02 = require("./../../shared/images/materials/02-ICCS_Folleto_ESP_min.png")
const img01 = require("./../../shared/images/materials/01Gender_and_the_ICCS-min.png")
const img04 = require("./../../shared/images/materials/04-ICCS-Flyer-NEW-ENG-A4-min.png")
const img05 = require("./../../shared/images/materials/05-ICCS-Preliminary-Questions-min.png")
const img06 = require("./../../shared/images/materials/06-Nota-Informativa-ICCS-Homicidio-Intencional-Optica-ICCS-min.png")
const img07 = require("./../../shared/images/materials/07-Nota-Informativa-ICCS-Midiendo-la-violencia-contra-las-mujeres-min.png")
const img08 = require("./../../shared/images/materials/08-Unlawful_killings_conflict_situations_ICCS-min.png")


const Materiales = () => {
  const [DMjson, setDMJson] = useState([]);
  const [txtBus, setTxtBus] = useState('');
  useEffect(() => {
    setDMJson(DM);
  }, []);
  const abrirResp = (itemid) => {
    let DMjsonTemp = [...DMjson];
    let indJson = DMjsonTemp.findIndex((ij) => ij.id === itemid);
    if (indJson > -1) {
      DMjsonTemp[indJson].visible = !DMjsonTemp[indJson].visible;
    }
    setDMJson(DMjsonTemp);
  }
  return (

    <View style={stylesEnc.container}>
    <Text style={{backgroundColor:"#56070C", color:"#FFFFFF",fontSize: 30,  fontWeight: 'bold'}}>05 Materiales de consulta</Text>
      <TextInput
        style={stylesEnc.inputBus}
        setTxtBus={setTxtBus}
        value={txtBus}
        placeholder=" Búsqueda"
      />
      {/* <Text>json: {JSON.stringify(usojson)}</Text> */}
        <Image  style={{
                   width: 100,
                   height: 100,
                    shadowColor: "black",
                     shadowOffset: { height: 2},
                        shadowOpacity: 0.3,
                   //resizeMode: 'contain',
                 }}
                  source={img03} />
                    <Image  style={{
                                     width: 100,
                                     height: 100,
                                      shadowColor: "black",
                                       shadowOffset: { height: 2},
                                          shadowOpacity: 0.3,
                                     //resizeMode: 'contain',
                                   }}
                                    source={img02} />
                                     <Image  style={{
                                                                         width: 100,
                                                                         height: 100,
                                                                          shadowColor: "black",
                                                                           shadowOffset: { height: 2},
                                                                              shadowOpacity: 0.3,
                                                                         //resizeMode: 'contain',
                                                                       }}
                                                                        source={img01} />
      <ScrollView
        contentContainerStyle={stylesEnc.scrollContainer}>
        {
          DMjson?.map((uj, index) => (

            <View key={"ujP" + index.toString()}>
                <Text style={stylesEnc.txtlist} >{uj.title}</Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
}
  const stylesEnc = StyleSheet.create({
    container: {
      //flex: 1,
      backgroundColor: '#fff',
      //alignItems: 'center',
      //justifyContent: 'center',
      //width: "100%",
      //height: "300%",
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


export default Materiales

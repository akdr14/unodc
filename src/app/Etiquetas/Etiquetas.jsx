import { View, TouchableOpacity, StyleSheet, StatusBar, Text, TextInput, ScrollView } from "react-native";
//import { Colors } from './Colors';

import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
//npm i @expo/vector-icons
//import Icon from "react-native-vector-icons/MaterialIcons";
//  <AntDesign name={isPublicOpen ? 'up': 'down'} size={20} color="black"/>
import Encabezado from '../Encabezado/Encabezado';
import Pie from '../Pie/Pie';
import Inicio from '../Inicio/Inicio';

import Usojson from "./../../shared/translations/variables.es.json";

//   <TouchableOpacity onPress={()=>abrirResp(uj.id=='DH')} key={"uj" + index.toString()}>
const Etiquetas = () => {
   const [usojson, setUsoJson] = useState([]);
   const [txtBus, setTxtBus] = useState('');

   const [isPublicOpen, setPublicOpen] = useState(false);
   const [isPrivateOpen, setPrivateOpen] = useState(false);

   useEffect(() => {
      setUsoJson(Usojson);
   }, []);
   const abrirResp = (itemid) => {

      if (itemid == 'DH') {
      }
      let usojsonTemp = [...usojson];
      let indJson = usojsonTemp.findIndex((ij) => ij.id === itemid);
      if (indJson > -1) {
         usojsonTemp[indJson].visible = !usojsonTemp[indJson].visible;
      }
      setUsoJson(usojsonTemp);
   }
   const togglePublic = () => {
      setPublicOpen(!isPublicOpen)
   }

   const [text, onChangeText] = React.useState('Useless Text');

   return (
      <View style={styles.container}>
      <Text style={{backgroundColor:"#2A6CA4", color:"#FFFFFF",fontSize: 25}}>03 Etiquetas o variables de desagregación</Text>
         <TextInput
            style={styles.inputBus}
            onChangeText={onChangeText}
            value={txtBus}
            placeholder=" Búsqueda"
         />
         {/* <Text>json: {JSON.stringify(usojson)}</Text> */}
         <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
               <TouchableOpacity style={styles.card} onPress={togglePublic}>
                  <Text style={styles.titTema1}>DESAGREGACIONES POR HECHO</Text>
                  <View>
                  </View>
               </TouchableOpacity>
               {isPublicOpen && (
                  <View style={styles.cardContent}>
                     <Text style={styles.titsubTema1} >At - Tentativa/acto consumado</Text>
                     <Text style={styles.titsubTema1}>SiC - Contexto situacional</Text>
                     <Text style={styles.titsubTema1}>Geo - Ubicación geográfica del delito</Text>
                     <Text style={styles.titsubTema1}>Rep - Denuncia presentada por</Text>
                     <Text style={styles.titsubTema1}>DaT - Fecha y hora</Text>
                     <Text style={styles.titsubTema1}>We - Tipo de arma utilizada</Text>
                     <Text style={styles.titsubTema1}>Lo - Tipo de lugarl</Text>
                     <Text style={styles.titsubTema1}>Mot - Motivación</Text>
                     <Text style={styles.titsubTema1}>Cy - Acto relacionado con la ciberdelincuencia</Text>
                  </View>
               )}
            </View>
            <View style={styles.container}>
               <TouchableOpacity style={styles.card} onPress={togglePublic}>
                  <Text style={styles.titTema2}>DESAGREGACIONES POR VÍCTIMA</Text>
                  <View>
                  </View>
               </TouchableOpacity>
               {isPublicOpen && (
                  <View style={styles.cardContent}>
                     <Text style={styles.titsubTema2} >Sexo de la víctima</Text>
                     <Text style={styles.titsubTema2}>STV - Edad legal de la víctima</Text>
                     <Text style={styles.titsubTema2}>Cit - Ciudadanía</Text>
                     <Text style={styles.titsubTema2}>LS - Condición jurídica de la víctima</Text>
                     <Text style={styles.titsubTema2}>AV - Edad de la víctima</Text>
                     <Text style={styles.titsubTema2}>ViP - Relación entre la víctima y el autor</Text>
                     <Text style={styles.titsubTema2}>Int - La víctima se encontraba bajo el efecto de drogas sujetas a fiscalización u otras sustancias psicoactivas.</Text>
                     <Text style={styles.titsubTema2}>ES - Sector económico</Text>
                  </View>
               )}
            </View>
            <View style={styles.container}>
               <TouchableOpacity style={styles.card} onPress={togglePublic}>
                  <Text style={styles.titTema3}>DESAGREGACIONES POR AUTOR</Text>
                  <View>
                  </View>
               </TouchableOpacity>
               {isPublicOpen && (
                  <View style={styles.cardContent}>
                     <Text style={styles.titsubTema3} >SP - Sexo del autor</Text>
                     <Text style={styles.titsubTema3}>STP - Edad legal de autor</Text>
                     <Text style={styles.titsubTema3}>Cit - Ciudadanía</Text>
                     <Text style={styles.titsubTema3}>LS - Condición jurídica de autor</Text>
                     <Text style={styles.titsubTema3}>Rec - Reincidente</Text>
                     <Text style={styles.titsubTema3}>AP - Edad del autor</Text>
                     <Text style={styles.titsubTema3}>ViP - Relación entre la v¡ctima y el autor</Text>
                     <Text style={styles.titsubTema3}>Int - El autor se encontraba bajo el efectos de drogas sujetas a fiscalización u otras sustancias psicoactivas</Text>
                     <Text style={styles.titsubTema3}>EAST - Actividad económica del autor</Text>
                  </View>
               )}
            </View>
            <View style={styles.container}>
               <TouchableOpacity style={styles.card} onPress={togglePublic}>
                  <Text style={styles.titTema4}>DESCRIPCIONES/INCLUSIONES DE LOS DATOS</Text>
                  <View>
                  </View>
               </TouchableOpacity>
               {isPublicOpen && (
                  <View style={styles.cardContent}>
                     <Text style={styles.titsubTema4} >Th - Incluye amenazas</Text>
                     <Text style={styles.titsubTema4}>AA - Incluye ayuda/incitación/participación como auxiliar</Text>
                     <Text style={styles.titsubTema4}>Ac - Incluye complicidad</Text>
                     <Text style={styles.titsubTema4}>CP - Incluye conspiración/planificación</Text>
                     <Text style={styles.titsubTema4}>In - Incluye incitación a cometer delitos</Text>
                  </View>
               )}
            </View>
         </ScrollView>
      </View>
   );
}



const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 0.5,
      backgroundColor: 'white',
   },
   scrollContainer: {
      alignItems: 'justify',
      backgroundColor: 'white',
   },
   card: {
      backgroundColor: "#f0f7f7",
      //borderRadius:8,
      //marginBottom:14,
      //flexDirection: 'row',
      //justifyContent: "space-between"
   },
   cardHeader: {
      flexDirection: "row",
      justifyContent: 'space-between'
   },
   titTema1: {
      backgroundColor: "#2A6CA4",
      color: "#FFFFFF",
   },
   titTema2: {
      backgroundColor: "#A22541",
      color: "#FFFFFF",
   },
   titTema4: {
      backgroundColor: "#A817B",
      color: "#FFFFFF",
   },
   titTema3: {
      backgroundColor: "#B86638",
      color: "#FFFFFF",
   },
   titsubTema1: {
      backgroundColor: "#71a0c5",
      color: "#FFFFFF",
   },
   titsubTema2: {
      backgroundColor: "#af8ea7",
      color: "#FFFFFF",
   },
   titsubTema3: {
      backgroundColor: "#639a94",
      color: "#FFFFFF",
   },
   titsubTema4: {
      backgroundColor: "#D4A387",
      color: "#FFFFFF",
   },
   titTema2: {
      backgroundColor: "#8E2A55",
      color: "#FFFFFF",
   },
   titTema3: {
      backgroundColor: "#4A817B",
      color: "#FFFFFF",
   },
   titTema4: {
      backgroundColor: "#B86638",
      color: "#FFFFFF",
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


export default Etiquetas
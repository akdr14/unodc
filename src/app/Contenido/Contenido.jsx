import React,{useEffect,useState} from 'react';
import {StyleSheet, View,Text } from 'react-native';
import Inicio from "./../Inicio/Inicio";
import Uso from "./../Uso/Uso";

const Contenido=(param)=> {
    const [paramopc,setparamOpc]=useState("");
    useEffect(() => {
        setparamOpc(param.param);
    }, []);  
  return ( 
    <View>
         <Text>jsonContenido:{JSON.stringify(paramopc)}</Text> 
        {paramopc==="P"?
            <View >
                <Inicio /> 
            </View>
        :
            paramopc==="U"?
                <View>
                    <Uso />
                </View>
            :null
        }
   </View>
    
    
  );
}
const stylesPrin = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: 'center',
      //justifyContent: 'center',
      width:"100%"
    },
})

export default Contenido
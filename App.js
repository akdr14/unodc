import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Principal  from "./src/app/Principal/Principal.jsx";
import Delitos  from "./src/app/delitos/Delitos.tsx";
import Etiquetas  from "./src/app/Etiquetas/Etiquetas.jsx";
import Mapeo  from "./src/app/Mapeo/Mapeo.jsx";
import Paises  from "./src/app/Paises/Paises.jsx";
import Talleres  from "./src/app/Talleres/Talleres.jsx";
import Contacto  from "./src/app/Contacto/Contacto.jsx";

//NavigationContainer. Es responsable de administrar el estado de la aplicación y vincular el navegador de nivel superior al entorno de la aplicación.NavigationContainer
//Screen. Los componentes se utilizan para configurar varios aspectos de las pantallas dentro del navegador.

export default function App() {
  const Stack = createNativeStackNavigator(); //Stack contains Screen & Navigator properties

  //Después de crear el navegador, se pueden utilizar como hijos del componente:Navigator

  //Dudas porque archivos .jsx?
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen name="Principal" component={Principal} initialParams={{opc:"P"}} />
        <Stack.Screen name="Uso" component={Principal}  initialParams={{opc:"U"}} />
        <Stack.Screen name="Materiales" component={Principal}  initialParams={{opc:"M"}} />
        <Stack.Screen name="Delitos" component={Delitos}  initialParams={{opc:"D"}} />
        <Stack.Screen name="Etiquetas" component={Etiquetas}  initialParams={{opc:"E"}} />
        <Stack.Screen name="Mapeo" component={Mapeo}  initialParams={{opc:"MP"}} />
        <Stack.Screen name="Paises" component={Paises}  initialParams={{opc:"P"}} />
        <Stack.Screen name="Talleres" component={Talleres}  initialParams={{opc:"T"}} />
        <Stack.Screen name="Contacto" component={Contacto}  initialParams={{opc:"C"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
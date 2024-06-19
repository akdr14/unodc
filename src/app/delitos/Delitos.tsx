import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import data from "../../shared/translations/crimes.es.json";
import IDelito from "../../models/IDelito";
import { MyAccordion } from "./components/Accordion";

const Delitos = (props: string) => {

 const [json,setJson] = useState(data);
 const [excludedParents,setExcludedParents] = useState(data);
  //-Obtiene los hijos de cada padre.
  const handleGetAllChildren = () =>{
        debugger;
      let children = [];
      for(let i = 0 ; i<data.length;i++){
          if(data[i].relations[0] && data[i].relations[0].length>0)
          for(let z=0;z<data[i].relations[0].relatedPostsIds.length;z++){
            children.push(data[i].relations[0].relatedPostsIds[z]); //ids de los hijos
             debugger;
          }
      }
      return children;
  }

  const handleRenderAccordion = () => {
    const accordions = data.map((delito: IDelito) => {
     debugger;
    const excludedParents =  handleGetAllChildren(); //handleGetAllChildren -> ids de los hijos.
    const title =  delito.title;
      let items = [];
      delito.relations.map((relations: Relation) => {
        //if(!excludedParents.includes(relations.id))  {
        if(!excludedParents.includes(relations.relatedPostsIds))  {

    debugger;
            console.log("excludedParents"+ excludedParents);
            console.log("relations.relatedPostsIds"+ relations.relatedPostsIds);
            const accordionItems = relations.relatedPostsIds.map((relatedPostId: string) => {
                childPost = data.find(p => p.id === relatedPostId);
                if(childPost){
                    items.push(childPost.title);
                }
              }
            );
        }
      });

       return (
               <MyAccordion
               title={title}
               items={items}
               />
       );
    });

    return accordions;
  };

  return (
    <ScrollView>
      <View>{handleRenderAccordion()}</View>
    </ScrollView>
  );
};

export default Delitos;

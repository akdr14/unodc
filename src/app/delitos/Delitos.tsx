import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import data from "../../shared/translations/crimes.es.json";
import IDelito from "../../models/IDelito";
import { MyAccordion } from "./components/Accordion";

const Delitos = (props) => {
  useEffect(() => {
    handleRenderAccordion();
  }, []);

  const handleRenderAccordion = () => {
    const accordions = data.map((delito: IDelito) => {
      let childPost = [];
      //Obtiene lista de Hijos
      delito.relations.map((relations: Relation) => {
        let childList = [];
        const accordionItems = relations.relatedPostsIds.map(
          (relatedPostId: string) => {
            childPost = data.find((p) => p.id === relatedPostId);
            childList.push(childPost.title);
            //console.log(childPost.title);
            console.log(childList);
            console.log("delito.title" + delito.title);
          }
        );
      });

      return (
        <MyAccordion
          title={delito.title}
          type={delito.type}
          items={childList}
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

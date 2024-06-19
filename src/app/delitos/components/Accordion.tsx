import React , {useState,useEffect} from 'react';
import { List } from 'react-native-paper';

interface IAccordionProps{
    id:string;
    title:string;
    //items:Array<string>;
    items:[];
}

//export const MyAccordion = (props:IAccordionProps) => {
export const MyAccordion = (props) => {
    const [expanded,setExpanded] = useState(false);
    const {id,title,items} = props;

    //props.title = "New title";

    useEffect(()=>{

    },[items])

    const handlePress = ()=>{
        setExpanded(!expanded);
    }

    const handleRenderItems = ()=> {
        let accordionItems;
        if(items){
            accordionItems = items.map((item:string) => {
                return  <List.Item title={item}/>
            });
        }
        return accordionItems;
    }

    return (
       <List.Accordion
            expanded = {expanded}
            onPress={handlePress}
            title={title}
       >
        {handleRenderItems()}
        </List.Accordion>
    )
}



import React,{useState} from "react";

function Definition(props){

    const [define,setDefine]=useState()
  
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+props.addText)
    .then(response => response.json())
    .then(jsonResponse =>{
      if(jsonResponse[0]===undefined){
        return setDefine("")
      }else{
        return setDefine(jsonResponse[0].meanings[0].definitions[0].definition)
      }
    })
     

    return <div className="definition">
             <h2 className="displayHead">Definition</h2>
             <div className="define">
               <p>{define}</p>
             </div>
           </div>
} 

export default Definition;
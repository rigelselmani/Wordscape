import React,{useState} from "react";

function Definition(props){

    const [define,setDefine]=useState()

    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+props.addText)
    .then(response => response.json())
    .then(jsonResponse =>{
      const define =jsonResponse[0].meanings[0].definitions[0].definition
      setDefine(define)
    })
     

    return <div className="definition">
             <h2>Definition</h2>
             <div className="textSpace">
               <p>{define}</p>
             </div>
           </div>
} 

export default Definition;
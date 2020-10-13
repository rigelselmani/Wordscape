import React, { useState } from "react";

function Pronunce(props){

  const [writenP,setWritenP]=useState()
  const [pronounce,setPronounce]=useState()
  fetch("https://www.dictionaryapi.com/api/v3/references/collegiate/json/"+props.addWord+"?key=1f40dde8-50d6-4eb6-9168-6f465c469eb9")
  .then(response=> response.json())
  .then(jsonResponse =>{
  
   var writtenPron= jsonResponse[0].hwi.prs[0].mw;
   var file = jsonResponse[0].hwi.prs[0].sound.audio;
   // Logic for subdirectory in order to create url
   var uniChar = file.slice(0,1);
   var biChar = file.slice(0,2);
   var triChar = file.slice(0,3);
   var subDir = "";

   if (triChar === "bix") {
       subDir = "bix";
   } else if (biChar === "gg") {
       subDir = "gg";
   } else if (alphabetic(uniChar) === true) {
       subDir = uniChar;
   } else {
       subDir = "number";
   }

   function alphabetic(inputtxt) {
    var letters = /^[a-zA-Z]+$/;
    if ((inputtxt.match(letters))) {
        return true;
    } else {
        return false; 
    }
}
   var url = "https://media.merriam-webster.com/soundc11/" + subDir + "/" + file + ".wav";
  
  setWritenP(writtenPron)
  setPronounce(url)
  })

    return <div className="definition">
             <h2>Sound • word</h2>
             <div className="space">
                <p>{writenP}</p>
                <audio id="embed_player" src={pronounce} autostart="false" controls="true"></audio>
             </div>
           </div>
}

export default Pronunce;
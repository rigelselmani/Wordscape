import React, { useState } from "react";

function Pronunce(props){

  const [pronounce,setPronounce]=useState([]);
  

  fetch("https://www.dictionaryapi.com/api/v3/references/collegiate/json/"+props.addWord+"?key=1f40dde8-50d6-4eb6-9168-6f465c469eb9")
  .then(response=> response.json())
  .then(jsonResponse =>{
    // Populate the array
    // For each item in the response array
    jsonResponse.map((word) => {
       // Skip if the item doesn't have a prs parameter
      if(word.hwi.prs===undefined){
      // If it has a prs parameter, then get the pos (fl) and prs
      } else{
        var flValue = word.fl;
        var prsArray = word.hwi.prs;
       // For each item in the prs array
       prsArray.map((item)=>{
        var wordArray = [];
         if(item.sound ===undefined){
         // Skip here if undefined
         }else if((pronounce.toString()).includes(item.sound.audio) === true){
        }else{
        // If it has a sound parameter, grab the written pronunciation and audio file name, and along with flValue, send to myArray
          var writenPron = item.mw;
          var audioPron = item.sound.audio;
        // Push the fl (pos), mw (written pronunciation) and audio (sound file name) into an array
          wordArray.push(flValue,writenPron,audioPron);
           setPronounce(wordArray)
        }// End of nested if statement

       })// End of nested for statement
    }// End of first if statement
  })// End of for response.length statement
})
pronounce.map((item)=>{
  // var pos = item[0];
  // var pron = item[1];
  var file = item[2];
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
   // Function to check letters
  function alphabetic(inputtxt) {
    var letters = /^[a-zA-Z]+$/;
    if ((inputtxt.match(letters))) {
        return true;
    } else {
        return false; 
    }
  }
  var url = "https://media.merriam-webster.com/soundc11/" + subDir + "/" + file + ".wav";
  
  console.log(url)

})
    return <div className="definition">
             <h2>Sound • word</h2>
             <div className="space">
          
             </div>
           </div>
}

export default Pronunce;
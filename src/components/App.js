import React, { useState } from 'react';
import Header from "./Header"
import Search from "./Search";
import Definition from "./Definition";
import Image from "./Image";

function App(props) {
  
  const [text,setText]=useState();
    
  function handleWord(words){
     setText(words)
  }
  return <div>
            <Header />
            <Search onAdd={handleWord}/>
            <Definition addText={text}/>
            <Image />
         </div>
}

export default App;

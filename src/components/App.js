import React, { useState } from 'react';
import Header from "./Header"
import Search from "./Search";
import Definition from "./Definition"

function App(props) {
  
  const [text,setText]=useState();
    
  function handleWord(words){
     setText(words)
  }
  return <div>
            <Header />
            <Search onAdd={handleWord}/>
            <Definition addText={text}/>
         </div>
}

export default App;

import React, { useState } from 'react';
import Header from "./Header"
import Search from "./Search";
import Definition from "./Definition";
import Image from "./Image";
import Pronunce from "./Pronunciation";

function AllSearchPages(){
    const [text,setText]=useState();
    
  function handleWord(words){
     setText(words)
  }

    return <div>
                <Header />
                    <Search onAdd={handleWord}/>
                  <div className="container">
                    <Definition addText={text}/>
                    <Image addImg={text}/>
                    <Pronunce addWord={text}/>
                  </div>        
            </div>
}

export default AllSearchPages;
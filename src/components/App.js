import React from 'react';
import Header from "./Header"
import Search from "./Search";
import Definition from "./Definition"

function App() {
  

  function handleWord(words){
     console.log(words)
  }
  return <div>
            <Header />
            <Search onAdd={handleWord}/>
            <Definition />
         </div>
}

export default App;

import React, { useState } from 'react';
import Header from "./partials/Header"
import Search from "./search/Search";
import Definition from "./search/Definition";
import Image from "./search/Image";
import Pronunce from "./search/Pronunciation";
import Bank from "./save/Wordbank";
import Practice from "./save/Practice";
import {BrowserRouter as Router,Route,Switch  } from "react-router-dom";

function App() {
  
  const [text,setText]=useState();
    
  function handleWord(words){
     setText(words)
  }
  return ( <Router>
            <div>
            <Header />
                <Route path="/" onAdd={handleWord} exact  component={Search}/>
              <div className="container">
                <Route path="/" addText={text} exact component={Definition}/>
                <Route path="/" addImg={text} exact component={Image}/>
                <Route path="/" addWord={text} exact component={Pronunce}/>
              </div>
             <Switch>
              <Route path="/bank" exact component={Bank} />
              <Route path="/pract" exact component={Practice} />
             </Switch>
          </div>
          </Router>
          )
}

export default App;

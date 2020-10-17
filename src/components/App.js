import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AllSearchPages from './search/AllSearchPages';
import WordBank from "./wordbank/Wordbank";


function App() {
  
  return (  <Router>
              <Switch>
                <Route path="/" exact component={AllSearchPages} />
                <Route path="/wordbank" exact component={WordBank} />
              </Switch>
            </Router>
         ) 
}

export default App;

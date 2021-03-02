
import {Router,Route} from 'wouter'
import React from "react";
import Main from './pages/Main/Main'

function App() {
  return (
    <Router>
        <Route path="/" component={Main} />
    </Router>
  );
}

export default App;

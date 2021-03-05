import 'normalize.css'
import {Router,Route} from 'wouter'
import React from "react";
import Main from './pages/Main/Main'
import Sandbox from './components/modal/Sandbox'

function App() {
  return (
    <Router>
        <Route path="/" component={Main} />
        <Route path="/test" component={Sandbox} />
    </Router>
  );
}

export default App;

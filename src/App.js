import 'normalize.css'
import {Router,Route} from 'wouter'
import React from "react";
import Main from './pages/Main/Main'
import Sandbox from './components/modal/Sandbox'
import Menu from './pages/Menu/Menu'
import Cart from './pages/Cart/Cart'

function App() {
  return (
    <Router>
        <Route path="/" component={Main} />
        <Route path="/test" component={Sandbox} />
        <Route path="/menu" component={Menu} />
        <Route path="/cart" component={Cart} />
    </Router>
  );
}

export default App;

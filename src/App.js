import 'normalize.css'
import {Router,Route} from 'wouter'
import React,{useEffect} from "react";
import Main from './pages/Main/Main'
import Menu from './pages/Menu/Menu'
import Cart from './pages/Cart/Cart'
import main from './store/main'

function App() {

    useEffect(()=>{
        main.setSlidesCount(window.screen.width)
    },[])

    window.onresize=()=>{
        main.setSlidesCount(window.screen.width)
    }

    return (
        <Router>
            <Route path="/" component={Main} />
            <Route path="/menu" component={Menu} />
            <Route path="/cart" component={Cart} />
        </Router>
    );
}

export default App;

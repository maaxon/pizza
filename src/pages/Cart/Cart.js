import Navbar from "../../components/Navabar/Navbar";
import React from "react";
import classes from "./cart.module.scss"
import cart from "../../store/cart"
import {observer} from 'mobx-react-lite'
import {Times} from '@styled-icons/fa-solid/Times'

export default observer(function Cart() {

    return(
        <div >

            <Navbar scrollable={false} navClass={classes.navbar} />

            <div className={classes.cartWrapper}>
                <h1>YOUR CART</h1>
                <div className={classes.cartBody}>
                    {cart.cart.map(item=>{
                       return(
                           <div key={item.id} className={classes.cartItem}>
                              <div className={classes.productView}>
                                    <img src={item.img}/>
                                    <div className={classes.fonts}>
                                        <h4>{item.title}</h4>
                                        <p>{item.subtitle}</p>
                                    </div>
                              </div>
                               <div unselectable='on' className={classes.counter}>
                                    <span unselectable="on" onClick={()=>{cart.decrement(item.id)}}>-</span>
                                    <span unselectable="on" >{item.qty}</span>
                                    <span unselectable="on" onClick={()=>{cart.increment(item.id)}}>+</span>
                                </div>

                                <h4 className={classes.price}>{item.price*item.qty}$</h4>
                                <Times onClick={()=>{cart.deleteItem(item)}}/>
                            </div> )})}

               
                </div>
                <div>
                    <h3>TOTAL: ${cart.countPrice}</h3>
                </div>
            </div>
        </div>
    )
})
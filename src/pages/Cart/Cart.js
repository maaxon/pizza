import Navbar from "../../components/Navabar/Navbar";
import React from "react";
import classes from "./cart.module.scss"
import pizza from '../../misc/pizza.png'

export default function Cart() {



    return(
        <div >
            <Navbar scrollable={false} navClass={classes.navbar} />
            <div className={classes.cartWrapper}>
                <h1>YOUR CART</h1>
                <div className={classes.cartBody}>
                    <div className={classes.cartItem}>
                        <div className={classes.productView}>
                        <img src={pizza}/>
                        <h4>pizza</h4>
                        <p>cum</p>
                        </div>
                        <div className={classes.counter}></div>
                        <h4 className={classes.price}></h4>
                    </div>
                </div>
                <div className={classes.cartBottom}>
                    <h3>TOTAL:300$</h3>
                </div>

            </div>
        </div>
    )
}
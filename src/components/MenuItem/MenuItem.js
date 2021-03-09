import classes from "./MenuItem.module.scss";
import pricer from "../../misc/2021-02-25_215135-removebg-preview.png";
import React from "react";

export default function MenuItem({img,itemClass=''}){
    return(
        <div className={`${classes.item} ${itemClass}`}>
            <div className={classes.pricer} >
                <img  src={pricer} />
                <p>$30</p>
            </div>
            <img src={img}/>
            <h3>maks loh classic</h3>
            <p>tasty cum with love and cock</p>
        </div>
    )
}
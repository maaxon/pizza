import classes from "./MenuItem.module.scss";
import pricer from "../../misc/2021-02-25_215135-removebg-preview.png";
import React,{useState} from "react";
import modal from "../../store/modal"

export default function MenuItem({product,setOpen,itemClass=''}){
    const {img,title,subtitle,price} = product

    return(
        <div onClick={()=>{modal.setProduct(product);setOpen()}} className={`${classes.item} ${itemClass}`}>
            <div onClick={()=>false} className={classes.pricer} >
                <img  src={pricer} />
                <p>${price}</p>
            </div>
            <img  src={img}/>
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    )
}
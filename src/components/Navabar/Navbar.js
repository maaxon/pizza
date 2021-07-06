import React ,{useRef,useState} from "react";
import classes from "./navbar.module.scss"
import {Link} from "wouter"

export default function Navbar({scrollable=true,navClass}){


    const navbar = useRef(null);
    const [active,setActive] = useState('')

    if(scrollable){
        window.addEventListener('scroll', function(e) {
            if (!navbar.current) return
            //activate background if y coords > height of navbar
            if(window.scrollY > navbar.current.clientHeight){
                setActive(classes.active)
            }else {
                setActive(classes.disabled)
            }
        });
    }

    return(
        <nav ref={navbar}  className={`${classes.mainNav} ${active} ${navClass}`}>
            <Link href='/'><a>Eat Inc</a></Link>
            <Link href='/'><a className={classes.menuItem}>Home</a></Link>
            <Link href='/menu'><a className={classes.menuItem}>Menu</a></Link>
            <Link href='/cart'><a className={classes.menuItem}>Cart</a></Link>
        </nav>
    )
}
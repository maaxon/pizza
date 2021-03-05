import React ,{useRef,useState} from "react";
import classes from "./navbar.module.scss"

export default function Navbar(){

    const navbar = useRef(null);
    const [active,setActive] = useState('')
    window.addEventListener('scroll', function(e) {
        if(!navbar.current) return
        console.log(window.scrollY)
        console.log(navbar.current.clientHeight)
        if(window.scrollY > navbar.current.clientHeight){
            setActive(classes.active)
        }else {
            setActive(classes.disabled)
        }

    });

    return(
        <nav ref={navbar}  className={`${classes.mainNav} ${active}`}>
            <a>Eat Inc</a>
            <a className={classes.menuItem}>Home</a>
            <a className={classes.menuItem}>Menu</a>
            <input type="text" placeholder='Search'/>
        </nav>
    )
}
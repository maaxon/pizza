import pizza from '../../misc/pizza.png'
import pizza_banner from '../../misc/pizza_banner.jpg'
import wood_background from "../../misc/simple_background_texture_monochrome_wood-242670.jpg"
import React from "react";
import Navbar from "../../components/Navabar/Navbar"
import classes from "./menu.module.scss"
import MenuItem from "../../components/MenuItem/MenuItem";
import saladTab from "../../misc/saladTab.png"
import Modal from "../../components/modal/Modal"

export default function Menu() {



    return(
        <div >
            <div className={classes.image}>
                <Navbar  />
                <img src={pizza_banner} />
            </div>
            <div className={classes.contentWrapper}>
                <img className={classes.background} src={wood_background}/>

                <div className={classes.tabs}>
                    <div className={classes.tab}>
                    <img src={pizza}/>
                    <p>pizza</p>
                    </div>
                    <div className={classes.tab}>
                        <img src={pizza}/>
                        <p>drinks</p>
                    </div><div className={classes.tab}>
                    <img src={pizza}/>
                    <p>salads</p>
                </div>
                    <div className={classes.tab}>
                        <img src={pizza}/>
                        <p>desserts</p>
                    </div>

                </div>

                <div className={classes.content}>
                        <MenuItem itemClass={classes.menuItem} img={pizza} type={'slide'} />
                        <MenuItem itemClass={classes.menuItem} img={pizza} type={'slide'}/>
                        <MenuItem itemClass={classes.menuItem} img={pizza} type={'slide'}/>
                        <MenuItem itemClass={classes.menuItem} img={pizza} type={'slide'}/>
                        <MenuItem itemClass={classes.menuItem} img={pizza} type={'slide'} />
                </div>

            </div>
            
        </div>
    )
}

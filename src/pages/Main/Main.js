import pizza_banner from '../../misc/pizza_banner.jpg'
import wood_background from "../../misc/simple_background_texture_monochrome_wood-242670.jpg"
import classes from './main.module.scss'
import pricer from '../../misc/2021-02-25_215135-removebg-preview.png'
import Slider from '../../components/Slider/Slider'
import {AngleLeft} from '@styled-icons/fa-solid/AngleLeft'
import {AngleRight} from '@styled-icons/fa-solid/AngleRight'
import {Search} from '@styled-icons/fa-solid/Search'
import React from "react";
import Navbar from "../../components/Navabar/Navbar"
import moto from '../../misc/try_not_to_eat.png'
import { useLocation } from "wouter";
import pizza from '../../misc/pizza.png'
import MenuItem from "../../components/MenuItem/MenuItem";

export default function Main() {


    const [location, setLocation] = useLocation();

    return(
        <div >
            <div className={classes.image}>
                <Navbar  />
                <img src={pizza_banner} />
            </div>
            <div className={classes.contentWrapper}>
                <img src={wood_background}/>
                <img src={moto} className={classes.moto}/>
                <div className={classes.content}>

                    <Slider slides_count={3} style={{display: 'flex'}} >
                        <AngleLeft type={'left-arrow'}/>
                        <MenuItem img={pizza} type={'slide'} />
                        <MenuItem img={pizza} type={'slide'}/>
                        <MenuItem img={pizza} type={'slide'}/>
                        <MenuItem img={pizza} type={'slide'}/>
                        <MenuItem img={pizza} type={'slide'} />
                        <AngleRight type={'right-arrow'}/>
                    </Slider>
                </div>

                <button onClick={()=>{setLocation('/menu')}} className={classes.menuBtn}>Menu</button>
            </div>
        </div>
    )
}


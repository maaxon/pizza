import pizza_banner from './pizza_banner.jpg'
import wood_background from "./simple_background_texture_monochrome_wood-242670.jpg"
import pizza_item_1 from "./original_5554a89d40c08865448c21b1_5783cd3fe1950.jpg"
import classes from './main.module.scss'
import pricer from './2021-02-25_215135-removebg-preview.png'
import Slider from '../../components/Slider/Slider'
import {AngleLeft} from '@styled-icons/fa-solid/AngleLeft'
import {AngleRight} from '@styled-icons/fa-solid/AngleRight'
import {Search} from '@styled-icons/fa-solid/Search'
import React from "react";
import Navbar from "../../components/Navabar/Navbar"
import moto from './try_not_to_eat.png'
import pizza_item_2 from './bd570867.jpg'
import pizza_item_3 from './dark-wooden-boards-background_88281-3673.jpg'
import pizza_item_4 from './dark-wooden-boards-background_88281-3679.jpg'

export default function Main() {

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
                        <Item img={pizza_item_1} type={'slide'} />
                        <Item img={pizza_item_2} type={'slide'}/>
                        <Item img={pizza_item_3} type={'slide'}/>
                        <Item img={pizza_item_4} type={'slide'}/>
                        <Item img={pizza_item_2} type={'slide'} />
                        <AngleRight type={'right-arrow'}/>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

function Item({img}){
    return(
        <div className={classes.item}>
            <div className={classes.pricer} >
            <img  src={pricer} />
            <p>$30</p>
            </div>
            <img src={img}/>
            <h3>maks loh classic</h3>
        </div>
    )
}
import pizza_banner from '../../misc/pizza_banner.jpg'
import wood_background from "../../misc/main_background.jpg"
import classes from './main.module.scss'
import Slider from '../../components/Slider/Slider'
import React, {useState} from "react";
import Navbar from "../../components/Navabar/Navbar"
import moto from '../../misc/try_not_to_eat.png'
import { useLocation } from "wouter";
import MenuItem from "../../components/MenuItem/MenuItem";
import main from "../../store/main"
import modal from "../../store/modal"
import {observer} from 'mobx-react-lite'
import Modal from "../../components/modal/Modal";

export default observer(function Main() {

        const [location, setLocation] = useLocation();

        const [isModalOpen,setOpen]= useState(false)

        //close modal
        const onClose = () => {
            setOpen(false)
            modal.unsetModal()
        }

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
                    <Slider slides_count={main.slidesCount} style={{display: 'flex',width:'100%'}} >
                        {main.products.slice(0,5).map((product)=>{
                            return <MenuItem key={product.id} setOpen={()=>{setOpen(true)}} product={product} type={'slide'} />
                        })}
                    </Slider>
                </div>

                <button onClick={()=>{setLocation('/menu')}} className={classes.menuBtn}>Menu</button>
            </div>

            <Modal  onClose={onClose} isOpen={isModalOpen}/>
        </div>
    )
}
)

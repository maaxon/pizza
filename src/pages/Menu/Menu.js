import pizza_banner from '../../misc/pizza_banner.jpg'
import React,{useState} from "react";
import Navbar from "../../components/Navabar/Navbar"
import classes from "./menu.module.scss"
import MenuItem from "../../components/MenuItem/MenuItem";
import Modal from "../../components/modal/Modal"
import Tabs from "../../components/Tabs/Tabs"
import main from "../../store/main"
import {observer} from 'mobx-react-lite'
import modal from "../../store/modal";

export default observer(function Menu() {
    const [isModalOpen,setOpen]= useState(false)

    //close modal
    const onClose = () => {
        setOpen(false)
        modal.unsetModal()
    }

    function renderTabs() {
        const toggles =  main.categories.map(category=>{return {name: category.name,img:category.img} })

        const tabs = main.categories.map(category=>{
            return (
                <div type={'tab'} name={category.name} className={classes.content}>
                    {main.findByCategory(category.name).map(product=>{
                        return <MenuItem key={`item${product.id}`} setOpen={()=>{setOpen(true)}}
                                         itemClass={classes.menuItem} product={product} type={'tab'} />
                    })}
                </div>
            )
        })

        return {toggles,tabs}
    }

    const [tab,setTab] = useState('')

    return(
        <div >

            <div className={classes.image}>
                <Navbar  />
                <img src={pizza_banner} />
            </div>

            <div className={classes.contentWrapper}>
                <Tabs setTab={setTab} containerClass={classes.tabs}>
                    {renderTabs()}
                </Tabs>
                {tab}
            </div>
            <Modal product={main.product} onClose={onClose} isOpen={isModalOpen}/>
        </div>
    )
})


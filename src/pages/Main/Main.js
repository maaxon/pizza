import pizza_banner from './pizza_banner.jpg'
import wood_background from "./simple_background_texture_monochrome_wood-242670.jpg"
import pizza_item from "./original_5554a89d40c08865448c21b1_5783cd3fe1950.jpg"
import classes from './main.module.scss'
import pricer from './2021-02-25_215135-removebg-preview.png'
import Slider from '../../components/Slider/Slider'

export default function Main() {
    return(
        <>
            <div className={classes.image}>
                <nav className={classes.mainNav}>
                    <a>Eat Inc</a>
                    <a className={classes.a1}>Home</a>
                    <a className={classes.a2}>Menu</a>
                    <input type="text" placeholder="Search"/>
                </nav>
                <img src={pizza_banner} />
            </div>
            <div className={classes.contentWrapper}>
                <img src={wood_background}/>
                <div className={classes.content}>
                    <Slider slides_count={3} >
                        <p type={'left-arrow'}>left</p>
                        <Item type={'slide'} />
                        <Item type={'slide'}/>
                        <Item type={'slide'}/>
                        <input type={'slide'}/>
                        <p type={'right-arrow'}>right</p>
                    </Slider>
                </div>
            </div>
        </>
    )
}

function Item(){
    return(
        <div className={classes.item}>
            <div className={classes.pricer} >
            <img  src={pricer} />
            <p>$30</p>
            </div>
            <img src={pizza_item}/>
            <h3>maks loh classic</h3>
        </div>
    )
}
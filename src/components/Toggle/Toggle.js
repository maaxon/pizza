import classes from "../../pages/Menu/menu.module.scss";

export default function Toggle({name,onClick,active,img}){
    return(
        <div onClick={onClick} className={`${classes.tab} ${active === name ? classes.active:''}`}>
            <img src={img}/>
            <p>{name}</p>
        </div>
    )

}
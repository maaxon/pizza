import React, {useState} from "react";
import classes from "../modal/modal.module.scss";

export default function Select({children,containerClass}){
    const [active,setState] = useState(children[0].props.name);

    return(
        <div className={containerClass}>
            {children.map((child)=>{
                const active_class = active === child.props.name ? classes.active:''
                return <child.type {...child.props} key={child.props.name}
                                   className={`${child.props.className} ${active_class}`}
                                   onClick={()=>{setState(child.props.name)}} />
            })}
        </div>
    )
}
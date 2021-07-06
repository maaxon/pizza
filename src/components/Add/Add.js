import modal from "../../store/modal";
import React, {useEffect, useState} from "react";

export default function Add({id,img,className}) {
    //find add by id
    const add = modal.adds.find(add=>add.id === id)
    const [active,setState] = useState(false)

    //checks if this add in array of active adds
    useEffect(()=>{
        if (modal.cur_adds.includes(id) ) setState(true)
        else setState(false)
    },[modal.cur_adds])

    //adds this add into array of active adds
    function handleClick(){
        modal.onAdd(add.id);
    }

    return(
        <div onClick={handleClick} style={active ? {border:'3px solid #F5C840'}:{}} className={className}>
            <img src={img} />
            <p>{add.name}</p>
        </div>
    )
}
import React, {useEffect, useState} from "react";
import Toggle from "../../components/Toggle/Toggle"

export default function Tabs({children,setTab,containerClass=''}){

    useEffect(()=>{
        setTab(tabs[0])
    },[])

    const toggles =  children.toggles
    const tabs = children.tabs

    //return name of active toggle and function to make toggle active
    const [active,setActive] = useState(toggles[0].name)

    //find tabs with the same name as toggle and put them into parent state
    function changeTab(name){
        let tab = tabs.find(child => child.props.name === name)
        tab = tab.props.children.length < 1 ? <h1>No items</h1>:tab
        setTab(tab)
        setActive(name)
    }

    return(
        <div className={containerClass}>
            {toggles.map((toggle,index) =>{
               return <Toggle {...toggle} key={`toggle${index}`} active={active}
                              onClick={()=>{changeTab(toggle.name)}}  />
            })}
        </div>
   
    )
}


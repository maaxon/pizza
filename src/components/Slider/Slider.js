import React, {useState,useRef,useEffect} from "react";
import classes from "./slider.module.scss";

export default function Slider({children,slides_count,style}){
    const slider = useRef(null);


    const left_arrow = children.find(item => item.props.type === 'left-arrow')
    const right_arrow = children.find(item => item.props.type === 'right-arrow')

    const slides_arr = children.filter(item => item.props.type === 'slide').map((slide,index) =>{
        return <slide.type {...slide.props} slideNum={index} />
    })
    

    const [slides,setSlides] = useState(slides_arr.slice(0,3))

    function leftArrowHandle(){
        let new_val = slides[slides.length - 1].props.slideNum + slides_count -1
        if (new_val > slides_arr.length-1) new_val = new_val - slides_arr.length
        const updated = slides.slice(0,2)
        setSlides([slides_arr[new_val],...updated])
    }

    function rightArrowHandle(){
        let new_val = slides[0].props.slideNum + slides_count
        if (new_val > slides_arr.length-1) new_val = new_val - slides_arr.length
        const updated = slides.slice(1,3)
        setSlides([...updated,slides_arr[new_val]])
    }



    return(
        <div  ref={slider} style={style} >
            <left_arrow.type {...left_arrow.props} onClick={leftArrowHandle} />
            {slides.map(slide=>{
                return <slide.type {...slide.props} key={`slide_${slide.props.slideNum}`} />
                })}
            <right_arrow.type {...right_arrow.props} onClick={rightArrowHandle} />
        </div>
    )
}
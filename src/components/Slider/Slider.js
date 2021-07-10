import React, {useState,useRef,useEffect} from "react";
import {AngleLeft} from "@styled-icons/fa-solid/AngleLeft";
import {AngleRight} from "@styled-icons/fa-solid/AngleRight";

export default function Slider({children,slides_count,style,arrowClass}){

    useEffect(()=>{
        setSlides(slides_arr.slice(0,slides_count))
    },[slides_count])

    const slider = useRef(null);

    //array of all slides
    const slides_arr = children.map((slide,index) =>{
        return <slide.type {...slide.props} slideNum={index} />
    })

    //return array of active slides and function to set active slides
    const [slides,setSlides] = useState(slides_arr.slice(0,slides_count))

    //handle click on left arrow
    function leftArrowHandle(){
        let new_val = slides[slides.length - 1].props.slideNum + slides_count -1
        if (new_val > slides_arr.length-1) new_val = new_val - slides_arr.length
        const updated = slides.slice(0,slides_count-1)
        setSlides([slides_arr[new_val],...updated])
    }

    //handle click on right arrow
    function rightArrowHandle(){
        let new_val = slides[0].props.slideNum + slides_count
        if (new_val > slides_arr.length-1) new_val = new_val - slides_arr.length
        const updated = slides.slice(1,slides_count)
        setSlides([...updated,slides_arr[new_val]])
        console.log(slides)
    }



    return(
        <div  ref={slider} style={style} >
               <AngleLeft className={arrowClass} type={'left-arrow'} onClick={leftArrowHandle}/>
                    {slides.map(slide=>{
                        return <slide.type {...slide.props} key={slide.props.slideNum} />
                    })}
                <AngleRight type={'right-arrow'} className={arrowClass} onClick={rightArrowHandle}/>
        </div>
    )
}
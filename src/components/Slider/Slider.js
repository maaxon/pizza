import React, {useState} from "react";

export default function Slider({children,slides_count}){
    const left_arrow = children.find(item => item.props.type === 'left-arrow')
    const right_arrow = children.find(item => item.props.type === 'right-arrow')

    const slides = children.filter(item => item.props.type === 'slide')

    const [current,setCurrent] = useState(0)
    function leftArrowHandle(){
        if((current-1) <= 0){
            setCurrent(0)
            return
        }
        setCurrent(current-1)

    }

    function rightArrowHandle(){
        if((current+1) >= (slides.length-slides_count)) {
            const new_curent = slides.length-slides_count
            setCurrent(new_curent)
            return
        }
            setCurrent(current+1)


    }

    function renderSlides() {
        let showed=[];
        for (let i = 0; i < slides_count; i++) {
            showed.push(slides[current+i])
        }
        return showed
    }

    return(
        <>
            <left_arrow.type {...left_arrow.props} onClick={leftArrowHandle} />
            {renderSlides()}
            <right_arrow.type {...right_arrow.props} onClick={rightArrowHandle} />
        </>
    )
}
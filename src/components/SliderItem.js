import React, { useState } from 'react'
import * as s from './SliderItem.style'

const SliderItem = (props) => {
    const [hover, setHover] = useState(true)

    const onHover = () =>{
        setHover(!hover)
    }

    const { data} = props
    return (
        <>
            {
                data.map((item, index )=>{
                return(
                    <s.SliderItemContainer key={index}>
                        <img src={item.src} alt="" />
                        <s.ItemInfor>
                            <s.SliderH2>{item.title}</s.SliderH2>
                            <s.SliderP>{item.description}</s.SliderP>
                            <s.SliderLink to="/" 
                            onMouseEnter = { onHover}
                            onMouseLeave = { onHover }
                            >
                               {item.more} {hover ? <s.ArrowRight/>:<s.ArrowForward/>}
                            </s.SliderLink>
                        </s.ItemInfor>
                    </s.SliderItemContainer>
                )
                })
            }
        </>
    )
}

export default SliderItem

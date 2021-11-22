import React, { useState, useEffect, createRef } from 'react'
import * as s from './Sliding.style'

import SliderItem from './SliderItem';
import Arrow from './Arrow';

function SlidingImages() {
    const [data, setData] = useState([])
    
      const myRef = createRef()
    
      const getData = async ()=> {
        const res = await fetch('data.json');
    
        const data = await res.json();
        
        setData(data)
        
      }
    
      useEffect(()=>{
         getData()
      })
     
    
      const prevClick = () =>{
        const slide = myRef.current;
        slide.scrollLeft -= slide.offsetWidth;
    
        if(slide.scrollLeft <=0){
          slide.scrollLeft = slide.scrollWidth;
        }
    
      }
    
      const nextClick = () =>{
        const slide = myRef.current;
        slide.scrollLeft += slide.offsetWidth;
    
        if(slide.scrollLeft >= (slide.scrollWidth - slide.offsetWidth)){
          slide.scrollLeft = 0;
        }
    
      }
    return (
        <s.SliderContainer>
            <s.SliderWrapper ref = { myRef}>
                <SliderItem data = { data }/>
            </s.SliderWrapper>
            <Arrow prev = {prevClick} next = {nextClick}/>
      </s.SliderContainer>
    )
}

export default SlidingImages


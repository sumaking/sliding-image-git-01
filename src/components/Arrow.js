import React from 'react'
import * as s from './Arrow.style'

const Arrow = (props) => {
    const {prev, next } = props
    return (
        <s.ArrowContainer>
           <s.ArrowPrev onClick={prev}>Prev</s.ArrowPrev>
           <s.ArrowNext onClick={next}>Next</s.ArrowNext>
        </s.ArrowContainer>
    )
}

export default Arrow

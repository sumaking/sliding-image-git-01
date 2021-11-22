import { Link } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineArrowSmRight, HiOutlineChevronDoubleRight } from "react-icons/hi"

export const SliderItemContainer = styled.section`
  min-width: 25%;
  overflow: hidden;
  padding: 5px;
  border: 3px solid #eee;

  @media screen and (max-width: 900px) {
    min-width: 50%;
  }

  @media screen and (max-width: 550px) {
    min-width: 100%;
  }

  & img {
    width: 100%;
    height: 200px;
    display: block;
    object-fit: cover;
  }
`;

export const ItemInfor = styled.section``;

export const SliderH2 = styled.h2`
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 10px;
  opacity: 0.8;
`;

export const SliderP = styled.p`
  opacity: 0.7;
  line-height: 1.5;
  margin: 5px 0; 
`;

export const SliderLink = styled(Link)`
  text-decoration: none;
  display: flex;
  margin: 10px 0;
  color: teal;
  align-items: center;
  position: relative;

  &:hover {
    color: crimson;
  }
`;

export const ArrowRight = styled(HiOutlineArrowSmRight)`
position: absolute;
right: 11.8rem;
top: 5px;
`

export const ArrowForward = styled(HiOutlineChevronDoubleRight)`
position: absolute;
right: 11.8rem;
top: 5px;
`
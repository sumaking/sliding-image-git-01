import styled from "styled-components";

export const ArrowContainer = styled.div``;

export const ArrowPrev = styled.span`
  position: absolute;
  top: 50%;
  left: -18px;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 8px 15px;
  border-radius: 50%;
  border: 2px solid #ccc;
  color: #333;
  background:#fff;
  transition: all 0.3s ease;

  &:hover {
     border: 2px solid rgba(0, 0, 0, 0.4);
     color: green;
  }
`;

export const ArrowNext = styled.span`
  position: absolute;
  top: 50%;
  right: -18px;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 8px 15px;
  border-radius: 50%;
  border: 2px solid #ccc;
  color: #333;
  background:#fff;
  transition: all 0.3s ease;
  
  &:hover {
     border: 2px solid rgba(0, 0, 0, 0.4);
     color: green;
  }

`;
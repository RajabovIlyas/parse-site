import styled from "styled-components";

export const Card = styled.a`
  display: grid;
  flex-direction: column;
  background: white;
  grid-template-areas: 
  'img'
  'name'
  'rate'
  'price';
  border-radius: 15px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  & img {
  grid-area: img;
  width: 200px;
  border-radius: 10px;
  margin-bottom: 10px;
  }
  
  & h4 {
    grid-area:name;
    color: #627084;
    text-transform: uppercase;
    
    word-break:break-all;
    
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.1em;
    margin: 0 0 10px;
    transition: color .45s ease;
  }
  
  & .card-price{
    grid-area: price;
    align-self: end;
  }
  
  & p {
    font-weight: 600;
    line-height: 1.8;
    margin: 0 0 1.25em;
    color: #753BBD;
  }
  
&:hover {
    background: #753BBD;
    transform: scale(1.02);
    
   & p {
    color: #FFFFFF;
    }

   & h4 {
      color: #FFFFFF;
    }

   & .link-text {
      color: #FFFFFF;

     & svg {
        animation: point 1.25s infinite alternate;
        
      & path {
          fill: #FFFFFF;
        }
      }
    }
  }
`

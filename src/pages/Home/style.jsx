
import { styled } from "styled-components";

export const CardDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 30px;
background-color: rgb(37, 37, 37);
border: 1px solid black;
padding: 15px;
box-sizing: border-box;
width: 100%
border-radius: 8px;
cursor: pointer;
`

export const CardImg = styled.img`
max-width: 200px;
border-radius: 10px;
`
export const CardList = styled.ul`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 20px;
list-style: none;
`

export const CardItemName = styled.li`
color: white;
font-weight: bold;
font-size: 24px;
`

export const CardItemTitle = styled.li`
color: yellow;
font-size: 20px;
`


export const CardItemText = styled.p`
    font-size: 16px;
    color: rgb(85, 152, 162);
    margin-top: 6px;
`
export const ConteinerCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 100% ;
    margin: 0 auto;
    padding: 0 10px;  
    box-sizing: border-box;  
` 
import { styled } from "styled-components";

export const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  background-color: #2c2c2c;
  border: 1px solid #444;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImg = styled.img`
  max-width: 220px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  padding: 0;
  align-items: flex-start;
`;

export const CardItemName = styled.li`
  color: #fff;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 5px;
`;

export const CardItemTitle = styled.li`
  color: #f1c40f;
  font-size: 20px;
  font-weight: 500;
`;

export const CardItemText = styled.p`
  font-size: 16px;
  color: #57a9b3;
  margin-top: 6px;
`;

export const ConteinerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Ajuste para 5 colunas */
  gap: 20px;
  width: 90vw;
  margin: 0 auto; /* Ajuste para garantir centralização */
`;



export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;  /* Aumenta o gap para espaçamento entre os filtros */
  margin-bottom: 30px;
  width: 100%;
  box-sizing: border-box;
`;

export const Input = styled.input`
  padding: 10px;
  width: 220px;
  border-radius: 8px;
  border: 1px solid #444;
  font-size: 16px;
  background-color: #333;
  color: #fff;
  transition: all 0.3s;
  margin-top: 10px;  /* Ajustado o margin-top */
  
  &:focus {
    border-color: #f1c40f;
    outline: none;
  }
`;

export const Select = styled.select`
  padding: 10px;
  width: 220px;
  border-radius: 8px;
  border: 1px solid #444;
  background-color: #333;
  color: #fff;
  font-size: 16px;
  transition: all 0.3s;
  cursor: pointer;
  margin-top: 10px;  /* Ajustado o margin-top */
  
  &:focus {
    border-color: #f1c40f;
    outline: none;
  }
  
  /* Estilizando as options dentro do select */
  option {
    background-color: #333;
    color: #fff;
    font-size: 16px;
    padding: 10px;
    border: none;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #444;
    }
  }
`;

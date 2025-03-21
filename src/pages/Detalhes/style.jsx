import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: #1e1e1e;
  min-height: 100vh;
`;

export const CharacterImage = styled.img`
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  max-width: 300px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  color: #f1c40f;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

export const InfoSection = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 900px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 30px;
`;

export const InfoTitle = styled.h2`
  color: #f1c40f;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const InfoContent = styled.h2`
  color: #85a2a2;
  font-size: 20px;
  margin-left: 10px;
`;

export const InfoContainer = styled.div`
  margin-bottom: 15px;
`;

export const ButtonBack = styled.button`
  background-color: #f1c40f;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d4a506;
  }
`;


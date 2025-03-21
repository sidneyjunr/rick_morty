import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  CharacterImage,
  Title,
  InfoSection,
  InfoTitle,
  InfoContent,
  InfoContainer,
  ButtonBack,
} from "./style";

export const Detalhes = () => {
  const { id } = useParams();
  const [personagem, setPersonagem] = useState();

  async function buscar_personagem() {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    setPersonagem(data);
  }

  useEffect(() => {
    buscar_personagem();
  }, []);

  return (
    <>
      {personagem && (
        <Container>
          <CharacterImage src={personagem.image} alt={personagem.name} />
          <Title>{personagem.name}</Title>

          <InfoSection>
            <InfoContainer>
              <InfoTitle>Gênero</InfoTitle>
              <InfoContent>{personagem.gender}</InfoContent>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>Localização</InfoTitle>
              <InfoContent>{personagem.location.name}</InfoContent>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>Origem</InfoTitle>
              <InfoContent>{personagem.origin.name}</InfoContent>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>Tipo</InfoTitle>
              <InfoContent>
                {personagem.type ? personagem.type : "Tipo desconhecido"}
              </InfoContent>
            </InfoContainer>
          </InfoSection>

          <ButtonBack onClick={() => window.history.back()}>Voltar</ButtonBack>
        </Container>
      )}
    </>
  );
};

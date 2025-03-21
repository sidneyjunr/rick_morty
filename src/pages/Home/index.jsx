import { useEffect, useState } from "react";
import { CardDiv, CardImg, CardItemName, CardItemText, CardItemTitle, CardList, ConteinerCards, Input, Select, FilterContainer } from "./style"; // Adicione o import para Input e Select
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  const navigate = useNavigate();

  const [personagens, setPersonagens] = useState();
  const [name, setName] = useState("");
  const [especies, setEspecies] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");

  async function buscar_dados() {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character?name=${name}&species=${especies}&gender=${gender}&status=${status}`
    );
    setPersonagens(data.results);
  }

  useEffect(() => {
    buscar_dados();
  }, [especies, gender, status, name]);

  return (
    <>
      <FilterContainer>
        <Input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Pesquisar por nome"
          
        />
        <Select onChange={(e) => setEspecies(e.target.value)}>
          <option value="animal">Animal</option>
          <option value="alien">Alien</option>
          <option value="disease">Doença</option>
          <option value="unknown">Desconhecido</option>
          <option value="human">Humano</option>
          <option value="humanoid">Humanoide</option>
          <option value="mythological">Mitologico</option>
          <option value="poopybutthole">Poopybutthole</option>
          <option value="robot">Robo</option>
        </Select>

        <Select onChange={(e) => setGender(e.target.value)}>
          <option value="">Gênero</option>
          <option value="female">Feminino</option>
          <option value="male">Masculino</option>
          <option value="genderless">Sem Gênero</option>
          <option value="unknown">Desconhecido</option>
        </Select>

        <Select onChange={(e) => setStatus(e.target.value)}>
          <option value="">Status</option>
          <option value="alive">Vivo</option>
          <option value="dead">Morto</option>
          <option value="unknown">Desconhecido</option>
        </Select>
      </FilterContainer>

      <ConteinerCards>
        {personagens &&
          personagens.map((personagem) => (
            <CardDiv key={personagem.id} onClick={() => navigate(`detalhes/${personagem.id}`)}>
              <CardImg src={personagem.image} />
              <CardList>
                <CardItemName>
                  Nome: <CardItemText>{personagem.name}</CardItemText>
                </CardItemName>
                <CardItemTitle>
                  Espécie: <CardItemText>{personagem.species}</CardItemText>
                </CardItemTitle>
                <CardItemTitle>
                  Status: <CardItemText>{personagem.status}</CardItemText>
                </CardItemTitle>
                <CardItemTitle>
                  Localização: <CardItemText>{personagem.location.name}</CardItemText>
                </CardItemTitle>
              </CardList>
            </CardDiv>
          ))}
      </ConteinerCards>
    </>
  );
};

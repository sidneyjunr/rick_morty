import axios from "axios"
import { useEffect, useState } from "react"
import { CardDiv, CardImg, CardItemName, CardItemText, CardItemTitle, CardList, ConteinerCards } from "./style"
import { useNavigate } from "react-router-dom"

export const Home = () => {

    const navigate = useNavigate()


    const [personagens, setPersonagens] = useState()
    const [name, setName] = useState("")
    const [especies, setEspecies] = useState("")
    const [status, setStatus] = useState("")
    const [gender, setGender] = useState("")
    async function buscar_dados() {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character?name=${name}&species=${especies}&gender=${gender}&status=${status}`)
        setPersonagens(data.results)

    }

    useEffect(() => {
        buscar_dados()
    }, [especies, gender, status, name])

    

    return (
        <>

        <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap:'10px'}}>
            <input type="text" onChange={(e)=>setName(e.target.value)} style={{ width: '200px',margin: "20px, 0px" }}/>
            <select onChange={(e)=> setEspecies(e.target.value)}style={{ width: '200px' }}>
              <option value="animal">Animal</option>
              <option value="alien">Alien</option>
              <option value="disease">Doença</option>
              <option value="unknown">Desconhecido</option>
              <option value="human">Humano</option>
              <option value="humanoid">Humanoide</option>
              <option value="mythological">Mitologico</option>
              <option value="poopybutthole">Poopybutthole</option>
              <option value="robot">Robo</option>
            </select>

        <select onChange={(e)=> setGender(e.target.value)}>
            <option value="">Genero</option>
            <option value="female">Feminino</option>
            <option value="male">Masculino</option>
            <option value="genderless">Sem Genero</option>
            <option value="unknown">Desconhecido</option>
        </select>

        <select onChange={(e)=> setStatus(e.target.value)}>
            <option value="">Status</option>
            <option value="alive">Vivo</option>
            <option value="dead">Morto</option>
            <option value="unknown">Desconhecido</option>
        </select>
        </div>

            <ConteinerCards>

                {personagens && personagens.map((personagem) => (
                    <CardDiv key={personagem.id} onClick={()=> navigate(`detalhes/${personagem.id}`)}>
                        <CardImg src={personagem.image}></CardImg>
                        <CardList>
                            <CardItemName>
                                Nome:
                                <CardItemText>{personagem.name}</CardItemText>
                            </CardItemName>
                            <CardItemTitle>
                                Espécie:
                                <CardItemText>{personagem.species}</CardItemText>
                            </CardItemTitle>
                            <CardItemTitle>
                                Status:
                                <CardItemText>{personagem.status}</CardItemText>
                            </CardItemTitle>
                            <CardItemTitle>
                                Espécie:
                                <CardItemText>{personagem.location.name}</CardItemText>
                            </CardItemTitle>
                        </CardList>
                    </CardDiv>

                )
                )}
            </ConteinerCards>



        </>
    )
}


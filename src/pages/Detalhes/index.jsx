import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Detalhes = () => {
    const {id} = useParams()

    const [personagem, setPersonagem] = useState()

    async function buscar_personagem(){
        const{data}= await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        setPersonagem(data)
    }
    useEffect(()=>{
        buscar_personagem()
    },[])
  return (
    <>
    {personagem && 
    <div className="inicio">
      <img src={personagem.image} />
      <h1>{personagem.name}</h1>
        <div>
          <h1>Informações</h1>
            <div>
              <h2>Gênero</h2>
              <h2>{personagem.gender}</h2>
            </div>
            <div>
              <h2>Localização</h2>
              <h2>{personagem.location.name}</h2>
            </div>
            <div>
              <h2>Origem</h2>
              <h2>{personagem.origin.name}</h2>
            </div>
            <div>
              <h2>Tipo</h2>
              <h2>{personagem.type}</h2>
            </div>
        </div>

      </div>}
    </>
  )
}

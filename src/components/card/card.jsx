import { usePokemon } from "../pokemon/pokemon"
import { useParams } from "react-router-dom"
import { H1Load, StyleType } from "../styled-components"
import { DivCard, DivContainer, LinkStyle } from "./style-card"

export const Card = () => {
    const { id } = useParams()
    const { data, isLoading } = usePokemon(`https://pokeapi.co/api/v2/pokemon/${id}`)

    let url_back = '/PokeApi/'

    if(sessionStorage.getItem('Filter') == 'yes'){
        url_back = `/PokeApi/type/${sessionStorage.getItem('Id')}`
    }

    if (isLoading) { return <H1Load>Loading... ⌛️</H1Load> }

    return (
        <DivContainer>
            <DivCard>

                <div>
                    <img src={data.sprites.front_default} alt="Pokemon Image" />
                </div>

                <div>
                    <h1>{data.name}</h1>

                    <div className="info-block">
                        <h3>List of Moves</h3>
                        <ul>
                            <li>{data.moves[0].move.name}</li>
                        </ul>
                    </div>

                    <div className="info-block">
                        <h3>List of Skills</h3>
                        <ul>
                            {data.abilities.map((ability, i) => (
                                <li className="ability">
                                    {ability.name}
                                    <ul>
                                        <li>→ {ability.description}</li>
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="info-block">
                        <h3>Pokémon Type</h3>
                        <ul>
                            <StyleType>
                                {data.types.map((type, i) => (
                                    <StyleType status={type.type.name}>
                                        <p>{type.type.name}</p>
                                    </StyleType>
                                ))}
                            </StyleType>
                        </ul>
                    </div>
                </div>
            </DivCard>
            
            <LinkStyle to={url_back}>Return Home</LinkStyle>
        </DivContainer>
    )
}
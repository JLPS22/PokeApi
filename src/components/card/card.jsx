import { usePokemon } from "../pokemon/pokemon"
import { Link, useParams } from "react-router-dom"
import './card.css'
import { StyleType } from "../cardList"

export const Card = () => {
    const { id } = useParams()
    const { data, isLoading } = usePokemon(`https://pokeapi.co/api/v2/pokemon/${id}`)

    let url_back = '/PokeApi/'

    if(sessionStorage.getItem('Filter') == 'yes'){
        url_back = `/PokeApi/type/${sessionStorage.getItem('Id')}`
    }

    if (isLoading) { return <h1 className="load">Loading... ⌛️</h1> }

    return (
        <div className="container">
            <div className="card">
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
                                <li key={i}>
                                    {ability.name}
                                    <ul>
                                        <li className="description">→ {ability.description}</li>
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
            </div>
            <Link className="btn-back" to={url_back}>Return Home</Link>
        </div>
    )
}
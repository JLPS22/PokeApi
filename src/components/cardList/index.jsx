import { useState } from "react"
import { usePokemonList } from '../pokemon/pokemon'
import './cardList.css'
import { Link, useNavigate } from "react-router-dom"
import { ThemeToggleButton } from "../theme-toggler-button/theme-toggler-button"
import styled from "styled-components"

export const StyleType = styled.div`
    padding: 0px;
    display: flex;
    margin-top: 5px;

    p {
        background-color: ${(props) =>
        props.status == 'normal'
            ? "#C1B6A3"
        : props.status == 'fighting'
            ? "#CF0E0E"
        : props.status == 'flying'
            ? "#00CBCC"
        : props.status == 'poison'
            ? "#AF69CD"
        : props.status == 'ground'
            ? "#91672C"
        : props.status == 'rock'
            ? "#6d6b6bff"
        : props.status == 'bug'
            ? "#7E8C54"
        : props.status == 'ghost'
            ? "#4B0081"
        : props.status == 'steel'
            ? "#C9CCCB"
        : props.status == 'fire'
            ? "#f85700ff"
        : props.status == 'water'
            ? "#3E77B6"
        : props.status == 'grass'
            ? "#026014"
        : props.status == 'electric'
            ? "#f0b914ff"
        : props.status == 'psychic'
            ? "#FF3898"
        : props.status == 'ice'
            ? "#ADD8E6"
        : props.status == 'dragon'
            ? "#FF7E70"
        : props.status == 'dark'
            ? "#151B1F"
        : "#B19CD9"};
        color: white;
        margin: 0px 5px;
        padding: 3px 5px;
        border-radius: 5px;
    }
`

export const CardList = () => {
    const navigate = useNavigate()
    const [countPoke, setCountPoke] = useState(10)
    const { data, isLoading } = usePokemonList(`https://pokeapi.co/api/v2/pokemon?limit=${countPoke}`)
    sessionStorage.setItem('Filter', 'no')

    const btn_filter = () => {
        const type = document.getElementById("poke-type").value

        if (!type || type[0] === ' ') {
            alert("Write The Pokémon Type Before! \nWithout Spaces Before The Word!")
        } else {
            navigate(`/PokeApi/type/${type}`)
        }
    }

    if (isLoading) { return <h1 className="load">Loading... ⌛️</h1> }

    return (
        <>
            <div className="tittle">
                <h1>POKE LIST</h1>
            </div>
            <div className="search">
                <input type="text" placeholder="Filter by Pokemon type" id="poke-type" />
                <button onClick={btn_filter}>Filter 🔍</button>
                |
                <ThemeToggleButton />
            </div>
            <div className="pokemon-container">
                {data.results.map((pokemon) => (
                    <div className='pokemon-card'>
                        <Link to={`/PokeApi/${pokemon.id}`}>
                            <div className="name-pokemon">
                                <img src={pokemon.img} alt='Pokemon Image' />
                                <h2>{pokemon.name}</h2>
                                <StyleType>
                                    {pokemon.type.map((type) => (
                                        <StyleType status={type.type.name}>
                                            <p>{type.type.name}</p>
                                        </StyleType>
                                    ))}
                                </StyleType>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="div-button">
                <button className="btn" onClick={() => setCountPoke(() => countPoke + 10)}>
                    Load More ⚡
                </button>


            </div>
        </>
    )
}
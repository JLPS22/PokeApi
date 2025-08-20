import { useState } from "react"
import { usePokemonList } from '../pokemon/pokemon'
import './cardList.css'
import { Link, useNavigate } from "react-router-dom"
import { ThemeToggleButton } from "../theme-toggler-button/theme-toggler-button"

export const CardList = () => {
    const navigate = useNavigate()
    const [countPoke, setCountPoke] = useState(10)
    const { data, isLoading } = usePokemonList(`https://pokeapi.co/api/v2/pokemon?limit=${countPoke}`)

    const btn_filter = () => {
        const type = document.getElementById("poke-type").value

        if(!type || type[0] === ' '){
            alert("Write The Pokémon Type Before! \nWithout Spaces Before The Word!")
        } else {
            navigate(`/type/${type}`)
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
                        <Link to={`/${pokemon.id}`}>
                            <div>
                                <img src={pokemon.img} alt='Pokemon Image' />
                            </div>
                            <div className="name-pokemon">
                                <h2>{pokemon.name}</h2>
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
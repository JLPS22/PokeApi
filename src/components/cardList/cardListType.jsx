import { useTypePokemon } from "../pokemon/pokemon"
import { Link, useNavigate, useParams } from "react-router-dom"
import { ThemeToggleButton } from "../theme-toggler-button/theme-toggler-button"

export const CardListType = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    try {
        const { data, isLoading } = useTypePokemon(`https://pokeapi.co/api/v2/type/${id}`)
        if (isLoading) { return <h1 className="load">Loading... ⌛️</h1> }

        return (
            <>
                <div className="tittle">
                    <h1>POKE LIST</h1>
                </div>
                <div className="search">
                    <ThemeToggleButton />
                    |
                    <button onClick={() => { navigate('/') }}>Retornar</button>
                </div>
                <div className="pokemon-container">
                    {data.pokemon.map((pokemons) => (
                        <div className='pokemon-card'>
                            <Link to={`/${pokemons.id}`}>
                                <div>
                                    <img src={pokemons.img} alt='Pokemon Image' />
                                </div>
                                <div className="name-pokemon">
                                    <h2>{pokemons.name}</h2>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </>
        )
    } catch (err) {
        return (
            <div className="div-err">
                <h1 className="err">Pokémon Of The Type "{id}" Was Not Found ⚠️</h1>
                <button className="btn" onClick={() => { navigate('/') }}>Retornar</button>
            </div>
        )
    }
}
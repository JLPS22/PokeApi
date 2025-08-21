import { useTypePokemon } from "../pokemon/pokemon"
import { Link, useNavigate, useParams } from "react-router-dom"
import { ThemeToggleButton } from "../theme-toggler-button/theme-toggler-button"
import { StyleType } from "."

export const CardListType = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    sessionStorage.setItem('Id', id)
    sessionStorage.setItem('Filter', 'yes')

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
                    <button onClick={() => { navigate('/PokeApi/') }}>Retornar</button>
                </div>
                <div className="pokemon-container">
                    {data.pokemon.map((pokemons) => (
                        <div className='pokemon-card'>
                            <Link to={`/PokeApi/${pokemons.id}`}>
                                <div className="name-pokemon">
                                    <img src={pokemons.img} alt='Pokemon Image' />
                                    <h2>{pokemons.name}</h2>
                                    <StyleType>
                                        {pokemons.type.map((type) => (
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
            </>
        )
    } catch (err) {
        return (
            <div className="div-err">
                <h1 className="err">Pokémon Of The Type "{id}" Was Not Found ⚠️</h1>
                <button className="btn" onClick={() => { navigate('/PokeApi/') }}>Retornar</button>
            </div>
        )
    }
}
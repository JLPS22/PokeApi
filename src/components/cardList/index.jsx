import { useState } from "react"
import { usePokemonList } from '../pokemon/pokemon'
import { useNavigate } from "react-router-dom"
import { ThemeToggleButton } from "../theme-toggler-button/theme-toggler-button"
import { StyleType, DivTittle, DivSearch, PokeContainer, PokeCard, PokeName, DivBtn, Button, H1Load, LinkStyle } from "../styled-components"

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

    if (isLoading) { return <H1Load>Loading... ⌛️</H1Load> }

    return (
        <>
            <DivTittle>
                <h1>POKE LIST</h1>
            </DivTittle>
    
            <DivSearch>
                <input type="text" placeholder="Filter by Pokemon type" id="poke-type" />
                <button onClick={btn_filter}>Filter 🔍</button>
                |
                <ThemeToggleButton />
            </DivSearch>

            <PokeContainer>
                {data.results.map((pokemon) => (
                    <PokeCard>
                        <LinkStyle to={`/PokeApi/${pokemon.id}`}>
                            <PokeName>
                                <img src={pokemon.img} alt='Pokemon Image' />
                                <h2>{pokemon.name}</h2>

                                <StyleType>
                                    {pokemon.type.map((type) => (
                                        <StyleType status={type.type.name}>
                                            <p>{type.type.name}</p>
                                        </StyleType>
                                    ))}
                                </StyleType>
                            </PokeName>
                        </LinkStyle>
                    </PokeCard>
                ))}
            </PokeContainer>

            <DivBtn>
                <Button onClick={() => setCountPoke(() => countPoke + 10)}>
                    Load More ⚡
                </Button>
            </DivBtn>
        </>
    )
}
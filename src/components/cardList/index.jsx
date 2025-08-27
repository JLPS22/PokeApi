import { useState } from "react"
import { usePokemonList } from '../pokemon/pokemon'
import { useNavigate } from "react-router-dom"
import { ThemeToggleButton } from "../theme-toggler-button/theme-toggler-button"
import { StyleType, DivTittle, DivSearch, PokeContainer, PokeCard, PokeName, DivBtn, Button, H1Load, LinkStyle } from "../styled-components"

export const CardList = () => {
    const navigate = useNavigate()
    const [ countPoke, setCountPoke ] = useState(10)
    const [ type, setType ] = useState()
    const { data, isLoading } = usePokemonList(`https://pokeapi.co/api/v2/pokemon?limit=${countPoke}`)
    sessionStorage.setItem('Filter', 'no')

    const btn_filter = () => {
        if (type == undefined) {
            alert("Select the Pokémon type first!")
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
                <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="">-- Selecione --</option>
                    <option value="normal">Normal ⚪</option>
                    <option value="fighting">Fighting 🥊</option>
                    <option value="flying">Flying ☁️</option>
                    <option value="poison">Poison ☣</option>
                    <option value="ground">Ground 🌍</option>
                    <option value="rock">Rock ⛰️</option>
                    <option value="bug">Bug 🦗</option>
                    <option value="ghost">Ghost 👻</option>
                    <option value="steel">Steel 🔩</option>
                    <option value="fire">Fire 🔥</option>
                    <option value="water">Water 💧</option>
                    <option value="grass">Grass 🍀</option>
                    <option value="electric">Electric ⚡</option>
                    <option value="psychic">Psychic 🔮</option>
                    <option value="ice">Ice 🧊</option>
                    <option value="dragon">Dragon 🐲</option>
                    <option value="dark">Dark 🌑</option>
                    <option value="fairy">Fairy ✨</option>
                </select>
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
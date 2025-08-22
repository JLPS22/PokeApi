import { useTypePokemon } from "../pokemon/pokemon"
import { useNavigate, useParams } from "react-router-dom"
import { ThemeToggleButton } from "../theme-toggler-button/theme-toggler-button"
import { H1Load ,DivErr, DivSearch, DivTittle, H1Err, LinkStyle, PokeCard, PokeContainer, PokeName, StyleType, Button } from "../styled-components"

export const CardListType = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    sessionStorage.setItem('Id', id)
    sessionStorage.setItem('Filter', 'yes')

    try {
        const { data, isLoading } = useTypePokemon(`https://pokeapi.co/api/v2/type/${id}`)
        if (isLoading) { return <H1Load>Loading... ⌛️</H1Load> }

        return (
            <>
                <DivTittle>
                    <h1>POKE LIST</h1>
                </DivTittle>

                <DivSearch>
                    <ThemeToggleButton />
                    |
                    <button onClick={() => { navigate('/PokeApi/') }}>Retornar</button>
                </DivSearch>
                
                <PokeContainer>
                    {data.pokemon.map((pokemons) => (
                        <PokeCard>
                            <LinkStyle to={`/PokeApi/${pokemons.id}`}>
                                <PokeName>
                                    <img src={pokemons.img} alt='Pokemon Image' />
                                    <h2>{pokemons.name}</h2>
                                    <StyleType>
                                        {pokemons.type.map((type) => (
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
            </>
        )
    } catch (err) {
        console.log(err)
        return (
            <DivErr>
                <H1Err>Pokémon Of The Type "{id}" Was Not Found ⚠️</H1Err>
                <Button onClick={() => { navigate('/PokeApi/') }}>Retornar</Button>
            </DivErr>
        )
    }
}
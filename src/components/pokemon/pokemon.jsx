import { useQuery } from "@tanstack/react-query";

export const usePokemonList = (url) => {
    const PokeFetch = async () => {
        const res = await fetch(url);
        const data = await res.json();

        const image = await Promise.all(
            data.results.map(async ({ name, url }) => {
                const res = await fetch(url);
                const data = await res.json();

                return {
                    id: data.id,
                    name: name,
                    img: data.sprites.front_default,
                    type: data.types
                };
            })
        );


        return {
            ...data,
            results: image
        };
    };

    const { data, isLoading } = useQuery({
        queryKey: ['pokemon', url],
        queryFn: PokeFetch,
        refetchOnWindowFocus: false
    });

    return { data, isLoading }
}

export const usePokemon = (url) => {
    const PokeFetch = async () => {
        const res = await fetch(url)
        const data = await res.json()

        const abilitiesWithDescription = await Promise.all(
            data.abilities.map(async ({ ability }) => {
                const res = await fetch(ability.url)
                const data = await res.json()

                const entry = data.effect_entries.find(
                    e => e.language.name === 'en'
                )

                return {
                    name: ability.name,
                    description: entry?.short_effect || 'Description not found.'
                }
            })
        )

        return {
            ...data,
            abilities: abilitiesWithDescription
        }

    }

    const { data, isLoading } = useQuery({
        queryKey: ['pokemon'],
        queryFn: PokeFetch,
        refetchOnWindowFocus: false
    })

    return { data, isLoading }
}

export const useTypePokemon = (url) => {
    const PokeFetch = async () => {

        const res = await fetch(url)
        const data = await res.json()

        const dataPokemons = await Promise.all(
            data.pokemon.map(async (poke) => {
                const res = await fetch(poke.pokemon.url)
                const data = await res.json()

                return {
                    id: data.id,
                    name: data.name,
                    img: data.sprites.front_default,
                    type: data.types
                }
            })
        )

        return { pokemon: dataPokemons }
    }

    const { data, isLoading } = useQuery({
        queryKey: ['pokemon', url],
        queryFn: PokeFetch,
        refetchOnWindowFocus: false
    })

    return { data, isLoading }
}
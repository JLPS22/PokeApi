import { styled, createGlobalStyle } from "styled-components"
import { Link } from "react-router-dom"

export const GlobalStyled = createGlobalStyle`
    :root {
        --bg-color: white;
        --text-color: #646cff;

        --text-color-card: white;
        --bg-color-card: #646cff;

        --bg-search-inp: #eee;
        --text-search-inp: black;
    }

    [ data-theme="dark"] {
        --bg-color: #19191A;

        --text-color-card: #646cff;
        --bg-color-card: #29292b;

        --bg-search-inp: #292929;
        --text-search-inp: white;
    }

    body {
        margin: 0px;
        padding: 10px 0px;
        font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
        transition: 0.5s ease;
        background-color: var(--bg-color);
    }
`

export const H1Load = styled.h1`
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #646cff;
`
export const DivTittle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.5;
    color: var(--text-color);
    gap: 15px;
    letter-spacing: 10px;
`
export const DivSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;

    select {
        cursor: pointer;
        margin: 0 10px 0 10px;
        border: 2px solid #646cff;
        border-radius: 10px;
        padding: 10px;
        font-size: 14px;
        transition: 0.5s ease;
        background-color: var(--bg-color);
        color: var(--text-color);
    }

    select:hover {
        outline: none;
        background-color: var(--bg-search-inp);
    }

    button {
        padding: 12px;
        font-size: 18px;
        border: none;
        border-radius: 10px;
        background-color: var(--bg-color);
        color: #646cff;
        transition: 0.5s ease;
    }

    button:hover {
        cursor: pointer;
        color: var(--text-color-card);
        background-color: var(--bg-color-card);
    }
`
export const PokeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 60px;
    row-gap: 30px;
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    color: var(--text-color);
`
export const PokeCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: 183px;
    height: auto;
    box-sizing: border-box;
    border: 2px solid #646cff;
    border-radius: 10px;
    background-color: var(--bg-color);
    transition: 0.5s ease;

    &:hover {
        background-color: var(--bg-color-card);
        border-color: var(--boder-color);
        color: var(--text-color-card);
        cursor: pointer;
    }
`
export const LinkStyle = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: flex;
    padding: 0px;
`
export const PokeName = styled.div`
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        padding: 0px;
        height: 110px;
    }

    h2 {
        padding: 0px;
        margin: 0px;
        font-size: 16px;
        text-transform: uppercase;
    }
`
export const StyleType = styled.div`
    padding: 0px;
    display: flex;

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
        margin: 4px 5px;
        padding: 3px 5px;
        border-radius: 5px;
    }
`
export const DivBtn = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
`
export const Button = styled.button`
    padding: 15px;
    margin-left: 5px;
    font-size: 18px;
    border: 1px solid #646cff;
    border-radius: 5px;
    background-color: var(--bg-color);
    color: #646cff;
    transition: 0.5s ease;

    &:hover {
        background-color: #646cff;
        color: #fff;
        cursor: pointer;
    }
`
export const DivErr = styled.div`
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const H1Err = styled.h1`
    color: #646cff;
`
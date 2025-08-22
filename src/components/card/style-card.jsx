import { styled } from "styled-components"

export const DivContainer = styled.div`
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
`
export const DivCard = styled.div`
    display: flex;
    flex-direction: row;
    border: none;
    padding: 30px;
    max-width: 900px;
    width: 100%;
    gap: 40px;

    img {
        width: 200px;
        height: 200px;
        object-fit: contain;
        border: none;
        display: block;
        margin: 0 auto;
    }

    > div:last-child {
        display: flex;
        flex-direction: column;
    }

    h1 {
        margin: 0;
    }

    h3 {
        padding-bottom: 5px;
        border-bottom: 1px solid #ccc;
    }

    .info-block {
        border: none;
        padding-bottom: 0px;
    }

    ul {
        list-style: inside;
        padding: 0;
        margin: 0;
    }

    li {
        font-size: 14px;
        margin-bottom: 1px;
        margin-left: 10px;
        padding: 5px 0px 0px 0px;
    }
`
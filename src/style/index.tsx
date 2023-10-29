import styled from "styled-components";

export const LightTheme = {
    corFundo: '#008080',
    corTexto: '#000000',
    corTitulo: '#0f0066'
}

export const DarkTheme = {
    corFundo: '#000000',
    corTexto: '#ffffff',
    corTitulo: '#fffdd0'
}

// Criando uma div
export const Container = styled.div`
    background-color: ${props => props.theme.corFundo};
    color: ${props => props.theme.corTexto};
    display: flex;
    flex-direction: column;
    min-height: 1000px;
`

// Criando um botão
export const Button = styled.button`
    padding: 10px;
    border: none;
    background-color: #4caf50;
    color: white;
    margin: 10px;
`

// Criando um título
export const TitlePage = styled.h1`
    color: blue;
    font-size: 40px;
`

export const InformacoesCep = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
`


// Criando uma div para formulários
export const DivForm = styled.div`
    display: inline;
    background-color: #FFF;
`

// Criando um nav para fazer o Menu
export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-left: 15px;
`

export const Li = styled.li`
    list-style-type: none;
    padding-right: 30px;
`

export const NavRow = styled.div`
    padding-left: 15px;
    display: flex;
    align-items: center;
    background-color: #0f0066;
`

export const CardSection = styled.section`
    display: grid;
    max-width: 1200px;
    margin-inline: auto;
    padding-inline: 24px;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
`

export const CardArticle = styled.div`
    position: relative;
    border-radius: 16px;
    box-shadow: none;
    background: #a9f;
    transform-origin: center;
    transition: all 0.4s ease-in-out;
    overflow: hidden;
`

export const CardFigure = styled.div`
    margin: 0;
    padding: 0;
    aspect-ratio: 16 / 9;
`

export const CardBody = styled.div`
    padding:24px;
`

export const CardTitle = styled.h2`
    margin: 0 0 18px 0;
    font-family: system-ui;
    font-size: 1.9rem;
    letter-spacing: 0.06em;
    color: ${props => props.theme.corTitulo};
    transition: color 0.3s ease-out;
`

export const CardText = styled.div`
    font-size: 1.2rem;
    line-height: 1.6rem;
    text-align: left;
    font-family: Helvetica;
    color: ${props => props.theme.corTexto};
`

export const FormSection = styled.section`
    display: grid;
    margin-inline: auto;
    padding-inline: 24px;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
`
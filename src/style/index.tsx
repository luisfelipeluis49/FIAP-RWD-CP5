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
export const Button = styled.div`
    padding: 10px;
    border: none;
    background-color: #4caf5000;
    color: #4caf50;
    margin: 8px;
    cursor: default;
`

// Criando um título
export const TitlePage = styled.h1`
    color: #a9f;
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
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: grid;
    margin-inline: auto;
    padding-inline: 24px;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
`

/*export const FormSection = styled.section`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: grid;
    place-items: center;
    min-height: 100vh;
    overflow: hidden;
`*/

export const FormContainer = styled.div`
    background-color: #a9f;
    width: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    line-height: 1.5;
    box-shadow: 0 20px 30px;
`

export const FormImage = styled.img`
    width: 300px;
    height: 600px;
    object-fit: cover;
    object-position: center;
`

export const FormContent = styled.div`
    padding: 10px 40px 10px 10px;
`

export const FormTitle = styled.h2`
    font-size: 1.2rem;
    color: ${props => props.theme.corTitulo};
`

export const FormInput = styled.input`
    width: 91%;
    border: none;
    padding: 14px;
    border-radius: 3px;
    border: 2px solid #DADDEC;
    margin: 5px 0 10px;
    font-size: 1rem;
    color: #656880;
`

export const FormSubmit = styled.button`
    width: 100%;
    border: none;
    padding: 14px;
    border-radius: 3px;
    background-image: linear-gradient(to right, #69ffff, #4caf50);
    display: block;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
`

export const DetailSection = styled.section`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: flex;
    flex-direction: column;
    max-width: 95%;
    margin-inline: auto;
    padding-inline: 24px;
    margin-top: 5px;
    padding-top: 5px;
    border-radius: 10px;
    gap: 24px;
    background-color: #aaFFaa88
`

export const DetailTitle = styled.h2`
    margin: 0 0 18px 0;
    font-family: system-ui;
    font-size: 1.9rem;
    letter-spacing: 0.06em;
    color: ${props => props.theme.corTitulo};
    transition: color 0.3s ease-out;
`

export const DetailText = styled.p`
    font-size: 1.2rem;
    line-height: 1.6rem;
    text-align: left;
    font-family: Helvetica;
    color: ${props => props.theme.corTexto};
`

export const DetailImage = styled.img`
    object-fit: cover;
    object-position: center;
`

export const AboutRow = styled.div`
font-family: Verdana, Geneva, Tahoma, sans-serif;
display: flex;
flex-direction: column;
max-width: 95%;
margin-inline: auto;
padding-inline: 24px;
margin-top: 5px;
margin-bottom: 15px;
padding-top: 25px;
padding-bottom: 20px;
border-radius: 10px;
gap: 24px;
background-color: #aaFFaa88;
`

export const AboutSection = styled.section`
    max-width: 600px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const AboutButton = styled.a`
    background-color: blue;
    color: white;
    padding: 1em;
    margin: 1em 0;
    display: inline-block;
    text-decoration: none;
    border-radius: 0.5em;
`

export const AboutProfile = styled.img`
    width: 100% auto;
    margin-left: 100px;
    margin-right: 100px;
`

export const ToggleLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
    margin-right: 10px;
`

export const ToggleSpan = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2c3e50;
    transition: 0.3s;
    border-radius: 30px;
    &:before {
        position: absolute;
        content: "";
        height: 25px;
        width: 25px;
        left: 3px;
        bottom: 2.6px;
        background-color: #fff;
        border-radius: 50%;
        transition: 0.3s;
    }
`

export const ToggleInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + ${ToggleSpan} {
        background-color: #00c853;
    };
      
    &:checked + ${ToggleSpan}:before {
        transform: translateX(21px);
    };
`

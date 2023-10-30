import React from 'react';
import { AboutButton, AboutProfile, AboutRow, AboutSection, TitlePage } from '../style'

export default function About() {
    return(
        <>
            <TitlePage style={{color: 'white'}}>Desernvolvedor: Luís SIlva</TitlePage>

            <AboutRow>
                <AboutSection>
                    <>
                        <AboutProfile src="https://portfolio-luisfelipeluis49.vercel.app/static/media/Avatar.fddf1a624e614d92e931.png" alt="Luís Silva" />
                    </>
                    <br/>
                    <AboutButton  href="https://linkedin.com/in/luisfelipeluis49" target="_blank">LinkedIn</AboutButton>
                    <p>
                        Fullstack Developer, passionated about entreperneuship, technologies, 
                        engineering and open source. Working my way out to become a software architect 
                        and to be a entrepeneur at the Phygital market. Also I'm currently working 
                        at Ka Solution as Fullstack Developer Jr. and I have studiet at a technical school 
                        from 2018 until 2020 as an IT student at ITB Brasílio Flores de Azevedo, from 
                        2021 until 2022 as an undergraduate electrical engineer at Poli - USP, and now 
                        as System's Developer and Analyst at FIAP from 2023 until the end of 2024.  
                    </p>
                    <p>
                        🔭 I'm currently working on my own OS, because it would be fun to see if it runs on WASM on the web!
                        <br/><br/>
                        🌱 I'm currently learning Rust, SurrealDB, WASM and another things.
                        <br/><br/>
                        👯 I'm looking to collaborate on open source projects
                        <br/><br/>
                        ⚡ Fun fact: I really like this C++ Donut, it's the contemplation of the art of code:
                    </p>
                    <img id="donuts-in-cpp" src="https://raw.githubusercontent.com/luisfelipeluis49/luisfelipeluis49/main/donut.gif" alt="Donut made of code in C++" />
                </AboutSection>
            </AboutRow>
        </>
    )
}
import React from 'react';
import { DetailSection, TitlePage } from '../style'
import DetailContent from '../components/DetailContent';

export default function Details() {
    return(
        <>
            <TitlePage style={{color: 'white'}}>O que são as mudanças climáticas?</TitlePage>

            <img src='https://brasil.un.org/sites/default/files/styles/take_action_featured_image/public/2022-03/feeling-the-heat.jpg?itok=4cGb8RqI' alt='Aquecimento Global' />

            <DetailSection>
                <DetailContent />
            </DetailSection>
        </>
    )
}
import React from 'react';
import { CardSection, TitlePage } from '../style'
import Card from '../components/Card';

export default function Home() {
    let loremIpsum = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'

    let infos: Array<CardInfo> = [
        {id: '16', alt: 'Mares', title: 'Vida Marítma', text: loremIpsum},
        {id: '808', alt: 'Agro', title: 'Desertificação', text: loremIpsum},
        {id: '34', alt: 'Lixo', title: 'Despejo de Lixo', text: loremIpsum},
        {id: '898', alt: 'Poluição', title: 'Emissão de CO²', text: loremIpsum},
    ];


    return(
        <>
            <TitlePage>MUDANÇA CLIMÁTICAS</TitlePage>

            <CardSection>
                <Card id={infos[0].id} alt={infos[0].alt} title={infos[0].title} text={infos[0].text} />
                <Card id={infos[1].id} alt={infos[1].alt} title={infos[1].title} text={infos[1].text} />
                <Card id={infos[2].id} alt={infos[2].alt} title={infos[2].title} text={infos[2].text} />
                <Card id={infos[3].id} alt={infos[3].alt} title={infos[3].title} text={infos[3].text} />
            </CardSection>

            
             
        </>
    )
}

type CardInfo = {
    id: string,
    alt: string,
    title: string,
    text: string,
}
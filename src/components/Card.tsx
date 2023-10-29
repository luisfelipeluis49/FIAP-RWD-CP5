import React from 'react';
import { CardBody, CardArticle, CardFigure, CardTitle, CardText } from '../style';
import PropTypes from 'prop-types'

export default function Card(props) {
    const url = `https://picsum.photos/id/${props.id}/400/225`

    return (
        <CardArticle>
            <CardFigure>
                <img src={url} alt={props.alt} max-width='100%' />
            </CardFigure>
            <CardBody>
                <CardTitle>
                    {props.title}
                </CardTitle>
                <CardText>
                    {props.text}
                </CardText>
            </CardBody>
        </CardArticle>
    )
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
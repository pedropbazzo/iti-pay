import React from 'react';

import { Container, Details, Img, Title, Description } from './styles';

import img13 from '../../images/13.png';

export default function Banner() {
    return (
        <Container>
            <Details>
                <Title>Pix</Title>

                <Description>
                você já pode fazer um no iti 24h por dia!
                </Description>
            </Details>

            <Img source={img13} />
        </Container>
    );
}

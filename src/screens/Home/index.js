import React from 'react';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Wrapper, Container, Header, BalanceContainer, BalanceTitle, Balance } from './styles';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

export default function Home() {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <MaterialCommunityIcons name="qrcode-scan" size={30} color="#FB5882" />

                    <BalanceContainer>
                        <BalanceTitle>Meu Saldo</BalanceTitle>
                        <Balance>R$ ***** *** **</Balance>
                    </BalanceContainer>

                    <AntDesign name="gift" size={30} color="#F5634E" />
                </Header>

                <Suggestions/>
                <Activities/>
                <Tips/>
                <Banner/>
            </Container>
        </Wrapper>
    );
}

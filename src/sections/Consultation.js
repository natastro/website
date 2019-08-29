import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';

import constants, { CONSULTATIONHEADLINE, CONSULTATIONBUTTON } from '../constants'

import ConsultationPhoto from '../assets/images/consultationPhoto.png'

import ValueTile from '../components/ValueTile'
import Headline from '../components/Headline'
import theme from '../styles/theme';
import BlankButton from '../components/BlankButton'

const Section = styled(Row)`

    background: ${theme.colors.primary};
    height:360px

`

const Wrapper = styled(Col)`

    float: right;
    height:280px

`

const ButtonWrapper = styled(Col)`

    float: right;

`

const ImageContainer = styled(Image)`


    left: 50px;
    position: absolute;
    top: 0;
    height: 360px;
    width: 100%;
    opacity: 0.8;
    transform: skew(15deg,0deg);

`

const OutContainer = styled(Col)`

    position: absolute;
    margin-left: -10%;
    min-height: 360px;
    overflow: hidden;
    transform: skew(-15deg,0deg);
    background: ${theme.colors.primary}
`

const ColDiv = styled(Col)`

    padding:20px
`

class Consultation extends Component {

    renderHeadline = () => {
        return CONSULTATIONHEADLINE.map(t => {
            return (
                <Row>
                    <Wrapper md={12}>
                        <Headline
                            headline={t.headline}
                            color={theme.colors.white}
                            description={t.description}
                            alignment='right'
                        />
                    </Wrapper>
                </Row>
            )
        })
    }

    renderButton = () => {
        return CONSULTATIONBUTTON.map(t => {
            return (
                <ButtonWrapper md={5} xs={6}>
                    <BlankButton
                        url={t.url}
                        description={t.description}
                    />

                </ButtonWrapper>
            )
        })
    }

    render() {
        return (
            <Section>

                <Col md={11}>
                    <Row>
                        <Col xs={0} md={6}>
                            <OutContainer xs={0}>
                                <ImageContainer src={ConsultationPhoto} alt='Photo' />
                            </OutContainer>
                        </Col>
                        <ColDiv md={6}>

                            {this.renderHeadline()}
                            {this.renderButton()}


                        </ColDiv>
                    </Row>
                </Col>
                <Col md={1}>
                </Col>
            </Section>
        )
    }
}

export default Consultation

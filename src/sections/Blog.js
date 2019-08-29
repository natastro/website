import React, { Component } from 'react';
import styled from 'styled-components'
import {
    Container, Image, Row, Col
} from 'react-bootstrap';

import TestimonyTile from '../components/TestimonyTile'
import FilledButton from '../components/FilledButton'
import Headline2 from '../components/Headline2'
import theme from '../styles/theme';


import constants, { TESTIMONIALS, BLOGHEADLINE, BLOGBUTTON } from '../constants'

const Section = styled.div`
    padding-top: 80px;
    padding-bottom:80px;
    background: ${props => props.grey ? '#EEEEEE' : 'white'}
`

const TestimonyDiv = styled(Col)`
    margin-bottom:50px
`
const ButtonDiv = styled(Col)`
    margin: auto;
    margin-bottom:50px


`

class Blog extends Component {

    renderHeadline = () => {
        return BLOGHEADLINE.map(t => {
            return (
                <Col md={12}>
                    <Headline2
                        headline={t.headline}
                        color={theme.colors.black}
                        weight='bold'
                        alignment='left'
                    />
                </Col>
            )
        })
    }

    renderTestimonials = () => {
        return TESTIMONIALS.map(t => {
            return (
                <TestimonyDiv md={4}>
                    <TestimonyTile
                        date={t.date}
                        headline={t.name}
                        description={t.quote}

                    />
                </TestimonyDiv>
            )
        })
    }

    renderButton = () => {
        return BLOGBUTTON.map(t => {
            return (
                <ButtonDiv xs={6} md={2}>
                    <FilledButton
                        url={t.url}
                        description={t.description}
                    />
                </ButtonDiv>
            )
        })
    }

    render() {
        return (
            <Section>
                <Row>

                    <Col xs={10} className='mx-auto'>
                        <Row>
                            {this.renderHeadline()}
                            {this.renderTestimonials()}
                            {this.renderButton()}


                        </Row>
                    </Col>

                </Row>
            </Section>
        )
    }
}

export default Blog

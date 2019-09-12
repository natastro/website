import React, { Component } from 'react';


import { QUOTE } from '../content/constants'

import Header from '../components/Header'
import Hero from '../sections/Hero'
import Programs from '../sections/Programs'
import CoreValues from '../sections/CoreValues'
import Consultation from '../sections/Consultation'
import Blog from '../sections/Blog'
import Quote from '../sections/Quote'
import Newsletter from '../sections/Newsletter'
import Footer from '../sections/Footer'


class HomePage extends Component {

    renderQuote = () => {
        return QUOTE.map(t => {
            return (
                <Quote
                    headline={t.headline}
                    author={t.author}
                    company={t.company}
                    key={t.key}
                />
            )
        })
    }

    render() {
        return (

            <div>

                <Header />
                <Hero />
                <Programs />
                <CoreValues />
                <Consultation />
                <Blog />
                {this.renderQuote()}
                <Newsletter />
                <Footer />

            </div>


        );
    }
}

export default HomePage;

import React, { Component } from 'react';
import { Container } from './styles';
import Carousel from '../../components/carousel';


class Screen1 extends Component {
    componentDidMount() {
        console.log('screen1 props', this.props);
    }
    render() {
        return (
            <Container>
                <h1>Screen1</h1>
                <Carousel />
                <Carousel />
                <Carousel />
                <Carousel />
                <Carousel />
            </Container>
        )
    }
}
export default Screen1;

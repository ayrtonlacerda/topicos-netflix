import React, { Component } from 'react';
import { Container, Title } from './styles';

const pathUrl = 'https://image.tmdb.org/t/p/original//a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg'

class DetailsScreen extends Component {
  state = {
    details: null,
  }

  componentWillMount() {
    // fazer requisição Usando axios dos detalher do filme e apresentar na tela
  }

  render() {
    return (
      <Container url={pathUrl}>
        <Title>details</Title>
      </Container>
    )
  }
}

export default DetailsScreen;
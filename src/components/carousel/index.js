import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { Card } from './styles';

/*
 Nessa classe, deve adicionar elementos dentro da tag card ja criada
 como titulo detalhes ranking entre outros
 para ser apresentado na tela inicial
*/

class Carousel extends Component {
  state = {
    movies: [],
  }
  componentDidMount() {
    console.log('Carousel props', this.props);
  }

  render() {
    const { content } = this.props;
    return (
      <div class="carousel">
        <div class="carousel-row">
          {content.map(item =>
            <div class="carousel-tile">
              <Link to={{ pathname: "/details", state: item }}>
                <Card />
              </Link>
            </div>
          )}
        </div>
      </div>

    )
  }
}
export default Carousel;

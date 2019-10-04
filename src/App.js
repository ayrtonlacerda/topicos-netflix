import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import {
  Container,
  ContainerElement,
  InfoContainer,
  Element
} from './styles';


class App extends Component {

  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });

    setTimeout(() => {
      this.setState({
        children: this.createChildren([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
      })
    }, 100);
  }

  createChildren = n => n.map(i => <div key={i} style={{ height: 200, background: '#333', width: 300 }}>{i}</div>);

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    const {
      activeItemIndex,
      children,
    } = this.state;


    return (
      <Container>
        <InfoContainer />
        <ContainerElement />
      </Container>
    );
  }
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, DivButton } from './styles';

const navigateToPage = props => {
  props.history.push({ pathname: '/screen1', state: { id: 7, color: 'green' } });
}

const Screen2 = props => (
  <Container>
    <Link to={{ pathname: '/screen1', state: { id: 7, color: 'green' } }}>
      <DivButton />
    </Link>

    <h1>Screen2</h1>

    <button onClick={() => navigateToPage(props)}>cliqueaqui</button>

  </Container>
);

export default Screen2;

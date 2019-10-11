import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  height: calc(var(--carousel-tile-width) / (16 / 9));
  width: 250px;  
  margin: 3px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('https://image.tmdb.org/t/p/original//a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg'); /* fallback */
  background-image: linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0.0) 100%), url('https://image.tmdb.org/t/p/original//a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg');
`;
import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  border-style: none;
  margin: -8px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: ${props => `url(${props.url})`}; /* fallback */
  background-image: linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0.0) 100%), ${props => `url(${props.url})`};
 
`;

// for pass props: 
/* 
background-image: url('https://image.tmdb.org/t/p/original//a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg'); 
*/
export const Title = styled.h1`
  font-family: Roboto-Bold;
  color: white;
`;
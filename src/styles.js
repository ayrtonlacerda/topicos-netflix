import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
  background-color: #555;
  align-items: center;
  justify-content: center;
  border-style: none;
  margin: -8px;
`;

export const ScrollContent = styled.section`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 50px;
  flex-wrap: nowrap;
  overflow-x: auto;
  overscroll-behavior-x: auto;
`;

export const TestDiv = styled.div`
  height: 230px;
  width: 230px;
  background-color: #fff;
  margin: 3px;
`;

export const Element = styled.image`
  display: flex;
  height: 230px;
  width: 230px;  
  margin: 3px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  background-image: url('https://image.tmdb.org/t/p/original//a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg'); /* fallback */

  background-image: linear-gradient(to right, rgba(0,0,0,1) 5%, rgba(0,0,0,0.0) 100%), url('https://image.tmdb.org/t/p/original//a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg');
`;

export const ContainerElement = styled.div`
  display: flex;
  flex-direction: row;
  height: 50vh;
  width: 70vw;
  background-color: #333;
  align-items: center;
  justify-content: center;
  border-style: none;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  background-image: url('https://image.tmdb.org/t/p/original//a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg'); /* fallback */

  background-image: linear-gradient(to right, #333 5%, rgba(0,0,0,0.0) 100%), url('https://image.tmdb.org/t/p/original//a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg');
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50vh;
  width: 30vw;
  background-color: #333;
  align-items: center;
  justify-content: center;
  border-style: none;
`;



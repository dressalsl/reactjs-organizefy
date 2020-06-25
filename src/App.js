import React from 'react';
import GlobalStyle from './styles/global';

import Header from './components/header';
import Board from './components/board';

function App() {
  return (
    <>
      <Header></Header>
      <GlobalStyle></GlobalStyle>
      <Board></Board>
    </>  
  );
}

export default App;

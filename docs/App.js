import React from 'react';
import Dialog, { Header, Title, Body, Footer } from '../src';

const App = () =>
  (
    <Dialog show progressBar={false}>
      <Header>
        <Title>Title</Title>
      </Header>
      <Body>
        <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
        </p>
      </Body>
      <Footer>
        <button>Button</button>
      </Footer>
    </Dialog>
  );

export default App;

# react-moi-dialog

React Component Material Design Dialog.

## Installation

    $ yarn add react-moi-dialog

## Example
```javascript
import React from 'react';
import Dialog, { Header, Title, Body, Footer } from 'react-moi-dialog';

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

```

## Props

Name | Description | Default/Required | Type
------|-------------|----------|-----------
show | Show or hide dialog. | required | bool
progressBar | Show ProgressBar with overlay. | optional | bool

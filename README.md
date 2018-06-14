# react-md-dialog

React Component Material Design Dialog.

## Installation

    $ yarn add react-md-dialog

## Example
```javascript
import Dialog from 'react-md-dialog';

<Dialog show={true}>
  <div>
    Hello world
  </div>
</Dialog>
```

## Props

Name | Description | Default/Required | Type
------|-------------|----------|-----------
show | Show or hide dialog. | required | bool
progressBar | Show ProgressBar with overlay. | optional | bool
errors | Shor error messages. | optional | array

## Errors

```javascript
const errors = [
  {
    message: 'Example error 1.'
  },
  {
    message: 'Example error 2.'
  }
]
```

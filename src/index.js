/* global window */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-md-progress-bar';
import styled from 'styled-components';

class Dialog extends Component {
  /**
   * React Component constructor.
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
      progressBar: props.progressBar,
      errors: props.errors,
    };
  }

  /**
   * Update state based nextProps.
   * @param nextProps
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.show,
      progressBar: nextProps.progressBar,
      errors: nextProps.errors,
    });
  }

  /**
   * Render progress.
   * @returns {XML}
   */
  renderProgress() {
    return (this.state.progressBar) ? <ProgressBar show overlay /> : null;
  }

  /**
   * Render modal.
   * @returns {XML}
   */
  renderModal() {
    return (
      <Container style={{ ...{ height: window.innerHeight } }}>
        <Wrapper>
          { this.renderProgress() }
          { this.props.children }
        </Wrapper>
      </Container>
    );
  }

  /**
   * Render error message.
   * @returns {XML}
   */
  renderErrors() {
    let errors;
    if (this.state.errors) {
      errors = this.state.errors.map((error, index) =>
        <ErrorItem key={index.toString()}>{error.message}</ErrorItem>,
      );
    }
    return (this.state.errors) ? <Errors>{errors}</Errors> : null;
  }

  /**
   * Render error message.
   * @returns {XML}
   */
  render() {
    return (this.state.show) ? this.renderModal() : null;
  }
}

Dialog.defaultProps = {
  errors: [],
};

Dialog.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  show: PropTypes.bool.isRequired,
  progressBar: PropTypes.bool.isRequired,
  errors: PropTypes.array,
};

export default Dialog;

/**
 * Styles
 */
export const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
`;

export const Title = styled.h1`
  color: #333333;
  font-size: 16px;
  margin: 0;
  padding: 0;
`;

export const Body = styled.div`
  padding: 15px;
  @media (max-width: 576px) {
    padding: 10px 20px;
  }
`;

export const Footer = styled.div`
  padding: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
`;

export const Wrapper = styled.div`
  border-radius: 4px;
  width: 600px;
  background-color: white;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  position: relative;
  overflow: hidden;
  @media (max-width: 576px) {
    border-radius: 0;
    width: 100%;
    height: 100% !important;
    top: 0;
    right: 0;
    margin: 0;
    box-shadow: none;
  }
}
`;

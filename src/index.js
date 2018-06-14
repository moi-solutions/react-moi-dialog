import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-md-progress-bar';
import ReactModal from 'react-modal';
import styled from 'styled-components';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    padding: '0',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
};

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
      <ReactModal
        isOpen={this.props.show}
        ariaHideApp={false}
        style={customStyles}
        shouldCloseOnOverlayClick
      >
        <Wrapper>
          { this.renderProgress() }
          { this.props.children }
        </Wrapper>
      </ReactModal>
    );
  }

  /**
   * Render modal message.
   * @returns {XML}
   */
  render() {
    return (this.state.show) ? this.renderModal() : null;
  }
}

Dialog.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  show: PropTypes.bool.isRequired,
  progressBar: PropTypes.bool.isRequired,
};

export default Dialog;

/**
 * Styles
 */
export const Header = styled.div`
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
`;

export const Title = styled.h1`
  color: #333333;
  font-size: 16px;
  margin: 0;
  padding: 0;
  font-weight: bold;
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

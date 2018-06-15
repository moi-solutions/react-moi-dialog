import PropTypes from 'prop-types';
import React from 'react';
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

function Dialog({ children, progressBar, show }) {
  if (!show) {
    return null;
  }

  return (
    <ReactModal shouldCloseOnOverlayClick ariaHideApp={false} isOpen={show} style={customStyles}>
      <Wrapper>
        {progressBar ? <ProgressBar show overlay /> : null}
        {children}
      </Wrapper>
    </ReactModal>
  );
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

const Wrapper = styled.div`
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

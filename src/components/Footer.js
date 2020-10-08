import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = (props) => {
  return (
    <>
      <footer className="footer">
        <p>
          <a href="https://www.linkedin.com/in/gustavoml/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <strong>copyright</strong>
          <em>{new Date().getFullYear()}</em>
        </p>
      </footer>
    </>
  );
};

Footer.propTypes = {};

export default Footer;

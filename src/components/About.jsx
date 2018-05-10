import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import Button from '../components/Button';

const Wrapper = styled.section`
  .container {
    position: relative;
    z-index: 5;
  }

  @media only screen and (max-width: 991px) {
    body {
      font-size: 14px;
      -webkit-text-size-adjust: 100%;
    }
    .container {
      max-width: 720px;
    }
  }
  @media only screen and (max-width: 767px) {
    .container {
      padding-left: 20px;
      padding-right: 20px;
      max-width: 100%;
    }
  }
  @media only screen and (max-width: 480px) {
    h3 {
      font-size: 1.3em;
    }
  }
  img {
    outline: 0;
    border: 0 none;
    max-width: 100%;
    height: auto;
    vertical-align: top;
    -ms-border-radius: 5px;
    border-radius: 5px;
  }
  /*! 04.0 - COMMON */
  @media only screen and (max-width: 767px) {
    body {
      min-width: 300px;
    }
  }
  .section-bg-lavendar {
    background: #5d46e8;
  }
  .section-bg-lavendar h3,
  .section-bg-lavendar h6,
  .section-bg-lavendar p {
    color: #fff;
  }
  .about-section-innr {
    position: relative;
    z-index: 2;
    padding: 150px 40px 150px 0;
  }
  .about-section-innr:before {
    position: absolute;
    top: 0;
    left: -190px;
    width: 270px;
    height: 100%;
    content: '';
    z-index: -1;
    background: #5d46e8;
    border-radius: 100px 0 0 100px;
    transform: skew(9deg);
  }
  .about-section-innr:after {
    position: absolute;
    top: 0;
    right: -280px;
    width: 370px;
    height: 100%;
    content: '';
    z-index: -1;
    background: #5d46e8;
    border-radius: 0 100px 100px 0;
    transform: skew(-7deg);
    overflow: hidden;
  }
  .about-section-innr h3 span {
    color: #fff;
    font-weight: 300;
  }
  .about-section-innr h6 {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
  }
  .about-shade {
    position: absolute;
    left: -120px;
    bottom: 65px;
    width: 100%;
    height: calc(100% - 130px);
    border-radius: 0 0 0 45px;
    background-image: linear-gradient(to top right, #fff 0%, transparent 50%, transparent 100%);
    opacity: 0.15;
    transform: skew(9deg);
  }
  .about-shade:after {
    position: absolute;
    left: 50px;
    bottom: 50px;
    width: 100%;
    height: 100%;
    content: '';
    border-radius: 0 0 0 45px;
    background-image: linear-gradient(to top right, #fff 0%, transparent 40%, transparent 100%);
  }
  @media only screen and (max-width: 575px) {
    .about-section-innr {
      padding: 50px 0 90px 0;
    }
  }
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
  .row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  .col-lg-5,
  .col-lg-7 {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (min-width: 992px) {
    .col-lg-5 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 41.666667%;
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    .col-lg-7 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 58.333333%;
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
  }
  /*! Template : ICO Crypto - Cryptocurrency Landing Template Author : Softnio Version : 1.2.0 Updated : 04.24.2018 */
  /*! 01.0 - FONTS */
  @font-face {
    font-family: 'Poppins';
    src: url('../fonts/Poppins-Bold.eot');
    src: local('Poppins Bold'), local('Poppins-Bold'),
      url('../fonts/Poppins-Bold.eot?#iefix') format('embedded-opentype'),
      url('../fonts/Poppins-Bold.woff2') format('woff2'), url('../fonts/Poppins-Bold.woff') format('woff'),
      url('../fonts/Poppins-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('../fonts/Poppins-Light.eot');
    src: local('Poppins Light'), local('Poppins-Light'),
      url('../fonts/Poppins-Light.eot?#iefix') format('embedded-opentype'),
      url('../fonts/Poppins-Light.woff2') format('woff2'), url('../fonts/Poppins-Light.woff') format('woff'),
      url('../fonts/Poppins-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('../fonts/Poppins-SemiBold.eot');
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
      url('../fonts/Poppins-SemiBold.eot?#iefix') format('embedded-opentype'),
      url('../fonts/Poppins-SemiBold.woff2') format('woff2'), url('../fonts/Poppins-SemiBold.woff') format('woff'),
      url('../fonts/Poppins-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('../fonts/Poppins-Medium.eot');
    src: local('Poppins Medium'), local('Poppins-Medium'),
      url('../fonts/Poppins-Medium.eot?#iefix') format('embedded-opentype'),
      url('../fonts/Poppins-Medium.woff2') format('woff2'), url('../fonts/Poppins-Medium.woff') format('woff'),
      url('../fonts/Poppins-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('../fonts/Poppins-Regular.eot');
    src: local('Poppins Regular'), local('Poppins-Regular'),
      url('../fonts/Poppins-Regular.eot?#iefix') format('embedded-opentype'),
      url('../fonts/Poppins-Regular.woff2') format('woff2'), url('../fonts/Poppins-Regular.woff') format('woff'),
      url('../fonts/Poppins-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  /*! 02.0 - RESET */
  body {
    font-family: 'Poppins', sans-serif;
    color: #3c3c3c;
    font-size: 15px;
    line-height: 1.86;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
  }
  body {
    color: #fff;
    background: #10122d;
  }
  html,
  body {
    overflow-x: hidden;
  }
  h3,
  h6,
  p {
    margin: 0 0 18px;
  }
  p:last-child {
    margin-bottom: 0;
  }
  h3,
  h6 {
    line-height: 1.33;
    font-weight: 600;
    color: #373e45;
  }
  h3 {
    font-size: 1.87em;
  }
  h6 {
    font-size: 1.07em;
  }
  p {
    font-size: 1em;
  }
  h3 span {
    color: #46bdf4;
  }
  .container {
    position: relative;
    z-index: 5;
  }
  h3,
  h6 {
    color: #fff;
  }
  @media only screen and (max-width: 991px) {
    body {
      font-size: 14px;
      -webkit-text-size-adjust: 100%;
    }
    .container {
      max-width: 720px;
    }
  }
  @media only screen and (max-width: 767px) {
    .container {
      padding-left: 20px;
      padding-right: 20px;
      max-width: 100%;
    }
  }
  @media only screen and (max-width: 480px) {
    body {
      min-width: 320px;
    }
    h3 {
      font-size: 1.3em;
    }
  }
  /*! 03.0 - UTILITY */
  img {
    outline: 0;
    border: 0 none;
    max-width: 100%;
    height: auto;
    vertical-align: top;
    -ms-border-radius: 5px;
    border-radius: 5px;
  }
  /*! 04.0 - COMMON */
  @media only screen and (max-width: 767px) {
    body {
      min-width: 300px;
    }
  }
  .col-sm-3,
  .col-sm-9 {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (min-width: 576px) {
    .col-sm-3 {
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-sm-9 {
      -ms-flex: 0 0 75%;
      flex: 0 0 75%;
      max-width: 75%;
    }
  }
`;

const About = () => (
  <Wrapper>
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="about-section-innr section-bg-lavendar">
            <div className="about-shade" />
            <h6>About Company Name</h6>
            <h3>
              Company Name <span>is a decentralized currency that trades and invest with powerful</span> blockchain
              applications.
            </h3>
            <p>ICO Crypto is a platform for future of funding that powering the new blockchain. </p>
            <p>
              ICOX Coin is a cryptocurrency designed for unde omnis iste natus error sit voluptatem accus antium
              doloremque laudant aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="about-image">
            <img src="/home-about.svg" alt="graph" />
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default About;

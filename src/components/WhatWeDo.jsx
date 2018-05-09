import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

const Wrapper = styled.section`
  color: white;
  .container {
    position: relative;
    z-index: 5;
  }
  @media only screen and (max-width: 991px) {
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
  .section-pad-md {
    padding-top: 90px;
    padding-bottom: 90px;
  }
  @media screen and (min-width: 1600px) {
    .section-pad-md {
      padding-top: 120px;
      padding-bottom: 120px;
    }
  }
  @media only screen and (max-width: 991px) {
    .res-m-bttm {
      margin-bottom: 30px;
    }
  }
  @media only screen and (max-width: 991px) {
    .res-m-bttm {
      margin-bottom: 30px;
    }
  }
  .section {
    position: relative;
  }
  .section-bg-angle {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    content: '';
    transform: skewY(17deg);
    z-index: 1;
    background-color: #3455ff;
  }
  .section-head-s4 {
    padding-bottom: 50px;
  }
  @media only screen and (max-width: 1024px) {
    .section-bg-angle {
      transform: skewY(10deg);
    }
  }
  .text-box {
    padding-right: 30px;
    border-radius: 6px;
  }
  .text-box h6 {
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 8px;
    color: #ffc123 !important;
  }
  .text-box.text-box-bg {
    padding: 40px 30px;
    background: rgba(0, 0, 0, 0.2);
  }
  .text-box h6 {
    color: #ffc123 !important;
  }
  .text-box.text-box-bg {
    background: rgba(0, 0, 0, 0.2);
  }

  *,
  ::after,
  ::before {
    box-sizing: border-box;
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
  .col-lg-4,
  .col-lg-6 {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (min-width: 992px) {
    .col-lg-4 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-lg-6 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
`;

const WhatWeDo = () => (
  <Wrapper>
    <div className="section section-pad-md section-bg-muscari section-angle">
      <div className="section-bg-angle section-muscari" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-head-s4">
              <h2 className="section-title">Problem &amp; Solution</h2>
              <p>
                We are creating tokens to solve the world’s biggest blockchain issues surrounding cross-border payments,
                data accessibility and payment.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 res-m-bttm">
            <div className="text-box">
              <h4>Problems with Information Sharing</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="col-lg-4 res-m-bttm">
            <div className="text-box">
              <h4>Relation between provider and end-user</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-box text-box-bg">
              <h6>Our Solution</h6>
              <h4>That All Change with ICO Crypto</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.{' '}
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default WhatWeDo;

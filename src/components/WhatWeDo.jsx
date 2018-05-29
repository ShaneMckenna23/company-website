import React from 'react';
import styled from 'react-emotion';
import FA from 'react-fontawesome';

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
    background: ${props => props.theme.gradient.rightToLeft};
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
    display: flex;
    align-items: center;
    flex-direction: column;
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
              <h2 className="section-title">What We Do</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 res-m-bttm">
            <div className="text-box">
              <FA name="paint-brush" size="5x" style={{ marginBottom: '20px' }} />
              <h4>Design</h4>
              <p>
                Clean and responsive design. For success in any online business, a user friendly website is a must as it
                provides a enhanced user experience to the online visitors.
              </p>
              <br />
              <br />
            </div>
          </div>
          <div className="col-lg-4 res-m-bttm">
            <div className="text-box">
              <FA name="code" size="5x" style={{ marginBottom: '20px' }} />
              <h4>Development</h4>
              <p>
                We always use the best technolgies available for your project. We build all our project with SEO in mind
                and ensure fast load times by using advanced caching techniques which improve page speed.
              </p>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className="text-box">
              <FA name="server" size="5x" style={{ marginBottom: '20px' }} />
              <h4>Hosting</h4>
              <p>
                Our projects run on Google Cloud Platform, the same infrastuture that supports google applications. We
                serve content via a Global Content Delivery Network and ensure all cummunication is over HTTPS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default WhatWeDo;

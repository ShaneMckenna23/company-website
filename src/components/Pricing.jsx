import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import Button from '../components/Button';

const Wrapper = styled.section`
  background-color: #fff;
  border-radius: 10px;
  padding: 15px 25px;
  position: relative;
  width: 100%;
  z-index: 10;
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.08), 0px 20px 31px 3px rgba(0, 0, 0, 0.09),
    0px 8px 20px 7px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
  }

  * {
    text-align: center;
    text-transform: uppercase;
  }

  .pricing-plan:last-child {
    border-bottom: none;
  }

  @media (min-width: 900px) {
    .pricing-plan {
      border-bottom: none;
      border-right: 1px solid #e1f1ff;
      flex-basis: 100%;
      padding: 25px 50px;
    }

    .pricing-plan:last-child {
      border-right: none;
    }
  }
`;

const PricingPlan = styled.div`
  border-bottom: 1px solid #e1f1ff;
  padding: 25px;

  img {
    margin-bottom: 25px;
    max-width: 100%;
  }

  h2 {
    color: #888;
    font-weight: 600;
    letter-spacing: 1px;
  }

  ul {
    color: #4b9cfb;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 50px 0 25px;
    list-style-type: none;
  }

  li {
    border-top: 1px solid #e1f1ff;
    font-size: 12px;
    line-height: 1.5;
    padding: 15px 0;
  }

  li:last-child {
    border-bottom: 1px solid #e1f1ff;
  }

  span {
    color: #4b9cfb;
    display: block;
    font-size: 32px;
    font-weight: 700;
  }
`;

const Pricing = () => (
  <Wrapper>
    <PricingPlan className="pricing-plan">
      <img src="/price1.jpg" alt="" />
      <h2>Personal</h2>
      <ul>
        <li>Custom domains</li>
        <li>Sleeps after 30 mins of inactivity</li>
      </ul>
      <span className="pricing-price">Free</span>
      <Link to="/projects">
        <Button type="secondary">Get Started</Button>
      </Link>
    </PricingPlan>
    <PricingPlan className="pricing-plan">
      <img src="/price2.jpg" alt="" />
      <h2>Business</h2>
      <ul>
        <li>Custom domains</li>
        <li>Sleeps after 30 mins of inactivity</li>
      </ul>
      <span className="pricing-price">Free</span>
      <Link to="/projects">
        <Button type="secondary">Get Started</Button>
      </Link>
    </PricingPlan>
    <PricingPlan className="pricing-plan">
      <img src="/price3.jpg"  alt="" />
      <h2>Multi-Page</h2>
      <ul>
        <li>Custom domains</li>
        <li>Sleeps after 30 mins of inactivity</li>
      </ul>
      <span className="pricing-price">Free</span>
      <Link to="/projects">
        <Button type="secondary">Get Started</Button>
      </Link>
    </PricingPlan>
  </Wrapper>
);

export default Pricing;

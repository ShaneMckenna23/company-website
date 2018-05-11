import React from 'react';
import styled from 'react-emotion';

const Wrapper = styled.section`
  .main-content {
    padding: 20px;
  }

  @media (max-width: 768px) {
    .main-content {
      padding: 20px 8px;
    }
  }

  /* form specific formatting */
  .form-group {
    display: flex;
    flex-direction: row;
  }

  .form-group label {
    flex: none;
    display: block;
    width: 125px;
    font-weight: bold;
    font-size: 1em;
  }
  .form-group label.right-inline {
    text-align: right;
    padding-right: 8px;
    padding-left: 10px;
    width: auto;
  }

  .form-group .input-control {
    flex: 1 1 auto;
    display: block;
    margin-bottom: 10px;
    margin-right: 8px;
    padding: 4px;
    margin-top: -4px;
  }

  button {
    padding: 5px 15px;
    margin: 5px;
    min-width: 100px;
  }

  @media (max-width: 768px) {
    .form-group {
      flex-direction: column;
    }
    .form-group .input-control {
      margin-top: 2px;
    }
    .form-group label.right-inline {
      text-align: left;
      padding-right: 0;
      padding-left: 0;
    }
  }
`;

const QuoteForm = () => (
  <Wrapper>
    <form name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input name="name" placeholder="Your Name" type="text" />
      <input name="email" placeholder="name@name.com" type="email" />
      <textarea name="message" />
      <button>Send</button>
    </form>
  </Wrapper>
);

export default QuoteForm;

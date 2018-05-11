import React from 'react';
import styled from 'react-emotion';
import { navigateTo } from 'gatsby-link';

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

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

class QuoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => navigateTo('/thanks/'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your name:<br />
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your email:<br />
              <input type="email" name="email" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message:<br />
              <textarea name="message" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}

export default QuoteForm;

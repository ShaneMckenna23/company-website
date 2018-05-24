import 'rc-slider/assets/index.css';
import React from 'react';
import styled from 'react-emotion';
import { toast } from 'react-toastify';
import { Range } from 'rc-slider';
import Button from './Button';

const Wrapper = styled.section`
  .flex-container-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row wrap;
    margin-bottom: 1em;

    @media (max-width: ${props => props.theme.breakpoints.l}) {
      input {
        width: 100%;
      }

      .form-item {
        margin-right: 0em;
        width: 100%;
      }
    }
  }

  .margin {
    margin-right: 1em;
    margin-bottom: 0.5em;
  }

  form {
    position: relative;
    width: 100%;
    max-width: 85rem;
    font-size: 1.5em;
    font-weight: normal;
    line-height: 1.2222em;
  }

  textarea {
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    outline: none;
    border: none;
    border-bottom: 2px solid #b3b3b3;
    background: transparent;
    resize: none;
  }

  textarea:focus {
    border-bottom: 2px solid #abe2fb;
  }

  input {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    outline: none;
    border: none;
    border-bottom: 2px solid #b3b3b3;
    background: transparent;
  }

  input:focus {
    border-bottom: 2px solid #abe2fb;
  }

  .rc-slider-rail {
    background-color: #b3b3b3;
    height: 2px;
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
    const lower = props.budgetMax / 2;
    const higher = props.budgetMax / 2 + props.budgetMin;
    this.state = {
      budget: [lower, higher],
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleBudgetChange = budget => {
    this.setState({
      budget,
    });
  };

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => this.successMessage())
      .catch(error => alert(error));

    e.preventDefault();

    toast.success('🚀 Quote Submission Successful', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  };

  successMessage = () => {
    document.getElementById('contactForm').reset();
    const lower = this.props.budgetMax / 2;
    const higher = this.props.budgetMax / 2 + this.props.budgetMin;
    this.setState({
      budget: [lower, higher],
    });
  };

  render() {
    return (
      <Wrapper>
        <form
          id="contactForm"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>

          <div className="flex-container-row">
            <div className="form-item margin">
              <label htmlFor="name">Full Name:</label>
              <input id="name" type="text" name="name" onChange={this.handleChange} required />
            </div>
            <div className="form-item">
              <label htmlFor="email">Email:</label>
              <input id="email" type="email" name="email" onChange={this.handleChange} required />
            </div>
          </div>

          <div className="flex-container-row">
            <label htmlFor="budget">
              Budget: €{this.state.budget[0]} - €{this.state.budget[1]}
            </label>
            <Range
              id="budget"
              value={this.state.budget}
              onChange={this.handleBudgetChange}
              allowCross={false}
              min={this.props.budgetMin}
              max={this.props.budgetMax}
              step={25}
            />
          </div>
          <label htmlFor="message">Message:</label>
          <div className="flex-container-row">
            <textarea
              name="message"
              cols="40"
              rows="5"
              placeholder="Tell us about your project"
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="flex-container-row">
            <Button type="secondary">Send Message</Button>
          </div>
        </form>
      </Wrapper>
    );
  }
}

export default QuoteForm;

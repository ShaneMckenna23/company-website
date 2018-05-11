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
    <form name="quote" method="POST" netlify>
      <div className="form-group">
        <label>First Name</label>
        <input value="Rick" className="input-control" />

        <label className="right-inline">Last Name</label>
        <input value="Strahl" className="input-control" />
      </div>

      <div className="form-group">
        <label>Company</label>
        <input value="West Wind" className="input-control" />
      </div>

      <div className="form-group">
        <label>Address</label>
        <textarea className="input-control">32 North End</textarea>
      </div>

      <div className="form-group">
        <label>City,State,Zip</label>
        <input value="Walnut Creek" className="input-control" placeholder="City" style={{ flex: '6' }} />
        <input value="CA" className="input-control" placeholder="State" style={{ flex: '1' }} />
        <input value="94152" className="input-control" placeholder="Postal Code" style={{ flex: '2' }} />
      </div>

      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  </Wrapper>
);

export default QuoteForm;

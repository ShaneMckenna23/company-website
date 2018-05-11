import React from 'react';
import styled from 'react-emotion';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Checkbox, Radio } from 'react-bootstrap';

const Wrapper = styled.section``;

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class QuoteForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: '',
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>
        <FieldGroup id="formControlsText" type="text" label="Full Name" placeholder="Enter name" />
        <FieldGroup id="formControlsEmail" type="email" label="Email address" placeholder="Enter email" />
        <FieldGroup id="formControlsFile" type="file" label="File" help="Example block-level help text here." />


        <FormGroup>
          <Checkbox inline>1</Checkbox> <Checkbox inline>2</Checkbox> <Checkbox inline>3</Checkbox>
        </FormGroup>
        <FormGroup>
          <Radio name="radioGroup" inline>
            1
          </Radio>{' '}
          <Radio name="radioGroup" inline>
            2
          </Radio>{' '}
          <Radio name="radioGroup" inline>
            3
          </Radio>
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">...</option>
          </FormControl>
        </FormGroup>
        <FormGroup controlId="formControlsSelectMultiple">
          <ControlLabel>Multiple select</ControlLabel>
          <FormControl componentClass="select" multiple>
            <option value="select">select (multiple)</option>
            <option value="other">...</option>
          </FormControl>
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Textarea</ControlLabel>
          <FormControl componentClass="textarea" placeholder="textarea" />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Static text</ControlLabel>
          <FormControl.Static>email@example.com</FormControl.Static>
        </FormGroup>

        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default QuoteForm;

import * as React from 'react';
import { Form, FormGroup, Label } from 'reactstrap';
import { FeedbackQuestionProps } from '../FeedbackQuestionProps';

function renderOption(option: any) {
  const optionId = `opt-${option.value}`;

  return (
    <div key={option.value}>
      <input type={'radio'} id={optionId}/>
      <Label for={optionId}>{option.text}</Label>
    </div>
  );
}

export default ({ question }: FeedbackQuestionProps) => {
  const options = JSON.parse(question.custom_info).choices;

  return (
    <div>
      <p>{question.question}</p>
      <Form>
        <FormGroup>
          {options.map((option: any) => renderOption(option))}
        </FormGroup>
      </Form>
    </div>
  );
};

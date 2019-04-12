import * as React from 'react';
import { Form, FormGroup, Label } from 'reactstrap';
import Col from 'reactstrap/lib/Col';
import { UserFeedbackQuestion } from '../../../../../types';
import FeedbackQuestionContainer from '../FeedbackQuestionContainer';
import { FeedbackQuestionProps } from '../FeedbackQuestionProps';

interface Choice {
  value: string;
  text: string;
}

interface JSONResponse {
  choices: Choice[];
}

function renderOption(option: Choice, name: string) {
  const optionId = `opt-${option.value}`;

  return (
    <div key={option.value}>
      <input type={'radio'} id={optionId} name={`multiple-choice-${name}`}/>
      <Label for={optionId} className="ml-2">{option.text}</Label>
    </div>
  );
}

function parseCustomInfo(question: UserFeedbackQuestion) {
  return JSON.parse(question.custom_info) as JSONResponse;
}

export default ({ question }: FeedbackQuestionProps) => {
  const options = parseCustomInfo(question).choices;

  return (
    <FeedbackQuestionContainer>
      <Col>
        <h6>{question.question}</h6>
      </Col>
      <Col>
        <Form>
          <FormGroup>
            {options.map(choice => renderOption(choice, question.id.toString()))}
          </FormGroup>
        </Form>
      </Col>
    </FeedbackQuestionContainer>
  );
};

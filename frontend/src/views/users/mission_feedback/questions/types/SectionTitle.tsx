import * as React from 'react';
import Col from 'reactstrap/lib/Col';
import FeedbackQuestionContainer from '../FeedbackQuestionContainer';
import { FeedbackQuestionProps } from '../FeedbackQuestionProps';

export default ({ question }: FeedbackQuestionProps) => (
  <FeedbackQuestionContainer>
    <Col>
      <h4>{question.question}</h4>
    </Col>
    <Col>
      <p>{question.options[0]} - {question.options[1]}</p>
    </Col>
  </FeedbackQuestionContainer>
);

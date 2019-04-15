import * as React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import Col from 'reactstrap/lib/Col';
import FeedbackQuestionContainer from '../FeedbackQuestionContainer';
import { FeedbackQuestionProps } from '../FeedbackQuestionProps';

function renderButton(index: number, activeIndex: number, setActiveIndex: React.Dispatch<React.SetStateAction<number>>) {
  const isActive = activeIndex === index;

  return (
    <Button
      color={isActive ? 'primary' : 'secondary'}
      key={index}
      active={isActive}
      onClick={() => setActiveIndex(index)}
    >
      {index + 1}
    </Button>
  );
}

export default ({ question }: FeedbackQuestionProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <FeedbackQuestionContainer>
      <Col>
        <h6>{question.question}</h6>
      </Col>
      <Col>
        <ButtonGroup>
          {
            [...(Array(4).keys() as any)]
              .map(index => renderButton(index, activeIndex, setActiveIndex))
          }
        </ButtonGroup>
      </Col>
    </FeedbackQuestionContainer>
  );
};

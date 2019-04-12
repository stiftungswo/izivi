import { useState } from 'react';
import * as React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { FeedbackQuestionProps } from '../FeedbackQuestionProps';

function renderButton(index: number, activeIndex: number, setActiveIndex: React.Dispatch<React.SetStateAction<number>>) {
  return (
    <Button
      color="primary"
      key={index}
      active={activeIndex === index}
      onClick={() => setActiveIndex(index)}
    >
      {index + 1}
    </Button>
  );
}

export default ({ question }: FeedbackQuestionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <p>{question.question}</p>
      <ButtonGroup>
        {
          [...(Array(4).keys() as any)]
            .map(index => renderButton(index, activeIndex, setActiveIndex))
        }
      </ButtonGroup>
    </div>
  );
};

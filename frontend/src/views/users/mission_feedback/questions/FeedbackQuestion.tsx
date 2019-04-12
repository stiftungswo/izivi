import * as React from 'react';
import { UserFeedbackQuestionType } from '../../../../types';
import { FeedbackQuestionProps } from './FeedbackQuestionProps';
import LikertScale from './types/LikertScale';
import MultipleChoice from './types/MultipleChoice';
import SectionTitle from './types/SectionTitle';

export default (props: FeedbackQuestionProps) => {
  switch (props.question.type) {
    case UserFeedbackQuestionType.SectionTitle:
      return <SectionTitle {...props}/>;
    case UserFeedbackQuestionType.LikertScale:
      return <LikertScale {...props}/>;
    case UserFeedbackQuestionType.MultipleChoice:
      return <MultipleChoice {...props}/>;
    default:
      return <></>;
  }
};

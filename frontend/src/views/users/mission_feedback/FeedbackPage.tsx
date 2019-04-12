import { inject } from 'mobx-react';
import * as React from 'react';
import { UserFeedbackQuestionStore } from '../../../stores/userFeedbackQuestionStore';
import { UserFeedbackQuestion } from '../../../types';
import FeedbackQuestion from './questions/FeedbackQuestion';

interface FeedbackPageProps {
  page: number;
  userFeedbackQuestionStore?: UserFeedbackQuestionStore;
}

interface FeedbackPageState {
  currentQuestions: UserFeedbackQuestion[];
}

@inject('userFeedbackQuestionStore')
export class FeedbackPage extends React.Component<FeedbackPageProps, FeedbackPageState> {
  constructor(props: FeedbackPageProps) {
    super(props);

    this.state = {
      currentQuestions: props.userFeedbackQuestionStore!.pages[props.page - 1],
    };
  }

  render() {
    return (
      <div>
        {this.state.currentQuestions.map(question => <FeedbackQuestion question={question} key={question.id} />)}
      </div>
    );
  }
}

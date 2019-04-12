import { inject } from 'mobx-react';
import * as React from 'react';
import { Container } from 'reactstrap';
import { UserFeedbackQuestionStore } from '../../../stores/userFeedbackQuestionStore';
import FeedbackPageNavigation from './FeedbackPageNavigation';
import FeedbackQuestion from './questions/FeedbackQuestion';

interface FeedbackPageProps {
  page: number;
  missionId: number;
  userFeedbackQuestionStore?: UserFeedbackQuestionStore;
}

@inject('userFeedbackQuestionStore')
export class FeedbackPage extends React.Component<FeedbackPageProps> {
  get currentQuestions() {
    return this.props.userFeedbackQuestionStore!.pages[this.props.page - 1];
  }

  get totalPages() {
    return this.props.userFeedbackQuestionStore!.pages.length;
  }

  render() {
    return (
      <Container fluid>
        <FeedbackPageNavigation missionId={this.props.missionId} page={this.props.page} totalPages={this.totalPages}/>

        {this.currentQuestions.map(question => <FeedbackQuestion question={question} key={question.id}/>)}

        <FeedbackPageNavigation missionId={this.props.missionId} page={this.props.page} totalPages={this.totalPages}/>
      </Container>
    );
  }
}

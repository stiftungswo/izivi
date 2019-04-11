import { inject } from 'mobx-react';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Progress } from 'reactstrap';
import IziviContent from '../../../layout/IziviContent';
import { UserFeedbackQuestionStore } from '../../../stores/userFeedbackQuestionStore';
import { FeedbackPage } from './FeedbackPage';

interface MissionFeedbackProps extends RouteComponentProps<{ id: string, page: string }> {
  userFeedbackQuestionStore?: UserFeedbackQuestionStore;
}

interface MissionFeedbackState {
  loading: boolean;
}

@inject('userFeedbackQuestionStore')
export class MissionFeedback extends React.Component<MissionFeedbackProps, MissionFeedbackState> {
  get currentPage() {
    return parseInt(this.props.match.params.page, 10);
  }

  constructor(props: MissionFeedbackProps) {
    super(props);

    this.state = {
      loading: true,
    };

    props.userFeedbackQuestionStore!.fetchAll().then(this.handleUserFeedbackQuestions.bind(this));
  }

  handleUserFeedbackQuestions() {
    this.setState({ loading: false });
  }

  render() {
    return (
      <IziviContent card loading={this.state.loading} title={'Feedback zu Einsatz abgeben'}>
        <div>
          <small>
            <strong>Hinweis:</strong> Alle Fragen, welche mit (*) enden, sind erforderlich und müssen ausgefüllt werden.
          </small>

          <Progress max={this.props.userFeedbackQuestionStore!.pages.length} value={this.currentPage} className={'mt-3'}/>
        </div>

        <FeedbackPage page={this.currentPage}/>
      </IziviContent>
    );
  }
}

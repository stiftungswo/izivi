import * as React from 'react';

interface FeedbackPageProps {
  page: number;
}

export class FeedbackPage extends React.Component<FeedbackPageProps> {
  render() {
    return <div>Page {this.props.page}</div>;
  }
}

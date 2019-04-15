import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';

interface FeedbackPageNavigationProps {
  missionId: number;
  page: number;
  totalPages: number;
}

function previousLink(missionId: number, page: number) {
  return `/mission/${missionId}/feedback/${Math.max(page - 1, 0)}`;
}

function nextLink(missionId: number, page: number, totalPages: number) {
  return `/mission/${missionId}/feedback/${Math.min(page + 1, totalPages)}`;
}

export default ({ missionId, page, totalPages }: FeedbackPageNavigationProps) => {
  return (
    <ButtonGroup className="mt-3">
      <Link to={previousLink(missionId, page)}>
        <Button color="primary" disabled={page <= 1}>Zurück</Button>
      </Link>
      <Link to={nextLink(missionId, page, totalPages)}>
        <Button color="primary" disabled={page >= totalPages}>Vorwärts</Button>
      </Link>
    </ButtonGroup>
  );
};

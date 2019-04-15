import { computed, observable } from 'mobx';
import { UserFeedbackQuestion } from '../types';
import { DomainStore } from './domainStore';

interface RawUserFeedbackQuestion extends UserFeedbackQuestion {
  opt1: string;
  opt2: string;
  opt3: string;
}

export class UserFeedbackQuestionStore extends DomainStore<UserFeedbackQuestion> {
  @computed
  get entities(): UserFeedbackQuestion[] {
    return this.userFeedbackQuestions;
  }

  @computed
  get pages(): UserFeedbackQuestion[][] {
    const pages: UserFeedbackQuestion[][] = [];
    this.userFeedbackQuestions.forEach(question => {
      const currentPage = pages[question.page - 1];
      currentPage ? currentPage.push(question) : pages[question.page - 1] = [];
    });

    return pages;
  }

  static formatServerResponse(data: RawUserFeedbackQuestion[]): UserFeedbackQuestion[] {
    return data.map(userFeedbackQuestion => {
      return {
        options: [userFeedbackQuestion.opt1, userFeedbackQuestion.opt2, userFeedbackQuestion.opt3],
        ...userFeedbackQuestion,
      };
    });
  }

  @observable
  private userFeedbackQuestions: UserFeedbackQuestion[] = [];

  protected async doFetchAll(params: object = {}): Promise<void> {
    const response = await this.mainStore.api.get<RawUserFeedbackQuestion[]>('/user_feedback_questions', { params });
    this.userFeedbackQuestions = UserFeedbackQuestionStore.formatServerResponse(response.data);
  }
}

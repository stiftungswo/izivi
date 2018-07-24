import { Selector } from 'testcafe';

export default class Login {
  constructor() {
    this.emailInput = Selector('input[name="email"]');
    this.passwordInput = Selector('input[name="password"]');
    this.loginSubmit = Selector('button[type="submit"]').withText('Anmelden');
    this.loginError = Selector('div.alert');
  }
}

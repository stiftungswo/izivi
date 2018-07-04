import { Selector } from 'testcafe';

export default class Nav {
  constructor() {
    this.loginButton = Selector('a').withText('Anmelden');
    this.logoutButton = Selector('a').withText('Abmelden');
  }
}

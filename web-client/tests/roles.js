import Login from './pages/Login';
import Nav from './pages/Nav';
import { adminPassword, adminUsername, url } from './config';
import { Role } from 'testcafe';

const login = new Login();
const nav = new Nav();

export const adminRole = Role(url('/login'), async t => {
  await t
    .typeText(login.emailInput, adminUsername)
    .typeText(login.passwordInput, adminPassword)
    .click(login.loginSubmit);
  await t.expect(nav.logoutButton.exists).ok('Must be loged in', { timeout: 999999 });
});

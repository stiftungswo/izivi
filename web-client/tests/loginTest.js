import Login from './pages/Login';
import Nav from './pages/Nav';
import { adminPassword, adminUsername, url } from './config';

fixture`iZivi Login`.page(url('/'));

const nav = new Nav();
const login = new Login();

test('Failed Login', async t => {
  await t.click(nav.loginButton);

  await t
    .typeText(login.emailInput, adminUsername)
    .typeText(login.passwordInput, 'notcorrect')
    .click(login.loginSubmit);

  await t.expect(login.loginError.innerText).contains('Login fehlgeschlagen');
});

test('Successfull Login', async t => {
  await t.click(nav.loginButton);

  await t
    .typeText(login.emailInput, adminUsername)
    .typeText(login.passwordInput, adminPassword)
    .click(login.loginSubmit);

  await t.expect(nav.logoutButton.exists).ok();
});

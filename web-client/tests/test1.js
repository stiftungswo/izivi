import { Selector } from 'testcafe';

fixture`iZivi Login`.page`http://localhost:3000/`;

const adminUsername = 'lavina78@wuckert.com';
const adminPassword = 'WR.YX_[e`J';

const loginButton = Selector('a').withText('Anmelden');
const logoutButton = Selector('a').withText('Abmelden');
const emailInput = Selector('input[name="email"]');
const passwordInput = Selector('input[name="password"]');
const loginSubmit = Selector('button[type="submit"]').withText('Anmelden');
const loginError = Selector('div.alert');

test('Failed Login', async t => {
  await t.click(loginButton);

  await t
    .typeText(emailInput, adminUsername)
    .typeText(passwordInput, 'notcorrect')
    .click(loginSubmit);

  await t.expect(loginError.innerText).contains('Login fehlgeschlagen');
});

test('Successfull Login', async t => {
  await t.click(loginButton);

  await t
    .typeText(emailInput, adminUsername)
    .typeText(passwordInput, adminPassword)
    .click(loginSubmit);

  await t.expect(logoutButton.exists).ok();
});

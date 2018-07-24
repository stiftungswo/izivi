import { url } from './config';
import { adminRole } from './roles';
import Holidays from './pages/Holidays';
import { waitLoadingScreen } from './helpers';

fixture`iZivi Holidays`.page(url('/freeday')).beforeEach(t => t.useRole(adminRole));

const holidays = new Holidays();

test('Holidays loaded', async t => {
  await t.navigateTo(url('/freeday'));
  await waitLoadingScreen();
  const dateRegex = /\d\d?\.\d\d?\.\d{4}/;
  await t.expect(holidays.tableRows.count).gt(10, 'More than 10 holidyas should be present!');
  await t.expect(holidays.firstRowFrom.value).match(dateRegex, 'From-Date should be a valid date');
  await t.expect(holidays.firstRowTo.value).match(dateRegex, 'To-Date should be a valid date');
  await t.expect(holidays.firstRowDescription.value).match(/\w+/, 'Description should not be empty');
});

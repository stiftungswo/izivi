import { Selector } from 'testcafe';

export default class Holidays {
  constructor() {
    this.table = Selector('table.table.table-hover');
    this.tableRows = this.table.find('tbody > tr');
    this.firstRow = this.tableRows.nth(1);
    this.firstRowFrom = this.firstRow.find('td input').nth(0);
    this.firstRowTo = this.firstRow.find('td input').nth(1);
    this.firstRowType = this.firstRow.find('td select').nth(0);
    this.firstRowDescription = this.firstRow.find('td input').nth(2);
  }
}

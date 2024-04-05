import type { Locator } from '@playwright/test';
import PageHolder from './page-holder';
import { helpers } from './helpers';

// eslint-disable-next-line no-shadow
export enum SortDirection {
  Ascending = 'ascending',
  Descending = 'descending',
  None = 'none',
}

/**
 * Select cell by row and column index.
 *
 * @param {number} row The row index.
 * @param {number} column The column index.
 * @param {string} cellType The type of cell.
 * @returns {Locator} The locator of the selected cell.
 */
export async function selectCell(row:number, column:number, cellType:string = 'td') : Promise<Locator> {
  const page = PageHolder.getInstance().getPage();
  const table = page.locator(helpers.selectors.mainTable);
  const tbody = table.locator(helpers.selectors.mainTableBody);

  return tbody.locator(helpers.findCell({ row, column, cellType }));
}

/**
 * Select cloned cell by row and column index.
 *
 * @param {number} row The row index.
 * @param {number} column The column index.
 * @param {string} cellType The type of cell.
 * @returns {Locator} The locator of the selected cell.
 */
export async function selectClonedCell(row:number, column:number, cellType:string = 'th') {
  const page = PageHolder.getInstance().getPage();
  const table = page.locator(helpers.selectors.mainTable);
  const tbody = table.locator(helpers.selectors.cloneTopTable);

  return tbody.locator(helpers.findCell({ row, column, cellType }));
}

/**
 * @param {Locator} cell The locator of the cell.
 */
export async function openEditor(cell:Locator) {

  await cell.click();
  await cell.press('Enter');
}

/**
 * @returns {Locator} The locator of the cell editor.
 */
export async function selectEditor() {
  const page = PageHolder.getInstance().getPage();
  const table = page.locator(helpers.selectors.mainTable);
  const cellEditor = table.locator(helpers.findCellEditor());

  await cellEditor.waitFor();

  return cellEditor;
}

/**
 * Triggers the arrow keys events.
 *
 */
export async function tryToEscapeFromTheComponentsFocus() {
  const page = PageHolder.getInstance().getPage();

  // try to select another menu item using arrow keys (it should not be possible)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowUp');
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('ArrowLeft');
}

/**
 * Create a selection from one cell to another.
 *
 * @param {Locator} cellFrom Start cell.
 * @param {Locator} cellTo End cell.
 */
export async function createSelection(cellFrom:Locator, cellTo:Locator) {
  const page = PageHolder.getInstance().getPage();
  const cellFromBox = await cellFrom.boundingBox();
  const cellToBox = await cellTo.boundingBox();

  await page.mouse.move(cellFromBox!.x + 10, cellFromBox!.y + 10);
  await page.mouse.down();
  await page.mouse.move(cellToBox!.x + 10, cellToBox!.y + 10);
  await page.mouse.up();
}

/**
 * @param {Locator} cell Cell locator.
 */
export async function clickWithPositionAndModifiers(cell:Locator) {

  await cell
    .click({
      position: { x: 1, y: 1 },
      modifiers: [helpers.modifier],
    });
}

/**
 * @param {Locator} cell Cell locator.
 */
export async function clickWithPosition(cell:Locator) {

  await cell
    .click({
      position: { x: 1, y: 1 },
    });
}

/**
 * @param {Locator} cell Cell locator.
 * @param {number} size Cell locator.
 */
export async function makeSelectionFromCell(cell:Locator, size:number) {
  const page = PageHolder.getInstance().getPage();
  const cellCoordinates = await cell.boundingBox();

  await page.mouse.move(
    cellCoordinates!.x + (cellCoordinates!.width / 2),
    cellCoordinates!.y + (cellCoordinates!.height / 2)
  );
  await page.mouse.down();
  await page.mouse.move(
    cellCoordinates!.x + (cellCoordinates!.width / 2) + size,
    cellCoordinates!.y + (cellCoordinates!.height / 2) + size
  );
  await page.mouse.up();
}

/**
 * @param {number} columnIndex Cell locator.
 */
export async function openHeaderDropdownMenu(columnIndex:number) {
  const page = PageHolder.getInstance().getPage();
  const table = page.locator(helpers.selectors.mainTable);
  const changeTypeButton = table.locator(helpers.findDropdownMenuExpander({ col: columnIndex }));

  await changeTypeButton.click();
}

/**
 * @param {string} option Cell locator.
 */
export async function selectFromDropdownMenu(option:string) {
  const page = PageHolder.getInstance().getPage();
  const dropdownMenu = page.locator(helpers.selectors.dropdownMenu);

  await dropdownMenu.locator(option).click();

}

/**
 * @param {string} option Cell locator.
 */
export async function selectCo(option:string) {
  const page = PageHolder.getInstance().getPage();
  const dropdownMenu = page.locator(helpers.selectors.dropdownMenu);

  await dropdownMenu.locator(option).click();

}

/**
 * @param {string} columnName Column name.
 */
export async function selectColumnHeaderByNameAndOpenMenu(columnName:string) {
  const page = PageHolder.getInstance().getPage();

  await page.getByRole('columnheader', { name: columnName, exact: true }).click({
    button: 'right',
    modifiers: ['Shift'],
  });
}

/**
 * @returns {number} Column count.
 */
export async function columnsCount() {
  const page = PageHolder.getInstance().getPage();
  const count = await page.getByRole('columnheader').count();

  return count;
}

/**
 * @returns {number} Rows count.
 */
export async function rowsCount() {
  const page = PageHolder.getInstance().getPage();
  const count = await page.getByRole('rowheader').count();

  return count;
}

/**
 * @param {string} name Column name.
 * @param {SortDirection} direction Sort direction.
 */
export async function setColumnSorting(name:string, direction:SortDirection) {
  const page = PageHolder.getInstance().getPage();
  const columnHeader = await page.getByRole('columnheader', { name });

  let sortAttribute = await columnHeader.getAttribute('aria-sort');

  while (sortAttribute !== direction) {
    // eslint-disable-next-line no-await-in-loop
    await columnHeader.locator('span').click();
    // eslint-disable-next-line no-await-in-loop
    sortAttribute = await columnHeader.getAttribute('aria-sort');
  }
}

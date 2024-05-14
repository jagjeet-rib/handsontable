import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';

const container = document.querySelector('#example1');
const templateValues = ['one', 'two', 'three'];
const data: (string | number)[][] = [
  ['', 'Tesla', 'Nissan', 'Toyota', 'Honda'],
  ['2017', 10, 11, 12, 13],
  ['2018', 20, 11, 14, 13],
  ['2019', 30, 15, 12, 13]
];

function isEmptyRow(instance, row) {
  const rowData = instance.countRows();

  for (let i = 0, ilen = rowData.length; i < ilen; i++) {
    if (rowData[i] !== null) {
      return false;
    }
  }

  return true;
}

function defaultValueRenderer(instance, td, row, col, prop, value, cellProperties) {
  const args = arguments;

  if (args[5] === null && isEmptyRow(instance, row)) {
    args[5] = templateValues[col];
    td.style.color = '#999';

  } else {
    td.style.color = '';
  }

  Handsontable.renderers.TextRenderer.apply(this, args);
}

const hot: Handsontable = new Handsontable(container, {
  startRows: 8,
  startCols: 5,
  minSpareRows: 1,
  contextMenu: true,
  height: 'auto',
  licenseKey: 'non-commercial-and-evaluation',
  cells(row, col, prop) {
    const cellProperties = {};

    cellProperties.renderer = defaultValueRenderer;

    return cellProperties;
  },
  beforeChange(changes) {
    const instance = hot;
    const columns = instance.countCols();
    const rowColumnSeen = {};
    const rowsToFill = {};

    for (let i = 0; i < changes.length; i++) {
      // if oldVal is empty
      if (changes[i][2] === null && changes[i][3] !== null) {
        if (isEmptyRow(instance, changes[i][0])) {
          // add this row/col combination to the cache so it will not be overwritten by the template
          rowColumnSeen[`${changes[i][0]}/${changes[i][1]}`] = true;
          rowsToFill[changes[i][0]] = true;
        }
      }
    }

    for (const r in rowsToFill) {
      if (rowsToFill.hasOwnProperty(r)) {
        for (let c = 0; c < columns; c++) {
          // if it is not provided by user in this change set, take the value from the template
          if (!rowColumnSeen[`${r}/${c}`]) {
            changes.push([r, c, null, templateValues[c]]);
          }
        }
      }
    }
  },
  autoWrapRow: true,
  autoWrapCol: true,
});

// or, use `updateData()` to replace `data` without resetting states
hot.loadData(data);

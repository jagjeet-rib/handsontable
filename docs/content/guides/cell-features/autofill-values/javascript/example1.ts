import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';

const container = document.querySelector('#example1');
const data: (string | number)[][] = [
  ['', 'Tesla', 'Nissan', 'Toyota', 'Honda'],
  ['2017', 10, 11, 12, 13],
  ['2018', 20, 11, 14, 13],
  ['2019', 30, 15, 12, 13],
  ['2020', '', '', '', ''],
  ['2021', '', '', '', '']
];

const hot: Core = new Handsontable(container, {
  rowHeaders: true,
  colHeaders: true,
  fillHandle: true, // possible values: true, false, "horizontal", "vertical",
  height: 'auto',
  autoWrapRow: true,
  autoWrapCol: true,
  licenseKey: 'non-commercial-and-evaluation'
});

// or, use `updateData()` to replace `data` without resetting states
hot.loadData(data);

import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';

const container = document.querySelector('#example2');
const data: (string | number)[][] = [
  ['', 'Tesla', 'Nissan', 'Toyota', 'Honda'],
  ['2017', 10, 11, 12, 13],
  ['2018', 20, 11, 14, 13],
  ['2019', 30, 15, 12, 13],
  ['2020', '', '', '', ''],
  ['2021', '', '', '', '']
];

const hot: Handsontable.Core = new Handsontable(container, {
  data,
  rowHeaders: true,
  colHeaders: true,
  fillHandle: {
    direction: 'vertical',
    autoInsertRow: true
  },
  height: 'auto',
  autoWrapRow: true,
  autoWrapCol: true,
  licenseKey: 'non-commercial-and-evaluation'
});

import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';

const container = document.querySelector('#example5');
const hot: Handsontable.Core = new Handsontable(container, {
  data: [
    ['A1', 'B1', 'C1'],
    ['A2', 'B2', 'C2'],
    ['A3', 'B3', 'C3'],
    ['A4', 'B4', 'C4'],
    ['A5', 'B5', 'C5'],
  ],
  width: '100%',
  height: 'auto',
  colHeaders: true,
  rowHeaders: true,
  stretchH: 'all', // 'none' is default
  contextMenu: true,
  autoWrapRow: true,
  autoWrapCol: true,
  licenseKey: 'non-commercial-and-evaluation'
});

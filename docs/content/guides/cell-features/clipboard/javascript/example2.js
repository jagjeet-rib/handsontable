import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';

const container = document.querySelector('#example2');

new Handsontable(container, {
  data: [
    ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1'],
    ['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2', 'I2', 'J2'],
    ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3', 'I3', 'J3'],
    ['A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4', 'I4', 'J4'],
    ['A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5', 'I5', 'J5'],
  ],
  contextMenu: true,
  copyPaste: {
    copyColumnHeaders: true,
    copyColumnGroupHeaders: true,
    copyColumnHeadersOnly: true,
  },
  colHeaders: true,
  rowHeaders: true,
  height: 'auto',
  nestedHeaders: [
    [
      'A',
      { label: 'B', colspan: 2 },
      { label: 'C', colspan: 2 },
      { label: 'D', colspan: 2 },
      { label: 'E', colspan: 2 },
      'F',
    ],
    ['G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'],
  ],
  autoWrapRow: true,
  autoWrapCol: true,
  licenseKey: 'non-commercial-and-evaluation',
});

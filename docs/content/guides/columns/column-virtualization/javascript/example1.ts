import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';

// generate an array of arrays with dummy data
const data: string[][] = new Array(1000) // number of rows
  .fill(null)
  .map((_, row) =>
    new Array(1000) // number of columns
      .fill(null)
      .map((_, column) => `${row}, ${column}`)
  );

const container = document.querySelector('#example1')!;
new Handsontable(container, {
  data,
  colWidths: 100,
  width: '100%',
  height: 320,
  rowHeaders: true,
  colHeaders: true,
  autoWrapRow: true,
  autoWrapCol: true,
  licenseKey: 'non-commercial-and-evaluation',
});

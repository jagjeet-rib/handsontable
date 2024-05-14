import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';
import { BaseRenderer } from 'handsontable/renderers';
import Core from 'handsontable/core'

const container = document.querySelector('#example1');
const colors = ['yellow', 'red', 'orange', 'green', 'blue', 'gray', 'black', 'white'];

const yellowRenderer: BaseRenderer = (instance, td, ...rest) =>{
  Handsontable.renderers.TextRenderer(instance, td, ...rest);
  td.style.backgroundColor = 'yellow';
};

const greenRenderer: BaseRenderer = (instance, td, ...rest) => {
  Handsontable.renderers.TextRenderer(instance, td, ...rest);

  td.style.backgroundColor = 'green';
};

const hot: Core = new Handsontable(container, {
  data: [
    { id: 1, name: 'Ted', isActive: true, color: 'orange', date: '2015-01-01' },
    { id: 2, name: 'John', isActive: false, color: 'black', date: null },
    { id: 3, name: 'Al', isActive: true, color: 'red', date: null },
    { id: 4, name: 'Ben', isActive: false, color: 'blue', date: null },
  ],
  colHeaders: true,
  licenseKey: 'non-commercial-and-evaluation',
  columns: [
    { data: 'id', type: 'text' },
    // 'text' is default, you don't actually need to declare it
    { data: 'name', renderer: yellowRenderer },
    // use default 'text' cell type but overwrite its renderer with yellowRenderer
    { data: 'isActive', type: 'checkbox' },
    { data: 'date', type: 'date', dateFormat: 'YYYY-MM-DD' },
    { data: 'color', type: 'autocomplete', source: colors }
  ],
  cell: [
    { row: 1, col: 0, renderer: greenRenderer }
  ],
  cells(row, col) {
    if (row === 0 && col === 0) {
      this.renderer = greenRenderer;
    }
    
    return { renderer: this.renderer };
  },
  autoWrapRow: true,
  autoWrapCol: true,
  height: 'auto'
});

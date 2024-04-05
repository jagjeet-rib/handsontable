import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import { textRenderer } from 'handsontable/renderers/textRenderer';
import 'handsontable/dist/handsontable.full.min.css';

// register Handsontable's modules
registerAllModules();

const ExampleComponent = () => {
  const colors = ['yellow', 'red', 'orange', 'green', 'blue', 'gray', 'black', 'white'];
  const yellowRenderer = function(instance, td, row, col, prop, value, cellProperties) {
    textRenderer.apply(this, arguments);
    td.style.backgroundColor = 'yellow';
  };
  const greenRenderer = function(instance, td, row, col, prop, value, cellProperties) {
    textRenderer.apply(this, arguments);

    td.style.backgroundColor = 'green';
  };
  const cells = function(instance, td, row, col, prop, value, cellProperties) {
    if (row === 0 && col === 0) {
      this.renderer = greenRenderer;
    }
  };

  return (
    <HotTable
      data={[
        { id: 1, name: 'Ted', isActive: true, color: 'orange', date: '2015-01-01' },
        { id: 2, name: 'John', isActive: false, color: 'black', date: null },
        { id: 3, name: 'Al', isActive: true, color: 'red', date: null },
        { id: 4, name: 'Ben', isActive: false, color: 'blue', date: null },
      ]}
      colHeaders={true}
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
      columns={[
        { data: 'id', type: 'text' },
        // 'text' is default, you don't actually need to declare it
        { data: 'name', renderer: yellowRenderer },
        // use default 'text' cell type but overwrite its renderer with yellowRenderer
        { data: 'isActive', type: 'checkbox' },
        { data: 'date', type: 'date', dateFormat: 'YYYY-MM-DD' },
        { data: 'color', type: 'autocomplete', source: colors }
      ]}
      cell={[
        { row: 1, col: 0, renderer: greenRenderer }
      ]}
      cells={cells}
    />
  );
};

export default ExampleComponent;

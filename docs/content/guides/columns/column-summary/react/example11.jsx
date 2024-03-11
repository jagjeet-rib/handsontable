import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';

// register Handsontable's modules
registerAllModules();

export const ExampleComponent = () => {
  return (
    <HotTable
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
      data={[
        [0, 1, 2],
        ['3c', '4b', 5],
        [],
        []
      ]}
      colHeaders={true}
      rowHeaders={true}
      columnSummary={
        [{
          type: 'sum',
          destinationRow: 0,
          destinationColumn: 0,
          reversedRowCoords: true,
          // enable throwing data type errors for this column summary
          suppressDataTypeErrors: false
        },
        {
          type: 'sum',
          destinationRow: 0,
          destinationColumn: 1,
          reversedRowCoords: true,
          // enable throwing data type errors for this column summary
          suppressDataTypeErrors: false
        }]
      }
    />
  );
};

/* start:skip-in-preview */
ReactDOM.render(<ExampleComponent />, document.getElementById('example11'));
/* end:skip-in-preview */
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
        ['empty string', '', '', '', '', ''],
        ['null', null, null, null, null, null],
        ['undefined', undefined, undefined, undefined, undefined, undefined],
        ['non-empty value', 'non-empty text', 13000, true, 'orange', 'password'],
      ]}
      columnSorting={{
        sortEmptyCells: true
      }}
      columns={[
        {
          columnSorting: {
            indicator: false,
            headerAction: false,
            compareFunctionFactory: function compareFunctionFactory() {
              return function comparator() {
                return 0; // Don't sort the first visual column.
              };
            }
          },
          readOnly: true,
        },
        {},
        {
          type: 'numeric',
          numericFormat: {
            pattern: '$0,0.00',
            culture: 'en-US'
          },
        },
        { type: 'checkbox' },
        { type: 'dropdown', source: ['yellow', 'red', 'orange'] },
        { type: 'password' },
      ]}
      preventOverflow="horizontal"
      colHeaders={['value<br>underneath', 'type:text', 'type:numeric', 'type:checkbox', 'type:dropdown', 'type:password']}
    />
  );
};

/* start:skip-in-preview */
ReactDOM.render(<ExampleComponent />, document.getElementById('example2'));
/* end:skip-in-preview */
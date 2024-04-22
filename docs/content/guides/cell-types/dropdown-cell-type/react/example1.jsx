import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';

// register Handsontable's modules
registerAllModules();

const ExampleComponent = () => {
  return (
    <HotTable
      data={[
        ['Tesla', 2017, 'black', 'black'],
        ['Nissan', 2018, 'blue', 'blue'],
        ['Chrysler', 2019, 'yellow', 'black'],
        ['Volvo', 2020, 'white', 'gray']
      ]}
      colHeaders={['Car', 'Year', 'Chassis color', 'Bumper color']}
      columns={[
        {},
        { type: 'numeric' },
        {
          type: 'dropdown',
          source: ['yellow', 'red', 'orange', 'green', 'blue', 'gray', 'black', 'white']
        },
        {
          type: 'dropdown',
          source: ['yellow', 'red', 'orange', 'green', 'blue', 'gray', 'black', 'white']
        }
      ]}
      autoWrapRow={true}
      autoWrapCol={true}
      height="auto"
      licenseKey="non-commercial-and-evaluation"
    />
  );
};

export default ExampleComponent;

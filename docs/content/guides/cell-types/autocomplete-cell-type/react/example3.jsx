import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';

// register Handsontable's modules
registerAllModules();

const ExampleComponent = () => {
  return (
    <HotTable
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
      data={[
        ['BMW', 2017, 'black', 'black'],
        ['Nissan', 2018, 'blue', 'blue'],
        ['Chrysler', 2019, 'yellow', 'black'],
        ['Volvo', 2020, 'white', 'gray']
      ]}
      colHeaders={['Car', 'Year', 'Chassis color', 'Bumper color']}
      columns={[{
          type: 'autocomplete',
          source(query, process) {
            fetch('{{$basePath}}/scripts/json/autocomplete.json')
                    .then(response => response.json())
                    .then(response => process(response.data));
          },
          strict: true
        },
        {}, // Year is a default text column
        {}, // Chassis color is a default text column
        {} // Bumper color is a default text column
      ]}
    />
  );
};

export default ExampleComponent;

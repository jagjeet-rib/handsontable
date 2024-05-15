import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';
import {Search} from 'handsontable/plugins'

const data: (string | number)[][] = [
  ['Tesla', 2017, 'black', 'black'],
  ['Nissan', 2018, 'blue', 'blue'],
  ['Chrysler', 2019, 'yellow', 'black'],
  ['Volvo', 2020, 'yellow', 'gray']
];

const container = document.querySelector('#example2')!;

const hot: Handsontable.Core = new Handsontable(container, {
  data,
  colHeaders: true,
  // enable the `Search` plugin
  search: {
    // add your custom CSS class
    searchResultClass: 'my-custom-search-result-class'
  },
  height: 'auto',
  autoWrapRow: true,
  autoWrapCol: true,
  licenseKey: 'non-commercial-and-evaluation'
});

const searchField = document.querySelector('#search_field2')!;

searchField.addEventListener('keyup', (event) => {
  const search: Search = hot.getPlugin('search');
  const queryResult = search.query((event.target as HTMLInputElement).value);

  console.log(queryResult);
  hot.render();
});

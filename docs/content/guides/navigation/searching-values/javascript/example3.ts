import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';
import { Search } from 'handsontable/plugins'

const data: (string | number)[][] = [
  ['Tesla', 2017, 'black', 'black'],
  ['Nissan', 2018, 'blue', 'blue'],
  ['Chrysler', 2019, 'yellow', 'black'],
  ['Volvo', 2020, 'white', 'gray']
];

// define your custom query method
function onlyExactMatch(queryStr, value) {
  return queryStr.toString() === value.toString();
}

const container = document.querySelector('#example3')!;

const hot = new Handsontable(container, {
  data,
  colHeaders: true,
  // enable the `Search` plugin
  search: {
    // add your custom query method
    queryMethod: onlyExactMatch
  },
  height: 'auto',
  autoWrapRow: true,
  autoWrapCol: true,
  licenseKey: 'non-commercial-and-evaluation'
});

const searchField = document.querySelector('#search_field3')!;

searchField.addEventListener('keyup', (event) => {
  const search: Search = hot.getPlugin('search');
  // use the `Search`'s `query()` method
  const queryResult = search.query((event.target as HTMLInputElement).value);

  console.log(queryResult);

  hot.render();
});

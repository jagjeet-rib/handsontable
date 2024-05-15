import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';
import {NestedRows} from 'handsontable/plugins'

const container = document.querySelector('#example8');
const hot: Handsontable.Core = new Handsontable(container, {
  licenseKey: 'non-commercial-and-evaluation',
  data: [
    {
      value: null,
      __children: [
        { value: 5 },
        { value: 6 },
        { value: 7 },
      ]
    },
    {
      __children: [
        { value: 15 },
        { value: 16 },
        { value: 17 },
      ]
    }
  ],
  columns: [
    { data: 'value' }
  ],
  nestedRows: true,
  rowHeaders: true,
  colHeaders: ['sum', 'min', 'max', 'count', 'average'],
  columnSummary() {
    const endpoints = [];
    const nestedRowsPlugin: NestedRows = this.hot.getPlugin('nestedRows');
    const getRowIndex = nestedRowsPlugin.dataManager.getRowIndex.bind(nestedRowsPlugin.dataManager);
    const resultColumn = 0;

    let tempEndpoint = null;
    let nestedRowsCache = null;

    if (nestedRowsPlugin.isEnabled()) {
      nestedRowsCache = nestedRowsPlugin.dataManager.cache;
    } else {
      return;
    }

    for (let i = 0; i < nestedRowsCache.levels[0].length; i++) {
      tempEndpoint = {};

      if (!nestedRowsCache.levels[0][i].__children || nestedRowsCache.levels[0][i].__children.length === 0) {
        continue;
      }

      tempEndpoint.destinationColumn = resultColumn;
      tempEndpoint.destinationRow = getRowIndex(nestedRowsCache.levels[0][i]);
      tempEndpoint.type = 'sum';
      tempEndpoint.forceNumeric = true;
      tempEndpoint.ranges = [];

      tempEndpoint.ranges.push([
        getRowIndex(nestedRowsCache.levels[0][i].__children[0]),
        getRowIndex(nestedRowsCache.levels[0][i].__children[nestedRowsCache.levels[0][i].__children.length - 1])
      ]);

      endpoints.push(tempEndpoint);
      tempEndpoint = null;
    }

    return endpoints;
  },
  autoWrapRow: true,
  autoWrapCol: true,
  height: 'auto'
});

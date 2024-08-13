import Navigo from 'navigo';
import { initializeDataGrid } from './datagrid';
import { initializeScenarioGrid } from './scenarioGrid';
import { initializeCellTypeDemo } from './demos/cellTypes/cellTypesDemo';
import { initializeArabicRtlDemo } from './demos/arabicRtl/arabicRtlDemo';
import { initializeCustomStyleDemo } from './demos/customStyle/customStyleDemo';
import { initializeMergedCellsDemo } from './demos/mergedCells/mergedCellsDemo';
import { initializeNestedHeadersDemo } from './demos/nestedHeaders/nestedHeadersDemo';
import { initializeNestedRowsDemo } from './demos/nestedRows/nestedRowsDemo';

const router = new Navigo('/');

router
  .on({
    '/': function () {
      initializeDataGrid();
    },
    '/scenario-grid': function () {
      initializeScenarioGrid();
    },
    '/cell-types-demo': function () {
      initializeCellTypeDemo();
    },
    '/arabic-rtl-demo': function () {
      initializeArabicRtlDemo();
    },
    '/custom-style-demo': function () {
      initializeCustomStyleDemo();
    },
    '/merged-cells-demo': function () {
      initializeMergedCellsDemo();
    },
    '/nested-headers-demo': function () {
      initializeNestedHeadersDemo();
    },
    '/nested-rows-demo': function () {
      initializeNestedRowsDemo();
    },
  })
  .resolve();
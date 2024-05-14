import Handsontable from 'handsontable';
import { HyperFormula } from 'hyperformula';
import 'handsontable/dist/handsontable.full.min.css';

const data: (string | number)[][] = [
  ['Travel ID', 'Destination', 'Base price', 'Price with extra cost'],
  ['154', 'Rome', 400, '=ROUND(ADDITIONAL_COST+C2,0)'],
  ['155', 'Athens', 300, '=ROUND(ADDITIONAL_COST+C3,0)'],
  ['156', 'Warsaw', 150, '=ROUND(ADDITIONAL_COST+C4,0)'],
];

const container = document.querySelector('#example-named-expressions1');
const hotNamedExpressions: Handsontable = new Handsontable(container, {
  data,
  colHeaders: true,
  rowHeaders: true,
  height: 'auto',
  formulas: {
    engine: HyperFormula,
    namedExpressions: [
      {
        name: 'ADDITIONAL_COST',
        expression: 100,
      },
    ],
  },
  autoWrapRow: true,
  autoWrapCol: true,
  licenseKey: 'non-commercial-and-evaluation',
});

const input = document.getElementById('named-expressions-input');
const formulasPlugin = hotNamedExpressions.getPlugin('formulas');
const button = document.getElementById('named-expressions-button');

button.addEventListener('click', (event) => {
  formulasPlugin.engine.changeNamedExpression('ADDITIONAL_COST', input.value);
  hotNamedExpressions.render();
});

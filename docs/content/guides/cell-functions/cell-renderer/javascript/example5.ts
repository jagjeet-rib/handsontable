import Handsontable from 'handsontable';
import Core from 'handsontable/core';
import 'handsontable/dist/handsontable.full.min.css';
import { BaseRenderer } from 'handsontable/renderers';

let isChecked = false;
const exampleContainer = document.querySelector('#exampleContainer5');
const container = document.querySelector('#example5');

const customRenderer: BaseRenderer = (instance, td, ...rest) => {
  Handsontable.renderers.TextRenderer(instance, td, ...rest);

  if (isChecked) {
    td.style.backgroundColor = 'yellow';
  } else {
    td.style.backgroundColor = 'white';
  }
};

const hot: Core = new Handsontable(container, {
  height: 'auto',
  columns: [
    {},
    { renderer: customRenderer }
  ],
  colHeaders(col) {
    switch (col) {
      case 0:
        return '<b>Bold</b> and <em>Beautiful</em>';

      case 1:
        return `Some <input type="checkbox" class="checker" ${isChecked ? 'checked="checked"' : ''}> checkbox`;
    }
  },
  autoWrapRow: true,
  autoWrapCol: true,
  licenseKey: 'non-commercial-and-evaluation'
});

exampleContainer.addEventListener('mousedown', (event) => {
  if (event.target.nodeName == 'INPUT' && event.target.className == 'checker') {
    event.stopPropagation();
  }
});

exampleContainer.addEventListener('mouseup', (event) => {
  if (event.target.nodeName == 'INPUT' && event.target.className == 'checker') {
    isChecked = !event.target.checked;
    hot.render();
  }
});

import { defineComponent } from 'vue';
import { HotTable } from '@handsontable/vue3';
import { TextEditor } from 'handsontable/editors/textEditor';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.css';

/* start:skip-in-preview */
import { createApp } from 'vue';

// register Handsontable's modules
registerAllModules();

class CustomEditor extends TextEditor {
  createElements() {
    super.createElements();

    this.TEXTAREA = document.createElement('input');
    this.TEXTAREA.setAttribute('placeholder', 'Custom placeholder');
    this.TEXTAREA.setAttribute('data-hot-input', true);
    this.textareaStyle = this.TEXTAREA.style;
    this.TEXTAREA_PARENT.innerText = '';
    this.TEXTAREA_PARENT.appendChild(this.TEXTAREA);
  }
}

const ExampleComponent = defineComponent({
  data() {
    return {
      hotSettings: {
        startRows: 5,
        columns: [
          {
            editor: CustomEditor
          }
        ],
        colHeaders: true,
        colWidths: 200,
        autoWrapRow: true,
        autoWrapCol: true,
        licenseKey: 'non-commercial-and-evaluation'
      }
    };
  },
  components: {
    HotTable,
  }
});

export default ExampleComponent;

const app = createApp(ExampleComponent);

app.mount('#example1');
/* end:skip-in-preview */

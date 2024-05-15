import Handsontable from 'handsontable';
import numbro from 'numbro';
import deDE from 'numbro/languages/de-DE';
import 'handsontable/dist/handsontable.full.min.css';

//TODO: fix type
// register the languages you need
numbro.registerLanguage(deDE);

const container = document.querySelector('#example1')!;

new Handsontable(container, {
  data: [
    { car: 'Mercedes A 160', year: 2017, price_usd: 7000, price_eur: 7000 },
    { car: 'Citroen C4 Coupe', year: 2018, price_usd: 8330, price_eur: 8330 },
    { car: 'Audi A4 Avant', year: 2019, price_usd: 33900, price_eur: 33900 },
    { car: 'Opel Astra', year: 2020, price_usd: 5000, price_eur: 5000 },
    { car: 'BMW 320i Coupe', year: 2021, price_usd: 30500, price_eur: 30500 },
  ],
  colHeaders: ['Car', 'Year', 'Price ($)', 'Price (€)'],
  columnSorting: true,
  height: 'auto',
  licenseKey: 'non-commercial-and-evaluation',
  columns: [
    {
      data: 'car',
      // 1st column is simple text, no special options here
    },
    {
      data: 'year',
      type: 'numeric',
    },
    {
      data: 'price_usd',
      type: 'numeric',
      numericFormat: {
        pattern: '$0,0.00',
        culture: 'en-US', // this is the default culture, set up for USD
      },
      allowEmpty: false,
    },
    {
      data: 'price_eur',
      type: 'numeric',
      numericFormat: {
        pattern: '0,0.00 $',
        culture: 'de-DE', // use this for EUR (German),
        // more cultures available on http://numbrojs.com/languages.html
      },
    },
  ],
  autoWrapRow: true,
  autoWrapCol: true,
});

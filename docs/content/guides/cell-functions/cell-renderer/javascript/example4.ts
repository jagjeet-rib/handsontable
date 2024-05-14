import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';

interface Book {
  title: string;
  description: string;
  comments: string;
  cover: string;
}

const data: Book[] = [
  {
    title: '<a href="https://www.amazon.com/Professional-JavaScript-Developers-Nicholas-Zakas/dp/1118026691">Professional JavaScript for Web Developers</a>',
    description: 'This <a href="https://bit.ly/sM1bDf">book</a> provides a developer-level introduction along with more advanced and useful features of <b>JavaScript</b>.',
    comments: 'I would rate it &#x2605;&#x2605;&#x2605;&#x2605;&#x2606;',
    cover: '{{$basePath}}/img/examples/professional-javascript-developers-nicholas-zakas.jpg'
  },
  {
    title: '<a href="https://shop.oreilly.com/product/9780596517748.do">JavaScript: The Good Parts</a>',
    description: 'This book provides a developer-level introduction along with <b>more advanced</b> and useful features of JavaScript.',
    comments: 'This is the book about JavaScript',
    cover: '{{$basePath}}/img/examples/javascript-the-good-parts.jpg'
  },
  {
    title: '<a href="https://shop.oreilly.com/product/9780596805531.do">JavaScript: The Definitive Guide</a>',
    description: '<em>JavaScript: The Definitive Guide</em> provides a thorough description of the core <b>JavaScript</b> language and both the legacy and standard DOMs implemented in web browsers.',
    comments: 'I\'ve never actually read it, but the <a href="https://shop.oreilly.com/product/9780596805531.do">comments</a> are highly <strong>positive</strong>.',
    cover: '{{$basePath}}/img/examples/javascript-the-definitive-guide.jpg'
  }
];

const container = document.querySelector('#example4');
const hot: Core = new Handsontable(container, {
  data,
  colWidths: [200, 200, 200, 80],
  colHeaders: ['Title', 'Description', 'Comments', 'Cover'],
  height: 'auto',
  columns: [
    { data: 'title', renderer: 'html' },
    { data: 'description', renderer: 'html' },
    { data: 'comments', renderer: safeHtmlRenderer },
    { data: 'cover', renderer: coverRenderer }
  ],
  autoWrapRow: true,
  autoWrapCol: true,
  licenseKey: 'non-commercial-and-evaluation'
});

function safeHtmlRenderer(instance, td, row, col, prop, value, cellProperties) {
  // WARNING: Be sure you only allow certain HTML tags to avoid XSS threats.
  // Sanitize the "value" before passing it to the innerHTML property.
  td.innerHTML = value;
}

function coverRenderer(instance, td, row, col, prop, value, cellProperties) {
  const img = document.createElement('img');

  img.src = value;

  img.addEventListener('mousedown', (event) => {
    event.preventDefault();
  });

  td.innerText = '';
  td.appendChild(img);

  return td;
}

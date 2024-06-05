const buildTypescriptBody = ({ id, html, ts, css, version, hyperformulaVersion, sandbox }) => {
  if (sandbox === 'stackblitz') {
    return {
      files: {
        'package.json': {
          content: `{
    "name": "handsontable",
    "version": "1.0.0",
    "description": "",
    "dependencies": {
      "hyperformula": "${hyperformulaVersion}",
      "handsontable": "${version}"
    }
  }`
        },
        'index.html': {
          content: `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Handsontable</title>
    </head>
  
    <body>
      ${html || `<div id="${id}"></div>`}
    </body>
  </html>`
        },
        'styles.css': {
          content: css
        },
        'index.ts': {
          content: `import './styles.css'
${ts}`
        },
      }
    };
  }

  return {
    files: {
      'package.json': {
        content: `{
  "name": "handsontable",
  "version": "1.0.0",
  "description": "",
  "main": "index.html",
  "scripts": {
    "start": "parcel --no-source-maps index.html --open",
    "build": "parcel build index.html"
  },
  "dependencies": {
    "hyperformula": "${hyperformulaVersion}",
    "handsontable": "${version}",
    "typescript": "latest"
  },
  "devDependencies": {
    "@babel/core": "7.2.0",
    "parcel-bundler": "^1.6.1"
  }
}`
      },
      'index.html': {
        content: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Handsontable</title>
    <link rel="stylesheet" href="src/styles.css" />
    ${ts.includes('from \'hyperformula\'')
    ? '<script src="https://cdn.jsdelivr.net/npm/hyperformula/dist/hyperformula.full.min.js"></script>'
    : ''}
  </head>

  <body>
    ${html || `<div id="${id}"></div>`}
    <script src="src/index.ts"></script>
  </body>
</html>`
      },
      'src/styles.css': {
        content: css
      },
      'src/index.ts': {
        content: ts.replace('import { HyperFormula } from \'hyperformula\';', '')
      }
    }
  };
};

module.exports = { buildTypescriptBody };

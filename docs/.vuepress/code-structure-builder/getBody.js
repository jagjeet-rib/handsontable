const { formatVersion } = require('../handsontable-manager/dependencies');
const { buildAngularBody } = require('./buildAngularBody');
const { buildJavascriptBody } = require('./buildJavascriptBody');
const { buildTypescriptBody } = require('./buildTypescriptBody');
const { buildReactBody } = require('./buildReactBody');
const { buildVue3Body } = require('./buildVue3Body');
const { buildVueBody } = require('./buildVueBody');

const getBody = (id, html, js, css, docsVersion, preset, sandbox) => {
  const version = formatVersion(docsVersion);
  const hyperformulaVersion = '^2.4.0';

  if (/hot(-.*)?/.test(preset)) {
    return buildJavascriptBody({ id, html, js, css, version, hyperformulaVersion, sandbox });
  } else if(/ts(-.*)?/.test(preset)) {
    return buildTypescriptBody({ id, html, ts: js, css, version, hyperformulaVersion, sandbox });
  } else if (/react(-.*)?/.test(preset)) {
    return buildReactBody({ js, css, version, hyperformulaVersion, preset, sandbox });
  } else if (/vue3(-.*)?/.test(preset)) {
    return buildVue3Body({ id, html, js, css, version, hyperformulaVersion, preset });
  } else if (/vue(-.*)?/.test(preset)) {
    return buildVueBody({ id, html, js, css, version, hyperformulaVersion, preset });
  } else if (/angular(-.*)?/.test(preset)) {
    return buildAngularBody({ html, js, version, hyperformulaVersion });
  }

  return undefined;
};

module.exports = { getBody };

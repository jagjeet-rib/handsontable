(() => {
  const docusaurusVersions = ['9.0'];
  const legacyVersions = [
    '8.3.0',
    '8.2.0',
    '8.1.0',
    '8.0.0',
    '7.4.2',
    '7.4.1',
    '7.4.0',
    '7.3.0',
    '7.2.2',
    '7.2.1',
    '7.2.0',
    '7.1.1',
    '7.1.0',
    '7.0.3',
    '7.0.2',
    '7.0.1',
    '7.0.0',
    '6.2.2',
    '6.2.1',
    '6.2.0',
    '6.1.1',
    '6.1.0',
    '6.0.1',
    '6.0.0',
    '5.0.2',
    '5.0.1',
    '5.0.0',
    '4.0.0',
    '3.0.0',
    '2.0.0',
    ['1.18.1', '0.38.1'],
    ['1.18.0', '0.38.0'],
    ['1.17.0', '0.37.0'],
    ['1.16.0', '0.36.0'],
    ['1.15.1', '0.35.1'],
    ['1.15.0', '0.35.0'],
    ['1.14.3', '0.34.3'],
    ['1.14.2', '0.34.2'],
    ['1.14.1', '0.34.1'],
    ['1.14.0', '0.34.0']
  ];
  const versions = [...docusaurusVersions, ...legacyVersions];

  // eslint-disable-next-line
  if (window.location.hostname === 'dev.handsontable.com') {
    versions.unshift('next');
  }

  // eslint-disable-next-line
  docVersions && docVersions(versions);
})();

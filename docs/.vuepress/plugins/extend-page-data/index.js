const {
  getSidebars,
  getThisDocsVersion,
  getDocsBaseUrl,
} = require('../../helpers');

const buildMode = process.env.BUILD_MODE;
const pluginName = 'hot/extend-page-data';

/**
 * Remove the slash from the beginning and ending of the string.
 *
 * @param {string} string String to process.
 * @returns {string}
 */
function removeEndingSlashes(string) {
  return string.replace(/^\//, '').replace(/\/$/, '');
}

/**
 * Dedupes the slashes in the string.
 *
 * @param {string} string String to process.
 * @returns {string}
 */
function dedupeSlashes(string) {
  return string.replace(/(\/)+/g, '$1');
}

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const twoDigitDay = date.getDate();
  const shortMonthName = date.toLocaleString('default', { month: 'short' });

  return `${shortMonthName} ${twoDigitDay}, ${date.getFullYear()}`;
};

module.exports = (options, context) => {
  return {
    name: pluginName,

    ready() {
      context.themeConfig.sidebar = getSidebars();
    },

    /**
     * Extends and updates a page with additional information for versioning.
     *
     * @param {object} $page The $page value of the page you’re currently reading.
     */
    extendPageData($page) {
      $page.currentVersion = getThisDocsVersion();
      $page.buildMode = buildMode;
      $page.baseUrl = getDocsBaseUrl();
      $page.lastUpdatedFormat = formatDate($page.lastUpdated);

      if ($page.frontmatter.canonicalUrl) {
        let canonicalShortUrl = removeEndingSlashes($page.frontmatter.canonicalUrl);

        if (
          !canonicalShortUrl.startsWith(`${$page.currentVersion}/`) &&
          !canonicalShortUrl.match(/(javascript|react)-data-grid\//)
        ) {
          canonicalShortUrl = `javascript-data-grid/${canonicalShortUrl}`;
        }

        $page.frontmatter.canonicalUrl = `${getDocsBaseUrl()}/docs${dedupeSlashes(`/${canonicalShortUrl}/`)}`;
      }
    },
  };
};

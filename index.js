'use strict';

const moduleName = require('./package').name;

module.exports = {
  name: moduleName,

  contentFor(type, config) {
    if (type === 'head') {
      if (config.matomo && config.matomo) {
        if (config.matomo.url) {
          const matomoUrl = config.matomo.url;
          return `
<!-- Matomo Tag Manager -->
<script type="text/javascript">
var _mtm = _mtm || [];
_mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
g.type='text/javascript'; g.async=true; g.defer=true; g.src='${matomoUrl}'; s.parentNode.insertBefore(g,s);
</script>
<!-- End Matomo Tag Manager -->
      `;
        } else {
          console.warn(`[${moduleName}] Expected Matomo container URL in config/environment.js`);
        }
      }
    }
  }
};

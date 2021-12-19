const fs = require('fs');
const axios = require('axios');
const swaggerToTS = require('openapi-typescript').default;
const yaml = require('js-yaml');

// patch
function dfs(obj) {
  if (
    Object.prototype.hasOwnProperty.call(obj, 'properties')
    && !Object.prototype.hasOwnProperty.call(obj, 'required')
  ) {
    obj.required = Object.keys(obj.properties);
  }
  for (const k of Object.keys(obj)) {
    if (typeof obj[k] === 'object') dfs(obj[k]);
  }
}

axios.get('https://raw.githubusercontent.com/bangumi/api/master/open-api/api.yml').then(res => {
  const doc = yaml.load(res.data);
  dfs(doc);
  fs.writeFileSync(require('path').resolve(__dirname, '../types/index.ts'), swaggerToTS(doc));
});

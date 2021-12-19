const fs = require('fs');
const axios = require('axios');
const swaggerToTS = require('openapi-typescript').default;

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

axios
  .get('https://bangumi.github.io/api/dist.json')
  .then(res => {
    const doc = res.data;
    dfs(doc);
    return swaggerToTS(doc);
  })
  .then(data => fs.writeFileSync(require('path').resolve(__dirname, '../types/index.ts'), data));

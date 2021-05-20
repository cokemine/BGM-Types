const axios = require('axios');
const swaggerToTS = require("openapi-typescript").default;
const yaml = require('js-yaml');
const fs = require('fs');

function dfs(obj) {
  if (obj.hasOwnProperty('properties') && !obj.hasOwnProperty('required')) {
    const arr = [];
    for (const prop of Object.keys(obj['properties'])) {
      arr.push(prop)
    }
    obj.required = arr;
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

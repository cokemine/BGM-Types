import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import swaggerToTS from 'openapi-typescript';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// patch
function dfs(obj) {
  if (
    Object.prototype.hasOwnProperty.call(obj, 'properties') &&
    !Object.prototype.hasOwnProperty.call(obj, 'required')
  ) {
    obj.required = Object.keys(obj.properties);
  }
  for (const k of Object.keys(obj)) {
    if (typeof obj[k] === 'object') dfs(obj[k]);
  }
}

axios
  .get('https://bangumi.github.io/api/dist.json')
  .then((res) => {
    const doc = res.data;
    dfs(doc);
    return swaggerToTS(doc);
  })
  .then((data) =>
    fs.writeFileSync(path.resolve(__dirname, './src/types/index.ts'), data)
  );

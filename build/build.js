import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import swaggerToTS from 'openapi-typescript';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

axios
  .get('https://bangumi.github.io/api/dist.json')
  .then((res) => {
    const doc = res.data;
    return swaggerToTS(doc);
  })
  .then((data) =>
    fs.writeFileSync(path.resolve(__dirname, '../src/types/index.ts'), data)
  );

const axios = require('axios');
const swaggerToTS = require("openapi-typescript").default;
const yaml = require('js-yaml');
const fs = require('fs');
axios.get('https://raw.githubusercontent.com/bangumi/api/master/open-api/api.yml').then(res => {
    const doc = yaml.load(res.data);
    fs.writeFileSync('../types/api.d.ts', swaggerToTS(doc));
});

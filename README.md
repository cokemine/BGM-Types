## BGM-Types

Bangumi.tv 官方 API 的 TypeScript 声明文件

API: https://github.com/bangumi/api

您目前访问的是旧版本 API, 建议等新版本 API 稳定后尽快迁移至新版本。

## How To Use

```shell
npm install bgm-types@1 -D
```

该声明文件暴露了 5 个命名空间，分别对应官方 API 5 种类型的接口，可以按需引入。

```javascript
import { BGMUser, BGMSubject, BGMSearch, BGMProgress, BGMCollection } from 'bgm-types';
```

示例

```typescript
import fetch from 'node-fetch';
import type { BGMUser } from 'bgm-types';

// 获取 Sai 老板在看的剧集 !
(async () => {
  const res = await fetch('https://api.bgm.tv/user/Sai/collection?cat=watching', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = (await res.json()) as BGMUser.Collection;
  for (let i = 0; i < data.length; ++i) {
    console.log(data[i].subject.name);
  }
})();
```

## Thanks

openapi-typescript: https://github.com/drwpow/openapi-typescript

js-yaml: https://github.com/nodeca/js-yaml
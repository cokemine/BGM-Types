## BGM-Types

Bangumi.tv 官方 API 的 TypeScript 声明文件

API: <https://github.com/bangumi/api>

您目前访问的是新版本 API, 新版本 API 还在建设中，可能会有不稳定的变动。

旧版本 API 类型注解 请见 v1 分支。

## How To Use

```shell
npm install bgm-types -D
```

该声明文件暴露了以下几个命名空间，分别对应官方 API 的接口，可以按需引入。

```javascript
import {
  // 返回值类型
  BGMPerson,
  BGMCharacter,
  BGMEpisode,
  BGMUser,
  BGMSubject,
  BGMSearch,
  BGMProgress,
  BGMCollection,
  BGMCategory, // 别名 BGMIndices
  BGMEditHistory,

  // 下面是请求参数类型
  BGMSubjectParams,
  BGMpisodeParams,
  BGMCharacterParams,
  BGMPersonParams,
  BGMUserParams,
  BGMCollectionParams,
  BGMEditHistoryParams,
  BGMCategoryParams, // 别名 BGMIndicesParams
  BGMSearchParams,
} from 'bgm-types';
```

示例

```typescript
import fetch from 'node-fetch';
import type { BGMUser } from 'bgm-types';

// 获取 Sai 老板在看的剧集 !
(async () => {
  const res = await fetch('https://api.bgm.tv/user/Sai/collection?cat=watching', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = (await res.json()) as BGMUser.Collection;
  for (let i = 0; i < data.length; ++i) {
    console.log(data[i].subject.name);
  }
})();
```

## Thanks

openapi-typescript: <https://github.com/drwpow/openapi-typescript>

js-yaml: <https://github.com/nodeca/js-yaml>

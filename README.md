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
  BGMEpisodeParams,
  BGMCharacterParams,
  BGMPersonParams,
  BGMUserParams,
  BGMCollectionParams,
  BGMEditHistoryParams,
  BGMCategoryParams, // 别名 BGMIndicesParams
  BGMSearchParams,

  // 工具泛型, 用于获取请求类型中不同类型的参数
  Path, // 获取 Path 参数
  Query, // 获取 Query 参数
  RequestBody, // 获取 RequestBody 参数
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

// 关于请求参数类型的使用, 以search api, axios请求为例
const search(
    keywords: Path<BGMSearchParams.Search>,
    params?: Query<BGMSearchParams.Search>
  ): Promise<BGMSearch.Search> => {
  const url = encodeURI(`/search/subject/${keywords}`);
  const res = axios.get(url, {
    params,
  });

  return res.data;
}
// 其中 keywords 是路径参数
// 使用类型 BGMSearchParams.Search['path']['keywords']
// 或 Path 泛型 Path<BGMSearchParams.Search>
// params 同理
```

## Thanks

openapi-typescript: <https://github.com/drwpow/openapi-typescript>

js-yaml: <https://github.com/nodeca/js-yaml>

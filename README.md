## BGM-Types

Bangumi.tv 官方API的TypeScript声明文件

API: https://github.com/bangumi/api

## HowToUse

```shell
yarn add bgm-types -D
//or
npm install bgm-types -D
```

该声明文件暴露了5个命名空间，分别对应官方API 5种类型的接口，可以按需引入。

```javascript
import {BGMUser, BGMSubject, BGMSearch, BGMProgress, BGMCollection} from 'bgm-types';
```

示例

![](https://img.ams1.imgbed.xyz/2021/03/08/1z7PA.png)



## Thanks

openapi-typescript: https://github.com/drwpow/openapi-typescript

js-yaml: https://github.com/nodeca/js-yaml
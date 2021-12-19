/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/user/{username}": {
    get: {
      parameters: {
        path: {
          /** 用户名 <br> 也可使用 UID */
          username: components["parameters"]["username"];
        };
      };
      responses: {
        /** 返回用户基础信息 */
        200: {
          content: {
            "application/json": components["schemas"]["User"];
          };
        };
      };
    };
  };
  "/user/{username}/collection": {
    get: {
      parameters: {
        path: {
          /** 用户名 <br> 也可使用 UID */
          username: components["parameters"]["username"];
        };
        query: {
          /** 收藏类型 <br> watching = 在看的动画与三次元条目 <br> all_watching = 在看的动画三次元与书籍条目 */
          cat: "watching" | "all_watching";
          /** 收藏条目 ID <br> 批量查询收藏状态，将条目 ID 以半角逗号分隔，如 1,2,4,6 */
          ids?: string;
          /** medium / small <br> 默认为 medium。small 时不返回条目详细信息 */
          responseGroup?: "small" | "medium";
        };
      };
      responses: {
        /** 获取用户收藏列表，默认为在看 */
        200: {
          content: {
            "application/json": {
              /** 番剧标题 */
              name: string;
              /** 章节 ID */
              subject_id: number;
              /** 完成话数 */
              ep_status: number;
              /** 完成卷数（书籍） */
              vol_status: unknown;
              /** 上次更新时间 */
              lasttouch: number;
              subject: components["schemas"]["SubjectBase"] & {
                /** 话数 */
                eps: number;
                /** 话数 */
                eps_count: number;
                collection: components["schemas"]["SubjectCollection"];
              };
            }[];
          };
        };
      };
    };
  };
  "/user/{username}/collections/{subject_type}": {
    get: {
      parameters: {
        path: {
          /** 用户名 <br> 也可使用 UID */
          username: components["parameters"]["username"];
          /** 条目类型，详见 [SubjectTypeName](#model-SubjectTypeName) */
          subject_type: components["schemas"]["SubjectTypeName"];
        };
        query: {
          /** [https://bgm.tv/dev/app](https://bgm.tv/dev/app) 申请到的 App ID */
          app_id: components["parameters"]["app_id"];
          /** 显示条数 <br> 最多 25 */
          max_results?: number;
        };
      };
      responses: {
        /** 获取用户指定类型的收藏概览，固定返回最近更新的收藏，不支持翻页 */
        200: {
          content: {
            "application/json": {
              type: components["schemas"]["SubjectType"];
              name: components["schemas"]["SubjectTypeName"];
              /** 条目类型中文名 */
              name_cn: string;
              /** 收藏列表 */
              collects: {
                status: components["schemas"]["CollectionStatus"];
                count: number;
                list: {
                  /** 条目 ID */
                  subject_id: string;
                  subject: components["schemas"]["SubjectBase"];
                }[];
              }[];
            }[];
          };
        };
      };
    };
  };
  "/user/{username}/collections/status": {
    get: {
      parameters: {
        path: {
          /** 用户名 <br> 也可使用 UID */
          username: components["parameters"]["username"];
        };
        query: {
          /** [https://bgm.tv/dev/app](https://bgm.tv/dev/app) 申请到的 App ID */
          app_id: components["parameters"]["app_id"];
        };
      };
      responses: {
        /** 获取用户所有收藏信息 */
        200: {
          content: {
            "application/json": {
              type: components["schemas"]["SubjectType"];
              name: components["schemas"]["SubjectTypeName"];
              /** 条目类型中文名 */
              name_cn: string;
              /** 收藏列表 */
              collects: {
                status: components["schemas"]["CollectionStatus"];
                count: number;
              }[];
            }[];
          };
        };
      };
    };
  };
  "/user/{username}/progress": {
    get: {
      parameters: {
        path: {
          /** 用户名 <br> 也可使用 UID */
          username: components["parameters"]["username"];
        };
        query: {
          /** 条目 ID <br> 获取指定条目收视进度 */
          subject_id?: number;
        };
      };
      responses: {
        /** 返回用户收视进度 */
        200: {
          content: {
            "application/json": {
              /** 条目 ID */
              subject_id: number;
              /** 章节列表 */
              eps: {
                /** 章节 ID */
                id: number;
                status: {
                  id: components["schemas"]["EpStatusId"];
                  css_name: string;
                  url_name: components["schemas"]["EpStatusType"];
                  cn_name: components["schemas"]["EpStatusName"];
                };
              }[];
            }[];
          };
        };
        /** 未授权 */
        401: {
          content: {
            "application/json": components["schemas"]["StatusCode"];
          };
        };
      };
    };
  };
  "/subject/{subject_id}": {
    get: {
      parameters: {
        path: {
          /** 条目 ID */
          subject_id: components["parameters"]["subject_id"];
        };
        query: {
          /** 返回数据大小，参考 [ResponseGroup](#model-ResponseGroup) <br> 默认为 small */
          responseGroup?: components["parameters"]["responseGroup"];
        };
      };
      responses: {
        /** 根据 responseGroup 参数，返回以下三个模型 <br> [SubjectSmall](#model-SubjectSmall) <br> [SubjectMedium](#model-SubjectMedium) <br> [SubjectLarge](#model-SubjectLarge) */
        200: {
          content: {
            "application/json":
              | components["schemas"]["SubjectSmall"]
              | components["schemas"]["SubjectMedium"]
              | components["schemas"]["SubjectLarge"];
          };
        };
      };
    };
  };
  "/subject/{subject_id}/ep": {
    get: {
      parameters: {
        path: {
          /** 条目 ID */
          subject_id: components["parameters"]["subject_id"];
        };
      };
      responses: {
        /** 章节数据 */
        200: {
          content: {
            "application/json": components["schemas"]["SubjectBase"] & {
              /** 章节列表 */
              eps: components["schemas"]["Episode"][];
            };
          };
        };
      };
    };
  };
  "/calendar": {
    get: {
      responses: {
        /** 每日放送 */
        200: {
          content: {
            "application/json": {
              weekday: {
                en: string;
                cn: string;
                ja: string;
                id: number;
              };
              items: components["schemas"]["SubjectSmall"][];
            }[];
          };
        };
      };
    };
  };
  "/search/subject/{keywords}": {
    get: {
      parameters: {
        path: {
          /** 关键词 <br> 需要 URL Encode */
          keywords: string;
        };
        query: {
          /** 条目类型，参考 [SubjectType](#model-SubjectType) */
          type?: components["schemas"]["SubjectType"];
          /** 返回数据大小，参考 [ResponseGroup](#model-ResponseGroup) <br> 默认为 small */
          responseGroup?: components["parameters"]["responseGroup"];
          /** 开始条数 */
          start?: number;
          /** 每页条数 <br> 最多 25 */
          max_results?: number;
        };
      };
      responses: {
        /** 搜索结果 */
        200: {
          content: {
            "application/json": {
              /** 总条数 */
              results: number;
              /** 结果列表 */
              list: components["schemas"]["SubjectSmall"][];
            };
          };
        };
      };
    };
  };
  "/ep/{id}/status/{status}": {
    get: {
      parameters: {
        path: {
          /** 章节 ID */
          id: components["parameters"]["ep_id"];
          /** 收视类型，参考 [EpStatusType](#model-EpStatusType) */
          status: components["parameters"]["ep_status"];
        };
      };
      responses: {
        /** 成功 */
        200: {
          content: {
            "application/json": components["schemas"]["StatusCode"];
          };
        };
        /** 未授权 */
        401: {
          content: {
            "application/json": components["schemas"]["StatusCode"];
          };
        };
      };
    };
    post: {
      parameters: {
        path: {
          /** 章节 ID */
          id: components["parameters"]["ep_id"];
          /** 收视类型，参考 [EpStatusType](#model-EpStatusType) */
          status: components["parameters"]["ep_status"];
        };
        query: {
          /** 使用 POST 批量更新 <br> 将章节以半角逗号分隔，如 `3697,3698,3699`。请求时 URL 中的 ep_id 为最后一个章节 ID */
          ep_id?: string;
        };
      };
      responses: {
        /** 成功 */
        200: {
          content: {
            "application/json": components["schemas"]["StatusCode"];
          };
        };
        /** 未授权 */
        401: {
          content: {
            "application/json": components["schemas"]["StatusCode"];
          };
        };
      };
    };
  };
  "/subject/{subject_id}/update/watched_eps": {
    post: {
      parameters: {
        path: {
          /** 条目 ID */
          subject_id: components["parameters"]["subject_id"];
        };
        query: {
          /** 如看到 123 话则 POST `123` <br> 书籍条目传 watched_eps 与 watched_vols 至少其一 */
          watched_eps: string;
          /** 如看到第 3 卷则 POST `3`, 仅对书籍条目有效 */
          watched_vols?: string;
        };
      };
      responses: {
        /** 成功 */
        200: {
          content: {
            "application/json": components["schemas"]["StatusCode"];
          };
        };
        /** 未授权 */
        401: {
          content: {
            "application/json": components["schemas"]["StatusCode"];
          };
        };
      };
    };
  };
  "/collection/{subject_id}": {
    get: {
      parameters: {
        path: {
          /** 条目 ID */
          subject_id: components["parameters"]["subject_id"];
        };
      };
      responses: {
        200: components["responses"]["Collection"];
        /** 用户未收藏该条目 */
        400: {
          content: {
            "application/json": components["schemas"]["StatusCode"];
          };
        };
        /** 未授权 */
        401: {
          content: {
            "application/json": components["schemas"]["StatusCode"];
          };
        };
      };
    };
  };
  "/collection/{subject_id}/{action}": {
    post: {
      parameters: {
        path: {
          /** 条目 ID */
          subject_id: components["parameters"]["subject_id"];
          /** 收藏动作 <br> create = 添加收藏 <br> update = 更新收藏 <br> 可以统一使用 `update`，系统会自动判断需要新建还是更新收藏 */
          action: "create" | "update";
        };
        query: {
          /** 收藏状态，参考 [CollectionStatusType](#model-CollectionStatusType) */
          status: components["schemas"]["CollectionStatusType"];
          /** 简评 */
          comment?: string;
          /** 标签 <br> 以半角空格分割 */
          tags?: string;
          /** 评分 <br> 1-10 */
          rating?: number;
          /** 收藏隐私 <br> 0 = 公开 <br> 1 = 私密 */
          privacy?: 0 | 1;
        };
      };
      responses: {
        200: components["responses"]["Collection"];
        /** 未授权 */
        401: {
          content: {
            "application/json": components["schemas"]["StatusCode"];
          };
        };
      };
    };
  };
}

export interface components {
  schemas: {
    /** 收藏状态 ID */
    CollectionStatusId: 1 | 2 | 3 | 4 | 5;
    /** 收藏状态类型 */
    CollectionStatusType: "wish" | "collect" | "do" | "on_hold" | "dropped";
    /** 收藏状态名称 */
    CollectionStatusName: "想做" | "做过" | "在做" | "搁置" | "抛弃";
    /** 收藏状态 <br> 1 = wish = 想做 <br> 2 = collect = 做过 <br> 3 = do = 在做 <br> 4 = on_hold = 搁置 <br> 5 = dropped = 抛弃 */
    CollectionStatus: {
      id: components["schemas"]["CollectionStatusId"];
      type: components["schemas"]["CollectionStatusType"];
      name: components["schemas"]["CollectionStatusName"];
    };
    /** 章节状态 ID */
    EpStatusId: 2 | 1 | 3;
    /** 章节状态类型 */
    EpStatusType: "watched" | "queue" | "drop" | "remove";
    /** 章节状态名称 */
    EpStatusName: "看过" | "想看" | "抛弃" | "撤销";
    /** 章节状态 <br> 2 = watched = 看过 <br> 1 = queue = 想看 <br> 3 = drop = 抛弃 <br> ? = remove = 撤销 */
    EpStatus: {
      id: components["schemas"]["EpStatusId"];
      type: components["schemas"]["EpStatusType"];
      name: components["schemas"]["EpStatusName"];
    };
    /** 返回数据大小 */
    ResponseGroup: "small" | "medium" | "large";
    /** 人物（基础模型） */
    MonoBase: {
      /** 人物 ID */
      id: number;
      /** 人物地址 */
      url: string;
      /** 姓名 */
      name: string;
      /** 肖像 */
      images: {
        large: string;
        medium: string;
        small: string;
        grid: string;
      };
    };
    /** 人物 */
    Mono: components["schemas"]["MonoBase"] & {
      /** 简体中文名 */
      name_cn: string;
      /** 回复数量 */
      comment: number;
      /** 收藏人数 */
      collects: number;
    };
    /** 人物信息 */
    MonoInfo: {
      /** 生日 */
      birth: string;
      /** 身高 */
      height: string;
      /** 性别 */
      gender: string;
      /** 别名（另外添加出来的 key 为 0 开始的数字） */
      alias: {
        /** 日文名 */
        jp: string;
        /** 纯假名 */
        kana: string;
        /** 昵称 */
        nick: string;
        /** 罗马字 */
        romaji: string;
        /** 第二中文名 */
        zh: string;
      };
      /** 引用来源 */
      source: string | string[];
      /** 简体中文名 */
      name_cn: string;
      /** 声优 */
      cv: string;
    };
    /** 现实人物 */
    Person: components["schemas"]["Mono"] & {
      info: components["schemas"]["MonoInfo"];
    };
    /** 虚拟角色 */
    Character: components["schemas"]["Mono"] & {
      info: components["schemas"]["MonoInfo"];
      /** 声优列表 */
      actors: components["schemas"]["MonoBase"][];
    };
    /** 章节类型 <br> 0 = 本篇 <br> 1 = 特别篇 <br> 2 = OP <br> 3 = ED <br> 4 = 预告/宣传/广告 <br> 5 = MAD <br> 6 = 其他 */
    EpisodeType: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /** 章节信息 */
    Episode: {
      /** 章节 ID */
      id: number;
      /** 章节地址 */
      url: string;
      type: components["schemas"]["EpisodeType"];
      /** 集数 */
      sort: number;
      /** 标题 */
      name: string;
      /** 简体中文标题 */
      name_cn: string;
      /** 时长 */
      duration: string;
      /** 放送日期 */
      airdate: string;
      /** 回复数量 */
      comment: number;
      /** 简介 */
      desc: string;
      /** 放送状态 <br> Air = 已放送 <br> Today = 正在放送 <br> NA = 未放送 */
      status: "Air" | "Today" | "NA";
    };
    /** 讨论版 */
    Topic: {
      /** ID */
      id: number;
      /** 地址 */
      url: string;
      /** 标题 */
      title: string;
      /** 所属对象（条目） ID */
      main_id: number;
      /** 发布时间 */
      timestamp: number;
      /** 最后回复时间 */
      lastpost: number;
      /** 回复数 */
      replies: number;
      user: components["schemas"]["User"];
    };
    /** 日志 */
    Blog: {
      /** ID */
      id: number;
      /** 地址 */
      url: string;
      /** 标题 */
      title: string;
      /** 概览 */
      summary: string;
      /** 图片 */
      image: string;
      /** 回复数 */
      replies: number;
      /** 发布时间 */
      timestamp: number;
      /** 发布时间 */
      dateline: string;
      user: components["schemas"]["User"];
    };
    /** 条目类型 <br> 1 = book <br> 2 = anime <br> 3 = music <br> 4 = game <br> 6 = real */
    SubjectType: 1 | 2 | 3 | 4 | 6;
    /** 条目类型名称 <br> book <br> anime <br> music <br> game <br> real */
    SubjectTypeName: "book" | "anime" | "music" | "game" | "real";
    /** 收藏人数 */
    SubjectCollection: {
      /** 想做 */
      wish: number;
      /** 做过 */
      collect: number;
      /** 在做 */
      doing: number;
      /** 搁置 */
      on_hold: number;
      /** 抛弃 */
      dropped: number;
    };
    Subject: {
      /** 条目 ID */
      id: number;
      /** 条目地址 */
      url: string;
      type: components["schemas"]["SubjectType"];
      /** 条目名称 */
      name: string;
    };
    SubjectBase: components["schemas"]["Subject"] & {
      /** 条目中文名称 */
      name_cn: string;
      /** 剧情简介 */
      summary: string;
      /** 放送开始日期 */
      air_date: string;
      /** 放送星期 */
      air_weekday: number;
      /** 封面 */
      images: {
        large: string;
        common: string;
        medium: string;
        small: string;
        grid: string;
      };
    };
    SubjectSmall: components["schemas"]["SubjectBase"] & {
      /** 话数 */
      eps: number;
      /** 话数 */
      eps_count: number;
      /** 评分 */
      rating: {
        /** 总评分人数 */
        total: number;
        /** 各分值评分人数 */
        count: {
          "1": number;
          "2": number;
          "3": number;
          "4": number;
          "5": number;
          "6": number;
          "7": number;
          "8": number;
          "9": number;
          "10": number;
        };
        /** 评分 */
        score: number;
      };
      /** 排名 */
      rank: number;
      collection: components["schemas"]["SubjectCollection"];
    };
    SubjectMedium: components["schemas"]["SubjectSmall"] & {
      /** 角色信息 */
      crt: (components["schemas"]["Character"] & {
        /** 角色类型 */
        role_name: string;
      })[];
      /** 制作人员信息 */
      staff: (components["schemas"]["Person"] & {
        /** 人物类型 */
        role_name: string;
        /** 职位 */
        jobs: string[];
      })[];
    };
    SubjectLarge: components["schemas"]["SubjectMedium"] & {
      /** 章节列表 */
      eps: components["schemas"]["Episode"][];
      /** 讨论版 */
      topic: components["schemas"]["Topic"][];
      /** 评论日志 */
      blog: components["schemas"]["Blog"][];
    };
    /** 用户信息 */
    User: {
      /** 用户 id */
      id: number;
      /** 用户主页地址 */
      url: string;
      /** 用户名 */
      username: string;
      /** 昵称 */
      nickname: string;
      /** 头像地址 */
      avatar: {
        large: string;
        medium: string;
        small: string;
      };
      /** 签名 */
      sign: string;
      usergroup: components["schemas"]["UserGroup"];
    };
    /** 用户组 <br> 1 = 管理员 <br> 2 = Bangumi 管理猿 <br> 3 = 天窗管理猿 <br> 4 = 禁言用户 <br> 5 = 禁止访问用户 <br> 8 = 人物管理猿 <br> 9 = 维基条目管理猿 <br> 10 = 用户 <br> 11 = 维基人 */
    UserGroup: 1 | 2 | 3 | 4 | 5 | 8 | 9 | 10 | 11;
    /** 响应状态（HTTP 状态码都为 200） */
    StatusCode: {
      /** 当前请求的地址 */
      request: string;
      /** 状态码 <br> 200 OK <br> 202 Accepted <br> 304 Not Modified <br> 30401 Not Modified: Collection already exists <br> 400 Bad Request <br> 40001 Error: Nothing found with that ID <br> 401 Unauthorized <br> 40101 Error: Auth failed over 5 times <br> 40102 Error: Username is not an Email address <br> 405 Method Not Allowed <br> 404 Not Found */
      code:
        | 200
        | 202
        | 304
        | 30401
        | 400
        | 40001
        | 401
        | 40101
        | 40102
        | 405
        | 404;
      /** 状态信息 */
      error: string;
    };
  };
  responses: {
    /** 条目收藏信息 */
    Collection: {
      content: {
        "application/json": {
          status: components["schemas"]["CollectionStatus"];
          /** 评分 */
          rating: number;
          /** 评论 */
          comment: string;
          /** 收藏隐私 */
          private: 0 | 1;
          /** 标签 */
          tag: string[];
          /** 完成话数 */
          ep_status: number;
          /** 上次更新时间 */
          lasttouch: number;
          user: components["schemas"]["User"];
        };
      };
    };
  };
  parameters: {
    /** 用户名 <br> 也可使用 UID */
    username: string;
    /** 条目 ID */
    subject_id: number;
    /** 章节 ID */
    ep_id: number;
    /** 收视类型，参考 [EpStatusType](#model-EpStatusType) */
    ep_status: components["schemas"]["EpStatusType"];
    /** 返回数据大小，参考 [ResponseGroup](#model-ResponseGroup) <br> 默认为 small */
    responseGroup: components["schemas"]["ResponseGroup"];
    /** [https://bgm.tv/dev/app](https://bgm.tv/dev/app) 申请到的 App ID */
    app_id: string;
  };
}

export interface operations {}

export interface external {}
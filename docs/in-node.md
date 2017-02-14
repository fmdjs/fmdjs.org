# 在node的使用

## 安装

    npm install fmd.js

## 引用

    var fmd = require('fmd.js');

会提供全局`fmd`对象和全局`define`函数

## 配置项

### basePath

`basePath<string>`是字符串，作为获取本地JS模块的基础部分，默认值为当前node进程的根目录，即`process.cwd()`，地位等同于浏览器端的`baseUrl `

    fmd.config({
        basePath: process.cwd()
    });

### 其他node端生效的配置项

* [alias](/docs/api/config.html#alias)
* [resolve](/docs/api/config.html#resolve)
* [hasCatch](/docs/api/config.html#hascatch)

## 事件

在node端支持以下事件

* [existed](/docs/api/events-basic.html#event-existed-)
* [saved](/docs/api/events-advanced.html#event-saved-)
* [makeRequire](/docs/api/events-advanced.html#event-makerequire-)
* [alias](/docs/api/events-basic.html#event-alias-)
* [resolve](/docs/api/events-basic.html#event-resolve-)
* [id2url](/docs/api/events-basic.html#event-id2url-)
* [compiled](/docs/api/events-basic.html#event-compiled-)
* [compileFailed](/docs/api/events-basic.html#event-compilefailed-)

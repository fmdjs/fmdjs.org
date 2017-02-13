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

### id2uri

与浏览器端的不同，在node端是最终通过`asset.uri`去require该模块的

    fmd.on( 'id2uri', function( asset ){
        //todo sth
    } );

此事件发生在id解析成uri后，参数asset有两个子对象，一为id，二为uri（完整uri）

### 其他node端生效的事件

* [existed](/docs/api/events-basic.html#event-existed-)
* [saved](/docs/api/events-advanced.html#event-saved-)
* [makeRequire](/docs/api/events-advanced.html#event-makerequire-)
* [alias](/docs/api/events-basic.html#event-alias-)
* [resolve](/docs/api/events-basic.html#event-resolve-)
* [compiled](/docs/api/events-basic.html#event-compiled-)
* [compileFailed](/docs/api/events-basic.html#event-compilefailed-)

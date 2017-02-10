# Plugin non

`non`是**非**的意思，用来加载非FMD文件

当一个FMD模块依赖多个非FMD文件时，又要异步加载这些非FMD文件的话，若多个非FMD文件之间无依赖关系按默认的方式去加载倒也还行，一旦存在依赖，那就没辙了。`non`插件就是为此而生

`non`插件解决的问题就是js文件**并行加载，顺序执行**，基本可以替代HeadJS

## Downloads

先下载[fmd/plugin](/dist/fmd/plugin.js)模块，再下载[non插件](/dist/plugins/non.js)，依次引入在fmd.js之后

当然也可以自行都打包进fmd.js

## Usage

    define( ['non!sth/a','non!sth/b'], function(){
        //todo sth
    } );

`sth/a`js文件，`sth/b`js文件是非FMD文件，当此匿名模块依赖它们并加载它们时，`sth/a`和`sth/b`两文件将并行加载，按书写顺序执行

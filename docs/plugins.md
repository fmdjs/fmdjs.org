# Plugins

fmd.js提供了针对异步加载这一行为的插件的机制，此处的插件是指通过对所依赖模块的id的特殊标记从而对加载依赖模块进行某种特殊处理的功能

插件的标记语法如下：

    define( ['xxx!mod/a','xxx!mod/b'], function( a, b ){
        //todo sth
    } );

`xxx!mod/a`即是此匿名模块对依赖模块`mod/a`的特殊标记，`!`前的`xxx`是插件名称，即通过`!`来分隔依赖模块id中的插件名称部分和原始id部分

插件`xxx`实现了某种特殊加载机制。在该匿名模块初始化时去异步加载`mod/a`时，将通过`xxx`插件实现的机制来加载，而非默认的加载方式

目前已实现的插件有[non插件](/docs/api/plugin-non.html)、[combo插件](/docs/api/plugin-combo.html)

## Downloads

下载[fmd/plugin](/dist/fmd/plugin.js)模块，将其引入在fmd.js之后，再引入相应的插件模块即可

当然，也可以自行打包，将此文件打包进fmd.js

## Config

插件机制会引入一个配置项`plugin<boolean>`，即使引入了`fmd/plugin`模块，也可以通过如下方式将插件机制关闭

    fmd.config({
        plugin: false
    });

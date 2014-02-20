# Plugin combo

`combo`插件提供将即将加载的数个模块的url合并成一个或数个url去加载的功能，减少请求数。combo需要服务器支持

若存在如下模块：

    define( ['specs/combo/k','specs/combo/k1','specs/combo/k2'], function( a, b, c ){
        //todo sth
    } );

假设所依赖的三个模块的id经过转换得到如下的url

| id | url |
| -- | --- |
| specs/combo/k | http://fmdjs.org/tests/specs/combo/k.js |
| specs/combo/k1 | http://fmdjs.org/tests/specs/combo/k1.js |
| specs/combo/k1 | http://fmdjs.org/tests/specs/combo/k2.js |

那么在使用`combo`插件的场景下，这三个url将合并成 http://fmdjs.org/??tests/specs/combo/k.js,tests/specs/combo/k1.js,tests/specs/combo/k2.js 一个url去加载

为什么`combo`插件没有像`non`插件那样需要用`combo!mod/name`的方式来使用呢？既然服务器支持了combo功能，自然combo加载就是默认的加载方式了。在实现中，依然存在`!`的机制，只是对使用者屏蔽了

`combo`插件也支持对标记了`non`的文件进行combo加载

## Downloads

先下载[fmd/plugin](/dist/fmd/plugin.js)模块，再下载[combo插件](/dist/plugins/combo.js)，依次引入在fmd.js之后

当然也可以自行都打包进fmd.js

## Config

`combo`插件引入了三个配置项

### combo

`combo<boolean>`是个布尔值，在引入`combo`插件的情况下，可以通过此配置关闭combo功能

    fmd.config({
        combo: false
    });

### comboSyntax

`comboSyntax<array>`是个数组

    fmd.config({
        comboSyntax: ['??', ',']
    });

这是默认值，第一项`??`用来表明这是个combo url，第二项`,`用来分隔每个url

### comboMaxLength

`comboMaxLength<number>`是个整型数字

    fmd.config({
        comboMaxLength: 1500
    });
    
这是默认值。浏览器对资源的url长度有限制，所以，当合并数个模块的url生成的url长度超过这个值时将新建另一个url

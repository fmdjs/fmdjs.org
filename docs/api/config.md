# Configuration Options

`fmd.config`是个函数，用来定义或更新或取得相关配置项，其只有一个参数

当参数为对象时，是定义或更新

    fmd.config({
        'configItem1': 'value1',
        '...': '...'
    });

当参数为字符串时，是取得当前字符串所代表的配置项

    fmd.config('debug');//true or false

## alias

`alias<object>`是个对象，用来配置模块id的别名，以简化常用模块的书写

    fmd.config({
        alias: {
            'a': 'case/a'
        }
    });

那么在其他模块中被使用（dependencies/require/require.use）到时均可用`a`来代替`case/a`，当然在模块`case/a`定义时其id必须是`case/a`

重复定义同名alias的，后来者将覆盖前者

## async

`async<boolean>`是个布尔值，默认为`true`，用来设置`dependencies`中的依赖模块是否可以异步加载，若为`true`，此处的异步加载如同`require.use`一样会循环取得所有直接间接依赖的模块

    fmd.config({
        async: true
    });

## resolve

`resolve<function>`是个函数，当需要根据id取得url时执行，其参数只有一个，即将要被转换的id，然后必须`return`经过resolve后的id

    fmd.config({
        resolve: function( id ){
            //todo sth;
            return id;
        }
    });
    
`resolve`函数可以定义多个，不覆盖，按先进先出依次执行，一旦resolve成功（只要id发生了任何的改变即认为是成功），就退出整个resolve环节

## baseUrl

`baseUrl<string>`是字符串，作为异步取文件时文件url的基础部分，默认值为当前fmd.js文件所在src的`protocol+'//'+host+'/'`，例如`http://fmdjs.org/`

    fmd.config({
        baseUrl: 'http://fmdjs.org/'
    });
    
加`baseUrl`在`resolve`之后，加时会先判断当前url是否为绝对路径，否才加

## hasStamp

`hasStamp<boolean>`是个布尔值，默认为`false`。为`true`时给每个需要异步取的url加上默认时间戳，为`false`时不加

    fmd.config({
        hasStamp: false
    });

## stamp

`stamp<object>`是个对象，用来设定某id被resolve成url之后所加的时间辍，其每个子对象必须是符合正则的字符串

    fmd.config({
        stamp: {
            'case/a': '20130407',
            '^case': '20130408'
        }
    });
    
重复定义同名的stamp时，后来者将覆盖前者。解析时间戳时，一旦匹配到，即退出整个匹配环节

不论`hasStamp`是否为`true`，只要被`stamp`匹配到，即以`stamp`匹配的为最后时间戳

**注意：对于规则的匹配采用for-in，先后顺序不定，请尽量保持各规则的互斥**

## timeout

`timeout<number>`是个以毫秒为单位的数字，作为加载资源时的超时时间，默认为10000

    fmd.config({
        timeout: 10000
    });

## charset

`charset<string>`为字符串，即指定加载资源的字符集，默认不指定

    fmd.config({
        charset: 'gbk'
    });

## debug

`debug<boolean>`是布尔值，其值为`true`时进入debug状态

    fmd.config({
        debug: true
    });

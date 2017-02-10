# Quick Start

## 引入fmd.js

在页面直接通过`script`标签引入fmd.js

## 模块书写

### 假设存在`h`模块如下：

    define( 'h', function(){
        
        return 'hello';
    } );

通过`define`全局函数来定义一个模块，字符串`h`是该模块的id，后一个参数是该模块（`h`模块）的工厂函数

当`h`模块第一次被其他模块依赖时，其工厂函数将执行，且只执行一次，并得到由工厂函数返回的结果作为其接口

### 假设存在`w`模块如下：

    define( 'w', ['module'], function( mod ){
        
        mod.exports = 'world';
    });

`w`模块定义时相比`h`模块新增了一个参数`['module']`，此参数是`w`模块运行所需的依赖模块数组，其每一项均为一个模块的id

工厂函数的参数`mod`就是所依赖的`module`模块所提供的接口，若有多个依赖模块，它们的接口将依次作为工厂函数的参数

`module`模块是fmd.js内建的模块，代表当前正在定义的模块（即`w`模块自己）。将值赋给`mod.exports`，与`h`模块的工厂函数中的`return`所取得的效果是一样的，即用来输出当前模块的接口

### 假设存在`output`模块如下：

    define( 'output', ['exports'], function( exp ){
        
        exp.page = function( message ){//对外提供`page`方法
            document.write( message );
        };
    } );

`exports`也是fmd.js内建的模块，其接口是个对象，代表当前正在定义的模块（即`output`模块自己）的接口宿主，对`exp`对象增加属性或方法，即是当前模块所能提供的接口

### 现在想要在页面上输出`hello world`，可以这么做：

    define(['require','output','w'], function( req, out, wo ){
        
        var he = req('h');//取得`h`模块的接口赋予给`he`变量
        
        out.page( he + ' ' + wo );//`page`方法由`output`模块提供
    } );

这个模块定义时没有提供id，那么此模块一经定义即被执行

`req`、`out`、`wo`分别是所依赖的`require`模块、`output`模块、`w`模块所提供的接口

`require`模块也是fmd.js内建的模块，用来取得其他模块所提供的接口

## 调试

### 控制台打印消息

可以通过打开debug配置：

    fmd.config({
        debug: true
    });
    
使得`fmd.log`函数像`console.log`一样在控制台打印消息

若当前浏览器不支持`console`，那么会加载fmd.js的`fmd/console`模块来模拟，需要下载[fmd/console](/dist/fmd/console.js)模块放置到合适目录，配置好resolve规则

### 浏览器debug

fmd.js默认将模块级的报错吞掉，可以通过如下代码将模块错误抛出

    fmd.on( 'compileFailed', function( ex, mod ){
        throw ex;
    } );

## 示例

[hello world同步](/examples/hello-world/sync.html)、[hello world异步](/examples/hello-world/async.html)

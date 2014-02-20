# 定义模块 define a module

fmd.js采用类似AMD和CommonJS的方式来定义模块，`define`是全局函数，基本语法如下：

    define( id?, dependencies?, factory );
    
`id`，模块标识符，用来唯一标识所定义模块，只能是字符串

`dependencies`，模块依赖，只能是数组，且其每一项均是所依赖模块的id

`factory`，模块构造方法，可以是函数、对象、数组


## define( id, dependencies, factory )

这是最常规的用法。当模块存在id时，则此模块为具名模块

    define( 'case/a', ['case/b','case/c'], function( b, c ){
        //todo sth
    } );

此场景下，称模块`case/a`依赖/引用模块`case/b`、模块`case/c`，模块`case/b`被模块`case/a`依赖/引用。此时，`factory`为函数，执行后，将得到该模块输出的接口，执行时，将会依次传入`dependencies`中各个id所标识的模块所输出的接口。即，`b`代表模块`case/b`输出的接口，`c`代表模块`case/c`输出的接口

具名模块只有在第一次其他模块依赖时才会执行`factory`并且输出接口，之后再被依赖，将直接输出接口

## define( id, factory )

当模块没有任何依赖的模块，可将`dependencies`参数省去

    define( 'case/b', function(){
        //todo sth
    } );

## define( id, factory&lt;object/array&gt; )

当`factory`为对象或数组时，`factory`对象或数据即为该模块输出的接口
    
    define( 'case/car', {
        color: 'white',
        size: 'large'
    } );

    define( 'case/size', ['large','normal','small'] );

## define( dependencies, factory )

当不写id时，此模块则匿名模块

    define( ['case/b','case/c'], function( b, c ){
        //todo sth
    } );

匿名模块一经定义立即执行，因为没有其他任何模块可以通过id来依赖于它

## define( factory )

匿名模块也可以省去`dependencies`

    define(function(){
        //todo sth
    });

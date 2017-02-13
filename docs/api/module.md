# 内建模块module

`module`是个对象，用来代表当前模块

## module.id

    define( 'case/i', ['module'], function( module ){
        module.id === 'case/i'; // true
    } );

`module.id`就是当前正在被定义的模块的id，`module.id`只读

    define(['module'], function( module ){
        module.id === ''; // true
    } );

若是匿名模块，其值为空字符串

## module.exports

    define( 'case/j', 'module', function( module ){
        module.exports = function(){};
    } );

`module.exports`能够取得同`return`一样的结果

当内建模块模块exports、`return`、`module.exports`都有被使用到且有值（非undefined）的情况下，它们的生效顺序如下：

<pre class="sh_sourceCode">return > module.exports > exports</pre>

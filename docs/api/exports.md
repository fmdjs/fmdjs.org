# 内建模块exports

`exports`是个对象，用来承载模块对外输出的接口

    define( 'case/f', ['exports'], function( exports ){
        exports.foo = function(){
            //todo sth
        };
    } );
    
当其他模块引用模块`case/f`时，将得到含有`foo`方法的对象

<pre class="sh_javascript wrong">
define( 'case/g', ['exports'], function( exports ){
    exports = function(){};
} );
</pre>

**内建模块exports是不能被覆盖的，不允许这么做**

## 用return返回接口

除了使用内建模块exports来对外输出接口外，也可以使用`return`

    define( 'case/h', function(){
        var foo = function(){};
        return foo;
    } );
    
这样模块也能返回非对象的接口类型，当然也可以返回对象

**一般情况下，不允许内建模块exports和return同时使用**

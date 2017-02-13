# 内建模块require

`require`是个函数，用来取得需要被依赖的模块的接口

## require( id )

内建模块是不能被修改的。可以这样使用内建模块require：
    
    define( 'case/d', ['require'], function( require ){
        var a = require('case/a'),
            b = require('case/b');
        //todo sth
    } );

`require`只有一个参数，即需要引用的模块的id。require之后返回引用模块的接口

`require`是同步的，require时，被引用的模块必须已定义

## require.use( ids, callback? )

如果明确需要异步去取模块的话，可以使用`require.use`

    define( 'case/e', ['require'], function( require ){
        //todo sth
        
        require.use( ['case/a','case/b'], function( a, b ){
            //todo sth
        } );
        
        require.use( 'case/c', function( c ){
            //todo sth
        } );
        
        require.use( 'case/c.css', function(){
            //todo sth
        } );
    } );

`require.use`类似`define`定义匿名模块，`ids`类似`dependencies`，是需要异步去取的模块的id数组，若只有一个模块时可以只写一个id。当然，引用的JS模块的id无须包含文件后缀名，而引用CSS模块时id必须带上文件后缀名（.css）

当ids中的模块都加载完成，即执行`callback`，`callback`执行时也会依次传入ids各模块的接口

需要注意的是，`require.use`会循环取得所有依赖的模块，即当取到一个模块时，会检测其依赖的模块是否都已定义，未定义的仍会去异步加载，直至全部加载完成，才会执行`callback`

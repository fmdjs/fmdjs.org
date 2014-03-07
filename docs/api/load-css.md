# 加载CSS

fmd.js支持加载CSS文件，只要id带上`.css`后缀即可，从id到url转换的逻辑同加载JS一模一样

假设存在如下目录和文件

<pre class="sh_sourceCode">
path/
    mod/
        a.js
        a.css
</pre>

若`a.js`的id设为`path/mod/a`，那么`a.css`的id可设为`path/mod/a.css`，通过如下方式即可加载此两文件

    define(['path/mod/a','path/mod/a.css'], function( a, b ){
        //todo sth
        //b === null
    } );
    
当然，CSS模块不会返回接口，`b`的值为`null`。`require.use`加载CSS的逻辑同此

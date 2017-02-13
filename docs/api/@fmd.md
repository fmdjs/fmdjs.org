# 内建模块@fmd

`@fmd`用来代替全局的`fmd`对象

即可按如下方式来调用全局`fmd`对象的方法

```
define( ['@fmd'], function( fmd ){
    fmd.config({
        hasCatch: true
    });
} );
```
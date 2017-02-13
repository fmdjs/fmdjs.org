# Advanced Events

## event 'saved'

    fmd.on( 'saved', function( mod ){
        //todo sth
    } );

此事件发生在模块刚保存完时，参数`mod`即是刚保存的mod对象。若是匿名模块，此时还未执行，将要执行

## event 'makeRequire'

    fmd.on( 'makeRequire', function( require ){
        //todo sth
    } );
    
此事件发生在某模块依赖内建模块require而生成关键模块require时，参数`require`就是内建模块require对象

## event 'request'

    fmd.on( 'request', function( asset, callback ){
        //todo sth
    } );

此事件发生在加载器将要对参数中的`asset`进行加载。此时，asset未加载过，也未在加载中。参数中的`callback`即是加载完此asset后执行的回调

若在此事件中给`asset`增加一个属性`requested`，且值为`true`，那么加载器将停止默认的加载。即可在此事件中劫持对asset的加载

## event 'createNode'

    fmd.on( 'createNode', function( node, asset ){
        //todo sth
    } );
    
此事件发生在因加载`asset`而创建节点后，此时，节点已创建，但未`appendChild`到页面上

参数`node`是新创建的节点，参数`asset`是节点所对应的asset

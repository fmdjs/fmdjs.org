# Basic Events

fmd.js在模块定义、文件加载等各地添加了事件发送，可以监听各个事件并添加逻辑即可实现个性化需求，基本语法为：

    fmd.on( eventName, callback );

当然也可以移除监听：

    fmd.off( eventName, callback );

移除"eventName"事件下的回调为"callback"的监听

    fmd.off( eventName );

移除"eventName"事件的所有监听

## event 'existed'

    fmd.on( 'existed', function( meta ){
        //todo sth
    } );
    
此事件发生在定义模块之初，表明将要定义的模块已存在，`callback`的参数`meta`只有一个子对象id

## event 'compiled'

    fmd.on( 'compiled', function( mod ){
        //todo sth
    } );
    
此事件发生在模块编译完毕生成exports后，`callback`的参数`mod`是编译之后的mod对象

## event 'compileFailed'

    fmd.on( 'compileFailed', function( ex, mod ){
        //todo sth
    } );
    
此事件发生在模块编译失败后，`callback`的参数`ex`即是浏览器抛出的error，`mod`是编译失败的mod对象

## event 'required'

    fmd.on( 'required', function( mod ){
        //todo sth
    } );

此事件发生在引用模块成功时，在返回exports前一刻，`callback`的参数`mod`是被引用的模块对象

## event 'requireFailed'

    fmd.on( 'requireFailed', function( meta ){
        //todo sth
    } );

此事件发生在引用模块失败后，`callback`的参数`meta`只有一个子对象id，是被引用的模块的id

## event 'requested'

    fmd.on( 'requested', function( asset ){
        //todo sth
    } );

此事件发生在请求资源完成，`callback`的参数`asset`为资源对象

**在资源404时，此事件也会触发**

## event 'requestTimeout'

    fmd.on( 'requestTimeout', function( asset ){
        //todo sth
    } );

此事件发生在请求资源超时，`callback`的参数`asset`为资源对象

## event 'alias'

    fmd.on( 'alias', function( meta ){
        //todo sth
    });

此事件发生在解析别名后，`callback`的参数`meta`只有一个子对象id

## event 'resolve'

    fmd.on( 'resolve', function( asset ){
        //todo sth
    });

此事件发生在处理完所有resolve后，`callback`的参数`asset`有两个子对象，一为id，二为url（非完整url，仅仅经过id resolve）

## event 'id2url'

    fmd.on( 'id2url', function( asset ){
        //todo sth
    } );

此事件发生在id解析成url后，`callback`的参数`asset`有两个子对象，一为id，二为url（完整url）

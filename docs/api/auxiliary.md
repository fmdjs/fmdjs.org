# 辅助方法和属性

`fmd`是fmd.js所提供的一个全局对象，如同`jQuery`之于jQuery

## fmd.define

全局函数`define`即是对`fmd.define`的引用。当`define`被占用时，可以使用或恢复之

## fmd.log( message, type&lt;string&gt;? )

`fmd.log`是个函数，用来打印消息，只有在debug状态下才有效，在支持console的环境，`fmd.log`内部调用console，不支持时通过生成节点也输出消息（需要注意的是，默认fmd.js中并未将`fmd/console`模块打包进来，需要将[fmd/console](/dist/fmd/console.js)模块下载放置到合适的目录，再配好resolve规则才可使用）

`fmd.log`有两个参数，一为需要打印的消息，二为打印类型，当打印类型为`warn`时，打印成错误信息

**推荐使用`fmd.log`来代替代码调试时的`alert`、`console`**

## fmd.noConflict

`fmd.noConflict`是个函数，用来取消fmd.js对`define`全局变量的占用，还原成先定义者

## fmd.version

`fmd.version`是字符串，表示当前fmd.js的版本，是`major.minor.build`形式，不带beta等文本

## define.fmd

`define.fmd`是对象，表明当前的`define`的生产者为fmd.js

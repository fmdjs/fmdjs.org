# 辅助方法和属性

`fmd`是fmd.js所提供的一个全局对象，如同`jQuery`之于jQuery

## fmd.define

全局函数`define`即是对`fmd.define`的引用。当`define`被占用时，可以使用或恢复之

## fmd.noConflict

`fmd.noConflict`是个函数，用来取消fmd.js对`define`全局变量的占用，还原成先定义者

## fmd.version

`fmd.version`是字符串，表示当前fmd.js的版本，是`major.minor.build`形式，不带beta等文本

## define.fmd

`define.fmd`是对象，表明当前的`define`的生产者为fmd.js

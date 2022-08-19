## ansi to span

converts the ANSI text to html span.
将 ANSI 字符转化为带 span 标签的 html 代码。

## Usage

``` sh
# 先安装 install first
npm install asni_to_span
```

使用示例

``` js
const { ansiSpan } = require('ansi_to_span')

// 文字颜色转换 convert base color
console.log(ansiSpan('\x1b[31m hello ansi \x1b[0m'))
// 颜色以及样子 color and style
console.log(ansiSpan('\x1b[1;4;31m Bold+Underline+Red \x1b[0m'))
// 支持 ansi256-color 格式
console.log(ansiSpan('\x1b[2;9;48;5;234m Dim+Strike+Background color \x1b[0m'))
// 支持 24-bit true color 格式
console.log(ansiSpan('\x1b[48;2;3;34;55m rgb(3, 34 55) 末尾自动补全闭合'))
// 以及一些不知道是否合法的混合格式
console.log(ansiSpan('\x1b[1;9;3;48;5;45;38;2;133;34;155m a strange ansi format \x1b[0m'))
```

### Why

npm 上已有的包要么不符合要求，不能转化 ansi256 和 true color 格式的文字，要么太大，比如 [chalk](https://github.com/chalk/chalk)。于是自己动手写了下。
Other package can't convert ansi256-color and true color ansi text, or too heavy, like chalk.

之所以上传是为了自己引用方便，同时学习一下怎么上传包到 npm。
For own convenience, and to learn.

## Todo

- [ ] save last color state
- [ ] 5/blink AND 7/reverse
- [ ] 性能测试 performance test
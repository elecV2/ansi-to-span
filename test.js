const { ansiSpan } = require('./index')

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
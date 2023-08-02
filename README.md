# theme-utils

antd@4 theme class utils, css utils

```js
pnpm i theme-utils

import {} from 'theme-utils';
```

新建场景描述：

1、通过编辑页面 form 得到，theme 的对象 如 { backgroundColor:'red',fontSize:'12px'} 2、根据模版 '.cc{ background-color: backgroundColor; font-size: fontSize;}' 解析 css 3、得到最终 css '.cc{ background-color:red; font-size:12px;bor:123}' 4、将最终 css 提交到服务端

编辑场景描述：

1、从服务端取得 css 2、根据模版将 css 中的对象取出 { backgroundColor:'red',fontSize:'12px'} 3、将对象赋值到编辑页面 form 4、重复新建场景

预览场景描述：

1、每次编辑都会实时的生成 css 2、通过 normalizeCSS(css,'#previewId') 将 css 作用到指定 id dom 下 ' #previewId { .cc{ background-color:red; font-size:12px; }}' 3、通过 insertRules('12312', css, document.getElementById('previewId')); 将 style 挂载到预览 dom 上 4、挂载的样式仅会对预览生效

使用场景描述：

1、通过 insertLink('12312', 'http://xxx.css',true); 在页面上加载所有的生成的 css，将会对所有的场景生效。

## stringifyCss

根据指定模版，将对象的值解析道模版中，生成最终的 css 字符串

```js
const tpl = '.cc{ background-color: backgroundColor; font-size: fontSize;}';
const a = { backgroundColor: 'red', fontSize: '12px' };
const c = stringifyCss(tpl, a);
console.log(c); // .cc{ background-color:red; font-size:12px;}
```

## parseCss

根据指定模版，将值从 css 字符串中解析成对象

```js
const tpl = '.cc{ background-color: backgroundColor; font-size: fontSize;}';
const a = '.cc{ background-color:red; font-size:12px;}';
const c = parseCss(tpl, a);
console.log(c); // { backgroundColor:'red',fontSize:'12px'}
```

## normalizeCSS

编译 css 且支持给 css 提供指定的选择器，如

```js
const a = '.a{ .b{ font-size:12px; } }';

const css = normalizeCSS(a);

console.log(css);

// output: '.a .b{font-size:12px;}'

const css1 = normalizeCSS(a, '.cc');
console.log(css1);
// output: '.cc .a .b{font-size:12px;}'
```

## insertRules

将 css 挂载到页面上 `insertRules(id: string, rules: string,selector = document.head,);` 指定 id，会覆盖生产的 style 标签

```js
insertRules('12312', css);
```

## insertLink

挂载指定的 css link `insertLink(id: string, href: string, insertBefore = false)`

可选择指定挂在在 body.firstElementChild 还是 head 中

```js
insertLink('12312', 'http://xxx.css', true);
```

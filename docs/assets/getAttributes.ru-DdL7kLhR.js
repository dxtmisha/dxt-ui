import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/getAttributes - Получение атрибутов элемента"}),`
`,n.jsx(e.h1,{id:"getattributes",children:n.jsx(e.code,{children:"getAttributes"})}),`
`,n.jsx(e.p,{children:"Извлекает все HTML-атрибуты указанного DOM-элемента (или элемента, найденного по селектору) и возвращает их в виде простого объекта (ключ-значение)."}),`
`,n.jsxs(e.p,{children:["Функция использует ",n.jsx(e.code,{children:"getElement"})," для поиска целевого узла. Если элемент не найден или передан пустой аргумент, возвращается пустой объект ",n.jsx(e.code,{children:"{}"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"element?: ElementOrString<E>"})," — DOM-элемент, объект Window, либо строка с CSS-селектором для его поиска."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"Record<string, string | undefined>"})," — Объект, где ключами являются названия атрибутов (например, ",n.jsx(e.code,{children:"id"}),", ",n.jsx(e.code,{children:"class"}),", ",n.jsx(e.code,{children:"data-value"}),"), а значениями — их содержимое."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getAttributes } from '@dxtmisha/functional-basic'

// У нас есть элемент: <div id="app" class="container" data-theme="dark"></div>

const attrs = getAttributes('#app')
console.log(attrs)
/*
{
  id: 'app',
  class: 'container',
  'data-theme': 'dark'
}
*/
`})})]})}function h(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{h as default};

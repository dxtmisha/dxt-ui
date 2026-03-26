import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/getAttributes - Получение атрибутов элемента`}),`
`,(0,c.jsx)(n.h1,{id:`getattributes`,children:(0,c.jsx)(n.code,{children:`getAttributes`})}),`
`,(0,c.jsx)(n.p,{children:`Извлекает все HTML-атрибуты указанного DOM-элемента (или элемента, найденного по селектору) и возвращает их в виде простого объекта (ключ-значение).`}),`
`,(0,c.jsxs)(n.p,{children:[`Функция использует `,(0,c.jsx)(n.code,{children:`getElement`}),` для поиска целевого узла. Если элемент не найден или передан пустой аргумент, возвращается пустой объект `,(0,c.jsx)(n.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element?: ElementOrString<E>`}),` — DOM-элемент, объект Window, либо строка с CSS-селектором для его поиска.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`Record<string, string | undefined>`}),` — Объект, где ключами являются названия атрибутов (например, `,(0,c.jsx)(n.code,{children:`id`}),`, `,(0,c.jsx)(n.code,{children:`class`}),`, `,(0,c.jsx)(n.code,{children:`data-value`}),`), а значениями — их содержимое.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getAttributes } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getAttributes - Получение атрибутов элемента`}),`
`,(0,c.jsx)(t.h1,{id:`getattributes`,children:(0,c.jsx)(t.code,{children:`getAttributes`})}),`
`,(0,c.jsx)(t.p,{children:`Извлекает все HTML-атрибуты указанного DOM-элемента (или элемента, найденного по селектору) и возвращает их в виде простого объекта (ключ-значение).`}),`
`,(0,c.jsxs)(t.p,{children:[`Функция использует `,(0,c.jsx)(t.code,{children:`getElement`}),` для поиска целевого узла. Если элемент не найден или передан пустой аргумент, возвращается пустой объект `,(0,c.jsx)(t.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element?: ElementOrString<E>`}),` — DOM-элемент, объект Window, либо строка с CSS-селектором для его поиска.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`Record<string, string | undefined>`}),` — Объект, где ключами являются названия атрибутов (например, `,(0,c.jsx)(t.code,{children:`id`}),`, `,(0,c.jsx)(t.code,{children:`class`}),`, `,(0,c.jsx)(t.code,{children:`data-value`}),`), а значениями — их содержимое.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getAttributes } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
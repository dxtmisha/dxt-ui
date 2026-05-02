import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/isDomRuntime - Проверка выполнения в браузере`}),`
`,(0,c.jsx)(n.h1,{id:`isdomruntime`,children:(0,c.jsx)(n.code,{children:`isDomRuntime`})}),`
`,(0,c.jsx)(n.p,{children:`Определяет, выполняется ли текущий код в среде браузера.`}),`
`,(0,c.jsxs)(n.p,{children:[`Проверка осуществляется путем анализа наличия глобального объекта `,(0,c.jsx)(n.code,{children:`window`}),` и его свойства `,(0,c.jsx)(n.code,{children:`window.document`}),`. Это стандартный способ гарантировать, что вызовы специфичных для DOM API функций (например, работа со скроллом, событиями, элементами) не вызовут ошибок при серверном рендеринге (SSR) или в среде Node.js.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Параметры:`}),`
Функция не принимает аргументов.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если код выполняется в браузере (где `,(0,c.jsx)(n.code,{children:`window`}),` и `,(0,c.jsx)(n.code,{children:`document`}),` существуют). `,(0,c.jsx)(n.code,{children:`false`}),` — если код выполняется в серверной среде (например, Node.js или во время сборки статики).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isDomRuntime } from '@dxtmisha/functional-basic'

if (isDomRuntime()) {
  // Безопасно обращаемся к window.localStorage или DOM
  window.localStorage.setItem('visited', 'yes')
  document.body.classList.add('client-rendered')
} else {
  // Логика для серверного окружения (SSR)
  console.log('Rendering on server...')
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
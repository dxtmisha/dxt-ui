import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isDomRuntime - Проверка выполнения в браузере`}),`
`,(0,c.jsx)(t.h1,{id:`isdomruntime`,children:(0,c.jsx)(t.code,{children:`isDomRuntime`})}),`
`,(0,c.jsx)(t.p,{children:`Определяет, выполняется ли текущий код в среде браузера.`}),`
`,(0,c.jsxs)(t.p,{children:[`Проверка осуществляется путем анализа наличия глобального объекта `,(0,c.jsx)(t.code,{children:`window`}),` и его свойства `,(0,c.jsx)(t.code,{children:`window.document`}),`. Это стандартный способ гарантировать, что вызовы специфичных для DOM API функций (например, работа со скроллом, событиями, элементами) не вызовут ошибок при серверном рендеринге (SSR) или в среде Node.js.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Параметры:`}),`
Функция не принимает аргументов.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),`, если код выполняется в браузере (где `,(0,c.jsx)(t.code,{children:`window`}),` и `,(0,c.jsx)(t.code,{children:`document`}),` существуют). `,(0,c.jsx)(t.code,{children:`false`}),` — если код выполняется в серверной среде (например, Node.js или во время сборки статики).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isDomRuntime } from '@dxtmisha/functional-basic'

if (isDomRuntime()) {
  // Безопасно обращаемся к window.localStorage или DOM
  window.localStorage.setItem('visited', 'yes')
  document.body.classList.add('client-rendered')
} else {
  // Логика для серверного окружения (SSR)
  console.log('Rendering on server...')
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
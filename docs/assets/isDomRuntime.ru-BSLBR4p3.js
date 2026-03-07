import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as t}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(o){const e={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/ru/functional-basic/Functions/isDomRuntime - Проверка выполнения в браузере"}),`
`,n.jsx(e.h1,{id:"isdomruntime",children:n.jsx(e.code,{children:"isDomRuntime"})}),`
`,n.jsx(e.p,{children:"Определяет, выполняется ли текущий код в среде браузера."}),`
`,n.jsxs(e.p,{children:["Проверка осуществляется путем анализа наличия глобального объекта ",n.jsx(e.code,{children:"window"})," и его свойства ",n.jsx(e.code,{children:"window.document"}),". Это стандартный способ гарантировать, что вызовы специфичных для DOM API функций (например, работа со скроллом, событиями, элементами) не вызовут ошибок при серверном рендеринге (SSR) или в среде Node.js."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Параметры:"}),`
Функция не принимает аргументов.`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"boolean"})," — ",n.jsx(e.code,{children:"true"}),", если код выполняется в браузере (где ",n.jsx(e.code,{children:"window"})," и ",n.jsx(e.code,{children:"document"})," существуют). ",n.jsx(e.code,{children:"false"})," — если код выполняется в серверной среде (например, Node.js или во время сборки статики)."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { isDomRuntime } from '@dxtmisha/functional-basic'

if (isDomRuntime()) {
  // Безопасно обращаемся к window.localStorage или DOM
  window.localStorage.setItem('visited', 'yes')
  document.body.classList.add('client-rendered')
} else {
  // Логика для серверного окружения (SSR)
  console.log('Rendering on server...')
}
`})})]})}function x(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{x as default};

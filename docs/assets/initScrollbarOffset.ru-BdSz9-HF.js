import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as t}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function e(s){const r={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/ru/functional-basic/Functions/initScrollbarOffset - Инициализация отступа скроллбара"}),`
`,n.jsx(r.h1,{id:"initscrollbaroffset",children:n.jsx(r.code,{children:"initScrollbarOffset"})}),`
`,n.jsxs(r.p,{children:["Асинхронная утилита, которая вычисляет системную ширину полосы прокрутки браузера и записывает это значение (в пикселях) как глобальную CSS-переменную ",n.jsx(r.code,{children:"--sys-scrollbar-offset"})," в тег ",n.jsx(r.code,{children:"<body>"}),"."]}),`
`,n.jsxs(r.p,{children:["Знание ширины скроллбара критически важно при реализации модальных окон, всплывающих панелей или фиксации слоя страницы ",n.jsx(r.code,{children:"body"}),", чтобы избежать нежелательного сдвига контента во время скрытия нативной полосы прокрутки."]}),`
`,n.jsxs(r.p,{children:["Функция интегрирована с классом ",n.jsx(r.code,{children:"ScrollbarWidth"})," из этого пакета, который и производит фактический расчет."]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"Параметры:"}),`
Функция не принимает аргументов.`]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"Возвращает:"}),`
Асинхронное `,n.jsx(r.code,{children:"Promise<void>"}),", выполняющее побочный эффект установки CSS-переменной."]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-typescript",children:`import { initScrollbarOffset } from '@dxtmisha/functional-basic'

// Инициализация при загрузке приложения
await initScrollbarOffset()

// Теперь в CSS доступен размер скроллбара
// body[data-scroll-locked] { padding-right: var(--sys-scrollbar-offset, 0px); }
`})})]})}function h(s={}){const{wrapper:r}={...o(),...s.components};return r?n.jsx(r,{...s,children:n.jsx(e,{...s})}):e(s)}export{h as default};

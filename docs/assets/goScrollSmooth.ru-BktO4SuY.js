import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function c(e){const o={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/goScrollSmooth - Плавный скролл к элементу"}),`
`,n.jsx(o.h1,{id:"goscrollsmooth",children:n.jsx(o.code,{children:"goScrollSmooth"})}),`
`,n.jsx(o.p,{children:"Обеспечивает плавную прокрутку (скролл) окна браузера или контейнера к указанному элементу."}),`
`,n.jsxs(o.p,{children:["Функция сначала проверяет наличие поддержки метода ",n.jsx(o.code,{children:"scrollIntoView"})," у целевого элемента. При его наличии и отсутствии параметра ",n.jsx(o.code,{children:"shift"})," (смещение) функция использует нативный метод. В противном случае, если требуется смещение ",n.jsx(o.code,{children:"shift"})," (например, для фиксированной шапки), функция вычисляет ",n.jsx(o.code,{children:"getBoundingClientRect"})," и использует ",n.jsx(o.code,{children:"window.scrollTo"}),"."]}),`
`,n.jsx(o.p,{children:n.jsx(o.strong,{children:"Параметры:"})}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"element: E"})," — Целевой элемент (",n.jsx(o.code,{children:"HTMLElement"}),"), до которого нужно прокрутить страницу."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"options: ScrollIntoViewOptions"})," — (Необязательно) Параметры прокрутки, передаваемые в ",n.jsx(o.code,{children:"scrollIntoView"})," (например, ",n.jsx(o.code,{children:"behavior"}),", ",n.jsx(o.code,{children:"block"}),", ",n.jsx(o.code,{children:"inline"}),")."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"shift: number"})," — (Необязательно) Значение отступа (в пикселях) сверху от целевого элемента до верха окна. Полезно для избежания перекрытия элемента фиксированным меню навигации. По умолчанию ",n.jsx(o.code,{children:"0"}),"."]}),`
`]}),`
`,n.jsxs(o.p,{children:[n.jsx(o.strong,{children:"Возвращает:"}),`
Функция ничего не возвращает (`,n.jsx(o.code,{children:"void"}),")."]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-typescript",children:`import { goScrollSmooth } from '@dxtmisha/functional-basic'

const section = document.getElementById('contact-us')

// Простая плавная прокрутка к элементу
goScrollSmooth(section)

// Прокрутка со смещением 60px (учитывая фиксированную шапку)
goScrollSmooth(section, { behavior: 'smooth' }, 60)
`})})]})}function j(e={}){const{wrapper:o}={...s(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(c,{...e})}):c(e)}export{j as default};

import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/getElementOrWindow - Получение элемента или объекта window"}),`
`,n.jsx(e.h1,{id:"getelementorwindow",children:n.jsx(e.code,{children:"getElementOrWindow"})}),`
`,n.jsxs(e.p,{children:["Эта утилита аналогична ",n.jsx(e.code,{children:"getElement"}),", но с одним существенным отличием: если в качестве аргумента передан глобальный объект ",n.jsx(e.code,{children:"window"}),", функция вернёт именно его. ",n.jsx(e.code,{children:"getElement"})," в такой же ситуации возвращает ",n.jsx(e.code,{children:"document.body"}),"."]}),`
`,n.jsxs(e.p,{children:["Если передана строка или другой элемент, функция действует как стандартный ",n.jsx(e.code,{children:"getElement"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"element?: ElementOrString<E>"})," — Селектор для поиска, элемент ",n.jsx(e.code,{children:"Element"})," или объект ",n.jsx(e.code,{children:"Window"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"E | undefined"})," — Найденный элемент, изначальный переданный элемент, сам объект ",n.jsx(e.code,{children:"window"})," (если он был передан), или ",n.jsx(e.code,{children:"undefined"})," если ничего не найдено."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getElementOrWindow } from '@dxtmisha/functional-basic'

// Передача Window вернет Window (для сравнения getElement вернул бы document.body)
const win = getElementOrWindow(window)

// Обычный поиск по селектору
const btn = getElementOrWindow('.submit-btn')
`})})]})}function h(t={}){const{wrapper:e}={...d(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{h as default};

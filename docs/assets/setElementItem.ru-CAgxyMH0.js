import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/setElementItem - Изменение значения элемента по ключу"}),`
`,e.jsx(n.h1,{id:"setelementitem",children:e.jsx(n.code,{children:"setElementItem"})}),`
`,e.jsx(n.p,{children:"Изменяет значение свойства или атрибута DOM-элемента, найденного по селектору или переданного напрямую. Если свойство является объектом, выполняется слияние с новыми данными."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element: ElementOrString<E>"})," — Элемент, объект ",e.jsx(n.code,{children:"window"})," или CSS-селектор."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index: K"})," — Ключ свойства или имя атрибута."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: V | Record<string, V>"})," — Новое значение или объект для слияния."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"E | undefined"})," — Модифицированный элемент или ",e.jsx(n.code,{children:"undefined"}),", если элемент не найден."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { setElementItem } from '@dxtmisha/functional-basic'

// Изменение текстового содержимого
setElementItem('#my-div', 'textContent', 'Новый текст')

// Слияние стилей
setElementItem(document.body, 'style', { backgroundColor: 'red', color: 'white' })

// Установка атрибута (если свойства нет в объекте)
setElementItem('input', 'placeholder', 'Введите данные...')
`})})]})}function h(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{h as default};

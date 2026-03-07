import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(c){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/isEnter - Проверка нажатия Enter или Space"}),`
`,e.jsx(n.h1,{id:"isenter",children:e.jsx(n.code,{children:"isEnter"})}),`
`,e.jsxs(n.p,{children:["Проверяет, является ли нажатая клавиша ",e.jsx(n.code,{children:"Enter"})," или ",e.jsx(n.code,{children:"Space"}),". Функция полезна для обработки событий клавиатуры, когда необходимо реагировать на подтверждение действия или активацию элемента, поддерживая при этом доступность (a11y) и старые браузеры."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: KeyboardEvent"})," — объект события клавиатуры."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"boolean"})," — ",e.jsx(n.code,{children:"true"}),", если нажата клавиша ",e.jsx(n.code,{children:"Enter"})," или ",e.jsx(n.code,{children:"Space"}),", иначе ",e.jsx(n.code,{children:"false"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Поддерживаемые свойства события:"}),`
Функция проверяет следующие свойства события для максимальной совместимости:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"code"}),": ",e.jsx(n.code,{children:"'Enter'"}),", ",e.jsx(n.code,{children:"'Space'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"key"}),": ",e.jsx(n.code,{children:"'Enter'"}),", ",e.jsx(n.code,{children:"' '"}),", ",e.jsx(n.code,{children:"'Spacebar'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"keyCode"}),": ",e.jsx(n.code,{children:"13"}),", ",e.jsx(n.code,{children:"32"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { isEnter } from '@dxtmisha/functional-basic'

const onKeyDown = (event: KeyboardEvent) => {
  if (isEnter(event)) {
    console.log('Нажат Enter или Space')
    // Выполнить действие
  }
}
`})})]})}function j(c={}){const{wrapper:n}={...s(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(r,{...c})}):r(c)}export{j as default};

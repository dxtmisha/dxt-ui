import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/ru/functional-basic/Functions/isDifferent - Проверка на различие объектов"}),`
`,e.jsx(n.h1,{id:"isdifferent",children:e.jsx(n.code,{children:"isDifferent"})}),`
`,e.jsx(n.p,{children:"Глубоко проверяет, отличаются ли два объекта друг от друга."}),`
`,e.jsxs(n.p,{children:["Функция работает путем сравнения количества ключей (свойств) в каждом объекте, а затем, если количество совпадает, производит точную проверку значений этих ключей через метод ",e.jsx(n.code,{children:"forEach"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: ObjectItem<T>"})," — Текущий (новый) объект или элемент данных."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"old: ObjectItem<T>"})," — Старый (предыдущий) объект для сравнения."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"boolean"})," — Вернет ",e.jsx(n.code,{children:"true"}),", если объекты отличаются (либо по количеству свойств, либо по значению хотя бы одного свойства), и ",e.jsx(n.code,{children:"false"}),", если они полностью идентичны (результат строгого сравнения каждого свойства оказался истинным)."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { isDifferent } from '@dxtmisha/functional-basic'

const oldState = { id: 1, active: false }
const newState = { id: 1, active: true }

// Объекты отличаются в поле \`active\`
console.log(isDifferent(newState, oldState)) // true

const sameState = { id: 1, active: false }

// Объекты полностью идентичны
console.log(isDifferent(sameState, oldState)) // false
`})})]})}function h(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{h as default};

import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function l(s){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/ru/functional-basic/Functions/setValues - Управление списком выбранных значений"}),`
`,e.jsx(n.h1,{id:"setvalues",children:e.jsx(n.code,{children:"setValues"})}),`
`,e.jsx(n.p,{children:"Обрабатывает обновление выбранных значений в зависимости от режима (одиночный или множественный выбор). Позволяет добавлять, удалять или заменять значения с поддержкой ограничений на максимальное количество элементов."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selected: T | T[] | undefined"})," — Текущие выбранные значения."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — Новое значение для обработки."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options"})," — Объект с настройками:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"multiple: boolean"})," — Режим множественного выбора (по умолчанию ",e.jsx(n.code,{children:"false"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"maxlength: number"})," — Максимальное количество элементов для множественного выбора (по умолчанию ",e.jsx(n.code,{children:"0"})," — без ограничений)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"alwaysChange: boolean"})," — Флаг принудительной замены значения (по умолчанию ",e.jsx(n.code,{children:"true"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"notEmpty: boolean"})," — Запрет на полное очищение списка (по умолчанию ",e.jsx(n.code,{children:"false"}),")."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"T | T[] | undefined"})," — Новое состояние выбранных значений."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { setValues } from '@dxtmisha/functional-basic'

// Одиночный выбор
console.log(setValues(1, 2, {})) // 2

// Множественный выбор (переключение)
let list = [1, 2]
list = setValues(list, 2, { multiple: true }) // [1] (удаление существующего)
list = setValues(list, 3, { multiple: true }) // [1, 3] (добавление нового)
`})})]})}function a(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{a as default};

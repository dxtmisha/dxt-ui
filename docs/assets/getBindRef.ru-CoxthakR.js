import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(r){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/ru/functional/Functions/getBindRef - Генерация привязок (реактивная)"}),`
`,e.jsx(n.h1,{id:"getbindref",children:e.jsx(n.code,{children:"getBindRef"})}),`
`,e.jsxs(n.p,{children:["Реактивная версия функции ",e.jsx(n.a,{href:"../getBind/getBind.ru.mdx",children:e.jsx(n.code,{children:"getBind"})})," для генерации свойств для подкомпонента на основе реактивных или обычных значений. Помогает создавать согласованные привязки при передаче пропсов от родительского компонента к дочернему, особенно при использовании Vue ",e.jsx(n.code,{children:"Ref"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<T | R> | undefined"})," — Входное значение. Может быть реактивной ссылкой или обычным объектом, содержащим несколько свойств."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"nameExtra: RefOrNormal<ItemList> | string = {}"})," — Дополнительные параметры или имена свойств для объединения в итоговый объект привязки."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string = 'value'"})," — Имя свойства для основного значения (по умолчанию ",e.jsx(n.code,{children:"'value'"}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"ComputedRef<R>"})," — Реактивное вычисляемое свойство, содержащее объединенный объект свойств, готовый к привязке (например, через ",e.jsx(n.code,{children:"v-bind"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ref } from 'vue'
import { getBindRef } from '@dxtmisha/functional'

const modelValue = ref('Привет')
const extraProps = { placeholder: 'Введите текст...' }

// Генерирует вычисляемую привязку: { value: 'Привет', placeholder: 'Введите текст...' }
const bindings = getBindRef(modelValue, extraProps)
`})})]})}function h(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{h as default};

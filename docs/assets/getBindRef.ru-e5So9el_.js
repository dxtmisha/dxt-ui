import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional/Functions/getBindRef - Генерация привязок (реактивная)`}),`
`,(0,c.jsx)(n.h1,{id:`getbindref`,children:(0,c.jsx)(n.code,{children:`getBindRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`Реактивная версия функции `,(0,c.jsx)(n.a,{href:`../getBind/getBind.ru.mdx`,children:(0,c.jsx)(n.code,{children:`getBind`})}),` для генерации свойств для подкомпонента на основе реактивных или обычных значений. Помогает создавать согласованные привязки при передаче пропсов от родительского компонента к дочернему, особенно при использовании Vue `,(0,c.jsx)(n.code,{children:`Ref`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: RefOrNormal<T | R> | undefined`}),` — Входное значение. Может быть реактивной ссылкой или обычным объектом, содержащим несколько свойств.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nameExtra: RefOrNormal<ItemList> | string = {}`}),` — Дополнительные параметры или имена свойств для объединения в итоговый объект привязки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string = 'value'`}),` — Имя свойства для основного значения (по умолчанию `,(0,c.jsx)(n.code,{children:`'value'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`ComputedRef<R>`}),` — Реактивное вычисляемое свойство, содержащее объединенный объект свойств, готовый к привязке (например, через `,(0,c.jsx)(n.code,{children:`v-bind`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { getBindRef } from '@dxtmisha/functional'

const modelValue = ref('Привет')
const extraProps = { placeholder: 'Введите текст...' }

// Генерирует вычисляемую привязку: { value: 'Привет', placeholder: 'Введите текст...' }
const bindings = getBindRef(modelValue, extraProps)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
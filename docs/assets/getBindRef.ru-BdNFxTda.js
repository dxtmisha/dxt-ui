import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Functions/getBindRef - Генерация привязок (реактивная)`}),`
`,(0,c.jsx)(t.h1,{id:`getbindref`,children:(0,c.jsx)(t.code,{children:`getBindRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Реактивная версия функции `,(0,c.jsx)(t.a,{href:`../getBind/getBind.ru.mdx`,children:(0,c.jsx)(t.code,{children:`getBind`})}),` для генерации свойств для подкомпонента на основе реактивных или обычных значений. Помогает создавать согласованные привязки при передаче пропсов от родительского компонента к дочернему, особенно при использовании Vue `,(0,c.jsx)(t.code,{children:`Ref`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<T | R> | undefined`}),` — Входное значение. Может быть реактивной ссылкой или обычным объектом, содержащим несколько свойств.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`nameExtra: RefOrNormal<ItemList> | string = {}`}),` — Дополнительные параметры или имена свойств для объединения в итоговый объект привязки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string = 'value'`}),` — Имя свойства для основного значения (по умолчанию `,(0,c.jsx)(t.code,{children:`'value'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`ComputedRef<R>`}),` — Реактивное вычисляемое свойство, содержащее объединенный объект свойств, готовый к привязке (например, через `,(0,c.jsx)(t.code,{children:`v-bind`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { getBindRef } from '@dxtmisha/functional'

const modelValue = ref('Привет')
const extraProps = { placeholder: 'Введите текст...' }

// Генерирует вычисляемую привязку: { value: 'Привет', placeholder: 'Введите текст...' }
const bindings = getBindRef(modelValue, extraProps)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
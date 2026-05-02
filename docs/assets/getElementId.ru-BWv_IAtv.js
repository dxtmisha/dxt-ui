import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/getElementId - Получение или назначение ID элемента`}),`
`,(0,c.jsx)(n.h1,{id:`getelementid`,children:(0,c.jsx)(n.code,{children:`getElementId`})}),`
`,(0,c.jsxs)(n.p,{children:[`Возвращает `,(0,c.jsx)(n.code,{children:`id`}),` указанного DOM-элемента. Если элемент существует, но у него нет атрибута `,(0,c.jsx)(n.code,{children:`id`}),`, функция автоматически сгенерирует уникальный идентификатор, назначит его элементу и вернет.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Также функция позволяет опционально добавить CSS-селектор к возвращаемой строке, чтобы сразу использовать результат как готовый составной селектор (например, `,(0,c.jsx)(n.code,{children:`"#id-123456 .child-class"`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element?: ElementOrString<E>`}),` — DOM-элемент или селектор, для которого нужно получить/назначить ID.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selector?: string`}),` — Опциональная строка, которая будет добавлена к возвращаемому значению (например, псевдоклассы или селекторы потомков).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Строка с ID элемента, либо строка сгенерированного ID, если элемент не найден.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getElementId } from '@dxtmisha/functional-basic'

// У элемента нет ID
const div = document.createElement('div')
console.log(div.id) // ''

const id = getElementId(div)
console.log(id) // Например: 'id-100000'
console.log(div.id) // 'id-100000' (назначился автоматически)

// Использование дополнительного селектора
const selector = getElementId(div, ' > span.active')
console.log(selector) // '#id-100000 > span.active'
`})}),`
`,(0,c.jsx)(n.h2,{id:`initgetelementid`,children:(0,c.jsx)(n.code,{children:`initGetElementId`})}),`
`,(0,c.jsx)(n.p,{children:`Инициализирует функцию для работы в SSR-окружении. Это необходимо для обеспечения синхронности генерируемых ID между сервером и клиентом.`}),`
`,(0,c.jsxs)(n.p,{children:[`При использовании `,(0,c.jsx)(n.strong,{children:`Vue 3.5+`}),` рекомендуется использовать встроенную функцию `,(0,c.jsx)(n.code,{children:`useId()`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useId } from 'vue'
import { initGetElementId } from '@dxtmisha/functional-basic'

// Инициализация (например, в плагине или в корневом компоненте)
initGetElementId(() => useId())
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
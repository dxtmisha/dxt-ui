import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getElementId - Получение или назначение ID элемента`}),`
`,(0,c.jsx)(t.h1,{id:`getelementid`,children:(0,c.jsx)(t.code,{children:`getElementId`})}),`
`,(0,c.jsxs)(t.p,{children:[`Возвращает `,(0,c.jsx)(t.code,{children:`id`}),` указанного DOM-элемента. Если элемент существует, но у него нет атрибута `,(0,c.jsx)(t.code,{children:`id`}),`, функция автоматически сгенерирует уникальный идентификатор, назначит его элементу и вернет.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Также функция позволяет опционально добавить CSS-селектор к возвращаемой строке, чтобы сразу использовать результат как готовый составной селектор (например, `,(0,c.jsx)(t.code,{children:`"#id-123456 .child-class"`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element?: ElementOrString<E>`}),` — DOM-элемент или селектор, для которого нужно получить/назначить ID.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selector?: string`}),` — Опциональная строка, которая будет добавлена к возвращаемому значению (например, псевдоклассы или селекторы потомков).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Строка с ID элемента, либо строка сгенерированного ID, если элемент не найден.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getElementId } from '@dxtmisha/functional-basic'

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
`,(0,c.jsx)(t.h2,{id:`initgetelementid`,children:(0,c.jsx)(t.code,{children:`initGetElementId`})}),`
`,(0,c.jsx)(t.p,{children:`Инициализирует функцию для работы в SSR-окружении. Это необходимо для обеспечения синхронности генерируемых ID между сервером и клиентом.`}),`
`,(0,c.jsxs)(t.p,{children:[`При использовании `,(0,c.jsx)(t.strong,{children:`Vue 3.5+`}),` рекомендуется использовать встроенную функцию `,(0,c.jsx)(t.code,{children:`useId()`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useId } from 'vue'
import { initGetElementId } from '@dxtmisha/functional-basic'

// Инициализация (например, в плагине или в корневом компоненте)
initGetElementId(() => useId())
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
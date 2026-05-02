import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional/Functions/render - Рендеринг компонентов с ключами`}),`
`,(0,c.jsx)(n.h1,{id:`render`,children:(0,c.jsx)(n.code,{children:`render`})}),`
`,(0,c.jsxs)(n.p,{children:[`Обертка над функцией Vue `,(0,c.jsx)(n.code,{children:`h`}),` (hyperscript), которая обеспечивает автоматическую генерацию ключей для компонентов. Она гарантирует, что компоненты имеют уникальные ключи для эффективного рендеринга и обработки переходов, особенно при работе со списками или динамическими элементами.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string | any`}),` — Имя или тег компонента для рендеринга.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props?: T`}),` — Свойства, передаваемые компоненту.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`children?: RawChildren | RawSlots`}),` — Дочерние элементы или слоты компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index?: string`}),` — Необязательный индекс или идентификатор, используемый для генерации ключа.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`VNode`}),` — Отрендеренный виртуальный узел.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { render } from '@dxtmisha/functional'

// Рендерит div с автоматически сгенерированным ключом
const vnode = render('div', { class: 'container' }, 'Привет, мир')
// key => '.div.container'

// Рендерит компонент с определенным индексом для генерации ключа
const item = render('my-component', { data: itemData }, null, 'item-1')
// key => '.my-component.item-1'
`})}),`
`,(0,c.jsx)(n.h3,{id:`генерация-ключа`,children:`Генерация ключа`}),`
`,(0,c.jsxs)(n.p,{children:[`Ключ (`,(0,c.jsx)(n.code,{children:`key`}),`) для Vue-компонента формируется `,(0,c.jsx)(n.strong,{children:`аддитивно`}),` (последовательным добавлением). Он всегда начинается с точки и имени компонента (`,(0,c.jsx)(n.code,{children:`.name`}),`), к которому через точку добавляются следующие значения (если они существуют):`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`.name`})}),` — если `,(0,c.jsx)(n.code,{children:`name`}),` является строкой.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`.index`}),` — из третьего аргумента функции `,(0,c.jsx)(n.code,{children:`render`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`.props.index`}),` — если передан в объекте свойств и является строкой.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`.className`}),` — если класс указан в `,(0,c.jsx)(n.code,{children:`props`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`.props.id`}),` — если ID указан в `,(0,c.jsx)(n.code,{children:`props`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Это гарантирует уникальность ключа даже при совпадении имен компонентов.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
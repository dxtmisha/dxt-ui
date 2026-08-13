import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Functions/render - Рендеринг компонентов с ключами`}),`
`,(0,c.jsx)(t.h1,{id:`render`,children:(0,c.jsx)(t.code,{children:`render`})}),`
`,(0,c.jsxs)(t.p,{children:[`Обертка над функцией Vue `,(0,c.jsx)(t.code,{children:`h`}),` (hyperscript), которая обеспечивает автоматическую генерацию ключей для компонентов. Она гарантирует, что компоненты имеют уникальные ключи для эффективного рендеринга и обработки переходов, особенно при работе со списками или динамическими элементами.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string | any`}),` — Имя или тег компонента для рендеринга.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props?: T`}),` — Свойства, передаваемые компоненту.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`children?: RawChildren | RawSlots`}),` — Дочерние элементы или слоты компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index?: string`}),` — Необязательный индекс или идентификатор, используемый для генерации ключа.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`VNode`}),` — Отрендеренный виртуальный узел.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { render } from '@dxtmisha/functional'

// Рендерит div с автоматически сгенерированным ключом
const vnode = render('div', { class: 'container' }, 'Привет, мир')
// key => '.div.container'

// Рендерит компонент с определенным индексом для генерации ключа
const item = render('my-component', { data: itemData }, null, 'item-1')
// key => '.my-component.item-1'
`})}),`
`,(0,c.jsx)(t.h3,{id:`генерация-ключа`,children:`Генерация ключа`}),`
`,(0,c.jsxs)(t.p,{children:[`Ключ (`,(0,c.jsx)(t.code,{children:`key`}),`) для Vue-компонента формируется `,(0,c.jsx)(t.strong,{children:`аддитивно`}),` (последовательным добавлением). Он всегда начинается с точки и имени компонента (`,(0,c.jsx)(t.code,{children:`.name`}),`), к которому через точку добавляются следующие значения (если они существуют):`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`.name`})}),` — если `,(0,c.jsx)(t.code,{children:`name`}),` является строкой.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`.index`}),` — из третьего аргумента функции `,(0,c.jsx)(t.code,{children:`render`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`.props.index`}),` — если передан в объекте свойств и является строкой.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`.className`}),` — если класс указан в `,(0,c.jsx)(t.code,{children:`props`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`.props.id`}),` — если ID указан в `,(0,c.jsx)(t.code,{children:`props`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Это гарантирует уникальность ключа даже при совпадении имен компонентов.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
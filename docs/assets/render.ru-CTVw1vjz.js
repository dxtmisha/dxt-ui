import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Functions/render - Рендеринг компонентов с ключами`}),`
`,(0,c.jsx)(t.h1,{id:`render`,children:(0,c.jsx)(t.code,{children:`render`})}),`
`,(0,c.jsxs)(t.p,{children:[`Обёртка над функцией Vue `,(0,c.jsx)(t.code,{children:`h`}),` (hyperscript), которая автоматически формирует ключи компонентов из стабильных идентификаторов.`]}),`
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
// key => 'div'

// Рендерит компонент с определенным индексом для генерации ключа
const item = render('my-component', { data: itemData }, null, 'item-1')
// key => 'my-component.item-1'
`})}),`
`,(0,c.jsx)(t.h3,{id:`генерация-ключа`,children:`Генерация ключа`}),`
`,(0,c.jsxs)(t.p,{children:[`Явный `,(0,c.jsx)(t.code,{children:`props.key`}),` сохраняется. Если он отсутствует, ключ формируется из следующих идентификаторов по порядку: строковое имя компонента записывается без точки в начале, остальные идентификаторы добавляются через точку:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`name`})}),` — если `,(0,c.jsx)(t.code,{children:`name`}),` является строкой.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`.index`})}),` — из четвёртого аргумента `,(0,c.jsx)(t.code,{children:`render`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`.props.index`})}),` — если передан строкой.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`.props.id`})}),` — если ID указан в `,(0,c.jsx)(t.code,{children:`props`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`CSS-классы не влияют на автоматически сформированный ключ, поэтому их смена сохраняет DOM-узел и состояние компонента. Намеренное изменение явного `,(0,c.jsx)(t.code,{children:`props.key`}),` по-прежнему может заменить узел. Для соседних элементов списка передавайте уникальные стабильные ключи или идентификаторы: само имя компонента не гарантирует уникальность.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
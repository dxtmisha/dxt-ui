import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as d}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(r){const e={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"@dxtmisha/ru/functional/Functions/render - Рендеринг компонентов с ключами"}),`
`,n.jsx(e.h1,{id:"render",children:n.jsx(e.code,{children:"render"})}),`
`,n.jsxs(e.p,{children:["Обертка над функцией Vue ",n.jsx(e.code,{children:"h"})," (hyperscript), которая обеспечивает автоматическую генерацию ключей для компонентов. Она гарантирует, что компоненты имеют уникальные ключи для эффективного рендеринга и обработки переходов, особенно при работе со списками или динамическими элементами."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string | any"})," — Имя или тег компонента для рендеринга."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"props?: T"})," — Свойства, передаваемые компоненту."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"children?: RawChildren | RawSlots"})," — Дочерние элементы или слоты компонента."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index?: string"})," — Необязательный индекс или идентификатор, используемый для генерации ключа."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"VNode"})," — Отрендеренный виртуальный узел."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { render } from '@dxtmisha/functional'

// Рендерит div с автоматически сгенерированным ключом
const vnode = render('div', { class: 'container' }, 'Привет, мир')
// key => '.div.container'

// Рендерит компонент с определенным индексом для генерации ключа
const item = render('my-component', { data: itemData }, null, 'item-1')
// key => '.my-component.item-1'
`})}),`
`,n.jsx(e.h3,{id:"генерация-ключа",children:"Генерация ключа"}),`
`,n.jsxs(e.p,{children:["Ключ (",n.jsx(e.code,{children:"key"}),") для Vue-компонента формируется ",n.jsx(e.strong,{children:"аддитивно"})," (последовательным добавлением). Он всегда начинается с точки и имени компонента (",n.jsx(e.code,{children:".name"}),"), к которому через точку добавляются следующие значения (если они существуют):"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:".name"})})," — если ",n.jsx(e.code,{children:"name"})," является строкой."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:".index"})," — из третьего аргумента функции ",n.jsx(e.code,{children:"render"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:".props.index"})," — если передан в объекте свойств и является строкой."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:".className"})," — если класс указан в ",n.jsx(e.code,{children:"props"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:".props.id"})," — если ID указан в ",n.jsx(e.code,{children:"props"}),"."]}),`
`]}),`
`,n.jsx(e.p,{children:"Это гарантирует уникальность ключа даже при совпадении имен компонентов."})]})}function j(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{j as default};

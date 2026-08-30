import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`цвет-заливки-элемента`,children:`Цвет заливки элемента`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`fill`}),` определяет цвет фона элемента списка, позволяя точно контролировать визуальное оформление компонента.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Hex-цвета: `,(0,c.jsx)(t.code,{children:`#FF0000`}),`, `,(0,c.jsx)(t.code,{children:`#ffffff`}),`, `,(0,c.jsx)(t.code,{children:`#3498db`})]}),`
`,(0,c.jsxs)(t.li,{children:[`RGB: `,(0,c.jsx)(t.code,{children:`rgb(255, 0, 0)`}),`, `,(0,c.jsx)(t.code,{children:`rgb(52, 152, 219)`})]}),`
`,(0,c.jsxs)(t.li,{children:[`RGBA: `,(0,c.jsx)(t.code,{children:`rgba(255, 0, 0, 0.5)`}),`, `,(0,c.jsx)(t.code,{children:`rgba(0, 0, 0, 0.1)`})]}),`
`,(0,c.jsxs)(t.li,{children:[`Именованные цвета: `,(0,c.jsx)(t.code,{children:`red`}),`, `,(0,c.jsx)(t.code,{children:`blue`}),`, `,(0,c.jsx)(t.code,{children:`green`}),`, `,(0,c.jsx)(t.code,{children:`transparent`})]}),`
`,(0,c.jsxs)(t.li,{children:[`HSL/HSLA: `,(0,c.jsx)(t.code,{children:`hsl(0, 100%, 50%)`}),`, `,(0,c.jsx)(t.code,{children:`hsla(210, 70%, 53%, 0.8)`})]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Принимает любой стандартный CSS-формат цвета. Свойство предоставляет гибкий способ настройки визуального представления элементов списка, позволяя создавать цветовые схемы и выделять важные элементы. Значение применяется как background-color к корневому элементу компонента.`}),`
`,(0,c.jsx)(i,{code:`
<!-- Красный фон -->
<ListItem fill="#FF0000" text="Элемент с красным фоном" />

<!-- Полупрозрачный синий -->
<ListItem fill="rgba(52, 152, 219, 0.3)" text="Полупрозрачный элемент" />

<!-- Именованный цвет -->
<ListItem fill="lightblue" text="Светло-голубой элемент" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};
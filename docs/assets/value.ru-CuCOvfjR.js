import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`основное-значение`,children:`Основное значение`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`value`}),` определяет контент изображения. Это универсальное свойство, поддерживающее несколько типов источников для максимальной гибкости.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Поддерживаемые типы:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Имя иконки`}),` — встроенная или пользовательская иконка из системы дизайна`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`URL изображения`}),` — прямая ссылка на файл (PNG, JPG, SVG, GIF, WebP и др.)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Объект File`}),` — JavaScript-объект File, полученный из `,(0,c.jsx)(t.code,{children:`<input type="file">`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`PDF-документ`}),` — прямая ссылка на PDF-файл с автоматическим отображением`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Компонент автоматически определяет тип источника и выбирает оптимальный способ отображения. При передаче объекта File происходит чтение и предпросмотр содержимого. Свойство реактивно и поддерживает динамическое обновление.`}),`
`,(0,c.jsx)(i,{code:`
<!-- Иконка по имени -->
<Image value="icon-user" />

<!-- Изображение по URL -->
<Image value="https://example.com/image.png" />

<!-- Файл от пользователя -->
<Image :value="fileFromInput" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};
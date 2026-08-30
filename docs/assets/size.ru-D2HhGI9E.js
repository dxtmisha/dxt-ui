import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`управление-отображением-изображения`,children:`Управление отображением изображения`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`size`}),`, `,(0,c.jsx)(t.code,{children:`coordinator`}),`, `,(0,c.jsx)(t.code,{children:`x`}),` и `,(0,c.jsx)(t.code,{children:`y`}),` позволяют детально управлять масштабированием, областью видимости и позиционированием изображения внутри контейнера.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`size`}),` — режим масштабирования и заполнения изображения (`,(0,c.jsx)(t.code,{children:`auto`}),`, `,(0,c.jsx)(t.code,{children:`contain`}),`, `,(0,c.jsx)(t.code,{children:`cover`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`coordinator`}),` — массив координат для обрезки области отображения `,(0,c.jsx)(t.code,{children:`[left, top, right, bottom]`}),` в процентах`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`x`}),` — смещение изображения по горизонтали (пиксели, проценты)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`y`}),` — смещение изображения по вертикали (пиксели, проценты)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства работают совместно или по отдельности. Значение `,(0,c.jsx)(t.code,{children:`size`}),` определяет режим масштабирования: `,(0,c.jsx)(t.code,{children:`auto`}),` использует исходный размер, `,(0,c.jsx)(t.code,{children:`contain`}),` вписывает изображение полностью, `,(0,c.jsx)(t.code,{children:`cover`}),` заполняет контейнер с возможной обрезкой. Свойство `,(0,c.jsx)(t.code,{children:`coordinator`}),` задаёт видимую область, обрезая изображение по указанным координатам. Параметры `,(0,c.jsx)(t.code,{children:`x`}),` и `,(0,c.jsx)(t.code,{children:`y`}),` смещают изображение относительно контейнера для точного позиционирования.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Режим масштабирования -->
<Image value="image.png" size="contain" />

<!-- Обрезка по координатам -->
<Image value="image.png" :coordinator="[10, 20, 100, 80]" />

<!-- Смещение позиции -->
<Image value="image.png" x="15" y="-10" />

<!-- Комбинация параметров -->
<Image
value="image.png"
size="cover"
:coordinator="[0, 0, 100, 50]"
x="10"
y="5"
/>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};
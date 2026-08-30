import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`пользовательские-классы-заполнителя-classessquare`,children:`Пользовательские классы заполнителя (classesSquare)`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`classesSquare`}),` позволяет передать пользовательские CSS-классы для элемента-заполнителя (spacer/square). Эти классы автоматически добавляются на заполнитель во время его отображения:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Стилизация пространства`}),` - позволяет задать рамку, цвет фона или тени для пустой зоны вставки`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Адаптивные стили`}),` - передавайте классы сетки или отступов для точного соответствия размерам соседних элементов`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поддержка строк и массивов`}),` - принимает как одиночную строку с именами классов, так и массив строк`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`По умолчанию элемент-заполнитель копирует базовые классы элемента, на который наведен курсор. Переданные в `,(0,c.jsx)(t.code,{children:`classesSquare`}),` классы расширяют этот список.`]}),`
`,(0,c.jsx)(i,{code:`
<DraggableWrapper classesSquare="custom-spacer border-dashed" />
<DraggableWrapper :classesSquare="['custom-spacer', 'bg-light']" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};
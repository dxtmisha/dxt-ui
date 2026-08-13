import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/styles/dimension - Размеры и пропорции`}),`
`,(0,c.jsx)(t.h1,{id:`система-размеров`,children:`Система размеров`}),`
`,(0,c.jsx)(t.p,{children:`Библиотека предоставляет миксины и функции для управления размерами, пропорциями и соотношением сторон с использованием CSS-переменных.`}),`
`,(0,c.jsx)(t.h2,{id:`функции`,children:`Функции`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getWidthByRatio($value: String): String`}),` — Возвращает ширину из строки соотношения сторон (например, '16/9' -> 16).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getHeightByRatio($value: String): String`}),` — Возвращает высоту из строки соотношения сторон.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`миксины`,children:`Миксины`}),`
`,(0,c.jsx)(t.h3,{id:`базовые-размеры`,children:`Базовые размеры`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`width($value: String | Number)`}),` — Устанавливает свойство `,(0,c.jsx)(t.code,{children:`width`}),` и CSS-переменную `,(0,c.jsx)(t.code,{children:`--sys-width`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`height($value: String | Number)`}),` — Устанавливает свойство `,(0,c.jsx)(t.code,{children:`height`}),` и CSS-переменную `,(0,c.jsx)(t.code,{children:`--sys-height`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`widthBasis($value: String | Number)`}),` — Устанавливает `,(0,c.jsx)(t.code,{children:`width`}),`, `,(0,c.jsx)(t.code,{children:`flex-basis`}),` и ограничивает `,(0,c.jsx)(t.code,{children:`max-width`}),` до 100%.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`heightBasis($value: String | Number)`}),` — Устанавливает `,(0,c.jsx)(t.code,{children:`height`}),`, `,(0,c.jsx)(t.code,{children:`flex-basis`}),` и ограничивает `,(0,c.jsx)(t.code,{children:`max-height`}),` до 100%.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`адаптивные-размеры-viewport`,children:`Адаптивные размеры (Viewport)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`widthDevice($value: String | Number)`}),` — Устанавливает ширину в динамических единицах области просмотра (`,(0,c.jsx)(t.code,{children:`dvw`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`heightDevice($value: String | Number)`}),` — Устанавливает высоту в динамических единицах области просмотра (`,(0,c.jsx)(t.code,{children:`dvh`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxWidthDevice($value: String | Number)`}),` — Устанавливает `,(0,c.jsx)(t.code,{children:`max-width`}),` в динамических единицах области просмотра (`,(0,c.jsx)(t.code,{children:`dvw`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxHeightDevice($value: String | Number)`}),` — Устанавливает `,(0,c.jsx)(t.code,{children:`max-height`}),` в динамических единицах области просмотра (`,(0,c.jsx)(t.code,{children:`dvh`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`соотношение-сторон-и-формы`,children:`Соотношение сторон и формы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`aspectRatio($value: String | Number)`}),` — Устанавливает свойство `,(0,c.jsx)(t.code,{children:`aspect-ratio`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`aspectRatioWidth($value: String | Number)`}),` — Псевдоним для миксина `,(0,c.jsx)(t.code,{children:`aspectRatio`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`aspectRatioHeight($value: String | Number)`}),` — Псевдоним для миксина `,(0,c.jsx)(t.code,{children:`aspectRatio`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`squared($value: String | Number)`}),` — Применяет `,(0,c.jsx)(t.code,{children:`widthBasis`}),` и устанавливает `,(0,c.jsx)(t.code,{children:`aspect-ratio: 1/1`}),` для создания квадрата.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`circle($value: String | Number)`}),` — Применяет миксин `,(0,c.jsx)(t.code,{children:`squared`}),` и устанавливает `,(0,c.jsx)(t.code,{children:`border-radius: 100%`}),` для создания круга.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
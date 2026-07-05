import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/styles/dimension - Размеры и пропорции`}),`
`,(0,c.jsx)(n.h1,{id:`система-размеров`,children:`Система размеров`}),`
`,(0,c.jsx)(n.p,{children:`Библиотека предоставляет миксины и функции для управления размерами, пропорциями и соотношением сторон с использованием CSS-переменных.`}),`
`,(0,c.jsx)(n.h2,{id:`функции`,children:`Функции`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getWidthByRatio($value: String): String`}),` — Возвращает ширину из строки соотношения сторон (например, '16/9' -> 16).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHeightByRatio($value: String): String`}),` — Возвращает высоту из строки соотношения сторон.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`миксины`,children:`Миксины`}),`
`,(0,c.jsx)(n.h3,{id:`базовые-размеры`,children:`Базовые размеры`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`width($value: String | Number)`}),` — Устанавливает свойство `,(0,c.jsx)(n.code,{children:`width`}),` и CSS-переменную `,(0,c.jsx)(n.code,{children:`--sys-width`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`height($value: String | Number)`}),` — Устанавливает свойство `,(0,c.jsx)(n.code,{children:`height`}),` и CSS-переменную `,(0,c.jsx)(n.code,{children:`--sys-height`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`widthBasis($value: String | Number)`}),` — Устанавливает `,(0,c.jsx)(n.code,{children:`width`}),`, `,(0,c.jsx)(n.code,{children:`flex-basis`}),` и ограничивает `,(0,c.jsx)(n.code,{children:`max-width`}),` до 100%.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`heightBasis($value: String | Number)`}),` — Устанавливает `,(0,c.jsx)(n.code,{children:`height`}),`, `,(0,c.jsx)(n.code,{children:`flex-basis`}),` и ограничивает `,(0,c.jsx)(n.code,{children:`max-height`}),` до 100%.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`адаптивные-размеры-viewport`,children:`Адаптивные размеры (Viewport)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`widthDevice($value: String | Number)`}),` — Устанавливает ширину в динамических единицах области просмотра (`,(0,c.jsx)(n.code,{children:`dvw`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`heightDevice($value: String | Number)`}),` — Устанавливает высоту в динамических единицах области просмотра (`,(0,c.jsx)(n.code,{children:`dvh`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`maxWidthDevice($value: String | Number)`}),` — Устанавливает `,(0,c.jsx)(n.code,{children:`max-width`}),` в динамических единицах области просмотра (`,(0,c.jsx)(n.code,{children:`dvw`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`maxHeightDevice($value: String | Number)`}),` — Устанавливает `,(0,c.jsx)(n.code,{children:`max-height`}),` в динамических единицах области просмотра (`,(0,c.jsx)(n.code,{children:`dvh`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`соотношение-сторон-и-формы`,children:`Соотношение сторон и формы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`aspectRatio($value: String | Number)`}),` — Устанавливает свойство `,(0,c.jsx)(n.code,{children:`aspect-ratio`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`aspectRatioWidth($value: String | Number)`}),` — Псевдоним для миксина `,(0,c.jsx)(n.code,{children:`aspectRatio`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`aspectRatioHeight($value: String | Number)`}),` — Псевдоним для миксина `,(0,c.jsx)(n.code,{children:`aspectRatio`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`squared($value: String | Number)`}),` — Применяет `,(0,c.jsx)(n.code,{children:`widthBasis`}),` и устанавливает `,(0,c.jsx)(n.code,{children:`aspect-ratio: 1/1`}),` для создания квадрата.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`circle($value: String | Number)`}),` — Применяет миксин `,(0,c.jsx)(n.code,{children:`squared`}),` и устанавливает `,(0,c.jsx)(n.code,{children:`border-radius: 100%`}),` для создания круга.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
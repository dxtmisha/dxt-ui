import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/StylesRoot - Генератор корневых переменных`}),`
`,(0,c.jsx)(n.h1,{id:`класс-stylesroot`,children:`Класс StylesRoot`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`StylesRoot`}),` отвечает за генерацию глобального блока CSS `,(0,c.jsx)(n.code,{children:`:root`}),` из токенов дизайна. Он преобразует токены в CSS-переменные и интеллектуально разрешает сложные выражения `,(0,c.jsx)(n.code,{children:`calc()`}),` для обеспечения совместимости с браузерами.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Генерация блока Root`}),` — Создает стандартную структуру `,(0,c.jsx)(n.code,{children:`:root { ... }`}),`, содержащую все токены дизайна.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Преобразование переменных`}),` — Использует `,(0,c.jsx)(n.code,{children:`StylesToVar`}),` для трансформации элементов свойств в валидные CSS-переменные.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Динамическое разрешение вычислений`}),` — Рекурсивно разрешает выражения `,(0,c.jsx)(n.code,{children:`calc()`}),`, которые ссылаются на другие переменные, гарантируя, что конечные значения будут предварительно вычислены, где это возможно.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция с SCSS`}),` — Автоматически включает необходимые директивы SCSS `,(0,c.jsx)(n.code,{children:`@use`}),` для определений свойств.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`StylesRoot(items)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: PropertiesItems`}),` — объект для работы со списком свойств дизайна.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { StylesRoot, PropertiesItems } from '@dxtmisha/scripts'

// 1. Инициализация PropertiesItems
const items = new PropertiesItems(designData)

// 2. Инициализация StylesRoot
const generator = new StylesRoot(items)
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): string[]`}),` — Основная точка входа. Обрабатывает список свойств, разрешает вычисления и возвращает массив строк, представляющих полный блок `,(0,c.jsx)(n.code,{children:`:root`}),` с его импортами.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
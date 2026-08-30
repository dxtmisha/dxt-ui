import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/StylesRoot - Генератор корневых переменных`}),`
`,(0,c.jsx)(t.h1,{id:`класс-stylesroot`,children:`Класс StylesRoot`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`StylesRoot`}),` отвечает за генерацию глобального блока CSS `,(0,c.jsx)(t.code,{children:`:root`}),` из токенов дизайна. Он преобразует токены в CSS-переменные и интеллектуально разрешает сложные выражения `,(0,c.jsx)(t.code,{children:`calc()`}),` для обеспечения совместимости с браузерами.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Генерация блока Root`}),` — Создает стандартную структуру `,(0,c.jsx)(t.code,{children:`:root { ... }`}),`, содержащую все токены дизайна.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Преобразование переменных`}),` — Использует `,(0,c.jsx)(t.code,{children:`StylesToVar`}),` для трансформации элементов свойств в валидные CSS-переменные.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Динамическое разрешение вычислений`}),` — Рекурсивно разрешает выражения `,(0,c.jsx)(t.code,{children:`calc()`}),`, которые ссылаются на другие переменные, гарантируя, что конечные значения будут предварительно вычислены, где это возможно.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция с SCSS`}),` — Автоматически включает необходимые директивы SCSS `,(0,c.jsx)(t.code,{children:`@use`}),` для определений свойств.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(t.code,{children:`StylesRoot(items)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`items: PropertiesItems`}),` — объект для работы со списком свойств дизайна.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { StylesRoot, PropertiesItems } from '@dxtmisha/scripts'

// 1. Инициализация PropertiesItems
const items = new PropertiesItems(designData)

// 2. Инициализация StylesRoot
const generator = new StylesRoot(items)
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): string[]`}),` — Основная точка входа. Обрабатывает список свойств, разрешает вычисления и возвращает массив строк, представляющих полный блок `,(0,c.jsx)(t.code,{children:`:root`}),` с его импортами.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
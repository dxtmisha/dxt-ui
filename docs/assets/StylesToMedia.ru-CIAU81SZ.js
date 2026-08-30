import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/StylesToMedia - Генератор медиа-запросов`}),`
`,(0,c.jsx)(t.h1,{id:`класс-stylestomedia`,children:`Класс StylesToMedia`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`StylesToMedia`}),` отвечает за создание CSS-запросов `,(0,c.jsx)(t.code,{children:`@media`}),` на основе свойств дизайна. Он реализует логику для обертывания вложенных правил стилей в блок медиа-запроса.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Обертка Медиа-запроса`}),` — Автоматически оборачивает созданный контент стилей в правило `,(0,c.jsx)(t.code,{children:`@media screen and ...`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Динамическое разрешение запроса`}),` — Использует имя свойства дизайна для определения условия медиа-запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление отступами`}),` — Корректно обрабатывает отступы блоков и необязательные начальные пустые строки.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Инициализируйте преобразователь `,(0,c.jsx)(t.code,{children:`StylesToMedia`}),` с помощью необходимого свойства и функции контента для вложенных правил.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`property: PropertyItemsItem`}),` — текущая ветка дерева свойств, которая обрабатывается.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`space: string`}),` — строка отступа (например, `,(0,c.jsx)(t.code,{children:`"  "`}),` или `,(0,c.jsx)(t.code,{children:`"\\t"`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`content?: () => string[]`}),` — вызываемая функция, которая возвращает массив строк, представляющих внутренние правила стиля.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`first?: boolean`}),` — указывает, является ли этот элемент первым на текущем уровне (необязательно, по умолчанию: `,(0,c.jsx)(t.code,{children:`true`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { StylesToMedia } from '@dxtmisha/scripts'

// Использование в логике преобразования
const converter = new StylesToMedia(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): string[]`}),` — Основная точка входа. Организует преобразование и добавляет необходимый отступ к каждой строке.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
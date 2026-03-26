import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/StylesToContainer - Генератор Container Query`}),`
`,(0,c.jsx)(n.h1,{id:`класс-stylestocontainer`,children:`Класс StylesToContainer`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`StylesToContainer`}),` отвечает за создание CSS-запросов `,(0,c.jsx)(n.code,{children:`@container`}),` на основе свойств дизайна. Он реализует логику для обертывания вложенных правил стилей в блок container query.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Обертка Container Query`}),` — Автоматически оборачивает созданный контент стилей в правило `,(0,c.jsx)(n.code,{children:`@container`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Динамическое разрешение запроса`}),` — Использует значение свойства дизайна для определения условия container query.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление отступами`}),` — Корректно обрабатывает отступы блоков и необязательные начальные пустые строки.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Инициализируйте преобразователь `,(0,c.jsx)(n.code,{children:`StylesToContainer`}),` с помощью необходимого свойства и функции контента для вложенных правил.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`property: PropertyItemsItem`}),` — текущая ветка дерева свойств, которая обрабатывается.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`space: string`}),` — строка отступа (например, `,(0,c.jsx)(n.code,{children:`"  "`}),` или `,(0,c.jsx)(n.code,{children:`"\\t"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`content?: () => string[]`}),` — вызываемая функция, которая возвращает массив строк, представляющих внутренние правила стиля.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`first?: boolean`}),` — указывает, является ли этот элемент первым на текущем уровне (необязательно, по умолчанию: `,(0,c.jsx)(n.code,{children:`true`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { StylesToContainer } from '@dxtmisha/scripts'

// Использование в логике преобразования
const converter = new StylesToContainer(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): string[]`}),` — Основная точка входа. Организует преобразование и добавляет необходимый отступ к каждой строке.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
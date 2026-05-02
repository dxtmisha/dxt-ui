import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/StylesProperties - Диспетчер преобразования свойств`}),`
`,(0,c.jsx)(n.h1,{id:`класс-stylesproperties`,children:`Класс StylesProperties`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`StylesProperties`}),` выступает в роли центрального диспетчера для преобразования свойств дизайна в SCSS. Он обходит ветви свойств и делегирует фактическое преобразование специализированным классам `,(0,c.jsx)(n.code,{children:`StylesTo*`}),` в зависимости от типа переменной свойства.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Диспетчеризация по типу`}),` — Автоматически выбирает нужный преобразователь (например, `,(0,c.jsx)(n.code,{children:`StylesToVar`}),`, `,(0,c.jsx)(n.code,{children:`StylesToProperty`}),`, `,(0,c.jsx)(n.code,{children:`StylesToSelector`}),`) на основе `,(0,c.jsx)(n.code,{children:`PropertyType`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Рекурсивная обработка`}),` — Обрабатывает вложенные структуры свойств, рекурсивно инициализируя себя для подветвей.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление вспомогательными блоками`}),` — Интеллектуально оборачивает селекторы и псевдоэлементы в блоки `,(0,c.jsx)(n.code,{children:`& { ... }`}),`, когда они являются частью более крупной вложенной структуры.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Отслеживание отступов`}),` — Управляет и увеличивает уровни отступов при переходе во вложенные ветви свойств.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сохранение состояния`}),` — Отслеживает, обрабатывается ли первый элемент в блоке, для правильного управления вертикальными отступами.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`StylesProperties(space, property, parent)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`space: string`}),` — строка отступа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`property: PropertyItemsItem`}),` — текущая обрабатываемая ветвь дерева свойств.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`parent?: PropertyItem`}),` — родительский элемент свойства (необязательно).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { StylesProperties } from '@dxtmisha/scripts'

// 1. Инициализация StylesProperties
const dispatcher = new StylesProperties(indentation, propertyBranch, parentItem)
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): string[]`}),` — Основная точка входа. Обходит свойства в текущей ветке и возвращает массив строк SCSS, представляющих преобразованные правила.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
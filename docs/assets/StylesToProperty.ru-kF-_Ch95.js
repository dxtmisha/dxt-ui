import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/StylesToProperty - Генератор CSS-свойств`}),`
`,(0,c.jsx)(n.h1,{id:`класс-stylestoproperty`,children:`Класс StylesToProperty`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`StylesToProperty`}),` отвечает за преобразование свойств дизайна в стандартные CSS-свойства или вызовы SCSS-миксинов. Он управляет генерацией переменных, специальным форматированием свойств и вспомогательными значениями для таких параметров, как прозрачность.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Стандартные CSS-свойства`}),` — Генерирует пары свойство-значение (например, `,(0,c.jsx)(n.code,{children:`margin-top: 10px;`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция с SCSS-миксинами`}),` — Автоматически преобразует определенные свойства в вызовы миксинов, если они зарегистрированы в `,(0,c.jsx)(n.code,{children:`styleTypes`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Генерация CSS-переменных`}),` — Может генерировать пользовательские CSS-переменные, если для свойства установлен флаг `,(0,c.jsx)(n.code,{children:`varKey`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Инициализация вспомогательных значений`}),` — Автоматически включает вызовы инициализации для свойств, связанных с прозрачностью, если базовое свойство отсутствует.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сортировка и отступы`}),` — Добавляет вертикальные отступы между свойствами при изменении индекса сортировки.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Инициализируйте преобразователь `,(0,c.jsx)(n.code,{children:`StylesToProperty`}),` с текущей веткой свойств.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`property: PropertyItemsItem`}),` — текущая обрабатываемая ветвь дерева свойств.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`space: string`}),` — строка отступа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`content?: () => string[]`}),` — обычно не используется для свойств, так как они являются конечными узлами.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`first?: boolean`}),` — указывает, является ли элемент первым (необязательно).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { StylesToProperty } from '@dxtmisha/scripts'

const converter = new StylesToProperty(property, '  ')
const result = converter.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): string[]`}),` — Основная точка входа. Организует преобразование, включая генерацию переменных и разрешение миксинов.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
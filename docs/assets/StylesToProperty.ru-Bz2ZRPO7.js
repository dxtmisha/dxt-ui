import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/StylesToProperty - Генератор CSS-свойств`}),`
`,(0,c.jsx)(t.h1,{id:`класс-stylestoproperty`,children:`Класс StylesToProperty`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`StylesToProperty`}),` отвечает за преобразование свойств дизайна в стандартные CSS-свойства или вызовы SCSS-миксинов. Он управляет генерацией переменных, специальным форматированием свойств и вспомогательными значениями для таких параметров, как прозрачность.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Стандартные CSS-свойства`}),` — Генерирует пары свойство-значение (например, `,(0,c.jsx)(t.code,{children:`margin-top: 10px;`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция с SCSS-миксинами`}),` — Автоматически преобразует определенные свойства в вызовы миксинов, если они зарегистрированы в `,(0,c.jsx)(t.code,{children:`styleTypes`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Генерация CSS-переменных`}),` — Может генерировать пользовательские CSS-переменные, если для свойства установлен флаг `,(0,c.jsx)(t.code,{children:`varKey`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Инициализация вспомогательных значений`}),` — Автоматически включает вызовы инициализации для свойств, связанных с прозрачностью, если базовое свойство отсутствует.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сортировка и отступы`}),` — Добавляет вертикальные отступы между свойствами при изменении индекса сортировки.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Инициализируйте преобразователь `,(0,c.jsx)(t.code,{children:`StylesToProperty`}),` с текущей веткой свойств.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`property: PropertyItemsItem`}),` — текущая обрабатываемая ветвь дерева свойств.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`space: string`}),` — строка отступа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`content?: () => string[]`}),` — обычно не используется для свойств, так как они являются конечными узлами.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`first?: boolean`}),` — указывает, является ли элемент первым (необязательно).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { StylesToProperty } from '@dxtmisha/scripts'

const converter = new StylesToProperty(property, '  ')
const result = converter.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): string[]`}),` — Основная точка входа. Организует преобразование, включая генерацию переменных и разрешение миксинов.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
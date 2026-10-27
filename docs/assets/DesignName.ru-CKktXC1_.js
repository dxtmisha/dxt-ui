import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Classes/DesignName`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designname`,children:`Класс DesignName`}),`
`,(0,c.jsxs)(t.p,{children:[`Помощник именования компонентов по БЭМ. Конструктор берёт первые два сегмента `,(0,c.jsx)(t.code,{children:`design.component`}),`, нормализует их и сохраняет названия дизайна и класса компонента.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэш имён`}),` — независимое состояние каждого экземпляра.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`БЭМ`}),` — модификаторы используют `,(0,c.jsx)(t.code,{children:`--`}),`, элементы — `,(0,c.jsx)(t.code,{children:`__`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`CSS-переменные`}),` — системные свойства содержат сегмент `,(0,c.jsx)(t.code,{children:`-sys-`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor(name: string)`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Имя компонента с префиксом дизайна, например d1.button.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`поведение-и-жизненный-цикл`,children:`Поведение и жизненный цикл`}),`
`,(0,c.jsxs)(t.p,{children:[`Сегменты могут содержать числа и `,(0,c.jsx)(t.code,{children:`undefined`}),`. Объединение не фильтрует значения: `,(0,c.jsx)(t.code,{children:`0`}),` сохраняется, а `,(0,c.jsx)(t.code,{children:`undefined`}),` создаёт пустой сегмент. При отсутствии сегментов разделитель остаётся в конце. Каждый исходный сегмент обрабатывается `,(0,c.jsx)(t.code,{children:`toCamelCase`}),`: например, `,(0,c.jsx)(t.code,{children:`d1.buttonGroup`}),` превращается в `,(0,c.jsx)(t.code,{children:`d1-buttonGroup`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignName } from '@dxtmisha/functional'

const naming = /*#__PURE__*/ new DesignName('d1.buttonGroup')
naming.getName() // 'd1-buttonGroup'
naming.getStatusClass('size', 0) // 'd1-buttonGroup--size--0'
naming.getSubClass('label') // 'd1-buttonGroup__label'
naming.getStyle('width') // '--d1-buttonGroup-sys-width'
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`основные-имена`,children:`Основные имена`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getDesign(): string`}),` — Возвращает первый нормализованный сегмент имени.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getName(): string`}),` — Возвращает нормализованное имя класса компонента.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`бэм-и-css-переменные`,children:`БЭМ и CSS-переменные`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getStatusClass(...names: (string | number | undefined)[]): string`}),` — Объединяет сегменты модификатора через `,(0,c.jsx)(t.code,{children:`--`}),` после имени компонента.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getSubClass(...names: (string | number | undefined)[]): string`}),` — Объединяет сегменты элемента через `,(0,c.jsx)(t.code,{children:`__`}),` после имени компонента.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getStyle(...names: (string | number | undefined)[]): string`}),` — Формирует имя CSS-переменной с префиксом `,(0,c.jsx)(t.code,{children:`--`}),` и пространством имён `,(0,c.jsx)(t.code,{children:`-sys-`}),`.`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
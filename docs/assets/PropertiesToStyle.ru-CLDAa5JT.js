import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToStyle - Преобразование пользовательских групп стилей`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiestostyle`,children:`Класс PropertiesToStyle`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesToStyle`}),` обрабатывает токены дизайна, поддерживающие дополнительные пользовательские значения, оборачивая их в выделенные узлы структур стилей. Он наследует класс `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синтез пользовательских селекторов`}),` — Создает переопределения пользовательских состояний под единым ключом `,(0,c.jsx)(t.code,{children:`custom`}),` внутри карт значений свойств.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Динамическое преобразование свойств`}),` — Переписывает свойства с директивой `,(0,c.jsx)(t.code,{children:`style`}),` для их поведения в качестве переменных состояний.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэширование результатов`}),` — Сохраняет обработанные переопределения стилей в файл кэша `,(0,c.jsx)(t.code,{children:`016-style`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToStyle, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToStyle(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`шаги-жизненного-цикла`,children:`Шаги жизненного цикла`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для обхода свойств, проверки маркеров `,(0,c.jsx)(t.code,{children:`style`}),` и внедрения записей стилей `,(0,c.jsx)(t.code,{children:`custom`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
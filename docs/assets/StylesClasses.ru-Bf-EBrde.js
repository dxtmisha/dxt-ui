import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/StylesClasses - Генератор базовых классов`}),`
`,(0,c.jsx)(t.h1,{id:`класс-stylesclasses`,children:`Класс StylesClasses`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`StylesClasses`}),` отвечает за создание базовых CSS-классов на основе свойств дизайна. Он фильтрует список свойств по таким категориям, как `,(0,c.jsx)(t.code,{children:`class`}),` и `,(0,c.jsx)(t.code,{children:`theme`}),`, и создает структуры отдельных классов.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Фильтрация по категориям`}),` — Специально нацелен на свойства, классифицированные как `,(0,c.jsx)(t.code,{children:`class`}),` или `,(0,c.jsx)(t.code,{children:`theme`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Динамическая генерация классов`}),` — Создает словарь блоков SCSS, где каждый ключ является именем класса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Оркестрация зависимостей`}),` — Использует `,(0,c.jsx)(t.code,{children:`StylesProperties`}),` для генерации внутренних правил стиля (свойств, миксинов и т. д.) для каждого класса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление импортом`}),` — Автоматически включает необходимые директивы SCSS `,(0,c.jsx)(t.code,{children:`@use`}),` для связывания созданных файлов классов.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(t.code,{children:`StylesClasses(items)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`items: PropertiesItems`}),` — объект для работы со списком свойств дизайна.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { StylesClasses, PropertiesItems } from '@dxtmisha/scripts'

// 1. Инициализация PropertiesItems
const items = new PropertiesItems(designData)

// 2. Инициализация StylesClasses
const generator = new StylesClasses(items)
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): StylesClassesItem`}),` — Основная точка входа. Обрабатывает список свойств и возвращает объект, содержащий список необходимых импортов и сгенерированное содержимое классов.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h3,{id:`stylesclassesitem`,children:`StylesClassesItem`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: string[]`}),` — Массив операторов SCSS `,(0,c.jsx)(t.code,{children:`@use`}),` для созданных файлов классов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`classes: Record<string, string[]>`}),` — Словарь, где каждый ключ — это имя класса, а значение — массив строк, представляющих содержимое SCSS этого класса.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
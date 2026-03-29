import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/StylesClasses - Генератор базовых классов`}),`
`,(0,c.jsx)(n.h1,{id:`класс-stylesclasses`,children:`Класс StylesClasses`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`StylesClasses`}),` отвечает за создание базовых CSS-классов на основе свойств дизайна. Он фильтрует список свойств по таким категориям, как `,(0,c.jsx)(n.code,{children:`class`}),` и `,(0,c.jsx)(n.code,{children:`theme`}),`, и создает структуры отдельных классов.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Фильтрация по категориям`}),` — Специально нацелен на свойства, классифицированные как `,(0,c.jsx)(n.code,{children:`class`}),` или `,(0,c.jsx)(n.code,{children:`theme`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Динамическая генерация классов`}),` — Создает словарь блоков SCSS, где каждый ключ является именем класса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Оркестрация зависимостей`}),` — Использует `,(0,c.jsx)(n.code,{children:`StylesProperties`}),` для генерации внутренних правил стиля (свойств, миксинов и т. д.) для каждого класса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление импортом`}),` — Автоматически включает необходимые директивы SCSS `,(0,c.jsx)(n.code,{children:`@use`}),` для связывания созданных файлов классов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`StylesClasses(items)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: PropertiesItems`}),` — объект для работы со списком свойств дизайна.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { StylesClasses, PropertiesItems } from '@dxtmisha/scripts'

// 1. Инициализация PropertiesItems
const items = new PropertiesItems(designData)

// 2. Инициализация StylesClasses
const generator = new StylesClasses(items)
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): StylesClassesItem`}),` — Основная точка входа. Обрабатывает список свойств и возвращает объект, содержащий список необходимых импортов и сгенерированное содержимое классов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`stylesclassesitem`,children:`StylesClassesItem`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: string[]`}),` — Массив операторов SCSS `,(0,c.jsx)(n.code,{children:`@use`}),` для созданных файлов классов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`classes: Record<string, string[]>`}),` — Словарь, где каждый ключ — это имя класса, а значение — массив строк, представляющих содержимое SCSS этого класса.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
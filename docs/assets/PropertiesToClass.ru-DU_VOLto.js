import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToClass - Преобразование селекторов классов CSS`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiestoclass`,children:`Класс PropertiesToClass`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesToClass`}),` управляет преобразованием элементов токенов дизайна, представляющих CSS-классы, в стандартные селекторы классов SCSS. Он наследует класс `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синтез селекторов классов`}),` — Преобразует необработанные имена токенов типа `,(0,c.jsx)(t.code,{children:`PropertyType.classType`}),` в селекторы классов SCSS с пространством имен родителя.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поддержка структуры BEM`}),` — Разрешает вложенность родительских и дочерних классов путем проверки иерархии свойств.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэширование результатов`}),` — Сохраняет обработанные селекторы классов в файл кэша `,(0,c.jsx)(t.code,{children:`030-class`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToClass, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToClass(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`жизненный-цикл-и-вспомогательные-методы`,children:`Жизненный цикл и вспомогательные методы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для поиска всех переменных типа `,(0,c.jsx)(t.code,{children:`classType`}),` и перезаписи их селекторов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(name: string, item: PropertyItem, parents: PropertyItemsItem['parents']): string`}),` — Форматирует имена селекторов классов, добавляя префикс `,(0,c.jsx)(t.code,{children:`& .`}),` и ограничивая их областью видимости верхнего уровня родителя, если флаг `,(0,c.jsx)(t.code,{children:`fullName`}),` равен false.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToRemove - Удаление помеченных свойств`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiestoremove`,children:`Класс PropertiesToRemove`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesToRemove`}),` удаляет узлы и свойства из дерева токенов дизайна, которые были явно помечены директивой `,(0,c.jsx)(t.code,{children:`remove`}),`. Он наследует класс `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Целевая очистка свойств`}),` — Идентифицирует и удаляет свойства, помеченные флагом `,(0,c.jsx)(t.code,{children:`PropertyKey.remove`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Предупреждения для разработчиков`}),` — Выводит предупреждения с путями удаленных элементов в консоль для отслеживания операций.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэширование результатов`}),` — Сохраняет обновленную карту конфигурации в файл кэша `,(0,c.jsx)(t.code,{children:`007-02-remove`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToRemove, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToRemove(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`шаги-жизненного-цикла`,children:`Шаги жизненного цикла`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для сканирования дерева, удаления подходящих узлов свойств из их родительских объектов значений и вывода логов.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
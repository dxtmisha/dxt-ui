import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToState - Преобразование селекторов модификаторов состояний`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiestostate`,children:`Класс PropertiesToState`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesToState`}),` обрабатывает состояния токенов дизайна (типа `,(0,c.jsx)(t.code,{children:`PropertyType.state`}),`) и преобразует их имена в SCSS-селекторы модификаторов (такие как `,(0,c.jsx)(t.code,{children:`&--state`}),` или `,(0,c.jsx)(t.code,{children:`&.parent--state`}),`). Он наследует класс `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синтез селекторов состояний`}),` — Генерирует форматы модификаторов классов SCSS (`,(0,c.jsx)(t.code,{children:`&--modifier`}),`), представляющие визуальные состояния компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Разрешение вложенных состояний`}),` — Оценивает родительскую иерархию для чистого вложения подсостояний в области вложенных модификаторов (например, `,(0,c.jsx)(t.code,{children:`&.parent--modifier`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэширование результатов`}),` — Сохраняет селекторы состояний в файл кэша `,(0,c.jsx)(t.code,{children:`032-state`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToState, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToState(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`жизненный-цикл-и-вспомогательные-методы`,children:`Жизненный цикл и вспомогательные методы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для поиска всех переменных типа `,(0,c.jsx)(t.code,{children:`state`}),` и перезаписи их селекторов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(name: string, item: PropertyItem, parents: PropertyItemsItem['parents']): string`}),` — Форматирует имена модификаторов, добавляя BEM-модификатор (`,(0,c.jsx)(t.code,{children:`&--`}),` или `,(0,c.jsx)(t.code,{children:`&.parent--`}),`) на основе конфигурации верхнего уровня и предков пути.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToState - Преобразование селекторов модификаторов состояний`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiestostate`,children:`Класс PropertiesToState`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesToState`}),` обрабатывает состояния токенов дизайна (типа `,(0,c.jsx)(n.code,{children:`PropertyType.state`}),`) и преобразует их имена в SCSS-селекторы модификаторов (такие как `,(0,c.jsx)(n.code,{children:`&--state`}),` или `,(0,c.jsx)(n.code,{children:`&.parent--state`}),`). Он наследует класс `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синтез селекторов состояний`}),` — Генерирует форматы модификаторов классов SCSS (`,(0,c.jsx)(n.code,{children:`&--modifier`}),`), представляющие визуальные состояния компонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Разрешение вложенных состояний`}),` — Оценивает родительскую иерархию для чистого вложения подсостояний в области вложенных модификаторов (например, `,(0,c.jsx)(n.code,{children:`&.parent--modifier`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование результатов`}),` — Сохраняет селекторы состояний в файл кэша `,(0,c.jsx)(n.code,{children:`032-state`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToState, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToState(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`жизненный-цикл-и-вспомогательные-методы`,children:`Жизненный цикл и вспомогательные методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для поиска всех переменных типа `,(0,c.jsx)(n.code,{children:`state`}),` и перезаписи их селекторов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(name: string, item: PropertyItem, parents: PropertyItemsItem['parents']): string`}),` — Форматирует имена модификаторов, добавляя BEM-модификатор (`,(0,c.jsx)(n.code,{children:`&--`}),` или `,(0,c.jsx)(n.code,{children:`&.parent--`}),`) на основе конфигурации верхнего уровня и предков пути.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
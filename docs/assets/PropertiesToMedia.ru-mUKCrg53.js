import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToMedia - Преобразование медиа-запросов и контейнеров`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiestomedia`,children:`Класс PropertiesToMedia`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesToMedia`}),` обрабатывает токены дизайна, представляющие медиа-запросы и контейнерные запросы, переводя алиасы и необработанные группы в стандартные ограничения CSS `,(0,c.jsx)(n.code,{children:`@media`}),` или `,(0,c.jsx)(n.code,{children:`@container`}),`. Он наследует класс `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Развертывание медиа-алиасов`}),` — Ищет пользовательские сокращения областей просмотра (например, `,(0,c.jsx)(n.code,{children:`md`}),`, `,(0,c.jsx)(n.code,{children:`lg`}),`) с помощью конфигураций дизайна и развертывает их в пиксельные определения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синтез типов запросов`}),` — Определяет диапазоны min-width и max-width на основе свойств с именами `,(0,c.jsx)(n.code,{children:`media`}),`, `,(0,c.jsx)(n.code,{children:`mediaMax`}),`, `,(0,c.jsx)(n.code,{children:`container`}),` или `,(0,c.jsx)(n.code,{children:`containerMax`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Расширение медиа-групп`}),` — Создает группы модификаторов состояний для каждой активной точки останова (breakpoint) медиа/контейнера, определенной в дизайн-системе.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование результатов`}),` — Сохраняет результаты медиа-запросов в файл кэша `,(0,c.jsx)(n.code,{children:`040-media`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToMedia, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToMedia(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`операции-преобразования`,children:`Операции преобразования`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для поиска и расширения узлов групп медиа-запросов и преобразования индивидуальных параметров запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(design: string, name: string, item: PropertyItem): string`}),` — Преобразует параметры медиа-конфигурации в стандартные критерии CSS-запроса (например, `,(0,c.jsx)(n.code,{children:`(min-width: 768px)`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTypeByGroup(item: PropertyItem): PropertyType`}),` — Разрешает базовый тип свойства на основе элемента группы контейнера или медиа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toValueForMedia(design: string, values: string[]): string[]`}),` — Заменяет адаптивные алиасы на их настроенные значения в пикселях.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toValueGroup(design: string, name: string, item: PropertyItem, type: PropertyType): Record<string, PropertyItem> | undefined`}),` — Создает отдельные модификаторы состояния для каждого брейкпоинта в структуре медиа-группы.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
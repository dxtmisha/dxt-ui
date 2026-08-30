import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesToMedia - Преобразование медиа-запросов и контейнеров`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiestomedia`,children:`Класс PropertiesToMedia`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesToMedia`}),` обрабатывает токены дизайна, представляющие медиа-запросы и контейнерные запросы, переводя алиасы и необработанные группы в стандартные ограничения CSS `,(0,c.jsx)(t.code,{children:`@media`}),` или `,(0,c.jsx)(t.code,{children:`@container`}),`. Он наследует класс `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Развертывание медиа-алиасов`}),` — Ищет пользовательские сокращения областей просмотра (например, `,(0,c.jsx)(t.code,{children:`md`}),`, `,(0,c.jsx)(t.code,{children:`lg`}),`) с помощью конфигураций дизайна и развертывает их в пиксельные определения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синтез типов запросов`}),` — Определяет диапазоны min-width и max-width на основе свойств с именами `,(0,c.jsx)(t.code,{children:`media`}),`, `,(0,c.jsx)(t.code,{children:`mediaMax`}),`, `,(0,c.jsx)(t.code,{children:`container`}),` или `,(0,c.jsx)(t.code,{children:`containerMax`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Расширение медиа-групп`}),` — Создает группы модификаторов состояний для каждой активной точки останова (breakpoint) медиа/контейнера, определенной в дизайн-системе.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэширование результатов`}),` — Сохраняет результаты медиа-запросов в файл кэша `,(0,c.jsx)(t.code,{children:`040-media`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToMedia, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToMedia(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`операции-преобразования`,children:`Операции преобразования`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Переопределяет абстрактный шаг жизненного цикла для поиска и расширения узлов групп медиа-запросов и преобразования индивидуальных параметров запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(design: string, name: string, item: PropertyItem): string`}),` — Преобразует параметры медиа-конфигурации в стандартные критерии CSS-запроса (например, `,(0,c.jsx)(t.code,{children:`(min-width: 768px)`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTypeByGroup(item: PropertyItem): PropertyType`}),` — Разрешает базовый тип свойства на основе элемента группы контейнера или медиа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toValueForMedia(design: string, values: string[]): string[]`}),` — Заменяет адаптивные алиасы на их настроенные значения в пикселях.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toValueGroup(design: string, name: string, item: PropertyItem, type: PropertyType): Record<string, PropertyItem> | undefined`}),` — Создает отдельные модификаторы состояния для каждого брейкпоинта в структуре медиа-группы.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/SearchListOptions - Управление Опциями Списка Поиска`}),`
`,(0,c.jsx)(n.h1,{id:`класс-searchlistoptions`,children:`Класс SearchListOptions`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`SearchListOptions`}),` отвечает за управление и предоставление доступа к параметрам конфигурации, используемым в системе `,(0,c.jsx)(n.code,{children:`SearchList`}),`. Он гарантирует использование значений по умолчанию, когда конкретные параметры не указаны.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Централизованная конфигурация`}),` — предоставляет единую точку доступа ко всем настройкам, связанным с поиском.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Обработка значений по умолчанию`}),` — автоматически применяет разумные параметры (например, лимит, задержку), если они отсутствуют в предоставленных опциях.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Fluent Interface`}),` — поддерживает цепочку вызовов для установки новых опций.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`SearchListOptions(options)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: SearchOptions`}),` — объект, содержащий конфигурацию поиска.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions({
  limit: 3,
  delay: 300,
  findExactMatch: true
})

console.log(options.getLimit()) // 3
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`информационные`,children:`Информационные`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getOptions(): SearchOptions`}),` — Возвращает текущий объект настроек поиска.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLimit(): number`}),` — Возвращает минимальное количество символов, необходимое для запуска поиска (по умолчанию `,(0,c.jsx)(n.code,{children:`2`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getReturnEverything(): boolean`}),` — Возвращает, следует ли возвращать все элементы, даже если они не соответствуют поисковому запросу (по умолчанию `,(0,c.jsx)(n.code,{children:`false`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDelay(): number`}),` — Возвращает задержку поиска в миллисекундах (по умолчанию `,(0,c.jsx)(n.code,{children:`0`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFindExactMatch(): boolean`}),` — Возвращает, следует ли выполнять поиск с точным совпадением (по умолчанию `,(0,c.jsx)(n.code,{children:`false`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getClassName(): string`}),` — Возвращает имя CSS-класса, используемое для выделения совпадений (по умолчанию `,(0,c.jsx)(n.code,{children:`'sys-search-selection'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`настройка-сеттеры`,children:`Настройка (Сеттеры)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setOptions(options: SearchOptions): this`}),` — Устанавливает новые опции поиска и возвращает текущий экземпляр для цепочки вызовов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`searchoptions`,children:`SearchOptions`}),`
`,(0,c.jsx)(n.p,{children:`Основной объект конфигурации для системы поиска. Все поля необязательны:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`limit?: number`}),` — минимальное количество символов для запуска поиска. По умолчанию: `,(0,c.jsx)(n.code,{children:`2`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`returnEverything?: boolean`}),` — если `,(0,c.jsx)(n.code,{children:`true`}),`, возвращает все элементы независимо от совпадения. По умолчанию: `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`delay?: number`}),` — задержка перед выполнением поиска в миллисекундах. По умолчанию: `,(0,c.jsx)(n.code,{children:`0`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`findExactMatch?: boolean`}),` — включает режим точного совпадения слов. По умолчанию: `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`classSearchName?: string`}),` — CSS класс для выделения совпадений. По умолчанию: `,(0,c.jsx)(n.code,{children:`'sys-search-selection'`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
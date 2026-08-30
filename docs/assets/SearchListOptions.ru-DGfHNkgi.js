import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/SearchListOptions - Управление Опциями Списка Поиска`}),`
`,(0,c.jsx)(t.h1,{id:`класс-searchlistoptions`,children:`Класс SearchListOptions`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`SearchListOptions`}),` отвечает за управление и предоставление доступа к параметрам конфигурации, используемым в системе `,(0,c.jsx)(t.code,{children:`SearchList`}),`. Он гарантирует использование значений по умолчанию, когда конкретные параметры не указаны.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Централизованная конфигурация`}),` — предоставляет единую точку доступа ко всем настройкам, связанным с поиском.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Обработка значений по умолчанию`}),` — автоматически применяет разумные параметры (например, лимит, задержку), если они отсутствуют в предоставленных опциях.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Fluent Interface`}),` — поддерживает цепочку вызовов для установки новых опций.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(t.code,{children:`SearchListOptions(options)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: SearchOptions`}),` — объект, содержащий конфигурацию поиска.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions({
  limit: 3,
  delay: 300,
  findExactMatch: true
})

console.log(options.getLimit()) // 3
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`информационные`,children:`Информационные`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getOptions(): SearchOptions`}),` — Возвращает текущий объект настроек поиска.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLimit(): number`}),` — Возвращает минимальное количество символов, необходимое для запуска поиска (по умолчанию `,(0,c.jsx)(t.code,{children:`2`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getReturnEverything(): boolean`}),` — Возвращает, следует ли возвращать все элементы, даже если они не соответствуют поисковому запросу (по умолчанию `,(0,c.jsx)(t.code,{children:`false`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDelay(): number`}),` — Возвращает задержку поиска в миллисекундах (по умолчанию `,(0,c.jsx)(t.code,{children:`0`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFindExactMatch(): boolean`}),` — Возвращает, следует ли выполнять поиск с точным совпадением (по умолчанию `,(0,c.jsx)(t.code,{children:`false`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getClassName(): string`}),` — Возвращает имя CSS-класса, используемое для выделения совпадений (по умолчанию `,(0,c.jsx)(t.code,{children:`'sys-search-selection'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`настройка-сеттеры`,children:`Настройка (Сеттеры)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setOptions(options: SearchOptions): this`}),` — Устанавливает новые опции поиска и возвращает текущий экземпляр для цепочки вызовов.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h3,{id:`searchoptions`,children:`SearchOptions`}),`
`,(0,c.jsx)(t.p,{children:`Основной объект конфигурации для системы поиска. Все поля необязательны:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit?: number`}),` — минимальное количество символов для запуска поиска. По умолчанию: `,(0,c.jsx)(t.code,{children:`2`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`returnEverything?: boolean`}),` — если `,(0,c.jsx)(t.code,{children:`true`}),`, возвращает все элементы независимо от совпадения. По умолчанию: `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`delay?: number`}),` — задержка перед выполнением поиска в миллисекундах. По умолчанию: `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`findExactMatch?: boolean`}),` — включает режим точного совпадения слов. По умолчанию: `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`classSearchName?: string`}),` — CSS класс для выделения совпадений. По умолчанию: `,(0,c.jsx)(t.code,{children:`'sys-search-selection'`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Composables/useSearchRef - Поиск по списку`}),`
`,(0,c.jsx)(t.h1,{id:`usesearchref`,children:(0,c.jsx)(t.code,{children:`useSearchRef`})}),`
`,(0,c.jsx)(t.p,{children:`Composable для реализации логики поиска и фильтрации по списку данных с поддержкой реактивности и подсветки совпадений.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: SearchListInput<T>`}),` — исходный список данных (массив, Ref или функция, возвращающая массив/Ref).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`columns?: SearchColumnsInput<T, K>`}),` — список колонок (ключей объекта), по которым выполняется поиск (массив, Ref или функция, возвращающая массив/Ref).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: Ref<string>`}),` — внешняя реактивная ссылка на строку поиска. Если не передана, создается внутренняя.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: SearchOptions`}),` — настройки поиска:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit?: number`}),` — минимальное количество символов для активации поиска. По умолчанию: `,(0,c.jsx)(t.code,{children:`2`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`delay?: number`}),` — задержка (debounce) перед выполнением поиска в мс. По умолчанию: `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`findExactMatch?: boolean`}),` — если `,(0,c.jsx)(t.code,{children:`true`}),`, выполняется поиск по точной фразе. Если `,(0,c.jsx)(t.code,{children:`false`}),` (по умолчанию), поиск находит элементы, содержащие все введенные слова в любом порядке.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`returnEverything?: boolean`}),` — если `,(0,c.jsx)(t.code,{children:`true`}),`, возвращает все элементы списка (неподходящие пометки `,(0,c.jsx)(t.code,{children:`searchActive: false`}),`). Если `,(0,c.jsx)(t.code,{children:`false`}),`, возвращает только найденные.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`classSearchName?: string`}),` — CSS класс для подсветки совпадений. По умолчанию: `,(0,c.jsx)(t.code,{children:`sys-search-selection`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSearch: ComputedRef<boolean>`}),` — активен ли поиск в данный момент (проверка лимита символов).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`search: Ref<string>`}),` — текущая строка поиска.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loading: Ref<boolean>`}),` — статус загрузки (активен во время задержки `,(0,c.jsx)(t.code,{children:`delay`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listSearch: ComputedRef<SearchFormatList<T, K>>`}),` — отфильтрованный и отформатированный список результатов. Каждому элементу добавляются поля вида `,(0,c.jsx)(t.code,{children:`{column}Search`}),` с HTML-подсветкой и флаг `,(0,c.jsx)(t.code,{children:`searchActive`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.h2,{id:`архитектура-ленивые-computed-динамические-геттеры`,children:[`Архитектура: ленивые `,(0,c.jsx)(t.code,{children:`computed`}),` (Динамические геттеры)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Композибл специально спроектирован так, чтобы возвращать `,(0,c.jsx)(t.code,{children:`isSearch`}),` и `,(0,c.jsx)(t.code,{children:`listSearch`}),` как нативные JS-геттеры.
Это позволяет вызывать `,(0,c.jsx)(t.code,{children:`useSearchRef()`}),` `,(0,c.jsx)(t.strong,{children:`вне жизненного цикла компонента Vue`}),` (например, глобально в сервисе или в Store).
Настоящие объекты `,(0,c.jsx)(t.code,{children:`ComputedRef`}),` создаются (и привязываются к компоненту) ровно в тот момент, когда компонент обращается к ним при деструктуризации:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// Геттеры сработают 1 раз при деструктуризации в setup(), Vue закэширует ComputedRef
const { search, listSearch, isSearch } = useSearchRef(items, ['name'])
`})}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Важно`}),`: Из-за этой архитектуры избегайте обращения к геттерам "через точку" множество раз. Всегда деструктурируйте результат один раз на уровне `,(0,c.jsx)(t.code,{children:`setup`}),`, чтобы избежать создания множества дублирующих `,(0,c.jsx)(t.code,{children:`computed`}),` экземпляров.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useSearchRef } from '@dxtmisha/functional'

const items = [
  { id: 1, name: 'Apple', category: 'Fruit' },
  { id: 2, name: 'Banana', category: 'Fruit' },
  { id: 3, name: 'Carrot', category: 'Vegetable' }
]

const { 
  search, 
  listSearch, 
  loading 
} = useSearchRef(items, ['name', 'category'], undefined, {
  delay: 300,
  limit: 2
})

// При вводе "app" в search.value:
// listSearch.value будет содержать { ..., nameSearch: '<span...>App</span>le', searchActive: true }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
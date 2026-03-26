import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Composables/useSearchRef - Поиск по списку`}),`
`,(0,c.jsx)(n.h1,{id:`usesearchref`,children:(0,c.jsx)(n.code,{children:`useSearchRef`})}),`
`,(0,c.jsx)(n.p,{children:`Composable для реализации логики поиска и фильтрации по списку данных с поддержкой реактивности и подсветки совпадений.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: SearchListInput<T>`}),` — исходный список данных (массив, Ref или функция, возвращающая массив).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`columns: K`}),` — список колонок (ключей объекта), по которым необходимо выполнять поиск.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: Ref<string>`}),` — внешняя реактивная ссылка на строку поиска. Если не передана, создается внутренняя.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: SearchOptions`}),` — настройки поиска:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`limit?: number`}),` — минимальное количество символов для активации поиска. По умолчанию: `,(0,c.jsx)(n.code,{children:`2`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`delay?: number`}),` — задержка (debounce) перед выполнением поиска в мс. По умолчанию: `,(0,c.jsx)(n.code,{children:`0`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`findExactMatch?: boolean`}),` — если `,(0,c.jsx)(n.code,{children:`true`}),`, выполняется поиск по точной фразе. Если `,(0,c.jsx)(n.code,{children:`false`}),` (по умолчанию), поиск находит элементы, содержащие все введенные слова в любом порядке.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`returnEverything?: boolean`}),` — если `,(0,c.jsx)(n.code,{children:`true`}),`, возвращает все элементы списка (неподходящие пометки `,(0,c.jsx)(n.code,{children:`searchActive: false`}),`). Если `,(0,c.jsx)(n.code,{children:`false`}),`, возвращает только найденные.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`classSearchName?: string`}),` — CSS класс для подсветки совпадений. По умолчанию: `,(0,c.jsx)(n.code,{children:`sys-search-selection`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSearch: ComputedRef<boolean>`}),` — активен ли поиск в данный момент (проверка лимита символов).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`search: Ref<string>`}),` — текущая строка поиска.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — статус загрузки (активен во время задержки `,(0,c.jsx)(n.code,{children:`delay`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listSearch: ComputedRef<SearchFormatList<T, K>>`}),` — отфильтрованный и отформатированный список результатов. Каждому элементу добавляются поля вида `,(0,c.jsx)(n.code,{children:`{column}Search`}),` с HTML-подсветкой и флаг `,(0,c.jsx)(n.code,{children:`searchActive`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.h2,{id:`архитектура-ленивые-computed-динамические-геттеры`,children:[`Архитектура: ленивые `,(0,c.jsx)(n.code,{children:`computed`}),` (Динамические геттеры)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Композибл специально спроектирован так, чтобы возвращать `,(0,c.jsx)(n.code,{children:`isSearch`}),` и `,(0,c.jsx)(n.code,{children:`listSearch`}),` как нативные JS-геттеры.
Это позволяет вызывать `,(0,c.jsx)(n.code,{children:`useSearchRef()`}),` `,(0,c.jsx)(n.strong,{children:`вне жизненного цикла компонента Vue`}),` (например, глобально в сервисе или в Store).
Настоящие объекты `,(0,c.jsx)(n.code,{children:`ComputedRef`}),` создаются (и привязываются к компоненту) ровно в тот момент, когда компонент обращается к ним при деструктуризации:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// Геттеры сработают 1 раз при деструктуризации в setup(), Vue закэширует ComputedRef
const { search, listSearch, isSearch } = useSearchRef(items, ['name'])
`})}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Важно`}),`: Из-за этой архитектуры избегайте обращения к геттерам "через точку" множество раз. Всегда деструктурируйте результат один раз на уровне `,(0,c.jsx)(n.code,{children:`setup`}),`, чтобы избежать создания множества дублирующих `,(0,c.jsx)(n.code,{children:`computed`}),` экземпляров.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useSearchRef } from '@dxtmisha/functional'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
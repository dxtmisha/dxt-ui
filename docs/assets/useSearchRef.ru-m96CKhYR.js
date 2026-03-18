import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(c){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/ru/functional/Composables/useSearchRef - Поиск по списку"}),`
`,e.jsx(n.h1,{id:"usesearchref",children:e.jsx(n.code,{children:"useSearchRef"})}),`
`,e.jsx(n.p,{children:"Composable для реализации логики поиска и фильтрации по списку данных с поддержкой реактивности и подсветки совпадений."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"list: SearchListInput<T>"})," — исходный список данных (массив, Ref или функция, возвращающая массив)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"columns: K"})," — список колонок (ключей объекта), по которым необходимо выполнять поиск."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: Ref<string>"})," — внешняя реактивная ссылка на строку поиска. Если не передана, создается внутренняя."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: SearchOptions"})," — настройки поиска:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"limit?: number"})," — минимальное количество символов для активации поиска. По умолчанию: ",e.jsx(n.code,{children:"2"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"delay?: number"})," — задержка (debounce) перед выполнением поиска в мс. По умолчанию: ",e.jsx(n.code,{children:"0"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"findExactMatch?: boolean"})," — если ",e.jsx(n.code,{children:"true"}),", выполняется поиск по точной фразе. Если ",e.jsx(n.code,{children:"false"})," (по умолчанию), поиск находит элементы, содержащие все введенные слова в любом порядке."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"returnEverything?: boolean"})," — если ",e.jsx(n.code,{children:"true"}),", возвращает все элементы списка (неподходящие пометки ",e.jsx(n.code,{children:"searchActive: false"}),"). Если ",e.jsx(n.code,{children:"false"}),", возвращает только найденные."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"classSearchName?: string"})," — CSS класс для подсветки совпадений. По умолчанию: ",e.jsx(n.code,{children:"sys-search-selection"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возвращает:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isSearch: ComputedRef<boolean>"})," — активен ли поиск в данный момент (проверка лимита символов)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"search: Ref<string>"})," — текущая строка поиска."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"loading: Ref<boolean>"})," — статус загрузки (активен во время задержки ",e.jsx(n.code,{children:"delay"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"listSearch: ComputedRef<SearchFormatList<T, K>>"})," — отфильтрованный и отформатированный список результатов. Каждому элементу добавляются поля вида ",e.jsx(n.code,{children:"{column}Search"})," с HTML-подсветкой и флаг ",e.jsx(n.code,{children:"searchActive"}),"."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"архитектура-ленивые-computed-динамические-геттеры",children:["Архитектура: ленивые ",e.jsx(n.code,{children:"computed"})," (Динамические геттеры)"]}),`
`,e.jsxs(n.p,{children:["Композибл специально спроектирован так, чтобы возвращать ",e.jsx(n.code,{children:"isSearch"})," и ",e.jsx(n.code,{children:"listSearch"}),` как нативные JS-геттеры.
Это позволяет вызывать `,e.jsx(n.code,{children:"useSearchRef()"})," ",e.jsx(n.strong,{children:"вне жизненного цикла компонента Vue"}),` (например, глобально в сервисе или в Store).
Настоящие объекты `,e.jsx(n.code,{children:"ComputedRef"})," создаются (и привязываются к компоненту) ровно в тот момент, когда компонент обращается к ним при деструктуризации:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Геттеры сработают 1 раз при деструктуризации в setup(), Vue закэширует ComputedRef
const { search, listSearch, isSearch } = useSearchRef(items, ['name'])
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Важно"}),': Из-за этой архитектуры избегайте обращения к геттерам "через точку" множество раз. Всегда деструктурируйте результат один раз на уровне ',e.jsx(n.code,{children:"setup"}),", чтобы избежать создания множества дублирующих ",e.jsx(n.code,{children:"computed"})," экземпляров."]}),`
`]}),`
`,e.jsx(n.h2,{id:"пример-использования",children:"Пример использования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useSearchRef } from '@dxtmisha/functional'

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
`})})]})}function x(c={}){const{wrapper:n}={...r(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(s,{...c})}):s(c)}export{x as default};

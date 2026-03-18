import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/functional-basic/Classes/SearchListOptions - Управление Опциями Списка Поиска"}),`
`,n.jsx(e.h1,{id:"класс-searchlistoptions",children:"Класс SearchListOptions"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"SearchListOptions"})," отвечает за управление и предоставление доступа к параметрам конфигурации, используемым в системе ",n.jsx(e.code,{children:"SearchList"}),". Он гарантирует использование значений по умолчанию, когда конкретные параметры не указаны."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Централизованная конфигурация"})," — предоставляет единую точку доступа ко всем настройкам, связанным с поиском."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Обработка значений по умолчанию"})," — автоматически применяет разумные параметры (например, лимит, задержку), если они отсутствуют в предоставленных опциях."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Fluent Interface"})," — поддерживает цепочку вызовов для установки новых опций."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Для инициализации объекта вызовите конструктор ",n.jsx(e.code,{children:"SearchListOptions(options)"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: SearchOptions"})," — объект, содержащий конфигурацию поиска."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions({
  limit: 3,
  delay: 300,
  findExactMatch: true
})

console.log(options.getLimit()) // 3
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"информационные",children:"Информационные"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getOptions(): SearchOptions"})," — Возвращает текущий объект настроек поиска."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getLimit(): number"})," — Возвращает минимальное количество символов, необходимое для запуска поиска (по умолчанию ",n.jsx(e.code,{children:"2"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getReturnEverything(): boolean"})," — Возвращает, следует ли возвращать все элементы, даже если они не соответствуют поисковому запросу (по умолчанию ",n.jsx(e.code,{children:"false"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getDelay(): number"})," — Возвращает задержку поиска в миллисекундах (по умолчанию ",n.jsx(e.code,{children:"0"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getFindExactMatch(): boolean"})," — Возвращает, следует ли выполнять поиск с точным совпадением (по умолчанию ",n.jsx(e.code,{children:"false"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getClassName(): string"})," — Возвращает имя CSS-класса, используемое для выделения совпадений (по умолчанию ",n.jsx(e.code,{children:"'sys-search-selection'"}),")."]}),`
`]}),`
`,n.jsx(e.h3,{id:"настройка-сеттеры",children:"Настройка (Сеттеры)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setOptions(options: SearchOptions): this"})," — Устанавливает новые опции поиска и возвращает текущий экземпляр для цепочки вызовов."]}),`
`]}),`
`,n.jsx(e.h2,{id:"типы",children:"Типы"}),`
`,n.jsx(e.h3,{id:"searchoptions",children:"SearchOptions"}),`
`,n.jsx(e.p,{children:"Основной объект конфигурации для системы поиска. Все поля необязательны:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"limit?: number"})," — минимальное количество символов для запуска поиска. По умолчанию: ",n.jsx(e.code,{children:"2"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"returnEverything?: boolean"})," — если ",n.jsx(e.code,{children:"true"}),", возвращает все элементы независимо от совпадения. По умолчанию: ",n.jsx(e.code,{children:"false"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"delay?: number"})," — задержка перед выполнением поиска в миллисекундах. По умолчанию: ",n.jsx(e.code,{children:"0"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"findExactMatch?: boolean"})," — включает режим точного совпадения слов. По умолчанию: ",n.jsx(e.code,{children:"false"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"classSearchName?: string"})," — CSS класс для выделения совпадений. По умолчанию: ",n.jsx(e.code,{children:"'sys-search-selection'"}),"."]}),`
`]})]})}function j(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{j as default};

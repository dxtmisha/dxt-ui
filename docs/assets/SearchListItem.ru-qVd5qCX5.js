import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/functional-basic/Classes/SearchListItem - Управление Элементом Поиска"}),`
`,n.jsx(e.h1,{id:"класс-searchlistitem",children:"Класс SearchListItem"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"SearchListItem"})," представляет текущее состояние ввода поиска. Он управляет значением для поиска и определяет, следует ли запускать операцию поиска на основе настроенных параметров."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Управление значением"})," — предоставляет удобные методы для получения и установки строки поиска."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Логика активации"})," — определяет, должен ли быть запущен поиск, основываясь на длине строки поиска."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Типизация"})," — включает Type Guards для проверки заполненности значения."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Для инициализации объекта вызовите конструктор ",n.jsx(e.code,{children:"SearchListItem(value, options)"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: string | undefined"})," — начальное значение поиска."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options: SearchListOptions"})," — экземпляр ",n.jsx(e.code,{children:"SearchListOptions"})," для получения лимита поиска."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { SearchListItem, SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions({ limit: 3 })
const item = new SearchListItem('he', options)

console.log(item.isSearch()) // false (длина < 3)
item.set('hello')
console.log(item.isSearch()) // true (длина >= 3)
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"информационные",children:"Информационные"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"is(): boolean"})," — Проверяет, что текущее значение не является пустым или undefined."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isSearch(): boolean"})," — Проверяет, следует ли выполнять поиск (значение существует И длина >= лимита)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"get(): string"})," — Возвращает текущее значение поиска в виде строки."]}),`
`]}),`
`,n.jsx(e.h3,{id:"настройка-сеттеры",children:"Настройка (Сеттеры)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"set(value?: string): this"})," — Устанавливает новое значение поиска и возвращает текущий экземпляр."]}),`
`]}),`
`,n.jsx(e.h2,{id:"активация-поиска",children:"Активация поиска"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"SearchListItem"})," выступает в роли фильтра, который определяет, должна ли система поиска начать обработку данных. Это реализуется через метод ",n.jsx(e.code,{children:"isSearch()"}),", который использует опцию ",n.jsx(e.code,{children:"limit"})," из ",n.jsx(e.code,{children:"SearchListOptions"}),"."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Минимальная длина (",n.jsx(e.code,{children:"limit"}),")"]}),": Поиск считается активным только в том случае, если количество символов в строке поиска больше или равно установленному лимиту."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Поведение по умолчанию"}),": По умолчанию лимит равен ",n.jsx(e.code,{children:"2"}),". Это означает, что поиск по букве ",n.jsx(e.code,{children:'"а"'})," не запустит процесс сопоставления, а по ",n.jsx(e.code,{children:'"ад"'})," или ",n.jsx(e.code,{children:'"админ"'})," — запустит."]}),`
`]}),`
`,n.jsx(e.p,{children:'Эта логика помогает избежать лишних вычислений и "шумных" результатов, когда пользователь ввел только один символ.'})]})}function j(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{j as default};

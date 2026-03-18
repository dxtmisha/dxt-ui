import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/functional-basic/Classes/SearchListMatcher - Логика Сопоставления Поиска"}),`
`,n.jsx(e.h1,{id:"класс-searchlistmatcher",children:"Класс SearchListMatcher"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"SearchListMatcher"})," отвечает за основную логику сопоставления. Он преобразует текущую строку поиска в регулярное выражение и предоставляет методы для проверки соответствия различных значений данных этому выражению."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Динамическая генерация RegExp"})," — автоматически создает или сбрасывает сопоставитель при изменении поискового запроса или опций."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Режимы поиска"})," — поддерживает как стандартный частичный поиск, так и режим точного совпадения на основе ",n.jsx(e.code,{children:"SearchListOptions"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Эффективная проверка"})," — использует высокопроизводительные методы регулярных выражений для поиска совпадений в данных."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Для инициализации объекта вызовите конструктор ",n.jsx(e.code,{children:"SearchListMatcher(item, options)"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item: SearchListItem"})," — состояние элемента поиска, содержащее значение."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options: SearchListOptions"})," — параметры конфигурации (например, ",n.jsx(e.code,{children:"findExactMatch"}),")."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { SearchListMatcher, SearchListItem, SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions({ findExactMatch: false })
const item = new SearchListItem('admin', options)
const matcher = new SearchListMatcher(item, options)

console.log(matcher.isSelection('System Administrator')) // true
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"информационные",children:"Информационные"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"is(): boolean"})," — Проверяет, инициализировано ли внутреннее регулярное выражение."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isSelection(value: string): boolean"})," — Проверяет, соответствует ли данное значение текущему поисковому выражению."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"get(): RegExp | undefined"})," — Возвращает текущий экземпляр регулярного выражения."]}),`
`]}),`
`,n.jsx(e.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"update(): void"})," — Переинициализирует сопоставитель на основе текущего состояния элемента поиска и опций."]}),`
`]}),`
`,n.jsx(e.h2,{id:"режимы-поиска",children:"Режимы поиска"}),`
`,n.jsxs(e.p,{children:["Класс поддерживает два основных режима сопоставления, которые управляются опцией ",n.jsx(e.code,{children:"findExactMatch"})," в ",n.jsx(e.code,{children:"SearchListOptions"}),":"]}),`
`,n.jsx(e.h3,{id:"1-содержит-все-слова-по-умолчанию",children:"1. Содержит все слова (По умолчанию)"}),`
`,n.jsxs(e.p,{children:["Когда ",n.jsx(e.code,{children:"findExactMatch"})," установлено в ",n.jsx(e.code,{children:"false"}),", строка поиска разбивается на отдельные слова. Совпадение считается найденным только если ",n.jsx(e.strong,{children:"каждое слово"})," присутствует в целевой строке, независимо от их порядка."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Пример"}),": Поиск ",n.jsx(e.code,{children:'"игровая мышь"'})," найдет и ",n.jsx(e.code,{children:'"Мышь игровая"'}),", и ",n.jsx(e.code,{children:'"Игровая профессиональная мышь"'}),"."]}),`
`]}),`
`,n.jsx(e.h3,{id:"2-точная-фраза",children:"2. Точная фраза"}),`
`,n.jsxs(e.p,{children:["Когда ",n.jsx(e.code,{children:"findExactMatch"})," установлено в ",n.jsx(e.code,{children:"true"}),", строка поиска рассматривается как единая непрерывная фраза. Совпадение считается найденным только если ",n.jsx(e.strong,{children:"точная последовательность"})," символов (без учета регистра) присутствует в целевой строке."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Пример"}),": Поиск ",n.jsx(e.code,{children:'"игровая мышь"'})," найдет ",n.jsx(e.code,{children:'"Классная игровая мышь"'}),", но ",n.jsx(e.strong,{children:"не найдет"})," ",n.jsx(e.code,{children:'"Мышь для игровой приставки"'}),"."]}),`
`]})]})}function j(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{j as default};

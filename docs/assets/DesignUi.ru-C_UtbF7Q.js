import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function e(s){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/DesignUi - Оркестратор UI-инфраструктуры"}),`
`,n.jsx(i.h1,{id:"класс-designui",children:"Класс DesignUi"}),`
`,n.jsxs(i.p,{children:["Класс ",n.jsx(i.code,{children:"DesignUi"})," — это центральный оркестратор, отвечающий за инициализацию и синхронизацию всей инфраструктуры UI-библиотеки. Он координирует высокоуровневые задачи, такие как пересборка стилей, генерация документации, обновление архитектуры компонентов и настройка метаданных дистрибутива пакета."]}),`
`,n.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Централизованная оркестрация"})," — управляет потоком выполнения нескольких специализированных генераторов (Styles, Wiki, Components)."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Инкрементальная инициализация"})," — поддерживает инициализацию как отдельного компонента, так и всего набора библиотеки."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Управление кэшем"})," — автоматически очищает кэш свойств, гарантируя, что все сгенерированные ресурсы используют актуальные токены дизайн-системы."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Автоматическая настройка пакета"})," — динамически обновляет карту экспорта в ",n.jsx(i.code,{children:"package.json"})," для соответствия текущему состоянию сборки."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Синтез на уровне библиотеки"})," — запускает глобальные обновления для плагинов, медиа-ресурсов и определений типов во всем рабочем пространстве."]}),`
`]}),`
`,n.jsx(i.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsx(i.p,{children:"Инициализируйте оркестратор, при необходимости указав имя компонента. Если имя не указано, класс обрабатывает все компоненты, найденные в библиотеке."}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Параметры:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"name: string"})," — идентификатор конкретного компонента для обработки (необязательно, по умолчанию ",n.jsx(i.code,{children:"''"}),")."]}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { DesignUi } from '@dxtmisha/scripts'

// Для обновления всего:
const ui = new DesignUi()
ui.make()

// Для обновления конкретного компонента:
const buttonUi = new DesignUi('button')
buttonUi.make()
`})}),`
`,n.jsx(i.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(i.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"make(): void"})," — выполняет полный конвейер инициализации, последовательно запуская все обновления инфраструктуры."]}),`
`]}),`
`,n.jsx(i.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(i.h3,{id:"конвейер-инициализации-ui",children:"Конвейер инициализации UI"}),`
`,n.jsxs(i.p,{children:["При вызове ",n.jsx(i.code,{children:"make()"})," класс ",n.jsx(i.code,{children:"DesignUi"})," координирует комплексное многоэтапное обновление:"]}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Сброс окружения"}),": очищает ",n.jsx(i.code,{children:"PropertiesCache"})," для предотвращения влияния устаревших токенов на новую сборку."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Генерация инфраструктуры"}),": запускает генерацию глобальных стилей (",n.jsx(i.code,{children:"Styles"}),") и вики («DesignWiki») для подготовки визуального и документального фундамента."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Синхронизация компонентов"}),": выполняет ",n.jsx(i.code,{children:"DesignComponent"})," для целевых компонентов, разрешая их структурные метаданные и генерируя исходные файлы."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Подготовка к дистрибуции"}),": обновляет ",n.jsx(i.code,{children:"package.json"})," актуальными маппингами экспорта для CSS, SCSS и модулей скриптов."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Библиотечный синтез"}),": последовательно запускает специализированные библиотечные генераторы:",`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"LibraryMedia"}),": синхронизирует иконки и флаги."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"LibraryList"}),": компилирует реестр компонентов."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"LibraryPlugin"}),": пересобирает плагины интеграции с Vue/фреймворками."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"LibraryAiWiki"}),": генерирует оптимизированные для ИИ артефакты документации."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"LibraryTypes"}),": компилирует глобальные определения типов."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"роль-в-экосистеме",children:"Роль в экосистеме"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"DesignUi"})," служит основной точкой входа для разработчиков и автоматизированных инструментов сборки. Абстрагируя сложность десятков специализированных классов, он предоставляет стабильный интерфейс «в один клик» для поддержания синхронизации UI-библиотеки с развивающимися спецификациями дизайн-системы."]})]})}function t(s={}){const{wrapper:i}={...r(),...s.components};return i?n.jsx(i,{...s,children:n.jsx(e,{...s})}):e(s)}export{t as default};

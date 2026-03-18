import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/DesignConstructors - Менеджер конструкторов дизайна"}),`
`,n.jsx(s.h1,{id:"класс-designconstructors",children:"Класс DesignConstructors"}),`
`,n.jsxs(s.p,{children:["Класс ",n.jsx(s.code,{children:"DesignConstructors"})," выступает в роли высокоуровневого оркестратора для управления всеми конструкторами компонентов внутри дизайн-системы. Он обрабатывает массовые операции, такие как одновременное обновление всех существующих конструкторов, и управляет объединением стилей компонентов в глобальные экспорты библиотеки."]}),`
`,n.jsx(s.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Массовое управление жизненным циклом"})," — может запускать обновления для всех компонентов в директории ",n.jsx(s.code,{children:"constructors"})," или целевое обновление для конкретного компонента."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Управление кэшем"})," — автоматически очищает кэш свойств перед началом процесса генерации для обеспечения актуальности данных."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Автоматическое объединение стилей"})," — сканирует все компоненты и генерирует централизованную точку входа SCSS для глобальной библиотеки."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Обнаружение директорий"})," — автоматически идентифицирует все конструкторы компонентов, расположенные в исходном пути системы."]}),`
`]}),`
`,n.jsx(s.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsx(s.p,{children:"Для инициализации менеджера используйте конструктор. Если имя передано, операции будут ограничены этим конкретным компонентом."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"name?: string"})," — необязательный уникальный идентификатор компонента для обработки."]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`import { DesignConstructors } from '@dxtmisha/scripts'

// Менеджер для всех конструкторов
const manager = new DesignConstructors()
manager.make()

// Менеджер для конкретного компонента
const buttonManager = new DesignConstructors('button')
buttonManager.make()
`})}),`
`,n.jsx(s.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(s.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"make(): void"})," — запускает процесс генерации или обновления для одного или всех идентифицированных конструкторов и обновляет глобальные стили."]}),`
`]}),`
`,n.jsx(s.h3,{id:"информация",children:"Информация"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"getComponents(): string[]"})," — возвращает список всех идентификаторов компонентов, найденных в директории конструкторов."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"getComponentsStyle(): string[]"})," — возвращает массив инструкций SCSS ",n.jsx(s.code,{children:"@forward"})," для всех зарегистрированных компонентов."]}),`
`]}),`
`,n.jsx(s.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(s.h3,{id:"генерация-глобальных-стилей",children:"Генерация глобальных стилей"}),`
`,n.jsxs(s.p,{children:["Одной из основных обязанностей этого класса является поддержка файла ",n.jsx(s.code,{children:"style.scss"})," в корне библиотеки. Метод ",n.jsx(s.code,{children:"makeStyle()"})," выполняет следующее:"]}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Сканирование"}),": получает список всех компонентов через ",n.jsx(s.code,{children:"getComponents()"}),"."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Маппинг путей"}),": конструирует правила ",n.jsx(s.code,{children:"@forward"}),", указывающие на файл стилей каждого отдельного компонента."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Запись"}),": записывает эти правила в централизованный файл ",n.jsx(s.code,{children:"packages/library/style.scss"}),", обеспечивая доступность стилей всей дизайн-системы через один импорт."]}),`
`]}),`
`,n.jsx(s.h3,{id:"рабочий-процесс-выполнения",children:"Рабочий процесс выполнения"}),`
`,n.jsxs(s.p,{children:["При вызове ",n.jsx(s.code,{children:"make()"})," класс следует этой последовательности:"]}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Очистка"}),": очищает ",n.jsx(s.code,{children:"PropertiesCache"}),", чтобы предотвратить влияние устаревших данных на результат."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Делегирование"}),":",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["Если при инициализации было передано ",n.jsx(s.code,{children:"name"}),", создается новый ",n.jsx(s.code,{children:"DesignConstructor"})," для этого компонента и вызывается его метод ",n.jsx(s.code,{children:"make()"}),"."]}),`
`,n.jsxs(s.li,{children:["Если ",n.jsx(s.code,{children:"name"})," не было передано, класс перебирает все обнаруженные компоненты, создавая ",n.jsx(s.code,{children:"DesignConstructor"})," для каждого и запуская их обновление."]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Объединение"}),": в завершение вызывается ",n.jsx(s.code,{children:"makeStyle()"})," для синхронизации глобальных экспортов стилей с актуальным списком компонентов."]}),`
`]})]})}function j(e={}){const{wrapper:s}={...i(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(r,{...e})}):r(e)}export{j as default};

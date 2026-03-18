import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/PackageInit - Инициализатор пакета"}),`
`,n.jsx(e.h1,{id:"класс-packageinit",children:"Класс PackageInit"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"PackageInit"})," отвечает за базовую настройку структуры новых пакетов внутри дизайн-системы. Он управляет сканированием директорий и делегирует инициализацию отдельных файлов классу ",n.jsx(e.code,{children:"PackageInitItem"}),", обеспечивая согласованную настройку окружения на основе предоставленных шаблонов и типов."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматическое развертывание структуры"})," — автоматически создает необходимую иерархию папок для новых пакетов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Инициализация на основе шаблонов"})," — поддерживает различные типы пакетов и наборы шаблонов для гибкой настройки окружения."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Рекурсивная работа с директориями"})," — идентифицирует и обрабатывает пустые или новые директории в корне пакета."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Управление жизненным циклом"})," — предоставляет единую точку входа для запуска всей последовательности инициализации."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Для инициализации объекта вызовите конструктор ",n.jsx(e.code,{children:"PackageInit(type, templates, dir)"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type: string"})," — идентификатор типа пакета (например, ",n.jsx(e.code,{children:"'functional'"}),", ",n.jsx(e.code,{children:"'ui'"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"templates?: string"})," — необязательный список шаблонов (через запятую) для применения."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dir: string"})," — базовая директория, где расположены пакеты (по умолчанию ",n.jsx(e.code,{children:"UI_DIR_PACKAGES"}),")."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { PackageInit } from '@dxtmisha/scripts'

// Инициализация для 'functional' пакета с набором шаблонов
const initializer = new PackageInit('functional', 'basic,test')
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"make(): void"})," — запускает процесс инициализации для всех идентифицированных директорий по целевому пути."]}),`
`]}),`
`,n.jsx(e.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(e.h3,{id:"подробный-процесс-инициализации",children:"Подробный процесс инициализации"}),`
`,n.jsxs(e.p,{children:["Метод ",n.jsx(e.code,{children:"make()"})," следует определенной последовательности для обеспечения чистой настройки пакета:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Сканирование"}),": сканирует целевую директорию ",n.jsx(e.code,{children:"dir"})," для поиска подпапок, требующих инициализации (обычно пустых)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Делегирование"}),": для каждой найденной директории создает экземпляр ",n.jsx(e.code,{children:"PackageInitItem"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Выполнение"}),": запускает метод ",n.jsx(e.code,{children:"make()"})," у каждого ",n.jsx(e.code,{children:"PackageInitItem"}),", который отвечает за фактическое создание файлов и применение шаблонов."]}),`
`]}),`
`,n.jsx(e.h3,{id:"поиск-целевых-директорий",children:"Поиск целевых директорий"}),`
`,n.jsxs(e.p,{children:["Класс использует внутренний метод ",n.jsx(e.code,{children:"getDirs()"}),' для поиска директорий, которые являются "пустыми" (не содержат подпапок), и которые затем обрабатываются как корни новых компонентов пакета.']}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`protected getDirs(): string[] {
  return PropertiesFile.readDir(this.dir)
    .filter(
      path => PropertiesFile.readDir([this.dir, path]).length === 0
    )
}
`})})]})}function j(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{j as default};

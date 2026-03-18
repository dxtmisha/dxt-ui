import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/DesignTypescript - Анализатор метаданных типов"}),`
`,n.jsx(s.h1,{id:"класс-designtypescript",children:"Класс DesignTypescript"}),`
`,n.jsxs(s.p,{children:["Класс ",n.jsx(s.code,{children:"DesignTypescript"})," предоставляет высокоуровневую обертку вокруг TypeScript Compiler API, позволяя программно анализировать метаданные исходного кода. Он специализируется на извлечении структурированной информации из интерфейсов и псевдонимов типов, что делает его важным инструментом для генерации документации, схем валидации или оптимизированных определений типов для ИИ-помощников."]}),`
`,n.jsx(s.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Интеграция с Compiler API"})," — бесшовное взаимодействие с внутренней программой и средством проверки типов TypeScript."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Глубокое извлечение типов"})," — разрешает сложные типы свойств, литеральные объединения и опциональность."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Получение документации"})," — автоматически извлекает комментарии JSDoc для сохранения контекста, написанного разработчиком."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"AST-парсинг"})," — перемещается по абстрактному синтаксическому дереву (AST) для надежной идентификации интерфейсов и объявлений типов."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Обнаружение литеральных значений"})," — интеллектуально расширяет литеральные объединения в используемые строковые или числовые опции."]}),`
`]}),`
`,n.jsx(s.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsx(s.p,{children:"Инициализируйте анализатор, указав путь к исходному файлу TypeScript. Вы также можете указать пользовательские опции компилятора в соответствии с окружением вашего проекта."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"path: string"})," — абсолютный или относительный путь к файлу ",n.jsx(s.code,{children:".ts"})," (по умолчанию ",n.jsx(s.code,{children:"''"}),")."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"options: ts.CompilerOptions"})," — необязательная конфигурация компилятора TypeScript (по умолчанию ",n.jsx(s.code,{children:"{}"}),")."]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`import { DesignTypescript } from '@dxtmisha/scripts'

const analyzer = new DesignTypescript('src/types/component.ts')
const types = analyzer.getTypes()
`})}),`
`,n.jsx(s.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(s.h3,{id:"получение-данных",children:"Получение данных"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"getTypes(): DesignTypescriptList"})," — сканирует исходный файл и возвращает массив метаданных всех обнаруженных типов и интерфейсов."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"getType(name: string): DesignTypescriptItem | undefined"})," — получает метаданные для конкретного типа или интерфейса по его имени."]}),`
`]}),`
`,n.jsx(s.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(s.h3,{id:"рабочий-процесс-анализа-метаданных",children:"Рабочий процесс анализа метаданных"}),`
`,n.jsxs(s.p,{children:["При анализе файла ",n.jsx(s.code,{children:"DesignTypescript"})," выполняет следующие шаги:"]}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Создание программы"}),": инициализирует программу TypeScript и Type Checker для указанного файла."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Обход узлов"}),": посещает каждый узел в AST, специально разыскивая узлы ",n.jsx(s.code,{children:"TypeAliasDeclaration"})," и ",n.jsx(s.code,{children:"InterfaceDeclaration"}),"."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Разрешение свойств"}),": для каждого идентифицированного типа опрашивает Type Checker для получения его свойств (включая наследуемые)."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Синтез информации"}),": для каждого свойства строит объект метаданных, содержащий:",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Name"}),": идентификатор свойства."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Type"}),": чистое строковое представление типа (например, ",n.jsx(s.code,{children:"'string | number'"}),")."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Options"}),": если свойство является литеральным объединением, извлекает фактические значения."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Description"}),": связанный комментарий JSDoc."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"роль-в-инструментарии",children:"Роль в инструментарии"}),`
`,n.jsxs(s.p,{children:["Этот класс часто используется другими генераторами (такими как ",n.jsx(s.code,{children:"DesignTypes"})," или ",n.jsx(s.code,{children:"DesignCommand"}),") для преодоления разрыва между статическим кодом и динамической логикой. Предоставляя чистый API к сложному компилятору TypeScript, он позволяет дизайн-системе оставаться «знающей типы» во всех её автоматизированных процессах."]})]})}function p(e={}){const{wrapper:s}={...r(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{p as default};

import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(i,{title:"@dxtmisha/ru/scripts/Classes/DesignConstructor - Генератор конструктора дизайна"}),`
`,s.jsx(n.h1,{id:"класс-designconstructor",children:"Класс DesignConstructor"}),`
`,s.jsxs(n.p,{children:["Класс ",s.jsx(n.code,{children:"DesignConstructor"})," — это специализированная реализация ",s.jsx(n.code,{children:"DesignCommand"}),", ориентированная на генерацию внутренней логики и «конструкторов» компонентов. Он автоматизирует создание определений свойств, типов TypeScript и стилевых хуков, которые формируют основу поведенческого слоя компонента."]}),`
`,s.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Развертывание конструктора"})," — автоматически генерирует полный набор файлов, необходимых для реализации поведенческой логики компонента."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Автоматизация типизации"})," — создает ",s.jsx(n.code,{children:"props.ts"}),", ",s.jsx(n.code,{children:"types.ts"})," и ",s.jsx(n.code,{children:"basicTypes.ts"})," для обеспечения строгой типизации всех частей компонента."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Стилевой фундамент"})," — создает начальный файл ",s.jsx(n.code,{children:"style.scss"}),", совместимый с системой классов конструктора."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Генерация унифицированной логики"})," — создает файлы ",s.jsx(n.code,{children:".ts"})," и ",s.jsx(n.code,{children:".tsx"})," для гибкой реализации логики компонентов."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Системная интеграция"})," — автоматически обновляет ",s.jsx(n.code,{children:"package.json"})," и создает экспорты библиотеки для нового конструктора."]}),`
`]}),`
`,s.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,s.jsxs(n.p,{children:["Для инициализации экземпляра генератора используйте конструктор. Он автоматически определяет целевую директорию внутри папки ",s.jsx(n.code,{children:"src/constructors"}),"."]}),`
`,s.jsx(n.p,{children:s.jsx(n.strong,{children:"Параметры:"})}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"command: string"})," — уникальный идентификатор компонента (например, ",s.jsx(n.code,{children:"'button'"}),", ",s.jsx(n.code,{children:"'list'"}),")."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"options: Record<string, string>"})," — дополнительные параметры конфигурации в формате ключ-значение."]}),`
`]}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-typescript",children:`import { DesignConstructor } from '@dxtmisha/scripts'

const generator = new DesignConstructor('button')
generator.make()
`})}),`
`,s.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,s.jsx(n.h3,{id:"управление",children:"Управление"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"make(): void"})," — запускает полную последовательность создания директорий, генерации файлов и системной регистрации."]}),`
`]}),`
`,s.jsx(n.h2,{id:"операции",children:"Операции"}),`
`,s.jsx(n.h3,{id:"структура-генерируемых-файлов",children:"Структура генерируемых файлов"}),`
`,s.jsxs(n.p,{children:["При инициализации ",s.jsx(n.code,{children:"DesignConstructor"})," обрабатывает несколько файлов на основе шаблонов:"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"properties.json"})," — конфигурация маппинга для внутренних свойств конструктора."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"props.ts"})," — определения свойств, включая типы и значения по умолчанию."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"types.ts"})," и ",s.jsx(n.code,{children:"basicTypes.ts"})," — интерфейсы TypeScript и определения типов для состояния и конфигурации компонента."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"style.scss"})," — начальные определения стилей, связанные со структурой классов конструктора."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"Constructors.ts"})," — основной файл реализации логики."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"ConstructorsDesign.tsx"})," — реализация визуального слоя/рендеринга с использованием TSX."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"index.ts"})," — точка входа для экспортов конструктора."]}),`
`]}),`
`,s.jsx(n.h3,{id:"жизненный-цикл-выполнения",children:"Жизненный цикл выполнения"}),`
`,s.jsxs(n.p,{children:["Процесс ",s.jsx(n.code,{children:"make()"})," выполняется в строгом порядке для сохранения целостности данных:"]}),`
`,s.jsxs(n.ol,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Настройка директорий"}),": определяет и подтверждает целевой путь в директории ",s.jsx(n.code,{children:"src/constructors"}),"."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Генерация файлов"}),": последовательно вызывает специализированные методы ",s.jsx(n.code,{children:"make[File]()"})," для преобразования шаблонов в код проекта."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Внутренняя интеграция"}),": обновляет ",s.jsx(n.code,{children:"package.json"})," проекта для предоставления доступа к новому конструктору."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Публикация библиотеки"}),": генерирует файл экспорта в корневой директории библиотеки для обеспечения глобального использования."]}),`
`]})]})}function j(e={}){const{wrapper:n}={...c(),...e.components};return n?s.jsx(n,{...e,children:s.jsx(r,{...e})}):r(e)}export{j as default};

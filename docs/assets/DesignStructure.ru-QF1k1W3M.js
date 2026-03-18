import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/DesignStructure - Движок разрешения данных компонента"}),`
`,n.jsx(e.h1,{id:"класс-designstructure",children:"Класс DesignStructure"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"DesignStructure"})," является фундаментальным разрешителем данных для компонентов дизайн-системы. Он координирует чтение, кэширование и обработку структурированных данных компонента, включая свойства, иерархии CSS-классов и токены стилей. Он выступает в качестве абстрактного слоя между сырыми файлами конфигурации и движками трансформации шаблонов."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Унифицированный доступ к данным"})," — предоставляет централизованный API для получения всех метаданных, связанных с конкретным компонентом."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интеллектуальное кэширование"})," — использует ",n.jsx(e.code,{children:"PropertiesCache"})," для предотвращения избыточных операций с файловой системой и ускорения обработки нескольких компонентов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Маппинг подклассов"})," — разрешает сложные иерархии CSS-классов для рекурсивных структур компонентов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Предоставление токенов стилей"})," — извлекает и форматирует токены дизайна в формат, готовый для генерации SCSS."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Оркестрация соглашений об именовании"})," — стандартизирует именование компонентов, дизайнов и файлов во всем процессе сборки."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsx(e.p,{children:"Для инициализации разрешителя структуры укажите идентификатор компонента. Класс автоматически свяжет его с текущей конфигурацией дизайна проекта."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"component?: string"})," — идентификатор компонента (например, ",n.jsx(e.code,{children:"'button'"}),", ",n.jsx(e.code,{children:"'list'"}),"). По умолчанию: ",n.jsx(e.code,{children:"'component'"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { DesignStructure } from '@dxtmisha/scripts'

const structure = new DesignStructure('button')
const properties = structure.get()
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"получение-данных",children:"Получение данных"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"get(): DesignStructureList"})," — возвращает полный список свойств и метаданных компонента с использованием кэширования."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getClasses(): DesignStructureClassesList"})," — разрешает иерархию CSS-классов компонента."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getStyles(): string[]"})," — возвращает отформатированные токены стилей, полученные из структуры компонента."]}),`
`]}),`
`,n.jsx(e.h3,{id:"именование-и-идентификация",children:"Именование и идентификация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getDesign(): string"})," — возвращает идентификатор текущей дизайн-системы (например, ",n.jsx(e.code,{children:"'misha'"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getDesignFirst(): string"})," — возвращает идентификатор дизайна с заглавной буквы."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getComponentName(): string"})," — возвращает исходное имя компонента."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getComponentNameFirst(): string"})," — возвращает имя компонента с заглавной буквы."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getFullComponentName(): string"})," — объединяет названия дизайна и компонента (например, ",n.jsx(e.code,{children:"'MishaButton'"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getFileName(): string"})," — возвращает стандартизированное имя файла для реализации компонента."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getPathName(): string"})," — возвращает уникальный идентификатор для ключей кэша и системных путей."]}),`
`]}),`
`,n.jsx(e.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(e.h3,{id:"конвейер-разрешения-resolution-pipeline",children:"Конвейер разрешения (Resolution Pipeline)"}),`
`,n.jsxs(e.p,{children:["При запросе данных (например, через ",n.jsx(e.code,{children:"get()"})," или ",n.jsx(e.code,{children:"getClasses()"}),") класс запускает модульный процесс разрешения:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Проверка кэша"}),": сначала проверяется, существуют ли уже обработанные данные в ",n.jsx(e.code,{children:"PropertiesCache"})," под ключом, сгенерированным ",n.jsx(e.code,{children:"getPathName()"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Модульное делегирование"}),": если данные в кэше отсутствуют, выполнение «тяжелой» работы делегируется специализированным классам «Read»:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"DesignStructureRead"}),": управляет извлечением свойств и их значений."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"DesignStructureClasses"}),": управляет построением деревьев классов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"DesignStructureStyles"}),": преобразует токены в строки стилей."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Сохранение"}),": разрешенные данные сохраняются обратно в кэш для повышения производительности при последующих вызовах в течение того же цикла сборки."]}),`
`]}),`
`,n.jsx(e.h3,{id:"интеграция-с-движками-шаблонов",children:"Интеграция с движками шаблонов"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"DesignStructure"})," служит «источником истины» для таких классов, как ",n.jsx(e.code,{children:"DesignReplace"}),". Стандартизируя процесс разрешения имен и путей, он гарантирует, что каждый сгенерированный файл (Vue, TS, SCSS) использует согласованные идентификаторы и поддерживает корректные ссылки по относительным путям в рабочем пространстве."]})]})}function j(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{j as default};

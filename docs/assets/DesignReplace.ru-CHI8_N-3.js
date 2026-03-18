import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/ru/scripts/Classes/DesignReplace - Движок трансформации шаблонов"}),`
`,e.jsx(n.h1,{id:"класс-designreplace",children:"Класс DesignReplace"}),`
`,e.jsxs(n.p,{children:["Класс ",e.jsx(n.code,{children:"DesignReplace"})," — это основное ядро для преобразования необработанных шаблонов файлов в готовый к использованию исходный код проекта. Он использует специализированную систему меток для идентификации участков текста, которые должны быть динамически заменены именами компонентов, определениями свойств, типами или логикой стилизации, полученными из ",e.jsx(n.code,{children:"DesignStructure"})," компонента."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Интеллектуальное разрешение меток"})," — идентифицирует и заменяет блоки текста, ограниченные специфическими комментариями (например, ",e.jsx(n.code,{children:"// :type"})," или ",e.jsx(n.code,{children:"<!-- :props -->"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Контекстное именование"})," — автоматически преобразует универсальные плейсхолдеры, такие как ",e.jsx(n.code,{children:"[project]"}),", ",e.jsx(n.code,{children:"[design]"})," и ",e.jsx(n.code,{children:"[component]"}),", на основе конфигурации."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Внедрение типов"})," — генерирует сложные объединения типов TypeScript и интерфейсы непосредственно из метаданных свойств."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Маппинг значений по умолчанию"})," — разрешает и внедряет значения по умолчанию для свойств в объектные литералы или аргументы конструктора."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Условная генерация классов"})," — создает оптимизированные объекты привязки классов Vue/TS и маппинги селекторов CSS."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Нормализация путей"})," — автоматически разрешает относительные пути импорта в зависимости от расположения целевого файла в дереве проекта."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsx(n.p,{children:"Для инициализации движка замены передайте структуру данных компонента, идентификатор целевой метки и строку шаблона."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"structure: DesignStructure"})," — источник истины для метаданных компонента и структурных правил."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mark: string"})," — основная метка, используемая в шаблонах для идентификации компонентов (например, ",e.jsx(n.code,{children:"'button'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sample: string"})," — текстовое содержимое шаблона для модификации."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { DesignReplace } from '@dxtmisha/scripts'

const engine = new DesignReplace(structure, 'button', templateContent)
engine.replaceName().replaceType()
const output = engine.get()
`})}),`
`,e.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,e.jsx(n.h3,{id:"управление",children:"Управление"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get(): string"})," — возвращает финальную версию шаблона после всех преобразований."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getNameFile(name: string): string"})," — обрабатывает имя файла или строку для замены плейсхолдеров уровня проекта."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaceName(): this"})," — заменяет основные метки имени компонента во всем шаблоне."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replacePath(): this"})," — исправляет относительные пути (",e.jsx(n.code,{children:"../../../"}),"), чтобы они указывали на правильное корневое расположение проекта."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaceMark(name: string, data: string[], end = ''): this"})," — выполняет блочную замену для конкретной метки, внедряя массив строк."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaceOnce(name?: string, removeReplacement?: boolean | Function): this"})," — обрабатывает одноразовые маркеры замены (",e.jsx(n.code,{children:".once"}),")."]}),`
`]}),`
`,e.jsx(n.h3,{id:"автоматизация-свойств-и-типов",children:"Автоматизация свойств и типов"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaceType(constructor?: string): this"})," — генерирует и внедряет типы TypeScript для всех свойств компонента."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaceDefault(): this"})," — внедряет значения по умолчанию для свойств в шаблон."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaceProps(): this"})," — генерирует объекты определения свойств в стиле Vue."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replacePropsValues(): this"})," — создает массивы допустимых значений для свойств (enums/unions)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"стилизация-и-классы",children:"Стилизация и классы"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaceClasses(template?: Function, end = ''): this"})," — генерирует список доступных CSS-классов на основе структуры."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaceClassesValues(): this"})," — создает логику динамической привязки классов для файлов реализации логики."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaceStylesValues(): this"})," — сопоставляет свойства компонента с пользовательскими переменными CSS (CSS Variables)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaceConstructorClasses(): this"})," — специализированный генератор классов для конструкторов компонентов."]}),`
`]}),`
`,e.jsx(n.h2,{id:"операции",children:"Операции"}),`
`,e.jsx(n.h3,{id:"система-меток",children:"Система меток"}),`
`,e.jsx(n.p,{children:"Движок сканирует специфические паттерны комментариев, чтобы определить, куда внедрять код. Поддерживаются несколько стилей комментариев:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Инлайн логика"}),": ",e.jsx(n.code,{children:"// :label data"})," или ",e.jsx(n.code,{children:"/* :label */ content /* :label.end */"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Комментарии шаблонов"}),": ",e.jsx(n.code,{children:"<!-- :label --> content <!-- :label.end -->"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Специфичность свойств"}),": ",e.jsx(n.code,{children:":label.propertyName.none"})," (используется для исключения конкретных свойств из блока)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"поток-трансформации",children:"Поток трансформации"}),`
`,e.jsxs(n.p,{children:["При вызове метода замены, такого как ",e.jsx(n.code,{children:"replaceType()"}),", класс:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Сканирует"}),": находит начальный и конечный маркеры для метки ",e.jsx(n.code,{children:"type"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Обращается к структуре"}),": итерирует по свойствам в предоставленной ",e.jsx(n.code,{children:"DesignStructure"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Разрешает логику"}),": определяет правильный синтаксис TypeScript для каждого свойства на основе типа его значения (boolean, string или union)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Внедряет"}),": заменяет содержимое между маркерами новым сгенерированным кодом, сохраняя исходные отступы."]}),`
`]})]})}function j(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{j as default};

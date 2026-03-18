import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/PropertiesPath - Резолвер путей и окружения"}),`
`,e.jsx(s.h1,{id:"класс-propertiespath",children:"Класс PropertiesPath"}),`
`,e.jsxs(s.p,{children:["Класс ",e.jsx(s.code,{children:"PropertiesPath"})," — это основная утилита, отвечающая за преобразование абстрактных идентификаторов дизайна в конкретные физические пути файловой системы. Он управляет сопоставлением директорий как для глобальных токенов дизайна, так и для специфических переопределений компонентов, гарантируя согласованность обнаружения путей на разных платформах. Предоставляя кэшированные методы обхода, такие как ",e.jsx(s.code,{children:"to"})," и ",e.jsx(s.code,{children:"toAll"}),", он координирует последовательность загрузки данных для многотемных проектов, выступая в качестве основного источника информации об окружении для движка свойств."]}),`
`,e.jsx(s.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Сопоставление нескольких дизайнов"})," — автоматически сопоставляет массив названий дизайнов с соответствующими директориями токенов и компонентов."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Кроссплатформенное обнаружение корня"})," — использует ",e.jsx(s.code,{children:"PropertiesFile"})," для обеспечения абсолютности путей и их правильного разрешения в различных операционных системах."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Внутренняя оптимизация (кэширование)"})," — интегрирован с ",e.jsx(s.code,{children:"PropertiesCache"})," для минимизации избыточных обращений к файловой системе во время сложных конвейеров трансформации токенов."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Определение режима конструктора"})," — идентифицирует и обрабатывает специальный дизайн ",e.jsx(s.code,{children:"_constructor"}),", который служит общей базой для всех тем."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Гибкий обход данных"})," — предоставляет высокоуровневые обратные вызовы для обработки файлов дизайна без раскрытия деталей работы с файловой системой."]}),`
`]}),`
`,e.jsx(s.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(s.p,{children:["Для инициализации объекта вызовите конструктор ",e.jsx(s.code,{children:"PropertiesPath(designs)"}),"."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Параметры:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"designs: string[]"})," — список названий дизайнов, соответствующих именам папок в структуре проекта."]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { PropertiesPath } from '@dxtmisha/scripts'

// 1. Определение дизайнов для управления
const activeDesigns = ['basic', 'constructor', 'premium']

// 2. Создание экземпляра резолвера путей
const pathResolver = new PropertiesPath(activeDesigns)

// 3. Получение путей для конкретного дизайна
const basicPaths = pathResolver.getPath('basic')
`})}),`
`,e.jsx(s.h2,{id:"методы",children:"Методы"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"isConstructor(): boolean"})," — проверяет, включает ли текущее окружение базовый дизайн конструктора."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"getDesigns(): string[]"})," — возвращает список названий дизайнов, зарегистрированных в экземпляре."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"getPath(name): PropertiesPathItem"})," — извлекает специфические пути (глобальные и компоненты) для данного дизайна."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"getPaths(): PropertiesPathList"})," — возвращает полный реестр сопоставлений дизайнов и путей."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"to(name, design, callback): T"})," — выполняет кэшированный обратный вызов трансформации для конкретного дизайна."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"toAll(name, callback): T"})," — координирует глобальную кэшированную трансформацию для всех зарегистрированных дизайнов."]}),`
`]}),`
`,e.jsx(s.h2,{id:"операции",children:"Операции"}),`
`,e.jsx(s.h3,{id:"поток-обнаружения-окружения-и-кэширования",children:"Поток обнаружения окружения и кэширования"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"PropertiesPath"})," управляет сопоставлением между высокоуровневой логикой и физическим хранилищем:"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Агрегация директорий"}),": При создании экземпляра класс нормализует названия дизайнов в kebab-case и использует внутреннюю логику ",e.jsx(s.code,{children:"getDir"})," для синтеза абсолютных путей к ",e.jsx(s.code,{children:"UI_DIRS_TOKENS"})," и ",e.jsx(s.code,{children:"UI_DIRS_COMPONENTS"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Изоляция дизайна"}),": Класс различает стандартные темы и ",e.jsx(s.code,{children:"_constructor"}),". Если дизайн помечен как конструктор, стандартное обнаружение директорий обходится для обеспечения специализированной обработки базового слоя."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Кэшированная трансформация"}),": При вызове ",e.jsx(s.code,{children:"to()"})," или ",e.jsx(s.code,{children:"toAll()"})," класс не просто возвращает пути — он пытается получить ранее обработанные данные из ",e.jsx(s.code,{children:"PropertiesCache"}),". Если данные в кэше отсутствуют, выполняется предоставленный callback с разрешенными путями, а новый результат прозрачно сохраняется."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Синтез унифицированной иерархии"}),": Через ",e.jsx(s.code,{children:"toAll()"})," класс реализует паттерн «слияния вверх», когда токены из нескольких дизайнов (например, ",e.jsx(s.code,{children:"constructor"})," + ",e.jsx(s.code,{children:"basic"})," + ",e.jsx(s.code,{children:"local-theme"}),") извлекаются последовательно и объединяются в единую иерархическую структуру с помощью ",e.jsx(s.code,{children:"replaceRecursive"}),"."]}),`
`]})]})}function j(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{j as default};

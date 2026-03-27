import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/PropertiesPath - Резолвер путей и окружения`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiespath`,children:`Класс PropertiesPath`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesPath`}),` — это основная утилита, отвечающая за преобразование абстрактных идентификаторов дизайна в конкретные физические пути файловой системы. Он управляет сопоставлением директорий как для глобальных токенов дизайна, так и для специфических переопределений компонентов, гарантируя согласованность обнаружения путей на разных платформах. Предоставляя кэшированные методы обхода, такие как `,(0,c.jsx)(n.code,{children:`to`}),` и `,(0,c.jsx)(n.code,{children:`toAll`}),`, он координирует последовательность загрузки данных для многотемных проектов, выступая в качестве основного источника информации об окружении для движка свойств.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сопоставление нескольких дизайнов`}),` — автоматически сопоставляет массив названий дизайнов с соответствующими директориями токенов и компонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кроссплатформенное обнаружение корня`}),` — использует `,(0,c.jsx)(n.code,{children:`PropertiesFile`}),` для обеспечения абсолютности путей и их правильного разрешения в различных операционных системах.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Внутренняя оптимизация (кэширование)`}),` — интегрирован с `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` для минимизации избыточных обращений к файловой системе во время сложных конвейеров трансформации токенов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Определение режима конструктора`}),` — идентифицирует и обрабатывает специальный дизайн `,(0,c.jsx)(n.code,{children:`_constructor`}),`, который служит общей базой для всех тем.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Гибкий обход данных`}),` — предоставляет высокоуровневые обратные вызовы для обработки файлов дизайна без раскрытия деталей работы с файловой системой.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`PropertiesPath(designs)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`designs: string[]`}),` — список названий дизайнов, соответствующих именам папок в структуре проекта.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesPath } from '@dxtmisha/scripts'

// 1. Определение дизайнов для управления
const activeDesigns = ['basic', 'constructor', 'premium']

// 2. Создание экземпляра резолвера путей
const pathResolver = new PropertiesPath(activeDesigns)

// 3. Получение путей для конкретного дизайна
const basicPaths = pathResolver.getPath('basic')
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isConstructor(): boolean`}),` — проверяет, включает ли текущее окружение базовый дизайн конструктора.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDesigns(): string[]`}),` — возвращает список названий дизайнов, зарегистрированных в экземпляре.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPath(name): PropertiesPathItem`}),` — извлекает специфические пути (глобальные и компоненты) для данного дизайна.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPaths(): PropertiesPathList`}),` — возвращает полный реестр сопоставлений дизайнов и путей.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`to(name, design, callback): T`}),` — выполняет кэшированный обратный вызов трансформации для конкретного дизайна.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toAll(name, callback): T`}),` — координирует глобальную кэшированную трансформацию для всех зарегистрированных дизайнов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`поток-обнаружения-окружения-и-кэширования`,children:`Поток обнаружения окружения и кэширования`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesPath`}),` управляет сопоставлением между высокоуровневой логикой и физическим хранилищем:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Агрегация директорий`}),`: При создании экземпляра класс нормализует названия дизайнов в kebab-case и использует внутреннюю логику `,(0,c.jsx)(n.code,{children:`getDir`}),` для синтеза абсолютных путей к `,(0,c.jsx)(n.code,{children:`UI_DIRS_TOKENS`}),` и `,(0,c.jsx)(n.code,{children:`UI_DIRS_COMPONENTS`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Изоляция дизайна`}),`: Класс различает стандартные темы и `,(0,c.jsx)(n.code,{children:`_constructor`}),`. Если дизайн помечен как конструктор, стандартное обнаружение директорий обходится для обеспечения специализированной обработки базового слоя.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэшированная трансформация`}),`: При вызове `,(0,c.jsx)(n.code,{children:`to()`}),` или `,(0,c.jsx)(n.code,{children:`toAll()`}),` класс не просто возвращает пути — он пытается получить ранее обработанные данные из `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),`. Если данные в кэше отсутствуют, выполняется предоставленный callback с разрешенными путями, а новый результат прозрачно сохраняется.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синтез унифицированной иерархии`}),`: Через `,(0,c.jsx)(n.code,{children:`toAll()`}),` класс реализует паттерн «слияния вверх», когда токены из нескольких дизайнов (например, `,(0,c.jsx)(n.code,{children:`constructor`}),` + `,(0,c.jsx)(n.code,{children:`basic`}),` + `,(0,c.jsx)(n.code,{children:`local-theme`}),`) извлекаются последовательно и объединяются в единую иерархическую структуру с помощью `,(0,c.jsx)(n.code,{children:`replaceRecursive`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
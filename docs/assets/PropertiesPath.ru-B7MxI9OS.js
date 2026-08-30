import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesPath - Резолвер путей и окружения`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiespath`,children:`Класс PropertiesPath`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesPath`}),` — это основная утилита, отвечающая за преобразование абстрактных идентификаторов дизайна в конкретные физические пути файловой системы. Он управляет сопоставлением директорий как для глобальных токенов дизайна, так и для специфических переопределений компонентов, гарантируя согласованность обнаружения путей на разных платформах. Предоставляя кэшированные методы обхода, такие как `,(0,c.jsx)(t.code,{children:`to`}),` и `,(0,c.jsx)(t.code,{children:`toAll`}),`, он координирует последовательность загрузки данных для многотемных проектов, выступая в качестве основного источника информации об окружении для движка свойств.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сопоставление нескольких дизайнов`}),` — автоматически сопоставляет массив названий дизайнов с соответствующими директориями токенов и компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кроссплатформенное обнаружение корня`}),` — использует `,(0,c.jsx)(t.code,{children:`PropertiesFile`}),` для обеспечения абсолютности путей и их правильного разрешения в различных операционных системах.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Внутренняя оптимизация (кэширование)`}),` — интегрирован с `,(0,c.jsx)(t.code,{children:`PropertiesCache`}),` для минимизации избыточных обращений к файловой системе во время сложных конвейеров трансформации токенов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Определение режима конструктора`}),` — идентифицирует и обрабатывает специальный дизайн `,(0,c.jsx)(t.code,{children:`_constructor`}),`, который служит общей базой для всех тем.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Гибкий обход данных`}),` — предоставляет высокоуровневые обратные вызовы для обработки файлов дизайна без раскрытия деталей работы с файловой системой.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(t.code,{children:`PropertiesPath(designs)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`designs: string[]`}),` — список названий дизайнов, соответствующих именам папок в структуре проекта.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesPath } from '@dxtmisha/scripts'

// 1. Определение дизайнов для управления
const activeDesigns = ['basic', 'constructor', 'premium']

// 2. Создание экземпляра резолвера путей
const pathResolver = new PropertiesPath(activeDesigns)

// 3. Получение путей для конкретного дизайна
const basicPaths = pathResolver.getPath('basic')
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isConstructor(): boolean`}),` — проверяет, включает ли текущее окружение базовый дизайн конструктора.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDesigns(): string[]`}),` — возвращает список названий дизайнов, зарегистрированных в экземпляре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPath(name): PropertiesPathItem`}),` — извлекает специфические пути (глобальные и компоненты) для данного дизайна.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPaths(): PropertiesPathList`}),` — возвращает полный реестр сопоставлений дизайнов и путей.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`to(name, design, callback): T`}),` — выполняет кэшированный обратный вызов трансформации для конкретного дизайна.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toAll(name, callback): T`}),` — координирует глобальную кэшированную трансформацию для всех зарегистрированных дизайнов.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(t.h3,{id:`поток-обнаружения-окружения-и-кэширования`,children:`Поток обнаружения окружения и кэширования`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`PropertiesPath`}),` управляет сопоставлением между высокоуровневой логикой и физическим хранилищем:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Агрегация директорий`}),`: При создании экземпляра класс нормализует названия дизайнов в kebab-case и использует внутреннюю логику `,(0,c.jsx)(t.code,{children:`getDir`}),` для синтеза абсолютных путей к `,(0,c.jsx)(t.code,{children:`UI_DIRS_TOKENS`}),` и `,(0,c.jsx)(t.code,{children:`UI_DIRS_COMPONENTS`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Изоляция дизайна`}),`: Класс различает стандартные темы и `,(0,c.jsx)(t.code,{children:`_constructor`}),`. Если дизайн помечен как конструктор, стандартное обнаружение директорий обходится для обеспечения специализированной обработки базового слоя.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэшированная трансформация`}),`: При вызове `,(0,c.jsx)(t.code,{children:`to()`}),` или `,(0,c.jsx)(t.code,{children:`toAll()`}),` класс не просто возвращает пути — он пытается получить ранее обработанные данные из `,(0,c.jsx)(t.code,{children:`PropertiesCache`}),`. Если данные в кэше отсутствуют, выполняется предоставленный callback с разрешенными путями, а новый результат прозрачно сохраняется.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синтез унифицированной иерархии`}),`: Через `,(0,c.jsx)(t.code,{children:`toAll()`}),` класс реализует паттерн «слияния вверх», когда токены из нескольких дизайнов (например, `,(0,c.jsx)(t.code,{children:`constructor`}),` + `,(0,c.jsx)(t.code,{children:`basic`}),` + `,(0,c.jsx)(t.code,{children:`local-theme`}),`) извлекаются последовательно и объединяются в единую иерархическую структуру с помощью `,(0,c.jsx)(t.code,{children:`replaceRecursive`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
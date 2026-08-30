import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesConfig - Оркестратор глобальной конфигурации`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiesconfig`,children:`Класс PropertiesConfig`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesConfig`}),` — это централизованная статическая утилита, отвечающая за управление рабочими параметрами дизайн-системы. Он управляет поиском и рекурсивным слиянием файлов конфигурации `,(0,c.jsx)(t.code,{children:`design-ui.json`}),`, предоставляя единый API для доступа к соглашениям об именовании, ключам интеграции ИИ и правилам маршрутизации документации во всей библиотеке.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Рекурсивное расширение`}),` — поддерживает механизм `,(0,c.jsx)(t.code,{children:`extends`}),`, позволяя конфигурациям наследовать и переопределять настройки из родительских директорий.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое обнаружение`}),` — выполняет поиск вверх по дереву каталогов для нахождения ближайшей точки входа `,(0,c.jsx)(t.code,{children:`design-ui.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Централизованные настройки`}),` — обеспечивает унифицированный доступ к идентификаторам проекта, названиям дизайна и разделителям путей.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция с ИИ`}),` — управляет учетными данными и параметрами моделей для генерации документации и кода на базе ИИ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Маршрутизация документации`}),` — настраивает целевые директории и пути Storybook для автоматизированной системы вики.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Являясь статическим классом, `,(0,c.jsx)(t.code,{children:`PropertiesConfig`}),` инициализируется автоматически при первом импорте. Вам не нужно вызывать конструктор.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesConfig } from '@dxtmisha/scripts'

// Доступ к глобальным настройкам
const designName = PropertiesConfig.getDesignName()
const separator = PropertiesConfig.getSeparator()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`общая-конфигурация`,children:`Общая конфигурация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getProjectName(): string`}),` — получает корневой идентификатор проекта.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDesignName(): string`}),` — возвращает основной идентификатор дизайн-системы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDesignAlternativeName(): string[]`}),` — возвращает альтернативные алиасы для дизайна.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPackagePrefix(): string | undefined`}),` — возвращает префикс npm-пакетов рабочего пространства.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSeparator(): string`}),` — возвращает символ-разделитель путей в токенах.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSeparatorBasicName(): string`}),` — возвращает базовое имя разделителя токенов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSeparatorLimit(): number`}),` — возвращает максимальный лимит глубины разделителя токенов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getWikiLanguage(): string`}),` — возвращает код целевого языка для документации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDistDir(): string`}),` — возвращает путь к директории сборки (dist).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFigmaToken(): string`}),` — возвращает токен доступа к Figma API.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`конфигурация-типов-и-ии`,children:`Конфигурация типов и ИИ`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTypesTemporaryDirectory(): string`}),` — возвращает путь к временной директории для компиляции деклараций типов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTypesPaths(): string[] | undefined`}),` — возвращает список исходных путей для сканирования типов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTypesMatch(): string | string[] | undefined`}),` — возвращает шаблоны соответствия файлов для сканирования типов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTypesExclude(): string | string[] | undefined`}),` — возвращает шаблоны исключения файлов при сканировании типов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTypesWithoutVue(): boolean | undefined`}),` — возвращает флаг отключения Vue-компиляции типов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isTypesWithoutVue(): boolean`}),` — проверяет, отключена ли обработка файлов Vue при генерации типов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiResourcesDir(): string`}),` — возвращает путь к директории с промптами и правилами ИИ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiType(): AiType`}),` — возвращает настроенного ИИ-провайдера.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiModel(): string`}),` — возвращает название конкретной модели ИИ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiKey(): string`}),` — возвращает API-ключ для сервиса ИИ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiConfig(): Record<string, any>`}),` — возвращает объект конфигурации клиента ИИ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiTypesConcurrency(): number`}),` — возвращает лимит параллельной обработки файлов типов через ИИ.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`ии-и-документация`,children:`ИИ и Документация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiType(): AiType`}),` — возвращает настроенного ИИ-провайдера (например, 'gemini').`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiModel(): string`}),` — возвращает название конкретной модели ИИ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAiTypesConcurrency(): number`}),` — возвращает количество одновременно обрабатываемых файлов определений типов.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(t.h3,{id:`поток-разрешения-конфигурации`,children:`Поток разрешения конфигурации`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`PropertiesConfig`}),` использует надежную стратегию для разрешения системных настроек:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поиск файла`}),`: При загрузке класс пытается найти `,(0,c.jsx)(t.code,{children:`design-ui.json`}),`, поднимаясь вверх от текущей рабочей директории (до 32 уровней).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Рекурсивное слияние`}),`: Если найденный файл содержит свойство `,(0,c.jsx)(t.code,{children:`extends`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Он рекурсивно загружает указанную родительскую конфигурацию.`}),`
`,(0,c.jsx)(t.li,{children:`Интеллектуально объединяет настройки, где локальные свойства переопределяют унаследованные.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Статическая готовность`}),`: Итоговая объединенная конфигурация сохраняется в приватном статическом поле, делая все настройки немедленно доступными через публичные геттеры.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PropertiesConfig - Оркестратор глобальной конфигурации`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiesconfig`,children:`Класс PropertiesConfig`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesConfig`}),` — это централизованная статическая утилита, отвечающая за управление рабочими параметрами дизайн-системы. Он управляет поиском и рекурсивным слиянием файлов конфигурации `,(0,c.jsx)(n.code,{children:`design-ui.json`}),`, предоставляя единый API для доступа к соглашениям об именовании, ключам интеграции ИИ и правилам маршрутизации документации во всей библиотеке.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Рекурсивное расширение`}),` — поддерживает механизм `,(0,c.jsx)(n.code,{children:`extends`}),`, позволяя конфигурациям наследовать и переопределять настройки из родительских директорий.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое обнаружение`}),` — выполняет поиск вверх по дереву каталогов для нахождения ближайшей точки входа `,(0,c.jsx)(n.code,{children:`design-ui.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Централизованные настройки`}),` — обеспечивает унифицированный доступ к идентификаторам проекта, названиям дизайна и разделителям путей.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция с ИИ`}),` — управляет учетными данными и параметрами моделей для генерации документации и кода на базе ИИ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Маршрутизация документации`}),` — настраивает целевые директории и пути Storybook для автоматизированной системы вики.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Являясь статическим классом, `,(0,c.jsx)(n.code,{children:`PropertiesConfig`}),` инициализируется автоматически при первом импорте. Вам не нужно вызывать конструктор.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesConfig } from '@dxtmisha/scripts'

// Доступ к глобальным настройкам
const designName = PropertiesConfig.getDesignName()
const separator = PropertiesConfig.getSeparator()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`общая-конфигурация`,children:`Общая конфигурация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getProjectName(): string`}),` — получает корневой идентификатор проекта.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDesignName(): string`}),` — возвращает основной идентификатор дизайн-системы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDesignAlternativeName(): string[]`}),` — возвращает альтернативные алиасы для дизайна.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSeparator(): string`}),` — возвращает символ-разделитель путей в токенах.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getWikiLanguage(): string`}),` — возвращает код целевого языка для документации.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`ии-и-документация`,children:`ИИ и Документация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAiType(): AiType`}),` — возвращает настроенного ИИ-провайдера (например, 'gemini').`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAiModel(): string`}),` — возвращает название конкретной модели ИИ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAiDocDirectory(): string[]`}),` — возвращает директории, предназначенные для генерации документации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAiDocStorybookPath(): string`}),` — возвращает путь экспорта для MDX-файлов Storybook.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`поток-разрешения-конфигурации`,children:`Поток разрешения конфигурации`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesConfig`}),` использует надежную стратегию для разрешения системных настроек:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поиск файла`}),`: При загрузке класс пытается найти `,(0,c.jsx)(n.code,{children:`design-ui.json`}),`, поднимаясь вверх от текущей рабочей директории (до 32 уровней).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Рекурсивное слияние`}),`: Если найденный файл содержит свойство `,(0,c.jsx)(n.code,{children:`extends`}),`:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Он рекурсивно загружает указанную родительскую конфигурацию.`}),`
`,(0,c.jsx)(n.li,{children:`Интеллектуально объединяет настройки, где локальные свойства переопределяют унаследованные.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Статическая готовность`}),`: Итоговая объединенная конфигурация сохраняется в приватном статическом поле, делая все настройки немедленно доступными через публичные геттеры.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
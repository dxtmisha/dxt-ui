import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/bin/dxt-constructor - Генерация конструкторов компонентов`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-constructor`,children:`dxt-constructor`}),`
`,(0,c.jsxs)(n.p,{children:[`Команда `,(0,c.jsx)(n.code,{children:`dxt-constructor`}),` обеспечивает автоматическую генерацию файлов ядра конструкторов компонентов, типов, конфигураций свойств и точек входа библиотеки в дизайн-системе. Под капотом она использует `,(0,c.jsx)(n.code,{children:`DesignConstructors`}),` и `,(0,c.jsx)(n.code,{children:`DesignConstructor`}),` для оркестрации массовой или целевой инициализации компонентов.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Целевая или массовая генерация`}),`: Может инициализировать все компоненты внутри директории конструкторов или обрабатывать конкретный компонент, переданный в качестве аргумента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Объединение стилей`}),`: Автоматически генерирует и агрегирует экспорты SCSS компонентов в централизованном файле `,(0,c.jsx)(n.code,{children:`packages/library/style.scss`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Полная генерация кода и типов`}),`: Автоматически создает файлы конфигурации свойств (`,(0,c.jsx)(n.code,{children:`properties.json`}),`), файлы типов (`,(0,c.jsx)(n.code,{children:`types.ts`}),`, `,(0,c.jsx)(n.code,{children:`basicTypes.ts`}),`), стили (`,(0,c.jsx)(n.code,{children:`style.scss`}),`), файлы кода (`,(0,c.jsx)(n.code,{children:`Constructors.ts`}),`, `,(0,c.jsx)(n.code,{children:`ConstructorsDesign.tsx`}),`) и индексный файл экспортов (`,(0,c.jsx)(n.code,{children:`index.ts`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsx)(n.p,{children:`Процесс генерации конструкторов автоматизирует интеграцию компонентов:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsx)(n.li,{children:`Скрипт определяет имя целевого компонента, переданное в качестве аргумента, либо автоматически сканирует настроенную директорию системы для получения имен всех компонентов.`}),`
`,(0,c.jsxs)(n.li,{children:[`Он очищает общий кэш свойств `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),`, чтобы гарантировать использование актуальных конфигурационных состояний при генерации.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Для каждого компонента вызывается генератор `,(0,c.jsx)(n.code,{children:`DesignConstructor`}),` для создания JSON свойств, типов свойств TypeScript, базовых типов, стилей, файлов кода и структуры индексного файла.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Он перебирает все папки компонентов для сбора их индивидуальных стилей и объединяет их в единый набор правил `,(0,c.jsx)(n.code,{children:`@forward`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Он обновляет экспорты в `,(0,c.jsx)(n.code,{children:`package.json`}),`, чтобы предоставить доступ к точкам входа компонентов, и создает файлы сопоставления библиотеки.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`настройка-и-запуск`,children:`Настройка и запуск`}),`
`,(0,c.jsx)(n.p,{children:`Для работы генератора не требуются сложные конфигурации. Инструмент спроектирован так, чтобы сканировать директории конструкторов и беспрепятственно интегрировать их в рабочую среду.`}),`
`,(0,c.jsx)(n.p,{children:`Чтобы сгенерировать все конструкторы компонентов в рабочем пространстве, выполните:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-constructor
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Чтобы сгенерировать конкретный компонент (например, `,(0,c.jsx)(n.code,{children:`Button`}),`), передайте его имя в качестве аргумента:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-constructor Button
`})}),`
`,(0,c.jsx)(n.h2,{id:`структура-генерируемых-файлов`,children:`Структура генерируемых файлов`}),`
`,(0,c.jsx)(n.p,{children:`Когда конструктор компонента инициализируется или обновляется, инструмент создает следующие файлы в его директории:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`properties.json`}),`: Содержит необработанную конфигурацию свойств компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props.ts`}),`: Определяет структуры пропсов React/Vue на основе конфигураций.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`types.ts`}),` & `,(0,c.jsx)(n.code,{children:`basicTypes.ts`}),`: Содержат стандартные типы TypeScript.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`style.scss`}),`: Управляет базовыми стилями SCSS компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Constructors.ts`}),` & `,(0,c.jsx)(n.code,{children:`ConstructorsDesign.tsx`}),`: Содержат основной код поведения конструктора.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index.ts`}),`: Экспортирует публичные интерфейсы и классы.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
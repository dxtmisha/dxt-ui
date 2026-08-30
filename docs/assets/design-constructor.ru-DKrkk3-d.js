import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/7. Команды/dxt-constructor - Генерация конструкторов компонентов`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-constructor`,children:`dxt-constructor`}),`
`,(0,c.jsxs)(t.p,{children:[`Команда `,(0,c.jsx)(t.code,{children:`dxt-constructor`}),` обеспечивает автоматическую генерацию файлов ядра конструкторов компонентов, типов, конфигураций свойств и точек входа библиотеки в дизайн-системе. Под капотом она использует `,(0,c.jsx)(t.code,{children:`DesignConstructors`}),` и `,(0,c.jsx)(t.code,{children:`DesignConstructor`}),` для оркестрации массовой или целевой инициализации компонентов.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Целевая или массовая генерация`}),`: Может инициализировать все компоненты внутри директории конструкторов или обрабатывать конкретный компонент, переданный в качестве аргумента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Объединение стилей`}),`: Автоматически генерирует и агрегирует экспорты SCSS компонентов в централизованном файле `,(0,c.jsx)(t.code,{children:`packages/library/style.scss`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Полная генерация кода и типов`}),`: Автоматически создает файлы конфигурации свойств (`,(0,c.jsx)(t.code,{children:`properties.json`}),`), файлы типов (`,(0,c.jsx)(t.code,{children:`types.ts`}),`, `,(0,c.jsx)(t.code,{children:`basicTypes.ts`}),`), стили (`,(0,c.jsx)(t.code,{children:`style.scss`}),`), файлы кода (`,(0,c.jsx)(t.code,{children:`Constructors.ts`}),`, `,(0,c.jsx)(t.code,{children:`ConstructorsDesign.tsx`}),`) и индексный файл экспортов (`,(0,c.jsx)(t.code,{children:`index.ts`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsx)(t.p,{children:`Процесс генерации конструкторов автоматизирует интеграцию компонентов:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Скрипт определяет имя целевого компонента, переданное через опцию `,(0,c.jsx)(t.code,{children:`--name`}),`, либо автоматически сканирует настроенную директорию системы для получения имен всех компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Он очищает общий кэш свойств `,(0,c.jsx)(t.code,{children:`PropertiesCache`}),`, чтобы гарантировать использование актуальных конфигурационных состояний при генерации.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Для каждого компонента вызывается генератор `,(0,c.jsx)(t.code,{children:`DesignConstructor`}),` для создания JSON свойств, типов свойств TypeScript, базовых типов, стилей, файлов кода и структуры индексного файла.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Он перебирает все папки компонентов для сбора их индивидуальных стилей и объединяет их в единый набор правил `,(0,c.jsx)(t.code,{children:`@forward`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Он обновляет экспорты в `,(0,c.jsx)(t.code,{children:`package.json`}),`, чтобы предоставить доступ к точкам входа компонентов, и создает файлы сопоставления библиотеки.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`настройка-и-запуск`,children:`Настройка и запуск`}),`
`,(0,c.jsx)(t.p,{children:`Для работы генератора не требуются сложные конфигурации. Инструмент спроектирован так, чтобы сканировать директории конструкторов и беспрепятственно интегрировать их в рабочую среду.`}),`
`,(0,c.jsx)(t.p,{children:`Чтобы сгенерировать все конструкторы компонентов в рабочем пространстве, выполните:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-constructor
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Чтобы сгенерировать конкретный компонент (например, `,(0,c.jsx)(t.code,{children:`Button`}),`), передайте его имя через опцию `,(0,c.jsx)(t.code,{children:`--name`}),` (`,(0,c.jsx)(t.code,{children:`-n`}),`):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-constructor --name Button
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Выполните `,(0,c.jsx)(t.code,{children:`npx dxt-constructor --help`}),`, чтобы вывести полный список доступных опций.`]}),`
`,(0,c.jsx)(t.h2,{id:`структура-генерируемых-файлов`,children:`Структура генерируемых файлов`}),`
`,(0,c.jsx)(t.p,{children:`Когда конструктор компонента инициализируется или обновляется, инструмент создает следующие файлы в его директории:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`properties.json`}),`: Содержит необработанную конфигурацию свойств компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props.ts`}),`: Определяет структуры пропсов React/Vue на основе конфигураций.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`types.ts`}),` & `,(0,c.jsx)(t.code,{children:`basicTypes.ts`}),`: Содержат стандартные типы TypeScript.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`style.scss`}),`: Управляет базовыми стилями SCSS компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Constructors.ts`}),` & `,(0,c.jsx)(t.code,{children:`ConstructorsDesign.tsx`}),`: Содержат основной код поведения конструктора.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index.ts`}),`: Экспортирует публичные интерфейсы и классы.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
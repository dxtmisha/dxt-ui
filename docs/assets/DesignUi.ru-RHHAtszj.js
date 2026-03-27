import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/DesignUi - Оркестратор UI-инфраструктуры`}),`
`,(0,c.jsx)(n.h1,{id:`класс-designui`,children:`Класс DesignUi`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`DesignUi`}),` — это центральный оркестратор, отвечающий за инициализацию и синхронизацию всей инфраструктуры UI-библиотеки. Он координирует высокоуровневые задачи, такие как пересборка стилей, генерация документации, обновление архитектуры компонентов и настройка метаданных дистрибутива пакета.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Централизованная оркестрация`}),` — управляет потоком выполнения нескольких специализированных генераторов (Styles, Wiki, Components).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Инкрементальная инициализация`}),` — поддерживает инициализацию как отдельного компонента, так и всего набора библиотеки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление кэшем`}),` — автоматически очищает кэш свойств, гарантируя, что все сгенерированные ресурсы используют актуальные токены дизайн-системы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическая настройка пакета`}),` — динамически обновляет карту экспорта в `,(0,c.jsx)(n.code,{children:`package.json`}),` для соответствия текущему состоянию сборки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синтез на уровне библиотеки`}),` — запускает глобальные обновления для плагинов, медиа-ресурсов и определений типов во всем рабочем пространстве.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Инициализируйте оркестратор, при необходимости указав имя компонента. Если имя не указано, класс обрабатывает все компоненты, найденные в библиотеке.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — идентификатор конкретного компонента для обработки (необязательно, по умолчанию `,(0,c.jsx)(n.code,{children:`''`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignUi } from '@dxtmisha/scripts'

// Для обновления всего:
const ui = new DesignUi()
ui.make()

// Для обновления конкретного компонента:
const buttonUi = new DesignUi('button')
buttonUi.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — выполняет полный конвейер инициализации, последовательно запуская все обновления инфраструктуры.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`конвейер-инициализации-ui`,children:`Конвейер инициализации UI`}),`
`,(0,c.jsxs)(n.p,{children:[`При вызове `,(0,c.jsx)(n.code,{children:`make()`}),` класс `,(0,c.jsx)(n.code,{children:`DesignUi`}),` координирует комплексное многоэтапное обновление:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сброс окружения`}),`: очищает `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` для предотвращения влияния устаревших токенов на новую сборку.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Генерация инфраструктуры`}),`: запускает генерацию глобальных стилей (`,(0,c.jsx)(n.code,{children:`Styles`}),`) и вики («DesignWiki») для подготовки визуального и документального фундамента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синхронизация компонентов`}),`: выполняет `,(0,c.jsx)(n.code,{children:`DesignComponent`}),` для целевых компонентов, разрешая их структурные метаданные и генерируя исходные файлы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Подготовка к дистрибуции`}),`: обновляет `,(0,c.jsx)(n.code,{children:`package.json`}),` актуальными маппингами экспорта для CSS, SCSS и модулей скриптов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Библиотечный синтез`}),`: последовательно запускает специализированные библиотечные генераторы:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`LibraryMedia`}),`: синхронизирует иконки и флаги.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`LibraryList`}),`: компилирует реестр компонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`LibraryPlugin`}),`: пересобирает плагины интеграции с Vue/фреймворками.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`LibraryAiWiki`}),`: генерирует оптимизированные для ИИ артефакты документации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`LibraryTypes`}),`: компилирует глобальные определения типов.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`роль-в-экосистеме`,children:`Роль в экосистеме`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`DesignUi`}),` служит основной точкой входа для разработчиков и автоматизированных инструментов сборки. Абстрагируя сложность десятков специализированных классов, он предоставляет стабильный интерфейс «в один клик» для поддержания синхронизации UI-библиотеки с развивающимися спецификациями дизайн-системы.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
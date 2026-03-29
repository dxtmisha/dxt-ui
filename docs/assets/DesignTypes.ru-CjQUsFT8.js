import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/DesignTypes - Генератор типов для ИИ`}),`
`,(0,c.jsx)(n.h1,{id:`класс-designtypes`,children:`Класс DesignTypes`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`DesignTypes`}),` — это специализированная утилита, предназначенная для сокращения разрыва между сложными определениями типов в коде и ИИ-помощниками по кодированию. Она автоматизирует извлечение, очистку и сжатие файлов деклараций TypeScript (`,(0,c.jsx)(n.code,{children:`.d.ts`}),`), используя ИИ для создания гипер-минималистичной версии системы типов проекта, которая обеспечивает максимальный контекст при минимальном потреблении токенов.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое обнаружение`}),` — рекурсивно сканирует директории сборки для поиска релевантных файлов деклараций типов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеллектуальная фильтрация`}),` — автоматически исключает внутренние пропсы конструкторов и второстепенные типы логики, сохраняя публичные API.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сжатие на базе ИИ`}),` — использует промпты LLM для удаления ненужных метаданных (импортов, комментариев, пустых строк) и консолидации определений.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Единый вывод`}),` — объединяет несколько фрагментированных файлов деклараций в одну связную библиотеку типов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Оптимизация контекста`}),` — приоритизирует интерфейсы, перечисления и алиасы типов, наиболее важные для понимания ИИ.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Инициализируйте генератор, указав исходную директорию, где расположены скомпилированные файлы деклараций.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dir: string`}),` — путь к входной директории (по умолчанию `,(0,c.jsx)(n.code,{children:`'dist'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignTypes } from '@dxtmisha/scripts'

const generator = new DesignTypes('packages/core/dist')
generator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — запускает полный конвейер генерации: обнаружение, объединение, обработку ИИ и сохранение.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`конвейер-генерации-типов`,children:`Конвейер генерации типов`}),`
`,(0,c.jsxs)(n.p,{children:[`При выполнении `,(0,c.jsx)(n.code,{children:`make()`}),` класс координирует многоэтапный рабочий процесс:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Фильтрация файлов (`,(0,c.jsx)(n.code,{children:`getListByFilter`}),`)`]}),`: движок сканирует директорию на наличие файлов `,(0,c.jsx)(n.code,{children:`.d.ts`}),`, отфильтровывая детали внутренней реализации, такие как `,(0,c.jsx)(n.code,{children:`props.d.ts`}),` или `,(0,c.jsx)(n.code,{children:`types.d.ts`}),` внутри папок конструкторов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Валидация контента (`,(0,c.jsx)(n.code,{children:`isContent`}),`)`]}),`: проверяет, что каждый файл действительно содержит значимые определения типов (интерфейсы, типы или перечисления) перед обработкой.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Консолидация (`,(0,c.jsx)(n.code,{children:`toOneFile`}),`)`]}),`: содержимое всех идентифицированных файлов объединяется в одну большую строку, помеченную путями к оригинальным файлам для контекста.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Трансформация ИИ (`,(0,c.jsx)(n.code,{children:`toAiEdit`}),`)`]}),`: объединенный контент отправляется ИИ-помощнику со специфическими инструкциями по удалению шаблонного кода, неанглийских комментариев и минимизации синтаксиса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Сохранение (`,(0,c.jsx)(n.code,{children:`save`}),`)`]}),`: финальная библиотека типов высокой плотности сохраняется по настроенному пути вывода (обычно указанному в `,(0,c.jsx)(n.code,{children:`UI_FILE_AI_TYPES`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`кейс-внедрение-контекста-для-ии`,children:`Кейс: Внедрение контекста для ИИ`}),`
`,(0,c.jsx)(n.p,{children:`Основная цель этого класса — создание «артефакта знаний», который может быть внедрен в системный промпт LLM, работающих над проектом. Предоставляя чистый, сжатый обзор всех доступных типов и интерфейсов, ИИ может писать типобезопасный код и понимать архитектуру компонентов с значительно более высокой точностью и меньшими затратами.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
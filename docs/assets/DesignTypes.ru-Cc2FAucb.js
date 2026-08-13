import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/DesignTypes - Генератор типов для ИИ`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designtypes`,children:`Класс DesignTypes`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`DesignTypes`}),` — это специализированная утилита, предназначенная для сокращения разрыва между сложными определениями типов в коде и ИИ-помощниками по кодированию. Она автоматизирует извлечение, очистку и сжатие файлов деклараций TypeScript (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`), используя ИИ для создания гипер-минималистичной версии системы типов проекта, которая обеспечивает максимальный контекст при минимальном потреблении токенов.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое обнаружение`}),` — рекурсивно сканирует директории сборки для поиска релевантных файлов деклараций типов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеллектуальная фильтрация`}),` — автоматически исключает внутренние пропсы конструкторов и второстепенные типы логики, сохраняя публичные API.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сжатие на базе ИИ`}),` — использует промпты LLM для удаления ненужных метаданных (импортов, комментариев, пустых строк) и консолидации определений.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Единый вывод`}),` — объединяет несколько фрагментированных файлов деклараций в одну связную библиотеку типов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Оптимизация контекста`}),` — приоритизирует интерфейсы, перечисления и алиасы типов, наиболее важные для понимания ИИ.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:`Инициализируйте генератор, указав исходную директорию, где расположены скомпилированные файлы деклараций.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dir: string`}),` — путь к входной директории (по умолчанию `,(0,c.jsx)(t.code,{children:`'dist'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypes } from '@dxtmisha/scripts'

const generator = new DesignTypes('packages/core/dist')
generator.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — запускает полный конвейер генерации: обнаружение, объединение, обработку ИИ и сохранение.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(t.h3,{id:`конвейер-генерации-типов`,children:`Конвейер генерации типов`}),`
`,(0,c.jsxs)(t.p,{children:[`При выполнении `,(0,c.jsx)(t.code,{children:`make()`}),` класс координирует многоэтапный рабочий процесс:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Фильтрация файлов (`,(0,c.jsx)(t.code,{children:`getListByFilter`}),`)`]}),`: движок сканирует директорию на наличие файлов `,(0,c.jsx)(t.code,{children:`.d.ts`}),`, отфильтровывая детали внутренней реализации, такие как `,(0,c.jsx)(t.code,{children:`props.d.ts`}),` или `,(0,c.jsx)(t.code,{children:`types.d.ts`}),` внутри папок конструкторов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Валидация контента (`,(0,c.jsx)(t.code,{children:`isContent`}),`)`]}),`: проверяет, что каждый файл действительно содержит значимые определения типов (интерфейсы, типы или перечисления) перед обработкой.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Консолидация (`,(0,c.jsx)(t.code,{children:`toOneFile`}),`)`]}),`: содержимое всех идентифицированных файлов объединяется в одну большую строку, помеченную путями к оригинальным файлам для контекста.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Трансформация ИИ (`,(0,c.jsx)(t.code,{children:`toAiEdit`}),`)`]}),`: объединенный контент отправляется ИИ-помощнику со специфическими инструкциями по удалению шаблонного кода, неанглийских комментариев и минимизации синтаксиса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Сохранение (`,(0,c.jsx)(t.code,{children:`save`}),`)`]}),`: финальная библиотека типов высокой плотности сохраняется по настроенному пути вывода (обычно указанному в `,(0,c.jsx)(t.code,{children:`UI_FILE_AI_TYPES`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`кейс-внедрение-контекста-для-ии`,children:`Кейс: Внедрение контекста для ИИ`}),`
`,(0,c.jsx)(t.p,{children:`Основная цель этого класса — создание «артефакта знаний», который может быть внедрен в системный промпт LLM, работающих над проектом. Предоставляя чистый, сжатый обзор всех доступных типов и интерфейсов, ИИ может писать типобезопасный код и понимать архитектуру компонентов с значительно более высокой точностью и меньшими затратами.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
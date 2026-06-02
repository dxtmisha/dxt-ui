import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/LibraryExport - Генератор экспорта`}),`
`,(0,c.jsx)(n.h1,{id:`класс-libraryexport`,children:`Класс LibraryExport`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`LibraryExport`}),` отвечает за агрегацию и генерацию единого файла экспорта для библиотеки. Он сканирует назначенные подпапки на наличие файлов TypeScript и Vue, автоматически компилируя все экспорты в единый публичный интерфейс для упрощения последующих импортов.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Генерация единого экспорта`}),` — Создает комплексную публичную точку входа для всех компонентов, composables, функций и классов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Умное обнаружение модулей`}),` — Автоматически применяет стандартные экспорты со звездочкой (`,(0,c.jsx)(n.code,{children:`export *`}),`) для TypeScript-утилит и создает именованные экспорты для Vue SFC компонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция стилей`}),` — Автоматически проверяет наличие и интегрирует глобальные таблицы стилей CSS или SCSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеллектуальная фильтрация`}),` — Исключает файлы юнит-тестов (`,(0,c.jsx)(n.code,{children:`.test.`}),`) и модули, помеченные специальной директивой `,(0,c.jsx)(n.code,{children:`// export:none`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Инициализируйте и запустите генератор экспорта с помощью метода `,(0,c.jsx)(n.code,{children:`make`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryExport } from '@dxtmisha/scripts'

const generator = new LibraryExport()
generator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`основное-выполнение`,children:`Основное выполнение`}),`
`,(0,c.jsx)(n.h4,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsxs)(n.p,{children:[`Запускает компиляцию библиотеки и генерацию точки входа. Метод сканирует все настроенные поддиректории, собирает подходящие файлы, отфильтровывает тесты и файлы с признаком `,(0,c.jsx)(n.code,{children:`export:none`}),`, а затем записывает сгенерированные инструкции импорта и экспорта в целевой файл точки входа.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Параметры отсутствуют.`}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`}),` — Модифицирует целевой файл `,(0,c.jsx)(n.code,{children:`library.ts`}),` в файловой системе и выводит логи в консоль.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryExport } from '@dxtmisha/scripts'

new LibraryExport().make()
`})}),`
`,(0,c.jsx)(n.h3,{id:`вспомогательные-методы`,children:`Вспомогательные методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPath(directory: string): string[]`}),` — Возвращает компоненты пути к директории на основе `,(0,c.jsx)(n.code,{children:`UI_DIR_IN`}),` и указанного имени директории.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isExport(path: string | string[]): boolean`}),` — Проверяет, подходит ли путь к файлу для экспорта, убеждаясь, что это не файл теста и он не совпадает с шаблоном `,(0,c.jsx)(n.code,{children:`UI_FLAG_NOT_EXPORT`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDirectory(): LibraryFiles`}),` — Рекурсивно собирает все индексируемые файлы внутри настроенных папок экспорта и агрегирует их.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(name: string): string`}),` — Преобразует первый символ имени директории в верхний регистр для стандартизации комментариев в сгенерированном файле.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFile(path: string | string[]): string`}),` — Считывает содержимое файла по указанному пути из файловой системы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initFile(): string`}),` — Формирует необработанное содержимое выходного файла библиотеки, включая импорты, настройку стилей, а также wildcard и именованные экспорты.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initStyles(): string`}),` — Генерирует импорты для глобальных таблиц стилей (`,(0,c.jsx)(n.code,{children:`style.scss`}),` или `,(0,c.jsx)(n.code,{children:`style.css`}),`), если они присутствуют в корне исходной директории.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`зависимости-и-конфигурации`,children:`Зависимости и конфигурации`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`LibraryExport`}),` взаимодействует с несколькими глобальными конфигурациями для выполнения генерации:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`UI_DIRS_LIST_EXPORT`}),` — Указывает активные папки, которые рекурсивно сканируются на наличие экспортов (`,(0,c.jsx)(n.code,{children:`classes`}),`, `,(0,c.jsx)(n.code,{children:`components`}),`, `,(0,c.jsx)(n.code,{children:`composables`}),`, `,(0,c.jsx)(n.code,{children:`functions`}),`, `,(0,c.jsx)(n.code,{children:`global`}),`, `,(0,c.jsx)(n.code,{children:`types`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`UI_DIRS_FILE_EXPORT`}),` — Задает путь назначения скомпилированного файла библиотеки (`,(0,c.jsx)(n.code,{children:`src/library.ts`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`UI_DIR_IN`}),` — Идентифицирует корневую директорию исходного кода, содержащую модули (`,(0,c.jsx)(n.code,{children:`src`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`UI_FLAG_NOT_EXPORT`}),` — Содержит регулярное выражение, соответствующее директиве исключения экспорта (`,(0,c.jsx)(n.code,{children:`/\\/\\/ *export:none/`}),`).`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
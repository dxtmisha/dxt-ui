import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/LibraryExport - Генератор экспорта`}),`
`,(0,c.jsx)(t.h1,{id:`класс-libraryexport`,children:`Класс LibraryExport`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`LibraryExport`}),` отвечает за агрегацию и генерацию единого файла экспорта для библиотеки. Он сканирует назначенные подпапки на наличие файлов TypeScript и Vue, автоматически компилируя все экспорты в единый публичный интерфейс для упрощения последующих импортов.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Генерация единого экспорта`}),` — Создает комплексную публичную точку входа для всех компонентов, composables, функций и классов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Умное обнаружение модулей`}),` — Автоматически применяет стандартные экспорты со звездочкой (`,(0,c.jsx)(t.code,{children:`export *`}),`) для TypeScript-утилит и создает именованные экспорты для Vue SFC компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция стилей`}),` — Автоматически проверяет наличие и интегрирует глобальные таблицы стилей CSS или SCSS.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеллектуальная фильтрация`}),` — Исключает файлы юнит-тестов (`,(0,c.jsx)(t.code,{children:`.test.`}),`) и модули, помеченные специальной директивой `,(0,c.jsx)(t.code,{children:`// export:none`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Инициализируйте и запустите генератор экспорта с помощью метода `,(0,c.jsx)(t.code,{children:`make`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryExport } from '@dxtmisha/scripts'

const generator = new LibraryExport()
generator.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`основное-выполнение`,children:`Основное выполнение`}),`
`,(0,c.jsx)(t.h4,{id:`make`,children:(0,c.jsx)(t.code,{children:`make`})}),`
`,(0,c.jsxs)(t.p,{children:[`Запускает компиляцию библиотеки и генерацию точки входа. Метод сканирует все настроенные поддиректории, собирает подходящие файлы, отфильтровывает тесты и файлы с признаком `,(0,c.jsx)(t.code,{children:`export:none`}),`, а затем записывает сгенерированные инструкции импорта и экспорта в целевой файл точки входа.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Параметры отсутствуют.`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`void`}),` — Модифицирует целевой файл `,(0,c.jsx)(t.code,{children:`library.ts`}),` в файловой системе и выводит логи в консоль.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryExport } from '@dxtmisha/scripts'

new LibraryExport().make()
`})}),`
`,(0,c.jsx)(t.h3,{id:`вспомогательные-методы`,children:`Вспомогательные методы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPath(directory: string): string[]`}),` — Возвращает компоненты пути к директории на основе `,(0,c.jsx)(t.code,{children:`UI_DIR_IN`}),` и указанного имени директории.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isExport(path: string | string[]): boolean`}),` — Проверяет, подходит ли путь к файлу для экспорта, убеждаясь, что это не файл теста и он не совпадает с шаблоном `,(0,c.jsx)(t.code,{children:`UI_FLAG_NOT_EXPORT`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDirectory(): LibraryFiles`}),` — Рекурсивно собирает все индексируемые файлы внутри настроенных папок экспорта и агрегирует их.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(name: string): string`}),` — Преобразует первый символ имени директории в верхний регистр для стандартизации комментариев в сгенерированном файле.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFile(path: string | string[]): string`}),` — Считывает содержимое файла по указанному пути из файловой системы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initFile(): string`}),` — Формирует необработанное содержимое выходного файла библиотеки, включая импорты, настройку стилей, а также wildcard и именованные экспорты.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initStyles(): string`}),` — Генерирует импорты для глобальных таблиц стилей (`,(0,c.jsx)(t.code,{children:`style.scss`}),` или `,(0,c.jsx)(t.code,{children:`style.css`}),`), если они присутствуют в корне исходной директории.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`зависимости-и-конфигурации`,children:`Зависимости и конфигурации`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`LibraryExport`}),` взаимодействует с несколькими глобальными конфигурациями для выполнения генерации:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`UI_DIRS_LIST_EXPORT`}),` — Указывает активные папки, которые рекурсивно сканируются на наличие экспортов (`,(0,c.jsx)(t.code,{children:`classes`}),`, `,(0,c.jsx)(t.code,{children:`components`}),`, `,(0,c.jsx)(t.code,{children:`composables`}),`, `,(0,c.jsx)(t.code,{children:`functions`}),`, `,(0,c.jsx)(t.code,{children:`global`}),`, `,(0,c.jsx)(t.code,{children:`types`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`UI_DIRS_FILE_EXPORT`}),` — Задает путь назначения скомпилированного файла библиотеки (`,(0,c.jsx)(t.code,{children:`src/library.ts`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`UI_DIR_IN`}),` — Идентифицирует корневую директорию исходного кода, содержащую модули (`,(0,c.jsx)(t.code,{children:`src`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`UI_FLAG_NOT_EXPORT`}),` — Содержит регулярное выражение, соответствующее директиве исключения экспорта (`,(0,c.jsx)(t.code,{children:`/\\/\\/ *export:none/`}),`).`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/# Команды/dxt-library - Генератор точки входа библиотеки`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-library`,children:`dxt-library`}),`
`,(0,c.jsxs)(n.p,{children:[`Команда `,(0,c.jsx)(n.code,{children:`dxt-library`}),` представляет собой CLI-утилиту для генерации консолидированной точки входа (`,(0,c.jsx)(n.code,{children:`src/library.ts`}),`) для всей библиотеки UI. Под капотом она использует класс `,(0,c.jsx)(n.code,{children:`LibraryExport`}),` для сканирования основных подпапок и динамической компиляции всех экспортов в единый публичный интерфейс.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Единая точка входа`}),`: Компилирует несколько директорий в один оптимизированный интерфейс экспорта.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Умная обработка модулей`}),`: Автоматически генерирует экспорты со звездочкой для TypeScript-утилит и именованные экспорты для Vue-компонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеллектуальная фильтрация`}),`: Исключает файлы юнит-тестов и файлы, помеченные специальной директивой исключения экспорта.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция глобальных стилей`}),`: Автоматически включает глобальные стили в сгенерированный файл точки входа.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsx)(n.p,{children:`Процесс компиляции точки входа автоматизирует сборку экспортов всех модулей:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Скрипт сканирует указанные исходные поддиректории (`,(0,c.jsx)(n.code,{children:`classes`}),`, `,(0,c.jsx)(n.code,{children:`components`}),`, `,(0,c.jsx)(n.code,{children:`composables`}),`, `,(0,c.jsx)(n.code,{children:`functions`}),`, `,(0,c.jsx)(n.code,{children:`global`}),`, `,(0,c.jsx)(n.code,{children:`types`}),`) с помощью инструментов рекурсивного чтения директорий.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Он отфильтровывает файлы юнит-тестов (содержащие `,(0,c.jsx)(n.code,{children:`.test.`}),`) и файлы, содержимое которых совпадает с директивой `,(0,c.jsx)(n.code,{children:`// export:none`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Для каждого валидного файла TypeScript (`,(0,c.jsx)(n.code,{children:`.ts`}),`) он добавляет стандартный экспорт со звездочкой.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Для каждого файла Vue SFC (`,(0,c.jsx)(n.code,{children:`.vue`}),`) он генерирует импорт и сопоставляет его с именованным экспортом константы для чистого использования.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Он проверяет наличие файлов `,(0,c.jsx)(n.code,{children:`style.scss`}),` или `,(0,c.jsx)(n.code,{children:`style.css`}),` в базовой входной директории и добавляет их импорт в начало файла, если они найдены.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Он записывает скомпилированный код напрямую в файл `,(0,c.jsx)(n.code,{children:`src/library.ts`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`настройка-и-запуск`,children:`Настройка и запуск`}),`
`,(0,c.jsx)(n.p,{children:`Для запуска генератора точки входа библиотеки не требуется сложных настроек. Скрипт автоматически считывает конфигурации и обрабатывает предустановленные директории экспорта.`}),`
`,(0,c.jsx)(n.p,{children:`Чтобы запустить процесс генерации, выполните:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-library
`})}),`
`,(0,c.jsx)(n.h2,{id:`структура-генерируемых-файлов`,children:`Структура генерируемых файлов`}),`
`,(0,c.jsx)(n.p,{children:`После успешного выполнения инструмент создает или обновляет следующий файл в пакете:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`src/library.ts`}),`: Единая точка входа, содержащая все импорты, именованные экспорты компонентов и экспорты со звездочкой.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/7. Команды/dxt-library - Генератор точки входа библиотеки`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-library`,children:`dxt-library`}),`
`,(0,c.jsxs)(t.p,{children:[`Команда `,(0,c.jsx)(t.code,{children:`dxt-library`}),` представляет собой CLI-утилиту для генерации консолидированной точки входа (`,(0,c.jsx)(t.code,{children:`src/library.ts`}),`) для всей библиотеки UI. Под капотом она использует класс `,(0,c.jsx)(t.code,{children:`LibraryExport`}),` для сканирования основных подпапок и динамической компиляции всех экспортов в единый публичный интерфейс.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Единая точка входа`}),`: Компилирует несколько директорий в один оптимизированный интерфейс экспорта.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Умная обработка модулей`}),`: Автоматически генерирует экспорты со звездочкой для TypeScript-утилит и именованные экспорты для Vue-компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеллектуальная фильтрация`}),`: Исключает файлы юнит-тестов и файлы, помеченные специальной директивой исключения экспорта.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция глобальных стилей`}),`: Автоматически включает глобальные стили в сгенерированный файл точки входа.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsx)(t.p,{children:`Процесс компиляции точки входа автоматизирует сборку экспортов всех модулей:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Скрипт сканирует указанные исходные поддиректории (`,(0,c.jsx)(t.code,{children:`classes`}),`, `,(0,c.jsx)(t.code,{children:`components`}),`, `,(0,c.jsx)(t.code,{children:`composables`}),`, `,(0,c.jsx)(t.code,{children:`functions`}),`, `,(0,c.jsx)(t.code,{children:`global`}),`, `,(0,c.jsx)(t.code,{children:`types`}),`) с помощью инструментов рекурсивного чтения директорий.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Он отфильтровывает файлы юнит-тестов (содержащие `,(0,c.jsx)(t.code,{children:`.test.`}),`) и файлы, содержимое которых совпадает с директивой `,(0,c.jsx)(t.code,{children:`// export:none`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Для каждого валидного файла TypeScript (`,(0,c.jsx)(t.code,{children:`.ts`}),`) он добавляет стандартный экспорт со звездочкой.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Для каждого файла Vue SFC (`,(0,c.jsx)(t.code,{children:`.vue`}),`) он генерирует импорт и сопоставляет его с именованным экспортом константы для чистого использования.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Он проверяет наличие файлов `,(0,c.jsx)(t.code,{children:`style.scss`}),` или `,(0,c.jsx)(t.code,{children:`style.css`}),` в базовой входной директории и добавляет их импорт в начало файла, если они найдены.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Он записывает скомпилированный код напрямую в файл `,(0,c.jsx)(t.code,{children:`src/library.ts`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`настройка-и-запуск`,children:`Настройка и запуск`}),`
`,(0,c.jsx)(t.p,{children:`Для запуска генератора точки входа библиотеки не требуется сложных настроек. Скрипт автоматически считывает конфигурации и обрабатывает предустановленные директории экспорта.`}),`
`,(0,c.jsx)(t.p,{children:`Чтобы запустить процесс генерации, выполните:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-library
`})}),`
`,(0,c.jsx)(t.h2,{id:`структура-генерируемых-файлов`,children:`Структура генерируемых файлов`}),`
`,(0,c.jsx)(t.p,{children:`После успешного выполнения инструмент создает или обновляет следующий файл в пакете:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`src/library.ts`}),`: Единая точка входа, содержащая все импорты, именованные экспорты компонентов и экспорты со звездочкой.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
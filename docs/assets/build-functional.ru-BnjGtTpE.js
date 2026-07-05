import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/# Команды/dxt-build-functional - Сборка функциональных экспортов`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-build-functional`,children:`dxt-build-functional`}),`
`,(0,c.jsxs)(n.p,{children:[`Команда `,(0,c.jsx)(n.code,{children:`dxt-build-functional`}),` автоматически собирает и повторно экспортирует все реактивные утилиты, классы и композитные функции из пакета `,(0,c.jsx)(n.code,{children:`@dxtmisha/functional`}),` в единый файл точки входа `,(0,c.jsx)(n.code,{children:`functional.ts`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое создание точки входа`}),`: Динамически формирует единый список экспорта для всех реактивных API.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Алфавитная сортировка`}),`: Сортирует экспортируемые сущности по алфавиту для чистоты кода и предотвращения конфликтов слияния.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Типизированные экспорты`}),`: Автоматически перенаправляет TypeScript-типы (`,(0,c.jsx)(n.code,{children:`export type *`}),`) из базового пакета.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Импорт модуля`}),`: Скрипт загружает базовый модуль `,(0,c.jsx)(n.code,{children:`@dxtmisha/functional`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сбор ключей`}),`: Динамически извлекает все экспортируемые ключи из объекта модуля.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сортировка и генерация`}),`: Сортирует ключи по алфавиту и генерирует строки экспорта для каждого члена.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Запись файла`}),`: Объединяет строки и сохраняет готовый файл под именем `,(0,c.jsx)(n.code,{children:`functional.ts`}),` в настроенную директорию библиотеки.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsxs)(n.p,{children:[`Запустите утилиту сборки через `,(0,c.jsx)(n.code,{children:`npx`}),` или скрипты npm:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-build-functional
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
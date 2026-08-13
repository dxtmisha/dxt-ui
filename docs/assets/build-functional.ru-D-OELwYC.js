import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/# Команды/dxt-build-functional - Сборка функциональных экспортов`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-build-functional`,children:`dxt-build-functional`}),`
`,(0,c.jsxs)(t.p,{children:[`Команда `,(0,c.jsx)(t.code,{children:`dxt-build-functional`}),` автоматически собирает и повторно экспортирует все реактивные утилиты, классы и композитные функции из пакета `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),` в единый файл точки входа `,(0,c.jsx)(t.code,{children:`functional.ts`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое создание точки входа`}),`: Динамически формирует единый список экспорта для всех реактивных API.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Алфавитная сортировка`}),`: Сортирует экспортируемые сущности по алфавиту для чистоты кода и предотвращения конфликтов слияния.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Типизированные экспорты`}),`: Автоматически перенаправляет TypeScript-типы (`,(0,c.jsx)(t.code,{children:`export type *`}),`) из базового пакета.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Импорт модуля`}),`: Скрипт загружает базовый модуль `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сбор ключей`}),`: Динамически извлекает все экспортируемые ключи из объекта модуля.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сортировка и генерация`}),`: Сортирует ключи по алфавиту и генерирует строки экспорта для каждого члена.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Запись файла`}),`: Объединяет строки и сохраняет готовый файл под именем `,(0,c.jsx)(t.code,{children:`functional.ts`}),` в настроенную директорию библиотеки.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsxs)(t.p,{children:[`Запустите утилиту сборки через `,(0,c.jsx)(t.code,{children:`npx`}),` или скрипты npm:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-build-functional
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
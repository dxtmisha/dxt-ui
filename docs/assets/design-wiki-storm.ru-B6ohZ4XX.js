import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/# Команды/dxt-wiki-storm - Генератор метаданных WebStorm IDE`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-wiki-storm`,children:`dxt-wiki-storm`}),`
`,(0,c.jsxs)(n.p,{children:[`Команда `,(0,c.jsx)(n.code,{children:`dxt-wiki-storm`}),` генерирует файл `,(0,c.jsx)(n.code,{children:`web-types.json`}),` в папке сборки. Этот файл содержит метаданные о тегах, атрибутах, свойствах и событиях компонентов для JetBrains IDE (таких как WebStorm и IntelliJ IDEA), что активирует полноценное автозаполнение (IntelliSense) и всплывающие подсказки.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция с JetBrains`}),`: Позволяет редакторам семейства JetBrains корректно распознавать кастомные Vue-компоненты дизайн-системы и их параметры.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое извлечение метаданных`}),`: Обходит все активные компоненты библиотеки для сбора информации об их свойствах (props), событиях (events) и слотах.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Стандартная схема`}),`: Формирует данные в строгом соответствии с официальной схемой Web-Types.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Проверка контекста`}),`: Скрипт считывает `,(0,c.jsx)(n.code,{children:`package.json`}),` проекта для получения имени и версии пакета.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сбор компонентов`}),`: Обходит список всех зарегистрированных компонентов дизайн-системы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Анализ API`}),`: Для каждого компонента запускает инспектор, считывающий его свойства, события и описания.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Формирование JSON`}),`: Объединяет собранные данные в структуру вклада (contributions) Web-Types.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Запись файла`}),`: Сохраняет готовый файл в директорию сборки (по умолчанию `,(0,c.jsx)(n.code,{children:`dist/web-types.json`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsxs)(n.p,{children:[`Запустите генератор метаданных через `,(0,c.jsx)(n.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-wiki-storm [output_dir]
`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`output_dir`}),` (Необязательно): Директория для сохранения файла. По умолчанию `,(0,c.jsx)(n.code,{children:`dist`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/7. Команды/dxt-wiki-storm - Генератор метаданных WebStorm IDE`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-wiki-storm`,children:`dxt-wiki-storm`}),`
`,(0,c.jsxs)(t.p,{children:[`Команда `,(0,c.jsx)(t.code,{children:`dxt-wiki-storm`}),` генерирует файл `,(0,c.jsx)(t.code,{children:`web-types.json`}),` в папке сборки. Этот файл содержит метаданные о тегах, атрибутах, свойствах и событиях компонентов для JetBrains IDE (таких как WebStorm и IntelliJ IDEA), что активирует полноценное автозаполнение (IntelliSense) и всплывающие подсказки.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция с JetBrains`}),`: Позволяет редакторам семейства JetBrains корректно распознавать кастомные Vue-компоненты дизайн-системы и их параметры.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое извлечение метаданных`}),`: Обходит все активные компоненты библиотеки для сбора информации об их свойствах (props), событиях (events) и слотах.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Стандартная схема`}),`: Формирует данные в строгом соответствии с официальной схемой Web-Types.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Проверка контекста`}),`: Скрипт считывает `,(0,c.jsx)(t.code,{children:`package.json`}),` проекта для получения имени и версии пакета.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сбор компонентов`}),`: Обходит список всех зарегистрированных компонентов дизайн-системы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Анализ API`}),`: Для каждого компонента запускает инспектор, считывающий его свойства, события и описания.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Формирование JSON`}),`: Объединяет собранные данные в структуру вклада (contributions) Web-Types.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Запись файла`}),`: Сохраняет готовый файл в директорию сборки (по умолчанию `,(0,c.jsx)(t.code,{children:`dist/web-types.json`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsxs)(t.p,{children:[`Запустите генератор метаданных через `,(0,c.jsx)(t.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-wiki-storm
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Команда не принимает опций; директория вывода определяется конфигурацией сборки (по умолчанию `,(0,c.jsx)(t.code,{children:`dist`}),`).`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
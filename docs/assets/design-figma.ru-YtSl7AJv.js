import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/bin/dxt-figma-layout - Интеграция макетов Figma`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-figma-layout`,children:`dxt-figma-layout`}),`
`,(0,c.jsxs)(n.p,{children:[`Команда `,(0,c.jsx)(n.code,{children:`dxt-figma-layout`}),` предоставляет интерфейс командной строки (CLI) для получения структуры макетов и изображений компонентов напрямую из Figma. Под капотом она использует оркестратор `,(0,c.jsx)(n.code,{children:`DesignFigma`}),` и клиент `,(0,c.jsx)(n.code,{children:`FigmaApi`}),` для извлечения векторных SVG-ресурсов на основе переданных ключей файлов и идентификаторов узлов (Node ID).`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Внимание`}),`: Для выполнения этой команды и извлечения макетов строго требуется наличие корпоративной подписки Figma (Figma Enterprise или Organization).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое получение изображений`}),`: Извлекает векторные макеты из файлов Figma в чистом формате SVG.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Конфигурационная аутентификация`}),`: Автоматически извлекает токен доступа Figma API из системных конфигураций.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Гибкая поддержка аргументов`}),`: Позволяет динамически нацеливаться на конкретные файлы и узлы через параметры командной строки.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsx)(n.p,{children:`Процесс интеграции макетов автоматизирует извлечение ресурсов:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsx)(n.li,{children:`Скрипт считывает ключ файла Figma и необязательный идентификатор узла, переданные непосредственно в качестве аргументов командной строки.`}),`
`,(0,c.jsxs)(n.li,{children:[`Он инициализирует контроллер `,(0,c.jsx)(n.code,{children:`DesignFigma`}),`, передавая целевые параметры вместе с автоматически определенным системным токеном Figma.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Внутренний клиент `,(0,c.jsx)(n.code,{children:`FigmaApi`}),` отправляет безопасный HTTP-запрос к эндпоинту `,(0,c.jsx)(n.code,{children:`fileImages`}),` Figma, запрашивая узлы в формате SVG с сохранением исходных идентификаторов.`]}),`
`,(0,c.jsx)(n.li,{children:`Он получает карту сопоставления изображений с URL-адресами сгенерированных ресурсов и выводит итоговый JSON-объект прямо в консоль.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`настройка-и-запуск`,children:`Настройка и запуск`}),`
`,(0,c.jsx)(n.p,{children:`Для работы интегратора макетов не требуется сложная предварительная настройка. Перед запуском убедитесь, что ваш API-токен Figma настроен в системной среде или файле конфигурации.`}),`
`,(0,c.jsx)(n.p,{children:`Чтобы получить изображения макетов, выполните команду, передав ключ файла Figma и идентификатор узла:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-figma-layout [fileKey] [nodeId]
`})}),`
`,(0,c.jsx)(n.p,{children:`Пример:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-figma-layout abc123xyz456 1-24
`})}),`
`,(0,c.jsx)(n.h2,{id:`аргументы-cli`,children:`Аргументы CLI`}),`
`,(0,c.jsx)(n.p,{children:`Команда принимает два позиционных параметра:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fileKey`}),`: Уникальный идентификатор файла Figma (обычно находится в URL-адресе файла Figma).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nodeId`}),`: Конкретный идентификатор узла внутри файла (например, `,(0,c.jsx)(n.code,{children:`1-24`}),` или `,(0,c.jsx)(n.code,{children:`1:24`}),`) для извлечения.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
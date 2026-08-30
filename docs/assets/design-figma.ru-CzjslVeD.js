import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/7. Команды/dxt-figma-layout - Интеграция макетов Figma`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-figma-layout`,children:`dxt-figma-layout`}),`
`,(0,c.jsxs)(t.p,{children:[`Команда `,(0,c.jsx)(t.code,{children:`dxt-figma-layout`}),` предоставляет интерфейс командной строки (CLI) для получения структуры макетов и изображений компонентов напрямую из Figma. Под капотом она использует оркестратор `,(0,c.jsx)(t.code,{children:`DesignFigma`}),` и клиент `,(0,c.jsx)(t.code,{children:`FigmaApi`}),` для извлечения векторных SVG-ресурсов на основе переданных ключей файлов и идентификаторов узлов (Node ID).`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Внимание`}),`: Для выполнения этой команды и извлечения макетов строго требуется наличие корпоративной подписки Figma (Figma Enterprise или Organization).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое получение изображений`}),`: Извлекает векторные макеты из файлов Figma в чистом формате SVG.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Конфигурационная аутентификация`}),`: Автоматически извлекает токен доступа Figma API из системных конфигураций.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Гибкая поддержка опций`}),`: Позволяет динамически нацеливаться на конкретные файлы и узлы через опции командной строки.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsx)(t.p,{children:`Процесс интеграции макетов автоматизирует извлечение ресурсов:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsx)(t.li,{children:`Скрипт считывает ключ файла Figma и необязательный идентификатор узла, переданные через опции командной строки.`}),`
`,(0,c.jsxs)(t.li,{children:[`Он инициализирует контроллер `,(0,c.jsx)(t.code,{children:`DesignFigma`}),`, передавая целевые параметры вместе с автоматически определенным системным токеном Figma.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Внутренний клиент `,(0,c.jsx)(t.code,{children:`FigmaApi`}),` отправляет безопасный HTTP-запрос к эндпоинту `,(0,c.jsx)(t.code,{children:`fileImages`}),` Figma, запрашивая узлы в формате SVG с сохранением исходных идентификаторов.`]}),`
`,(0,c.jsx)(t.li,{children:`Он получает карту сопоставления изображений с URL-адресами сгенерированных ресурсов и выводит итоговый JSON-объект прямо в консоль.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`настройка-и-запуск`,children:`Настройка и запуск`}),`
`,(0,c.jsx)(t.p,{children:`Для работы интегратора макетов не требуется сложная предварительная настройка. Перед запуском убедитесь, что ваш API-токен Figma настроен в системной среде или файле конфигурации.`}),`
`,(0,c.jsx)(t.p,{children:`Чтобы получить изображения макетов, выполните команду, передав ключ файла Figma и идентификатор узла через опции:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-figma-layout --file abc123xyz456 --node 1-24
`})}),`
`,(0,c.jsx)(t.h2,{id:`опции-cli`,children:`Опции CLI`}),`
`,(0,c.jsx)(t.p,{children:`Команда принимает две именованные опции:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--file`}),` (`,(0,c.jsx)(t.code,{children:`-f`}),`): Уникальный идентификатор файла Figma (обычно находится в URL-адресе файла Figma).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--node`}),` (`,(0,c.jsx)(t.code,{children:`-n`}),`): Конкретный идентификатор узла внутри файла (например, `,(0,c.jsx)(t.code,{children:`1-24`}),` или `,(0,c.jsx)(t.code,{children:`1:24`}),`) для извлечения.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Выполните `,(0,c.jsx)(t.code,{children:`npx dxt-figma-layout --help`}),`, чтобы вывести полный список доступных опций.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
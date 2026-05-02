import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/bin/dxt-ai-doc - Генератор AI-документации`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-ai-doc`,children:`dxt-ai-doc`}),`
`,(0,c.jsxs)(n.p,{children:[`Скрипт `,(0,c.jsx)(n.code,{children:`ai-doc.ts`}),` представляет собой автоматизированный генератор документации проекта на базе ИИ. Он использует `,(0,c.jsx)(n.code,{children:`vite-node`}),` для запуска процесса, который анализирует исходный код TypeScript (классы, композитные функции и обычные функции), связывается с моделью ИИ для получения описания кода и создаёт или обновляет файлы документации в формате MDX.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Контекстные промпты`}),`: Генерирует документацию с использованием различных шаблонов промптов в зависимости от типа файла (Class, Composable или стандартная функция).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Многоязычная поддержка`}),`: Автоматически подставляет целевой язык документации (`,(0,c.jsx)(n.code,{children:`[wikiLanguage]`}),`) в промпт для ИИ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Компиляция в реальном времени`}),`: Перед отправкой контекста ИИ скрипт создаёт сборку, чтобы получить точный контекст поведения TypeScript.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsx)(n.p,{children:`Скрипт координирует ряд ключевых процессов для автоматизации создания документации:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsx)(n.li,{children:`Скрипт считывает список файлов из директорий, указанных в ваших конфигурационных файлах свойств проекта.`}),`
`,(0,c.jsx)(n.li,{children:`Он определяет тип кода (класс, композитная функция, обычная функция) и подготавливает специфичный для него контекст.`}),`
`,(0,c.jsx)(n.li,{children:`Выполняется компиляция кода в реальном времени для получения точной информации о типах TypeScript.`}),`
`,(0,c.jsx)(n.li,{children:`Собранный контекст вместе с шаблонами промптов отправляется в модель ИИ.`}),`
`,(0,c.jsxs)(n.li,{children:[`ИИ формирует ответ, скрипт анализирует его и напрямую создаёт или обновляет `,(0,c.jsx)(n.code,{children:`MDX`}),` файлы в репозитории.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`настройка-и-запуск`,children:`Настройка и запуск`}),`
`,(0,c.jsxs)(n.p,{children:[`Конфигурация генератора ИИ определяется централизованно в файле `,(0,c.jsx)(n.code,{children:`design.config.json`}),` вашего проекта. `,(0,c.jsx)(n.strong,{children:`Создайте этот файл в корне вашего проекта.`}),` Выполните эти точные шаги для настройки:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Настройте параметры ИИ в `,(0,c.jsx)(n.code,{children:`design.config.json`})]}),`:
Добавьте ключ API, целевую модель и язык напрямую в конфигурационный объект.`,`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "wikiLanguage": "ru",
  "aiType": "gemini",
  "aiModel": "gemini-2.0-flash",
  "aiKey": "ВАШ_API_КЛЮЧ"
}
`})}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Настройте целевые директории`}),`:
В том же `,(0,c.jsx)(n.code,{children:`design.config.json`}),` укажите, какие директории следует сканировать, переопределив пути по умолчанию `,(0,c.jsx)(n.code,{children:`aiDocDirectory`}),`. (По умолчанию это `,(0,c.jsx)(n.code,{children:`/classes/`}),`, `,(0,c.jsx)(n.code,{children:`/composables/`}),` и `,(0,c.jsx)(n.code,{children:`/functions/`}),`).`,`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "aiDocDirectory": [
    "/path/to/my/classes/",
    "/path/to/my/composables/"
  ]
}
`})}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Запустите команду`}),`:
Скрипт зарегистрирован в `,(0,c.jsx)(n.code,{children:`package.json`}),` как часть `,(0,c.jsx)(n.code,{children:`@dxtmisha/scripts`}),`. Просто выполните команду `,(0,c.jsx)(n.code,{children:`dxt-ai-doc`}),` через `,(0,c.jsx)(n.code,{children:`npx`}),` или `,(0,c.jsx)(n.code,{children:`npm`}),`:`,`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-ai-doc
`})}),`
`,`Скрипту не нужны никакие аргументы — он автоматически прочитает настройки из `,(0,c.jsx)(n.code,{children:`design.config.json`}),` и обновит нужные файлы документации.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`дополнительная-информация`,children:`Дополнительная информация`}),`
`,(0,c.jsx)(n.h3,{id:`зависимость-от-сборки-проекта`,children:`Зависимость от сборки проекта`}),`
`,(0,c.jsxs)(n.p,{children:[`Генератор сильно зависит от процесса сборки проекта. `,(0,c.jsxs)(n.strong,{children:[`Он выполняет команду `,(0,c.jsx)(n.code,{children:`npm run build`})]}),` во временной директории сборки (`,(0,c.jsx)(n.code,{children:`dist-temporary`}),`), чтобы точно получить ваши определения TypeScript, экспорты и структуру компонентов. `,(0,c.jsx)(n.strong,{children:`Если в вашем проекте есть ошибки TypeScript или сборки, скрипт генерации документации завершится сбоем.`})]}),`
`,(0,c.jsx)(n.h3,{id:`исключение-файлов-директива-пропуска`,children:`Исключение файлов (Директива пропуска)`}),`
`,(0,c.jsxs)(n.p,{children:[`Вы можете исключить конкретные файлы из обработки `,(0,c.jsx)(n.code,{children:`dxt-ai-doc`}),`, добавив комментарий `,(0,c.jsx)(n.code,{children:`// wiki:build-none`}),` в любом месте файла.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
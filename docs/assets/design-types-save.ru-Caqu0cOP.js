import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/7. Команды/dxt-types-save - Сохранение определений типов для ИИ`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-types-save`,children:`dxt-types-save`}),`
`,(0,c.jsxs)(t.p,{children:[`Команда `,(0,c.jsx)(t.code,{children:`dxt-types-save`}),` собирает и сохраняет оптимизированные для ИИ определения типов TypeScript из предварительно обработанных файлов списка без повторного вызова моделей ИИ. Она обеспечивает быструю генерацию справочника типов, проверяет наличие руководства разработчика и компилирует ресурсы для MCP-сервера.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Быстрое локальное сохранение`}),`: Объединяет обработанные декларации из директории `,(0,c.jsx)(t.code,{children:`ai-types-list`}),` без расхода токенов и сетевых запросов к API ИИ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическая проверка описания`}),`: Проверяет наличие файла `,(0,c.jsx)(t.code,{children:`ai-developer.md`}),` и генерирует его только при отсутствии.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Компиляция MCP-ресурсов`}),`: Формирует ресурсы и метаданные протокола MCP (Model Context Protocol).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Чтение готового списка`}),`: Считывает подготовленные определения типов из директории `,(0,c.jsx)(t.code,{children:`ai-types-list`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Сборка `,(0,c.jsx)(t.code,{children:`ai-types.md`})]}),`: Объединяет и сохраняет итоговый оптимизированный справочник типов TypeScript для ИИ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Проверка руководства`}),`: Проверяет наличие технического резюме в `,(0,c.jsx)(t.code,{children:`ai-developer.md`}),` и генерирует его при необходимости.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сборка конфигурации MCP`}),`: Вызывает `,(0,c.jsx)(t.code,{children:`DesignTypesMcp`}),` для формирования ресурсов MCP.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsxs)(t.p,{children:[`Запустите сохранение типов через `,(0,c.jsx)(t.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-types-save
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--prompts`}),` (`,(0,c.jsx)(t.code,{children:`-p`}),`) (Необязательно): Входная директория с файлами промптов. По умолчанию `,(0,c.jsx)(t.code,{children:`ai-resources`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--dir`}),` (`,(0,c.jsx)(t.code,{children:`-d`}),`) (Необязательно): Входная директория с файлами деклараций. По умолчанию — временная директория компиляции (`,(0,c.jsx)(t.code,{children:`ai-types-temp`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--dist`}),` (Необязательно): Выходная директория со скомпилированными файлами JavaScript. По умолчанию `,(0,c.jsx)(t.code,{children:`dist`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Выполните `,(0,c.jsx)(t.code,{children:`npx dxt-types-save --help`}),`, чтобы вывести полный список доступных опций.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
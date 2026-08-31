import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/7. Команды/dxt-prompt - Консолидированный генератор промптов ИИ`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-prompt`,children:`dxt-prompt`}),`
`,(0,c.jsxs)(t.p,{children:[`Команда `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),` генерирует консолидированный файл системных инструкций ИИ `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` в корне проекта. Этот файл объединяет все руководства по коду, стандарты BEM-классов, правила SCSS и архитектуру Vue-компонентов для тонкой настройки ИИ-ассистентов.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Централизованные руководства`}),`: Объединяет все глобальные и специфические для компонентов инструкции в один файл.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое сканирование`}),`: Рекурсивно сканирует настроенные директории модулей для сбора локальных правил и определений.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Стандартизация правил`}),`: Склеивает шаблоны промптов для Vue и общих принципов разработки, гарантируя строгое следование стандартам проекта.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сканирование папок`}),`: Скрипт обходит директории, указанные в конфигурации проекта (например, модули в `,(0,c.jsx)(t.code,{children:`src/`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сбор промптов`}),`: Извлекает локальные файлы правил и системные инструкции.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сборка контекста`}),`: Объединяет глобальные требования, правила разработки Vue и другие высокоприоритетные инструкции в структурированный шаблон.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сохранение файла`}),`: Записывает итоговый результат в файл `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` в корне репозитория.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsxs)(t.p,{children:[`Запустите генератор промптов через `,(0,c.jsx)(t.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-prompt
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Команда автоматически обновит или создаст файл `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Чтобы дополнительно сгенерировать конфигурационные файлы MCP, добавьте опцию `,(0,c.jsx)(t.code,{children:`--mcp`}),` (`,(0,c.jsx)(t.code,{children:`-m`}),`):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-prompt --mcp
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Выполните `,(0,c.jsx)(t.code,{children:`npx dxt-prompt --help`}),`, чтобы вывести полный список доступных опций.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
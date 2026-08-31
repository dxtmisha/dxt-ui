import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/2. AI/3. Память проекта`}),`
`,(0,c.jsx)(t.h1,{id:`локальная-память-пакета-ai-memorymd`,children:`Локальная память пакета (ai-memory.md)`}),`
`,(0,c.jsxs)(t.p,{children:[`Файл `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` — это механизм долговременной памяти AI-агентов на уровне конкретного пакета монорепозитория. Он позволяет сохранять архитектурный опыт, принятые решения, выявленные ограничения и предпочтения разработчика между сессиями.`]}),`
`,(0,c.jsx)(t.p,{children:`В отличие от глобальных файлов правил, память пакета динамически наполняется в процессе совместной работы и обладает наивысшим локальным приоритетом при принятии решений агентом.`}),`
`,(0,c.jsx)(t.h2,{id:`зачем-нужна-локальная-память-в-монорепозитории`,children:`Зачем нужна локальная память в монорепозитории`}),`
`,(0,c.jsxs)(t.p,{children:[`В крупном проекте с десятками пакетов (`,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),` и др.) разные части кодовой базы имеют свою специфику:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Изоляция контекста`}),` — правила и ограничения пакета `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),` не должны загрязнять контекст пакета `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional-basic`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Предотвращение повторных ошибок`}),` — если разработчик однажды указал агенту на специфический нюанс (например, запрет использования таблиц в MDX для `,(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`}),`), агент фиксирует это в памяти и никогда больше не повторяет ошибку.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Устранение зависимости от истории чата`}),` — при перезапуске контекста или открытии новой сессии агент первым шагом считывает `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` и сразу находится в курсе всех локальных договоренностей.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`строгие-правила-ведения-ai-memorymd`,children:`Строгие правила ведения ai-memory.md`}),`
`,(0,c.jsx)(t.p,{children:`Для поддержания чистоты и эффективности памяти установлены жесткие правила:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Локальное размещение (Строго в корне пакета)`}),`
Файл `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` размещается исключительно в корне соответствующего пакета (например, `,(0,c.jsx)(t.code,{children:`packages/scripts/ai-memory.md`}),`). Использование файла памяти в корне всего монорепозитория для правил конкретного пакета запрещено.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Явный триггер разработчика`}),`
Агент обновляет `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` `,(0,c.jsx)(t.strong,{children:`только`}),` по прямому указанию разработчика (ключевые слова: «Запомни», «Зафиксируй в памяти», «Remember», «Save to memory») или при согласовании критических архитектурных фиксов.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Сохранение целостности и устранение дубликатов (Integrity & Deduplication)`}),`
При добавлении нового правила разрешено `,(0,c.jsx)(t.strong,{children:`только удалять явные дубликаты или устранять прямые конфликты`}),`. Само содержимое и формулировки существующих правил не должны изменяться, сокращаться или переписываться. Категорически запрещено удалять ранее установленные правила и ограничения.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Только критические архитектурные правила`}),`
В файл памяти запрещено добавлять рутинные логи изменений, историю чата или временные данные. Фиксируются только архитектурные запреты, договоренности по типизации, форматированию и структуре.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Относительные пути`}),`
В записях памяти используются только относительные пути от корня пакета; абсолютные пути запрещены.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-файла-ai-memorymd`,children:`Пример файла ai-memory.md`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-markdown`,children:`# AI Workspace Memory (packages/scripts)

This file contains package-specific guidelines for @dxtmisha/scripts.

## Guidelines
- Follow strictly all global development principles from root ai-prompt.md.
- Documentation formatting rules for Storybook:
  - Do NOT use horizontal lines (---).
  - Do NOT use markdown tables (| ... |) — format all structured items as bullet lists (- **Key**: description).
  - Focus on practical developer workflows and actions, not internal engine details.
`})}),`
`,(0,c.jsx)(t.h2,{id:`сравнение-ai-memorymd-со-встроенной-памятью-ide`,children:`Сравнение ai-memory.md со встроенной памятью IDE`}),`
`,(0,c.jsx)(t.p,{children:`Современные редакторы кода и AI-плагины (Cursor, Windsurf, Claude Code) предлагают встроенные механизмы сохранения памяти и правил. Однако для профессиональной командной разработки и поддержки библиотек встроенные механизмы имеют три критических недостатка:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`1. Привязка к вендору (Vendor Lock-in):`}),`
Память, сохраненная внутри Cursor, не переносится в Windsurf, Claude Code, GitHub Copilot или Antigravity IDE. Файл `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` написан в стандартном Markdown и одинаково понимается любым современным агентом.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`2. Отсутствие в системе контроля версий (Git):`}),`
Встроенная память редакторов хранится локально на машине разработчика и не коммитится в репозиторий. В результате при подключении нового разработчика к проекту его AI-ассистент начинает с «чистого листа» и повторяет те же ошибки. Файл `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` хранится в Git и синхронизирует инженерный контекст всей команды.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`3. Отсутствие модульной изоляции (Package Scopes):`}),`
Встроенная память редактора чаще всего глобальна на весь репозиторий. В условиях монорепозитория правила для визуального UI-кита будут неизбежно засорять контекст работы над утилитами или бэкендом. Файл `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` строго локализован внутри своего пакета.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`как-использовать-память-в-работе`,children:`Как использовать память в работе`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Сохранение договоренности:`}),`
Разработчик: `,(0,c.jsx)(t.em,{children:`«Запомни: во всех storybook-документах этого пакета мы не используем горизонтальные разделители и таблицы»`}),`.
Агент: добавляет пункт в локальный `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` текущего пакета.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Чтение на старте сессии:`}),`
При получении любой задачи по пакету агент в соответствии с правилом `,(0,c.jsx)(t.strong,{children:`Chronological Guard`}),` первым делом открывает `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` и учитывает все сохраненные ограничения.`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
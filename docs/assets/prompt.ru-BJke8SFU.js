import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/2. AI/1. Системный промпт`}),`
`,(0,c.jsx)(t.h1,{id:`центральный-системный-промпт-ai-promptmd`,children:`Центральный системный промпт (ai-prompt.md)`}),`
`,(0,c.jsxs)(t.p,{children:[`Файл `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` — это центральный сводный документ монорепозитория, являющийся `,(0,c.jsx)(t.strong,{children:`единым источником истины (Single Source of Truth)`}),` для всех моделей искусственного интеллекта и AI-ассистентов (Claude, Gemini, Antigravity, Cursor, Windsurf, Claude Code, GitHub Copilot).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Файл генерируется автоматически утилитой `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),` и объединяет базовые системные стандарты разработки, правила компонентов и документацию всех пакетов монорепозитория и установленных библиотек.`]}),`
`,(0,c.jsxs)(t.h2,{id:`какие-проблемы-решает-ai-promptmd`,children:[`Какие проблемы решает `,(0,c.jsx)(t.code,{children:`ai-prompt.md`})]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Устранение «контекстной амнезии»`}),` — разработчику больше не нужно вручную формулировать системные промпты, напоминать правила BEM, запреты на тип `,(0,c.jsx)(t.code,{children:`any`}),` или соглашения о наименовании. Ассистент получает полный свод стандартов монорепозитория автоматически на старте сессии.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Защита от выдумывания кода (Zero Hallucinations)`}),` — в файл встроена точная карта всех доступных библиотек с описанием их назначения, функциональных возможностей и ссылками на очищенные кодовые контракты (`,(0,c.jsx)(t.code,{children:`ai-types.md`}),`). Агент использует только реально существующие методы и интерфейсы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Мгновенная синхронизация изменений`}),` — при добавлении или обновлении публичных методов в любом пакете (`,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),` и др.) достаточно выполнить `,(0,c.jsx)(t.code,{children:`npm run prompt`}),`: файл в корне репозитория обновится, и агенты во всех частях проекта сразу получат актуальные данные.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Независимость от среды разработки (Agent-Agnostic)`}),` — единый файл правил работает одинаково надежно во всех редакторах кода, IDE и с любыми современными нейросетями.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`внутренняя-структура-ai-promptmd`,children:`Внутренняя структура ai-prompt.md`}),`
`,(0,c.jsx)(t.p,{children:`Файл формируется из четырех взаимосвязанных логических блоков:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`System Role & Global Principles (AI Code Promise)`}),`
Строгие правила чистоты кода и дисциплины агента:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chronological Guard`}),` — обязательный порядок изучения контекста (`,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` ➔ `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` ➔ `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Copy-Paste Ready`}),` — генерация полных, готовых к запуску файлов без пропусков и заглушек.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Uncompromising TS`}),` — запрет типа `,(0,c.jsx)(t.code,{children:`any`}),`, обязательная строгая типизация параметров и возвращаемых значений.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Strict Scope Lock`}),` — запрет на несанкционированные правки сторонних файлов и самовольный рефакторинг.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Vue Component Implementation Rules (Vue.js Style Guide)`}),`
Стандарты разработки UI-компонентов:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Использование strictly `,(0,c.jsx)(t.code,{children:`<script setup lang="ts">`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:`Именование компонентов в PascalCase, классов по БЭМ в kebab-case.`}),`
`,(0,c.jsx)(t.li,{children:`Однонаправленный поток данных (Props Down, Events Up).`}),`
`,(0,c.jsx)(t.li,{children:`Запрет на прямое редактирование стилей готовых UI-компонентов библиотек.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Реестр пакетов и библиотек (Package Registry)`}),`
Сводка метаданных для каждого обнаруженного пакета:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Название пакета и путь к его расположению.`}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Package Description`}),` — емкая формулировка назначения библиотеки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Triggers for Studying ai-types.md`}),` — условия, при которых агент обязан изучить кодовые типы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Key Capabilities`}),` — перечень ключевых возможностей модуля.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mandatory Rules`}),` — список обязательных предметных регламентов с триггерами изучения.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Ссылочные пути к `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`, `,(0,c.jsx)(t.code,{children:`ai-developer.md`}),` и папке визуального контекста `,(0,c.jsx)(t.code,{children:`ai-screenshot/`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`High-Priority Directives`}),`
Пользовательские директивы из файла `,(0,c.jsx)(t.code,{children:`ai-instruction.md`}),` (если файл присутствует в корне проекта), переопределяющие любые базовые правила с наивысшим приоритетом.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Mandatory Final Self-Audit`}),`
Чек-лист обязательного финального самоаудита перед завершением задачи.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-фрагмента-ai-promptmd`,children:`Пример фрагмента ai-prompt.md`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-markdown`,children:`# System Role: AI Coding Assistant & Project Analyzer
Consolidated documentation, architectural guidelines, and mandatory rules for the project.

## Global Code Implementation Rules
### Global Development Principles (AI Code Promise)
0. Mandatory Deep Study (CHRONOLOGICAL GUARD):
   - Step 1: Read/create local ai-memory.md strictly in current package root.
   - Step 2: Read root ai-prompt.md and study library descriptions.
   - Step 3: Study linked ai-types.md BEFORE writing code.
1. "Copy-Paste Ready": Generate complete runnable files. No placeholders.
2. Zero Hallucinations: Strictly use package.json dependencies.
3. Uncompromising TS: No any. Interfaces for all I/O.

# @dxtmisha/d1
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/d1'.

## Package Description & Module Overview
This package provides a comprehensive collection of Vue 3 UI components and design system utilities built on top of constructor primitives.

Key Capabilities: UI Components, Form Controls, Navigation Elements, Layout Containers, Data Display

## Mandatory Rules
You MUST evaluate whether your task relates to any of the following topics:
- 'node_modules/@dxtmisha/d1/ai-resources/background.md': Rules and mixins for configuring background colors, surface opacities, and gradients in SCSS.
- 'node_modules/@dxtmisha/d1/ai-resources/border.md': SCSS styling standards and mixins for borders and dividers.

## Package Type Definitions (Must Read in Full When Working with Package)
'node_modules/@dxtmisha/d1/ai-types.md'

## Component Visual References (Screenshots)
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-8_1.webp'
`})}),`
`,(0,c.jsx)(t.h2,{id:`запуск-генерации`,children:`Запуск генерации`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Через npm-скрипт:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run prompt
`})}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Через CLI npx:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-prompt
`})}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`С генерацией ресурсов MCP (Model Context Protocol):`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-prompt --mcp
`})}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/2. AI/6. Интеграция в IDE`}),`
`,(0,c.jsx)(t.h1,{id:`интеграция-aidd-в-проекты-и-ide`,children:`Интеграция AIDD в проекты и IDE`}),`
`,(0,c.jsxs)(t.p,{children:[`Для развертывания инфраструктуры AI-Driven Development (AIDD) в новом проекте или клиентском приложении на базе библиотеки `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` необходимо выполнить стандартную настройку окружения.`]}),`
`,(0,c.jsx)(t.h2,{id:`шаг-1-подключение-пакета-скриптов`,children:`Шаг 1: Подключение пакета скриптов`}),`
`,(0,c.jsxs)(t.p,{children:[`Для того чтобы проект мог автоматически агрегировать документацию со всех установленных зависимостей `,(0,c.jsx)(t.code,{children:`@dxtmisha/*`}),`, установите пакет `,(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm install @dxtmisha/scripts --save-dev
`})}),`
`,(0,c.jsx)(t.h2,{id:`шаг-2-настройка-packagejson`,children:`Шаг 2: Настройка package.json`}),`
`,(0,c.jsxs)(t.p,{children:[`Добавьте команды запуска генератора глобального промпта в секцию `,(0,c.jsx)(t.code,{children:`scripts`}),` корневого `,(0,c.jsx)(t.code,{children:`package.json`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "scripts": {
    "prompt": "dxt-prompt",
    "postinstall": "npm run prompt"
  }
}
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`"prompt": "dxt-prompt"`})}),` — ручной запуск генерации `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` в любой момент разработки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`"postinstall": "npm run prompt"`})}),` — автоматический запуск генерации сразу после `,(0,c.jsx)(t.code,{children:`npm install`}),` или `,(0,c.jsx)(t.code,{children:`npm update`}),`, чтобы контекст ИИ автоматически обновлялся при установке свежих версий пакетов `,(0,c.jsx)(t.code,{children:`@dxtmisha/*`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`шаг-3-настройка-gitignore`,children:`Шаг 3: Настройка .gitignore`}),`
`,(0,c.jsxs)(t.p,{children:[`Сгенерированные артефакты и временные файлы не должны попадать в систему контроля версий Git. Добавьте их в `,(0,c.jsx)(t.code,{children:`.gitignore`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-gitignore`,children:`ai-prompt.md
ai-types.md
ai-description.md
ai-mcp-resources.json
ai-mcp-all-resources.json
ai-mcp-all-resources.ts
ai-tmp
ai-types-temp
`})}),`
`,(0,c.jsx)(t.h2,{id:`шаг-4-настройка-системных-инструкций-для-ai-агентов`,children:`Шаг 4: Настройка системных инструкций для AI-агентов`}),`
`,(0,c.jsxs)(t.p,{children:[`Сам по себе файл `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` работает с максимальной эффективностью, когда AI-ассистент обязан прочесть его на старте сессии. Для этого в проекте создается файл системных правил в зависимости от используемой среды разработки:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Antigravity IDE / Agent Customizations:`}),` `,(0,c.jsx)(t.code,{children:`.agents/rules/main.md`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cursor IDE:`}),` `,(0,c.jsx)(t.code,{children:`.cursorrules`}),` или `,(0,c.jsx)(t.code,{children:`.cursor/rules/*.mdc`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Windsurf IDE:`}),` `,(0,c.jsx)(t.code,{children:`.windsurfrules`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Claude Code / CLI:`}),` `,(0,c.jsx)(t.code,{children:`CLAUDE.md`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`GitHub Copilot / Codex:`}),` `,(0,c.jsx)(t.code,{children:`AGENTS.md`})]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`В созданный файл в обязательном порядке помещается следующий блок директив:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-markdown`,children:`# AI Agent Rules

## Preparation for Work (MANDATORY GUARD)
**🔴 STOP! DO NOT PROCEED UNTIL YOU DO THIS 🔴**
At the beginning of a conversation session or before starting work on code/plans, you MUST read the \`ai-prompt.md\` file located in the project root COMPLETELY in full, from the first line to the very last line, without skipping any sections or reading only partially.
Once \`ai-prompt.md\` has been read during the current session, you do NOT need to re-read it on every single turn, unless you need to refresh your context or verify specific guidelines.
If \`ai-prompt.md\` exceeds the single view line limit, make consecutive calls to view tool parameters to cover every single line of the file.
This is your absolute priority. You must strictly adhere to all rules specified in \`ai-prompt.md\`.
`})}),`
`,(0,c.jsx)(t.h2,{id:`шаг-5-первая-генерация-и-проверка`,children:`Шаг 5: Первая генерация и проверка`}),`
`,(0,c.jsx)(t.p,{children:`После настройки выполните команду сборки контекста:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run prompt
`})}),`
`,(0,c.jsxs)(t.p,{children:[`В корне репозитория будет создан итоговый файл `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`, объединяющий контракты компонентов `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`, реактивные утилиты `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),`, SCSS-токены `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),` и базовые инженерные стандарты.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
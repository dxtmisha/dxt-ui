import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/LibraryAiMcp - Генератор TypeScript-файла ресурсов MCP`}),`
`,(0,c.jsx)(t.h1,{id:`класс-libraryaimcp`,children:`Класс LibraryAiMcp`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`LibraryAiMcp`}),` отвечает за генерацию TypeScript-файла (`,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.ts`}),`) со структурированными ресурсами MCP на основе объединенного манифеста `,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.json`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическая генерация TypeScript-модуля`}),` — преобразует JSON-ресурсы в строго типизированный TypeScript-файл с динамическими импортами.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Группировка по пакетам`}),` — группирует ресурсы по именам npm-пакетов и создает переменные вида `,(0,c.jsx)(t.code,{children:`mcp<PackageName>`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поддержка динамических обработчиков`}),` — регистрирует асинхронные обработчики `,(0,c.jsx)(t.code,{children:`read: () => import(...)`}),` для текстовых и графических ресурсов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция с ai-prompt.md`}),` — автоматически включает корневой файл `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` в список глобальных ресурсов MCP при его наличии.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`source: PropertiesFilePath | Record<string, unknown>[]`}),` — `,(0,c.jsxs)(t.em,{children:[`(опционально, по умолчанию `,(0,c.jsx)(t.code,{children:`UI_FILE_AI_MCP_ALL`}),`)`]}),` путь к JSON-файлу ресурсов или массив записей.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fileTs: PropertiesFilePath`}),` — `,(0,c.jsxs)(t.em,{children:[`(опционально, по умолчанию `,(0,c.jsx)(t.code,{children:`UI_FILE_AI_MCP_ALL_TS`}),`)`]}),` путь к целевому TypeScript-файлу.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryAiMcp } from '@dxtmisha/scripts'

const mcp = new LibraryAiMcp()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`getresources-recordstring-unknown`,children:(0,c.jsx)(t.code,{children:`getResources(): Record<string, unknown>[]`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает массив распарсенных ресурсов MCP.`}),`
`,(0,c.jsx)(t.h3,{id:`isprompt-boolean`,children:(0,c.jsx)(t.code,{children:`isPrompt(): boolean`})}),`
`,(0,c.jsxs)(t.p,{children:[`Проверяет существование файла `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` в корне проекта.`]}),`
`,(0,c.jsx)(t.h3,{id:`make-void`,children:(0,c.jsx)(t.code,{children:`make(): void`})}),`
`,(0,c.jsxs)(t.p,{children:[`Читает `,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.json`}),` и генерирует `,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.ts`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryAiMcp } from '@dxtmisha/scripts'

const mcp = new LibraryAiMcp()
mcp.make()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
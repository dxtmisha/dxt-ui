import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/DesignTypesMcp - Генератор ресурсов MCP-сервера для ИИ`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designtypesmcp`,children:`Класс DesignTypesMcp`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`DesignTypesMcp`}),` отвечает за генерацию, форматирование и сохранение файла манифеста ресурсов MCP-сервера (`,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`), обеспечивающего интеграцию проекта с протоколом Model Context Protocol (MCP) для ИИ-ассистентов.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическая регистрация ресурсов`}),` — регистрирует файлы `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`, `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`, снимки экрана и промпты как стандартизированные ресурсы MCP.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поддержка динамических URI`}),` — формирует уникальные URI для каждого ресурса в формате `,(0,c.jsx)(t.code,{children:`<projectName>/<filePath>`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция с скриншотами`}),` — сканирует директорию снимков экранов `,(0,c.jsx)(t.code,{children:`ai-screenshot`}),` и регистрирует визуальные ассеты с MIME-типами `,(0,c.jsx)(t.code,{children:`image/png`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сохранение конфигурации`}),` — записывает массив определений ресурсов в `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ai: DesignTypesAi`}),` — экземпляр клиента ИИ для получения имени проекта и контекста.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`prompts: DesignTypesPrompts`}),` — менеджер промптов для получения списка специализированных файлов инструкций.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import {
  DesignTypesAi,
  DesignTypesPrompts,
  DesignTypesMcp
} from '@dxtmisha/scripts'

const ai = new DesignTypesAi('dist')
const prompts = new DesignTypesPrompts('ai-resources', ai)
const mcp = new DesignTypesMcp(ai, prompts)
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`make-promisethis`,children:(0,c.jsx)(t.code,{children:`make(): Promise<this>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Формирует список ресурсов MCP (типы, описание, скриншоты, промпты) и сохраняет их в `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const mcp = new DesignTypesMcp(ai, prompts)
await mcp.make()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/AiClaudeAgent - Сервис-класс Claude Agent SDK`}),`
`,(0,c.jsx)(n.h1,{id:`класс-aiclaudeagent`,children:`Класс AiClaudeAgent`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`AiClaudeAgent`}),` представляет собой конкретную реализацию `,(0,c.jsx)(n.code,{children:`AiClaudeAgentLite`}),`, которая интегрируется с настройками окружения проекта. Он автоматически загружает конфигурации и API-ключи с помощью `,(0,c.jsx)(n.code,{children:`getConfigAi()`}),` для инициализации Claude в режиме агента.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическая конфигурация`}),` — автоматически загружает API-ключи и модели по умолчанию с помощью `,(0,c.jsx)(n.code,{children:`getConfigAi()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Наследуемый функционал агента`}),` — поддерживает все возможности `,(0,c.jsx)(n.code,{children:`AiClaudeAgentLite`}),`, включая выполнение запросов через Agent SDK, обработку потоков текстовых сообщений и режимы авторизации для редактирования файлов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`AiClaudeAgent`}),` может быть инициализирован напрямую без аргументов конструктора, так как он автоматически извлекает учетные данные из окружения.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiClaudeAgent } from '@dxtmisha/scripts'

const agent = new AiClaudeAgent()

// Накопление инструкций/контента
agent.addContent('Убедитесь, что все вспомогательные файлы помещены в папку utils.')

// Запуск запроса в режиме агента
const response = await agent.generate('Рефакторить функции форматирования внутри helper.ts.')
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(n.p,{children:[`Этот класс не определяет дополнительных публичных методов. Он наследует все методы настройки и выполнения из `,(0,c.jsx)(n.code,{children:`AiClaudeAgentLite`}),` и `,(0,c.jsx)(n.code,{children:`AiAbstract`}),`.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
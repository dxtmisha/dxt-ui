import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/AiClaudeAgentLite - Легковесный класс Claude Agent SDK`}),`
`,(0,c.jsx)(n.h1,{id:`класс-aiclaudeagentlite`,children:`Класс AiClaudeAgentLite`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`AiClaudeAgentLite`}),` представляет собой легковесную реализацию `,(0,c.jsx)(n.code,{children:`AiAbstract`}),`, использующую пакет `,(0,c.jsx)(n.code,{children:`@anthropic-ai/claude-agent-sdk`}),` для взаимодействия с Claude в `,(0,c.jsx)(n.strong,{children:`Режиме агента`}),`. В этом режиме Claude может выполнять задачи, используя интерактивный цикл вызова инструментов, управлять локальным окружением и совершать сложные изменения файлов.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Циклы агента`}),` — использует интерактивный цикл генератора `,(0,c.jsx)(n.code,{children:`query`}),` из Agent SDK.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое принятие правок`}),` — настроен по умолчанию с `,(0,c.jsx)(n.code,{children:`permissionMode: 'acceptEdits'`}),` и `,(0,c.jsx)(n.code,{children:`allowDangerouslySkipPermissions: true`}),` для включения прямого автоматизированного редактирования локальных файлов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Отказоустойчивость`}),` — оборачивает циклы выполнения в блоки try-catch и логирует ошибки в `,(0,c.jsx)(n.code,{children:`console.error`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`AiClaudeAgentLite`}),` требует ручной передачи учетных данных через конструктор.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key: string`}),` — API-ключ для сервиса Anthropic.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`model: string`}),` — начальный идентификатор модели.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiClaudeAgentLite } from '@dxtmisha/scripts'

const agent = new AiClaudeAgentLite(process.env.ANTHROPIC_API_KEY, 'claude-3-5-sonnet-20241022')
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`внутренние-хуки-реализации`,children:`Внутренние хуки реализации`}),`
`,(0,c.jsxs)(n.p,{children:[`Эти защищенные методы реализуют обязательный интерфейс расширения `,(0,c.jsx)(n.code,{children:`AiAbstract`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Устанавливает `,(0,c.jsx)(n.code,{children:`this.ai`}),` в пустой объект для удовлетворения базового контракта инициализации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toImages(): any`}),` — Возвращает пустой массив `,(0,c.jsx)(n.code,{children:`[]`}),` (обработка изображений в настоящее время игнорируется или делегируется в режиме агента).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toContents(): any`}),` — Форматирует и объединяет накопленные текстовые инструкции `,(0,c.jsx)(n.code,{children:`contents`}),` с помощью двойного переноса строки `,(0,c.jsx)(n.code,{children:`\\n\\n`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`response(model: string, contents: string): Promise<string>`}),` — Организует генератор `,(0,c.jsx)(n.code,{children:`query`}),` из Agent SDK, прослушивая потоковые сообщения, извлекая успешный `,(0,c.jsx)(n.code,{children:`result`}),` и возвращая его в виде строки.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
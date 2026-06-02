import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/AiClaudeCliLite - Легковесный класс Claude CLI`}),`
`,(0,c.jsx)(n.h1,{id:`класс-aiclaudeclilite`,children:`Класс AiClaudeCliLite`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`AiClaudeCliLite`}),` представляет собой легковесную реализацию `,(0,c.jsx)(n.code,{children:`AiAbstract`}),`, взаимодействующую с официальным инструментом Claude CLI посредством системных команд оболочки (shell). Он управляет временными файлами промптов с помощью `,(0,c.jsx)(n.code,{children:`ApiTmp`}),`, чтобы обойти ограничения на длину аргументов терминала.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Выполнение команд в оболочке`}),` — использует системную оболочку (`,(0,c.jsx)(n.code,{children:`node:child_process`}),`) для вызова CLI-команд `,(0,c.jsx)(n.code,{children:`claude`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Маршрутизация через временные файлы`}),` — использует `,(0,c.jsx)(n.code,{children:`ApiTmp`}),` для сохранения длинных промптов/содержимого в локальные файлы `,(0,c.jsx)(n.code,{children:`.txt`}),`, размечая ссылки на них с помощью аннотации `,(0,c.jsx)(n.code,{children:`@`}),` для стабильной обработки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Безопасность промптов`}),` — автоматически экранирует двойные кавычки и принудительно навязывает строгий формат вывода ответов (например, `,(0,c.jsx)(n.code,{children:`Output strictly the code/answer. No preamble, no chatter, no reasoning`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Очистка ресурсов`}),` — автоматически удаляет все временные папки и файлы при получении ответа или возникновении ошибки.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`AiClaudeCliLite`}),` требует ручной передачи учетных данных через конструктор.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key: string`}),` — API-ключ для сервиса Anthropic.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`model: string`}),` — начальный идентификатор модели.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiClaudeCliLite } from '@dxtmisha/scripts'

const ai = new AiClaudeCliLite(process.env.ANTHROPIC_API_KEY, 'claude-3-5-sonnet-20241022')
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`внутренние-хуки-реализации`,children:`Внутренние хуки реализации`}),`
`,(0,c.jsxs)(n.p,{children:[`Эти защищенные методы реализуют обязательный интерфейс расширения `,(0,c.jsx)(n.code,{children:`AiAbstract`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Устанавливает `,(0,c.jsx)(n.code,{children:`this.ai`}),` в пустой объект.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toImages(): any`}),` — Возвращает пустой массив `,(0,c.jsx)(n.code,{children:`[]`}),` (изображения игнорируются при выполнении через CLI).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toContents(): any`}),` — Преобразует накопленные `,(0,c.jsx)(n.code,{children:`contents`}),` во временные файлы с помощью `,(0,c.jsx)(n.code,{children:`ApiTmp.createFile`}),` и возвращает их отформатированные пути.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`response(model: string, contents: string): Promise<string>`}),` — Объединяет все временные файлы, экранирует кавычки, конструирует команду оболочки, запускает ее и очищает ресурсы.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
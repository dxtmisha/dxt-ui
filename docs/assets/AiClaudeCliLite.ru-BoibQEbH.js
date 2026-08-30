import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/AiClaudeCliLite - Легковесный класс Claude CLI`}),`
`,(0,c.jsx)(t.h1,{id:`класс-aiclaudeclilite`,children:`Класс AiClaudeCliLite`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`AiClaudeCliLite`}),` представляет собой легковесную реализацию `,(0,c.jsx)(t.code,{children:`AiAbstract`}),`, взаимодействующую с официальным инструментом Claude CLI путем прямого запуска без системной оболочки (shell). Он управляет временными файлами промптов с помощью `,(0,c.jsx)(t.code,{children:`ApiTmp`}),`, чтобы обойти ограничения на длину аргументов терминала.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Прямое выполнение CLI`}),` — использует `,(0,c.jsx)(t.code,{children:`execFile`}),` (`,(0,c.jsx)(t.code,{children:`node:child_process`}),`) для прямого вызова CLI-команд `,(0,c.jsx)(t.code,{children:`claude`}),` без системной оболочки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Маршрутизация через временные файлы`}),` — использует `,(0,c.jsx)(t.code,{children:`ApiTmp`}),` для сохранения длинных промптов/содержимого в локальные файлы `,(0,c.jsx)(t.code,{children:`.txt`}),`, размечая ссылки на них с помощью аннотации `,(0,c.jsx)(t.code,{children:`@`}),` для стабильной обработки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Безопасность промптов`}),` — передает промпт массивом аргументов без shell-интерполяции, исключая риски инъекций команд, и принудительно навязывает строгий формат вывода ответов (например, `,(0,c.jsx)(t.code,{children:`Output strictly the code/answer. No preamble, no chatter, no reasoning`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Очистка ресурсов`}),` — автоматически удаляет все временные папки и файлы при получении ответа или возникновении ошибки.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`AiClaudeCliLite`}),` требует ручной передачи учетных данных через конструктор.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — API-ключ для сервиса Anthropic.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`model: string`}),` — начальный идентификатор модели.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiClaudeCliLite } from '@dxtmisha/scripts'

const ai = new AiClaudeCliLite(process.env.ANTHROPIC_API_KEY, 'claude-3-5-sonnet-20241022')
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`внутренние-хуки-реализации`,children:`Внутренние хуки реализации`}),`
`,(0,c.jsxs)(t.p,{children:[`Эти защищенные методы реализуют обязательный интерфейс расширения `,(0,c.jsx)(t.code,{children:`AiAbstract`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Устанавливает `,(0,c.jsx)(t.code,{children:`this.ai`}),` в пустой объект.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toImages(): any`}),` — Возвращает пустой массив `,(0,c.jsx)(t.code,{children:`[]`}),` (изображения игнорируются при выполнении через CLI).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toContents(): any`}),` — Преобразует накопленные `,(0,c.jsx)(t.code,{children:`contents`}),` во временные файлы с помощью `,(0,c.jsx)(t.code,{children:`ApiTmp.createFile`}),` и возвращает их отформатированные пути.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response(model: string, contents: string): Promise<string>`}),` — Объединяет все временные файлы, формирует список аргументов, запускает CLI напрямую без оболочки и очищает ресурсы.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
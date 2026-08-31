import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/ApiTmp - Утилита временных файлов промптов AI`}),`
`,(0,c.jsx)(t.h1,{id:`класс-apitmp`,children:`Класс ApiTmp`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`ApiTmp`}),` представляет собой вспомогательную утилиту, предназначенную для управления временными файлами промптов на файловой системе в директории `,(0,c.jsx)(t.code,{children:`./ai-tmp`}),`. Он в основном используется ИИ-сервисами на базе CLI для записи больших объемов текста во временные файлы во избежание превышения лимитов длины аргументов терминала.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Безопасная буферизация на диске`}),` — записывает большие блоки промптов на локальный диск во время генерации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Уникальные идентификаторы`}),` — увеличивает глобальный счетчик идентификаторов файлов, общий для всех экземпляров, для предотвращения конфликтов параллельной записи.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Очистка данных`}),` — удаляет только временные файлы, созданные экземпляром, не затрагивая файлы параллельно работающих экземпляров.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`ApiTmp`}),` может быть инициализирован напрямую.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ApiTmp } from '@dxtmisha/scripts'

const tmp = new ApiTmp()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление-файлами`,children:`Управление файлами`}),`
`,(0,c.jsx)(t.h4,{id:`createfile`,children:(0,c.jsx)(t.code,{children:`createFile`})}),`
`,(0,c.jsx)(t.p,{children:`Записывает содержимое промпта в уникально пронумерованный временный файл и возвращает отформатированную инструкцию со ссылкой для командной строки.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`content: string`}),` — Текстовое содержимое промпта для записи на диск.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`string`}),` — Отформатированная строка ссылки на путь (например, `,(0,c.jsx)(t.code,{children:`Please read the following file as it contains the prompt instructions: @./ai-tmp/Prompt-1.txt`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const promptReference = tmp.createFile('Привет, Claude, пожалуйста, сгенерируй стандартные миксины SCSS.')
`})}),`
`,(0,c.jsx)(t.h4,{id:`removefile`,children:(0,c.jsx)(t.code,{children:`removeFile`})}),`
`,(0,c.jsxs)(t.p,{children:[`Удаляет только временные файлы, созданные этим экземпляром, из директории `,(0,c.jsx)(t.code,{children:`./ai-tmp`}),`, что делает очистку безопасной при параллельном выполнении.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`tmp.removeFile()
`})}),`
`,(0,c.jsx)(t.h3,{id:`защищенные-вспомогательные-методы`,children:`Защищенные вспомогательные методы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFileName(): string`}),` — Генерирует уникальный инкрементируемый путь к файлу (например, `,(0,c.jsx)(t.code,{children:`./ai-tmp/Prompt-1.txt`}),`).`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
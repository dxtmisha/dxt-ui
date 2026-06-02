import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/ApiTmp - Утилита временных файлов промптов AI`}),`
`,(0,c.jsx)(n.h1,{id:`класс-apitmp`,children:`Класс ApiTmp`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`ApiTmp`}),` представляет собой вспомогательную утилиту, предназначенную для управления временными файлами промптов на файловой системе в директории `,(0,c.jsx)(n.code,{children:`./ai-tmp`}),`. Он в основном используется ИИ-сервисами на базе CLI для записи больших объемов текста во временные файлы во избежание превышения лимитов длины аргументов терминала.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Безопасная буферизация на диске`}),` — записывает большие блоки промптов на локальный диск во время генерации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Уникальные идентификаторы`}),` — автоматически увеличивает числовые идентификаторы файлов для предотвращения конфликтов параллельной записи.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Очистка данных`}),` — предоставляет методы для мгновенного удаления каталога с временными файлами для освобождения дискового пространства.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`ApiTmp`}),` может быть инициализирован напрямую.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ApiTmp } from '@dxtmisha/scripts'

const tmp = new ApiTmp()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление-файлами`,children:`Управление файлами`}),`
`,(0,c.jsx)(n.h4,{id:`createfile`,children:(0,c.jsx)(n.code,{children:`createFile`})}),`
`,(0,c.jsx)(n.p,{children:`Записывает содержимое промпта в уникально пронумерованный временный файл и возвращает отформатированную инструкцию со ссылкой для командной строки.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`content: string`}),` — Текстовое содержимое промпта для записи на диск.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Отформатированная строка ссылки на путь (например, `,(0,c.jsx)(n.code,{children:`Please read the following file as it contains the prompt instructions: @./ai-tmp/Prompt-1.txt`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const promptReference = tmp.createFile('Привет, Claude, пожалуйста, сгенерируй стандартные миксины SCSS.')
`})}),`
`,(0,c.jsx)(n.h4,{id:`removefile`,children:(0,c.jsx)(n.code,{children:`removeFile`})}),`
`,(0,c.jsxs)(n.p,{children:[`Полностью удаляет каталог временных файлов `,(0,c.jsx)(n.code,{children:`./ai-tmp`}),` с файловой системы.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`tmp.removeFile()
`})}),`
`,(0,c.jsx)(n.h3,{id:`защищенные-вспомогательные-методы`,children:`Защищенные вспомогательные методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFileName(): string`}),` — Генерирует уникальный инкрементируемый путь к файлу (например, `,(0,c.jsx)(n.code,{children:`./ai-tmp/Prompt-1.txt`}),`).`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
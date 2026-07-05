import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/LibraryAiPrompt - Консолидатор промптов ИИ`}),`
`,(0,c.jsx)(n.h1,{id:`класс-libraryaiprompt`,children:`Класс LibraryAiPrompt`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`LibraryAiPrompt`}),` представляет собой служебную утилиту для рекурсивного сканирования директорий проекта, сбора файлов спецификаций, описаний, типов TypeScript и скриншотов с последующим их объединением в единый структурированный файл контекстного промпта для больших языковых моделей (LLM).`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическая консолидация`}),` — собирает воедино глобальные правила разработки, Vue-стандарты и инструкции по модулям в один файл.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Рекурсивный обход директорий`}),` — сканирует рабочие пространства и каталоги компонентов для поиска и обработки файлов контекста.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Строгое форматирование вывода`}),` — оформляет разделы с четкими разделителями и иерархией заголовков, разделяя логику, типы и архитектуру.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция высокоприоритетных правил`}),` — считывает переопределяющие инструкции самого высокого приоритета и встраивает их в конец файла.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Работа с файловой системой`}),` — использует класс `,(0,c.jsx)(n.code,{children:`PropertiesFile`}),` для безопасного считывания ресурсов и выгрузки готового промпта по пути назначения.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`LibraryAiPrompt`}),` может быть инициализирован с необязательным массивом дополнительных путей для сканирования.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirs: string[]`}),` — (Опционально) Дополнительные директории для обхода.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryAiPrompt } from '@dxtmisha/scripts'

const consolidator = new LibraryAiPrompt(['custom/path/to/modules'])
`})}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`выполнение`,children:`Выполнение`}),`
`,(0,c.jsx)(n.h4,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsx)(n.p,{children:`Основной управляющий метод: запускает сканирование папок, собирает правила и промпты модулей, добавляет приоритетные инструкции и записывает объединенный файл.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`consolidator.make()
`})}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`защищенный-api-сканирования`,children:`Защищенный API сканирования`}),`
`,(0,c.jsx)(n.h4,{id:`getlist`,children:(0,c.jsx)(n.code,{children:`getList`})}),`
`,(0,c.jsxs)(n.p,{children:[`Рекурсивно обходит каталоги до определенного лимита глубины, игнорируя скрытые папки, и возвращает собранные экземпляры `,(0,c.jsx)(n.code,{children:`LibraryAiPromptItem`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirs: string[]`}),` — (По умолчанию: внутренний список `,(0,c.jsx)(n.code,{children:`dirs`}),`) Целевые директории для сканирования.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string[]`}),` — Текущие накопленные сегменты пути.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`limit: number`}),` — (По умолчанию: `,(0,c.jsx)(n.code,{children:`4`}),`) Лимит глубины для избежания бесконечного зацикливания при наличии ссылок.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`LibraryAiPromptItem[]`})]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`защищенные-вспомогательные-методы`,children:`Защищенные вспомогательные методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isFileOnDirs(dirs: string[]): boolean`}),` — Проверяет, является ли хотя бы один элемент в каталоге файлом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getInstruction(): string | undefined`}),` — Считывает и форматирует высокоприоритетные инструкции при наличии файла.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getVuePrompt(): string`}),` — Загружает стандартные правила реализации Vue SFC-компонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getGlobalPrompt(): string`}),` — Загружает глобальные принципы чистого кода проекта.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`write(prompts: string[]): this`}),` — Сохраняет сгенерированный массив строк в результирующий файл.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
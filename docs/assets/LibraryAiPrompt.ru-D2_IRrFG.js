import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/LibraryAiPrompt - Консолидатор промптов ИИ`}),`
`,(0,c.jsx)(t.h1,{id:`класс-libraryaiprompt`,children:`Класс LibraryAiPrompt`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`LibraryAiPrompt`}),` представляет собой служебную утилиту для рекурсивного сканирования директорий проекта, сбора файлов спецификаций, описаний, типов TypeScript и скриншотов с последующим их объединением в единый структурированный файл контекстного промпта для больших языковых моделей (LLM).`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическая консолидация`}),` — собирает воедино глобальные правила разработки, Vue-стандарты и инструкции по модулям в один файл.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Рекурсивный обход директорий`}),` — сканирует рабочие пространства и каталоги компонентов для поиска и обработки файлов контекста.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Строгое форматирование вывода`}),` — оформляет разделы с четкими разделителями и иерархией заголовков, разделяя логику, типы и архитектуру.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция высокоприоритетных правил`}),` — считывает переопределяющие инструкции самого высокого приоритета и встраивает их в конец файла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Работа с файловой системой`}),` — использует класс `,(0,c.jsx)(t.code,{children:`PropertiesFile`}),` для безопасного считывания ресурсов и выгрузки готового промпта по пути назначения.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`LibraryAiPrompt`}),` может быть инициализирован с необязательным массивом дополнительных путей для сканирования.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirs: string[]`}),` — (Опционально) Дополнительные директории для обхода.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryAiPrompt } from '@dxtmisha/scripts'

const consolidator = new LibraryAiPrompt(['custom/path/to/modules'])
`})}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`выполнение`,children:`Выполнение`}),`
`,(0,c.jsx)(t.h4,{id:`make`,children:(0,c.jsx)(t.code,{children:`make`})}),`
`,(0,c.jsx)(t.p,{children:`Основной управляющий метод: запускает сканирование папок, собирает правила и промпты модулей, добавляет приоритетные инструкции и записывает объединенный файл.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`consolidator.make()
`})}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h3,{id:`защищенный-api-сканирования`,children:`Защищенный API сканирования`}),`
`,(0,c.jsx)(t.h4,{id:`getlist`,children:(0,c.jsx)(t.code,{children:`getList`})}),`
`,(0,c.jsxs)(t.p,{children:[`Рекурсивно обходит каталоги до определенного лимита глубины, игнорируя скрытые папки, и возвращает собранные экземпляры `,(0,c.jsx)(t.code,{children:`LibraryAiPromptItem`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirs: string[]`}),` — (По умолчанию: внутренний список `,(0,c.jsx)(t.code,{children:`dirs`}),`) Целевые директории для сканирования.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string[]`}),` — Текущие накопленные сегменты пути.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit: number`}),` — (По умолчанию: `,(0,c.jsx)(t.code,{children:`4`}),`) Лимит глубины для избежания бесконечного зацикливания при наличии ссылок.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`LibraryAiPromptItem[]`})]}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h3,{id:`защищенные-вспомогательные-методы`,children:`Защищенные вспомогательные методы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isFileOnDirs(dirs: string[]): boolean`}),` — Проверяет, является ли хотя бы один элемент в каталоге файлом.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getInstruction(): string | undefined`}),` — Считывает и форматирует высокоприоритетные инструкции при наличии файла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getVuePrompt(): string`}),` — Загружает стандартные правила реализации Vue SFC-компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getGlobalPrompt(): string`}),` — Загружает глобальные принципы чистого кода проекта.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`write(prompts: string[]): this`}),` — Сохраняет сгенерированный массив строк в результирующий файл.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
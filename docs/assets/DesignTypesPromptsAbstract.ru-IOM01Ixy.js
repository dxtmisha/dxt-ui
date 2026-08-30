import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/DesignTypesPromptsAbstract - Абстрактный менеджер промптов и правил для ИИ`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designtypespromptsabstract`,children:`Класс DesignTypesPromptsAbstract`}),`
`,(0,c.jsxs)(t.p,{children:[`Абстрактный класс `,(0,c.jsx)(t.code,{children:`DesignTypesPromptsAbstract`}),` предоставляет базовую архитектуру для сканирования, анализа, кэширования и компиляции файлов правил и промптов (`,(0,c.jsx)(t.code,{children:`ai-resources/`}),`) в обязательные инструкции для ИИ-ассистентов.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поиск промптов`}),`: Рекурсивный поиск файлов промптов и инструкций.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Инкрементальный MD5 кэш`}),`: Создание и ведение отдельных JSON файлов метаданных в `,(0,c.jsx)(t.code,{children:`ai-types-list/ai-resources/`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Генерация метаданных через ИИ`}),`: Использование LLM для извлечения кратких названий и описаний правил.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Формирование обязательных правил`}),`: Компиляция форматированных директив для включения в `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`параметры-конструктора`,children:`Параметры конструктора`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`promptsDir: string`}),` — относительный путь к директории с промптами (по умолчанию `,(0,c.jsx)(t.code,{children:`'ai-resources'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ai: DesignTypesAi`}),` — экземпляр `,(0,c.jsx)(t.code,{children:`DesignTypesAi`}),` для выполнения запросов к ИИ и получения имени проекта.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-getcachelist-designtypespromptcachelist`,children:(0,c.jsx)(t.code,{children:`abstract getCacheList(): DesignTypesPromptCacheList`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает список метаданных промптов из кэша.`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-make-promisethis`,children:(0,c.jsx)(t.code,{children:`abstract make(): Promise<this>`})}),`
`,(0,c.jsx)(t.p,{children:`Обрабатывает файлы промптов и обновляет кэш метаданных.`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-toaiprompts-promisestring`,children:(0,c.jsx)(t.code,{children:`abstract toAiPrompts(): Promise<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Формирует строку обязательных правил для ИИ на основе промптов.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
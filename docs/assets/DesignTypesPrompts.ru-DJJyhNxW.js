import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/DesignTypesPrompts - Менеджер промптов и правил для ИИ`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designtypesprompts`,children:`Класс DesignTypesPrompts`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`DesignTypesPrompts`}),` управляет чтением файлов промптов из директории `,(0,c.jsx)(t.code,{children:`ai-resources/`}),`, кэшированием метаданных промптов в формате JSON и генерацией инструкций и триггеров использования для ИИ-ассистентов.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`MD5-отслеживание промптов`}),` — отслеживает изменения в исходных Markdown-файлах промптов и сохраняет сгенерированные метаданные в `,(0,c.jsx)(t.code,{children:`.json`}),` кэш.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеллектуальное резюмирование`}),` — с помощью ИИ генерирует лаконичное описание назначения и условий применения для каждого файла промпта.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция системных правил`}),` — извлекает и форматирует системные правила проекта и триггеры вызова промптов для включения в `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поддержка динамического пути`}),` — сканирует директорию `,(0,c.jsx)(t.code,{children:`ai-resources/`}),` внутри пакета и node_modules.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`promptsDir: string`}),` — `,(0,c.jsxs)(t.em,{children:[`(опционально, по умолчанию `,(0,c.jsx)(t.code,{children:`'ai-resources'`}),`)`]}),` путь к директории с файлами промптов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ai: DesignTypesAi`}),` — экземпляр клиента ИИ для генерации метаданных.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesAi, DesignTypesPrompts } from '@dxtmisha/scripts'

const ai = new DesignTypesAi('dist')
const prompts = new DesignTypesPrompts('ai-resources', ai)
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`getcachelist-designtypespromptcachelist`,children:(0,c.jsx)(t.code,{children:`getCacheList(): DesignTypesPromptCacheList`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает список закэшированных метаданных промптов.`}),`
`,(0,c.jsx)(t.h3,{id:`getlistprompts-designtypeslist`,children:(0,c.jsx)(t.code,{children:`getListPrompts(): DesignTypesList`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает список всех найденных файлов промптов с их содержимым и MD5-хэшами.`}),`
`,(0,c.jsx)(t.h3,{id:`init-promisestring`,children:(0,c.jsx)(t.code,{children:`init(): Promise<string[]>`})}),`
`,(0,c.jsx)(t.p,{children:`Инициализирует правила промптов и возвращает массив отформатированных строк директив.
Возвращает список закэшированных метаданных промптов.`}),`
`,(0,c.jsx)(t.h3,{id:`toaiprompts-promisestring`,children:(0,c.jsx)(t.code,{children:`toAiPrompts(): Promise<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Генерирует форматированный блок правил проекта и триггеров вызова промптов для ИИ-ассистента.`}),`
`,(0,c.jsx)(t.h3,{id:`make-promisethis`,children:(0,c.jsx)(t.code,{children:`make(): Promise<this>`})}),`
`,(0,c.jsx)(t.p,{children:`Выполняет сканирование промптов, обновляет кэш метаданных и подготавливает их для экспорта.`}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesAi, DesignTypesPrompts } from '@dxtmisha/scripts'

const ai = new DesignTypesAi('dist')
const prompts = new DesignTypesPrompts('ai-resources', ai)

await prompts.make()
const rules = await prompts.toAiPrompts()
console.log(rules)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
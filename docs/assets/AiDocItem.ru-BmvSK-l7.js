import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/AiDocItem - Генератор документации функций через ИИ`}),`
`,(0,c.jsx)(t.h1,{id:`класс-aidocitem`,children:`Класс AiDocItem`}),`
`,(0,c.jsx)(t.p,{children:`Специализированный класс для генерации и обновления документации TypeScript-функций с помощью ИИ. Он упрощает создание подробных описаний функций, пояснений к параметрам и примеров использования.`}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Оптимизация для функций`}),` — использует специальные шаблоны (`,(0,c.jsx)(t.code,{children:`aiDocFunctionPrompt.en.txt`}),`), разработанные для документирования логики и алгоритмов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Визуальное единство`}),` — использует эталонные данные из `,(0,c.jsx)(t.code,{children:`demoDocEn.mdx`}),` для создания документации, соответствующей стандартам проекта.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Полный рабочий процесс`}),` — берет на себя все этапы: от чтения исходной функции до записи финального MDX-файла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Умные метаданные`}),` — автоматически определяет корректный путь в Wiki и формирует стандартизированный заголовок страницы.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Инициализируйте `,(0,c.jsx)(t.code,{children:`AiDocItem`}),`, указав путь к проекту и метаданные целевого файла.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — базовый путь к директории проекта.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: GitFileItem`}),` — информация о конкретном файле функции.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiDocItem } from '@dxtmisha/scripts'

const functionDoc = new AiDocItem('/src/functions', gitFileItem)

// Запуск генерации документации
await functionDoc.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): Promise<void>`}),` — управляет полным процессом документирования: проверкой обновлений, подготовкой контекста для ИИ и записью результатов.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`метаданные`,children:`Метаданные`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTitle(): string`}),` — формирует стандартизированный заголовок для страницы документации функции.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPathWiki(): string[]`}),` — рассчитывает путь хранения в Wiki на основе расположения файла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isBuildDisabled(): boolean`}),` — проверяет, помечен ли исходный файл маркером `,(0,c.jsx)(t.code,{children:`// wiki:build-none`}),` для пропуска генерации.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h3,{id:`gitfileitem`,children:`GitFileItem`}),`
`,(0,c.jsx)(t.p,{children:`Представляет информацию о файле, управляемом Git.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — относительный путь к файлу.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`pathByOS: string`}),` — абсолютный путь, специфичный для ОС.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`date: string`}),` — дата последнего изменения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: any`}),` — зарезервировано для дополнительных метаданных.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
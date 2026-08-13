import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/AiDocItemClasses - Генератор документации классов через ИИ`}),`
`,(0,c.jsx)(t.h1,{id:`класс-aidocitemclasses`,children:`Класс AiDocItemClasses`}),`
`,(0,c.jsx)(t.p,{children:`Специализированный класс для генерации и обновления документации TypeScript-классов с помощью ИИ. Он автоматизирует весь процесс: от чтения исходного кода и сбора контекста до взаимодействия с моделями ИИ и создания стандартизированных MDX-файлов документации.`}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматизированная генерация`}),` — управляет полным циклом создания документации на основе определения класса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`На основе шаблонов`}),` — использует специализированные шаблоны промптов (`,(0,c.jsx)(t.code,{children:`aiDocClassPrompt.en.txt`}),`) для обеспечения согласованных ответов ИИ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Демо-ориентированность`}),` — использует эталонные демонстрационные файлы (`,(0,c.jsx)(t.code,{children:`demoClassEn.mdx`}),`), чтобы помочь ИИ в визуальном форматировании.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Умная логика`}),` — автоматически определяет пути в Wiki и заголовки на основе структуры исходного файла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Защита процесса сборки`}),` — интегрируется с системой сборки, гарантируя, что документируется только корректный, компилируемый код.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Инициализируйте `,(0,c.jsx)(t.code,{children:`AiDocItemClasses`}),`, указав путь к исходному коду и информацию о целевом файле.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — базовый путь к директории проекта.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: GitFileItem`}),` — информация о конкретном TypeScript-файле класса.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiDocItemClasses } from '@dxtmisha/scripts'

const classDoc = new AiDocItemClasses('/src/classes', gitFileItem)

// Запуск генерации документации
await classDoc.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): Promise<void>`}),` — запускает цикл документирования: проверяет наличие обновлений, подготавливает контекст, вызывает ИИ и записывает результаты.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`метаданные`,children:`Метаданные`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTitle(): string`}),` — формирует стандартизированный заголовок для страницы документации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPathWiki(): string[]`}),` — рассчитывает путь хранения в Wiki на основе расположения файла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isBuildDisabled(): boolean`}),` — проверяет, помечен ли файл маркером `,(0,c.jsx)(t.code,{children:`// wiki:build-none`}),` для пропуска обработки.`]}),`
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
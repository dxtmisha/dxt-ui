import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/AiDocItemComposables - Генератор документации композаблов через ИИ`}),`
`,(0,c.jsx)(n.h1,{id:`класс-aidocitemcomposables`,children:`Класс AiDocItemComposables`}),`
`,(0,c.jsx)(n.p,{children:`Специализированный класс для генерации и обновления документации Vue-композаблов (Composables) с помощью ИИ. Он автоматизирует процесс анализа функций композиции, сбора контекста и создания высококачественной MDX-документации.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ориентированность на Composables`}),` — использует специальные шаблоны (`,(0,c.jsx)(n.code,{children:`aiDocComposablePrompt.en.txt`}),`), адаптированные для документирования функций композиции.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Визуальные демо`}),` — включает эталонные данные из `,(0,c.jsx)(n.code,{children:`demoComposableEn.mdx`}),` для поддержания единого стиля документации композаблов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Полная автоматизация`}),` — берет на себя технические этапы: чтение кода, проверку статуса сборки и запись финальных результатов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Умная маршрутизация`}),` — автоматически рассчитывает подходящий путь хранения в Wiki и заголовок страницы.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Инициализируйте `,(0,c.jsx)(n.code,{children:`AiDocItemComposables`}),`, указав путь к проекту и метаданные целевого файла.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — базовый путь к директории проекта.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: GitFileItem`}),` — информация о конкретном файле композабла.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiDocItemComposables } from '@dxtmisha/scripts'

const composableDoc = new AiDocItemComposables('/src/composables', gitFileItem)

// Запуск генерации документации
await composableDoc.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): Promise<void>`}),` — выполняет полный цикл документирования: проверяет наличие обновлений, подготавливает контекст для ИИ и записывает результат.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`метаданные`,children:`Метаданные`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTitle(): string`}),` — формирует стандартизированный заголовок для документации композабла.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPathWiki(): string[]`}),` — рассчитывает путь в Wiki на основе расположения файла в проекте.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isBuildDisabled(): boolean`}),` — проверяет, содержит ли исходный файл маркер `,(0,c.jsx)(n.code,{children:`// wiki:build-none`}),`, чтобы пропустить генерацию.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`gitfileitem`,children:`GitFileItem`}),`
`,(0,c.jsx)(n.p,{children:`Представляет информацию о файле, управляемом Git.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — относительный путь к файлу.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathByOS: string`}),` — абсолютный путь, специфичный для ОС.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`date: string`}),` — дата последнего изменения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: any`}),` — зарезервировано для дополнительных метаданных.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
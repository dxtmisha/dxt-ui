import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/AiDocItemComposables - Генератор документации композаблов через ИИ`}),`
`,(0,c.jsx)(t.h1,{id:`класс-aidocitemcomposables`,children:`Класс AiDocItemComposables`}),`
`,(0,c.jsx)(t.p,{children:`Специализированный класс для генерации и обновления документации Vue-композаблов (Composables) с помощью ИИ. Он автоматизирует процесс анализа функций композиции, сбора контекста и создания высококачественной MDX-документации.`}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ориентированность на Composables`}),` — использует специальные шаблоны (`,(0,c.jsx)(t.code,{children:`aiDocComposablePrompt.en.txt`}),`), адаптированные для документирования функций композиции.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Визуальные демо`}),` — включает эталонные данные из `,(0,c.jsx)(t.code,{children:`demoComposableEn.mdx`}),` для поддержания единого стиля документации композаблов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Полная автоматизация`}),` — берет на себя технические этапы: чтение кода, проверку статуса сборки и запись финальных результатов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Умная маршрутизация`}),` — автоматически рассчитывает подходящий путь хранения в Wiki и заголовок страницы.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Инициализируйте `,(0,c.jsx)(t.code,{children:`AiDocItemComposables`}),`, указав путь к проекту и метаданные целевого файла.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — базовый путь к директории проекта.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: GitFileItem`}),` — информация о конкретном файле композабла.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiDocItemComposables } from '@dxtmisha/scripts'

const composableDoc = new AiDocItemComposables('/src/composables', gitFileItem)

// Запуск генерации документации
await composableDoc.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): Promise<void>`}),` — выполняет полный цикл документирования: проверяет наличие обновлений, подготавливает контекст для ИИ и записывает результат.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`метаданные`,children:`Метаданные`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTitle(): string`}),` — формирует стандартизированный заголовок для документации композабла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPathWiki(): string[]`}),` — рассчитывает путь в Wiki на основе расположения файла в проекте.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isBuildDisabled(): boolean`}),` — проверяет, содержит ли исходный файл маркер `,(0,c.jsx)(t.code,{children:`// wiki:build-none`}),`, чтобы пропустить генерацию.`]}),`
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
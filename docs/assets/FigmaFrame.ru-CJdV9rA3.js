import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/figma-code/Classes/FigmaFrame - Менеджер фреймов`}),`
`,(0,c.jsx)(n.h1,{id:`класс-figmaframe`,children:`Класс FigmaFrame`}),`
`,(0,c.jsx)(n.p,{children:`Комплексная утилита для навигации и извлечения данных из фреймов и секций Figma. Поддерживает рекурсивный анализ и группировку узлов как для целых страниц, так и для активных выделений.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Контекстная зависимость`}),` — Автоматически обрабатывает различия в логике между анализом всей страницы и активным выделением.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Фильтрация узлов`}),` — Специализированные методы для получения только фреймов, секций или текстовых узлов из иерархии.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Агрегация текста`}),` — Группировка текстовых узлов по содержимому для упрощения перевода и анализа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Массовый экспорт`}),` — Оптимизированное асинхронное создание скриншотов для всех основных элементов в контексте.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`FigmaFrame(page, selection)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`page: UiFigmaNode`}),` — Корневой узел (обычно `,(0,c.jsx)(n.code,{children:`figma.currentPage`}),` или `,(0,c.jsx)(n.code,{children:`PageNode`}),`) для анализа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selection: boolean = false`}),` — Если `,(0,c.jsx)(n.code,{children:`true`}),`, экземпляр будет обрабатывать только узлы в текущем выделении, а не на всей странице.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaFrame } from '@dxtmisha/figma-code'

// 1. Инициализация для всей страницы
const pageManager = new FigmaFrame(figma.currentPage)

// 2. Инициализация конкретно для текущего выделения
const selectionManager = new FigmaFrame(figma.currentPage, true)
`})}),`
`,(0,c.jsx)(n.h2,{id:`контекст-и-анализ`,children:`Контекст и анализ`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSelection(): boolean`}),` — Проверяет, ограничен ли контекст текущим выделением. Пример: `,(0,c.jsx)(n.code,{children:`frameManager.isSelection()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMainFrames(): FigmaItem[]`}),` — Возвращает основные фреймы/секции от корня. Пример: `,(0,c.jsx)(n.code,{children:`const roots = frameManager.getMainFrames()`})]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`фильтрация-иерархии`,children:`Фильтрация иерархии`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemsFrame(): FigmaItem<FrameNode>[]`}),` — Фильтрует иерархию по узлам FRAME. Пример: `,(0,c.jsx)(n.code,{children:`const frames = frameManager.getItemsFrame()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemsSection(): FigmaItem<SectionNode>[]`}),` — Фильтрует иерархию по узлам SECTION. Пример: `,(0,c.jsx)(n.code,{children:`const sections = frameManager.getItemsSection()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemsText(): FigmaItem<TextNode>[]`}),` — Фильтрует иерархию по узлам TEXT. Пример: `,(0,c.jsx)(n.code,{children:`const textNodes = frameManager.getItemsText()`})]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`данные-и-захват-capture`,children:`Данные и захват (Capture)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTexts(): UiFigmaItemText[]`}),` — Агрегирует текстовые узлы, группируя их по контенту. Пример: `,(0,c.jsx)(n.code,{children:`const groups = frameManager.getTexts()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`screenshot(): Promise<Uint8Array[]>`}),` — Асинхронно создает JPG-скриншоты элементов. Пример: `,(0,c.jsx)(n.code,{children:`const images = await frameManager.screenshot()`})]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы-types`,children:`Типы (Types)`}),`
`,(0,c.jsx)(n.h3,{id:`uifigmanode`,children:(0,c.jsx)(n.code,{children:`UiFigmaNode`})}),`
`,(0,c.jsx)(n.p,{children:`Тип-объединение (union), представляющий любой релевантный узел Figma, который может содержать дочерние элементы или обрабатываться менеджером.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Включает: `,(0,c.jsx)(n.code,{children:`DocumentNode`}),`, `,(0,c.jsx)(n.code,{children:`PageNode`}),`, `,(0,c.jsx)(n.code,{children:`FrameNode`}),`, `,(0,c.jsx)(n.code,{children:`SectionNode`}),`, `,(0,c.jsx)(n.code,{children:`TextNode`}),` и другие варианты `,(0,c.jsx)(n.code,{children:`SceneNode`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`uifigmaitemtext`,children:(0,c.jsx)(n.code,{children:`UiFigmaItemText`})}),`
`,(0,c.jsx)(n.p,{children:`Структура объекта, используемая для группировки текстового содержимого по всему документу.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string[]`}),` — список уникальных ID узлов Figma, в которых найден этот текст.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text: string`}),` — само текстовое содержимое (очищенное от лишних пробелов).`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
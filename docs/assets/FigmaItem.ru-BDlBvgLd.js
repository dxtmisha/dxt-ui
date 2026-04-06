import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/figma-code/Classes/FigmaItem - Обертка узла`}),`
`,(0,c.jsx)(n.h1,{id:`класс-figmaitem`,children:`Класс FigmaItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс-обертка для узлов Figma (`,(0,c.jsx)(n.code,{children:`UiFigmaNode`}),`), который предоставляет упрощенный типизированный интерфейс для общих операций, таких как проверка типа, навигация по дереву и асинхронный экспорт.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Типизированный доступ`}),` — Предоставляет методы-тайпгарды для узлов `,(0,c.jsx)(n.code,{children:`DOCUMENT`}),`, `,(0,c.jsx)(n.code,{children:`FRAME`}),`, `,(0,c.jsx)(n.code,{children:`SECTION`}),` и `,(0,c.jsx)(n.code,{children:`TEXT`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Упрощенная навигация`}),` — Легкий доступ к родительским или дочерним узлам, обернутым в экземпляры `,(0,c.jsx)(n.code,{children:`FigmaItem`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Экспорт`}),` — Высокоуровневые методы для экспорта узлов в форматы JPG или JSON.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Анализ контента`}),` — Специализированная логика для извлечения и валидации текстового содержимого.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`FigmaItem(item)`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`ограничения-универсальных-типов-generics`,children:`Ограничения универсальных типов (Generics)`}),`
`,(0,c.jsx)(n.p,{children:`Класс поддерживает параметр универсального типа для строгой типизации:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`T extends UiFigmaNode`}),` — Конкретный тип обернутого узла Figma.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: T`}),` — Нативный узел Figma (например, `,(0,c.jsx)(n.code,{children:`SceneNode`}),`, `,(0,c.jsx)(n.code,{children:`FrameNode`}),`, `,(0,c.jsx)(n.code,{children:`TextNode`}),`), который необходимо обернуть.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaItem } from '@dxtmisha/figma-code'

// 1. Обертывание текущего выделенного узла
const item = new FigmaItem(figma.currentPage.selection[0])

// 2. Использование дженериков для конкретных типов узлов
const frameItem = new FigmaItem<FrameNode>(someFrameNode)
`})}),`
`,(0,c.jsx)(n.h2,{id:`идентификация-узла`,children:`Идентификация узла`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDocument(): boolean`}),` — Проверяет, является ли узел документом. Пример: `,(0,c.jsx)(n.code,{children:`item.isDocument()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isFrame(): boolean`}),` — Проверяет, является ли узел фреймом. Пример: `,(0,c.jsx)(n.code,{children:`item.isFrame()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSection(): boolean`}),` — Проверяет, является ли узел секцией. Пример: `,(0,c.jsx)(n.code,{children:`item.isSection()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isText(): boolean`}),` — Проверяет, является ли узел текстовым. Пример: `,(0,c.jsx)(n.code,{children:`item.isText()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isTextNoValue(): boolean`}),` — Фильтрует текстовые узлы со значимым контентом. Пример: `,(0,c.jsx)(n.code,{children:`item.isTextNoValue()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getType(): string | undefined`}),` — Возвращает строковую константу типа узла. Пример: `,(0,c.jsx)(n.code,{children:`const type = item.getType()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getId(): string`}),` — Возвращает уникальный ID узла. Пример: `,(0,c.jsx)(n.code,{children:`const id = item.getId()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(): string`}),` — Возвращает отображаемое имя узла. Пример: `,(0,c.jsx)(n.code,{children:`const name = item.getName()`})]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`навигация`,children:`Навигация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParent(): UiFigmaNode | undefined`}),` — Возвращает нативный родительский узел. Пример: `,(0,c.jsx)(n.code,{children:`const parent = item.getParent()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParentItem(): FigmaItem | undefined`}),` — Возвращает родителя, обернутого в `,(0,c.jsx)(n.code,{children:`FigmaItem`}),`. Пример: `,(0,c.jsx)(n.code,{children:`const parentItem = item.getParentItem()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getChildren(): UiFigmaNode[]`}),` — Возвращает массив нативных дочерних узлов. Пример: `,(0,c.jsx)(n.code,{children:`const children = item.getChildren()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getChildrenItems(): FigmaItem[]`}),` — Возвращает массив обернутых дочерних узлов. Пример: `,(0,c.jsx)(n.code,{children:`const items = item.getChildrenItems()`})]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`данные-и-экспорт`,children:`Данные и экспорт`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): T`}),` — Возвращает исходный нативный узел Figma. Пример: `,(0,c.jsx)(n.code,{children:`const raw = item.get()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`exportJpg(): Promise<Uint8Array | string>`}),` — Асинхронно экспортирует узел в JPG. Пример: `,(0,c.jsx)(n.code,{children:`const bytes = await item.exportJpg()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`exportJson(): Promise<Uint8Array | string>`}),` — Асинхронно экспортирует узел в JSON. Пример: `,(0,c.jsx)(n.code,{children:`const json = await item.exportJson()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getText(): string`}),` — Извлекает очищенное текстовое содержимое. Пример: `,(0,c.jsx)(n.code,{children:`const content = item.getText()`})]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы-types`,children:`Типы (Types)`}),`
`,(0,c.jsx)(n.h3,{id:`uifigmanode`,children:(0,c.jsx)(n.code,{children:`UiFigmaNode`})}),`
`,(0,c.jsxs)(n.p,{children:[`Тип-объединение (union), представляющий любой релевантный узел Figma, который может быть обернут в `,(0,c.jsx)(n.code,{children:`FigmaItem`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Включает: `,(0,c.jsx)(n.code,{children:`DocumentNode`}),`, `,(0,c.jsx)(n.code,{children:`PageNode`}),`, `,(0,c.jsx)(n.code,{children:`FrameNode`}),`, `,(0,c.jsx)(n.code,{children:`SectionNode`}),`, `,(0,c.jsx)(n.code,{children:`TextNode`}),` и другие варианты `,(0,c.jsx)(n.code,{children:`SceneNode`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`uifigmaexportformat`,children:(0,c.jsx)(n.code,{children:`UiFigmaExportFormat`})}),`
`,(0,c.jsx)(n.p,{children:`Поддерживаемые форматы для операций экспорта узлов.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Значения: `,(0,c.jsx)(n.code,{children:`'PNG'`}),`, `,(0,c.jsx)(n.code,{children:`'JPG'`}),`, `,(0,c.jsx)(n.code,{children:`'SVG'`}),`, `,(0,c.jsx)(n.code,{children:`'PDF'`}),`, `,(0,c.jsx)(n.code,{children:`'JSON_REST_V1'`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
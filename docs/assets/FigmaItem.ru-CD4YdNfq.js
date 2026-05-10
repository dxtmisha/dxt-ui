import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/figma-code/Classes/FigmaItem - Обертка для узлов Figma`}),`
`,(0,c.jsxs)(n.h1,{id:`класс-figmaitem`,children:[`Класс `,(0,c.jsx)(n.code,{children:`FigmaItem`})]}),`
`,(0,c.jsx)(n.p,{children:`Универсальный класс-обертка для работы с любыми типами узлов Figma. Предоставляет типизированные методы для проверки типов, навигации по дереву элементов и выполнения частых операций, таких как экспорт и управление вьюпортом.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Типобезопасность`}),` — Использует Type Guards (`,(0,c.jsx)(n.code,{children:`isFrame`}),`, `,(0,c.jsx)(n.code,{children:`isText`}),` и т. д.) для безопасного доступа к свойствам конкретных типов узлов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Удобная навигация`}),` — Методы для получения родительских элементов или дочерних узлов, уже обернутых в экземпляры `,(0,c.jsx)(n.code,{children:`FigmaItem`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Встроенные действия`}),` — Поддержка экспорта узлов в JPG/JSON и управления вьюпортом Figma (выделение и масштабирование).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Оберните любой узел Figma в экземпляр `,(0,c.jsx)(n.code,{children:`FigmaItem`}),`, чтобы получить доступ к его вспомогательным методам.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaItem } from '@dxtmisha/figma-code'

// Обертывание узла (например, из выделения)
const item = new FigmaItem(figma.currentPage.selection[0])

if (item.isFrame()) {
  console.log('Узел является фреймом:', item.getName())
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`проверка-типов`,children:`Проверка типов`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDocument(): boolean`}),` — Проверяет, является ли узел документом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isFrame(): boolean`}),` — Проверяет, является ли узел фреймом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSection(): boolean`}),` — Проверяет, является ли узел секцией.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isText(): boolean`}),` — Проверяет, является ли узел текстовым узлом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isTextNoValue(): boolean`}),` — Проверяет, является ли узел текстовым узлом с осмысленным содержанием.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`inCurrentPage(): boolean`}),` — Проверяет, принадлежит ли узел текущей активной странице.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`иерархия-и-навигация`,children:`Иерархия и навигация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): T`}),` — Возвращает исходный узел Figma.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParent(): UiFigmaNode | undefined`}),` — Возвращает исходный родительский узел.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParentItem(): FigmaItem | undefined`}),` — Возвращает родительский узел, обернутый в `,(0,c.jsx)(n.code,{children:`FigmaItem`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParentPage(): PageNode | undefined`}),` — Возвращает родительскую страницу узла.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParentPageItem(): FigmaItem | undefined`}),` — Возвращает родительскую страницу, обернутую в `,(0,c.jsx)(n.code,{children:`FigmaItem`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getChildren(): UiFigmaNode[]`}),` — Возвращает список дочерних узлов в исходном формате.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getChildrenItems(): FigmaItem[]`}),` — Возвращает все дочерние узлы, обернутые в `,(0,c.jsx)(n.code,{children:`FigmaItem`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`контент-и-информация`,children:`Контент и информация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getId(): string`}),` — Возвращает уникальный идентификатор узла.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(): string`}),` — Возвращает имя узла.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getType(): string`}),` — Возвращает строку с типом узла.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getText(): string`}),` — Возвращает текстовое содержимое (только для текстовых узлов).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getInfo(): Promise<UiFigmaFramesItem>`}),` — Асинхронно собирает базовую информацию об узле (имя, ID, скриншот).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCss(): Promise<Record<string, string>>`}),` — Асинхронно извлекает CSS-стили текущего узла.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStyles(): Promise<UiFigmaFrameStylesItem>`}),` — Асинхронно извлекает расширенную информацию о стилях (CSS, текст, JSON).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`экспорт-и-действия`,children:`Экспорт и действия`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`exportJpg(): Promise<Uint8Array>`}),` — Экспортирует узел как изображение JPG.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`exportJson(): Promise<any>`}),` — Экспортирует полные данные узла в формате JSON.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`exportJsonCompact(): Promise<UiFigmaFrameStylesData | undefined>`}),` — Экспортирует данные узла в компактном формате JSON.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toSelection(): void`}),` — Выделяет узел и фокусирует на нем вьюпорт.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toPageAndSelection(): Promise<void>`}),` — Переключается на страницу узла и выделяет его.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы-данных`,children:`Типы данных`}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframesitem`,children:(0,c.jsx)(n.code,{children:`UiFigmaFramesItem`})}),`
`,(0,c.jsx)(n.p,{children:`Базовая информация об элементе для отображения в интерфейсе.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Название элемента в Figma.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — Уникальный идентификатор узла.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`image?: Uint8Array | string`}),` — Скриншот элемента (бинарные данные или base64).`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframestylesitem`,children:(0,c.jsx)(n.code,{children:`UiFigmaFrameStylesItem`})}),`
`,(0,c.jsxs)(n.p,{children:[`Расширенная информация об элементе, включая его стили. Наследует все поля `,(0,c.jsx)(n.code,{children:`UiFigmaFramesItem`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`json?: UiFigmaFrameStylesData`}),` — Структура данных узла и стилей в формате JSON.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text?: string`}),` — Текстовое содержимое (если узел является текстовым).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styles?: Record<string, string>`}),` — Объект с CSS-свойствами самого элемента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`childrenStyles?: Record<string, Record<string, string>>`}),` — Карта CSS-стилей для всех дочерних элементов, индексированная по их ID.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframestylesdata`,children:(0,c.jsx)(n.code,{children:`UiFigmaFrameStylesData`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`document: UiFigmaFrameStylesJson`}),` — Дерево узлов в компактном формате.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styles: Record<string, any>`}),` — Словарь определений стилей документа.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframestylesjson`,children:(0,c.jsx)(n.code,{children:`UiFigmaFrameStylesJson`})}),`
`,(0,c.jsx)(n.p,{children:`Компактное представление узла Figma для JSON-экспорта.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — Уникальный идентификатор узла.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Имя узла.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — Тип узла.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`characters?: string`}),` — Текст (для текстовых узлов).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`children?: UiFigmaFrameStylesJson[]`}),` — Рекурсивный список дочерних элементов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`style?: Record<string, any>`}),` — Параметры оформления.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styles?: Record<string, any>`}),` — Связанные стили.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
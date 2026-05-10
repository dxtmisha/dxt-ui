import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/figma-code/Classes/FigmaFrame - Анализ структуры Figma`}),`
`,(0,c.jsxs)(n.h1,{id:`класс-figmaframe`,children:[`Класс `,(0,c.jsx)(n.code,{children:`FigmaFrame`})]}),`
`,(0,c.jsx)(n.p,{children:`Утилитарный класс для анализа и взаимодействия со структурой страниц или выделенных областей в Figma. Он рекурсивно сканирует дерево узлов, фильтрует элементы по типу и предоставляет вспомогательные методы для извлечения текста и генерации скриншотов.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Рекурсивное сканирование`}),` — Автоматически индексирует все вложенные элементы внутри предоставленного контекста (страница или выделение).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поддержка выделения`}),` — Может быть инициализирован для работы как со всей страницей документа, так и только с текущим выделением пользователя.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Агрегация текстов`}),` — Метод `,(0,c.jsx)(n.code,{children:`getTexts()`}),` группирует идентичные текстовые строки, возвращая список уникальных значений и связанных с ними ID узлов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматизированный экспорт`}),` — Упрощает процесс создания скриншотов для основных элементов внутри фрейма.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Создайте новый экземпляр, передав начальный узел (обычно страницу) и указав, следует ли фокусироваться на выделении.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaFrame } from '@dxtmisha/figma-code'

// Анализ всей текущей страницы
const frameAnalyzer = new FigmaFrame(figma.currentPage)

// Анализ только выделенных объектов
const selectionAnalyzer = new FigmaFrame(figma.currentPage, true)
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`состояние-и-навигация`,children:`Состояние и навигация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSelection(): boolean`}),` — Проверяет, является ли текущий контекст выделением.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMainFrames(): FigmaItem[]`}),` — Извлекает основные фреймы или секции из корня текущего контекста (страницы или выделения).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`фильтрация-и-выборка`,children:`Фильтрация и выборка`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemsFrame(): FigmaItem<FrameNode>[]`}),` — Возвращает список всех вложенных узлов, являющихся фреймами.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemsSection(): FigmaItem<SectionNode>[]`}),` — Возвращает список всех вложенных узлов, являющихся секциями.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemsText(): FigmaItem<TextNode>[]`}),` — Возвращает список всех вложенных текстовых узлов.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`контент-и-информация`,children:`Контент и информация`}),`
`,(0,c.jsx)(n.h4,{id:`getitemsinfo`,children:(0,c.jsx)(n.code,{children:`getItemsInfo`})}),`
`,(0,c.jsx)(n.p,{children:`Асинхронно собирает подробную информацию (имя, ID, скриншот) для всех элементов во фрейме.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<UiFigmaFramesList>`}),` — Промис со списком информации об элементах.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const infoList: UiFigmaFramesList = await frame.getItemsInfo()
/*
[
  { id: '1:10', name: 'Button', image: Uint8Array[...] },
  { id: '1:25', name: 'Card', image: 'data:image/png;base64...' }
]
*/
`})}),`
`,(0,c.jsx)(n.h4,{id:`getmainitemsinfo`,children:(0,c.jsx)(n.code,{children:`getMainItemsInfo`})}),`
`,(0,c.jsx)(n.p,{children:`Асинхронно собирает подробную информацию только для основных (верхнеуровневых) элементов.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<UiFigmaFramesList>`}),` — Промис со списком информации об основных элементах.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const mainInfoList: UiFigmaFramesList = await frame.getMainItemsInfo()
/*
[
  { id: '1:10', name: 'Login Screen', image: Uint8Array[...] }
]
*/
`})}),`
`,(0,c.jsx)(n.h4,{id:`gettexts`,children:(0,c.jsx)(n.code,{children:`getTexts`})}),`
`,(0,c.jsx)(n.p,{children:`Группирует текстовые узлы по их содержимому, возвращая уникальные строки и список ID соответствующих нод.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`UiFigmaItemText[]`}),` — Массив сгруппированных текстовых элементов.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const groupedTexts: UiFigmaItemText[] = frame.getTexts()
/*
[
  { id: ['1:10', '1:15'], text: 'Submit' },
  { id: ['1:20'], text: 'Cancel' }
]
*/
`})}),`
`,(0,c.jsx)(n.h3,{id:`анализ-стилей`,children:`Анализ стилей`}),`
`,(0,c.jsx)(n.h4,{id:`getitemscss`,children:(0,c.jsx)(n.code,{children:`getItemsCss`})}),`
`,(0,c.jsx)(n.p,{children:`Генерирует карту CSS-стилей для всех элементов фрейма.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<UiFigmaFrameStylesCssList>`}),` — Промис с картой стилей, индексированной по ID узла.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const cssStyles: UiFigmaFrameStylesCssList = await frame.getItemsCss()
/*
{
  '1:10': { 'color': '#ff0000', 'font-size': '14px' },
  '1:12': { 'background': '#ffffff', 'padding': '10px' }
}
*/
`})}),`
`,(0,c.jsx)(n.h4,{id:`getitemsstyles`,children:(0,c.jsx)(n.code,{children:`getItemsStyles`})}),`
`,(0,c.jsx)(n.p,{children:`Извлекает полные данные о стилях (JSON-структуру документа, текст, CSS) для всех элементов.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<UiFigmaFrameStylesList>`}),` — Промис со списком расширенных данных о стилях.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const stylesList: UiFigmaFrameStylesList = await frame.getItemsStyles()
/*
[
  { 
    id: '1:10', 
    name: 'Label', 
    text: 'Username', 
    styles: { 'color': '#333' },
    json: { document: {...}, styles: {...} }
  }
]
*/
`})}),`
`,(0,c.jsx)(n.h4,{id:`getmainitemsstyles`,children:(0,c.jsx)(n.code,{children:`getMainItemsStyles`})}),`
`,(0,c.jsx)(n.p,{children:`Извлекает полные данные о стилях только для основных элементов, включая стили их дочерних элементов.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<UiFigmaFrameStylesList>`}),` — Промис со списком расширенных данных о стилях основных элементов.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const mainStylesList: UiFigmaFrameStylesList = await frame.getMainItemsStyles()
/*
[
  { 
    id: '1:10', 
    name: 'Login Form', 
    childrenStyles: {
       '1:11': { 'color': '#000' },
       '1:12': { 'margin-top': '20px' }
    }
  }
]
*/
`})}),`
`,(0,c.jsx)(n.h3,{id:`экспорт-и-действия`,children:`Экспорт и действия`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`screenshot(): Promise<Uint8Array[]>`}),` — Создает скриншоты в формате JPG для всех основных элементов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы-данных`,children:`Типы данных`}),`
`,(0,c.jsx)(n.h4,{id:`uifigmanode`,children:(0,c.jsx)(n.code,{children:`UiFigmaNode`})}),`
`,(0,c.jsxs)(n.p,{children:[`Базовый тип для узлов Figma. Представляет собой объединение (`,(0,c.jsx)(n.code,{children:`SceneNode | DocumentNode | PageNode | FrameNode`}),` и др.), поддерживающих вложенность и стандартные свойства Figma API.`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaitemtext`,children:(0,c.jsx)(n.code,{children:`UiFigmaItemText`})}),`
`,(0,c.jsx)(n.p,{children:`Результат группировки текстовых слоев по их содержимому.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string[]`}),` — Массив уникальных идентификаторов узлов, имеющих одинаковый текст.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text: string`}),` — Само текстовое значение.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmamessagetexts`,children:(0,c.jsx)(n.code,{children:`UiFigmaMessageTexts`})}),`
`,(0,c.jsx)(n.p,{children:`Структура данных для передачи результатов анализа текстов.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`frame: FigmaFrame`}),` — Экземпляр класса анализатора.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`texts: UiFigmaItemText[]`}),` — Список найденных и сгруппированных текстов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`screenshot: Uint8Array[]`}),` — Массив скриншотов основных элементов.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframesitem`,children:(0,c.jsx)(n.code,{children:`UiFigmaFramesItem`})}),`
`,(0,c.jsx)(n.p,{children:`Упрощенная информация об элементе для отображения в интерфейсе.`}),`
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
`,(0,c.jsx)(n.h4,{id:`uifigmaframestyleslist`,children:(0,c.jsx)(n.code,{children:`UiFigmaFrameStylesList`})}),`
`,(0,c.jsxs)(n.p,{children:[`Массив объектов типа `,(0,c.jsx)(n.code,{children:`UiFigmaFrameStylesItem`}),`.`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframestylescsslist`,children:(0,c.jsx)(n.code,{children:`UiFigmaFrameStylesCssList`})}),`
`,(0,c.jsxs)(n.p,{children:[`Объект (`,(0,c.jsx)(n.code,{children:`Record<string, Record<string, string>>`}),`), где ключом является ID узла, а значением — его набор CSS-стилей.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
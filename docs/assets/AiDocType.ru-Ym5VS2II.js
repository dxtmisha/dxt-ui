import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/AiDocType - Менеджер типов AI-документации`}),`
`,(0,c.jsx)(n.h1,{id:`класс-aidoctype`,children:`Класс AiDocType`}),`
`,(0,c.jsx)(n.p,{children:`Управляющий класс, который выступает в роли реестра и селектора для различных типов документации. Он определяет, какой специализированный обработчик (например, для классов, функций или композаблов) следует использовать для конкретного файла на основе его характеристик.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Динамическая регистрация`}),` — позволяет добавлять новые типы документации в систему во время выполнения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Умный выбор`}),` — автоматически идентифицирует подходящий обработчик, перебирая зарегистрированные типы и выполняя их логику проверки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Делегирование`}),` — координирует создание экземпляров и выполнение специализированных обработчиков документации (реализаций `,(0,c.jsx)(n.code,{children:`AiDocItemAbstract`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Статический API`}),` — предоставляет удобный статический интерфейс для глобального управления документацией без необходимости создания экземпляров класса.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`AiDocType`}),` предназначен для использования через статические методы. Инициализация не требуется.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiDocType } from '@dxtmisha/scripts'

// Движок использует этот класс внутри для обработки элементов файлов:
await AiDocType.make(gitFileItem)
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление-документацией`,children:`Управление документацией`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(item: GitFileItem): Promise<void>`}),` — (Статический) Анализирует переданный элемент файла, выбирает соответствующий тип документации и запускает процесс генерации.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`управление-реестром`,children:`Управление реестром`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(type: AiDocTypeItem): void`}),` — (Статический) Регистрирует новый тип документации, добавляя его в начало приоритетного списка.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`aidoctypeitem`,children:`AiDocTypeItem`}),`
`,(0,c.jsx)(n.p,{children:`Конфигурация для обработчика типа документации.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`check: (item: GitFileItem) => boolean`}),` — функция определения применимости обработчика к файлу.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: new (path: string, item: GitFileItem) => AiDocItemAbstract`}),` — конструктор класса обработчика.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`gitfileitem`,children:`GitFileItem`}),`
`,(0,c.jsx)(n.p,{children:`Представляет информацию о файле, управляемом Git.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — относительный путь к файлу.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathByOS: string`}),` — абсолютный путь, специфичный для ОС.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`date: string`}),` — дата последнего изменения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: any`}),` — зарезервировано для дополнительных метаданных.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
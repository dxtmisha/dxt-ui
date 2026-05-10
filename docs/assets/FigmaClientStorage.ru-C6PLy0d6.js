import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/figma-code/Classes/FigmaClientStorage - Работа с клиентским хранилищем`}),`
`,(0,c.jsxs)(n.h1,{id:`класс-figmaclientstorage`,children:[`Класс `,(0,c.jsx)(n.code,{children:`FigmaClientStorage`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Высокоуровневая обертка над API `,(0,c.jsx)(n.code,{children:`clientStorage`}),` в Figma. Предоставляет удобный интерфейс для постоянного хранения данных на машине пользователя, поддерживая кэширование, значения по умолчанию и автоматическое управление данными.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Доступ через Синглтон`}),` — Используйте `,(0,c.jsx)(n.code,{children:`getInstance()`}),`, чтобы гарантировать согласованный доступ к одному и тому же ключу хранилища из разных частей плагина.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Значения по умолчанию`}),` — Метод `,(0,c.jsx)(n.code,{children:`get()`}),` может принимать значение по умолчанию или асинхронную функцию для инициализации хранилища, если оно пустое.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поддержка кэша`}),` — Интеграция с `,(0,c.jsx)(n.code,{children:`FigmaStorageData`}),` для управления актуальностью данных и минимизации избыточных вызовов API.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Получите экземпляр класса, используя статический метод `,(0,c.jsx)(n.code,{children:`getInstance()`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaClientStorage } from '@dxtmisha/figma-code'

// Получение экземпляра для 'user-settings'
const storage = FigmaClientStorage.getInstance<object>('user-settings')
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`доступ-к-данным`,children:`Доступ к данным`}),`
`,(0,c.jsx)(n.h4,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Получает данные из хранилища. Если хранилище пустое и передано значение по умолчанию, оно будет записано и возвращено.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T | (() => T | Promise<T>)`}),` — (Опционально) Значение или функция для инициализации хранилища при отсутствии данных.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<T | undefined>`}),` — Сохраненное значение.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const theme = await storage.get('light')
`})}),`
`,(0,c.jsx)(n.h4,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsx)(n.p,{children:`Обновляет данные в хранилище.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: T | (() => T | Promise<T>)`}),` — Новое значение или функция, возвращающая его.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<T | undefined>`}),` — Новое установленное значение.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`await storage.set('dark')
`})}),`
`,(0,c.jsx)(n.h4,{id:`remove`,children:(0,c.jsx)(n.code,{children:`remove`})}),`
`,(0,c.jsx)(n.p,{children:`Удаляет данные, связанные с ключом хранилища.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<this>`}),` — Текущий экземпляр.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`await storage.remove()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
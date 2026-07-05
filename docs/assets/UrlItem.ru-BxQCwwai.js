import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/UrlItem - Управление URL`}),`
`,(0,c.jsx)(n.h1,{id:`класс-urlitem`,children:`Класс UrlItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`UrlItem`}),` представляет собой `,(0,c.jsx)(n.strong,{children:`изоморфный утилитарный класс`}),` для парсинга, управления и обновления URL-адресов как на стороне клиента (DOM), так и на стороне сервера (SSR). Он инкапсулирует стандартный объект `,(0,c.jsx)(n.code,{children:`URL`}),`, предоставляя чистые геттеры свойств только для чтения и вспомогательные методы для работы с параметрами запроса.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Изоморфная поддержка`}),` — автоматически определяет базовый URL-адрес в зависимости от среды выполнения (window.location в браузере, localhost при серверном рендеринге).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Изоляция запросов в SSR`}),` — предоставляет метод `,(0,c.jsx)(n.code,{children:`getInstance()`}),`, поддерживаемый `,(0,c.jsx)(n.code,{children:`ServerStorage`}),`, для изоляции контекстов URL внутри каждого потока запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Вспомогательные методы параметров`}),` — предоставляет чистые методы с поддержкой цепочки вызовов (chaining) для проверки, получения, установки или удаления параметров запроса без ручного форматирования строки поиска.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`аксессоры`,children:`Аксессоры`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get href(): string`}),` — Возвращает полную строку URL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get protocol(): string`}),` — Возвращает протокол, включая двоеточие на конце.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get username(): string`}),` — Возвращает имя пользователя.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get password(): string`}),` — Возвращает пароль.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get host(): string`}),` — Возвращает хост (имя хоста и порт).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get hostname(): string`}),` — Возвращает имя хоста (без порта).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get port(): string`}),` — Возвращает порт.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get pathname(): string`}),` — Возвращает путь к ресурсу.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get search(): string`}),` — Возвращает строку запроса, включая ведущий вопросительный знак.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get searchParams(): URLSearchParams`}),` — Возвращает стандартный объект `,(0,c.jsx)(n.code,{children:`URLSearchParams`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get hash(): string`}),` — Возвращает хеш-строку, включая ведущий знак решетки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get origin(): string`}),` — Возвращает источник URL (только для чтения).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParam(name: string): string | undefined`}),` — Возвращает значение параметра запроса или `,(0,c.jsx)(n.code,{children:`undefined`}),`, если параметр не найден.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getParams(): Record<string, any>`}),` — Возвращает все параметры запроса в виде объекта с преобразованными типами.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`проверка`,children:`Проверка`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hasParam(name: string): boolean`}),` — Проверяет, существует ли указанный параметр запроса.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(url?: string | URL): this`}),` — Обновляет значение URL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setParam(name: string, value: string): this`}),` — Устанавливает значение параметра запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setParams(params: Record<string, any>): this`}),` — Заменяет все параметры запроса на указанный объект.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`deleteParam(name: string): this`}),` — Удаляет параметр запроса.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`вспомогательные`,children:`Вспомогательные`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static getInstance(): UrlItem`}),` — Возвращает изолированный в рамках запроса экземпляр UrlItem.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toString(): string`}),` — Преобразует экземпляр Url в его строковое представление.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toJSON(): string`}),` — Преобразует экземпляр Url в строковое представление JSON.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`архитектура-в-ssr`,children:`Архитектура в SSR`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`UrlItem`}),` обеспечивает изолированное управление экземплярами в рамках запроса с помощью `,(0,c.jsx)(n.code,{children:`ServerStorage`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`управление-экземпляром`,children:`Управление экземпляром`}),`
`,(0,c.jsxs)(n.p,{children:[`При вызове `,(0,c.jsx)(n.code,{children:`UrlItem.getInstance()`}),` класс извлекает или инициализирует экземпляр, хранящийся в `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` под уникальным ключом (`,(0,c.jsx)(n.code,{children:`__ui:url-item__`}),`). Эта архитектура решает две основные проблемы:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Потокобезопасность в SSR`}),`: Во время серверного рендеринга несколько серверных запросов выполняются одновременно. `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` гарантирует, что каждый запрос имеет свой собственный изолированный контекст `,(0,c.jsx)(n.code,{children:`UrlItem`}),`, предотвращая утечку параметров запроса между сессиями пользователей.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Простота синглтона на клиенте`}),`: На стороне клиента класс ведет себя как настоящий синглтон, позволяя компонентам глобально читать и обновлять параметры URL.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
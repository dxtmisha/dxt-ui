import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/ApiDataReturn - Обработка данных ответа API`}),`
`,(0,c.jsx)(n.h1,{id:`класс-apidatareturn`,children:`Класс ApiDataReturn`}),`
`,(0,c.jsx)(n.p,{children:`Класс для обработки и подготовки данных, полученных в результате запроса к API. Он преобразует необработанные данные ответа в структурированный формат, извлекает метаданные и сопоставляет содержимое в соответствии с запрошенной конфигурацией.`}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiDataReturn`}),` является `,(0,c.jsx)(n.strong,{children:`вспомогательным классом`}),`, предназначенным для обработки и форматирования данных ответа API. В большинстве случаев рекомендуется взаимодействовать с результатами через ответ, возвращаемый методами `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` или глобальным объектом `,(0,c.jsx)(n.code,{children:`Api`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматический парсинг`}),` — интеллектуально анализирует JSON-ответы или возвращает необработанный текст на основе заголовков Content-Type.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Нормализация данных`}),` — гарантирует, что возвращаемый объект соответствует согласованной структуре, даже если ответ сервера различается.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Извлечение метаданных`}),` — автоматически извлекает общие поля, такие как `,(0,c.jsx)(n.code,{children:`success`}),`, `,(0,c.jsx)(n.code,{children:`status`}),`, `,(0,c.jsx)(n.code,{children:`code`}),` и `,(0,c.jsx)(n.code,{children:`message`}),`, из корня ответа и объединяет их с объектом данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Гибкая конфигурация`}),` — поддерживает пользовательскую логику обработки через `,(0,c.jsx)(n.code,{children:`queryReturn`}),` и управляет развертыванием поля `,(0,c.jsx)(n.code,{children:`data`}),` с помощью `,(0,c.jsx)(n.code,{children:`toData`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async init(): Promise<this>`}),` — Инициализирует класс, считывая и анализируя данные из объекта ответа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): ApiData<T>`}),` — Возвращает обработанные и отформатированные данные.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAndStatus(status: ApiStatus): ApiData<T>`}),` — Возвращает обработанные данные с внедренным объектом `,(0,c.jsx)(n.code,{children:`statusObject`}),` из предоставленного экземпляра статуса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getData(): ApiData<T> | undefined`}),` — Возвращает исходные, неотформатированные данные, как они были изначально считаны из ответа.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`внутренняя-логика-protected`,children:`Внутренняя логика (Protected)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`readData<T>(): Promise<ApiData<T>>`}),` — Низкоуровневый метод, который считывает тело ответа и парсит его как JSON или текст.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initData(): ApiData<T>`}),` — Форматирует необработанные данные в соответствии с конфигурацией, обрабатывая развертывание свойств.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initItem(data: Record<string, any>): ApiData<T>`}),` — Переносит поля метаданных из корня ответа в основной объект данных.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
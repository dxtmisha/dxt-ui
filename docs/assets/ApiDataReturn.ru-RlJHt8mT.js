import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/ApiDataReturn - Обработка данных ответа API`}),`
`,(0,c.jsx)(t.h1,{id:`класс-apidatareturn`,children:`Класс ApiDataReturn`}),`
`,(0,c.jsx)(t.p,{children:`Класс для обработки и подготовки данных, полученных в результате запроса к API. Он преобразует необработанные данные ответа в структурированный формат, извлекает метаданные и сопоставляет содержимое в соответствии с запрошенной конфигурацией.`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ApiDataReturn`}),` является `,(0,c.jsx)(t.strong,{children:`вспомогательным классом`}),`, предназначенным для обработки и форматирования данных ответа API. В большинстве случаев рекомендуется взаимодействовать с результатами через ответ, возвращаемый методами `,(0,c.jsx)(t.code,{children:`ApiInstance`}),` или глобальным объектом `,(0,c.jsx)(t.code,{children:`Api`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматический парсинг`}),` — интеллектуально анализирует JSON-ответы или возвращает необработанный текст на основе заголовков Content-Type.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Нормализация данных`}),` — гарантирует, что возвращаемый объект соответствует согласованной структуре, даже если ответ сервера различается.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Извлечение метаданных`}),` — автоматически извлекает общие поля, такие как `,(0,c.jsx)(t.code,{children:`success`}),`, `,(0,c.jsx)(t.code,{children:`status`}),`, `,(0,c.jsx)(t.code,{children:`code`}),` и `,(0,c.jsx)(t.code,{children:`message`}),`, из корня ответа и объединяет их с объектом данных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Гибкая конфигурация`}),` — поддерживает пользовательскую логику обработки через `,(0,c.jsx)(t.code,{children:`queryReturn`}),` и управляет развертыванием поля `,(0,c.jsx)(t.code,{children:`data`}),` с помощью `,(0,c.jsx)(t.code,{children:`toData`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`async init(): Promise<this>`}),` — Инициализирует класс, считывая и анализируя данные из объекта ответа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): ApiData<T>`}),` — Возвращает обработанные и отформатированные данные.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAndStatus(status: ApiStatus): ApiData<T>`}),` — Возвращает обработанные данные с внедренным объектом `,(0,c.jsx)(t.code,{children:`statusObject`}),` из предоставленного экземпляра статуса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getData(): ApiData<T> | undefined`}),` — Возвращает исходные, неотформатированные данные, как они были изначально считаны из ответа.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`внутренняя-логика-protected`,children:`Внутренняя логика (Protected)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`readData<T>(): Promise<ApiData<T>>`}),` — Низкоуровневый метод, который считывает тело ответа и парсит его как JSON или текст.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initData(): ApiData<T>`}),` — Форматирует необработанные данные в соответствии с конфигурацией, обрабатывая развертывание свойств.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initItem(data: Record<string, any>): ApiData<T>`}),` — Переносит поля метаданных из корня ответа в основной объект данных.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
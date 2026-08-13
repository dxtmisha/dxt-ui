import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/ApiHydration - Гидратация данных API`}),`
`,(0,c.jsx)(t.h1,{id:`класс-apihydration`,children:`Класс ApiHydration`}),`
`,(0,c.jsx)(t.p,{children:`Класс для сбора данных API для гидратации на стороне клиента во время SSR (Server-Side Rendering). Он позволяет серверу захватывать ответы API во время начальной отрисовки и передавать их клиенту, предотвращая избыточные сетевые запросы при инициализации приложения в браузере.`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ApiHydration`}),` является `,(0,c.jsx)(t.strong,{children:`вспомогательным классом`}),`, предназначенным для управления данными SSR. В большинстве случаев рекомендуется взаимодействовать с гидратацией через глобальный объект `,(0,c.jsx)(t.code,{children:`Api`}),`, используя такие методы, как `,(0,c.jsx)(t.code,{children:`Api.getHydrationScript()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Оптимизация SSR`}),` — сокращает количество запросов после загрузки страницы за счет повторного использования серверных данных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Захват данных`}),` — автоматически собирает успешные ответы API, помеченные для глобального использования.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Внедрение в HTML`}),` — генерирует безопасный тег `,(0,c.jsx)(t.code,{children:`<script>`}),` с JSON-сериализованными данными для вставки в документ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синхронизация с клиентом`}),` — позволяет `,(0,c.jsx)(t.code,{children:`ApiResponse`}),` автоматически загружать гидрированные данные на стороне клиента.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsx)(t.h4,{id:`toclient`,children:(0,c.jsx)(t.code,{children:`toClient`})}),`
`,(0,c.jsxs)(t.p,{children:[`Сохраняет ответ API для гидратации на стороне клиента. Этот метод выполняется только на сервере и только для запросов, где `,(0,c.jsx)(t.code,{children:`global`}),` установлен в true.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apiFetch: ApiFetch`}),` — Конфигурация запроса API.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response: T`}),` — Данные ответа, которые будут переданы клиенту.`]}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`tostring`,children:(0,c.jsx)(t.code,{children:`toString`})}),`
`,(0,c.jsxs)(t.p,{children:[`Возвращает строковое представление захваченных данных гидратации, обернутое в безопасный тег `,(0,c.jsx)(t.code,{children:`<script>`}),` с уникальным ID.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`string`}),` — Отформатированный HTML-тег скрипта.`]}),`
`,(0,c.jsx)(t.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initResponse(response: ApiResponse): void`}),` — Инициализирует экземпляр `,(0,c.jsx)(t.code,{children:`ApiResponse`}),` данными гидратации, если код выполняется в среде DOM.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h4,{id:`apihydrationlist`,children:(0,c.jsx)(t.code,{children:`ApiHydrationList`})}),`
`,(0,c.jsx)(t.p,{children:`Список захваченных ответов API для гидратации.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — Путь эндпоинта API.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`method: ApiMethodItem`}),` — Используемый HTTP-метод.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`request: any`}),` — Данные запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response: any`}),` — Данные ответа сервера.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`global?: boolean`}),` — Флаг глобального использования.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`руководство-механика-гидратации`,children:`Руководство: Механика гидратации`}),`
`,(0,c.jsx)(t.p,{children:`Следующие правила и условия определяют, как система гидратации захватывает и передает данные между сервером и браузером:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Флаг global`}),` — захватываются только те запросы, у которых свойство `,(0,c.jsx)(t.code,{children:`global`}),` в конфигурации установлено в `,(0,c.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическая обработка`}),` — флаг `,(0,c.jsx)(t.code,{children:`global`}),` автоматически устанавливается в `,(0,c.jsx)(t.code,{children:`true`}),` для всех `,(0,c.jsx)(t.code,{children:`GET`}),`-запросов. Другие методы требуют явного включения вручную.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Серверное выполнение`}),` — захват данных происходит исключительно на стороне сервера (где `,(0,c.jsx)(t.code,{children:`isDomRuntime()`}),` возвращает false).`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/ApiDefault - Данные API по умолчанию`}),`
`,(0,c.jsx)(n.h1,{id:`класс-apidefault`,children:`Класс ApiDefault`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс для управления данными по умолчанию для API-запросов. Он позволяет устанавливать базовые параметры, которые должны быть включены в каждый запрос, поддерживая как стандартные объекты, так и `,(0,c.jsx)(n.code,{children:`FormData`}),`. Это полезно для централизованного определения общих полей, таких как токены, ID приложения или настройки локализации.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiDefault`}),` является `,(0,c.jsx)(n.strong,{children:`вспомогательным классом`}),`, предназначенным для управления значениями по умолчанию в запросах. В большинстве случаев рекомендуется определять их через параметр `,(0,c.jsx)(n.code,{children:`requestDefault`}),` в глобальной конфигурации `,(0,c.jsx)(n.code,{children:`Api`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Централизованные значения`}),` — Определите общие параметры один раз для всех вызовов API.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поддержка различных форматов`}),` — Бесшовно работает как с обычными объектами JavaScript, так и с `,(0,c.jsx)(n.code,{children:`FormData`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеллектуальное слияние`}),` — Объединяет значения по умолчанию с данными конкретного запроса, отдавая приоритет данным запроса при совпадении ключей.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chainable API`}),` — Поддерживает цепочку вызовов при установке параметров.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsx)(n.h4,{id:`request`,children:(0,c.jsx)(n.code,{children:`request`})}),`
`,(0,c.jsxs)(n.p,{children:[`Объединяет сохраненные данные по умолчанию с предоставленным объектом запроса или экземпляром `,(0,c.jsx)(n.code,{children:`FormData`}),`. Если входные данные являются объектом, метод возвращает новый объединенный объект. Если входные данные — `,(0,c.jsx)(n.code,{children:`FormData`}),`, недостающие ключи добавляются напрямую в экземпляр.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request: ApiFetch['request']`}),` — Исходные данные запроса (Object, FormData или String).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`ApiFetch['request']`}),` — Трансформированные данные запроса.`]}),`
`,(0,c.jsx)(n.h3,{id:`проверка`,children:`Проверка`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): boolean`}),` — Проверяет, были ли установлены какие-либо данные по умолчанию.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): ApiDefaultValue | undefined`}),` — Возвращает текущий объект данных по умолчанию.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(request: ApiDefaultValue): this`}),` — Устанавливает данные по умолчанию для всех будущих запросов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h4,{id:`apidefaultvalue`,children:(0,c.jsx)(n.code,{children:`ApiDefaultValue`})}),`
`,(0,c.jsx)(n.p,{children:`Обычный объект, представляющий параметры по умолчанию.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`[key: string]: any`}),` — Пары ключе-значение, используемые по умолчанию.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
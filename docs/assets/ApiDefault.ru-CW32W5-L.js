import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/ApiDefault - Данные API по умолчанию`}),`
`,(0,c.jsx)(t.h1,{id:`класс-apidefault`,children:`Класс ApiDefault`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс для управления данными по умолчанию для API-запросов. Он позволяет устанавливать базовые параметры, которые должны быть включены в каждый запрос, поддерживая как стандартные объекты, так и `,(0,c.jsx)(t.code,{children:`FormData`}),`. Это полезно для централизованного определения общих полей, таких как токены, ID приложения или настройки локализации.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ApiDefault`}),` является `,(0,c.jsx)(t.strong,{children:`вспомогательным классом`}),`, предназначенным для управления значениями по умолчанию в запросах. В большинстве случаев рекомендуется определять их через параметр `,(0,c.jsx)(t.code,{children:`requestDefault`}),` в глобальной конфигурации `,(0,c.jsx)(t.code,{children:`Api`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Централизованные значения`}),` — Определите общие параметры один раз для всех вызовов API.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поддержка различных форматов`}),` — Бесшовно работает как с обычными объектами JavaScript, так и с `,(0,c.jsx)(t.code,{children:`FormData`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеллектуальное слияние`}),` — Объединяет значения по умолчанию с данными конкретного запроса, отдавая приоритет данным запроса при совпадении ключей.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chainable API`}),` — Поддерживает цепочку вызовов при установке параметров.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsx)(t.h4,{id:`request`,children:(0,c.jsx)(t.code,{children:`request`})}),`
`,(0,c.jsxs)(t.p,{children:[`Объединяет сохраненные данные по умолчанию с предоставленным объектом запроса или экземпляром `,(0,c.jsx)(t.code,{children:`FormData`}),`. Если входные данные являются объектом, метод возвращает новый объединенный объект. Если входные данные — `,(0,c.jsx)(t.code,{children:`FormData`}),`, недостающие ключи добавляются напрямую в экземпляр.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`request: ApiFetch['request']`}),` — Исходные данные запроса (Object, FormData или String).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ApiFetch['request']`}),` — Трансформированные данные запроса.`]}),`
`,(0,c.jsx)(t.h3,{id:`проверка`,children:`Проверка`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is(): boolean`}),` — Проверяет, были ли установлены какие-либо данные по умолчанию.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): ApiDefaultValue | undefined`}),` — Возвращает текущий объект данных по умолчанию.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`set(request: ApiDefaultValue): this`}),` — Устанавливает данные по умолчанию для всех будущих запросов.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h4,{id:`apidefaultvalue`,children:(0,c.jsx)(t.code,{children:`ApiDefaultValue`})}),`
`,(0,c.jsx)(t.p,{children:`Обычный объект, представляющий параметры по умолчанию.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[key: string]: any`}),` — Пары ключе-значение, используемые по умолчанию.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
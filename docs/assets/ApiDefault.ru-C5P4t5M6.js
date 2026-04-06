import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/ApiDefault - Данные API по умолчанию`}),`
`,(0,c.jsx)(n.h1,{id:`класс-apidefault`,children:`Класс ApiDefault`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс для управления данными по умолчанию для API-запросов. Он позволяет устанавливать базовые параметры, которые должны быть включены в каждый запрос, поддерживая как стандартные объекты, так и `,(0,c.jsx)(n.code,{children:`FormData`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Централизованные значения`}),` — определите общие параметры (например, токены или локаль) один раз для всех вызовов API.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поддержка различных форматов`}),` — бесшовно работает как с обычными объектами JavaScript, так и с `,(0,c.jsx)(n.code,{children:`FormData`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеллектуальное слияние`}),` — объединяет значения по умолчанию с данными конкретного запроса, отдавая приоритет данным запроса при совпадении ключей.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Простые проверки`}),` — удобные методы для проверки наличия установленных данных по умолчанию.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`ApiDefault()`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ApiDefault } from '@dxtmisha/functional'

// 1. Простая инициализация
const apiDefault = new ApiDefault()

// 2. Установка данных по умолчанию
apiDefault.set({ lang: 'ru', version: 'v1' })

// 3. Пример использования с объектом запроса
const requestData = { user_id: 5 }
const mergedRequest = apiDefault.request(requestData)
// Результат: { lang: 'ru', version: 'v1', user_id: 5 }

// 4. Пример использования с FormData
const fd = new FormData()
fd.append('photo', fileBlob)
apiDefault.request(fd)
// Результат: fd теперь содержит 'lang' и 'version', если они отсутствовали
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): boolean`}),` — Проверяет, были ли установлены какие-либо данные по умолчанию.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): ApiDefaultValue`}),` — Возвращает текущие данные по умолчанию.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request(request: ApiFetch['request']): ApiFetch['request']`}),` — Объединяет сохраненные данные по умолчанию с предоставленным объектом запроса или экземпляром `,(0,c.jsx)(n.code,{children:`FormData`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(request: ApiDefaultValue)`}),` — Устанавливает объект данных по умолчанию для всех запросов.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
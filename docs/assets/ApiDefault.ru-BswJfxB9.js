import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/ru/functional-basic/Classes/ApiDefault - Данные API по умолчанию"}),`
`,e.jsx(n.h1,{id:"класс-apidefault",children:"Класс ApiDefault"}),`
`,e.jsxs(n.p,{children:["Класс для управления данными по умолчанию для API-запросов. Он позволяет устанавливать базовые параметры, которые должны быть включены в каждый запрос, поддерживая как стандартные объекты, так и ",e.jsx(n.code,{children:"FormData"}),"."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Централизованные значения"})," — определите общие параметры (например, токены или локаль) один раз для всех вызовов API."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Поддержка различных форматов"})," — бесшовно работает как с обычными объектами JavaScript, так и с ",e.jsx(n.code,{children:"FormData"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Интеллектуальное слияние"})," — объединяет значения по умолчанию с данными конкретного запроса, отдавая приоритет данным запроса при совпадении ключей."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Простые проверки"})," — удобные методы для проверки наличия установленных данных по умолчанию."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(n.p,{children:["Для инициализации объекта вызовите конструктор ",e.jsx(n.code,{children:"ApiDefault()"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ApiDefault } from '@dxtmisha/functional'

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
`,e.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"is(): boolean"})," — Проверяет, были ли установлены какие-либо данные по умолчанию."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get(): ApiDefaultValue"})," — Возвращает текущие данные по умолчанию."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request(request: ApiFetch['request']): ApiFetch['request']"})," — Объединяет сохраненные данные по умолчанию с предоставленным объектом запроса или экземпляром ",e.jsx(n.code,{children:"FormData"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"set(request: ApiDefaultValue)"})," — Устанавливает объект данных по умолчанию для всех запросов."]}),`
`]})]})}function u(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{u as default};

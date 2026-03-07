import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as t}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/ru/functional-basic/Classes/ApiDefault - Данные API по умолчанию"}),`
`,n.jsx(e.h1,{id:"класс-apidefault",children:"Класс ApiDefault"}),`
`,n.jsxs(e.p,{children:["Класс для управления данными по умолчанию для API-запросов. Он позволяет устанавливать базовые параметры, которые должны быть включены в каждый запрос, поддерживая как стандартные объекты, так и ",n.jsx(e.code,{children:"FormData"}),"."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Централизованные значения"})," — определите общие параметры (например, токены или локаль) один раз для всех вызовов API."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Поддержка различных форматов"})," — бесшовно работает как с обычными объектами JavaScript, так и с ",n.jsx(e.code,{children:"FormData"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интеллектуальное слияние"})," — объединяет значения по умолчанию с данными конкретного запроса, отдавая приоритет данным запроса при совпадении ключей."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Простые проверки"})," — удобные методы для проверки наличия установленных данных по умолчанию."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsx(e.p,{children:"Обычно этот класс используется внутри системы управления API, но он также может использоваться независимо."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { ApiDefault } from '@dxtmisha/functional'

const apiDefault = new ApiDefault()
apiDefault.set({ lang: 'ru', version: 'v1' })

if (apiDefault.is()) {
  console.log('Данные по умолчанию готовы')
}

// С объектом
const merged = apiDefault.request({ user_id: 5 })
// Результат: { lang: 'ru', version: 'v1', user_id: 5 }

// С FormData
const fd = new FormData()
fd.append('file', myFile)
apiDefault.request(fd)
// Результат: fd теперь также содержит 'lang' и 'version', если их там не было ранее
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"is(): boolean"})," — Проверяет, были ли установлены какие-либо данные по умолчанию."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"get(): ApiDefaultValue"})," — Возвращает текущие данные по умолчанию."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"request(request: ApiFetch['request']): ApiFetch['request']"})," — Объединяет сохраненные данные по умолчанию с предоставленным объектом запроса или экземпляром ",n.jsx(e.code,{children:"FormData"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"set(request: ApiDefaultValue)"})," — Устанавливает объект данных по умолчанию для всех запросов."]}),`
`]})]})}function u(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{u as default};

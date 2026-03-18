import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function l(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/functional-basic/Classes/Global - Глобальные данные"}),`
`,n.jsx(s.h1,{id:"класс-global",children:"Класс Global"}),`
`,n.jsxs(s.p,{children:["Статический служебный класс для хранения и получения глобальных данных приложения. Данные записываются ",n.jsx(s.strong,{children:"один раз"})," при инициализации и после этого доступны только для чтения. Используется для передачи конфигурации или серверных данных в клиентскую часть приложения."]}),`
`,n.jsx(s.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Инициализация один раз"})," — метод ",n.jsx(s.code,{children:"add"})," работает только при первом вызове; повторные вызовы игнорируются."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Глубокое копирование"})," — данные копируются через ",n.jsx(s.code,{children:"copyObjectLite"}),", изолируя их от внешних изменений."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Без управления состоянием"})," — предназначен исключительно для статической конфигурации."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Статический доступ"})," — все методы класса статические, что исключает необходимость создания экземпляров (",n.jsx(s.code,{children:"new Global()"}),")."]}),`
`]}),`
`,n.jsx(s.h2,{id:"базовое-использование",children:"Базовое использование"}),`
`,n.jsx(s.p,{children:"Поскольку класс статический, его методы можно вызывать напрямую."}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`import { Global } from '@dxtmisha/functional-basic'

// Устанавливается один раз (например, при загрузке приложения)
Global.add({
  apiUrl: 'https://api.myapp.com',
  appName: 'My Application'
})

// Получаем значение по ключу
console.log(Global.get('apiUrl')) // 'https://api.myapp.com'
`})}),`
`,n.jsx(s.h2,{id:"методы",children:"Методы"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"add(data: Record<string, any>): void"})," — Сохраняет глобальные данные. Работает ",n.jsx(s.strong,{children:"только при первом вызове"}),". Последующие вызовы игнорируются."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"get<R>(name: string): R"})," — Возвращает значение по ключу из сохраненных глобальных данных."]}),`
`]}),`
`,n.jsx(s.h2,{id:"примеры",children:"Примеры"}),`
`,n.jsx(s.h3,{id:"получение-данных",children:"Получение данных"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`import { Global } from '@dxtmisha/functional-basic'

const apiUrl = Global.get<string>('apiUrl')
console.log(apiUrl) // 'https://api.myapp.com'

const flags = Global.get<Record<string, boolean>>('featureFlags')
console.log(flags.darkMode) // true
`})}),`
`,n.jsx(s.h3,{id:"инициализация-при-старте-приложения",children:"Инициализация при старте приложения"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`// main.ts (выполняется один раз перед монтированием приложения)
Global.add(window.__SERVER_DATA__ ?? {})

// В любом другом месте кода
const serverId = Global.get('serverId')
`})})]})}function x(e={}){const{wrapper:s}={...i(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(l,{...e})}):l(e)}export{x as default};

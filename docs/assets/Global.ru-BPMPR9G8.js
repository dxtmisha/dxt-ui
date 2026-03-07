import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function l(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional-basic/Classes/Global - Глобальные данные"}),`
`,n.jsx(e.h1,{id:"класс-global",children:"Класс Global"}),`
`,n.jsxs(e.p,{children:["Статический класс для хранения и получения глобальных данных приложения. Данные записываются ",n.jsx(e.strong,{children:"один раз"})," при инициализации и после этого доступны только для чтения. Используется для передачи конфигурации или серверных данных в клиентскую часть приложения."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Инициализация один раз"})," — метод ",n.jsx(e.code,{children:"add"})," работает только при первом вызове; повторные вызовы игнорируются."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Глубокое копирование"})," — данные копируются через ",n.jsx(e.code,{children:"copyObjectLite"}),", изолируя их от внешних изменений."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Без управления состоянием"})," — предназначен исключительно для статической конфигурации."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Global } from '@dxtmisha/functional-basic'

// Устанавливается один раз (например, при загрузке приложения)
Global.add({
  apiUrl: 'https://api.myapp.com',
  appName: 'My Application',
  featureFlags: { darkMode: true }
})

// Повторный вызов игнорируется
Global.add({ apiUrl: 'https://other.com' }) // Не имеет эффекта
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"add(data: Record<string, any>): void"})," — Сохраняет глобальные данные. Работает ",n.jsx(e.strong,{children:"только при первом вызове"}),". Последующие вызовы игнорируются."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"get<R>(name: string): R"})," — Возвращает значение по ключу из сохраненных глобальных данных."]}),`
`]}),`
`,n.jsx(e.h2,{id:"примеры",children:"Примеры"}),`
`,n.jsx(e.h3,{id:"получение-данных",children:"Получение данных"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Global } from '@dxtmisha/functional-basic'

const apiUrl = Global.get<string>('apiUrl')
console.log(apiUrl) // 'https://api.myapp.com'

const flags = Global.get<Record<string, boolean>>('featureFlags')
console.log(flags.darkMode) // true
`})}),`
`,n.jsx(e.h3,{id:"инициализация-при-старте-приложения",children:"Инициализация при старте приложения"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// main.ts (выполняется один раз перед монтированием приложения)
Global.add(window.__SERVER_DATA__ ?? {})

// В любом другом месте кода
const serverId = Global.get('serverId')
`})})]})}function x(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(l,{...s})}):l(s)}export{x as default};

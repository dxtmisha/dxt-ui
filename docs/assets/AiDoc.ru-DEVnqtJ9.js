import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/AiDoc - Движок AI-документирования"}),`
`,n.jsx(i.h1,{id:"класс-aidoc",children:"Класс AiDoc"}),`
`,n.jsx(i.p,{children:"Центральный движок для координации процесса генерации AI-документации во всем проекте. Он управляет чтением конфигурации, сканированием директорий и делегированием задач по документированию специализированным обработчикам ИИ."}),`
`,n.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Пакетная обработка"})," — автоматически перебирает настроенные директории для генерации документации сразу для множества файлов."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Интеграция на уровне проекта"})," — считывает настройки проекта через ",n.jsx(i.code,{children:"PropertiesConfig"})," для определения целевых путей и областей охвата."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Интеграция с Git"})," — использует ",n.jsx(i.code,{children:"GitRead"})," для идентификации релевантных файлов и их фильтрации на основе статуса репозитория."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Устойчивость к ошибкам"})," — надежная обработка исключений в процессе документирования для обеспечения стабильной работы или четкого сообщения о проблемах."]}),`
`]}),`
`,n.jsx(i.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(i.p,{children:["Класс ",n.jsx(i.code,{children:"AiDoc"})," обычно инициализируется как основной координатор для запуска процесса сборки документации."]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { AiDoc } from '@dxtmisha/scripts'

const engine = new AiDoc()

// Запуск обработки всех настроенных директорий
await engine.make()
`})}),`
`,n.jsx(i.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(i.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"make(): Promise<void>"})," — основная точка входа. Считывает конфигурацию и запускает обработку всех определенных директорий документации."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"makeDirectory(dir: string): Promise<void>"})," — обрабатывает все соответствующие файлы внутри конкретной директории, делегируя задачи специализированным обработчикам ИИ."]}),`
`]}),`
`,n.jsx(i.p,{children:"Высокоуровневый координатор, который не предоставляет открытых свойств конфигурации или сложного внутреннего состояния."})]})}function j(e={}){const{wrapper:i}={...r(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{j as default};

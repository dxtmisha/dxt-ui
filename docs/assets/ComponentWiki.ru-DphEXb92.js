import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function e(s){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/ru/scripts/Classes/ComponentWiki - Генератор Wiki на базе ИИ"}),`
`,n.jsx(i.h1,{id:"класс-componentwiki",children:"Класс ComponentWiki"}),`
`,n.jsx(i.p,{children:"Продвинутый класс-оркестратор, который автоматизирует генерацию документации, историй (stories) и определений типов для компонентов с использованием ИИ. Он координирует временные сборки, извлечение кода и обработку ИИ для создания полных Wiki-артефактов."}),`
`,n.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Документация на базе ИИ"})," — использует ИИ для анализа кода компонентов и создания содержательных MDX-описаний."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Автоматическая генерация историй"})," — создает начальные истории Storybook на основе реализации компонента."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Извлечение типов"})," — идентифицирует и извлекает определения типов для включения в документацию."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Оркестрация процессов"})," — управляет техническим жизненным циклом, включая сборку элементов, извлечение снимков кода и очистку."]}),`
`]}),`
`,n.jsx(i.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsx(i.p,{children:"Инициализируйте класс, указав путь к целевому компоненту и необязательные инструкции для промпта."}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Параметры:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"path: string"})," — относительный путь к директории компонента."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"prompt: string = ''"})," — необязательный дополнительный текст для добавления к промпту ИИ для специфических требований к документации."]}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { ComponentWiki } from '@dxtmisha/scripts'

const wiki = new ComponentWiki('src/components/MyComponent', 'Сфокусируйся на деталях доступности.')

// Запуск процесса генерации
wiki.make()
`})}),`
`,n.jsx(i.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(i.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"make(): void"})," — основной метод, который запускает сборку кода, подготовку контекста ИИ и генерацию Wiki-артефактов."]}),`
`]}),`
`,n.jsx(i.h2,{id:"примеры",children:"Примеры"}),`
`,n.jsx(i.h3,{id:"пакетная-генерация",children:"Пакетная генерация"}),`
`,n.jsx(i.p,{children:"Обычно используется в скриптах для перегенерации документации для нескольких компонентов после изменений API."}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`const wiki = new ComponentWiki('src/components/BaseButton')
wiki.make()
`})})]})}function j(s={}){const{wrapper:i}={...r(),...s.components};return i?n.jsx(i,{...s,children:n.jsx(e,{...s})}):e(s)}export{j as default};

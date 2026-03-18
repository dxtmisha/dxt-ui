import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/ru/scripts/Classes/ComponentCreator - Автоматическое создание компонентов"}),`
`,n.jsx(e.h1,{id:"класс-componentcreator",children:"Класс ComponentCreator"}),`
`,n.jsx(e.p,{children:"Утилитный класс для автоматизации создания скелета компонентов в пустых директориях. Он проактивно идентифицирует папки внутри директории компонентов, в которых отсутствуют файлы, и инициализирует их, используя стандартные шаблоны проекта."}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматическое обнаружение"})," — рекурсивно сканирует директорию компонентов для поиска пустых папок."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Умное создание (Scaffolding)"})," — автоматически запускает процесс создания для каждой идентифицированной директории."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Согласованность проекта"})," — гарантирует, что все новые компоненты начинаются с одинаковой базовой структуры и файлов."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Инициализируйте новый экземпляр ",n.jsx(e.code,{children:"ComponentCreator"}),". Он автоматически нацеливается на стандартную директорию компонентов, определенную в конфигурации проекта."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { ComponentCreator } from '@dxtmisha/scripts'

const creator = new ComponentCreator()
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"make",children:n.jsx(e.code,{children:"make"})}),`
`,n.jsxs(e.p,{children:["Основной метод оркестрации, который выполняет рекурсивное сканирование директории компонентов, идентифицирует папки без файлов и запускает процесс заполнения (",n.jsx(e.code,{children:"ComponentItem"}),") для каждой из них."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.h2,{id:"примеры",children:"Примеры"}),`
`,n.jsx(e.h3,{id:"полный-процесс-создания",children:"Полный процесс создания"}),`
`,n.jsxs(e.p,{children:["Запуск создателя как части сценария сборки или подготовки гарантирует, что даже созданные вручную пустые папки будут правильно инициализированы необходимыми файлами (",n.jsx(e.code,{children:"index.ts"}),", ",n.jsx(e.code,{children:"types.ts"})," и т.д.)."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const creator = new ComponentCreator()
creator.make()
`})})]})}function j(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{j as default};

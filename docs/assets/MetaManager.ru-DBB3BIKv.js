import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/ru/functional-basic/Classes/MetaManager - Управление мета-тегами"}),`
`,e.jsx(n.h1,{id:"класс-metamanager",children:"Класс MetaManager"}),`
`,e.jsx(n.p,{children:"Базовый generic-класс для синхронизации мета-тегов HTML-документа. Читает существующие теги из DOM при инициализации и обеспечивает единый интерфейс для их чтения и записи."}),`
`,e.jsxs(n.p,{children:["Класс является родительским для ",e.jsx(n.code,{children:"MetaOg"}),", ",e.jsx(n.code,{children:"MetaTwitter"})," и ",e.jsx(n.code,{children:"Meta"}),"."]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`new MetaManager(listMeta, isProperty?)
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"listMeta: readonly string[]"})," — список имён мета-тегов, которыми управляет этот экземпляр."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isProperty?: boolean"})," — если ",e.jsx(n.code,{children:"true"}),", используется атрибут ",e.jsx(n.code,{children:"property"})," вместо ",e.jsx(n.code,{children:"name"})," (необходимо для Open Graph). По умолчанию: ",e.jsx(n.code,{children:"false"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getListMeta(): T"})," — возвращает список имён управляемых тегов."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get(name): string"})," — возвращает содержимое тега по имени. Если не установлен — ",e.jsx(n.code,{children:"''"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItems(): MetaList<T>"})," — возвращает объект со всеми тегами: ",e.jsx(n.code,{children:"{ [name]: content }"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"set(name, content): this"})," — устанавливает тег в DOM (создаёт если нет). Поддерживает цепочку."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setByList(metaList): this"})," — устанавливает несколько тегов из объекта. Поддерживает цепочку."]}),`
`]}),`
`,e.jsx(n.h2,{id:"генерация-html",children:"Генерация HTML"}),`
`,e.jsx(n.h3,{id:"html-string",children:e.jsx(n.code,{children:"html(): string"})}),`
`,e.jsxs(n.p,{children:["Генерирует HTML-строку для всех управляемых тегов с заполненным ",e.jsx(n.code,{children:"content"}),". Используется для SSR."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`manager.set('description', 'Моё описание').set('keywords', 'vue, typescript')

manager.html()
// '<meta name="description" content="Моё описание"><meta name="keywords" content="vue, typescript">'
`})})]})}function x(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{x as default};

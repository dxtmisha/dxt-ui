import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/ru/functional-basic/Classes/MetaManager - Управление мета-тегами"}),`
`,e.jsx(n.h1,{id:"класс-metamanager",children:"Класс MetaManager"}),`
`,e.jsx(n.p,{children:"Базовый generic-класс для синхронизации мета-тегов HTML-документа. Читает существующие теги из DOM при инициализации и обеспечивает единый интерфейс для их чтения и записи."}),`
`,e.jsxs(n.p,{children:["Класс является родительским для ",e.jsx(n.code,{children:"MetaOg"}),", ",e.jsx(n.code,{children:"MetaTwitter"})," и ",e.jsx(n.code,{children:"Meta"}),"."]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(n.p,{children:["Класс является ",e.jsx(n.strong,{children:"абстрактным"}),". Вы не можете создать его экземпляр напрямую через ",e.jsx(n.code,{children:"new MetaManager()"}),". Вместо этого его необходимо расширить."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры конструктора (для потомков):"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"listMeta: T"})," — список имён мета-тегов, которыми будет управлять менеджер."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isProperty?: boolean"})," — определяет используемый атрибут: ",e.jsx(n.code,{children:"true"})," для ",e.jsx(n.code,{children:"property"})," (Open Graph), ",e.jsx(n.code,{children:"false"})," для ",e.jsx(n.code,{children:"name"})," (стандартные теги). По умолчанию: ",e.jsx(n.code,{children:"false"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { MetaManager } from '@dxtmisha/functional-basic'

// Пример расширения
class MyMeta extends MetaManager<string[]> {
  constructor() {
    super(['description', 'keywords'])
  }
}

const myMeta = new MyMeta()
`})}),`
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

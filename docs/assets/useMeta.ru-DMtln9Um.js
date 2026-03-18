import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/ru/functional/Composables/useMeta - Управление мета-тегами"}),`
`,e.jsx(n.h1,{id:"usemeta",children:e.jsx(n.code,{children:"useMeta"})}),`
`,e.jsx(n.p,{children:"Composable для реактивного управления мета-тегами (HTML, Open Graph, Twitter Card) с автоматической синхронизацией DOM. Использует паттерн singleton — все компоненты используют одно состояние мета-тегов."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возвращает:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"title: Ref<string>"})," — реактивный заголовок страницы (без суффикса)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"description: Ref<string>"})," — реактивный мета-тег description."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"keyword: Ref<string>"})," — реактивный мета-тег keywords."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"image: Ref<string>"})," — реактивный URL изображения для Open Graph / Twitter Card."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"canonical: Ref<string>"})," — реактивный канонический URL."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"robots: Ref<MetaRobots>"})," — реактивная директива robots."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"author: Ref<string>"})," — реактивный мета-тег author."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"siteName: Ref<string>"})," — реактивное название сайта."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getHtmlMeta(): string"})," — генерирует HTML-строку для всех мета-тегов (полезно для SSR)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"meta: Meta"})," — базовый экземпляр ",e.jsx(n.code,{children:"Meta"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"пример-использования",children:"Пример использования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useMeta } from '@dxtmisha/functional'

const { title, description } = useMeta()

title.value = 'Заголовок страницы'
description.value = 'Описание моей крутой страницы'
`})})]})}function x(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{x as default};

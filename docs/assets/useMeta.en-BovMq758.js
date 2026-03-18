import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(n){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional/Composables/useMeta - Meta tags management"}),`
`,e.jsx(t.h1,{id:"usemeta",children:e.jsx(t.code,{children:"useMeta"})}),`
`,e.jsx(t.p,{children:"Composable for reactive management of meta tags (HTML, Open Graph, Twitter Card) with automatic DOM synchronization. Uses a singleton pattern where all components share the same meta state."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Returns:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"title: Ref<string>"})," — reactive page title (without suffix)."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"description: Ref<string>"})," — reactive description meta tag."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"keyword: Ref<string>"})," — reactive keywords meta tag."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"image: Ref<string>"})," — reactive image URL for Open Graph / Twitter Card."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"canonical: Ref<string>"})," — reactive canonical URL."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"robots: Ref<MetaRobots>"})," — reactive robots directive."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"author: Ref<string>"})," — reactive author meta tag."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"siteName: Ref<string>"})," — reactive site name."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getHtmlMeta(): string"})," — generates an HTML string for all meta tags (useful for SSR)."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"meta: Meta"})," — the underlying ",e.jsx(t.code,{children:"Meta"})," instance."]}),`
`]}),`
`,e.jsx(t.h2,{id:"usage-example",children:"Usage Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { useMeta } from '@dxtmisha/functional'

const { title, description } = useMeta()

title.value = 'My Page Title'
description.value = 'Description of my cool page'
`})})]})}function m(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{m as default};

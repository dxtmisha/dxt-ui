import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as a}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/en/functional/Composables/useTranslateRef - Localization and translation"}),`
`,n.jsx(e.h1,{id:"usetranslateref",children:n.jsx(e.code,{children:"useTranslateRef"})}),`
`,n.jsx(e.p,{children:"Composable for obtaining reactive translations based on keys or an array of keys. It automatically updates when the application language changes."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"names: (string | string[])[]"})," — a string or an array of keys for translation."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Returns:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"ShallowRef<TranslateList<T>>"})," — a shallow reactive reference containing the translated texts."]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage-example",children:"Usage Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { useTranslateRef, t } from '@dxtmisha/functional'

// Basic usage
const translations = useTranslateRef(['home.title', 'home.description'])

// Using shorthand 't'
const labels = t(['button.save', 'button.cancel'])

// In template: <h1>{{ translations['home.title'] }}</h1>
`})})]})}function m(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{m as default};

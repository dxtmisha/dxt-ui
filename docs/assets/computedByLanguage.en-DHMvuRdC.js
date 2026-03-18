import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const n={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional/Functions/computedByLanguage - Language-aware computed property"}),`
`,e.jsx(n.h1,{id:"computedbylanguage",children:e.jsx(n.code,{children:"computedByLanguage"})}),`
`,e.jsx(n.p,{children:"Creates a reactive computed property that automatically recalculates when the current language or dependencies within the getters change."}),`
`,e.jsx(n.h3,{id:"how-it-works",children:"How it works"}),`
`,e.jsx(n.p,{children:"The function performs checks in the following order:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Language Check"}),": Verifies that a language is set via ",e.jsx(n.code,{children:"GeoRef.get().value"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Conditions Check"}),": If the ",e.jsx(n.code,{children:"conditions"})," parameter is provided, it is called for an additional check (e.g., checking permissions or data loading state)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primary Getter Execution"}),": If both checks above pass, the ",e.jsx(n.code,{children:"getter"})," is called. If it returns a value (not ",e.jsx(n.code,{children:"undefined"}),"), that value becomes the result."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Fallback Option"}),": If any of the checks fail or the ",e.jsx(n.code,{children:"getter"})," returns ",e.jsx(n.code,{children:"undefined"}),", the ",e.jsx(n.code,{children:"getterNone"})," is executed/returned."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getter: ComputedGetter<R>"})," — The primary logic for obtaining the value. Called only if the language is set and conditions are met."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getterNone: R | (() => R)"}),' — A fallback value or a function returning it. Acts as "Plan B". Default: ',e.jsx(n.code,{children:"() => undefined"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"conditions?: () => boolean"})," — A condition function. Acts as a gatekeeper: if it returns ",e.jsx(n.code,{children:"false"}),", the main ",e.jsx(n.code,{children:"getter"})," will not even be triggered."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"debugOptions?: DebuggerOptions"})," — Options used for debugging reactive computations, supported by Vue.js."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"ComputedRef<R>"})," — A reactive computed property."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { computedByLanguage } from '@dxtmisha/functional'
import { ref } from 'vue'

// Basic usage
const label = computedByLanguage(() => translateKey('hello'))

// With a fallback value
const title = computedByLanguage(
  () => translateKey('page.title'),
  () => 'Untitled'
)

// With an additional condition
const isReady = ref(true)
const content = computedByLanguage(
  () => translateKey('content'),
  () => 'Loading...',
  () => isReady.value
)
`})})]})}function u(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{u as default};

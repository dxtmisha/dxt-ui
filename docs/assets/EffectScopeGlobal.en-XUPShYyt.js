import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional/Classes/EffectScopeGlobal - Global Reactive Scope"}),`
`,e.jsx(n.h1,{id:"effectscopeglobal-class",children:"EffectScopeGlobal Class"}),`
`,e.jsxs(n.p,{children:["A utility class that provides a global, detached Vue ",e.jsx(n.code,{children:"effectScope"}),". This allows running reactive effects (watchers, computed properties) that are not tied to any specific component lifecycle, ensuring they aren't automatically disposed of when a component unmounts."]}),`
`,e.jsxs(n.p,{children:["The scope is initialized lazily upon the first call to ",e.jsx(n.code,{children:"run"}),', and it is created as a "detached" scope (',e.jsx(n.code,{children:"effectScope(true)"}),"), meaning it will not be captured by any parent scope."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Global Persistence"})," — effects live as long as the application does."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Detached Scope"})," — created with ",e.jsx(n.code,{children:"effectScope(true)"}),", preventing accidental disposal by parent scopes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lazy Initialization"})," — the internal scope is created only when first needed."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Scope Management"})," — groups global reactive effects together for organized disposal if needed (via the internal scope)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ease of Use"})," — simple static method to run any reactive function."]}),`
`]}),`
`,e.jsx(n.h2,{id:"actions",children:"Actions"}),`
`,e.jsx(n.h3,{id:"run",children:e.jsx(n.code,{children:"run"})}),`
`,e.jsx(n.p,{children:"Executes the provided function within the global effect scope."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fn: () => T"})," — the function to execute (typically containing reactive logic like ",e.jsx(n.code,{children:"watch"})," or ",e.jsx(n.code,{children:"computed"}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"T | undefined"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { EffectScopeGlobal } from '@dxtmisha/functional'
import { watch, ref } from 'vue'

const globalState = ref(0)

// This watcher will persist even if the component that created it is unmounted
EffectScopeGlobal.run(() => {
  watch(globalState, (val) => {
    console.log('Global state changed:', val)
  })
})
`})})]})}function p(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(c,{...t})}):c(t)}export{p as default};

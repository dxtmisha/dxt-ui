import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/Classes/EffectScopeGlobal - Global Reactive Scope`}),`
`,(0,c.jsx)(n.h1,{id:`effectscopeglobal-class`,children:`EffectScopeGlobal Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A utility class that provides a global, detached Vue `,(0,c.jsx)(n.code,{children:`effectScope`}),`. This allows running reactive effects (watchers, computed properties) that are not tied to any specific component lifecycle, ensuring they aren't automatically disposed of when a component unmounts.`]}),`
`,(0,c.jsxs)(n.p,{children:[`The scope is initialized lazily upon the first call to `,(0,c.jsx)(n.code,{children:`run`}),`, and it is created as a "detached" scope (`,(0,c.jsx)(n.code,{children:`effectScope(true)`}),`), meaning it will not be captured by any parent scope.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Global Persistence`}),` — effects live as long as the application does.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Detached Scope`}),` — created with `,(0,c.jsx)(n.code,{children:`effectScope(true)`}),`, preventing accidental disposal by parent scopes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lazy Initialization`}),` — the internal scope is created only when first needed.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Scope Management`}),` — groups global reactive effects together for organized disposal if needed (via the internal scope).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ease of Use`}),` — simple static method to run any reactive function.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`actions`,children:`Actions`}),`
`,(0,c.jsx)(n.h3,{id:`run`,children:(0,c.jsx)(n.code,{children:`run`})}),`
`,(0,c.jsx)(n.p,{children:`Executes the provided function within the global effect scope.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fn: () => T`}),` — the function to execute (typically containing reactive logic like `,(0,c.jsx)(n.code,{children:`watch`}),` or `,(0,c.jsx)(n.code,{children:`computed`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`T | undefined`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { EffectScopeGlobal } from '@dxtmisha/functional'
import { watch, ref } from 'vue'

const globalState = ref(0)

// This watcher will persist even if the component that created it is unmounted
EffectScopeGlobal.run(() => {
  watch(globalState, (val) => {
    console.log('Global state changed:', val)
  })
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
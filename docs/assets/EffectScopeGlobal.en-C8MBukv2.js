import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Classes/EffectScopeGlobal - Global Reactive Scope`}),`
`,(0,c.jsx)(t.h1,{id:`effectscopeglobal-class`,children:`EffectScopeGlobal Class`}),`
`,(0,c.jsxs)(t.p,{children:[`A utility class that provides a global, detached Vue `,(0,c.jsx)(t.code,{children:`effectScope`}),`. This allows running reactive effects (watchers, computed properties) that are not tied to any specific component lifecycle, ensuring they aren't automatically disposed of when a component unmounts.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The scope is initialized lazily upon the first call to `,(0,c.jsx)(t.code,{children:`run`}),`, and it is created as a "detached" scope (`,(0,c.jsx)(t.code,{children:`effectScope(true)`}),`), meaning it will not be captured by any parent scope.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Global Persistence`}),` — effects live as long as the application does.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Detached Scope`}),` — created with `,(0,c.jsx)(t.code,{children:`effectScope(true)`}),`, preventing accidental disposal by parent scopes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lazy Initialization`}),` — the internal scope is created only when first needed.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Scope Management`}),` — groups global reactive effects together for organized disposal if needed (via the internal scope).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ease of Use`}),` — simple static method to run any reactive function.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`actions`,children:`Actions`}),`
`,(0,c.jsx)(t.h3,{id:`run`,children:(0,c.jsx)(t.code,{children:`run`})}),`
`,(0,c.jsx)(t.p,{children:`Executes the provided function within the global effect scope.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fn: () => T`}),` — the function to execute (typically containing reactive logic like `,(0,c.jsx)(t.code,{children:`watch`}),` or `,(0,c.jsx)(t.code,{children:`computed`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`T | undefined`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { EffectScopeGlobal } from '@dxtmisha/functional'
import { watch, ref } from 'vue'

const globalState = ref(0)

// This watcher will persist even if the component that created it is unmounted
EffectScopeGlobal.run(() => {
  watch(globalState, (val) => {
    console.log('Global state changed:', val)
  })
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
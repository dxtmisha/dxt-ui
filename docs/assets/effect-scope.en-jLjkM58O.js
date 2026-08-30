import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/9. Global Effect Scope`}),`
`,(0,c.jsx)(t.h1,{id:`global-effect-scope`,children:`Global Effect Scope`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.strong,{children:`EffectScopeGlobal`}),` class provides access to a unified, long-running effect scope (`,(0,c.jsx)(t.strong,{children:`EffectScope`}),`) in `,(0,c.jsx)(t.strong,{children:`Vue 3`}),`. This allows for the creation of reactive dependencies (watch, computed) that are not tied to the lifecycle of specific components.`]}),`
`,(0,c.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Persistence`}),`: Effects launched via this class live for the entire duration of the application.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Isolation`}),`: Allows for grouping global reactive processes in one place to prevent memory leaks.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Control`}),`: All dependencies created inside `,(0,c.jsx)(t.code,{children:`run()`}),` are automatically associated with the global context.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage-examples`,children:`Usage Examples`}),`
`,(0,c.jsx)(t.p,{children:`Typically used to set up global listeners or computed properties that must remain available throughout the entire application.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { watch, ref } from 'vue'
import { EffectScopeGlobal } from '@dxtmisha/functional'

const globalState = ref(0)

// 1. Starting a global process
EffectScopeGlobal.run(() => {
  watch(globalState, (val) => {
    console.log('Global state changed:', val)
  })
})

// 2. Creating long-lived computed properties
const persistentValue = EffectScopeGlobal.run(() => {
  return computed(() => globalState.value * 2)
})
`})}),`
`,(0,c.jsxs)(t.p,{children:[`This approach ensures that even if the component initiating the creation of this `,(0,c.jsx)(t.code,{children:`watch`}),` is unmounted, the watcher will continue to function.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
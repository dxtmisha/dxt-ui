import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional/# Global Effect Scope`}),`
`,(0,c.jsx)(n.h1,{id:`global-effect-scope`,children:`Global Effect Scope`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.strong,{children:`EffectScopeGlobal`}),` class provides access to a unified, long-running effect scope (`,(0,c.jsx)(n.strong,{children:`EffectScope`}),`) in `,(0,c.jsx)(n.strong,{children:`Vue 3`}),`. This allows for the creation of reactive dependencies (watch, computed) that are not tied to the lifecycle of specific components.`]}),`
`,(0,c.jsx)(n.h2,{id:`features`,children:`Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Persistence`}),`: Effects launched via this class live for the entire duration of the application.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Isolation`}),`: Allows for grouping global reactive processes in one place to prevent memory leaks.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Control`}),`: All dependencies created inside `,(0,c.jsx)(n.code,{children:`run()`}),` are automatically associated with the global context.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`usage-examples`,children:`Usage Examples`}),`
`,(0,c.jsx)(n.p,{children:`Typically used to set up global listeners or computed properties that must remain available throughout the entire application.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { watch, ref } from 'vue'
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
`,(0,c.jsxs)(n.p,{children:[`This approach ensures that even if the component initiating the creation of this `,(0,c.jsx)(n.code,{children:`watch`}),` is unmounted, the watcher will continue to function.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
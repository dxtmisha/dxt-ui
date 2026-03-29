import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/# Advanced Computed Properties`}),`
`,(0,c.jsx)(n.h1,{id:`advanced-computed-properties-custom-computed`,children:`Advanced Computed Properties (Custom Computed)`}),`
`,(0,c.jsxs)(n.p,{children:[`This library provides three specialized wrappers over standard Vue 3 `,(0,c.jsx)(n.code,{children:`computed`}),` properties. They solve complex architectural problems: asynchronous computations, decoupling from component lifecycles, and automatic multilingual recalculations.`]}),`
`,(0,c.jsxs)(n.h2,{id:`1-asynchronous-computation-computedasync`,children:[`1. Asynchronous Computation (`,(0,c.jsx)(n.code,{children:`computedAsync`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Vue's standard `,(0,c.jsx)(n.code,{children:`computed`}),` is strictly synchronous. `,(0,c.jsx)(n.code,{children:`computedAsync`}),` allows you to safely and cleanly implement `,(0,c.jsx)(n.code,{children:`async/await`}),` logic inside your getters.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Features:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Evaluates lazily (execution starts only upon the first property access).`}),`
`,(0,c.jsxs)(n.li,{children:[`Automatically re-runs when its internal reactive dependencies change (powered by an internal `,(0,c.jsx)(n.code,{children:`watchEffect`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[`Provides an `,(0,c.jsx)(n.code,{children:`ignore`}),` parameter to skip assigning specific resolved values, preventing unnecessary UI thrashing.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Usage Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { computedAsync } from '@dxtmisha/functional'

const userId = ref(1)

const userData = computedAsync(async () => {
  // Automatically re-fetches whenever userId.value changes
  const response = await fetch(\`/api/users/\${userId.value}\`)
  return await response.json()
})
`})}),`
`,(0,c.jsxs)(n.h2,{id:`2-global-caching-computedeternity`,children:[`2. Global Caching (`,(0,c.jsx)(n.code,{children:`computedEternity`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Standard computed properties and watchers are destroyed when their parent component unmounts. `,(0,c.jsx)(n.code,{children:`computedEternity`}),` escapes this by placing the computation (and its watcher) into an independent global `,(0,c.jsx)(n.code,{children:`effectScope`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Features:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Perfect for heavy or frequently reused datasets that you want to initialize once and keep updated in memory even if the user navigates away from the originating view.`}),`
`,(0,c.jsx)(n.li,{children:`Evaluates entirely on-demand on the first access.`}),`
`,(0,c.jsx)(n.li,{children:`"Lives forever" — persists strictly until the application is fully closed.`}),`
`,(0,c.jsx)(n.li,{children:`Values are strictly read-only.`}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Usage Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { computedEternity } from '@dxtmisha/functional'

// This fetch and its watcher will persist in memory permanently
const heavyGlobalConfig = computedEternity(async () => {
  return await fetch('/api/heavy-config').then(res => res.json())
})
`})}),`
`,(0,c.jsxs)(n.h2,{id:`3-language-dependent-reactivity-computedbylanguage`,children:[`3. Language-Dependent Reactivity (`,(0,c.jsx)(n.code,{children:`computedByLanguage`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Syntactic sugar for reactive properties that must instantly recalculate whenever the application's locale/language dictionary changes.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Features:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Deeply tied to the internal `,(0,c.jsx)(n.code,{children:`GeoRef`}),` singleton.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Allows defining exact `,(0,c.jsx)(n.code,{children:`conditions`}),` under which evaluating the primary getter makes sense.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Built-in graceful fallback mechanism (`,(0,c.jsx)(n.code,{children:`getterNone`}),`), used exclusively when the primary value resolves to `,(0,c.jsx)(n.code,{children:`undefined`}),` or preconditions fail.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Usage Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { computedByLanguage } from '@dxtmisha/functional'

const pageTitle = computedByLanguage(
  // Primary getter (runs if conditions are met)
  () => dictionary.value.title,
  
  // Fallback (runs if primary returns undefined or conditions are false)
  () => 'Default Title',
  
  // Precondition checking (optional)
  () => isReady.value === true
)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
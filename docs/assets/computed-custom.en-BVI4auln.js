import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/6. Advanced Computed Properties`}),`
`,(0,c.jsx)(t.h1,{id:`advanced-computed-properties-custom-computed`,children:`Advanced Computed Properties (Custom Computed)`}),`
`,(0,c.jsxs)(t.p,{children:[`This library provides three specialized wrappers over standard Vue 3 `,(0,c.jsx)(t.code,{children:`computed`}),` properties. They solve complex architectural problems: asynchronous computations, decoupling from component lifecycles, and automatic multilingual recalculations.`]}),`
`,(0,c.jsxs)(t.h2,{id:`1-asynchronous-computation-computedasync`,children:[`1. Asynchronous Computation (`,(0,c.jsx)(t.code,{children:`computedAsync`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Vue's standard `,(0,c.jsx)(t.code,{children:`computed`}),` is strictly synchronous. `,(0,c.jsx)(t.code,{children:`computedAsync`}),` allows you to safely and cleanly implement `,(0,c.jsx)(t.code,{children:`async/await`}),` logic inside your getters.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Evaluates lazily (execution starts only upon the first property access).`}),`
`,(0,c.jsxs)(t.li,{children:[`Automatically re-runs when its internal reactive dependencies change (powered by an internal `,(0,c.jsx)(t.code,{children:`watchEffect`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Provides an `,(0,c.jsx)(t.code,{children:`ignore`}),` parameter to skip assigning specific resolved values, preventing unnecessary UI thrashing.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Usage Example:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { computedAsync } from '@dxtmisha/functional'

const userId = ref(1)

const userData = computedAsync(async () => {
  // Automatically re-fetches whenever userId.value changes
  const response = await fetch(\`/api/users/\${userId.value}\`)
  return await response.json()
})
`})}),`
`,(0,c.jsxs)(t.h2,{id:`2-global-caching-computedeternity`,children:[`2. Global Caching (`,(0,c.jsx)(t.code,{children:`computedEternity`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Standard computed properties and watchers are destroyed when their parent component unmounts. `,(0,c.jsx)(t.code,{children:`computedEternity`}),` escapes this by placing the computation (and its watcher) into an independent global `,(0,c.jsx)(t.code,{children:`effectScope`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Perfect for heavy or frequently reused datasets that you want to initialize once and keep updated in memory even if the user navigates away from the originating view.`}),`
`,(0,c.jsx)(t.li,{children:`Evaluates entirely on-demand on the first access.`}),`
`,(0,c.jsx)(t.li,{children:`"Lives forever" — persists strictly until the application is fully closed.`}),`
`,(0,c.jsx)(t.li,{children:`Values are strictly read-only.`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Usage Example:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { computedEternity } from '@dxtmisha/functional'

// This fetch and its watcher will persist in memory permanently
const heavyGlobalConfig = computedEternity(async () => {
  return await fetch('/api/heavy-config').then(res => res.json())
})
`})}),`
`,(0,c.jsxs)(t.h2,{id:`3-language-dependent-reactivity-computedbylanguage`,children:[`3. Language-Dependent Reactivity (`,(0,c.jsx)(t.code,{children:`computedByLanguage`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Syntactic sugar for reactive properties that must instantly recalculate whenever the application's locale/language dictionary changes.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Deeply tied to the internal `,(0,c.jsx)(t.code,{children:`GeoRef`}),` singleton.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Allows defining exact `,(0,c.jsx)(t.code,{children:`conditions`}),` under which evaluating the primary getter makes sense.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Built-in graceful fallback mechanism (`,(0,c.jsx)(t.code,{children:`getterNone`}),`), used exclusively when the primary value resolves to `,(0,c.jsx)(t.code,{children:`undefined`}),` or preconditions fail.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Usage Example:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { computedByLanguage } from '@dxtmisha/functional'

const pageTitle = computedByLanguage(
  // Primary getter (runs if conditions are met)
  () => dictionary.value.title,
  
  // Fallback (runs if primary returns undefined or conditions are false)
  () => 'Default Title',
  
  // Precondition checking (optional)
  () => isReady.value === true
)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
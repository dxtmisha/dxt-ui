import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Functions/computedByLanguage - Language-aware computed property`}),`
`,(0,c.jsx)(t.h1,{id:`computedbylanguage`,children:(0,c.jsx)(t.code,{children:`computedByLanguage`})}),`
`,(0,c.jsx)(t.p,{children:`Creates a reactive computed property that automatically recalculates when the current language or dependencies within the getters change.`}),`
`,(0,c.jsx)(t.h3,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsx)(t.p,{children:`The function performs checks in the following order:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Language Check`}),`: Verifies that a language is set via `,(0,c.jsx)(t.code,{children:`GeoRef.get().value`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Conditions Check`}),`: If the `,(0,c.jsx)(t.code,{children:`conditions`}),` parameter is provided, it is called for an additional check (e.g., checking permissions or data loading state).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Primary Getter Execution`}),`: If both checks above pass, the `,(0,c.jsx)(t.code,{children:`getter`}),` is called. If it returns a value (not `,(0,c.jsx)(t.code,{children:`undefined`}),`), that value becomes the result.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Fallback Option`}),`: If any of the checks fail or the `,(0,c.jsx)(t.code,{children:`getter`}),` returns `,(0,c.jsx)(t.code,{children:`undefined`}),`, the `,(0,c.jsx)(t.code,{children:`getterNone`}),` is executed/returned.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getter: ComputedGetter<R>`}),` — The primary logic for obtaining the value. Called only if the language is set and conditions are met.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getterNone: R | (() => R)`}),` — A fallback value or a function returning it. Acts as "Plan B". Default: `,(0,c.jsx)(t.code,{children:`() => undefined`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`conditions?: () => boolean`}),` — A condition function. Acts as a gatekeeper: if it returns `,(0,c.jsx)(t.code,{children:`false`}),`, the main `,(0,c.jsx)(t.code,{children:`getter`}),` will not even be triggered.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`debugOptions?: DebuggerOptions`}),` — Options used for debugging reactive computations, supported by Vue.js.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`ComputedRef<R>`}),` — A reactive computed property.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { computedByLanguage } from '@dxtmisha/functional'
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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
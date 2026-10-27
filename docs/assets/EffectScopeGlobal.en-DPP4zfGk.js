import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Classes/EffectScopeGlobal - Global Reactive Scope`}),`
`,(0,c.jsx)(t.h1,{id:`effectscopeglobal-class`,children:`EffectScopeGlobal Class`}),`
`,(0,c.jsxs)(t.p,{children:[`Static entry point for running effects in a lazily created detached Vue scope. The scope is cached through `,(0,c.jsx)(t.code,{children:`ServerStorage`}),`, so SSR ownership follows the initialized request context.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lazy scope`}),` — created on the first `,(0,c.jsx)(t.code,{children:`run()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Detached lifetime`}),` — stopping a calling component scope does not stop these effects.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Return preservation`}),` — callback results and thrown errors propagate to the caller.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`behavior-and-lifecycle`,children:`Behavior and lifecycle`}),`
`,(0,c.jsxs)(t.p,{children:[`Initialize `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` with the current request context before SSR use. This class exposes no stop method; callbacks should return cleanup handles when the caller needs individual teardown. It does not make asynchronous callback work part of the scope after an `,(0,c.jsx)(t.code,{children:`await`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { EffectScopeGlobal } from '@dxtmisha/functional'
import { ref, watch } from 'vue'

const source = /*#__PURE__*/ ref(0)
const observed = /*#__PURE__*/ ref(0)
const stop = /*#__PURE__*/ EffectScopeGlobal.run(() => watch(source, value => {
  observed.value = value
}))
stop?.()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`effect-execution`,children:`Effect execution`}),`
`,(0,c.jsx)(t.h4,{id:`run`,children:(0,c.jsx)(t.code,{children:`run`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`run<T>(fn: () => T): T | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Runs the callback synchronously inside the cached detached effect scope and returns its result.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fn: () => T`}),` — Callback to execute inside the detached scope.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`T | undefined`}),` — Callback result, or undefined when the stored scope is inactive.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ EffectScopeGlobal.run(() => 0)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
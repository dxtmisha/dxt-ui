import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Classes/DesignLifecycleAbstract`}),`
`,(0,c.jsx)(t.h1,{id:`designlifecycleabstract-class`,children:`DesignLifecycleAbstract Class`}),`
`,(0,c.jsxs)(t.p,{children:[`Abstract marker class for dependencies with synchronous component lifecycle callbacks. `,(0,c.jsx)(t.code,{children:`DesignLogicAbstract`}),` invokes these callbacks only on instances derived from this class.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Optional callbacks`}),` — either callback may be omitted.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Synchronous contract`}),` — callbacks return `,(0,c.jsx)(t.code,{children:`void`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Explicit invocation`}),` — constructing a dependency does not run callbacks.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:`Extend this abstract class; do not instantiate it directly.`}),`
`,(0,c.jsx)(t.h2,{id:`behavior-and-lifecycle`,children:`Behavior and lifecycle`}),`
`,(0,c.jsxs)(t.p,{children:[`This class has no public methods. Subclasses supply readonly `,(0,c.jsx)(t.code,{children:`onMounted?: () => void`}),` and `,(0,c.jsx)(t.code,{children:`onUnmounted?: () => void`}),` properties. Asynchronous work and its cleanup belong to the subclass.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignLifecycleAbstract } from '@dxtmisha/functional'

class Dependency extends DesignLifecycleAbstract {
  mounted = false
  override readonly onMounted = (): void => { this.mounted = true }
  override readonly onUnmounted = (): void => { this.mounted = false }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`onMounted: (() => void) | undefined`}),` — Optional synchronous mount callback.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`onUnmounted: (() => void) | undefined`}),` — Optional synchronous cleanup callback.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.p,{children:`No public methods; use the properties described above.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
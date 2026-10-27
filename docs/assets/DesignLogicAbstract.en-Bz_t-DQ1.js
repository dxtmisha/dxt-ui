import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Classes/DesignLogicAbstract`}),`
`,(0,c.jsx)(t.h1,{id:`designlogicabstract-class`,children:`DesignLogicAbstract Class`}),`
`,(0,c.jsx)(t.p,{children:`Abstract orchestrator for component logic dependencies. It captures the current Vue effect scope, stores shared constructor inputs, and lazily creates and caches dependency instances by string key.`}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lazy construction`}),` — parameter factories run only on first creation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Scope ownership`}),` — dependency effects belong to the captured active scope.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lifecycle dispatch`}),` — synchronous callbacks are recognized through `,(0,c.jsx)(t.code,{children:`DesignLifecycleAbstract`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor( props: Readonly<P>, element: Ref<E | undefined>, naming: DesignName, components?: DesignComponents<COMP, P>, slots?: SLOTS, emits?: ConstrEmit<EMITS>, constructors?: Partial<CONSTRUCTORS>, hasLifecycle: boolean = true )`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props: Readonly<P>`}),` — Input properties.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: Ref<E | undefined>`}),` — Root element ref.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`naming: DesignName`}),` — Shared DesignName helper.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`components?: DesignComponents<COMP, P>`}),` — Connected component registry.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`slots?: SLOTS`}),` — Named slot registry.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`emits?: ConstrEmit<EMITS>`}),` — Component event emitter.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`constructors?: Partial<CONSTRUCTORS>`}),` — Dependency constructor overrides.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hasLifecycle: boolean = true`}),` — Whether to register component lifecycle hooks; defaults to true.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`behavior-and-lifecycle`,children:`Behavior and lifecycle`}),`
`,(0,c.jsxs)(t.p,{children:[`Generics: E is the root element, COMP the component registry, EMITS the events, SLOTS the slots, P the props, and CONSTRUCTORS the dependency constructor map. Construct during `,(0,c.jsx)(t.code,{children:`setup()`}),` or inside an active `,(0,c.jsx)(t.code,{children:`effectScope()`}),`. Without an active captured scope or an available constructor, lookup produces `,(0,c.jsx)(t.code,{children:`undefined`}),` at runtime despite the declared instance return type. Overrides in `,(0,c.jsx)(t.code,{children:`constructors`}),` take precedence over `,(0,c.jsx)(t.code,{children:`constructorItems[name].item`}),`. Conditions are watched on component mount; a truthy condition creates a dependency and a false condition does not destroy it. Only mounted Vue components register lifecycle hooks, and `,(0,c.jsx)(t.code,{children:`hasLifecycle = false`}),` disables registration. SSR does not invoke client callbacks. Mount callbacks run for existing dependencies, then condition initialization, then the logic callback. Late dependencies mount immediately. Dependency callback failures are collected, sent to `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),` and rethrown as `,(0,c.jsx)(t.code,{children:`AggregateError`}),` after all callbacks in that dispatch run; subsequent logic callbacks are not reached on that failure path.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignLogicAbstract, DesignName } from '@dxtmisha/functional'
import { effectScope, ref } from 'vue'

class Dependency {}

class Logic extends DesignLogicAbstract<
  HTMLElement, {}, {}, {}, {}, { dependency: typeof Dependency }
> {
  protected readonly constructorItems = { dependency: { item: Dependency } }

  constructor() {
    super({}, ref<HTMLElement>(), new DesignName('d1.example'))
  }
}

const scope = /*#__PURE__*/ effectScope()
const logic = /*#__PURE__*/ scope.run(() => new Logic())
const dependency = /*#__PURE__*/ logic?.getInstance('dependency')
scope.stop()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`dependency-access`,children:`Dependency access`}),`
`,(0,c.jsx)(t.h4,{id:`getinstance`,children:(0,c.jsx)(t.code,{children:`getInstance`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getInstance<K extends keyof CONSTRUCTORS & string>(name: K): ConstrInstance<CONSTRUCTORS, K>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Returns a cached dependency or creates it inside the captured active scope. Constructor arguments come from the optional `,(0,c.jsx)(t.code,{children:`parameters()`}),` factory. A failed constructor is not cached and can be retried.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: K`}),` — String key of a dependency constructor.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ConstrInstance<CONSTRUCTORS, K>`}),` — Cached or newly created dependency instance.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const dependency = /*#__PURE__*/ logic?.getInstance('dependency')
`})}),`
`,(0,c.jsx)(t.h3,{id:`shorthand-access`,children:`Shorthand access`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`i<K extends keyof CONSTRUCTORS & string>(name: K): ConstrInstance<CONSTRUCTORS, K>`}),` — Delegates to `,(0,c.jsx)(t.code,{children:`getInstance()`}),` with the same key and result.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Classes/DesignComponents - Base Components Manager`}),`
`,(0,c.jsx)(t.h1,{id:`designcomponents-class`,children:`DesignComponents Class`}),`
`,(0,c.jsx)(t.p,{children:`Typed registry of connected Vue components. It resolves components by name, caches computed modification maps, merges props, and creates VNodes with consistent keys.`}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Registry`}),` — `,(0,c.jsx)(t.code,{children:`COMP`}),` determines valid component names.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Reactive defaults`}),` — modification maps and individual values may be refs.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Prop composition`}),` — explicit props override defaults; classes and styles are merged.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor( components: COMP = {} as COMP, modification?: ConstrComponentMod<P> )`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`components: COMP = {} as COMP`}),` — Connected component registry.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`modification?: ConstrComponentMod<P>`}),` — Per-index default prop maps, optionally reactive.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`behavior-and-lifecycle`,children:`Behavior and lifecycle`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`P`}),` describes component props. A missing component returns `,(0,c.jsx)(t.code,{children:`undefined`}),` from `,(0,c.jsx)(t.code,{children:`renderOne()`}),` and an empty array from `,(0,c.jsx)(t.code,{children:`render()`}),`. The default modification index is the component name. Explicit VNode keys are preserved.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignComponents } from '@dxtmisha/functional'
import { ref } from 'vue'

const disabled = /*#__PURE__*/ ref(false)
const components = /*#__PURE__*/ new DesignComponents(
  { button: 'button' },
  { button: { disabled, class: 'base' } }
)
const node = /*#__PURE__*/ components.renderOne('button', { title: 'Save' })
disabled.value = true
const updatedNode = /*#__PURE__*/ components.renderOne('button')
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`registry-lookup`,children:`Registry lookup`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`is<K extends keyof COMP>(name: K): name is K`}),` — Checks whether a registry entry contains a component.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`get<K extends keyof COMP>(name: K): COMP[K]`}),` — Returns the registry entry without creating a VNode.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`prop-modifications`,children:`Prop modifications`}),`
`,(0,c.jsx)(t.h4,{id:`getmodification`,children:(0,c.jsx)(t.code,{children:`getModification`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getModification<K extends keyof P>( index?: K & string | string, props?: P[K] | ConstrItem ): ConstrItem | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Caches the computed defaults for an index and merges explicit props using `,(0,c.jsx)(t.code,{children:`toBinds`}),`. Without a nonempty index, returns the supplied props unchanged.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index?: K & string | string`}),` — Entry or modification index.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props?: P[K] | ConstrItem`}),` — Input properties.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ConstrItem | undefined`}),` — Merged prop map or the unchanged props when no index is supplied.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const props = /*#__PURE__*/ components.getModification('button', { disabled: false })
`})}),`
`,(0,c.jsx)(t.h3,{id:`rendering`,children:`Rendering`}),`
`,(0,c.jsx)(t.h4,{id:`renderone`,children:(0,c.jsx)(t.code,{children:`renderOne`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`renderOne< K extends keyof COMP, PK extends keyof P >( name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string ): VNode | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Creates one VNode with merged props and children. Returns `,(0,c.jsx)(t.code,{children:`undefined`}),` for a missing component.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: K & string`}),` — Connected component registry key.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props?: P[PK] & ConstrItem | ConstrItem`}),` — Input properties.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`children?: RawChildren | RawSlots`}),` — Child content or an optional VNode accumulator.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index?: PK & string | string`}),` — Entry or modification index.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`VNode | undefined`}),` — Rendered VNode, or undefined when the component is missing.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const node = /*#__PURE__*/ components.renderOne('button', { title: 'Save' })
`})}),`
`,(0,c.jsx)(t.h4,{id:`render`,children:(0,c.jsx)(t.code,{children:`render`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`render< K extends keyof COMP, PK extends keyof P >( name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string ): VNode[]`})}),`
`,(0,c.jsx)(t.p,{children:`Wraps the rendered VNode in an array; returns an empty array for a missing component.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: K & string`}),` — Connected component registry key.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props?: P[PK] & ConstrItem | ConstrItem`}),` — Input properties.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`children?: RawChildren | RawSlots`}),` — Child content or an optional VNode accumulator.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index?: PK & string | string`}),` — Entry or modification index.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`VNode[]`}),` — Single-VNode array or an empty array.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const nodes = /*#__PURE__*/ components.render('button')
`})}),`
`,(0,c.jsx)(t.h4,{id:`renderadd`,children:(0,c.jsx)(t.code,{children:`renderAdd`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`renderAdd< K extends keyof COMP, PK extends keyof P >( item: unknown[], name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string ): this`})}),`
`,(0,c.jsx)(t.p,{children:`Appends rendered nodes to an existing array and returns the same registry for chaining.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: unknown[]`}),` — Existing array to append rendered nodes to.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: K & string`}),` — Connected component registry key.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props?: P[PK] & ConstrItem | ConstrItem`}),` — Input properties.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`children?: RawChildren | RawSlots`}),` — Child content or an optional VNode accumulator.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index?: PK & string | string`}),` — Entry or modification index.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`this`}),` — The current instance for chaining.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const nodes: unknown[] = []
components.renderAdd(nodes, 'button')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
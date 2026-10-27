import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Classes/DesignConstructorAbstract - Base Constructor Logic`}),`
`,(0,c.jsx)(t.h1,{id:`designconstructorabstract-class`,children:`DesignConstructorAbstract Class`}),`
`,(0,c.jsxs)(t.p,{children:[`Abstract Vue rendering constructor combining naming, a root element ref, optional connected components, attrs, slots, exposed data, and computed class/style composition. Instantiate a concrete subclass during component `,(0,c.jsx)(t.code,{children:`setup()`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Composition`}),` — root classes combine logic, options and external attrs.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Styles`}),` — logic, options and external styles merge in that precedence order.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Slots`}),` — keyed fragments preserve slot groups and reactive slot replacement.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor( name: string, props: Readonly<P>, options?: ConstrOptions<COMP, EMITS, P> )`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Component, dependency, slot or route name according to the method.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props: Readonly<P>`}),` — Input properties.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: ConstrOptions<COMP, EMITS, P>`}),` — Configuration options.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`behavior-and-lifecycle`,children:`Behavior and lifecycle`}),`
`,(0,c.jsxs)(t.p,{children:[`Generic parameters: `,(0,c.jsx)(t.code,{children:`E`}),` is the root element; `,(0,c.jsx)(t.code,{children:`COMP`}),` the component registry; `,(0,c.jsx)(t.code,{children:`EMITS`}),` events; `,(0,c.jsx)(t.code,{children:`EXPOSE`}),` exposed data; `,(0,c.jsx)(t.code,{children:`SLOTS`}),` slots; `,(0,c.jsx)(t.code,{children:`CLASSES`}),` class map; `,(0,c.jsx)(t.code,{children:`P`}),` props. Implement `,(0,c.jsx)(t.code,{children:`initExpose`}),`, `,(0,c.jsx)(t.code,{children:`initClasses`}),`, `,(0,c.jsx)(t.code,{children:`initStyles`}),` and `,(0,c.jsx)(t.code,{children:`initRender`}),`. The constructor initializes state directly; call `,(0,c.jsx)(t.code,{children:`render()`}),` once during `,(0,c.jsx)(t.code,{children:`setup()`}),` to obtain the render function. `,(0,c.jsx)(t.code,{children:`getAttrs()`}),` excludes `,(0,c.jsx)(t.code,{children:`class`}),` and `,(0,c.jsx)(t.code,{children:`style`}),`. Non-root class entries from options replace matching logic entries; `,(0,c.jsx)(t.code,{children:`main`}),` is normalized from all three sources. `,(0,c.jsx)(t.code,{children:`expose()`}),` always adds the root ref as `,(0,c.jsx)(t.code,{children:`elementHtml`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignConstructorAbstract } from '@dxtmisha/functional'
import { defineComponent, h, type VNode } from 'vue'

class ExampleDesign extends DesignConstructorAbstract<
  HTMLElement, {}, {}, {}, {}, { main: string }, {}
> {
  constructor() { super('d1.example', {}) }
  protected initExpose(): {} { return {} }
  protected initClasses(): { main: string } { return { main: 'd1-example' } }
  protected initStyles(): {} { return {} }
  protected initRender(): VNode {
    return h('div', {
      ...this.getAttrs(),
      ref: this.element,
      class: this.classes?.value.main,
      style: this.styles?.value
    })
  }
}

const Example = /*#__PURE__*/ defineComponent({
  inheritAttrs: false,
  setup(_props, context) {
    const design = new ExampleDesign()
    context.expose(design.expose())
    return design.render()
  }
})
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`attributes-and-naming`,children:`Attributes and naming`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getAttrs(): ConstrItem`}),` — Returns a new attribute object without `,(0,c.jsx)(t.code,{children:`class`}),` and `,(0,c.jsx)(t.code,{children:`style`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getKeyClass<K extends keyof CLASSES>(name: K & string)`}),` — Returns a sub-element key and its current computed class entry.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getNaming(): DesignName`}),` — Returns this constructor’s `,(0,c.jsx)(t.code,{children:`DesignName`}),` instance.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`rendering-and-exposure`,children:`Rendering and exposure`}),`
`,(0,c.jsx)(t.h4,{id:`render`,children:(0,c.jsx)(t.code,{children:`render`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`render(): () => VNode | VNode[] | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Registers slot-change tracking and returns a function delegating rendering to `,(0,c.jsx)(t.code,{children:`initRender()`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`() => VNode | VNode[] | undefined`}),` — The requested value or object as declared in the signature.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const render = /*#__PURE__*/ design.render()
`})}),`
`,(0,c.jsx)(t.h4,{id:`expose`,children:(0,c.jsx)(t.code,{children:`expose`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`expose(): ConstrExpose<E, EXPOSE>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Combines `,(0,c.jsx)(t.code,{children:`initExpose()`}),` data with the root ref under `,(0,c.jsx)(t.code,{children:`elementHtml`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ConstrExpose<E, EXPOSE>`}),` — The requested value or object as declared in the signature.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`context.expose(design.expose())
`})}),`
`,(0,c.jsx)(t.h3,{id:`protected-extension-points`,children:`Protected extension points`}),`
`,(0,c.jsx)(t.h4,{id:`initexpose`,children:(0,c.jsx)(t.code,{children:`initExpose`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`initExpose(): EXPOSE`})}),`
`,(0,c.jsx)(t.p,{children:`Implement in a subclass to return the externally exposed data.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`EXPOSE`}),` — The requested value or object as declared in the signature.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`protected initExpose(): {} { return {} }
`})}),`
`,(0,c.jsx)(t.h4,{id:`initclasses`,children:(0,c.jsx)(t.code,{children:`initClasses`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`initClasses(): Partial<CLASSES>`})}),`
`,(0,c.jsx)(t.p,{children:`Implement in a subclass to return the logic class map before merging.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`Partial<CLASSES>`}),` — The requested value or object as declared in the signature.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`protected initClasses(): { main: string } { return { main: 'd1-example' } }
`})}),`
`,(0,c.jsx)(t.h4,{id:`initstyles`,children:(0,c.jsx)(t.code,{children:`initStyles`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`initStyles(): ConstrStyles`})}),`
`,(0,c.jsx)(t.p,{children:`Implement in a subclass to return styles before options and attrs are applied.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ConstrStyles`}),` — The requested value or object as declared in the signature.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`protected initStyles(): {} { return {} }
`})}),`
`,(0,c.jsx)(t.h4,{id:`initrender`,children:(0,c.jsx)(t.code,{children:`initRender`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`initRender(): VNode | VNode[] | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Implement the VNode tree. The result may be one node, an array, or `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`VNode | VNode[] | undefined`}),` — The requested value or object as declared in the signature.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`protected initRender(): VNode { return h('div', { ref: this.element }) }
`})}),`
`,(0,c.jsx)(t.h4,{id:`initslot`,children:(0,c.jsx)(t.code,{children:`initSlot`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`initSlot<K extends keyof SLOTS>( name: K, children?: VNode[], props: ConstrItem = {} ): VNode | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Renders a named slot as a keyed fragment and optionally appends that fragment to `,(0,c.jsx)(t.code,{children:`children`}),`. Missing slots return `,(0,c.jsx)(t.code,{children:`undefined`}),` without modifying the array.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: K`}),` — Named slot key.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`children?: VNode[]`}),` — Child content or an optional VNode accumulator.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props: ConstrItem = {}`}),` — Scoped-slot properties; defaults to an empty object.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`VNode | undefined`}),` — The requested value or object as declared in the signature.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const children: VNode[] = []
this.initSlot('default', children, { value: 0 })
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
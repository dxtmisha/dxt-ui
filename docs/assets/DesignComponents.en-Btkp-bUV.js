import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional/Classes/DesignComponents - Base Components Manager`}),`
`,(0,c.jsx)(n.h1,{id:`designcomponents-class`,children:`DesignComponents Class`}),`
`,(0,c.jsx)(n.p,{children:`A base class for working with connected components and managing their rendering logic within a design system. It allows for component registration, modification of their default properties, and flexible VNode generation.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Component Management`}),` — centralized registration and retrieval of Vue components.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dynamic Modifications`}),` — supports applying global or specific property modifications to components before rendering.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flexible Rendering`}),` — provides multiple methods (`,(0,c.jsx)(n.code,{children:`render`}),`, `,(0,c.jsx)(n.code,{children:`renderOne`}),`, `,(0,c.jsx)(n.code,{children:`renderAdd`}),`) for generating Vue VNodes with automatic property binding.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Performance Optimization`}),` — uses internal caching with Vue `,(0,c.jsx)(n.code,{children:`computed`}),` properties for property modifications.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Creates a new `,(0,c.jsx)(n.code,{children:`DesignComponents`}),` instance. The class combines components and their modifications into a single rendering management mechanism.`]}),`
`,(0,c.jsx)(n.h3,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsx)(n.p,{children:`The class uses generics to ensure flexible rendering type configuration:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`COMP extends ConstrComponent`}),` — An object with a list of available components. Defines the structure by which `,(0,c.jsx)(n.code,{children:`DesignComponents`}),` will look up and return components for rendering.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`P extends ConstrItem`}),` — The property (props) type used for typing modifications and data passed during rendering.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`components: COMP = {}`}),` — a list of connected components (an object where keys are names and values are Vue components).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`modification?: ConstrComponentMod<P>`}),` — a modification object that allows overriding props for each component.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignComponents } from '@dxtmisha/functional'
import MyButton from './MyButton.vue'
import MyInput from './MyInput.vue'

// 1. Component registration
const components = {
  button: MyButton,
  input: MyInput
}

// 2. Defining modifications (default props)
const modification = {
  button: { size: 'large', color: 'primary' },
  input: { focus: true }
}

const design = new DesignComponents(components, modification)
`})}),`
`,(0,c.jsx)(n.h2,{id:`rendering-methods`,children:`Rendering Methods`}),`
`,(0,c.jsx)(n.h3,{id:`render`,children:(0,c.jsx)(n.code,{children:`render`})}),`
`,(0,c.jsxs)(n.p,{children:[`Renders a component by its name and returns an array containing a single `,(0,c.jsx)(n.code,{children:`VNode`}),`. This is useful for Vue, which often expects arrays of nodes.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — The name of the registered component.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props: object`}),` — Properties passed to the component.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`children: any`}),` — Sub-elements or slots of the component.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index: string`}),` — The key for the VNode.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`VNode[]`}),` — An array containing the generated VNode.`]}),`
`,(0,c.jsx)(n.h3,{id:`renderone`,children:(0,c.jsx)(n.code,{children:`renderOne`})}),`
`,(0,c.jsxs)(n.p,{children:[`Renders a single component and returns the `,(0,c.jsx)(n.code,{children:`VNode`}),` object directly. If the component is not found, it returns `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — The name of the registered component.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props: object`}),` — Properties for the component.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`children: any`}),` — Sub-elements of the component.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index: string`}),` — The key for the VNode.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`VNode | undefined`}),` — The VNode object or `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`renderadd`,children:(0,c.jsx)(n.code,{children:`renderAdd`})}),`
`,(0,c.jsxs)(n.p,{children:[`Renders a component and pushes the resulting `,(0,c.jsx)(n.code,{children:`VNode`}),` into a provided array. This allows for collecting multiple nodes in a single pass.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: any[]`}),` — The array to which the rendering result will be added.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — The name of the component.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props: object`}),` — Properties for the component.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`children: any`}),` — Sub-elements of the component.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index: string`}),` — The key for the VNode.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`this`}),` — A reference to the current instance for method chaining.`]}),`
`,(0,c.jsx)(n.h2,{id:`additional-methods`,children:`Additional Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(name: string): boolean`}),` — Checks if a specific component is registered.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(name: string): COMP[K]`}),` — Returns the registered component object by its name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getModification(index?: string, props?: object): object | undefined`}),` — Returns modified input data for connected components.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
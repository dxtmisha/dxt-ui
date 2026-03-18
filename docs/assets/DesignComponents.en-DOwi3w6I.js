import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional/Classes/DesignComponents - Base Components Manager"}),`
`,e.jsx(n.h1,{id:"designcomponents-class",children:"DesignComponents Class"}),`
`,e.jsx(n.p,{children:"A base class for working with connected components and managing their rendering logic within a design system. It allows for component registration, modification of their default properties, and flexible VNode generation."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component Management"})," — centralized registration and retrieval of Vue components."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dynamic Modifications"})," — supports applying global or specific property modifications to components before rendering."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flexible Rendering"})," — provides multiple methods (",e.jsx(n.code,{children:"render"}),", ",e.jsx(n.code,{children:"renderOne"}),", ",e.jsx(n.code,{children:"renderAdd"}),") for generating Vue VNodes with automatic property binding."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Performance Optimization"})," — uses internal caching with Vue ",e.jsx(n.code,{children:"computed"})," properties for property modifications."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["Creates a new ",e.jsx(n.code,{children:"DesignComponents"})," instance. The class combines components and their modifications into a single rendering management mechanism."]}),`
`,e.jsx(n.h3,{id:"generic-constraints",children:"Generic Constraints"}),`
`,e.jsx(n.p,{children:"The class uses generics to ensure flexible rendering type configuration:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"COMP extends ConstrComponent"})," — An object with a list of available components. Defines the structure by which ",e.jsx(n.code,{children:"DesignComponents"})," will look up and return components for rendering."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"P extends ConstrItem"})," — The property (props) type used for typing modifications and data passed during rendering."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"components: COMP = {}"})," — a list of connected components (an object where keys are names and values are Vue components)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"modification?: ConstrComponentMod<P>"})," — a modification object that allows overriding props for each component."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { DesignComponents } from '@dxtmisha/functional'
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
`,e.jsx(n.h2,{id:"rendering-methods",children:"Rendering Methods"}),`
`,e.jsx(n.h3,{id:"render",children:e.jsx(n.code,{children:"render"})}),`
`,e.jsxs(n.p,{children:["Renders a component by its name and returns an array containing a single ",e.jsx(n.code,{children:"VNode"}),". This is useful for Vue, which often expects arrays of nodes."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — The name of the registered component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: object"})," — Properties passed to the component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"children: any"})," — Sub-elements or slots of the component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index: string"})," — The key for the VNode."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"VNode[]"})," — An array containing the generated VNode."]}),`
`,e.jsx(n.h3,{id:"renderone",children:e.jsx(n.code,{children:"renderOne"})}),`
`,e.jsxs(n.p,{children:["Renders a single component and returns the ",e.jsx(n.code,{children:"VNode"})," object directly. If the component is not found, it returns ",e.jsx(n.code,{children:"undefined"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — The name of the registered component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: object"})," — Properties for the component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"children: any"})," — Sub-elements of the component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index: string"})," — The key for the VNode."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"VNode | undefined"})," — The VNode object or ",e.jsx(n.code,{children:"undefined"}),"."]}),`
`,e.jsx(n.h3,{id:"renderadd",children:e.jsx(n.code,{children:"renderAdd"})}),`
`,e.jsxs(n.p,{children:["Renders a component and pushes the resulting ",e.jsx(n.code,{children:"VNode"})," into a provided array. This allows for collecting multiple nodes in a single pass."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item: any[]"})," — The array to which the rendering result will be added."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — The name of the component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: object"})," — Properties for the component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"children: any"})," — Sub-elements of the component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index: string"})," — The key for the VNode."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — A reference to the current instance for method chaining."]}),`
`,e.jsx(n.h2,{id:"additional-methods",children:"Additional Methods"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"is(name: string): boolean"})," — Checks if a specific component is registered."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get(name: string): COMP[K]"})," — Returns the registered component object by its name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getModification(index?: string, props?: object): object | undefined"})," — Returns modified input data for connected components."]}),`
`]})]})}function p(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{p as default};

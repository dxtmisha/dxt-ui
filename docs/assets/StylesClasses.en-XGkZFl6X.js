import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/StylesClasses - Base Class Generator"}),`
`,e.jsx(s.h1,{id:"stylesclasses-class",children:"StylesClasses Class"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"StylesClasses"})," class is responsible for generating base CSS classes from design properties. It filters the property list for categories like ",e.jsx(s.code,{children:"class"})," and ",e.jsx(s.code,{children:"theme"})," and creates individual class structures."]}),`
`,e.jsx(s.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Category Filtering"})," — Specifically targets properties categorized as ",e.jsx(s.code,{children:"class"})," or ",e.jsx(s.code,{children:"theme"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Dynamic Class Generation"})," — Creates a dictionary of SCSS blocks, where each key is a class name."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Dependency Orchestration"})," — Uses ",e.jsx(s.code,{children:"StylesProperties"})," to generate the internal style rules (properties, mixins, etc.) for each class."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Import Management"})," — Automatically includes necessary SCSS ",e.jsx(s.code,{children:"@use"})," directives to link the generated class files."]}),`
`]}),`
`,e.jsx(s.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(s.p,{children:["To initialize the object, call the ",e.jsx(s.code,{children:"StylesClasses(items)"})," constructor."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"items: PropertiesItems"})," — an object for working with the list of design properties."]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { StylesClasses, PropertiesItems } from '@dxtmisha/scripts'

// 1. Initialize PropertiesItems
const items = new PropertiesItems(designData)

// 2. Initialize StylesClasses
const generator = new StylesClasses(items)
`})}),`
`,e.jsx(s.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(s.h3,{id:"control",children:"Control"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"init(): StylesClassesItem"})," — The main entry point. Processes the property list and returns an object containing the list of required imports and the generated class content."]}),`
`]}),`
`,e.jsx(s.h2,{id:"types",children:"Types"}),`
`,e.jsx(s.h3,{id:"stylesclassesitem",children:"StylesClassesItem"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"data: string[]"})," — An array of SCSS ",e.jsx(s.code,{children:"@use"})," statements for the generated class files."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"classes: Record<string, string[]>"})," — A dictionary where each key is a class name and the value is an array of strings representing the SCSS content of that class."]}),`
`]})]})}function x(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{x as default};

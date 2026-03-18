import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/scripts/Classes/PropertiesWrap - Structure Optimization"}),`
`,e.jsx(t.h1,{id:"propertieswrap-class",children:"PropertiesWrap Class"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"PropertiesWrap"})," class is designed for the automated optimization of token structures within the design system. Its primary role is to identify duplicate property values occurring at the same nesting level and move them to the parent level. This significantly reduces the size of JSON/JS configuration files and simplifies their maintenance."]}),`
`,e.jsx(t.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Duplicate Elimination"})," — automatically moves common properties of a component group higher up the hierarchy."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Recursive Optimization"})," — processes the property tree to any depth."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Smart Merging"})," — identifies properties with the maximum number of occurrences for most efficient structural compression."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Transparency"})," — utilizes the system ",e.jsx(t.code,{children:"wrap"})," key to identify blocks requiring optimization."]}),`
`]}),`
`,e.jsx(t.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(t.p,{children:["The class provides static methods and does not require instantiation via ",e.jsx(t.code,{children:"new"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { PropertiesWrap } from '@dxtmisha/scripts'

// Optimizing property structure (mutates the original object)
PropertiesWrap.to(myProperties)
`})}),`
`,e.jsx(t.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(t.h3,{id:"to",children:e.jsx(t.code,{children:"to"})}),`
`,e.jsxs(t.p,{children:["A static method that initiates the optimization process. It traverses the property tree and, upon encountering a block with the ",e.jsx(t.code,{children:"_wrap"})," flag, analyzes its contents. If identical properties are found among child elements within the block, they are moved to the level of the current block, and the duplicates in the child elements are removed."]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"properties: PropertyList"})," — the property list object to be optimized."]}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`const tokens = {
  button: {
    _wrap: true,
    value: {
      primary: { value: { padding: '10px', color: 'red' } },
      secondary: { value: { padding: '10px', color: 'blue' } }
    }
  }
};

PropertiesWrap.to(tokens);

/* Optimization result:
{
  button: {
    padding: '10px', // Moved up one level
    value: {
      primary: { value: { color: 'red' } },
      secondary: { value: { color: 'blue' } }
    }
  }
}
*/
`})}),`
`,e.jsx(t.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(t.h3,{id:"the-optimization-algorithm-how-it-works",children:"The Optimization Algorithm (How it works)"}),`
`,e.jsx(t.p,{children:"The structural compression process occurs in several stages:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Flag Searching"}),": The system searches the object for the ",e.jsx(t.code,{children:"_wrap"})," property (defined in ",e.jsx(t.code,{children:"PropertyKey.wrap"}),")."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Statistics Collection (getSelectors)"}),": If the flag is found, the class gathers information about all properties of the child elements (names and their values)."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Repetition Analysis (getMaxRepeat)"}),": It identifies the property that occurs most frequently with the same value."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Data Transfer"}),": The identified common property is added to the current (parent) block."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Cleanup (removeProperties)"}),": This property is removed from all child elements where it had an identical value."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Completion"}),": The ",e.jsx(t.code,{children:"_wrap"})," flag is removed from the object."]}),`
`]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"compressing-theme-configuration",children:"Compressing Theme Configuration"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { PropertiesWrap } from '@dxtmisha/scripts'

const designData = {
  typography: {
    _wrap: true,
    value: {
      h1: { value: { 'font-family': 'Inter', 'font-size': '32px' } },
      h2: { value: { 'font-family': 'Inter', 'font-size': '24px' } },
      p: { value: { 'font-family': 'Inter', 'font-size': '16px' } }
    }
  }
}

PropertiesWrap.to(designData)
// Result: 'font-family': 'Inter' will be moved to the root of the typography object
`})})]})}function d(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{d as default};

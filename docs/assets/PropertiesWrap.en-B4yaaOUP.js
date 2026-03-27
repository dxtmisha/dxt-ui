import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/PropertiesWrap - Structure Optimization`}),`
`,(0,c.jsx)(n.h1,{id:`propertieswrap-class`,children:`PropertiesWrap Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesWrap`}),` class is designed for the automated optimization of token structures within the design system. Its primary role is to identify duplicate property values occurring at the same nesting level and move them to the parent level. This significantly reduces the size of JSON/JS configuration files and simplifies their maintenance.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Duplicate Elimination`}),` — automatically moves common properties of a component group higher up the hierarchy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Recursive Optimization`}),` — processes the property tree to any depth.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Smart Merging`}),` — identifies properties with the maximum number of occurrences for most efficient structural compression.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Transparency`}),` — utilizes the system `,(0,c.jsx)(n.code,{children:`wrap`}),` key to identify blocks requiring optimization.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`The class provides static methods and does not require instantiation via `,(0,c.jsx)(n.code,{children:`new`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesWrap } from '@dxtmisha/scripts'

// Optimizing property structure (mutates the original object)
PropertiesWrap.to(myProperties)
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`to`,children:(0,c.jsx)(n.code,{children:`to`})}),`
`,(0,c.jsxs)(n.p,{children:[`A static method that initiates the optimization process. It traverses the property tree and, upon encountering a block with the `,(0,c.jsx)(n.code,{children:`_wrap`}),` flag, analyzes its contents. If identical properties are found among child elements within the block, they are moved to the level of the current block, and the duplicates in the child elements are removed.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`properties: PropertyList`}),` — the property list object to be optimized.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const tokens = {
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
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-optimization-algorithm-how-it-works`,children:`The Optimization Algorithm (How it works)`}),`
`,(0,c.jsx)(n.p,{children:`The structural compression process occurs in several stages:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flag Searching`}),`: The system searches the object for the `,(0,c.jsx)(n.code,{children:`_wrap`}),` property (defined in `,(0,c.jsx)(n.code,{children:`PropertyKey.wrap`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Statistics Collection (getSelectors)`}),`: If the flag is found, the class gathers information about all properties of the child elements (names and their values).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Repetition Analysis (getMaxRepeat)`}),`: It identifies the property that occurs most frequently with the same value.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Data Transfer`}),`: The identified common property is added to the current (parent) block.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cleanup (removeProperties)`}),`: This property is removed from all child elements where it had an identical value.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Completion`}),`: The `,(0,c.jsx)(n.code,{children:`_wrap`}),` flag is removed from the object.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`compressing-theme-configuration`,children:`Compressing Theme Configuration`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesWrap } from '@dxtmisha/scripts'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/PropertiesStandard - Property Standardization`}),`
`,(0,c.jsx)(n.h1,{id:`propertiesstandard-class`,children:`PropertiesStandard Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesStandard`}),` class is the central mechanism for data normalization within the design system. Its primary task is to transform "raw" token input data (which may be represented as strings, numbers, or simplified objects) into a strictly typed `,(0,c.jsx)(n.code,{children:`PropertyItem`}),` structure that the rest of the system's tools can work with.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Data Normalization`}),` — ensures that every property has a standardized set of fields (`,(0,c.jsx)(n.code,{children:`value`}),`, `,(0,c.jsx)(n.code,{children:`type`}),`, `,(0,c.jsx)(n.code,{children:`index`}),`, etc.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Recursive Processing`}),` — automatically standardizes nested object structures.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Type Detection`}),` — attempts to determine the property type based on its name (via `,(0,c.jsx)(n.code,{children:`PropertiesTypes`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Intelligent Parsing`}),` — distinguishes between regular values and special meta-properties (starting with `,(0,c.jsx)(n.code,{children:`__`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Data Merging`}),` — correctly merges new data with existing data, maintaining structural integrity.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`The class provides static methods, so it does not need to be initialized via `,(0,c.jsx)(n.code,{children:`new`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesStandard } from '@dxtmisha/scripts'

// Calling a static method
const standardized = PropertiesStandard.to(rawInput)
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`to`,children:(0,c.jsx)(n.code,{children:`to`})}),`
`,(0,c.jsxs)(n.p,{children:[`A static method that takes raw data or a property list and returns a fully normalized `,(0,c.jsx)(n.code,{children:`PropertyList`}),`. The method iterates through all elements, determines their keys, types, and values, and recursively processes nested objects.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`properties: PropertyListOrData`}),` — input property data in any supported format.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`PropertyList`}),` — an object where every element is brought to the `,(0,c.jsx)(n.code,{children:`PropertyItem`}),` standard.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const result = PropertiesStandard.to({
  'primary-color': '#007bff',
  'padding': { value: 16, type: 'size' }
});

/* Result:
{
  'primary-color': { 
    value: '#007bff', 
    type: 'color', 
    index: 'primary-color' 
  },
  'padding': { 
    value: '16px', 
    type: 'size', 
    index: 'padding' 
  }
}
*/
`})}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-standardization-algorithm-getitem`,children:`The Standardization Algorithm (getItem)`}),`
`,(0,c.jsx)(n.p,{children:`When processing each element, the following steps are performed:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Object Transformation`}),`: The `,(0,c.jsx)(n.code,{children:`toItem`}),` method checks the input value type. If it is a string or array, it is wrapped in an `,(0,c.jsx)(n.code,{children:`{ value: ... }`}),` object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Meta-data Separation`}),`: The `,(0,c.jsx)(n.code,{children:`getValueAndSpecial`}),` method separates the useful `,(0,c.jsx)(n.code,{children:`value`}),` from special control keys (e.g., `,(0,c.jsx)(n.code,{children:`__custom`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Type Determination`}),`: If the type is not explicitly specified, the `,(0,c.jsx)(n.code,{children:`addType`}),` method attempts to calculate it based on the key name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Finality Check`}),`: The `,(0,c.jsx)(n.code,{children:`addFull`}),` method adds `,(0,c.jsx)(n.code,{children:`fullName`}),` or `,(0,c.jsx)(n.code,{children:`fullValue`}),` markers if the data does not require further processing (e.g., for already resolved links).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Value Transformation`}),`: Through `,(0,c.jsx)(n.code,{children:`addValue`}),`, all numeric values are converted to strings, adding units where necessary.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Index Registration`}),`: Each element is assigned a cleaned `,(0,c.jsx)(n.code,{children:`index`}),` for quick backtracking.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`standardizing-a-complex-structure`,children:`Standardizing a Complex Structure`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesStandard } from '@dxtmisha/scripts'

const data = {
  header: {
    height: 60,
    background: '{color.white}'
  }
}

const standardData = PropertiesStandard.to(data)
// All fields in standardData.header.value now have the correct PropertyItem structure
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
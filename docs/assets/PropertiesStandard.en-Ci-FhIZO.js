import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/scripts/Classes/PropertiesStandard - Property Standardization"}),`
`,e.jsx(t.h1,{id:"propertiesstandard-class",children:"PropertiesStandard Class"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"PropertiesStandard"}),' class is the central mechanism for data normalization within the design system. Its primary task is to transform "raw" token input data (which may be represented as strings, numbers, or simplified objects) into a strictly typed ',e.jsx(t.code,{children:"PropertyItem"})," structure that the rest of the system's tools can work with."]}),`
`,e.jsx(t.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Data Normalization"})," — ensures that every property has a standardized set of fields (",e.jsx(t.code,{children:"value"}),", ",e.jsx(t.code,{children:"type"}),", ",e.jsx(t.code,{children:"index"}),", etc.)."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Recursive Processing"})," — automatically standardizes nested object structures."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Automated Type Detection"})," — attempts to determine the property type based on its name (via ",e.jsx(t.code,{children:"PropertiesTypes"}),")."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Intelligent Parsing"})," — distinguishes between regular values and special meta-properties (starting with ",e.jsx(t.code,{children:"__"}),")."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Data Merging"})," — correctly merges new data with existing data, maintaining structural integrity."]}),`
`]}),`
`,e.jsx(t.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(t.p,{children:["The class provides static methods, so it does not need to be initialized via ",e.jsx(t.code,{children:"new"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { PropertiesStandard } from '@dxtmisha/scripts'

// Calling a static method
const standardized = PropertiesStandard.to(rawInput)
`})}),`
`,e.jsx(t.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(t.h3,{id:"to",children:e.jsx(t.code,{children:"to"})}),`
`,e.jsxs(t.p,{children:["A static method that takes raw data or a property list and returns a fully normalized ",e.jsx(t.code,{children:"PropertyList"}),". The method iterates through all elements, determines their keys, types, and values, and recursively processes nested objects."]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"properties: PropertyListOrData"})," — input property data in any supported format."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"})," ",e.jsx(t.code,{children:"PropertyList"})," — an object where every element is brought to the ",e.jsx(t.code,{children:"PropertyItem"})," standard."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`const result = PropertiesStandard.to({
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
`,e.jsx(t.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(t.h3,{id:"the-standardization-algorithm-getitem",children:"The Standardization Algorithm (getItem)"}),`
`,e.jsx(t.p,{children:"When processing each element, the following steps are performed:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Object Transformation"}),": The ",e.jsx(t.code,{children:"toItem"})," method checks the input value type. If it is a string or array, it is wrapped in an ",e.jsx(t.code,{children:"{ value: ... }"})," object."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Meta-data Separation"}),": The ",e.jsx(t.code,{children:"getValueAndSpecial"})," method separates the useful ",e.jsx(t.code,{children:"value"})," from special control keys (e.g., ",e.jsx(t.code,{children:"__custom"}),")."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Type Determination"}),": If the type is not explicitly specified, the ",e.jsx(t.code,{children:"addType"})," method attempts to calculate it based on the key name."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Finality Check"}),": The ",e.jsx(t.code,{children:"addFull"})," method adds ",e.jsx(t.code,{children:"fullName"})," or ",e.jsx(t.code,{children:"fullValue"})," markers if the data does not require further processing (e.g., for already resolved links)."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Value Transformation"}),": Through ",e.jsx(t.code,{children:"addValue"}),", all numeric values are converted to strings, adding units where necessary."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Index Registration"}),": Each element is assigned a cleaned ",e.jsx(t.code,{children:"index"})," for quick backtracking."]}),`
`]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"standardizing-a-complex-structure",children:"Standardizing a Complex Structure"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { PropertiesStandard } from '@dxtmisha/scripts'

const data = {
  header: {
    height: 60,
    background: '{color.white}'
  }
}

const standardData = PropertiesStandard.to(data)
// All fields in standardData.header.value now have the correct PropertyItem structure
`})})]})}function p(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{p as default};

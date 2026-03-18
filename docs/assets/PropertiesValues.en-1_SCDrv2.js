import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function n(r){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"@dxtmisha/en/scripts/Classes/PropertiesValues - Property Values"}),`
`,e.jsx(s.h1,{id:"propertiesvalues-class",children:"PropertiesValues Class"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"PropertiesValues"})," class provides utility methods for validating and normalizing property values (tokens). It is responsible for identifying data formats (colors, full values) and standardizing them before they are used in style generation."]}),`
`,e.jsx(s.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Marker Recognition"}),' — identifies values marked as "full" (requiring no further processing).']}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Color Validation"})," — verifies strings against HEX formats (including transparency)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type Normalization"})," — automatically converts numeric values to strings for consistency."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Data Cleanup"})," — removes system markers before the final application of values."]}),`
`]}),`
`,e.jsx(s.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(s.p,{children:["The class contains only static methods, so instantiation via ",e.jsx(s.code,{children:"new"})," is not required."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { PropertiesValues } from '@dxtmisha/scripts'

// Accessing static methods
const isFull = PropertiesValues.isFull('=someValue')
`})}),`
`,e.jsx(s.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(s.h3,{id:"isfull",children:e.jsx(s.code,{children:"isFull"})}),`
`,e.jsxs(s.p,{children:["Checks if a string value starts with the special ",e.jsx(s.code,{children:"="})," (equals) marker. This marker signals to the system that the value is final and does not require reference processing or other transformations."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"value: PropertyItemPartial['value']"})," — the property value to verify."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Returns:"})," ",e.jsx(s.code,{children:"boolean"})," — ",e.jsx(s.code,{children:"true"})," if the value is marked as full."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const result = PropertiesValues.isFull('=100%');
// Result: true
`})}),`
`,e.jsx(s.h3,{id:"iscolor",children:e.jsx(s.code,{children:"isColor"})}),`
`,e.jsxs(s.p,{children:["Checks if the provided string is a valid HEX color (starts with the ",e.jsx(s.code,{children:"#"})," symbol)."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"value: PropertyItemPartial['__c']"})," — the value to verify."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Returns:"})," ",e.jsx(s.code,{children:"boolean"})," — ",e.jsx(s.code,{children:"true"})," if the string resembles a HEX color."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const isHex = PropertiesValues.isColor('#ff0000');
// Result: true
`})}),`
`,e.jsx(s.h3,{id:"iscolorwithopacity",children:e.jsx(s.code,{children:"isColorWithOpacity"})}),`
`,e.jsxs(s.p,{children:["A specialized check for HEX colors with an alpha channel. It verifies if the string matches the eight-digit HEX format (e.g., ",e.jsx(s.code,{children:"#rrggbbaa"}),")."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"value: PropertyItemPartial['__c']"})," — the value to verify."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Returns:"})," ",e.jsx(s.code,{children:"boolean"})," — ",e.jsx(s.code,{children:"true"})," if the value is a color with transparency."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const isTrans = PropertiesValues.isColorWithOpacity('#ff000080');
// Result: true
`})}),`
`,e.jsx(s.h3,{id:"revalue",children:e.jsx(s.code,{children:"reValue"})}),`
`,e.jsxs(s.p,{children:['Normalizes the value for further use. If the value is marked as "full", the ',e.jsx(s.code,{children:"="})," marker is removed. If the value is a number, it is converted to a string."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"value: PropertyItemPartial['value']"})," — the original property value."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Returns:"})," ",e.jsx(s.code,{children:"PropertyItemPartial['value']"})," — the normalized string (or original object) value."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const val1 = PropertiesValues.reValue('=12px'); // '12px'
const val2 = PropertiesValues.reValue(24); // '24'
`})}),`
`,e.jsx(s.h3,{id:"getexpfull",children:e.jsx(s.code,{children:"getExpFull"})}),`
`,e.jsx(s.p,{children:"Returns the regular expression used to identify the full value marker."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Returns:"})," ",e.jsx(s.code,{children:"RegExp"})," — the regular expression ",e.jsx(s.code,{children:"/^=/"}),"."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const regex = PropertiesValues.getExpFull();
`})}),`
`,e.jsx(s.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(s.h3,{id:"the-value-normalization-process",children:"The Value Normalization Process"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:'"Fullness" Check'}),": The ",e.jsx(s.code,{children:"isFull"})," method determines whether the reference processing stage should be skipped."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Typing"}),": All numbers are converted to string types via ",e.jsx(s.code,{children:"reValue"})," to avoid errors during CSS/SCSS concatenation."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Filtering"}),": Control markers (such as ",e.jsx(s.code,{children:"="}),") are removed from the final string to prevent them from appearing in the resulting CSS code."]}),`
`]}),`
`,e.jsx(s.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s.h3,{id:"validating-and-cleaning-input-data",children:"Validating and Cleaning Input Data"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { PropertiesValues } from '@dxtmisha/scripts'

const rawValue = '=rgba(0,0,0,0.5)'

if (PropertiesValues.isFull(rawValue)) {
  const cleanValue = PropertiesValues.reValue(rawValue)
  console.log(cleanValue) // 'rgba(0,0,0,0.5)'
}
`})})]})}function u(r={}){const{wrapper:s}={...i(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(n,{...r})}):n(r)}export{u as default};

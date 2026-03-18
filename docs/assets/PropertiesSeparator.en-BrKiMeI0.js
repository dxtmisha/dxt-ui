import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as n}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/scripts/Classes/PropertiesSeparator - Property Splitting"}),`
`,e.jsx(r.h1,{id:"propertiesseparator-class",children:"PropertiesSeparator Class"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"PropertiesSeparator"})," class is designed to automatically transform a flat structure of tokens with composite names (using separators) into a hierarchical structure of nested objects. This allows for logical property organization, such as turning ",e.jsx(r.code,{children:"button.primary.background"})," into ",e.jsx(r.code,{children:"{ button: { primary: { background: ... } } }"}),"."]}),`
`,e.jsx(r.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Automatic Nesting"})," — transforms flat keys with separators (default is ",e.jsx(r.code,{children:"."}),") into nested objects."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Recursive Processing"})," — supports unlimited nesting depth (with an optional limit via configuration)."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Smart Merging"})," — correctly merges new sub-properties with existing objects using recursive replacement."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Name Cleaning"})," — automatically removes technical prefixes and suffixes (e.g., separator basic names) before processing."]}),`
`]}),`
`,e.jsx(r.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(r.p,{children:["The class provides static methods, so it does not need to be initialized via ",e.jsx(r.code,{children:"new"}),"."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import { PropertiesSeparator } from '@dxtmisha/scripts'

// Using static methods
const results = PropertiesSeparator.to(rawProperties)
`})}),`
`,e.jsx(r.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(r.h3,{id:"is",children:e.jsx(r.code,{children:"is"})}),`
`,e.jsxs(r.p,{children:["A static method to quickly check if the provided property list contains any keys that require splitting. It scans the top level (and nested levels up to the ",e.jsx(r.code,{children:"limit"}),") for separator characters in the names."]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Parameters:"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"properties: PropertyList"})," — the list of properties to analyze."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"limit: number"})," — the maximum depth of the check (default is taken from ",e.jsx(r.code,{children:"PropertiesConfig"}),")."]}),`
`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Returns:"})," ",e.jsx(r.code,{children:"boolean"})," — ",e.jsx(r.code,{children:"true"})," if at least one key contains a separator."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const needsSplitting = PropertiesSeparator.is(myProperties);
// Result: true if keys like "color.blue.50" exist
`})}),`
`,e.jsx(r.h3,{id:"to",children:e.jsx(r.code,{children:"to"})}),`
`,e.jsx(r.p,{children:'A static method that performs the actual transformation of a flat property list into a nested structure. The method recursively traverses all elements and, if it finds a key with a separator, "wraps" the property into a chain of nested objects according to the name segments.'}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Parameters:"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"properties: PropertyList"})," — the list of properties to transform."]}),`
`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Returns:"})," ",e.jsx(r.code,{children:"PropertyList"})," — a new property list with a hierarchical structure."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const nestedProperties = PropertiesSeparator.to({
  'palette.blue.50': { value: '#e3f2fd' }
});
/* Result:
{
  palette: {
    value: {
      blue: {
        value: {
          '50': { value: '#e3f2fd', __wrap: true }
        }
      }
    }
  }
}
*/
`})}),`
`,e.jsx(r.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(r.h3,{id:"the-name-splitting-mechanism",children:"The Name Splitting Mechanism"}),`
`,e.jsxs(r.p,{children:["The transformation process in ",e.jsx(r.code,{children:"PropertiesSeparator"})," involves several steps:"]}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Separator Detection"}),": The ",e.jsx(r.code,{children:"to"})," method checks each property name via ",e.jsx(r.code,{children:"PropertiesKeys.isSeparator"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Segmentation"}),": If a separator is found, the name is split into parts (e.g., ",e.jsx(r.code,{children:"a.b.c"})," -> ",e.jsx(r.code,{children:"['a', 'b', 'c']"}),"). Technical characters are removed beforehand via ",e.jsx(r.code,{children:"removeBasicName"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Wrapping"}),": The ",e.jsx(r.code,{children:"wrap"})," method recursively creates nested ",e.jsx(r.code,{children:"value"})," objects, placing the original property element at the deepest level. Intermediate objects are marked with ",e.jsx(r.code,{children:"__wrap: true"})," to indicate their structural nature."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Recursive Merging"}),': The resulting "branch" is merged with the main ',e.jsx(r.code,{children:"data"})," object via ",e.jsx(r.code,{children:"replaceRecursive"}),", allowing multiple properties with the same base (e.g., ",e.jsx(r.code,{children:"blue.50"})," and ",e.jsx(r.code,{children:"blue.100"}),") to correctly aggregate under a single ",e.jsx(r.code,{children:"blue"})," object."]}),`
`]}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(r.h3,{id:"grouping-palette-colors",children:"Grouping Palette Colors"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import { PropertiesSeparator } from '@dxtmisha/scripts'

const flatPalette = {
  'blue.50': { value: '#eef' },
  'blue.100': { value: '#ccf' }
}

const tree = PropertiesSeparator.to(flatPalette)
// Properties are now grouped in the tree.blue.value object
`})})]})}function p(s={}){const{wrapper:r}={...n(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(t,{...s})}):t(s)}export{p as default};

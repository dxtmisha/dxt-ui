import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/scripts/Functions/convectorColor - Color Conversion"}),`
`,e.jsx(n.h1,{id:"convectorcolor-function",children:"convectorColor Function"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"convectorColor"})," function is part of the convector system for processing property tokens. Its primary role is to extract specific color metadata from 'studio.tokens' extensions and apply it to the property object. Currently, the function specializes in handling opacity (alpha) modifications."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Studio Tokens Integration"})," — works with ",e.jsx(n.code,{children:"$extensions['studio.tokens']"})," extensions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Opacity Modification"})," — extracts the ",e.jsx(n.code,{children:"alpha"})," value from modification parameters and saves it in the system key ",e.jsx(n.code,{children:"cssColorOpacity"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automation"})," — called during the property standardization process when corresponding metadata is detected."]}),`
`]}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsx(n.p,{children:"The function accepts a single argument:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item: PropertyItemInput"})," — the property input data object, which will be mutated during execution."]}),`
`]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"handling-opacity-modification",children:"Handling Opacity Modification"}),`
`,e.jsxs(n.p,{children:["If a token contains color modification information, ",e.jsx(n.code,{children:"convectorColor"})," will extract it:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { convectorColor, PropertyKey } from '@dxtmisha/scripts'

const item = {
  value: '#ff0000',
  $extensions: {
    'studio.tokens': {
      modify: {
        type: 'alpha',
        value: '0.5'
      }
    }
  }
};

convectorColor(item);

console.log(item[PropertyKey.cssColorOpacity]); // '0.5'
`})}),`
`,e.jsx(n.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(n.h3,{id:"processing-mechanism",children:"Processing Mechanism"}),`
`,e.jsxs(n.p,{children:["The data processing in ",e.jsx(n.code,{children:"convectorColor"})," involves the following steps:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Extension Lookup"}),": The function searches for the path ",e.jsx(n.code,{children:"$extensions['studio.tokens'].modify"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type Identification"}),": If the modification type is set to ",e.jsx(n.code,{children:"alpha"}),", the function proceeds to process it."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Data Persistence"}),": The opacity value (",e.jsx(n.code,{children:"value"}),") is written to the ",e.jsx(n.code,{children:"item"})," object property using the ",e.jsx(n.code,{children:"_o"})," key (stored in ",e.jsx(n.code,{children:"PropertyKey.cssColorOpacity"}),"). If no value is specified, it defaults to ",e.jsx(n.code,{children:"'1'"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"scope-of-application",children:"Scope of Application"}),`
`,e.jsxs(n.p,{children:["The function is used within property processing classes (e.g., ",e.jsx(n.code,{children:"PropertiesStandard"}),") to enrich token data with opacity information derived from design tools."]})]})}function p(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{p as default};

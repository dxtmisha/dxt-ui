import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Functions/convectorColor - Color Conversion`}),`
`,(0,c.jsx)(n.h1,{id:`convectorcolor-function`,children:`convectorColor Function`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`convectorColor`}),` function is part of the convector system for processing property tokens. Its primary role is to extract specific color metadata from 'studio.tokens' extensions and apply it to the property object. Currently, the function specializes in handling opacity (alpha) modifications.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Studio Tokens Integration`}),` — works with `,(0,c.jsx)(n.code,{children:`$extensions['studio.tokens']`}),` extensions.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Opacity Modification`}),` — extracts the `,(0,c.jsx)(n.code,{children:`alpha`}),` value from modification parameters and saves it in the system key `,(0,c.jsx)(n.code,{children:`cssColorOpacity`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automation`}),` — called during the property standardization process when corresponding metadata is detected.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`parameters`,children:`Parameters`}),`
`,(0,c.jsx)(n.p,{children:`The function accepts a single argument:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: PropertyItemInput`}),` — the property input data object, which will be mutated during execution.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`handling-opacity-modification`,children:`Handling Opacity Modification`}),`
`,(0,c.jsxs)(n.p,{children:[`If a token contains color modification information, `,(0,c.jsx)(n.code,{children:`convectorColor`}),` will extract it:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { convectorColor, PropertyKey } from '@dxtmisha/scripts'

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
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`processing-mechanism`,children:`Processing Mechanism`}),`
`,(0,c.jsxs)(n.p,{children:[`The data processing in `,(0,c.jsx)(n.code,{children:`convectorColor`}),` involves the following steps:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Extension Lookup`}),`: The function searches for the path `,(0,c.jsx)(n.code,{children:`$extensions['studio.tokens'].modify`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Type Identification`}),`: If the modification type is set to `,(0,c.jsx)(n.code,{children:`alpha`}),`, the function proceeds to process it.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Data Persistence`}),`: The opacity value (`,(0,c.jsx)(n.code,{children:`value`}),`) is written to the `,(0,c.jsx)(n.code,{children:`item`}),` object property using the `,(0,c.jsx)(n.code,{children:`_o`}),` key (stored in `,(0,c.jsx)(n.code,{children:`PropertyKey.cssColorOpacity`}),`). If no value is specified, it defaults to `,(0,c.jsx)(n.code,{children:`'1'`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`scope-of-application`,children:`Scope of Application`}),`
`,(0,c.jsxs)(n.p,{children:[`The function is used within property processing classes (e.g., `,(0,c.jsx)(n.code,{children:`PropertiesStandard`}),`) to enrich token data with opacity information derived from design tools.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/PropertiesValues - Property Values`}),`
`,(0,c.jsx)(n.h1,{id:`propertiesvalues-class`,children:`PropertiesValues Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesValues`}),` class provides utility methods for validating and normalizing property values (tokens). It is responsible for identifying data formats (colors, full values) and standardizing them before they are used in style generation.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Marker Recognition`}),` — identifies values marked as "full" (requiring no further processing).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Color Validation`}),` — verifies strings against HEX formats (including transparency).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Type Normalization`}),` — automatically converts numeric values to strings for consistency.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Data Cleanup`}),` — removes system markers before the final application of values.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`The class contains only static methods, so instantiation via `,(0,c.jsx)(n.code,{children:`new`}),` is not required.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesValues } from '@dxtmisha/scripts'

// Accessing static methods
const isFull = PropertiesValues.isFull('=someValue')
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`isfull`,children:(0,c.jsx)(n.code,{children:`isFull`})}),`
`,(0,c.jsxs)(n.p,{children:[`Checks if a string value starts with the special `,(0,c.jsx)(n.code,{children:`=`}),` (equals) marker. This marker signals to the system that the value is final and does not require reference processing or other transformations.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: PropertyItemPartial['value']`}),` — the property value to verify.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` if the value is marked as full.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const result = PropertiesValues.isFull('=100%');
// Result: true
`})}),`
`,(0,c.jsx)(n.h3,{id:`iscolor`,children:(0,c.jsx)(n.code,{children:`isColor`})}),`
`,(0,c.jsxs)(n.p,{children:[`Checks if the provided string is a valid HEX color (starts with the `,(0,c.jsx)(n.code,{children:`#`}),` symbol).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: PropertyItemPartial['__c']`}),` — the value to verify.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` if the string resembles a HEX color.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const isHex = PropertiesValues.isColor('#ff0000');
// Result: true
`})}),`
`,(0,c.jsx)(n.h3,{id:`iscolorwithopacity`,children:(0,c.jsx)(n.code,{children:`isColorWithOpacity`})}),`
`,(0,c.jsxs)(n.p,{children:[`A specialized check for HEX colors with an alpha channel. It verifies if the string matches the eight-digit HEX format (e.g., `,(0,c.jsx)(n.code,{children:`#rrggbbaa`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: PropertyItemPartial['__c']`}),` — the value to verify.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` if the value is a color with transparency.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const isTrans = PropertiesValues.isColorWithOpacity('#ff000080');
// Result: true
`})}),`
`,(0,c.jsx)(n.h3,{id:`revalue`,children:(0,c.jsx)(n.code,{children:`reValue`})}),`
`,(0,c.jsxs)(n.p,{children:[`Normalizes the value for further use. If the value is marked as "full", the `,(0,c.jsx)(n.code,{children:`=`}),` marker is removed. If the value is a number, it is converted to a string.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: PropertyItemPartial['value']`}),` — the original property value.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`PropertyItemPartial['value']`}),` — the normalized string (or original object) value.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const val1 = PropertiesValues.reValue('=12px'); // '12px'
const val2 = PropertiesValues.reValue(24); // '24'
`})}),`
`,(0,c.jsx)(n.h3,{id:`getexpfull`,children:(0,c.jsx)(n.code,{children:`getExpFull`})}),`
`,(0,c.jsx)(n.p,{children:`Returns the regular expression used to identify the full value marker.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`RegExp`}),` — the regular expression `,(0,c.jsx)(n.code,{children:`/^=/`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const regex = PropertiesValues.getExpFull();
`})}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-value-normalization-process`,children:`The Value Normalization Process`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`"Fullness" Check`}),`: The `,(0,c.jsx)(n.code,{children:`isFull`}),` method determines whether the reference processing stage should be skipped.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Typing`}),`: All numbers are converted to string types via `,(0,c.jsx)(n.code,{children:`reValue`}),` to avoid errors during CSS/SCSS concatenation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Filtering`}),`: Control markers (such as `,(0,c.jsx)(n.code,{children:`=`}),`) are removed from the final string to prevent them from appearing in the resulting CSS code.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`validating-and-cleaning-input-data`,children:`Validating and Cleaning Input Data`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesValues } from '@dxtmisha/scripts'

const rawValue = '=rgba(0,0,0,0.5)'

if (PropertiesValues.isFull(rawValue)) {
  const cleanValue = PropertiesValues.reValue(rawValue)
  console.log(cleanValue) // 'rgba(0,0,0,0.5)'
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
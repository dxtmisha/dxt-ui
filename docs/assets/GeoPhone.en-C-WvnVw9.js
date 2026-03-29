import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/GeoPhone - Phone Number Masks`}),`
`,(0,c.jsx)(n.h1,{id:`geophone-class`,children:`GeoPhone Class`}),`
`,(0,c.jsx)(n.p,{children:`A specialized class for storing and processing international phone number masks. It provides a robust engine for identifying geographic country information by phone number strings, formatting raw numbers into localized mask specifications, and managing a comprehensive prefix-tree based map of international phone codes.`}),`
`,(0,c.jsxs)(n.p,{children:[`It integrates deeply with `,(0,c.jsx)(n.code,{children:`Geo`}),` geolocation data to provide automatic mask resolution based on the current user locale or explicit country codes.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automatic Mapping`}),` — Resolves the appropriate country and mask pattern dynamically through a recursive prefix-tree lookup.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Prefix Tree Optimization`}),` — Uses a specialized `,(0,c.jsx)(n.code,{children:`map`}),` structure (Prefix Tree) for efficient, high-performance search across international numbering plans.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Intelligent Normalization`}),` — Automatically handles regional dialing variations, such as leading trunk zeros or national prefixes (e.g., Russian '8').`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Standardized Formatting`}),` — Converts raw numeric strings into human-readable phone formats matching international telephony standards.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`search-methods`,children:`Search Methods`}),`
`,(0,c.jsx)(n.h3,{id:`getbyphone`,children:(0,c.jsx)(n.code,{children:`getByPhone`})}),`
`,(0,c.jsx)(n.p,{children:`Primary identification method that analyzes a phone number string to extract geographic information and the most suitable numbering mask.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`phone: string`}),` — The target phone number to analyze (accepts raw or partially formatted strings).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`GeoPhoneMapInfo`}),` — A structured payload containing the matched `,(0,c.jsx)(n.code,{children:`GeoPhoneMap`}),` item and the normalized numeric portion of the phone.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoPhone } from '@dxtmisha/functional-basic'

const info = GeoPhone.getByPhone('12025550123')
// returns:
// { 
//   item: { info: { phone: 1, ... }, mask: ['1 (***) ***-****'], ... },
//   phone: '2025550123' 
// }
`})}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Retrieves localized phone metadata associated with a specific country code.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: string`}),` — Standard ISO 3166 country code (e.g., `,(0,c.jsx)(n.code,{children:`'US'`}),`, `,(0,c.jsx)(n.code,{children:`'RU'`}),`, `,(0,c.jsx)(n.code,{children:`'VN'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`GeoPhoneValue | undefined`}),` — The raw metadata for the country, or `,(0,c.jsx)(n.code,{children:`undefined`}),` if not found in the dataset.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`GeoPhone.get('US') 
// { phone: 1, within: 1, mask: ['* (***) ***-****'], value: 'US' }
`})}),`
`,(0,c.jsx)(n.h3,{id:`getbycode`,children:(0,c.jsx)(n.code,{children:`getByCode`})}),`
`,(0,c.jsx)(n.p,{children:`Extended retrieval method that returns complete mask data including the search tree node for a given country code.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: string`}),` — Target country code string.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`GeoPhoneMap | undefined`}),` — The full map node object for the requested code.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`GeoPhone.getByCode('RU')
// { info: { phone: 7, ... }, mask: ['7 (***) ***-**-**'], ... }
`})}),`
`,(0,c.jsx)(n.h2,{id:`data-access-methods`,children:`Data Access Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): GeoPhoneValue[]`}),` — Returns the complete, sorted flat list of all registered international phone metadata.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMap(): Record<string, GeoPhoneMap>`}),` — Returns the root node of the internal prefix-tree used for high-speed number identification.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`formatting--utility-methods`,children:`Formatting & Utility Methods`}),`
`,(0,c.jsx)(n.h3,{id:`tomask`,children:(0,c.jsx)(n.code,{children:`toMask`})}),`
`,(0,c.jsx)(n.p,{children:`Transforms a raw numeric phone string into a formatted version based on a specified set of masks.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`phone: string`}),` — The raw numeric input.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`masks?: string[]`}),` — An array of valid mask strings to iterate through for property matching.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string | undefined`}),` — The human-formatted string, or `,(0,c.jsx)(n.code,{children:`undefined`}),` if no mask length matches the input.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`GeoPhone.toMask('2025550123', ['* (***) ***-****']) 
// '1 (202) 555-0123'
`})}),`
`,(0,c.jsx)(n.h3,{id:`removezero`,children:(0,c.jsx)(n.code,{children:`removeZero`})}),`
`,(0,c.jsx)(n.p,{children:`Standardizes internal number representation by stripping leading trunk zeros or correcting regional dialing prefixes to ensure consistent search logic.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`phone: string`}),` — The input phone number string.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — The normalized numeric string.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`GeoPhone.removeZero('0671234567')  // '671234567'
GeoPhone.removeZero('89001234567') // '9001234567'
`})}),`
`,(0,c.jsx)(n.h2,{id:`geophone-objects`,children:`GeoPhone Objects`}),`
`,(0,c.jsx)(n.h3,{id:`geophonevalue`,children:(0,c.jsx)(n.code,{children:`GeoPhoneValue`})}),`
`,(0,c.jsx)(n.p,{children:`The basic metadata structure for each country's phone configuration:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`phone: number`}),` — Dialing code (e.g., `,(0,c.jsx)(n.code,{children:`7`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`within: number`}),` — Internal dialing rule code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`mask: string[]`}),` — Array of mask patterns.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — Country identifier.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`geophonemap`,children:(0,c.jsx)(n.code,{children:`GeoPhoneMap`})}),`
`,(0,c.jsx)(n.p,{children:`A node within the internal prefix-tree:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: GeoPhoneValue[]`}),` — List of items under this branch.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`info: GeoPhoneValue | undefined`}),` — The matched value at this specific numeric node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`next: Record<string, GeoPhoneMap>`}),` — Pointers to the next numeric digits in the tree.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoPhone } from '@dxtmisha/functional'

// 1. Identify country by phone number
const lookup = GeoPhone.getByPhone('+79001234567')
if (lookup.item) {
    console.log('Country:', lookup.item.value) // 'RU'
    console.log('Main Mask:', lookup.item.mask[0])
}

// 2. Manual formatting
const formatted = GeoPhone.toMask('442071234567', ['+** (**) **** ****'])
console.log(formatted) // '+44 (20) 7123 4567'

// 3. Normalizing input for search
const rawInput = '0084901234567'
const normalized = GeoPhone.removeZero(rawInput.replace(/^00/, ''))
console.log(normalized) // '84901234567'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
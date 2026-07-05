import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/GeoPhone - Phone Masks`}),`
`,(0,c.jsx)(n.h1,{id:`geophone-class`,children:`GeoPhone Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A specialized class for storing and processing international phone number masks. It provides a mechanism for identifying a country by a phone number string, formatting raw numbers into localized masks, and managing a complex map of phone codes based on a prefix tree. The class is closely integrated with `,(0,c.jsx)(n.code,{children:`Geo`}),` data, allowing for automatic mask determination based on the user's current locale or provided country codes.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automatic Matching`}),` — Dynamically determines the appropriate country and mask pattern through recursive searching in a prefix tree.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Prefix Tree Optimization`}),` — Uses a specialized `,(0,c.jsx)(n.code,{children:`map`}),` structure (Trie) for high-performance searching.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Intelligent Normalization`}),` — Automatically handles regional dialing variations such as leading zeros or national prefixes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Standardized Formatting`}),` — Converts raw numeric strings into readable formats.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,c.jsx)(n.p,{children:`You can use the static methods of the class for rapid country identification by phone number or formatting.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoPhone } from '@dxtmisha/functional-basic'

// Identify country by phone number
const info = GeoPhone.getByPhone('79001234567')
console.log(info.item?.value) // 'RU'

// Formatting by mask
const formatted = GeoPhone.toMask('9001234567', ['+* (***) ***-**-**'])
console.log(formatted) // '+7 (900) 123-45-67'
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`information`,children:`Information`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): GeoPhoneValue[]`}),` — Returns a complete, sorted, flat list of all registered international phone metadata.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMap(): Record<string, GeoPhoneMap>`}),` — Returns the root node of the internal prefix tree used for searching.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`selection`,children:`Selection`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(code: string): GeoPhoneValue | undefined`}),` — Retrieves phone metadata associated with a specific country code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByPhone(phone: string): GeoPhoneMapInfo`}),` — Analyzes a phone number string to extract information and the suitable mask.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByCode(code: string): GeoPhoneMap | undefined`}),` — Returns complete mask information, including the search tree node for a given code.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`auxiliary`,children:`Auxiliary`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toMask(phone: string, masks?: string[]): string | undefined`}),` — Converts a raw numeric phone string into a formatted version.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`removeZero(phone: string): string`}),` — Standardizes the internal representation of a number by removing leading zeros or adjusting regional prefixes.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`data-types`,children:`Data Types`}),`
`,(0,c.jsx)(n.h3,{id:`geophonevalue`,children:(0,c.jsx)(n.code,{children:`GeoPhoneValue`})}),`
`,(0,c.jsx)(n.p,{children:`Basic metadata structure for each country's phone configuration:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`phone: number`}),` — Phone country code (e.g., `,(0,c.jsx)(n.code,{children:`7`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`within: number`}),` — Internal dialing rule code (used to select the special symbol in the mask).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`mask: string[]`}),` — Array of mask patterns assigned to the country.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — Country identifier (ISO 3166).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`geophonemap`,children:(0,c.jsx)(n.code,{children:`GeoPhoneMap`})}),`
`,(0,c.jsx)(n.p,{children:`A node in the internal prefix tree (Trie) used for searching:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: GeoPhoneValue[]`}),` — List of all items available in this branch of the tree.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`info: GeoPhoneValue | undefined`}),` — Phone metadata if the current node is a complete code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string | undefined`}),` — Country identifier for this node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`mask: string[]`}),` — Array of masks with substituted internal symbols (`,(0,c.jsx)(n.code,{children:`~`}),`, `,(0,c.jsx)(n.code,{children:`=`}),`, `,(0,c.jsx)(n.code,{children:`$`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`maskFull: string[]`}),` — Full masks including the international code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`next: Record<string, GeoPhoneMap>`}),` — Pointers to the next digits in the search tree.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`geophonemapinfo`,children:(0,c.jsx)(n.code,{children:`GeoPhoneMapInfo`})}),`
`,(0,c.jsxs)(n.p,{children:[`Result of the `,(0,c.jsx)(n.code,{children:`getByPhone`}),` search method:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item?: GeoPhoneMap`}),` — The found tree node with country and mask information.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`phone?: string`}),` — The remaining part of the number after separating the country code.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`internal-symbols-within-logic`,children:`Internal Symbols (Within Logic)`}),`
`,(0,c.jsx)(n.p,{children:`The class's internal logic replaces the first "asterisk" in the mask with a special symbol depending on regional rules:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`~`}),` — for Russia (internal code 8).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`=`}),` — for default/other regions (e.g., USA).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const mapInfo = GeoPhone.getByCode('RU')
console.log(mapInfo.mask[0]) // '~ (***) ***-**-**'
`})}),`
`,(0,c.jsx)(n.h3,{id:`multiple-masks`,children:`Multiple Masks`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const masks = ['+* (***) ***-**-**', '+* (***) ***-***']
console.log(GeoPhone.toMask('79991234567', masks)) // 11 digits -> '+7 (999) 123-45-67'
console.log(GeoPhone.toMask('7999123456', masks))  // 10 digits -> '+7 (999) 123-456'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
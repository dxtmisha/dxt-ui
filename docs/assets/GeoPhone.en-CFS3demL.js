import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional-basic/Classes/GeoPhone - Phone Number Masks"}),`
`,e.jsx(n.h1,{id:"geophone-class",children:"GeoPhone Class"}),`
`,e.jsx(n.p,{children:"A specialized class for storing and processing international phone number masks. It provides a robust engine for identifying geographic country information by phone number strings, formatting raw numbers into localized mask specifications, and managing a comprehensive prefix-tree based map of international phone codes."}),`
`,e.jsxs(n.p,{children:["It integrates deeply with ",e.jsx(n.code,{children:"Geo"})," geolocation data to provide automatic mask resolution based on the current user locale or explicit country codes."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic Mapping"})," — Resolves the appropriate country and mask pattern dynamically through a recursive prefix-tree lookup."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Prefix Tree Optimization"})," — Uses a specialized ",e.jsx(n.code,{children:"map"})," structure (Prefix Tree) for efficient, high-performance search across international numbering plans."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Intelligent Normalization"})," — Automatically handles regional dialing variations, such as leading trunk zeros or national prefixes (e.g., Russian '8')."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Standardized Formatting"})," — Converts raw numeric strings into human-readable phone formats matching international telephony standards."]}),`
`]}),`
`,e.jsx(n.h2,{id:"search-methods",children:"Search Methods"}),`
`,e.jsx(n.h3,{id:"getbyphone",children:e.jsx(n.code,{children:"getByPhone"})}),`
`,e.jsx(n.p,{children:"Primary identification method that analyzes a phone number string to extract geographic information and the most suitable numbering mask."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"phone: string"})," — The target phone number to analyze (accepts raw or partially formatted strings)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"GeoPhoneMapInfo"})," — A structured payload containing the matched ",e.jsx(n.code,{children:"GeoPhoneMap"})," item and the normalized numeric portion of the phone."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { GeoPhone } from '@dxtmisha/functional-basic'

const info = GeoPhone.getByPhone('12025550123')
// returns:
// { 
//   item: { info: { phone: 1, ... }, mask: ['1 (***) ***-****'], ... },
//   phone: '2025550123' 
// }
`})}),`
`,e.jsx(n.h3,{id:"get",children:e.jsx(n.code,{children:"get"})}),`
`,e.jsx(n.p,{children:"Retrieves localized phone metadata associated with a specific country code."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"code: string"})," — Standard ISO 3166 country code (e.g., ",e.jsx(n.code,{children:"'US'"}),", ",e.jsx(n.code,{children:"'RU'"}),", ",e.jsx(n.code,{children:"'VN'"}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"GeoPhoneValue | undefined"})," — The raw metadata for the country, or ",e.jsx(n.code,{children:"undefined"})," if not found in the dataset."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`GeoPhone.get('US') 
// { phone: 1, within: 1, mask: ['* (***) ***-****'], value: 'US' }
`})}),`
`,e.jsx(n.h3,{id:"getbycode",children:e.jsx(n.code,{children:"getByCode"})}),`
`,e.jsx(n.p,{children:"Extended retrieval method that returns complete mask data including the search tree node for a given country code."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"code: string"})," — Target country code string."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"GeoPhoneMap | undefined"})," — The full map node object for the requested code."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`GeoPhone.getByCode('RU')
// { info: { phone: 7, ... }, mask: ['7 (***) ***-**-**'], ... }
`})}),`
`,e.jsx(n.h2,{id:"data-access-methods",children:"Data Access Methods"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getList(): GeoPhoneValue[]"})," — Returns the complete, sorted flat list of all registered international phone metadata."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getMap(): Record<string, GeoPhoneMap>"})," — Returns the root node of the internal prefix-tree used for high-speed number identification."]}),`
`]}),`
`,e.jsx(n.h2,{id:"formatting--utility-methods",children:"Formatting & Utility Methods"}),`
`,e.jsx(n.h3,{id:"tomask",children:e.jsx(n.code,{children:"toMask"})}),`
`,e.jsx(n.p,{children:"Transforms a raw numeric phone string into a formatted version based on a specified set of masks."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"phone: string"})," — The raw numeric input."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"masks?: string[]"})," — An array of valid mask strings to iterate through for property matching."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string | undefined"})," — The human-formatted string, or ",e.jsx(n.code,{children:"undefined"})," if no mask length matches the input."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`GeoPhone.toMask('2025550123', ['* (***) ***-****']) 
// '1 (202) 555-0123'
`})}),`
`,e.jsx(n.h3,{id:"removezero",children:e.jsx(n.code,{children:"removeZero"})}),`
`,e.jsx(n.p,{children:"Standardizes internal number representation by stripping leading trunk zeros or correcting regional dialing prefixes to ensure consistent search logic."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"phone: string"})," — The input phone number string."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — The normalized numeric string."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`GeoPhone.removeZero('0671234567')  // '671234567'
GeoPhone.removeZero('89001234567') // '9001234567'
`})}),`
`,e.jsx(n.h2,{id:"geophone-objects",children:"GeoPhone Objects"}),`
`,e.jsx(n.h3,{id:"geophonevalue",children:e.jsx(n.code,{children:"GeoPhoneValue"})}),`
`,e.jsx(n.p,{children:"The basic metadata structure for each country's phone configuration:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"phone: number"})," — Dialing code (e.g., ",e.jsx(n.code,{children:"7"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"within: number"})," — Internal dialing rule code."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mask: string[]"})," — Array of mask patterns."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string"})," — Country identifier."]}),`
`]}),`
`,e.jsx(n.h3,{id:"geophonemap",children:e.jsx(n.code,{children:"GeoPhoneMap"})}),`
`,e.jsx(n.p,{children:"A node within the internal prefix-tree:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"items: GeoPhoneValue[]"})," — List of items under this branch."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"info: GeoPhoneValue | undefined"})," — The matched value at this specific numeric node."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"next: Record<string, GeoPhoneMap>"})," — Pointers to the next numeric digits in the tree."]}),`
`]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { GeoPhone } from '@dxtmisha/functional'

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
`})})]})}function x(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{x as default};

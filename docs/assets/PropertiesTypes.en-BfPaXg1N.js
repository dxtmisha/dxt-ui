import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/en/scripts/Classes/PropertiesTypes - Property Types"}),`
`,e.jsx(s.h1,{id:"propertiestypes-class",children:"PropertiesTypes Class"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"PropertiesTypes"})," class serves as a system directory and analyzer for property types within the design system. Its primary role is to determine the property category (variable, selector, state, media query, etc.) based on special prefix symbols or key naming conventions."]}),`
`,e.jsx(s.h2,{id:"symbols-and-types-mapping",children:"Symbols and Types Mapping"}),`
`,e.jsx(s.p,{children:"The system utilizes the following mapping of symbols to types:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"$"})," — ",e.jsx(s.strong,{children:"var"})," (CSS variable)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"::"})," — ",e.jsx(s.strong,{children:"virtual"})," (virtual element)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:":"})," — ",e.jsx(s.strong,{children:"selector"})," (SCSS selector)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"~"})," — ",e.jsx(s.strong,{children:"state"})," (state, e.g., :hover)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"#"})," — ",e.jsx(s.strong,{children:"subclass"})," (subclass)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"@@"})," — ",e.jsx(s.strong,{children:"linkClass"})," (link to a class)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"@"})," — ",e.jsx(s.strong,{children:"link"})," (link to a token)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"&&"})," — ",e.jsx(s.strong,{children:"root"})," (SCSS @at-root)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"&"})," — ",e.jsx(s.strong,{children:"scss"})," (SCSS selector)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--"})," — ",e.jsx(s.strong,{children:"none"})," (ignored property)"]}),`
`]}),`
`,e.jsx(s.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(s.p,{children:["The class contains only static methods and does not require instantiation via ",e.jsx(s.code,{children:"new"}),"."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { PropertiesTypes } from '@dxtmisha/scripts'

// Using static methods
const type = PropertiesTypes.getTypeInName('$primary-color')
`})}),`
`,e.jsx(s.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(s.h3,{id:"isintype",children:e.jsx(s.code,{children:"isInType"})}),`
`,e.jsx(s.p,{children:"Checks if the current property type is included in the specified list of allowed types. Used for filtering properties during the generation of specific blocks (e.g., media queries only)."}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"type: PropertyItem['_type']"})," — the property type to verify."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"name: PropertyType[]"})," — an array of allowed types."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Returns:"})," ",e.jsx(s.code,{children:"boolean"})," — ",e.jsx(s.code,{children:"true"})," if the type matches one in the list."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const isMedia = PropertiesTypes.isInType(type, ['media', 'media-max']);
`})}),`
`,e.jsx(s.h3,{id:"istypeinname",children:e.jsx(s.code,{children:"isTypeInName"})}),`
`,e.jsx(s.p,{children:"Determines if the provided name string (key) contains any of the reserved type symbols at the beginning."}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"name: string"})," — the property key name."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Returns:"})," ",e.jsx(s.code,{children:"boolean"})," — ",e.jsx(s.code,{children:"true"})," if a type symbol is identified."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const hasSymbol = PropertiesTypes.isTypeInName('$myVar');
// Result: true
`})}),`
`,e.jsx(s.h3,{id:"ismedia",children:e.jsx(s.code,{children:"isMedia"})}),`
`,e.jsxs(s.p,{children:["A specialized check to determine if the property type refers to media queries (",e.jsx(s.code,{children:"media"})," or ",e.jsx(s.code,{children:"media-max"}),")."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"type: PropertyItem['_type']"})," — the property type."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Returns:"})," ",e.jsx(s.code,{children:"boolean"})," — ",e.jsx(s.code,{children:"true"})," if it is a media type."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`if (PropertiesTypes.isMedia(item.type)) { /* ... */ }
`})}),`
`,e.jsx(s.h3,{id:"gettypeinname",children:e.jsx(s.code,{children:"getTypeInName"})}),`
`,e.jsxs(s.p,{children:["The primary method for extracting the type from a key name. If a special symbol is found at the beginning of the key, the method returns its corresponding type. If no symbol is found but the key contains a ",e.jsx(s.code,{children:"|"})," separator, the portion before the separator is converted to kebab-case and returned as the type."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"name: string"})," — the property key name."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Returns:"})," ",e.jsx(s.code,{children:"PropertyItem['_type']"})," — the identified type ID or ",e.jsx(s.code,{children:"null"}),"."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const type1 = PropertiesTypes.getTypeInName('$color'); // 'var'
const type2 = PropertiesTypes.getTypeInName('custom|value'); // 'custom'
`})}),`
`,e.jsx(s.h3,{id:"getbysymbol",children:e.jsx(s.code,{children:"getBySymbol"})}),`
`,e.jsx(s.p,{children:"Returns the type name assigned to a specific symbol or string."}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"name: string"})," — the symbol (e.g., ",e.jsx(s.code,{children:"$"}),")."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Returns:"})," ",e.jsx(s.code,{children:"string | undefined"})," — the type name (e.g., ",e.jsx(s.code,{children:"var"}),")."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const typeName = PropertiesTypes.getBySymbol('$'); // 'var'
`})}),`
`,e.jsx(s.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(s.h3,{id:"the-recognition-mechanism-via-regexp",children:"The Recognition Mechanism via RegExp"}),`
`,e.jsxs(s.p,{children:["The symbol search in ",e.jsx(s.code,{children:"PropertiesTypes"})," is implemented through a dynamic regular expression formed from the ",e.jsx(s.code,{children:"SYMBOLS"})," dictionary keys. The ",e.jsx(s.code,{children:"getExpSymbols"})," method creates an expression that:"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Searches for reserved symbols at the start of the string (e.g., ",e.jsx(s.code,{children:"@"}),", ",e.jsx(s.code,{children:"&&"}),", ",e.jsx(s.code,{children:"~"}),")."]}),`
`,e.jsxs(s.li,{children:["Searches for custom named types before a vertical bar (e.g., ",e.jsx(s.code,{children:"media|..."}),")."]}),`
`,e.jsxs(s.li,{children:["Groups the results for efficient type extraction by the ",e.jsx(s.code,{children:"getTypeInName"})," method."]}),`
`]}),`
`,e.jsx(s.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s.h3,{id:"identifying-types-during-token-parsing",children:"Identifying Types During Token Parsing"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { PropertiesTypes } from '@dxtmisha/scripts'

const keys = ['$primary', ':hover', '@link'];

keys.forEach(key => {
  console.log(\`\${key} is type: \${PropertiesTypes.getTypeInName(key)}\`);
});
`})})]})}function p(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{p as default};

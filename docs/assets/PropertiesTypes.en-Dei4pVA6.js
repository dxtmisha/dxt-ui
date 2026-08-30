import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/PropertiesTypes - Property Types`}),`
`,(0,c.jsx)(t.h1,{id:`propertiestypes-class`,children:`PropertiesTypes Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`PropertiesTypes`}),` class serves as a system directory and analyzer for property types within the design system. Its primary role is to determine the property category (variable, selector, state, media query, etc.) based on special prefix symbols or key naming conventions.`]}),`
`,(0,c.jsx)(t.h2,{id:`symbols-and-types-mapping`,children:`Symbols and Types Mapping`}),`
`,(0,c.jsx)(t.p,{children:`The system utilizes the following mapping of symbols to types:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$`}),` — `,(0,c.jsx)(t.strong,{children:`var`}),` (CSS variable)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`::`}),` — `,(0,c.jsx)(t.strong,{children:`virtual`}),` (virtual element)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`:`}),` — `,(0,c.jsx)(t.strong,{children:`selector`}),` (SCSS selector)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`~`}),` — `,(0,c.jsx)(t.strong,{children:`state`}),` (state, e.g., :hover)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`#`}),` — `,(0,c.jsx)(t.strong,{children:`subclass`}),` (subclass)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`@@`}),` — `,(0,c.jsx)(t.strong,{children:`linkClass`}),` (link to a class)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`@`}),` — `,(0,c.jsx)(t.strong,{children:`link`}),` (link to a token)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`&&`}),` — `,(0,c.jsx)(t.strong,{children:`root`}),` (SCSS @at-root)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`&`}),` — `,(0,c.jsx)(t.strong,{children:`scss`}),` (SCSS selector)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--`}),` — `,(0,c.jsx)(t.strong,{children:`none`}),` (ignored property)`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`The class contains only static methods and does not require instantiation via `,(0,c.jsx)(t.code,{children:`new`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesTypes } from '@dxtmisha/scripts'

// Using static methods
const type = PropertiesTypes.getTypeInName('$primary-color')
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`isintype`,children:(0,c.jsx)(t.code,{children:`isInType`})}),`
`,(0,c.jsx)(t.p,{children:`Checks if the current property type is included in the specified list of allowed types. Used for filtering properties during the generation of specific blocks (e.g., media queries only).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: PropertyItem['_type']`}),` — the property type to verify.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: PropertyType[]`}),` — an array of allowed types.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if the type matches one in the list.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const isMedia = PropertiesTypes.isInType(type, ['media', 'media-max']);
`})}),`
`,(0,c.jsx)(t.h3,{id:`istypeinname`,children:(0,c.jsx)(t.code,{children:`isTypeInName`})}),`
`,(0,c.jsx)(t.p,{children:`Determines if the provided name string (key) contains any of the reserved type symbols at the beginning.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — the property key name.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if a type symbol is identified.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const hasSymbol = PropertiesTypes.isTypeInName('$myVar');
// Result: true
`})}),`
`,(0,c.jsx)(t.h3,{id:`iscontainertype-propertyitem_type-boolean`,children:(0,c.jsx)(t.code,{children:`isContainer(type: PropertyItem['_type']): boolean`})}),`
`,(0,c.jsx)(t.p,{children:`Checks if the property type is a container query type.`}),`
`,(0,c.jsx)(t.h3,{id:`isscssname-string-boolean`,children:(0,c.jsx)(t.code,{children:`isScss(name: string): boolean`})}),`
`,(0,c.jsx)(t.p,{children:`Checks if the property name is a special SCSS variable.`}),`
`,(0,c.jsx)(t.h3,{id:`isrootname-string-boolean`,children:(0,c.jsx)(t.code,{children:`isRoot(name: string): boolean`})}),`
`,(0,c.jsx)(t.p,{children:`Checks if the property targets the root level (:root).`}),`
`,(0,c.jsx)(t.h3,{id:`ismedia`,children:(0,c.jsx)(t.code,{children:`isMedia`})}),`
`,(0,c.jsxs)(t.p,{children:[`A specialized check to determine if the property type refers to media queries (`,(0,c.jsx)(t.code,{children:`media`}),` or `,(0,c.jsx)(t.code,{children:`media-max`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: PropertyItem['_type']`}),` — the property type.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if it is a media type.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`if (PropertiesTypes.isMedia(item.type)) { /* ... */ }
`})}),`
`,(0,c.jsx)(t.h3,{id:`gettypeinname`,children:(0,c.jsx)(t.code,{children:`getTypeInName`})}),`
`,(0,c.jsxs)(t.p,{children:[`The primary method for extracting the type from a key name. If a special symbol is found at the beginning of the key, the method returns its corresponding type. If no symbol is found but the key contains a `,(0,c.jsx)(t.code,{children:`|`}),` separator, the portion before the separator is converted to kebab-case and returned as the type.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — the property key name.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`PropertyItem['_type']`}),` — the identified type ID or `,(0,c.jsx)(t.code,{children:`null`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const type1 = PropertiesTypes.getTypeInName('$color'); // 'var'
const type2 = PropertiesTypes.getTypeInName('custom|value'); // 'custom'
`})}),`
`,(0,c.jsx)(t.h3,{id:`getbysymbol`,children:(0,c.jsx)(t.code,{children:`getBySymbol`})}),`
`,(0,c.jsx)(t.p,{children:`Returns the type name assigned to a specific symbol or string.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — the symbol (e.g., `,(0,c.jsx)(t.code,{children:`$`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`string | undefined`}),` — the type name (e.g., `,(0,c.jsx)(t.code,{children:`var`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const typeName = PropertiesTypes.getBySymbol('$'); // 'var'
`})}),`
`,(0,c.jsx)(t.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(t.h3,{id:`the-recognition-mechanism-via-regexp`,children:`The Recognition Mechanism via RegExp`}),`
`,(0,c.jsxs)(t.p,{children:[`The symbol search in `,(0,c.jsx)(t.code,{children:`PropertiesTypes`}),` is implemented through a dynamic regular expression formed from the `,(0,c.jsx)(t.code,{children:`SYMBOLS`}),` dictionary keys. The `,(0,c.jsx)(t.code,{children:`getExpSymbols`}),` method creates an expression that:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Searches for reserved symbols at the start of the string (e.g., `,(0,c.jsx)(t.code,{children:`@`}),`, `,(0,c.jsx)(t.code,{children:`&&`}),`, `,(0,c.jsx)(t.code,{children:`~`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Searches for custom named types before a vertical bar (e.g., `,(0,c.jsx)(t.code,{children:`media|...`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Groups the results for efficient type extraction by the `,(0,c.jsx)(t.code,{children:`getTypeInName`}),` method.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.h3,{id:`identifying-types-during-token-parsing`,children:`Identifying Types During Token Parsing`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesTypes } from '@dxtmisha/scripts'

const keys = ['$primary', ':hover', '@link'];

keys.forEach(key => {
  console.log(\`\${key} is type: \${PropertiesTypes.getTypeInName(key)}\`);
});
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function n(s){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/scripts/Classes/PropertiesPalette - Palette & Shade Manager"}),`
`,e.jsx(t.h1,{id:"propertiespalette-class",children:"PropertiesPalette Class"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"PropertiesPalette"})," class is a specialized manager for handling color-related design tokens. It focuses on two primary areas: managing color saturation steps (shades) and tracking the actual usage of palette colors within functional variables. By analyzing how colors are referenced throughout the design system, it helps ensure that theme definitions remain consistent and that generated CSS variables correctly point to their corresponding palette entries."]}),`
`,e.jsx(t.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Saturation Discovery"})," — Automatically extracts available shade levels (e.g., 50, 100, 200) from the property tree."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Usage Tracking"})," — Identifies which palette colors are actually mapped to component variables, facilitating dead-code elimination or audit reports."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Theme-Aware Mapping"})," — Resolves complex color links, accounting for theme-specific overrides (like ",e.jsx(t.code,{children:"basic"})," or ",e.jsx(t.code,{children:"dark"}),")."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"CSS Variable Synthesis"})," — Transparently converts internal color references into standardized CSS variable names (e.g., ",e.jsx(t.code,{children:"--design-palette-theme-color"}),")."]}),`
`]}),`
`,e.jsx(t.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(t.p,{children:["To initialize the object, call the ",e.jsx(t.code,{children:"PropertiesPalette(items)"})," constructor."]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"items: PropertiesItems"})," — an instance of the coordinator class responsible for property tree traversal and searching."]}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { PropertiesPalette, PropertiesItems } from '@dxtmisha/scripts'

// 1. Prepare the dependency coordinator
const manager = new PropertiesItems(allTokenData)

// 2. Create the palette manager
const palette = new PropertiesPalette(manager)

// 3. Extract active shades or used colors
const shades = palette.getShade()
const usedColors = palette.getUsed()
`})}),`
`,e.jsx(t.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(t.h3,{id:"getshade",children:e.jsx(t.code,{children:"getShade"})}),`
`,e.jsx(t.p,{children:"Retrieves a list of available saturation levels (shades) grouped by design. This method scans the entire property tree for items categorized specifically as 'shade' and returns their resolved structures. These shades typically represent the numerical scale of color saturation (e.g., 50, 100, 200) used in the design system."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"})," ",e.jsx(t.code,{children:"PropertyPaletteList"})," — a specialized object where keys are design names and values are arrays of color shade tokens."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`const shades = palette.getShade();
// Result: { "basic": ["50", "100", ...], "premium": ["50", ...] }
`})}),`
`,e.jsx(t.h3,{id:"getused",children:e.jsx(t.code,{children:"getUsed"})}),`
`,e.jsx(t.p,{children:"Generates a comprehensive report of all palette colors currently utilized in functional variables across the entire design system. It iterates through all tokens, identifying CSS variable references that point to palette entries, and maps them to their generated CSS variable names. This is essential for auditing color usage and identifying orphaned palette entries."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"})," ",e.jsx(t.code,{children:"PropertyPaletteUsed[]"})," — an array of objects, each containing a functional variable name and its corresponding palette-derived CSS variable name."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`const report = palette.getUsed();
/* Result: 
[
  { "name": "primaryBackground", "value": ["--basic-palette-basic-blue-50"] }
] 
*/
`})}),`
`,e.jsx(t.h3,{id:"getfocusused",children:e.jsx(t.code,{children:"getFocusUsed"})}),`
`,e.jsx(t.p,{children:"Recursively resolves a specific property value to determine its ultimate palette source. This utility method is used to trace links through multiple layers of abstraction (such as component variables pointing to theme colors, which in turn point to palette shades)."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"list: PropertyItem['value'][]"})," — a list of known palette values to check against during resolution."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"design: string"})," — the name of the current design theme."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"component: string"})," — the name of the component context being resolved."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"value: string"})," — the raw value or link (e.g., ",e.jsx(t.code,{children:"{color.primary}"}),") to trace back to the palette."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"})," ",e.jsx(t.code,{children:"string | undefined"})," — the ultimate resolved value string if it leads to a palette entry; otherwise, ",e.jsx(t.code,{children:"undefined"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`const source = palette.getFocusUsed(
  paletteList, 
  'basic', 
  'button', 
  '{color.primary}'
);
`})}),`
`,e.jsx(t.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(t.h3,{id:"the-color-usage-resolution-flow",children:"The Color Usage Resolution Flow"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"PropertiesPalette"})," performs a deep analysis of how colors flow from the palette to components:"]}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Tree Traversal"}),": Using ",e.jsx(t.code,{children:"PropertiesItems.each()"}),", the class visits every node in the design system."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Variable Filtering"}),": It specifically targets items of type ",e.jsx(t.code,{children:"var"})," that are NOT themselves categorized as ",e.jsx(t.code,{children:"color"}),", yet hold string values that look like color links."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Recursive Link Resolution"}),": When a candidate is found, ",e.jsx(t.code,{children:"getFocusUsed()"})," resolves any intermediate links (e.g., ",e.jsx(t.code,{children:"primary"})," -> ",e.jsx(t.code,{children:"theme.brand.main"})," -> ",e.jsx(t.code,{children:"palette.blue.50"}),") until it reaches the raw palette definition or confirms the link is non-palette."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Theme Detection"}),": It examines the hierarchy (",e.jsx(t.code,{children:"parents"}),") to identify if the color belongs to a specific theme block, allowing it to correctly name the resulting CSS variable (e.g., prepending the theme name)."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Data Aggregation"}),": Results are grouped by variable name, providing a clear map of which functional tokens consume which palette colors."]}),`
`]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"extracting-shades-and-usage",children:"Extracting Shades and Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { PropertiesPalette, PropertiesItems } from '@dxtmisha/scripts'

const manager = new PropertiesItems(allTokenData)
const palette = new PropertiesPalette(manager)

// 1. Get available shades
const shades = palette.getShade()

// 2. Scan for used colors in components
const report = palette.getUsed()
`})}),`
`,e.jsx(t.h3,{id:"manual-link-resolution",children:"Manual Link Resolution"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`const isPaletteValue = palette.getFocusUsed(
  paletteValueList, 
  'basic', 
  'button', 
  '{color.primary}'
)
`})})]})}function p(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}export{p as default};

import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/PropertiesPalette - Palette & Shade Manager`}),`
`,(0,c.jsx)(n.h1,{id:`propertiespalette-class`,children:`PropertiesPalette Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesPalette`}),` class is a specialized manager for handling color-related design tokens. It focuses on two primary areas: managing color saturation steps (shades) and tracking the actual usage of palette colors within functional variables. By analyzing how colors are referenced throughout the design system, it helps ensure that theme definitions remain consistent and that generated CSS variables correctly point to their corresponding palette entries.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Saturation Discovery`}),` — Automatically extracts available shade levels (e.g., 50, 100, 200) from the property tree.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Usage Tracking`}),` — Identifies which palette colors are actually mapped to component variables, facilitating dead-code elimination or audit reports.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Theme-Aware Mapping`}),` — Resolves complex color links, accounting for theme-specific overrides (like `,(0,c.jsx)(n.code,{children:`basic`}),` or `,(0,c.jsx)(n.code,{children:`dark`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`CSS Variable Synthesis`}),` — Transparently converts internal color references into standardized CSS variable names (e.g., `,(0,c.jsx)(n.code,{children:`--design-palette-theme-color`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`PropertiesPalette(items)`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: PropertiesItems`}),` — an instance of the coordinator class responsible for property tree traversal and searching.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesPalette, PropertiesItems } from '@dxtmisha/scripts'

// 1. Prepare the dependency coordinator
const manager = new PropertiesItems(allTokenData)

// 2. Create the palette manager
const palette = new PropertiesPalette(manager)

// 3. Extract active shades or used colors
const shades = palette.getShade()
const usedColors = palette.getUsed()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`getshade`,children:(0,c.jsx)(n.code,{children:`getShade`})}),`
`,(0,c.jsx)(n.p,{children:`Retrieves a list of available saturation levels (shades) grouped by design. This method scans the entire property tree for items categorized specifically as 'shade' and returns their resolved structures. These shades typically represent the numerical scale of color saturation (e.g., 50, 100, 200) used in the design system.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`PropertyPaletteList`}),` — a specialized object where keys are design names and values are arrays of color shade tokens.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const shades = palette.getShade();
// Result: { "basic": ["50", "100", ...], "premium": ["50", ...] }
`})}),`
`,(0,c.jsx)(n.h3,{id:`getused`,children:(0,c.jsx)(n.code,{children:`getUsed`})}),`
`,(0,c.jsx)(n.p,{children:`Generates a comprehensive report of all palette colors currently utilized in functional variables across the entire design system. It iterates through all tokens, identifying CSS variable references that point to palette entries, and maps them to their generated CSS variable names. This is essential for auditing color usage and identifying orphaned palette entries.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`PropertyPaletteUsed[]`}),` — an array of objects, each containing a functional variable name and its corresponding palette-derived CSS variable name.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const report = palette.getUsed();
/* Result: 
[
  { "name": "primaryBackground", "value": ["--basic-palette-basic-blue-50"] }
] 
*/
`})}),`
`,(0,c.jsx)(n.h3,{id:`getfocusused`,children:(0,c.jsx)(n.code,{children:`getFocusUsed`})}),`
`,(0,c.jsx)(n.p,{children:`Recursively resolves a specific property value to determine its ultimate palette source. This utility method is used to trace links through multiple layers of abstraction (such as component variables pointing to theme colors, which in turn point to palette shades).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: PropertyItem['value'][]`}),` — a list of known palette values to check against during resolution.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`design: string`}),` — the name of the current design theme.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`component: string`}),` — the name of the component context being resolved.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — the raw value or link (e.g., `,(0,c.jsx)(n.code,{children:`{color.primary}`}),`) to trace back to the palette.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string | undefined`}),` — the ultimate resolved value string if it leads to a palette entry; otherwise, `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const source = palette.getFocusUsed(
  paletteList, 
  'basic', 
  'button', 
  '{color.primary}'
);
`})}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-color-usage-resolution-flow`,children:`The Color Usage Resolution Flow`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesPalette`}),` performs a deep analysis of how colors flow from the palette to components:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tree Traversal`}),`: Using `,(0,c.jsx)(n.code,{children:`PropertiesItems.each()`}),`, the class visits every node in the design system.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Variable Filtering`}),`: It specifically targets items of type `,(0,c.jsx)(n.code,{children:`var`}),` that are NOT themselves categorized as `,(0,c.jsx)(n.code,{children:`color`}),`, yet hold string values that look like color links.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Recursive Link Resolution`}),`: When a candidate is found, `,(0,c.jsx)(n.code,{children:`getFocusUsed()`}),` resolves any intermediate links (e.g., `,(0,c.jsx)(n.code,{children:`primary`}),` -> `,(0,c.jsx)(n.code,{children:`theme.brand.main`}),` -> `,(0,c.jsx)(n.code,{children:`palette.blue.50`}),`) until it reaches the raw palette definition or confirms the link is non-palette.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Theme Detection`}),`: It examines the hierarchy (`,(0,c.jsx)(n.code,{children:`parents`}),`) to identify if the color belongs to a specific theme block, allowing it to correctly name the resulting CSS variable (e.g., prepending the theme name).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Data Aggregation`}),`: Results are grouped by variable name, providing a clear map of which functional tokens consume which palette colors.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`extracting-shades-and-usage`,children:`Extracting Shades and Usage`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesPalette, PropertiesItems } from '@dxtmisha/scripts'

const manager = new PropertiesItems(allTokenData)
const palette = new PropertiesPalette(manager)

// 1. Get available shades
const shades = palette.getShade()

// 2. Scan for used colors in components
const report = palette.getUsed()
`})}),`
`,(0,c.jsx)(n.h3,{id:`manual-link-resolution`,children:`Manual Link Resolution`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const isPaletteValue = palette.getFocusUsed(
  paletteValueList, 
  'basic', 
  'button', 
  '{color.primary}'
)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
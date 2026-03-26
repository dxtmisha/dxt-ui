import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/PropertiesScss - SCSS Generation`}),`
`,(0,c.jsx)(n.h1,{id:`propertiesscss-class`,children:`PropertiesScss Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesScss`}),` class is responsible for transforming design system tokens and properties into a structured SCSS format. The resulting code is used to integrate design variables into the library's stylesheets, ensuring synchronization between JSON definitions and Sass variables.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Code Generation`}),` — creates a complete SCSS structure for integration into stylesheets.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Mixin Integration`}),` — generates calls to special mixins (`,(0,c.jsx)(n.code,{children:`setDesignsDesigns`}),`, `,(0,c.jsx)(n.code,{children:`setDesignsRoot`}),`, etc.) for automatic configuration.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Media Query Support`}),` — transforms device sizes into an SCSS map.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Palette Processing`}),` — generates lists of utilized colors and saturation levels.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Smart Formatting`}),` — correctly handles value types (colors, dimensions, links) to match SCSS syntax.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the SCSS generator, pass a `,(0,c.jsx)(n.code,{children:`PropertiesItems`}),` instance to the constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: PropertiesItems`}),` — the manager object for all property elements.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesItems, PropertiesScss } from '@dxtmisha/scripts'

const manager = new PropertiesItems(tokenData)
const generator = new PropertiesScss(manager)
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Returns a complete, formatted SCSS string ready to be written to a file. This string includes imports of core style variables and sequential mixin calls to register designs, root properties, media queries, classes, and the palette.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — the full text of the SCSS file.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const scssContent = generator.get();
// Result: "@use \\"@dxtmisha/styles\\" as variables; \\n @include variables.setDesignsDesigns(...)"
`})}),`
`,(0,c.jsx)(n.h3,{id:`getproperties`,children:(0,c.jsx)(n.code,{children:`getProperties`})}),`
`,(0,c.jsx)(n.p,{children:`Generates a specialized SCSS map structure for all properties defined in the system. This method focuses on common tokens (variables) that should be available in the global CSS/SCSS scope.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — an SCSS snippet with a call to the `,(0,c.jsx)(n.code,{children:`setDesignsProperties`}),` mixin.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const propertyMap = generator.getProperties();
`})}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-scss-generation-process`,children:`The SCSS Generation Process`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesScss`}),` performs a multi-stage data transformation:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Design Collection`}),`: Identifies all active designs and forms a list for the `,(0,c.jsx)(n.code,{children:`setDesignsDesigns`}),` mixin.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Category Analysis`}),`: Distributes properties by category (root, class, theme) to generate the corresponding blocks.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Palette Resolution`}),`: Uses `,(0,c.jsx)(n.code,{children:`PropertiesPalette`}),` to obtain a list of actually used colors and saturation steps.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Value Parsing`}),`: The `,(0,c.jsx)(n.code,{children:`getValueItem`}),` method checks each value against SCSS types (strings are quoted, HEX codes and dimensions with units remain unquoted).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Structure Assembly`}),`: Forms nested SCSS maps, observing correct indentation and delimiters to ensure valid Sass code.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`full-generation-cycle`,children:`Full Generation Cycle`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesItems, PropertiesScss } from '@dxtmisha/scripts'

const items = new PropertiesItems(data)
const scss = new PropertiesScss(items)

// Get the ready code for writing to variables.scss
const fileData = scss.get()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
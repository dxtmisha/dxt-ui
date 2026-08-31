import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/PropertiesToPalette - Color Palette and Theme Compiler`}),`
`,(0,c.jsx)(t.h1,{id:`propertiestopalette-class`,children:`PropertiesToPalette Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`PropertiesToPalette`}),` class processes design tokens assigned to the `,(0,c.jsx)(t.code,{children:`palette`}),` category and compiles them into concrete color variables and classes mapped by theme. It extends `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Theme Compilation`}),` — Maps palette colors to theme variations (such as the default `,(0,c.jsx)(t.code,{children:`basic`}),` theme) and custom design layouts.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dynamic CSS Properties`}),` — Converts raw shades into CSS variables (of type `,(0,c.jsx)(t.code,{children:`PropertyType.var`}),` and category `,(0,c.jsx)(t.code,{children:`PropertyCategory.color`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Default Theme Synthesis`}),` — Generates default theme variable mapping values (`,(0,c.jsx)(t.code,{children:`sys-palette`}),`) using fallback configurations.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cache Persistence`}),` — Saves compilation reports to the `,(0,c.jsx)(t.code,{children:`002-palette`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToPalette, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToPalette(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`lifecycle--compiling-operations`,children:`Lifecycle & Compiling Operations`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to run compilation rules for standard colors and custom themes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getParent(category: PropertyCategory.colors | PropertyCategory.class, parent: PropertyList): PropertyList`}),` — Safely gets or constructs a new container under the `,(0,c.jsx)(t.code,{children:`palette`}),` key.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getClass(items: PropertyList, name: string): PropertyList`}),` — Retrieves or initializes a class object within the property list for a given color.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(theme: string, name: string): string`}),` — Combines theme name and shade color name (e.g. `,(0,c.jsx)(t.code,{children:`basic-primary`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getValue(link: string, name: string): string`}),` — Constructs the brace variable representation string.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getValueDefault(item: PropertyItem, theme: string): string`}),` — Resolves the default color shade name configured for the palette.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`read(root?: PropertyList, theme?: string, designParent?: string): void`}),` — Iterates through palette properties, adding theme shades and default indicators to classes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addItem(parent: PropertyList, link: string, theme: string, palette: PropertyList): void`}),` — Populates the property list with color tokens and links.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addDefault(parent: PropertyList, theme: string, palette: PropertyItem): void`}),` — Configures the main `,(0,c.jsx)(t.code,{children:`sys-palette`}),` fallback indicator.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
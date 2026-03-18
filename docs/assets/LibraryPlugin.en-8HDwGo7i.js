import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/en/scripts/Classes/LibraryPlugin - Vite Plugin Generator"}),`
`,n.jsx(e.h1,{id:"libraryplugin-class",children:"LibraryPlugin Class"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"LibraryPlugin"})," class is responsible for generating the Vite plugin entry point for the design system library. This plugin facilitates the automatic integration of components, style variables, and design configurations into the Vite build process."]}),`
`,n.jsx(e.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Plugin Entry Generation"})," — Creates a standard Vite plugin initialization file."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Design System Integration"})," — Connects the components and variables defined in the design configuration to the build tool."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Automated Naming"})," — Automatically generates the plugin name and identifiers based on the design system identifier."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Chaining and Flexibility"})," — Supports method chaining for streamlined library configuration."]}),`
`]}),`
`,n.jsx(e.h2,{id:"initialization",children:"Initialization"}),`
`,n.jsxs(e.p,{children:["To initialize the object, call the ",n.jsx(e.code,{children:"LibraryPlugin(items)"})," constructor."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"items: LibraryItems"})," — an object for working with the list of components and managing file writes."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { LibraryPlugin, LibraryItems } from '@dxtmisha/scripts'

// 1. Initialize LibraryItems
const items = new LibraryItems()

// 2. Initialize LibraryPlugin
const pluginGenerator = new LibraryPlugin(items)
`})}),`
`,n.jsx(e.h2,{id:"methods",children:"Methods"}),`
`,n.jsx(e.h3,{id:"control",children:"Control"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"make(): this"})," — Triggers the generation of the plugin file (",n.jsx(e.code,{children:"plugin.ts"}),")."]}),`
`]}),`
`,n.jsx(e.h2,{id:"generated-file-structure",children:"Generated File Structure"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"make"})," method generates a ",n.jsx(e.code,{children:"plugin.ts"})," file that exports a dedicated Vite plugin function. This function facilitates the connection between the compiled library and the build tool."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Generated Function Profile:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Name:"})," ",n.jsx(e.code,{children:"ui[Design]VitePlugin"})," (e.g., ",n.jsx(e.code,{children:"uiDxtVitePlugin"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Parameters:"})," ",n.jsx(e.code,{children:"options: PluginOptions"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Output:"})," Returns a ",n.jsx(e.code,{children:"VitePlugin"})," instance."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Example Structure:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`/**
 * Initializes the Vite plugin for the design system.
 * @param options plugin options
 */
export function uiDxtVitePlugin(
  options: PluginOptions = {}
): VitePlugin {
  return new Plugin(
    designName,
    packageName,
    componentsReg,
    styleVarsReg,
    componentsList,
    'vite-plugin-dxt-ui',
    options
  ).init()
}
`})})]})}function g(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{g as default};

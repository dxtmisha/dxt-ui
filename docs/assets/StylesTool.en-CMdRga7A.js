import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/StylesTool - Style Processing Utilities"}),`
`,e.jsx(n.h1,{id:"stylestool-class",children:"StylesTool Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"StylesTool"})," class is a high-level static utility container providing essential functions for the design system's style generation pipeline. It encapsulates logic for directory management, indentation control, SCSS directive construction, and Sass-compatibility transformations."]}),`
`,e.jsxs(n.p,{children:["By centralizing these low-level string manipulations and path lookups, it ensures consistency across all ",e.jsx(n.code,{children:"StylesTo*"})," converters and generator classes."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Indentation Control"})," — provides a standard 2-space indentation unit and methods to scale it based on nesting levels."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Directive Builders"})," — standardizes the syntax for SCSS ",e.jsx(n.code,{children:"@use"}),", ",e.jsx(n.code,{children:"@import"}),", and ",e.jsx(n.code,{children:"@forward"})," statements."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Path Resolution"})," — integrates with global configuration to determine the output destination for generated files."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sass Compatibility"})," — handles automated transformations of custom CSS function syntax into Sass-safe interpolation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vertical Formatting"})," — manages line joining with consistent CRLF characters for Windows/UNIX compatibility."]}),`
`]}),`
`,e.jsx(n.h2,{id:"file-and-directory-methods",children:"File and Directory Methods"}),`
`,e.jsx(n.h3,{id:"getdir",children:e.jsx(n.code,{children:"getDir"})}),`
`,e.jsx(n.p,{children:"Determines the target directory structure for persisting the generated style files. It combines the core style directory with the specific project name defined in the properties configuration."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string[]"})," — An array representing the path segments of the target directory."]}),`
`,e.jsx(n.h2,{id:"indentation-and-spacing-methods",children:"Indentation and Spacing Methods"}),`
`,e.jsx(n.h3,{id:"getspace",children:e.jsx(n.code,{children:"getSpace"})}),`
`,e.jsx(n.p,{children:"Retrieves the base indentation unit used throughout the project's generated style files."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — Returns a string consisting of 2 spaces (",e.jsx(n.code,{children:"  "}),")."]}),`
`,e.jsx(n.h3,{id:"addspace",children:e.jsx(n.code,{children:"addSpace"})}),`
`,e.jsx(n.p,{children:"Generates an indentation string based on a specified nesting depth level. This is used to align blocks of code within nested structures like media queries or selector blocks."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"level: number"})," — The desired nesting level (0 for no indentation, 1 for 2 spaces, 2 for 4 spaces, etc.)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — The resulting indentation string."]}),`
`,e.jsx(n.h3,{id:"increasespace",children:e.jsx(n.code,{children:"increaseSpace"})}),`
`,e.jsx(n.p,{children:"Appends one additional level of indentation (2 spaces) to an existing space string. This is useful during recursive tree traversal where the depth increases incrementally."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"space: string"})," — The current indentation string to be expanded."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — The updated indentation string with one extra level."]}),`
`,e.jsx(n.h2,{id:"scss-directive-methods",children:"SCSS Directive Methods"}),`
`,e.jsx(n.h3,{id:"addimport",children:e.jsx(n.code,{children:"addImport"})}),`
`,e.jsxs(n.p,{children:["Constructs a standard SCSS ",e.jsx(n.code,{children:"@import"})," directive for a given file path."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: string"})," — The file path to be imported."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — The formatted directive (e.g., ",e.jsx(n.code,{children:'@import "path/to/file";'}),")."]}),`
`,e.jsx(n.h3,{id:"adduse",children:e.jsx(n.code,{children:"addUse"})}),`
`,e.jsxs(n.p,{children:["Constructs a modern SCSS ",e.jsx(n.code,{children:"@use"})," directive, which is the recommended way to load member functions, mixins, and variables in modern Sass."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: string"})," — The module path to be used."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — The formatted directive (e.g., ",e.jsx(n.code,{children:'@use "path/to/module";'}),")."]}),`
`,e.jsx(n.h3,{id:"addforward",children:e.jsx(n.code,{children:"addForward"})}),`
`,e.jsxs(n.p,{children:["Constructs an SCSS ",e.jsx(n.code,{children:"@forward"})," directive. This is typically used in index files to expose members of a sub-module to users of the package."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: string"})," — The module path to be forwarded."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — The formatted directive (e.g., ",e.jsx(n.code,{children:'@forward "path/to/module";'}),")."]}),`
`,e.jsx(n.h3,{id:"addimportproperties",children:e.jsx(n.code,{children:"addImportProperties"})}),`
`,e.jsxs(n.p,{children:["Generates a specialized ",e.jsx(n.code,{children:"@use"})," directive for the core ",e.jsx(n.code,{children:"@dxtmisha/styles"})," library, aliasing it as ",e.jsx(n.code,{children:"ui"})," for use in generated property blocks."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — Always returns ",e.jsx(n.code,{children:`'@use "@dxtmisha/styles" as ui;'`}),"."]}),`
`,e.jsx(n.h2,{id:"formatting-and-utilities",children:"Formatting and Utilities"}),`
`,e.jsx(n.h3,{id:"join",children:e.jsx(n.code,{children:"join"})}),`
`,e.jsxs(n.p,{children:["Combines an array of generated code lines into a single formatted string. It uses CRLF (",e.jsx(n.code,{children:"\\r\\n"}),") as the line separator to ensure consistent formatting across environments."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: string[]"})," — An array of strings representing individual lines of code."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — The resulting multiline string."]}),`
`,e.jsx(n.h3,{id:"tofunctioncss",children:e.jsx(n.code,{children:"toFunctionCss"})}),`
`,e.jsxs(n.p,{children:["A safety utility that transforms custom ",e.jsx(n.code,{children:"@function"})," calls within property values into Sass interpolation syntax (",e.jsx(n.code,{children:"#{...}"}),"). This prevents Sass compilation errors when custom functions are used in contexts that require raw CSS output."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string"})," — The CSS property value string containing potential custom function calls."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — The transformed string with interpolated function calls."]}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { StylesTool } from '@dxtmisha/scripts'

// 1. Getting an indentation level
const indent = StylesTool.addSpace(2) // "    "

// 2. Creating an SCSS import
const importLine = StylesTool.addImport('../tokens/colors')

// 3. Transforming a custom function call
const safeValue = StylesTool.toFunctionCss('@getOpacity(0.5)') // "#{getOpacity(0.5)}"

// 4. Joining lines
const fileContent = StylesTool.join([
  StylesTool.addImportProperties(),
  importLine,
  \`.element {\`,
  \`\${indent}color: red;\`,
  \`}\`
])
`})})]})}function x(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{x as default};

import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/StylesTool - Style Processing Utilities`}),`
`,(0,c.jsx)(n.h1,{id:`stylestool-class`,children:`StylesTool Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`StylesTool`}),` class is a high-level static utility container providing essential functions for the design system's style generation pipeline. It encapsulates logic for directory management, indentation control, SCSS directive construction, and Sass-compatibility transformations.`]}),`
`,(0,c.jsxs)(n.p,{children:[`By centralizing these low-level string manipulations and path lookups, it ensures consistency across all `,(0,c.jsx)(n.code,{children:`StylesTo*`}),` converters and generator classes.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Indentation Control`}),` — provides a standard 2-space indentation unit and methods to scale it based on nesting levels.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Directive Builders`}),` — standardizes the syntax for SCSS `,(0,c.jsx)(n.code,{children:`@use`}),`, `,(0,c.jsx)(n.code,{children:`@import`}),`, and `,(0,c.jsx)(n.code,{children:`@forward`}),` statements.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Path Resolution`}),` — integrates with global configuration to determine the output destination for generated files.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sass Compatibility`}),` — handles automated transformations of custom CSS function syntax into Sass-safe interpolation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Vertical Formatting`}),` — manages line joining with consistent CRLF characters for Windows/UNIX compatibility.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`file-and-directory-methods`,children:`File and Directory Methods`}),`
`,(0,c.jsx)(n.h3,{id:`getdir`,children:(0,c.jsx)(n.code,{children:`getDir`})}),`
`,(0,c.jsx)(n.p,{children:`Determines the target directory structure for persisting the generated style files. It combines the core style directory with the specific project name defined in the properties configuration.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string[]`}),` — An array representing the path segments of the target directory.`]}),`
`,(0,c.jsx)(n.h2,{id:`indentation-and-spacing-methods`,children:`Indentation and Spacing Methods`}),`
`,(0,c.jsx)(n.h3,{id:`getspace`,children:(0,c.jsx)(n.code,{children:`getSpace`})}),`
`,(0,c.jsx)(n.p,{children:`Retrieves the base indentation unit used throughout the project's generated style files.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Returns a string consisting of 2 spaces (`,(0,c.jsx)(n.code,{children:`  `}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`addspace`,children:(0,c.jsx)(n.code,{children:`addSpace`})}),`
`,(0,c.jsx)(n.p,{children:`Generates an indentation string based on a specified nesting depth level. This is used to align blocks of code within nested structures like media queries or selector blocks.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`level: number`}),` — The desired nesting level (0 for no indentation, 1 for 2 spaces, 2 for 4 spaces, etc.).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — The resulting indentation string.`]}),`
`,(0,c.jsx)(n.h3,{id:`increasespace`,children:(0,c.jsx)(n.code,{children:`increaseSpace`})}),`
`,(0,c.jsx)(n.p,{children:`Appends one additional level of indentation (2 spaces) to an existing space string. This is useful during recursive tree traversal where the depth increases incrementally.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`space: string`}),` — The current indentation string to be expanded.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — The updated indentation string with one extra level.`]}),`
`,(0,c.jsx)(n.h2,{id:`scss-directive-methods`,children:`SCSS Directive Methods`}),`
`,(0,c.jsx)(n.h3,{id:`addimport`,children:(0,c.jsx)(n.code,{children:`addImport`})}),`
`,(0,c.jsxs)(n.p,{children:[`Constructs a standard SCSS `,(0,c.jsx)(n.code,{children:`@import`}),` directive for a given file path.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — The file path to be imported.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — The formatted directive (e.g., `,(0,c.jsx)(n.code,{children:`@import "path/to/file";`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`adduse`,children:(0,c.jsx)(n.code,{children:`addUse`})}),`
`,(0,c.jsxs)(n.p,{children:[`Constructs a modern SCSS `,(0,c.jsx)(n.code,{children:`@use`}),` directive, which is the recommended way to load member functions, mixins, and variables in modern Sass.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — The module path to be used.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — The formatted directive (e.g., `,(0,c.jsx)(n.code,{children:`@use "path/to/module";`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`addforward`,children:(0,c.jsx)(n.code,{children:`addForward`})}),`
`,(0,c.jsxs)(n.p,{children:[`Constructs an SCSS `,(0,c.jsx)(n.code,{children:`@forward`}),` directive. This is typically used in index files to expose members of a sub-module to users of the package.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — The module path to be forwarded.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — The formatted directive (e.g., `,(0,c.jsx)(n.code,{children:`@forward "path/to/module";`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`addimportproperties`,children:(0,c.jsx)(n.code,{children:`addImportProperties`})}),`
`,(0,c.jsxs)(n.p,{children:[`Generates a specialized `,(0,c.jsx)(n.code,{children:`@use`}),` directive for the core `,(0,c.jsx)(n.code,{children:`@dxtmisha/styles`}),` library, aliasing it as `,(0,c.jsx)(n.code,{children:`ui`}),` for use in generated property blocks.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Always returns `,(0,c.jsx)(n.code,{children:`'@use "@dxtmisha/styles" as ui;'`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`formatting-and-utilities`,children:`Formatting and Utilities`}),`
`,(0,c.jsx)(n.h3,{id:`join`,children:(0,c.jsx)(n.code,{children:`join`})}),`
`,(0,c.jsxs)(n.p,{children:[`Combines an array of generated code lines into a single formatted string. It uses CRLF (`,(0,c.jsx)(n.code,{children:`\\r\\n`}),`) as the line separator to ensure consistent formatting across environments.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: string[]`}),` — An array of strings representing individual lines of code.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — The resulting multiline string.`]}),`
`,(0,c.jsx)(n.h3,{id:`tofunctioncss`,children:(0,c.jsx)(n.code,{children:`toFunctionCss`})}),`
`,(0,c.jsxs)(n.p,{children:[`A safety utility that transforms custom `,(0,c.jsx)(n.code,{children:`@function`}),` calls within property values into Sass interpolation syntax (`,(0,c.jsx)(n.code,{children:`#{...}`}),`). This prevents Sass compilation errors when custom functions are used in contexts that require raw CSS output.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — The CSS property value string containing potential custom function calls.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — The transformed string with interpolated function calls.`]}),`
`,(0,c.jsx)(n.h2,{id:`example-usage`,children:`Example Usage`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { StylesTool } from '@dxtmisha/scripts'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
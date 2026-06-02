import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/LibraryExport - Export Generator`}),`
`,(0,c.jsx)(n.h1,{id:`libraryexport-class`,children:`LibraryExport Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`LibraryExport`}),` class is responsible for aggregating and generating a unified export file for the library. It scans designated subfolders for TypeScript and Vue files, automatically compiling all exports into a single public interface to simplify library imports.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Unified Export Generation`}),` — Creates a comprehensive public entry point for all components, composables, functions, and classes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Smart Module Detection`}),` — Automatically applies standard wildcard exports (`,(0,c.jsx)(n.code,{children:`export *`}),`) for TypeScript utilities and creates named exports for Vue SFC components.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Style Integration`}),` — Automatically checks for and integrates global CSS or SCSS stylesheets.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Intelligent Filtering`}),` — Excludes unit test files (`,(0,c.jsx)(n.code,{children:`.test.`}),`) and modules marked with the `,(0,c.jsx)(n.code,{children:`// export:none`}),` directive.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Initialize and execute the library export generator using the `,(0,c.jsx)(n.code,{children:`make`}),` method:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryExport } from '@dxtmisha/scripts'

const generator = new LibraryExport()
generator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`core-execution`,children:`Core Execution`}),`
`,(0,c.jsx)(n.h4,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsx)(n.p,{children:`Triggers the main library compilation and entry point generation. It scans all configured subdirectories, collects the valid files, filters out test/none-export modules, and writes the unified import/export statements into the designated destination file.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`No parameters required.`}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`}),` — Modifies the target `,(0,c.jsx)(n.code,{children:`library.ts`}),` file on the filesystem and logs progress to the console.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryExport } from '@dxtmisha/scripts'

new LibraryExport().make()
`})}),`
`,(0,c.jsx)(n.h3,{id:`helper-methods`,children:`Helper Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPath(directory: string): string[]`}),` — Returns the directory path components based on `,(0,c.jsx)(n.code,{children:`UI_DIR_IN`}),` and the specified directory name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isExport(path: string | string[]): boolean`}),` — Evaluates if a file path is suitable for export by verifying it is not a test file and does not match `,(0,c.jsx)(n.code,{children:`UI_FLAG_NOT_EXPORT`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDirectory(): LibraryFiles`}),` — Collects recursively all indexable files within the configured export folders and aggregates them.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(name: string): string`}),` — Converts the first character of the directory name to uppercase to standardize comments in the generated file.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFile(path: string | string[]): string`}),` — Reads the file contents at the given path from the filesystem.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initFile(): string`}),` — Builds the raw content of the output library file, including imports, style setups, and wildcard/named exports.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initStyles(): string`}),` — Generates imports for global stylesheets (`,(0,c.jsx)(n.code,{children:`style.scss`}),` or `,(0,c.jsx)(n.code,{children:`style.css`}),`) if they are present in the root of the source directory.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`dependencies-and-configurations`,children:`Dependencies and Configurations`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`LibraryExport`}),` class interacts with several global configurations to perform structural generation:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`UI_DIRS_LIST_EXPORT`}),` — Specifies the active folders that are scanned recursively for exports (`,(0,c.jsx)(n.code,{children:`classes`}),`, `,(0,c.jsx)(n.code,{children:`components`}),`, `,(0,c.jsx)(n.code,{children:`composables`}),`, `,(0,c.jsx)(n.code,{children:`functions`}),`, `,(0,c.jsx)(n.code,{children:`global`}),`, `,(0,c.jsx)(n.code,{children:`types`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`UI_DIRS_FILE_EXPORT`}),` — Sets the destination output path of the compiled library file (`,(0,c.jsx)(n.code,{children:`src/library.ts`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`UI_DIR_IN`}),` — Identifies the root source directory containing the modules (`,(0,c.jsx)(n.code,{children:`src`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`UI_FLAG_NOT_EXPORT`}),` — Holds the regular expression matching the non-export directive (`,(0,c.jsx)(n.code,{children:`/\\/\\/ *export:none/`}),`).`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
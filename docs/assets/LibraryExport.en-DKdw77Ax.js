import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/LibraryExport - Export Generator`}),`
`,(0,c.jsx)(t.h1,{id:`libraryexport-class`,children:`LibraryExport Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`LibraryExport`}),` class is responsible for aggregating and generating a unified export file for the library. It scans designated subfolders for TypeScript and Vue files, automatically compiling all exports into a single public interface to simplify library imports.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Unified Export Generation`}),` — Creates a comprehensive public entry point for all components, composables, functions, and classes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Smart Module Detection`}),` — Automatically applies standard wildcard exports (`,(0,c.jsx)(t.code,{children:`export *`}),`) for TypeScript utilities and creates named exports for Vue SFC components.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Style Integration`}),` — Automatically checks for and integrates global CSS or SCSS stylesheets.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Intelligent Filtering`}),` — Excludes unit test files (`,(0,c.jsx)(t.code,{children:`.test.`}),`) and modules marked with the `,(0,c.jsx)(t.code,{children:`// export:none`}),` directive.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`Initialize and execute the library export generator using the `,(0,c.jsx)(t.code,{children:`make`}),` method:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryExport } from '@dxtmisha/scripts'

const generator = new LibraryExport()
generator.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`core-execution`,children:`Core Execution`}),`
`,(0,c.jsx)(t.h4,{id:`make`,children:(0,c.jsx)(t.code,{children:`make`})}),`
`,(0,c.jsx)(t.p,{children:`Triggers the main library compilation and entry point generation. It scans all configured subdirectories, collects the valid files, filters out test/none-export modules, and writes the unified import/export statements into the designated destination file.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`No parameters required.`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`void`}),` — Modifies the target `,(0,c.jsx)(t.code,{children:`library.ts`}),` file on the filesystem and logs progress to the console.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryExport } from '@dxtmisha/scripts'

new LibraryExport().make()
`})}),`
`,(0,c.jsx)(t.h3,{id:`helper-methods`,children:`Helper Methods`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPath(directory: string): string[]`}),` — Returns the directory path components based on `,(0,c.jsx)(t.code,{children:`UI_DIR_IN`}),` and the specified directory name.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isExport(path: string | string[]): boolean`}),` — Evaluates if a file path is suitable for export by verifying it is not a test file and does not match `,(0,c.jsx)(t.code,{children:`UI_FLAG_NOT_EXPORT`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDirectory(): LibraryFiles`}),` — Collects recursively all indexable files within the configured export folders and aggregates them.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(name: string): string`}),` — Converts the first character of the directory name to uppercase to standardize comments in the generated file.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFile(path: string | string[]): string`}),` — Reads the file contents at the given path from the filesystem.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initFile(): string`}),` — Builds the raw content of the output library file, including imports, style setups, and wildcard/named exports.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initStyles(): string`}),` — Generates imports for global stylesheets (`,(0,c.jsx)(t.code,{children:`style.scss`}),` or `,(0,c.jsx)(t.code,{children:`style.css`}),`) if they are present in the root of the source directory.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`dependencies-and-configurations`,children:`Dependencies and Configurations`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`LibraryExport`}),` class interacts with several global configurations to perform structural generation:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`UI_DIRS_LIST_EXPORT`}),` — Specifies the active folders that are scanned recursively for exports (`,(0,c.jsx)(t.code,{children:`classes`}),`, `,(0,c.jsx)(t.code,{children:`components`}),`, `,(0,c.jsx)(t.code,{children:`composables`}),`, `,(0,c.jsx)(t.code,{children:`functions`}),`, `,(0,c.jsx)(t.code,{children:`global`}),`, `,(0,c.jsx)(t.code,{children:`types`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`UI_DIRS_FILE_EXPORT`}),` — Sets the destination output path of the compiled library file (`,(0,c.jsx)(t.code,{children:`src/library.ts`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`UI_DIR_IN`}),` — Identifies the root source directory containing the modules (`,(0,c.jsx)(t.code,{children:`src`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`UI_FLAG_NOT_EXPORT`}),` — Holds the regular expression matching the non-export directive (`,(0,c.jsx)(t.code,{children:`/\\/\\/ *export:none/`}),`).`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
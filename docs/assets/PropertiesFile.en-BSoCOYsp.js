import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/PropertiesFile - Filesystem Path Orchestrator`}),`
`,(0,c.jsx)(n.h1,{id:`propertiesfile-class`,children:`PropertiesFile Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesFile`}),` class is a comprehensive static utility designed to orchestrate all filesystem-related tasks within the design system toolchain. It provides a platform-agnostic interface for path manipulation, synchronized IO, and recursive directory management, ensuring that file discovery and data persistence remain consistent across different operating systems and development environments.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Path Normalization`}),` — Automatically resolves OS-specific path separators and joins segments into standardized strings.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Recursive Traversal`}),` — Provides specialized methods for deep exploration of directory structures with optional indexing.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Synchronized IO`}),` — Handles file reading (JSON/Text) and writing with automatic directory synthesis.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Metadata Discovery`}),` — Retrieves file timestamps and statistical data for cache invalidation logic.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Safe Operations`}),` — Includes built-in checks for entry existence, type (file vs directory), and module status.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`As a static class, `,(0,c.jsx)(n.code,{children:`PropertiesFile`}),` is self-initializing and ready for use upon import.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesFile } from '@dxtmisha/scripts'

// Check if a configuration exists
if (PropertiesFile.is('design-ui.json')) {
  const config = PropertiesFile.readFile('design-ui.json')
}

// Join paths safely
const fullPath = PropertiesFile.joinPath(['src', 'tokens', 'colors.json'])
`})}),`
`,(0,c.jsx)(n.h2,{id:`verification-methods`,children:`Verification Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(path): boolean`}),` — synchronously checks for the existence of a file or directory.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDir(path): boolean`}),` — determines if the specified path points to a directory.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isModule(): boolean`}),` — determines if the project is connected as an external module.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`path-management-methods`,children:`Path Management Methods`}),`
`,(0,c.jsx)(n.h3,{id:`joinpath`,children:(0,c.jsx)(n.code,{children:`joinPath`})}),`
`,(0,c.jsx)(n.p,{children:`Joins multiple path segments into a single normalized path string using the OS separator.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — array or string of path segments.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const path = PropertiesFile.joinPath(['src', 'styles', 'main.css'])
// Returns: "src/styles/main.css" (on Mac/Linux) or "src\\styles\\main.css" (on Windows)
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — joined and normalized path.`]}),`
`,(0,c.jsx)(n.h3,{id:`joinpathbyname`,children:(0,c.jsx)(n.code,{children:`joinPathByName`})}),`
`,(0,c.jsx)(n.p,{children:`Constructs a full file path by joining directory path, filename, and extension.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — directory path.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — filename.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`extension: string`}),` — file extension (defaults to `,(0,c.jsx)(n.code,{children:`json`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const filePath = PropertiesFile.joinPathByName('data', 'user-profile', 'json')
// Returns: "data/user-profile.json"
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h3,{id:`getpathdir`,children:(0,c.jsx)(n.code,{children:`getPathDir`})}),`
`,(0,c.jsx)(n.p,{children:`Extracts the directory path from a full path. If a directory path is passed, returns it unchanged.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — path to a file or directory.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const dirOnly = PropertiesFile.getPathDir('src/classes/App.ts')
// Returns: "src/classes"
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h3,{id:`getpathfile`,children:(0,c.jsx)(n.code,{children:`getPathFile`})}),`
`,(0,c.jsx)(n.p,{children:`Constructs an array of path segments for a file.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — base path.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — filename.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`extension: string`}),` — extension (defaults to `,(0,c.jsx)(n.code,{children:`json`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const segments = PropertiesFile.getPathFile('dist', 'manifest')
// Returns: ["dist", "manifest.json"]
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string[]`})]}),`
`,(0,c.jsx)(n.h3,{id:`getroot`,children:(0,c.jsx)(n.code,{children:`getRoot`})}),`
`,(0,c.jsxs)(n.p,{children:[`Returns the current root project path (`,(0,c.jsx)(n.code,{children:`process.cwd()`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const root = PropertiesFile.getRoot()
// Returns: "/Users/user/project"
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h3,{id:`getfilename`,children:(0,c.jsx)(n.code,{children:`getFileName`})}),`
`,(0,c.jsx)(n.p,{children:`Converts a name to kebab-case and adds the specified extension.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — element name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`extension: string`}),` — extension (defaults to `,(0,c.jsx)(n.code,{children:`json`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const name = PropertiesFile.getFileName('UserProfile', 'ts')
// Returns: "user-profile.ts"
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h3,{id:`sep`,children:(0,c.jsx)(n.code,{children:`sep`})}),`
`,(0,c.jsxs)(n.p,{children:[`Returns the system-specific directory separator (`,(0,c.jsx)(n.code,{children:`/`}),` or `,(0,c.jsx)(n.code,{children:`\\`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const s = PropertiesFile.sep()
// Returns: "/"
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h2,{id:`reading-methods`,children:`Reading Methods`}),`
`,(0,c.jsx)(n.h3,{id:`readfile`,children:(0,c.jsx)(n.code,{children:`readFile`})}),`
`,(0,c.jsx)(n.p,{children:`Synchronously reads and automatically parses file content. Returns an object if JSON, otherwise a string.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — path to the file.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const data = PropertiesFile.readFile<{ name: string }>('config.json')
// Returns: { name: "DXT" } (object)
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`R | undefined`}),` — parsed data or `,(0,c.jsx)(n.code,{children:`undefined`}),` if file is missing.`]}),`
`,(0,c.jsx)(n.h3,{id:`readfileonly`,children:(0,c.jsx)(n.code,{children:`readFileOnly`})}),`
`,(0,c.jsx)(n.p,{children:`Reads file content as a raw string without any transformation.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — path to the file.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const text = PropertiesFile.readFileOnly('README.md')
// Returns: "# Project Title..." (string)
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string | undefined`})]}),`
`,(0,c.jsx)(n.h3,{id:`readdir`,children:(0,c.jsx)(n.code,{children:`readDir`})}),`
`,(0,c.jsx)(n.p,{children:`Reads the contents of a directory (list of child names).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — path to the directory.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const items = PropertiesFile.readDir('src')
// Returns: ["index.ts", "classes", "types"]
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string[]`})]}),`
`,(0,c.jsx)(n.h3,{id:`readdirrecursive`,children:(0,c.jsx)(n.code,{children:`readDirRecursive`})}),`
`,(0,c.jsx)(n.p,{children:`Recursively reads all files within a directory and its sub-folders.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — path to the directory.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const allFiles = PropertiesFile.readDirRecursive('src')
// Returns: ["index.ts", "classes/App.ts", "classes/DB.ts", ...]
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string[]`}),` — list of paths to all discovered files.`]}),`
`,(0,c.jsx)(n.h2,{id:`modification-methods`,children:`Modification Methods`}),`
`,(0,c.jsx)(n.h3,{id:`write`,children:(0,c.jsx)(n.code,{children:`write`})}),`
`,(0,c.jsx)(n.p,{children:`Saves data to a file, automatically synthesizing any missing parent directories.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — directory path.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — filename.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — data to write.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`extension: string`}),` — extension (defaults to `,(0,c.jsx)(n.code,{children:`json`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`PropertiesFile.write('dist/cache', 'data', { id: 1 })
// Creates dist/cache/data.json with JSON content
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h3,{id:`writebypath`,children:(0,c.jsx)(n.code,{children:`writeByPath`})}),`
`,(0,c.jsx)(n.p,{children:`Writes data to an exact file path.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — full path to the file.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — data.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transform: boolean`}),` — whether to stringify objects as JSON (defaults to `,(0,c.jsx)(n.code,{children:`true`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`PropertiesFile.writeByPath('logs/error.log', 'Critical error', false)
// Writes raw string to file without JSON transformation
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h3,{id:`createdir`,children:(0,c.jsx)(n.code,{children:`createDir`})}),`
`,(0,c.jsx)(n.p,{children:`Recursively creates a directory if it does not already exist.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — path to create.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`PropertiesFile.createDir('storage/images/2024')
// Creates the entire directory tree
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h3,{id:`copy`,children:(0,c.jsx)(n.code,{children:`copy`})}),`
`,(0,c.jsx)(n.p,{children:`Copies a file from the source path to the destination path.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — target path.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathsSrc: PropertiesFilePath`}),` — source path.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`PropertiesFile.copy('backup/config.json', 'config.json')
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h3,{id:`removefile`,children:(0,c.jsx)(n.code,{children:`removeFile`})}),`
`,(0,c.jsx)(n.p,{children:`Deletes the specified file.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — path to the file.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`PropertiesFile.removeFile('temp.tmp')
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h3,{id:`removedir`,children:(0,c.jsx)(n.code,{children:`removeDir`})}),`
`,(0,c.jsx)(n.p,{children:`Recursively deletes a directory and all its contents.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — path to the directory.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`PropertiesFile.removeDir('dist/old-version')
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-paths--io-synchronization-flow`,children:`The Paths & IO Synchronization Flow`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesFile`}),` acts as the low-level synchronization layer for the entire library:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Path Normalization`}),`: Every method internally calls `,(0,c.jsx)(n.code,{children:`joinPath`}),` and `,(0,c.jsx)(n.code,{children:`toSep`}),`, which converts all incoming forward slashes into the OS-specific separator (e.g., `,(0,c.jsx)(n.code,{children:`\\`}),` on Windows).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Atomic Writes`}),`: When `,(0,c.jsx)(n.code,{children:`write()`}),` is called, the class first determines the target directory and executes `,(0,c.jsx)(n.code,{children:`createDir()`}),`, which recursively builds any missing folders before finally writing the content via `,(0,c.jsx)(n.code,{children:`fs.writeFileSync`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Recursive Context`}),`: The specialized recursive methods (`,(0,c.jsx)(n.code,{children:`readDirRecursive`}),`, etc.) allow the documentation and token engines to discover every file in a component tree without manually managing depth or recursion limits.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Root Resolution`}),`: It maintains an internal `,(0,c.jsx)(n.code,{children:`root`}),` (based on `,(0,c.jsx)(n.code,{children:`process.cwd()`}),`) to ensure that relative path segments are always resolved from the project's base directory.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
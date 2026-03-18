import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/en/scripts/Classes/PropertiesFile - Filesystem Path Orchestrator"}),`
`,e.jsx(n.h1,{id:"propertiesfile-class",children:"PropertiesFile Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"PropertiesFile"})," class is a comprehensive static utility designed to orchestrate all filesystem-related tasks within the design system toolchain. It provides a platform-agnostic interface for path manipulation, synchronized IO, and recursive directory management, ensuring that file discovery and data persistence remain consistent across different operating systems and development environments."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Path Normalization"})," — Automatically resolves OS-specific path separators and joins segments into standardized strings."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Recursive Traversal"})," — Provides specialized methods for deep exploration of directory structures with optional indexing."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Synchronized IO"})," — Handles file reading (JSON/Text) and writing with automatic directory synthesis."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Metadata Discovery"})," — Retrieves file timestamps and statistical data for cache invalidation logic."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Safe Operations"})," — Includes built-in checks for entry existence, type (file vs directory), and module status."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["As a static class, ",e.jsx(n.code,{children:"PropertiesFile"})," is self-initializing and ready for use upon import."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { PropertiesFile } from '@dxtmisha/scripts'

// Check if a configuration exists
if (PropertiesFile.is('design-ui.json')) {
  const config = PropertiesFile.readFile('design-ui.json')
}

// Join paths safely
const fullPath = PropertiesFile.joinPath(['src', 'tokens', 'colors.json'])
`})}),`
`,e.jsx(n.h2,{id:"verification-methods",children:"Verification Methods"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"is(path): boolean"})," — synchronously checks for the existence of a file or directory."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isDir(path): boolean"})," — determines if the specified path points to a directory."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isModule(): boolean"})," — determines if the project is connected as an external module."]}),`
`]}),`
`,e.jsx(n.h2,{id:"path-management-methods",children:"Path Management Methods"}),`
`,e.jsx(n.h3,{id:"joinpath",children:e.jsx(n.code,{children:"joinPath"})}),`
`,e.jsx(n.p,{children:"Joins multiple path segments into a single normalized path string using the OS separator."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — array or string of path segments."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const path = PropertiesFile.joinPath(['src', 'styles', 'main.css'])
// Returns: "src/styles/main.css" (on Mac/Linux) or "src\\styles\\main.css" (on Windows)
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — joined and normalized path."]}),`
`,e.jsx(n.h3,{id:"joinpathbyname",children:e.jsx(n.code,{children:"joinPathByName"})}),`
`,e.jsx(n.p,{children:"Constructs a full file path by joining directory path, filename, and extension."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — directory path."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — filename."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"extension: string"})," — file extension (defaults to ",e.jsx(n.code,{children:"json"}),")."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const filePath = PropertiesFile.joinPathByName('data', 'user-profile', 'json')
// Returns: "data/user-profile.json"
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.h3,{id:"getpathdir",children:e.jsx(n.code,{children:"getPathDir"})}),`
`,e.jsx(n.p,{children:"Extracts the directory path from a full path. If a directory path is passed, returns it unchanged."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — path to a file or directory."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const dirOnly = PropertiesFile.getPathDir('src/classes/App.ts')
// Returns: "src/classes"
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.h3,{id:"getpathfile",children:e.jsx(n.code,{children:"getPathFile"})}),`
`,e.jsx(n.p,{children:"Constructs an array of path segments for a file."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — base path."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — filename."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"extension: string"})," — extension (defaults to ",e.jsx(n.code,{children:"json"}),")."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const segments = PropertiesFile.getPathFile('dist', 'manifest')
// Returns: ["dist", "manifest.json"]
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string[]"})]}),`
`,e.jsx(n.h3,{id:"getroot",children:e.jsx(n.code,{children:"getRoot"})}),`
`,e.jsxs(n.p,{children:["Returns the current root project path (",e.jsx(n.code,{children:"process.cwd()"}),")."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const root = PropertiesFile.getRoot()
// Returns: "/Users/user/project"
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.h3,{id:"getfilename",children:e.jsx(n.code,{children:"getFileName"})}),`
`,e.jsx(n.p,{children:"Converts a name to kebab-case and adds the specified extension."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — element name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"extension: string"})," — extension (defaults to ",e.jsx(n.code,{children:"json"}),")."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const name = PropertiesFile.getFileName('UserProfile', 'ts')
// Returns: "user-profile.ts"
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.h3,{id:"sep",children:e.jsx(n.code,{children:"sep"})}),`
`,e.jsxs(n.p,{children:["Returns the system-specific directory separator (",e.jsx(n.code,{children:"/"})," or ",e.jsx(n.code,{children:"\\"}),")."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const s = PropertiesFile.sep()
// Returns: "/"
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.h2,{id:"reading-methods",children:"Reading Methods"}),`
`,e.jsx(n.h3,{id:"readfile",children:e.jsx(n.code,{children:"readFile"})}),`
`,e.jsx(n.p,{children:"Synchronously reads and automatically parses file content. Returns an object if JSON, otherwise a string."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — path to the file."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const data = PropertiesFile.readFile<{ name: string }>('config.json')
// Returns: { name: "DXT" } (object)
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"R | undefined"})," — parsed data or ",e.jsx(n.code,{children:"undefined"})," if file is missing."]}),`
`,e.jsx(n.h3,{id:"readfileonly",children:e.jsx(n.code,{children:"readFileOnly"})}),`
`,e.jsx(n.p,{children:"Reads file content as a raw string without any transformation."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — path to the file."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const text = PropertiesFile.readFileOnly('README.md')
// Returns: "# Project Title..." (string)
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string | undefined"})]}),`
`,e.jsx(n.h3,{id:"readdir",children:e.jsx(n.code,{children:"readDir"})}),`
`,e.jsx(n.p,{children:"Reads the contents of a directory (list of child names)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — path to the directory."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const items = PropertiesFile.readDir('src')
// Returns: ["index.ts", "classes", "types"]
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string[]"})]}),`
`,e.jsx(n.h3,{id:"readdirrecursive",children:e.jsx(n.code,{children:"readDirRecursive"})}),`
`,e.jsx(n.p,{children:"Recursively reads all files within a directory and its sub-folders."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — path to the directory."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const allFiles = PropertiesFile.readDirRecursive('src')
// Returns: ["index.ts", "classes/App.ts", "classes/DB.ts", ...]
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string[]"})," — list of paths to all discovered files."]}),`
`,e.jsx(n.h2,{id:"modification-methods",children:"Modification Methods"}),`
`,e.jsx(n.h3,{id:"write",children:e.jsx(n.code,{children:"write"})}),`
`,e.jsx(n.p,{children:"Saves data to a file, automatically synthesizing any missing parent directories."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — directory path."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — filename."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: T"})," — data to write."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"extension: string"})," — extension (defaults to ",e.jsx(n.code,{children:"json"}),")."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`PropertiesFile.write('dist/cache', 'data', { id: 1 })
// Creates dist/cache/data.json with JSON content
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.h3,{id:"writebypath",children:e.jsx(n.code,{children:"writeByPath"})}),`
`,e.jsx(n.p,{children:"Writes data to an exact file path."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — full path to the file."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: T"})," — data."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"transform: boolean"})," — whether to stringify objects as JSON (defaults to ",e.jsx(n.code,{children:"true"}),")."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`PropertiesFile.writeByPath('logs/error.log', 'Critical error', false)
// Writes raw string to file without JSON transformation
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.h3,{id:"createdir",children:e.jsx(n.code,{children:"createDir"})}),`
`,e.jsx(n.p,{children:"Recursively creates a directory if it does not already exist."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — path to create."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`PropertiesFile.createDir('storage/images/2024')
// Creates the entire directory tree
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.h3,{id:"copy",children:e.jsx(n.code,{children:"copy"})}),`
`,e.jsx(n.p,{children:"Copies a file from the source path to the destination path."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — target path."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pathsSrc: PropertiesFilePath"})," — source path."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`PropertiesFile.copy('backup/config.json', 'config.json')
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.h3,{id:"removefile",children:e.jsx(n.code,{children:"removeFile"})}),`
`,e.jsx(n.p,{children:"Deletes the specified file."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — path to the file."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`PropertiesFile.removeFile('temp.tmp')
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.h3,{id:"removedir",children:e.jsx(n.code,{children:"removeDir"})}),`
`,e.jsx(n.p,{children:"Recursively deletes a directory and all its contents."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesFilePath"})," — path to the directory."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`PropertiesFile.removeDir('dist/old-version')
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(n.h3,{id:"the-paths--io-synchronization-flow",children:"The Paths & IO Synchronization Flow"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"PropertiesFile"})," acts as the low-level synchronization layer for the entire library:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Path Normalization"}),": Every method internally calls ",e.jsx(n.code,{children:"joinPath"})," and ",e.jsx(n.code,{children:"toSep"}),", which converts all incoming forward slashes into the OS-specific separator (e.g., ",e.jsx(n.code,{children:"\\"})," on Windows)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Atomic Writes"}),": When ",e.jsx(n.code,{children:"write()"})," is called, the class first determines the target directory and executes ",e.jsx(n.code,{children:"createDir()"}),", which recursively builds any missing folders before finally writing the content via ",e.jsx(n.code,{children:"fs.writeFileSync"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Recursive Context"}),": The specialized recursive methods (",e.jsx(n.code,{children:"readDirRecursive"}),", etc.) allow the documentation and token engines to discover every file in a component tree without manually managing depth or recursion limits."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Root Resolution"}),": It maintains an internal ",e.jsx(n.code,{children:"root"})," (based on ",e.jsx(n.code,{children:"process.cwd()"}),") to ensure that relative path segments are always resolved from the project's base directory."]}),`
`]})]})}function x(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{x as default};

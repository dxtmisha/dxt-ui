import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/GitRead - Git Repository Reader"}),`
`,e.jsx(s.h1,{id:"gitread-class",children:"GitRead Class"}),`
`,e.jsx(s.p,{children:"A powerful utility class for interacting with a Git repository. It provides high-level methods to retrieve file lists, commit dates, status information in porcelain format, and more."}),`
`,e.jsx(s.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"File Discovery"})," — retrieves all tracked files in the current repository or filtered by specific directories."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Status Reporting"})," — parses ",e.jsx(s.code,{children:"git status --porcelain"})," to identify modified, added, or untracked files."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Commit History"})," — extracts the last modification date for individual files."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Path Management"})," — handles relative paths and directory prefixes within the repository structure."]}),`
`]}),`
`,e.jsx(s.h2,{id:"core-methods",children:"Core Methods"}),`
`,e.jsx(s.h3,{id:"getlist",children:e.jsx(s.code,{children:"getList"})}),`
`,e.jsx(s.p,{children:"Retrieves a simplified list of all tracked files in the current repository HEAD, including basic metadata like modified dates."}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"filter?: (file: string) => boolean"})," — A callback function to include only files that match specific criteria."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Returns:"})," ",e.jsx(s.code,{children:"GitFileList"})," — An array of ",e.jsx(s.code,{children:"GitFileItem"})," objects representing the tracked files."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Example:"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const files = GitRead.getList((f) => f.endsWith('.ts'))
/**
 * [
 *   {
 *     path: 'src/index.ts',
 *     pathByOS: ['src', 'index.ts'],
 *     pathFull: 'packages/scripts/src/index.ts',
 *     date: '2024-03-20 12:00:00',
 *     status: undefined
 *   },
 *   ...
 * ]
 */
`})}),`
`,e.jsx(s.h3,{id:"getlistporcelain",children:e.jsx(s.code,{children:"getListPorcelain"})}),`
`,e.jsxs(s.p,{children:["Retrieves the current status of files in the repository using the ",e.jsx(s.code,{children:"--porcelain"})," format. This includes changes in the working tree and the index."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"filter?: (file: string) => boolean"})," — A callback function to filter the resulting status list."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Returns:"})," ",e.jsx(s.code,{children:"GitFileList"})," — An array of ",e.jsx(s.code,{children:"GitFileItem"})," objects, each containing a ",e.jsx(s.code,{children:"status"})," field."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Example:"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const status = GitRead.getListPorcelain()
/**
 * [
 *   {
 *     path: 'src/classes/GitRead.ts',
 *     pathByOS: ['src', 'classes', 'GitRead.ts'],
 *     pathFull: 'packages/scripts/src/classes/GitRead.ts',
 *     date: '2024-03-21 10:30:00',
 *     status: 'M'
 *   },
 *   ...
 * ]
 */
`})}),`
`,e.jsx(s.h3,{id:"getlistunique",children:e.jsx(s.code,{children:"getListUnique"})}),`
`,e.jsxs(s.p,{children:["Orchestrates a merge between the tracked files (",e.jsx(s.code,{children:"getList"}),") and the current status (",e.jsx(s.code,{children:"getListPorcelain"}),"). It ensures each file is represented only once, prioritizing status information if available."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"filter: (file: string) => boolean"})," — Required callback function to filter the unified list."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Returns:"})," ",e.jsx(s.code,{children:"GitFileList"})," — A deduplicated list of files combining baseline and changed states."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Example:"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const unique = GitRead.getListUnique((f) => f.includes('src/'))
/**
 * [
 *   {
 *     path: 'src/main.ts',
 *     pathByOS: ['src', 'main.ts'],
 *     pathFull: 'packages/scripts/src/main.ts',
 *     date: '2024-03-19 15:45:00',
 *     status: 'A'
 *   }
 * ]
 */
`})}),`
`,e.jsx(s.h3,{id:"getlistbydirectory",children:e.jsx(s.code,{children:"getListByDirectory"})}),`
`,e.jsxs(s.p,{children:["A convenience method for retrieving unique file lists specifically from a given directory, filtered to include only ",e.jsx(s.code,{children:".ts"})," files and excluding ",e.jsx(s.code,{children:".test.ts"})," files."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"directory: string | RegExp"})," — The target directory path or a pattern to match against file paths."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Returns:"})," ",e.jsx(s.code,{children:"GitFileList"})]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Example:"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const classes = GitRead.getListByDirectory('/classes/')
/**
 * [
 *   {
 *     path: 'classes/GitRead.ts',
 *     ...
 *   }
 * ]
 */
`})}),`
`,e.jsx(s.h2,{id:"utility-methods",children:"Utility Methods"}),`
`,e.jsx(s.h3,{id:"getclasseslist",children:e.jsx(s.code,{children:"getClassesList"})}),`
`,e.jsxs(s.p,{children:["Gets all non-test TypeScript files in the ",e.jsx(s.code,{children:"/classes/"})," directory."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Example:"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const classes = GitRead.getClassesList()
/**
 * [
 *   {
 *     path: 'classes/GitRead.ts',
 *     pathByOS: ['classes', 'GitRead.ts'],
 *     pathFull: 'packages/scripts/src/classes/GitRead.ts',
 *     date: '2024-03-21 10:30:00',
 *     status: undefined
 *   },
 *   ...
 * ]
 */
`})}),`
`,e.jsx(s.h3,{id:"getfunctionslist",children:e.jsx(s.code,{children:"getFunctionsList"})}),`
`,e.jsxs(s.p,{children:["Gets all non-test TypeScript files in the ",e.jsx(s.code,{children:"/functions/"})," directory."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Example:"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const funcs = GitRead.getFunctionsList()
/**
 * [
 *   {
 *     path: 'functions/myFunction.ts',
 *     pathByOS: ['functions', 'myFunction.ts'],
 *     pathFull: 'packages/scripts/src/functions/myFunction.ts',
 *     date: '2024-03-20 15:00:00',
 *     status: undefined
 *   }
 * ]
 */
`})}),`
`,e.jsx(s.h3,{id:"getfilespath",children:e.jsx(s.code,{children:"getFilesPath"})}),`
`,e.jsx(s.p,{children:"Returns an array of all tracked file paths in the repository."}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Example:"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const paths = GitRead.getFilesPath()
// ['src/index.ts', 'package.json', ...]
`})}),`
`,e.jsx(s.h3,{id:"getfilesporcelain",children:e.jsx(s.code,{children:"getFilesPorcelain"})}),`
`,e.jsxs(s.p,{children:["Returns the raw output of ",e.jsx(s.code,{children:"git status --porcelain"})," as an array of strings."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Example:"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const porcelain = GitRead.getFilesPorcelain()
// [' M src/index.ts', '?? new-file.txt']
`})}),`
`,e.jsx(s.h3,{id:"getfiledate",children:e.jsx(s.code,{children:"getFileDate"})}),`
`,e.jsx(s.p,{children:"Returns the date of the last commit for a specific file."}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"filePath: string"})," — The path to the target file."]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Example:"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const date = GitRead.getFileDate('src/index.ts')
// '2024-03-20 12:00:00 +0300'
`})}),`
`,e.jsx(s.h3,{id:"getdirprefix",children:e.jsx(s.code,{children:"getDirPrefix"})}),`
`,e.jsx(s.p,{children:"Returns the current directory's prefix within the Git repository."}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Example:"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const prefix = GitRead.getDirPrefix()
// 'packages/scripts/'
`})}),`
`,e.jsx(s.h3,{id:"getdate",children:e.jsx(s.code,{children:"getDate"})}),`
`,e.jsx(s.p,{children:"Formats a date string into a standardized full format."}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"date?: string"})," — The date string to format (optional)."]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Example:"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const formatted = GitRead.getDate('2024-03-20')
// '2024-03-20 00:00:00'
`})}),`
`,e.jsx(s.h3,{id:"filterbydirectory",children:e.jsx(s.code,{children:"filterByDirectory"})}),`
`,e.jsxs(s.p,{children:["Filters a ",e.jsx(s.code,{children:"GitFileList"})," to include only items that belong to the current directory prefix."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"list: GitFileList"})," — The list of files to filter."]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Example:"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const filtered = GitRead.filterByDirectory(myList)
`})}),`
`,e.jsx(s.h3,{id:"mergeunique",children:e.jsx(s.code,{children:"mergeUnique"})}),`
`,e.jsxs(s.p,{children:["Merges two ",e.jsx(s.code,{children:"GitFileList"})," arrays, ensuring each file path is unique."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"listA: GitFileList"})," — First list."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"listB: GitFileList"})," — Second list."]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Example:"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const merged = GitRead.mergeUnique(list1, list2)
`})}),`
`,e.jsx(s.h3,{id:"splitpath",children:e.jsx(s.code,{children:"splitPath"})}),`
`,e.jsx(s.p,{children:"Splits a file path string into an array of path segments."}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"path: string"})," — The path to split."]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Example:"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const parts = GitRead.splitPath('src/classes/GitRead.ts')
// ['src', 'classes', 'GitRead.ts']
`})}),`
`,e.jsx(s.h2,{id:"data-structures",children:"Data Structures"}),`
`,e.jsx(s.h3,{id:"gitfileitem",children:e.jsx(s.code,{children:"GitFileItem"})}),`
`,e.jsx(s.p,{children:"The primary object representing a file's state in Git:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"path: string"})," — The relative path to the file."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pathByOS: string[]"})," — The file path split into system-agnostic segments."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pathFull: string"})," — The full path including any repository-wide directory prefixes."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"date: string"})," — The last modification date (standardized)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"status?: GitStatus"})," — The Git status code (e.g., ",e.jsx(s.code,{children:"'M'"}),", ",e.jsx(s.code,{children:"'A'"}),", ",e.jsx(s.code,{children:"'??'"}),")."]}),`
`]}),`
`,e.jsx(s.h3,{id:"gitstatus",children:e.jsx(s.code,{children:"GitStatus"})}),`
`,e.jsx(s.p,{children:"Enum representing common Git status codes:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"MODIFIED"})," (",e.jsx(s.code,{children:"'M'"}),") — Existing file has been changed."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"ADDED"})," (",e.jsx(s.code,{children:"'A'"}),") — New file added to the index."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"DELETED"})," (",e.jsx(s.code,{children:"'D'"}),") — File has been removed."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"UNTRACKED"})," (",e.jsx(s.code,{children:"'??'"}),") — New file not yet tracked by Git."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"RENAMED"})," (",e.jsx(s.code,{children:"'R'"}),") — File has been moved or renamed."]}),`
`]}),`
`,e.jsx(s.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s.h3,{id:"getting-modified-files",children:"Getting Modified Files"}),`
`,e.jsx(s.p,{children:"Retrieve a list of files that have been modified or added to the repository."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { GitRead } from '@dxtmisha/scripts'

const modifiedFiles = GitRead.getListPorcelain()
console.log(modifiedFiles)
`})}),`
`,e.jsx(s.h3,{id:"filtering-classes",children:"Filtering Classes"}),`
`,e.jsx(s.p,{children:"Get only the class files for a specific module."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`const componentClasses = GitRead.getListUnique(
  (file) => file.includes('packages/ui/src/classes/')
)
`})})]})}function x(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{x as default};

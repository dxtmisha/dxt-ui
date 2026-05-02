import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/GitRead - Git Repository Reader`}),`
`,(0,c.jsx)(n.h1,{id:`gitread-class`,children:`GitRead Class`}),`
`,(0,c.jsx)(n.p,{children:`A powerful utility class for interacting with a Git repository. It provides high-level methods to retrieve file lists, commit dates, status information in porcelain format, and more.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`File Discovery`}),` — retrieves all tracked files in the current repository or filtered by specific directories.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Status Reporting`}),` — parses `,(0,c.jsx)(n.code,{children:`git status --porcelain`}),` to identify modified, added, or untracked files.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Commit History`}),` — extracts the last modification date for individual files.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Path Management`}),` — handles relative paths and directory prefixes within the repository structure.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`core-methods`,children:`Core Methods`}),`
`,(0,c.jsx)(n.h3,{id:`getlist`,children:(0,c.jsx)(n.code,{children:`getList`})}),`
`,(0,c.jsx)(n.p,{children:`Retrieves a simplified list of all tracked files in the current repository HEAD, including basic metadata like modified dates.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`filter?: (file: string) => boolean`}),` — A callback function to include only files that match specific criteria.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`GitFileList`}),` — An array of `,(0,c.jsx)(n.code,{children:`GitFileItem`}),` objects representing the tracked files.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const files = GitRead.getList((f) => f.endsWith('.ts'))
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
`,(0,c.jsx)(n.h3,{id:`getlistporcelain`,children:(0,c.jsx)(n.code,{children:`getListPorcelain`})}),`
`,(0,c.jsxs)(n.p,{children:[`Retrieves the current status of files in the repository using the `,(0,c.jsx)(n.code,{children:`--porcelain`}),` format. This includes changes in the working tree and the index.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`filter?: (file: string) => boolean`}),` — A callback function to filter the resulting status list.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`GitFileList`}),` — An array of `,(0,c.jsx)(n.code,{children:`GitFileItem`}),` objects, each containing a `,(0,c.jsx)(n.code,{children:`status`}),` field.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const status = GitRead.getListPorcelain()
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
`,(0,c.jsx)(n.h3,{id:`getlistunique`,children:(0,c.jsx)(n.code,{children:`getListUnique`})}),`
`,(0,c.jsxs)(n.p,{children:[`Orchestrates a merge between the tracked files (`,(0,c.jsx)(n.code,{children:`getList`}),`) and the current status (`,(0,c.jsx)(n.code,{children:`getListPorcelain`}),`). It ensures each file is represented only once, prioritizing status information if available.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`filter: (file: string) => boolean`}),` — Required callback function to filter the unified list.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`GitFileList`}),` — A deduplicated list of files combining baseline and changed states.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const unique = GitRead.getListUnique((f) => f.includes('src/'))
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
`,(0,c.jsx)(n.h3,{id:`getlistbydirectory`,children:(0,c.jsx)(n.code,{children:`getListByDirectory`})}),`
`,(0,c.jsxs)(n.p,{children:[`A convenience method for retrieving unique file lists specifically from a given directory, filtered to include only `,(0,c.jsx)(n.code,{children:`.ts`}),` files and excluding `,(0,c.jsx)(n.code,{children:`.test.ts`}),` files.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`directory: string | RegExp`}),` — The target directory path or a pattern to match against file paths.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`GitFileList`})]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const classes = GitRead.getListByDirectory('/classes/')
/**
 * [
 *   {
 *     path: 'classes/GitRead.ts',
 *     ...
 *   }
 * ]
 */
`})}),`
`,(0,c.jsx)(n.h2,{id:`utility-methods`,children:`Utility Methods`}),`
`,(0,c.jsx)(n.h3,{id:`getclasseslist`,children:(0,c.jsx)(n.code,{children:`getClassesList`})}),`
`,(0,c.jsxs)(n.p,{children:[`Gets all non-test TypeScript files in the `,(0,c.jsx)(n.code,{children:`/classes/`}),` directory.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const classes = GitRead.getClassesList()
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
`,(0,c.jsx)(n.h3,{id:`getfunctionslist`,children:(0,c.jsx)(n.code,{children:`getFunctionsList`})}),`
`,(0,c.jsxs)(n.p,{children:[`Gets all non-test TypeScript files in the `,(0,c.jsx)(n.code,{children:`/functions/`}),` directory.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const funcs = GitRead.getFunctionsList()
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
`,(0,c.jsx)(n.h3,{id:`getfilespath`,children:(0,c.jsx)(n.code,{children:`getFilesPath`})}),`
`,(0,c.jsx)(n.p,{children:`Returns an array of all tracked file paths in the repository.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const paths = GitRead.getFilesPath()
// ['src/index.ts', 'package.json', ...]
`})}),`
`,(0,c.jsx)(n.h3,{id:`getfilesporcelain`,children:(0,c.jsx)(n.code,{children:`getFilesPorcelain`})}),`
`,(0,c.jsxs)(n.p,{children:[`Returns the raw output of `,(0,c.jsx)(n.code,{children:`git status --porcelain`}),` as an array of strings.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const porcelain = GitRead.getFilesPorcelain()
// [' M src/index.ts', '?? new-file.txt']
`})}),`
`,(0,c.jsx)(n.h3,{id:`getfiledate`,children:(0,c.jsx)(n.code,{children:`getFileDate`})}),`
`,(0,c.jsx)(n.p,{children:`Returns the date of the last commit for a specific file.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`filePath: string`}),` — The path to the target file.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const date = GitRead.getFileDate('src/index.ts')
// '2024-03-20 12:00:00 +0300'
`})}),`
`,(0,c.jsx)(n.h3,{id:`getdirprefix`,children:(0,c.jsx)(n.code,{children:`getDirPrefix`})}),`
`,(0,c.jsx)(n.p,{children:`Returns the current directory's prefix within the Git repository.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const prefix = GitRead.getDirPrefix()
// 'packages/scripts/'
`})}),`
`,(0,c.jsx)(n.h3,{id:`getdate`,children:(0,c.jsx)(n.code,{children:`getDate`})}),`
`,(0,c.jsx)(n.p,{children:`Formats a date string into a standardized full format.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`date?: string`}),` — The date string to format (optional).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const formatted = GitRead.getDate('2024-03-20')
// '2024-03-20 00:00:00'
`})}),`
`,(0,c.jsx)(n.h3,{id:`filterbydirectory`,children:(0,c.jsx)(n.code,{children:`filterByDirectory`})}),`
`,(0,c.jsxs)(n.p,{children:[`Filters a `,(0,c.jsx)(n.code,{children:`GitFileList`}),` to include only items that belong to the current directory prefix.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: GitFileList`}),` — The list of files to filter.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const filtered = GitRead.filterByDirectory(myList)
`})}),`
`,(0,c.jsx)(n.h3,{id:`mergeunique`,children:(0,c.jsx)(n.code,{children:`mergeUnique`})}),`
`,(0,c.jsxs)(n.p,{children:[`Merges two `,(0,c.jsx)(n.code,{children:`GitFileList`}),` arrays, ensuring each file path is unique.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listA: GitFileList`}),` — First list.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listB: GitFileList`}),` — Second list.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const merged = GitRead.mergeUnique(list1, list2)
`})}),`
`,(0,c.jsx)(n.h3,{id:`splitpath`,children:(0,c.jsx)(n.code,{children:`splitPath`})}),`
`,(0,c.jsx)(n.p,{children:`Splits a file path string into an array of path segments.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — The path to split.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const parts = GitRead.splitPath('src/classes/GitRead.ts')
// ['src', 'classes', 'GitRead.ts']
`})}),`
`,(0,c.jsx)(n.h2,{id:`data-structures`,children:`Data Structures`}),`
`,(0,c.jsx)(n.h3,{id:`gitfileitem`,children:(0,c.jsx)(n.code,{children:`GitFileItem`})}),`
`,(0,c.jsx)(n.p,{children:`The primary object representing a file's state in Git:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — The relative path to the file.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathByOS: string[]`}),` — The file path split into system-agnostic segments.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathFull: string`}),` — The full path including any repository-wide directory prefixes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`date: string`}),` — The last modification date (standardized).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`status?: GitStatus`}),` — The Git status code (e.g., `,(0,c.jsx)(n.code,{children:`'M'`}),`, `,(0,c.jsx)(n.code,{children:`'A'`}),`, `,(0,c.jsx)(n.code,{children:`'??'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`gitstatus`,children:(0,c.jsx)(n.code,{children:`GitStatus`})}),`
`,(0,c.jsx)(n.p,{children:`Enum representing common Git status codes:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`MODIFIED`}),` (`,(0,c.jsx)(n.code,{children:`'M'`}),`) — Existing file has been changed.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`ADDED`}),` (`,(0,c.jsx)(n.code,{children:`'A'`}),`) — New file added to the index.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`DELETED`}),` (`,(0,c.jsx)(n.code,{children:`'D'`}),`) — File has been removed.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`UNTRACKED`}),` (`,(0,c.jsx)(n.code,{children:`'??'`}),`) — New file not yet tracked by Git.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`RENAMED`}),` (`,(0,c.jsx)(n.code,{children:`'R'`}),`) — File has been moved or renamed.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`getting-modified-files`,children:`Getting Modified Files`}),`
`,(0,c.jsx)(n.p,{children:`Retrieve a list of files that have been modified or added to the repository.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { GitRead } from '@dxtmisha/scripts'

const modifiedFiles = GitRead.getListPorcelain()
console.log(modifiedFiles)
`})}),`
`,(0,c.jsx)(n.h3,{id:`filtering-classes`,children:`Filtering Classes`}),`
`,(0,c.jsx)(n.p,{children:`Get only the class files for a specific module.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const componentClasses = GitRead.getListUnique(
  (file) => file.includes('packages/ui/src/classes/')
)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
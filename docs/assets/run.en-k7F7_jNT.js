import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Functions/run - Execute Package Command`}),`
`,(0,c.jsx)(t.h1,{id:`run`,children:(0,c.jsx)(t.code,{children:`run`})}),`
`,(0,c.jsx)(t.p,{children:`Asynchronous utility function to execute a shell command inside the working directory of a specified package.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`packageFile: PackageFile`}),` — Package file representation object providing the package name and directory path.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`command: string`}),` — Shell command string to execute.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`showStdout: boolean`}),` — `,(0,c.jsxs)(t.em,{children:[`(optional, default `,(0,c.jsx)(t.code,{children:`false`}),`)`]}),` Flag to output `,(0,c.jsx)(t.code,{children:`stdout`}),` to console.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`showStderr: boolean`}),` — `,(0,c.jsxs)(t.em,{children:[`(optional, default `,(0,c.jsx)(t.code,{children:`false`}),`)`]}),` Flag to output `,(0,c.jsx)(t.code,{children:`stderr`}),` to console.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<boolean>`}),` — Resolves to `,(0,c.jsx)(t.code,{children:`true`}),` if the command completed successfully (exit code 0), or `,(0,c.jsx)(t.code,{children:`false`}),` on failure.`]}),`
`,(0,c.jsx)(t.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsxs)(t.p,{children:[`The function executes the command asynchronously using `,(0,c.jsx)(t.code,{children:`child_process.exec`}),` within the package directory resolved via `,(0,c.jsx)(t.code,{children:`packageFile.getDir()`}),`. If execution errors occur, the function catches the exception, logs error details, and returns `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PackageFile, run } from '@dxtmisha/scripts'

const packageFile = new PackageFile(['packages', 'core'])
const success = await run(packageFile, 'npm run build', true, true)

if (success) {
  console.log('Package built successfully')
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
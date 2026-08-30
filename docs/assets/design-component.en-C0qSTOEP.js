import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/7. Commands/dxt-component - Component Scaffolding`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-component`,children:`dxt-component`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`dxt-component`}),` command provides automated scaffolding for new design system components. It utilizes the `,(0,c.jsx)(t.code,{children:`ComponentCreator`}),` and `,(0,c.jsx)(t.code,{children:`ComponentItem`}),` classes to automatically detect empty folders inside `,(0,c.jsx)(t.code,{children:`src/components/`}),` and bootstrap a complete set of boilerplate template files for each new component.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Directory Scanning`}),`: Recursively scans `,(0,c.jsx)(t.code,{children:`src/components/`}),` to discover all empty component folders.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Comprehensive Template Scaffolding`}),`: Scaffolds 8 essential component files, including Vue SFC code, TypeScript types, index entry points, Storybook MDX/Stories, and AI prompts.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dynamic Placeholder Replacement`}),`: Automatically substitutes component names (in PascalCase and kebab-case), current project name from `,(0,c.jsx)(t.code,{children:`package.json`}),`, and relative paths.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Permission Management`}),`: Automatically sets proper file access permissions for generated files via `,(0,c.jsx)(t.code,{children:`PropertiesFile.chmod`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Find Empty Directories`}),`: The `,(0,c.jsx)(t.code,{children:`ComponentCreator`}),` class scans `,(0,c.jsx)(t.code,{children:`src/components/`}),` via `,(0,c.jsx)(t.code,{children:`PropertiesFile.readDirOnlyRecursive`}),` and filters for folders containing zero files.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Initialize Scaffolder`}),`: For each empty directory, it instantiates `,(0,c.jsx)(t.code,{children:`ComponentItem`}),`, which loads built-in templates (`,(0,c.jsx)(t.code,{children:`componentDocTemplates`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Contextual Replacements`}),`: Performs string replacements across templates and file names:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ComponentDoc`}),` -> PascalCase component name (e.g., `,(0,c.jsx)(t.code,{children:`Button`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`component-doc`}),` -> kebab-case component name (e.g., `,(0,c.jsx)(t.code,{children:`button`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[project]`}),` -> package name from `,(0,c.jsx)(t.code,{children:`package.json`}),` (e.g., `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[path]`}),` -> relative component directory path (e.g., `,(0,c.jsx)(t.code,{children:`src/components/Button`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`_.gitignore.txt`}),` -> `,(0,c.jsx)(t.code,{children:`.gitignore`})]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Write Files`}),`: Processed files are written into the target component folder with proper execution/read permissions.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(t.p,{children:[`Create an empty folder for your new component in `,(0,c.jsx)(t.code,{children:`src/components/`}),` (e.g., `,(0,c.jsx)(t.code,{children:`src/components/Badge`}),`) and run:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-component
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Or configure it in the package's `,(0,c.jsx)(t.code,{children:`package.json`}),` scripts:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "scripts": {
    "component": "dxt-component"
  }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`generated-file-structure`,children:`Generated File Structure`}),`
`,(0,c.jsx)(t.p,{children:`For each detected component folder, 8 files are generated:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[ComponentName].vue`}),` — Base Vue 3 SFC component with `,(0,c.jsx)(t.code,{children:`<script setup lang="ts">`}),`, types import, and base `,(0,c.jsx)(t.code,{children:`<style lang="scss">`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index.ts`}),` — Component entry point with named export (`,(0,c.jsx)(t.code,{children:`export const [ComponentName]`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`types.ts`}),` — TypeScript definitions for `,(0,c.jsx)(t.code,{children:`Props`}),`, `,(0,c.jsx)(t.code,{children:`Emits`}),`, `,(0,c.jsx)(t.code,{children:`Slots`}),`, and defaults.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`materials/prompt.md`}),` — AI prompt instructions for component materials.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`subcomponents/.gitignore`}),` — Gitignore file for nested subcomponents directory.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`wiki/[ComponentName].mdx`}),` — Storybook MDX documentation file.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`wiki/[ComponentName].stories.ts`}),` — Storybook Vue 3 stories definition for component preview.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`wiki/prompt.md`}),` — AI prompt instructions for component Wiki documentation.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
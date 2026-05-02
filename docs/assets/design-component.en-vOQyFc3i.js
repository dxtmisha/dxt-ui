import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/bin/dxt-component - Component Scaffolding`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-component`,children:`dxt-component`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`dxt-component`}),` command provides fast structural scaffolding for the design system. It uses `,(0,c.jsx)(n.code,{children:`ComponentCreator`}),` and `,(0,c.jsx)(n.code,{children:`ComponentItem`}),` to automatically identify and bootstrap completely empty component directories.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Directory Scaffolding`}),`: Detects empty structural folders inside `,(0,c.jsx)(n.code,{children:`src/components`}),` and scaffolds boilerplate vue code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dynamic Template Injection`}),`: Injects generic placeholders (such as `,(0,c.jsx)(n.code,{children:`ComponentDoc`}),` and current `,(0,c.jsx)(n.code,{children:`[project]`}),` name) using the internal system templates seamlessly.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsx)(n.p,{children:`The scaffolding workflow automates repetitive folder structures:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`The `,(0,c.jsx)(n.code,{children:`ComponentCreator`}),` acts as a scanner, verifying all nested structures strictly placed inside `,(0,c.jsx)(n.code,{children:`src/components`}),`. It flags directories that are completely empty.`]}),`
`,(0,c.jsxs)(n.li,{children:[`For each empty directory, it instantiates the `,(0,c.jsx)(n.code,{children:`ComponentItem`}),` class which loads pre-defined component template files.`]}),`
`,(0,c.jsx)(n.li,{children:`It performs string replacements substituting marker placeholders with the actual derived component names and active project context, subsequently writing the fresh boilerplate directly to the file system.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`how-to-configure-and-run`,children:`How to configure and run`}),`
`,(0,c.jsxs)(n.p,{children:[`No complex configurations are necessary for pure structural scaffolding. The tool dynamically reads your `,(0,c.jsx)(n.code,{children:`package.json`}),` to extract the `,(0,c.jsx)(n.code,{children:`name`}),` field, which it will automatically inject in place of any `,(0,c.jsx)(n.code,{children:`[project]`}),` template markers.`]}),`
`,(0,c.jsx)(n.p,{children:`To detect empty folders and initiate base component creation across the workspace, simply execute:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-component
`})}),`
`,(0,c.jsx)(n.h2,{id:`generated-file-structure`,children:`Generated File Structure`}),`
`,(0,c.jsx)(n.p,{children:`When a new component is scaffolded, it inherits the structure from internal templates:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`[ComponentName].vue`}),`: Base Vue 3 component with `,(0,c.jsx)(n.code,{children:`<script setup>`}),`, types import, and `,(0,c.jsx)(n.code,{children:`<style lang="scss">`}),` scaffolding.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index.ts`}),`: Standard Vue component export mapping (`,(0,c.jsx)(n.code,{children:`export const [ComponentName]`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`types.ts`}),`: TypeScript definitions for standard `,(0,c.jsx)(n.code,{children:`Props`}),`, `,(0,c.jsx)(n.code,{children:`Emits`}),`, `,(0,c.jsx)(n.code,{children:`Slots`}),`, and `,(0,c.jsx)(n.code,{children:`Defaults`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`subcomponents/`}),`: An empty directory (with `,(0,c.jsx)(n.code,{children:`.gitignore`}),`) ready for internal nested components.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`wiki/[ComponentName].mdx`}),`: A ready-to-run Storybook MDX documentation file utilizing `,(0,c.jsx)(n.code,{children:`@dxtmisha/wiki/storybook`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`wiki/[ComponentName].stories.ts`}),`: The actual Storybook Vue 3 implementation script defining the component's preview.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`wiki/run.ts`}),`: A shortcut executable node script designed to quickly trigger the `,(0,c.jsx)(n.code,{children:`dxt-component-wiki`}),` AI generation command specifically for this component.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/scripts/bin/dxt-component - Component Scaffolding"}),`
`,e.jsx(n.h1,{id:"dxt-component",children:"dxt-component"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"dxt-component"})," command provides fast structural scaffolding for the design system. It uses ",e.jsx(n.code,{children:"ComponentCreator"})," and ",e.jsx(n.code,{children:"ComponentItem"})," to automatically identify and bootstrap completely empty component directories."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automated Directory Scaffolding"}),": Detects empty structural folders inside ",e.jsx(n.code,{children:"src/components"})," and scaffolds boilerplate vue code."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dynamic Template Injection"}),": Injects generic placeholders (such as ",e.jsx(n.code,{children:"ComponentDoc"})," and current ",e.jsx(n.code,{children:"[project]"})," name) using the internal system templates seamlessly."]}),`
`]}),`
`,e.jsx(n.h2,{id:"how-does-it-work",children:"How does it work?"}),`
`,e.jsx(n.p,{children:"The scaffolding workflow automates repetitive folder structures:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"ComponentCreator"})," acts as a scanner, verifying all nested structures strictly placed inside ",e.jsx(n.code,{children:"src/components"}),". It flags directories that are completely empty."]}),`
`,e.jsxs(n.li,{children:["For each empty directory, it instantiates the ",e.jsx(n.code,{children:"ComponentItem"})," class which loads pre-defined component template files."]}),`
`,e.jsx(n.li,{children:"It performs string replacements substituting marker placeholders with the actual derived component names and active project context, subsequently writing the fresh boilerplate directly to the file system."}),`
`]}),`
`,e.jsx(n.h2,{id:"how-to-configure-and-run",children:"How to configure and run"}),`
`,e.jsxs(n.p,{children:["No complex configurations are necessary for pure structural scaffolding. The tool dynamically reads your ",e.jsx(n.code,{children:"package.json"})," to extract the ",e.jsx(n.code,{children:"name"})," field, which it will automatically inject in place of any ",e.jsx(n.code,{children:"[project]"})," template markers."]}),`
`,e.jsx(n.p,{children:"To detect empty folders and initiate base component creation across the workspace, simply execute:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx dxt-component
`})}),`
`,e.jsx(n.h2,{id:"generated-file-structure",children:"Generated File Structure"}),`
`,e.jsx(n.p,{children:"When a new component is scaffolded, it inherits the structure from internal templates:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"[ComponentName].vue"}),": Base Vue 3 component with ",e.jsx(n.code,{children:"<script setup>"}),", types import, and ",e.jsx(n.code,{children:'<style lang="scss">'})," scaffolding."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"}),": Standard Vue component export mapping (",e.jsx(n.code,{children:"export const [ComponentName]"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"types.ts"}),": TypeScript definitions for standard ",e.jsx(n.code,{children:"Props"}),", ",e.jsx(n.code,{children:"Emits"}),", ",e.jsx(n.code,{children:"Slots"}),", and ",e.jsx(n.code,{children:"Defaults"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"subcomponents/"}),": An empty directory (with ",e.jsx(n.code,{children:".gitignore"}),") ready for internal nested components."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"wiki/[ComponentName].mdx"}),": A ready-to-run Storybook MDX documentation file utilizing ",e.jsx(n.code,{children:"@dxtmisha/wiki/storybook"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"wiki/[ComponentName].stories.ts"}),": The actual Storybook Vue 3 implementation script defining the component's preview."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"wiki/run.ts"}),": A shortcut executable node script designed to quickly trigger the ",e.jsx(n.code,{children:"dxt-component-wiki"})," AI generation command specifically for this component."]}),`
`]})]})}function p(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{p as default};

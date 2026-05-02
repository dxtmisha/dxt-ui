import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/# UI/# Creating and Managing Components`}),`
`,(0,c.jsx)(n.h1,{id:`creating-and-managing-components`,children:`Creating and Managing Components`}),`
`,(0,c.jsxs)(n.p,{children:[`The development process in the `,(0,c.jsx)(n.strong,{children:`DXT UI`}),` system is as automated as possible using code generation scripts. The core idea is that the developer describes the component metadata, and the system automatically creates and updates the necessary files (props, styles, templates).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm run ui
npm run ui [ComponentName]
`})}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`npm run ui`}),` command is the main tool for working with components. It automatically scans directories, finds new or modified folders, and synchronizes all related files (`,(0,c.jsx)(n.code,{children:`props.ts`}),`, `,(0,c.jsx)(n.code,{children:`styleToken.scss`}),`, `,(0,c.jsx)(n.code,{children:`.vue`}),`) based on the data in `,(0,c.jsx)(n.code,{children:`properties.json`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`To create or update a specific component, simply run the command after making changes to its folder.`}),`
`,(0,c.jsx)(n.li,{children:`To fully rebuild the library and update all exports, run the command without parameters.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`creating-a-new-component`,children:`Creating a New Component`}),`
`,(0,c.jsx)(n.p,{children:`To create a new component from scratch, follow these steps:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Create Directory`}),`: In the `,(0,c.jsx)(n.code,{children:`src/components/Ui/`}),` folder (or in your project), create a new folder with the name of the component (e.g., `,(0,c.jsx)(n.code,{children:`MyButton`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Run Initialization`}),`: Execute the `,(0,c.jsx)(n.code,{children:`ui`}),` command (or `,(0,c.jsx)(n.code,{children:`npm run ui`}),`). The script will automatically detect the new folder and create the necessary files inside it.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm run ui
`})}),`
`,(0,c.jsxs)(n.p,{children:[`The system will create a `,(0,c.jsx)(n.code,{children:`properties.json`}),` file with a basic structure, along with all supporting files (props, styles, vue).`]}),`
`,(0,c.jsxs)(n.ol,{start:`3`,children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Fill Properties`}),`: Edit the created `,(0,c.jsx)(n.code,{children:`properties.json`}),` file by adding modifiers and tokens.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Synchronize Changes`}),`: Run the `,(0,c.jsx)(n.code,{children:`ui`}),` command again to update all associated files based on your changes.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm run ui
`})}),`
`,(0,c.jsx)(n.h3,{id:`generation-result`,children:`Generation Result`}),`
`,(0,c.jsx)(n.p,{children:`The system will automatically create the following files based on your metadata and the selected constructor:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props.ts`}),` — typed properties extending the constructor and defining default values.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styleToken.scss`}),` — SCSS tokens and mixins.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`DesignComponent.vue`}),` — main Vue component with initialization logic.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index.ts`}),`, `,(0,c.jsx)(n.code,{children:`wiki.ts`}),`, `,(0,c.jsx)(n.code,{children:`stories.ts`}),` — export, documentation, and stories files.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`In the generated `,(0,c.jsx)(n.code,{children:`.vue`}),` file, when initializing the `,(0,c.jsx)(n.code,{children:`Design`}),` class (e.g., `,(0,c.jsx)(n.code,{children:`BarsDesign`}),`), you can pass a `,(0,c.jsx)(n.code,{children:`components`}),` object. This allows you to connect child components required for the current one to function (e.g., icons or progress indicators).`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Only connect the components that are actually used. If a dependent component (e.g., `,(0,c.jsx)(n.code,{children:`ripple`}),`) is not needed in your implementation, it can simply be omitted from the object.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`To manage the properties of child components, use the `,(0,c.jsx)(n.code,{children:`compMod`}),` parameter. This allows you to pass default values for the props of internal elements (e.g., setting the size or style of a button within a navigation bar).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const design = new BarsDesign('my.bars', props, {
  emits,
  classes: classesToken,
  components: {
    button: MyButton
  },
  compMod: {
    button: {
      text: true,
      size: 'xs',
      inverse: true
    }
  }
})

### Working with Props and Defaults

The \`props.ts\` file contains a \`defaults\` object that combines standard values from the constructor with settings specific to your component.

Example in the \`props.ts\` file:
\`\`\`typescript
export const defaults: object = {
  ...defaultsBars,
  iconBack: 'arrow_back',
  paddingByIndent: true
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`updating-a-component`,children:`Updating a Component`}),`
`,(0,c.jsxs)(n.p,{children:[`If you need to change component properties (add a modifier, change a token, or a CSS value), follow the `,(0,c.jsx)(n.strong,{children:`"Source of Truth"`}),` rule:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Edit the `,(0,c.jsx)(n.code,{children:`properties.json`}),` file.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Run the command again:`,`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm run ui MyButton
`})}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`The script will automatically update `,(0,c.jsx)(n.code,{children:`props.ts`}),` (adding new types), `,(0,c.jsx)(n.code,{children:`styleToken.scss`}),` (updating variables), and templates while maintaining architectural integrity.`]}),`
`,(0,c.jsx)(n.h2,{id:`rebuilding-the-entire-library`,children:`Rebuilding the Entire Library`}),`
`,(0,c.jsxs)(n.p,{children:[`When working on several components at once or if you want to update global library exports (media, plugins, types), use the `,(0,c.jsx)(n.code,{children:`ui`}),` command without arguments:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm run ui
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
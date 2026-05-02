import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/# UI/# Project Setup`}),`
`,(0,c.jsx)(n.h1,{id:`project-setup`,children:`Project Setup`}),`
`,(0,c.jsx)(n.p,{children:`Before you start designing components, you need to prepare the work environment and configure the project files. The system requires key ecosystem packages and specific builder settings.`}),`
`,(0,c.jsx)(n.h2,{id:`1-installing-dependencies`,children:`1. Installing Dependencies`}),`
`,(0,c.jsxs)(n.p,{children:[`Install the full set of necessary `,(0,c.jsx)(n.code,{children:`@dxtmisha`}),` packages using your package manager:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm install @dxtmisha/configuration @dxtmisha/constructor @dxtmisha/functional @dxtmisha/functional-basic @dxtmisha/media @dxtmisha/styles @dxtmisha/scripts @dxtmisha/test @dxtmisha/wiki
`})}),`
`,(0,c.jsx)(n.h2,{id:`2-project-configuration-designconfigjson`,children:`2. Project Configuration (design.config.json)`}),`
`,(0,c.jsxs)(n.p,{children:[`Create a `,(0,c.jsx)(n.code,{children:`design.config.json`}),` file in the root directory of your project. This file defines global parameters for your design system, such as project name and documentation language.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "project": "Ui",
  "name": "my-design",
  "wikiLanguage": "en"
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.em,{children:[`Note: You can use the `,(0,c.jsx)(n.code,{children:`"extends"`}),` property to inherit configuration from other packages.`]})}),`
`,(0,c.jsx)(n.h2,{id:`3-configuring-vite-viteconfigts`,children:`3. Configuring Vite (vite.config.ts)`}),`
`,(0,c.jsxs)(n.p,{children:[`For correct building, it is recommended to use the pre-defined `,(0,c.jsx)(n.code,{children:`viteComponents`}),` object from the `,(0,c.jsx)(n.code,{children:`@dxtmisha/configuration`}),` package. It contains all necessary plugins and settings for working with components and documentation.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { viteComponents } from '@dxtmisha/configuration/viteComponents'

// https://vite.dev/config/
export default viteComponents
`})}),`
`,(0,c.jsx)(n.h2,{id:`4-configuring-typescript-tsconfigappjson`,children:`4. Configuring TypeScript (tsconfig.app.json)`}),`
`,(0,c.jsxs)(n.p,{children:[`Add MDX file support to your TypeScript configuration. To do this, add `,(0,c.jsx)(n.code,{children:`@types/mdx`}),` to the `,(0,c.jsx)(n.code,{children:`types`}),` array in the `,(0,c.jsx)(n.code,{children:`compilerOptions`}),` section.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "compilerOptions": {
    "types": [
      "@types/mdx"
    ]
  }
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`5-adding-run-commands-packagejson`,children:`5. Adding Run Commands (package.json)`}),`
`,(0,c.jsxs)(n.p,{children:[`Add the following scripts to your `,(0,c.jsx)(n.code,{children:`package.json`}),` to automate code generation, documentation, and typing processes:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "scripts": {
    "ui": "dxt-ui",
    "wiki-storm": "dxt-wiki-storm",
    "types": "dxt-types"
  }
}
`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`ui`}),`: Launches the main UI component generation cycle.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`wiki-storm`}),`: Generates and updates files for Wiki/Storybook.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`types`}),`: Updates data types based on the current configuration.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
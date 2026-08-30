import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/1. UI/1. Project Setup`}),`
`,(0,c.jsx)(t.h1,{id:`project-setup`,children:`Project Setup`}),`
`,(0,c.jsx)(t.p,{children:`Before you start designing components, you need to prepare the work environment and configure the project files. The system requires key ecosystem packages and specific builder settings.`}),`
`,(0,c.jsx)(t.h2,{id:`1-installing-dependencies`,children:`1. Installing Dependencies`}),`
`,(0,c.jsxs)(t.p,{children:[`Install the full set of necessary `,(0,c.jsx)(t.code,{children:`@dxtmisha`}),` packages using your package manager:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm install @dxtmisha/configuration @dxtmisha/constructor @dxtmisha/functional @dxtmisha/functional-basic @dxtmisha/media @dxtmisha/styles @dxtmisha/scripts @dxtmisha/test @dxtmisha/wiki
`})}),`
`,(0,c.jsx)(t.h2,{id:`2-project-configuration-designconfigjson`,children:`2. Project Configuration (design.config.json)`}),`
`,(0,c.jsxs)(t.p,{children:[`Create a `,(0,c.jsx)(t.code,{children:`design.config.json`}),` file in the root directory of your project. This file defines global parameters for your design system, such as project name and documentation language.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "project": "Ui",
  "name": "my-design",
  "wikiLanguage": "en"
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.em,{children:[`Note: You can use the `,(0,c.jsx)(t.code,{children:`"extends"`}),` property to inherit configuration from other packages.`]})}),`
`,(0,c.jsx)(t.h2,{id:`3-configuring-vite-viteconfigts`,children:`3. Configuring Vite (vite.config.ts)`}),`
`,(0,c.jsxs)(t.p,{children:[`For correct building, it is recommended to use the pre-defined `,(0,c.jsx)(t.code,{children:`viteComponents`}),` object from the `,(0,c.jsx)(t.code,{children:`@dxtmisha/configuration`}),` package. It contains all necessary plugins and settings for working with components and documentation.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { viteComponents } from '@dxtmisha/configuration/viteComponents'

// https://vite.dev/config/
export default viteComponents
`})}),`
`,(0,c.jsx)(t.h2,{id:`4-configuring-typescript-tsconfigappjson`,children:`4. Configuring TypeScript (tsconfig.app.json)`}),`
`,(0,c.jsxs)(t.p,{children:[`Add MDX file support to your TypeScript configuration. To do this, add `,(0,c.jsx)(t.code,{children:`@types/mdx`}),` to the `,(0,c.jsx)(t.code,{children:`types`}),` array in the `,(0,c.jsx)(t.code,{children:`compilerOptions`}),` section.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "compilerOptions": {
    "types": [
      "@types/mdx"
    ]
  }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`5-adding-run-commands-packagejson`,children:`5. Adding Run Commands (package.json)`}),`
`,(0,c.jsxs)(t.p,{children:[`Add the following scripts to your `,(0,c.jsx)(t.code,{children:`package.json`}),` to automate code generation, documentation, and typing processes:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "scripts": {
    "ui": "dxt-ui",
    "wiki-storm": "dxt-wiki-storm",
    "types": "npm run ui && npm run build && npm run wiki-storm && dxt-types",
    "screenshot": "dxt-screenshot",
    "prepublishOnly": "npm run ui && npm run build && npm run wiki-storm && dxt-types-save"
  }
}
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`ui`}),`: Launches the main UI component generation cycle.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`wiki-storm`}),`: Generates and updates files for Wiki/Storybook.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`types`}),`: Runs the full build cycle and updates data types.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`screenshot`}),`: Runs visual regression testing and generates screenshots.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`prepublishOnly`}),`: Performs a full build, documentation generation, and type snapshot saving before publishing the package.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
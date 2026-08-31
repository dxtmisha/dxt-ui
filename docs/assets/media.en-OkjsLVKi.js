import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/1. UI/2. Global Tokens and Media`}),`
`,(0,c.jsx)(t.h1,{id:`global-tokens-and-media-srcmedia`,children:`Global Tokens and Media (src/media)`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`src/media`}),` directory is intended for storing global design tokens and media assets (such as icons) for your design system. The directory structure and set of tokens are flexible and customized for each project based on design requirements.`]}),`
`,(0,c.jsx)(t.h2,{id:`1-directory-structure`,children:`1. Directory Structure`}),`
`,(0,c.jsx)(t.p,{children:`Example of a basic layout:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:`src/media/
├── icons/                   # Project SVG icons
│   └── *.svg
├── tokens/                  # JSON token files (colors, grids, spacing, etc.)
│   └── *.json
└── properties.json          # Main global token configuration manifest
`})}),`
`,(0,c.jsx)(t.h2,{id:`2-token-configuration-propertiesjson`,children:`2. Token Configuration (properties.json)`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`src/media/properties.json`}),` file links your project tokens together, organizes them by category, and controls how they are compiled:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "ref": {
    "value": {
      "file|ref": "tokens/ref.json"
    },
    "_type": "var",
    "_category": "root"
  },
  "sys": {
    "value": {
      "file|sys": "tokens/sys.json"
    },
    "_type": "var",
    "_category": "root"
  },
  "color": {
    "value": {
      "file|color": "tokens/color.json"
    },
    "_category": "class"
  },
  "dark": {
    "value": {
      "file|dark": "tokens/dark.json"
    },
    "_category": "theme"
  }
}
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"file|<name>": "path.json"`}),` — imports an external JSON token file.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"_type": "var"`}),` — exports tokens as CSS variables.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"_category": "root"`}),` — root system variables.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"_category": "class"`}),` — reusable style presets for components.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"_category": "theme"`}),` — theme override tokens (e.g., dark mode).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`3-adding-icons-icons`,children:`3. Adding Icons (icons)`}),`
`,(0,c.jsx)(t.p,{children:`To add new icons:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Place `,(0,c.jsx)(t.code,{children:`.svg`}),` files into the `,(0,c.jsx)(t.code,{children:`src/media/icons/`}),` folder.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Run code generation:`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run ui
`})}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`The script will automatically discover all icons, generate asynchronous imports, and register them via `,(0,c.jsx)(t.code,{children:`Icons`}),`. The icon will then be available by file name in all components:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<d1-button icon="my-icon">Button</d1-button>
`})}),`
`,(0,c.jsx)(t.h2,{id:`4-synchronization`,children:`4. Synchronization`}),`
`,(0,c.jsx)(t.p,{children:`After modifying tokens or adding new icons, run:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run ui
`})}),`
`,(0,c.jsxs)(t.p,{children:[`This command recompiles SCSS mixins, updates `,(0,c.jsx)(t.code,{children:`ui-properties.scss`}),`, registers icons, and synchronizes TypeScript types.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
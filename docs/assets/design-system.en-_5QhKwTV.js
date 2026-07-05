import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/# Design System`}),`
`,(0,c.jsx)(n.h1,{id:`working-with-the-design-system`,children:`Working with the Design System`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`@dxtmisha/scripts`}),` package is a powerful tool and the automation "brain" of the entire `,(0,c.jsx)(n.strong,{children:`DXT UI`}),` design system. It is a set of utilities and CLI commands that take over the routine work of creating, linking, testing, and documenting components.`]}),`
`,(0,c.jsx)(n.p,{children:`The main goal of this package is to provide developers and business stakeholders with a unified, automated process for UI kit development, where the human factor and mistakes in writing boilerplate code are reduced to zero.`}),`
`,(0,c.jsxs)(n.p,{children:[`The special value of the package lies in its role as a `,(0,c.jsx)(n.strong,{children:`bridge between abstract business logic and visual design`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`separation-of-logic-and-design`,children:`Separation of Logic and Design`}),`
`,(0,c.jsx)(n.p,{children:`The architecture of DXT UI is built on strict separation:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Abstract Logic (Constructor)`}),` — isolated classes that manage ARIA attributes, events, focus, and states, but know nothing about colors, sizes, or CSS classes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Visual Design`}),` — the concrete implementation (tokens, paddings, palettes).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`scripts`}),` package takes on the task of automatically and flawlessly "stitching" these two worlds together.`]}),`
`,(0,c.jsx)(n.h2,{id:`how-it-works-under-the-hood`,children:`How it works under the hood:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`properties.json`}),` as the Single Source of Truth:`]}),`
The developer or designer describes only the visual properties of the component (tokens, colors, sizes, states like `,(0,c.jsx)(n.code,{children:`:hover`}),`/`,(0,c.jsx)(n.code,{children:`:active`}),`, modifiers) in a single configuration file `,(0,c.jsx)(n.code,{children:`properties.json`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parsing and Scaffolding:`}),`
The `,(0,c.jsx)(n.code,{children:`scripts`}),` package reads this configuration file and automatically generates all the connecting infrastructure:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props.ts`}),` — TypeScript interfaces that extend the base properties from the Constructor, adding precise types for the design (e.g., `,(0,c.jsx)(n.code,{children:`size: 'sm' | 'md'`}),`) and default values.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styleToken.scss`}),` — ready-made SCSS mixins and CSS variables (design tokens).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`DesignComponent.vue`}),` — the Vue template where the magic happens: the script generates computed BEM classes based on the properties and passes them into the abstract `,(0,c.jsx)(n.code,{children:`Design`}),` class from the Constructor (dependency injection).`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsxs)(n.strong,{children:[`Type Orchestration (`,(0,c.jsx)(n.code,{children:`dxt-constructor`}),`):`]}),`
Adding a new property to `,(0,c.jsx)(n.code,{children:`properties.json`}),` automatically updates the project's global interfaces. The IDE immediately starts providing autocomplete suggestions for new properties when using the component (e.g., via `,(0,c.jsx)(n.code,{children:`web-types.json`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`AI-Assisted Documentation Generation (AI-Docs):`}),`
Integration with artificial intelligence (Google Gemini / Anthropic Claude) allows the package to automatically generate reference materials, prop descriptions, and code examples directly based on `,(0,c.jsx)(n.code,{children:`properties.json`}),` and TypeScript types.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`what-does-this-mean-for-business-and-the-development-team`,children:`What does this mean for business and the development team?`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`High development speed:`}),` The focus shifts from writing boilerplate to creating the actual product. Creating a new component or modifier takes seconds.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Guaranteed consistency:`}),` Missing exports, typos in CSS class names, or discrepancies between TypeScript and SCSS are eliminated. The logic (e.g., ARIA accessibility) always works perfectly as it is inherited from the Constructor, while the visual part 100% matches the tokens.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ease of maintenance and scaling:`}),` To change the logic for generating CSS classes or the folder structure across the entire library, you only need to modify the logic of the `,(0,c.jsx)(n.code,{children:`scripts`}),` package, after which the entire UI library is rebuilt with a single command.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Design Integration (Figma):`}),` Built-in Figma API clients allow extracting frame structures, design tokens, and styles directly from mockups, automatically converting them into code.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`main-commands-cli`,children:`Main Commands (CLI)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-ui [ComponentName]`})}),`
The main orchestrator. Scans `,(0,c.jsx)(n.code,{children:`properties.json`}),` files, generates templates, "stitches" them with Constructor classes, and updates props and styles.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-constructor`})}),`
Rebuilds global classes and logic constructor types, guaranteeing that all property types are up to date.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-component-wiki`})}),` / `,(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-wiki-storm`})}),`
Launches AI-driven component documentation generation for Storybook/MDX and formats data for autocomplete in IDEs (WebStorm).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-library`})}),`
Scans the directory tree and automatically generates `,(0,c.jsx)(n.code,{children:`index.ts`}),` export files across all workspace packages.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-screenshot`})}),`
A visual regression testing environment using Puppeteer.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`deep-integration-of-styles-and-design-tokens`,children:`Deep Integration of Styles and Design Tokens`}),`
`,(0,c.jsxs)(n.p,{children:[`The design token parsing module (`,(0,c.jsx)(n.code,{children:`Properties*`}),` classes) is the heart of the code generator. The script recognizes numerous property types from JSON:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`type-var`}),` / `,(0,c.jsx)(n.code,{children:`flag-var`})]}),`: Properties compiled directly into CSS variables (dynamic padding, border-radius management).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`type-state`})}),`: Dynamic visual component states.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`flag-theme`}),` / Palettes`]}),`: Color management and dark/light theme support without CSS duplication.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`flag-subclass`}),` / `,(0,c.jsx)(n.code,{children:`flag-replace`})]}),`: Smart BEM CSS class management, appending modifier classes only when flags are active.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`The script automatically translates all these connections into optimized SCSS code and strict TypeScript, forming a flawless bridge between the visual design and the logical core of the components.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
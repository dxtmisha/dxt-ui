import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/styles/# Project Setup`}),`
`,(0,c.jsx)(n.h1,{id:`project-setup`,children:`Project Setup`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`@dxtmisha/styles`}),` library provides a centralized setup mixin (`,(0,c.jsx)(n.code,{children:`initGlobal`}),`) to establish the base resets, direction systems, typographic spacing, custom transforms, and color palettes.`]}),`
`,(0,c.jsx)(n.h2,{id:`how-it-works`,children:`How it Works`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`initGlobal`}),` mixin acts as the single entry point to set up the entire styling ecosystem for a project. It sequentially includes and configures the following key low-level utilities:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Box Sizing & Border Reset`}),`: For all elements (`,(0,c.jsx)(n.code,{children:`*`}),`, `,(0,c.jsx)(n.code,{children:`*::after`}),`, `,(0,c.jsx)(n.code,{children:`*::before`}),`), it sets `,(0,c.jsx)(n.code,{children:`box-sizing: border-box`}),`, resets the border width to `,(0,c.jsx)(n.code,{children:`0`}),`, sets the border style to `,(0,c.jsx)(n.code,{children:`solid`}),`, and sets the default border color to `,(0,c.jsx)(n.code,{children:`transparent`}),`. This prevents layout shifts and border rendering issues.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Direction System Initialization (`,(0,c.jsx)(n.code,{children:`initDir`}),`)`]}),`: Integrates LTR and RTL support. It initializes direction-aware CSS custom properties on the `,(0,c.jsx)(n.code,{children:`html`}),` element and all descendants, enabling automatic layout mirroring and spacing adjustment based on the active language.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Paragraph Spacing (`,(0,c.jsx)(n.code,{children:`initParagraphSpacing`}),`)`]}),`: Configures margin spacing constraints for consecutive paragraphs (adjacent `,(0,c.jsx)(n.code,{children:`p`}),` elements) to maintain typographic consistency.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Color Palette (`,(0,c.jsx)(n.code,{children:`initPalette`}),`)`]}),`: Sets up the global CSS variables for colors, schemes, and states.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Transform Settings (`,(0,c.jsx)(n.code,{children:`initTransform`}),`)`]}),`: Registers custom properties and baseline values for 2D/3D CSS transforms.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Margin Reset`}),`: Resets default margins to zero for the document `,(0,c.jsx)(n.code,{children:`body`}),`, all headers (`,(0,c.jsx)(n.code,{children:`h1`}),` through `,(0,c.jsx)(n.code,{children:`h6`}),`), and paragraphs (`,(0,c.jsx)(n.code,{children:`p`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`integration-guide`,children:`Integration Guide`}),`
`,(0,c.jsx)(n.h3,{id:`1-create-main-stylesheet`,children:`1. Create Main Stylesheet`}),`
`,(0,c.jsxs)(n.p,{children:[`Create a main stylesheet file (e.g., `,(0,c.jsx)(n.code,{children:`src/styles/main.scss`}),`) that will serve as the entry point for your application's styling.`]}),`
`,(0,c.jsx)(n.h3,{id:`2-import-styles-library`,children:`2. Import Styles Library`}),`
`,(0,c.jsxs)(n.p,{children:[`Import the `,(0,c.jsx)(n.code,{children:`@dxtmisha/styles`}),` library at the top of your stylesheet:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';
`})}),`
`,(0,c.jsx)(n.h3,{id:`3-setup-global-styles`,children:`3. Setup Global Styles`}),`
`,(0,c.jsxs)(n.p,{children:[`Call the `,(0,c.jsx)(n.code,{children:`initGlobal`}),` mixin at the root level of your main stylesheet file:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@include styles.initGlobal;
`})}),`
`,(0,c.jsx)(n.h3,{id:`4-import-stylesheet-in-application-entry`,children:`4. Import Stylesheet in Application Entry`}),`
`,(0,c.jsxs)(n.p,{children:[`Import your main stylesheet in your application's JavaScript or TypeScript entry point (e.g., `,(0,c.jsx)(n.code,{children:`src/main.ts`}),` or `,(0,c.jsx)(n.code,{children:`src/entry-client.ts`}),`):`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import './styles/main.scss'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
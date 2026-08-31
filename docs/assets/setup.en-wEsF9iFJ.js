import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/styles/# Project Setup`}),`
`,(0,c.jsx)(t.h1,{id:`project-setup`,children:`Project Setup`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),` library provides a centralized setup mixin (`,(0,c.jsx)(t.code,{children:`initGlobal`}),`) to establish the base resets, direction systems, typographic spacing, custom transforms, and color palettes.`]}),`
`,(0,c.jsx)(t.h2,{id:`how-it-works`,children:`How it Works`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`initGlobal`}),` mixin acts as the single entry point to set up the entire styling ecosystem for a project. It sequentially includes and configures the following key low-level utilities:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Box Sizing & Border Reset`}),`: For all elements (`,(0,c.jsx)(t.code,{children:`*`}),`, `,(0,c.jsx)(t.code,{children:`*::after`}),`, `,(0,c.jsx)(t.code,{children:`*::before`}),`), it sets `,(0,c.jsx)(t.code,{children:`box-sizing: border-box`}),`, resets the border width to `,(0,c.jsx)(t.code,{children:`0`}),`, sets the border style to `,(0,c.jsx)(t.code,{children:`solid`}),`, and sets the default border color to `,(0,c.jsx)(t.code,{children:`transparent`}),`. This prevents layout shifts and border rendering issues.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Direction System Initialization (`,(0,c.jsx)(t.code,{children:`initDir`}),`)`]}),`: Integrates LTR and RTL support. It initializes direction-aware CSS custom properties on the `,(0,c.jsx)(t.code,{children:`html`}),` element and all descendants, enabling automatic layout mirroring and spacing adjustment based on the active language.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Paragraph Spacing (`,(0,c.jsx)(t.code,{children:`initParagraphSpacing`}),`)`]}),`: Configures margin spacing constraints for consecutive paragraphs (adjacent `,(0,c.jsx)(t.code,{children:`p`}),` elements) to maintain typographic consistency.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Color Palette (`,(0,c.jsx)(t.code,{children:`initPalette`}),`)`]}),`: Sets up the global CSS variables for colors, schemes, and states.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Transform Settings (`,(0,c.jsx)(t.code,{children:`initTransform`}),`)`]}),`: Registers custom properties and baseline values for 2D/3D CSS transforms.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Margin Reset`}),`: Resets default margins to zero for the document `,(0,c.jsx)(t.code,{children:`body`}),`, all headers (`,(0,c.jsx)(t.code,{children:`h1`}),` through `,(0,c.jsx)(t.code,{children:`h6`}),`), and paragraphs (`,(0,c.jsx)(t.code,{children:`p`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`integration-guide`,children:`Integration Guide`}),`
`,(0,c.jsx)(t.h3,{id:`1-create-main-stylesheet`,children:`1. Create Main Stylesheet`}),`
`,(0,c.jsxs)(t.p,{children:[`Create a main stylesheet file (e.g., `,(0,c.jsx)(t.code,{children:`src/styles/main.scss`}),`) that will serve as the entry point for your application's styling.`]}),`
`,(0,c.jsx)(t.h3,{id:`2-import-styles-library`,children:`2. Import Styles Library`}),`
`,(0,c.jsxs)(t.p,{children:[`Import the `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),` library at the top of your stylesheet:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';
`})}),`
`,(0,c.jsx)(t.h3,{id:`3-setup-global-styles`,children:`3. Setup Global Styles`}),`
`,(0,c.jsxs)(t.p,{children:[`Call the `,(0,c.jsx)(t.code,{children:`initGlobal`}),` mixin at the root level of your main stylesheet file:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@include styles.initGlobal;
`})}),`
`,(0,c.jsx)(t.h3,{id:`4-import-stylesheet-in-application-entry`,children:`4. Import Stylesheet in Application Entry`}),`
`,(0,c.jsxs)(t.p,{children:[`Import your main stylesheet in your application's JavaScript or TypeScript entry point (e.g., `,(0,c.jsx)(t.code,{children:`src/main.ts`}),` or `,(0,c.jsx)(t.code,{children:`src/entry-client.ts`}),`):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import './styles/main.scss'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
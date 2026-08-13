import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/ComponentWiki - AI-Powered Wiki Generator`}),`
`,(0,c.jsx)(t.h1,{id:`componentwiki-class`,children:`ComponentWiki Class`}),`
`,(0,c.jsx)(t.p,{children:`An advanced orchestration class that automates the generation of documentation, stories, and type definitions for components using AI. It coordinates temporary builds, code extraction, and AI processing to create comprehensive wiki artifacts.`}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`AI-Driven Documentation`}),` — leverages AI to analyze component code and generate meaningful MDX descriptions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automatic Story Generation`}),` — creates initial Storybook stories based on the component's implementation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Type Extraction`}),` — identifies and extracts type definitions for inclusion in documentation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Process Orchestration`}),` — handles the technical lifecycle including building items, extracting code snapshots, and cleanup.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:`Initialize the class with the target component path and optional custom prompt instructions.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — the relative path to the component directory.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`prompt: string = ''`}),` — optional additional text to append to the AI prompt for specific documentation requirements.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ComponentWiki } from '@dxtmisha/scripts'

const wiki = new ComponentWiki('src/components/MyComponent', 'Focus on accessibility details.')

// Start generation process
wiki.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — The primary method that initiates building the code, preparing the AI context, and generating the wiki artifacts.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.h3,{id:`batch-generation`,children:`Batch Generation`}),`
`,(0,c.jsx)(t.p,{children:`Commonly used in scripts to regenerate documentation for multiple components after API changes.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const wiki = new ComponentWiki('src/components/BaseButton')
wiki.make()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
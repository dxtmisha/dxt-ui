import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/2. AI/8. Visual Context (Screenshots)`}),`
`,(0,c.jsx)(t.h1,{id:`visual-context-ai-screenshot`,children:`Visual Context (ai-screenshot)`}),`
`,(0,c.jsxs)(t.p,{children:[`One of the most powerful capabilities of the AIDD infrastructure in `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` is providing artificial intelligence not only with textual TypeScript contracts, but also with the `,(0,c.jsx)(t.strong,{children:`visual context`}),` of the actual UI. This enables multimodal AI models to inspect component layouts, padding, elevation, and design token applications visually.`]}),`
`,(0,c.jsxs)(t.p,{children:[`This functionality is centered around the `,(0,c.jsx)(t.code,{children:`ai-screenshot/`}),` directory, populated automatically by the `,(0,c.jsx)(t.code,{children:`dxt-screenshot`}),` command (backed by the `,(0,c.jsx)(t.code,{children:`DesignScreenshot`}),` class).`]}),`
`,(0,c.jsx)(t.h2,{id:`how-it-works-under-the-hood`,children:`How It Works Under the Hood`}),`
`,(0,c.jsx)(t.p,{children:`The visual context generator operates fully autonomously via the following workflow:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`1. Starting the Dev Server:`}),` The script launches the package's local development server (`,(0,c.jsx)(t.code,{children:`npm run dev`}),`) via a child process.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`2. Intercepting the Local URL:`}),` The utility analyzes console output (stdout) in real time to capture the active host address (e.g., `,(0,c.jsx)(t.code,{children:`http://localhost:5173`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`3. Launching Headless Browser:`}),` Once the URL is acquired, a headless browser instance navigates to the target page.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`4. Capturing UI State:`}),` The browser takes a high-resolution full-page screenshot saved as optimized `,(0,c.jsx)(t.code,{children:`.webp`}),` images, extracts the rendered DOM tree, and retrieves the applied CSS styles.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`5. Clean Teardown:`}),` The script terminates the dev server process gracefully and persists all artifacts into the `,(0,c.jsx)(t.code,{children:`ai-screenshot/`}),` folder.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`contents-of-the-ai-screenshot-directory`,children:`Contents of the ai-screenshot/ Directory`}),`
`,(0,c.jsx)(t.p,{children:`Upon completion, the package root contains:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`screenshot-*.webp`})}),` — High-resolution, lightweight WebP image snapshots of the component interface.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`screenshot-code.html`})}),` — The complete rendered DOM tree with all classes and attributes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`screenshot-styles.css`})}),` — The computed CSS stylesheet applied to the rendered elements.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`integration-into-system-prompt--mcp`,children:`Integration into System Prompt & MCP`}),`
`,(0,c.jsxs)(t.p,{children:[`When executing `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),`, paths to all files in `,(0,c.jsx)(t.code,{children:`ai-screenshot/`}),` are automatically embedded into the package entry in `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-markdown`,children:`## Component Visual References (Screenshots)
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-8_1.webp'
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-code.html'
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-styles.css'
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Additionally, `,(0,c.jsx)(t.code,{children:`DesignTypesMcp`}),` converts screenshots into multimedia resources for the Model Context Protocol with accurate MIME types (`,(0,c.jsx)(t.code,{children:`image/webp`}),`, `,(0,c.jsx)(t.code,{children:`text/html`}),`, `,(0,c.jsx)(t.code,{children:`text/css`}),`), enabling multimodal agents to query visual assets dynamically.`]}),`
`,(0,c.jsx)(t.h2,{id:`showcase-design-requirements-for-multimodal-ai`,children:`Showcase Design Requirements for Multimodal AI`}),`
`,(0,c.jsx)(t.p,{children:`The primary objective of visual context in AIDD is enabling multimodal models to accurately match design mockups (e.g., Figma screenshots) with existing library components.`}),`
`,(0,c.jsxs)(t.p,{children:[`When a developer asks an AI assistant to build an interface based on a visual mockup, text-only models often struggle to match image elements with code abstractions, resulting in custom ad-hoc `,(0,c.jsx)(t.code,{children:`div`}),` layouts and arbitrary CSS classes. With access to a visual screenshot gallery, the AI instantly recognizes components: `,(0,c.jsxs)(t.em,{children:[`"This section in the design is our existing `,(0,c.jsx)(t.code,{children:`<MyCustomCard variant="elevated">`}),`, and the filter bar is `,(0,c.jsx)(t.code,{children:`<FilterPanel isCompact>`}),`"`]}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`To achieve maximum accuracy, the component showcase (demo gallery) must adhere to key design rules:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Explicit Component Name and Props Display:`}),`
Render the component name and applied props/variants directly alongside each component instance on the page (e.g., `,(0,c.jsx)(t.code,{children:`Button [variant="primary", size="sm"]`}),` or `,(0,c.jsx)(t.code,{children:`Input [disabled=true, isError=true]`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Unified Visual and Contract Framing:`}),`
Textual labels allow multimodal AI to capture both the visual styling (shadows, spacing, borders) and the exact combination of props that produced it in a single image.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Elimination of Custom Markup Recreation:`}),`
By recognizing the component visually, the AI directly utilizes existing design system components with correct props instead of generating redundant HTML and CSS from scratch.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`running-the-generator`,children:`Running the Generator`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Via npm script in the package root:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run screenshot
`})}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Via npx CLI:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-screenshot
`})}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
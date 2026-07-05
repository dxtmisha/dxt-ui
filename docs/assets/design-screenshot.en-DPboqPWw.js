import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/# Commands/dxt-screenshot - Dev Server Screenshot Capturer`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-screenshot`,children:`dxt-screenshot`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`dxt-screenshot`}),` command automates visual capturing of UI layout pages. It spawns the project's development server, launches a headless browser, takes a high-resolution screenshot of the page, and extracts its static HTML and CSS code.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Server Lifecycle`}),`: Automatically boots the local dev server (`,(0,c.jsx)(n.code,{children:`npm run dev`}),`) and terminates it cleanly after capturing.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Headless Browser Screenshot`}),`: Uses Puppeteer via a custom `,(0,c.jsx)(n.code,{children:`BrowserItem`}),` wrapper to render pages at high resolution (12000px height by default) and capture a `,(0,c.jsx)(n.code,{children:`.webp`}),` snapshot.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Asset Extraction`}),`: Saves the snapshot's raw page structure to `,(0,c.jsx)(n.code,{children:`screenshot-code.html`}),` and computed CSS to `,(0,c.jsx)(n.code,{children:`screenshot-styles.css`}),` for visual audits.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Spawn Dev Server`}),`: The script runs `,(0,c.jsx)(n.code,{children:`npm run dev`}),` in a background subprocess.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`URL Resolution`}),`: It listens to stdout to detect the local host server address (e.g., `,(0,c.jsx)(n.code,{children:`http://localhost:5173`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Capture Page`}),`: Once the URL is resolved, it opens a Puppeteer browser instance and navigates to the URL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Export Artifacts`}),`:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Takes a full-page screenshot and saves it.`}),`
`,(0,c.jsxs)(n.li,{children:[`Extracts page DOM body and writes it to `,(0,c.jsx)(n.code,{children:`[path]-code.html`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Extracts page stylesheets and writes them to `,(0,c.jsx)(n.code,{children:`[path]-styles.css`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Teardown`}),`: Terminated dev server subprocess gracefully.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(n.p,{children:[`Run the screenshot capture tool via `,(0,c.jsx)(n.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-screenshot
`})}),`
`,(0,c.jsxs)(n.p,{children:[`The resulting capture files will be saved in the `,(0,c.jsx)(n.code,{children:`./ai-screenshot/`}),` folder.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
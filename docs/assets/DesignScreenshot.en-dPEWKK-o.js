import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/DesignScreenshot - Automatic Screenshot Capturer`}),`
`,(0,c.jsx)(n.h1,{id:`designscreenshot-class`,children:`DesignScreenshot Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`DesignScreenshot`}),` class is a specialized developer utility designed to automatically capture component/page screenshots, HTML bodies, and style definitions by spawning a local development server in the background and scanning it using a headless browser.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Server Spawning`}),` — spawns an `,(0,c.jsx)(n.code,{children:`npm run dev`}),` child process in a background shell and reads its stream output.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Port Autodiscovery`}),` — parses the terminal output stream to extract the local server URL (`,(0,c.jsx)(n.code,{children:`http://localhost:...`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Unified Capture Pipeline`}),` — uses `,(0,c.jsx)(n.code,{children:`BrowserItem`}),` to capture full-page screenshots, get HTML bodies, and extract active CSS stylesheets, dumping all files into the `,(0,c.jsx)(n.code,{children:`./ai-screenshot/`}),` folder.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Self-Terminating Loop`}),` — automatically kills the spawned child server process as soon as the capture succeeds to preserve system resources.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`DesignScreenshot`}),` can be initialized with an optional output filename prefix.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Constructor Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`file: string`}),` — (Optional) The output file path prefix (default: `,(0,c.jsx)(n.code,{children:`'./ai-screenshot/screenshot'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignScreenshot } from '@dxtmisha/scripts'

const capturer = new DesignScreenshot('./ai-screenshot/mockup-preview')
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsx)(n.h4,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsx)(n.p,{children:`Starts the screenshot generation process: creates the output directory structure, spawns the development server, and hooks up output listeners to trigger the capture.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<void>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`await capturer.make()
`})}),`
`,(0,c.jsx)(n.h4,{id:`makeurl`,children:(0,c.jsx)(n.code,{children:`makeUrl`})}),`
`,(0,c.jsx)(n.p,{children:`Extracts the local server address from raw command output.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: string`}),` — The terminal stdout chunk.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.h3,{id:`protected-methods--fields`,children:`Protected Methods & Fields`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isReading: boolean`}),` — Guard flag to prevent multiple overlapping capture calls.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`url?: string`}),` — The discovered local development server address.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listener(): Promise<boolean>`}),` — Headless browser trigger that captures screenshots, HTML bodies, and stylesheets.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`makeServer(): this`}),` — Spawns the `,(0,c.jsx)(n.code,{children:`npm run dev`}),` background process.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/bin/dxt-figma-layout - Figma Layout Integrator`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-figma-layout`,children:`dxt-figma-layout`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`dxt-figma-layout`}),` command provides CLI access for fetching components layout and image structures directly from Figma. It utilizes the `,(0,c.jsx)(n.code,{children:`DesignFigma`}),` orchestrator and `,(0,c.jsx)(n.code,{children:`FigmaApi`}),` client internally to extract SVG image assets based on target Figma keys and node IDs.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Warning`}),`: A corporate Figma subscription (Figma Enterprise or Organization) is strictly required to execute this command and fetch target layout assets.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Image Fetching`}),`: Retrieves target vector and raster layouts from Figma files in clean SVG format.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Config-Driven Authentication`}),`: Automatically extracts the Figma API access token from the system configurations.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flexible Arguments Support`}),`: Allows targeting specific files and specific nodes dynamically through CLI parameters.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsx)(n.p,{children:`The layout integration workflow automates asset retrieval:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsx)(n.li,{children:`The script reads the target Figma file key and optional node identifier passed directly from the command line arguments.`}),`
`,(0,c.jsxs)(n.li,{children:[`It instantiates the `,(0,c.jsx)(n.code,{children:`DesignFigma`}),` controller, passing the target parameters along with the automatically resolved system Figma token.`]}),`
`,(0,c.jsxs)(n.li,{children:[`The underlying `,(0,c.jsx)(n.code,{children:`FigmaApi`}),` client issues a secure HTTP request to Figma's `,(0,c.jsx)(n.code,{children:`fileImages`}),` endpoint, requesting the nodes in SVG format with specific ID preservation parameters.`]}),`
`,(0,c.jsx)(n.li,{children:`It receives the image mapping containing URLs for the compiled assets and prints the resulting JSON map directly to the console.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`how-to-configure-and-run`,children:`How to configure and run`}),`
`,(0,c.jsx)(n.p,{children:`No complex setup is required to run the layout integrator. Ensure that your Figma API token is configured in the environment or properties configuration before execution.`}),`
`,(0,c.jsx)(n.p,{children:`To retrieve layout images, execute the command passing your Figma file key and specific node ID:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-figma-layout [fileKey] [nodeId]
`})}),`
`,(0,c.jsx)(n.p,{children:`Example:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-figma-layout abc123xyz456 1-24
`})}),`
`,(0,c.jsx)(n.h2,{id:`cli-arguments`,children:`CLI Arguments`}),`
`,(0,c.jsx)(n.p,{children:`The command accepts two positional parameters:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fileKey`}),`: The unique identifier of the Figma file (typically found in the Figma file URL).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nodeId`}),`: The specific node ID inside the file (e.g. `,(0,c.jsx)(n.code,{children:`1-24`}),` or `,(0,c.jsx)(n.code,{children:`1:24`}),`) to fetch.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
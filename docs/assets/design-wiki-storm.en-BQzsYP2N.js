import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/# Commands/dxt-wiki-storm - WebStorm IDE Metadata Generator`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-wiki-storm`,children:`dxt-wiki-storm`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`dxt-wiki-storm`}),` command generates a `,(0,c.jsx)(n.code,{children:`web-types.json`}),` file inside the compilation folder. This file contains metadata detailing component tags, attributes, properties, and events for JetBrains IDEs (like WebStorm and IntelliJ IDEA) to enable rich autocompletion and documentation tooltips.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`JetBrains Integration`}),`: Feeds IDE Intellisense directly, allowing WebStorm to recognize custom Vue components and their configurations.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Metadata Extraction`}),`: Loops through all active components in the library to inspect and parse properties, events, and slots.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Standardized Schema`}),`: Outputs data strictly adhering to the standard Web-Types schema format.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Verify Context`}),`: The script reads the workspace `,(0,c.jsx)(n.code,{children:`package.json`}),` to extract the package name and version.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Collect Components`}),`: Iterates through all registered design system components using a component helper.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Parse Component APIs`}),`: Instantiates a helper scanner for each component to read and format its props, events, and options.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Generate JSON`}),`: Combines the scanned info into a single `,(0,c.jsx)(n.code,{children:`web-types.json`}),` contribution object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Save Asset`}),`: Saves the file inside the build directory (by default, `,(0,c.jsx)(n.code,{children:`dist/web-types.json`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(n.p,{children:[`Run the metadata compiler via `,(0,c.jsx)(n.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-wiki-storm [output_dir]
`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`output_dir`}),` (Optional): The directory to save the file to. Defaults to `,(0,c.jsx)(n.code,{children:`dist`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
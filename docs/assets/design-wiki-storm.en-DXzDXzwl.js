import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/7. Commands/dxt-wiki-storm - WebStorm IDE Metadata Generator`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-wiki-storm`,children:`dxt-wiki-storm`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`dxt-wiki-storm`}),` command generates a `,(0,c.jsx)(t.code,{children:`web-types.json`}),` file inside the compilation folder. This file contains metadata detailing component tags, attributes, properties, and events for JetBrains IDEs (like WebStorm and IntelliJ IDEA) to enable rich autocompletion and documentation tooltips.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`JetBrains Integration`}),`: Feeds IDE Intellisense directly, allowing WebStorm to recognize custom Vue components and their configurations.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Metadata Extraction`}),`: Loops through all active components in the library to inspect and parse properties, events, and slots.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Standardized Schema`}),`: Outputs data strictly adhering to the standard Web-Types schema format.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Verify Context`}),`: The script reads the workspace `,(0,c.jsx)(t.code,{children:`package.json`}),` to extract the package name and version.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Collect Components`}),`: Iterates through all registered design system components using a component helper.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Parse Component APIs`}),`: Instantiates a helper scanner for each component to read and format its props, events, and options.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Generate JSON`}),`: Combines the scanned info into a single `,(0,c.jsx)(t.code,{children:`web-types.json`}),` contribution object.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Save Asset`}),`: Saves the file inside the build directory (by default, `,(0,c.jsx)(t.code,{children:`dist/web-types.json`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(t.p,{children:[`Run the metadata compiler via `,(0,c.jsx)(t.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-wiki-storm
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The command takes no options; the output directory is determined by the build configuration (by default, `,(0,c.jsx)(t.code,{children:`dist`}),`).`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/bin/dxt-component-wiki - AI Component Docs"}),`
`,e.jsx(n.h1,{id:"dxt-component-wiki",children:"dxt-component-wiki"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"dxt-component-wiki"})," command provides automated generation of highly detailed AI-driven component documentation, types, and stories for the design system."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Granular AI File Generation"}),": Given a standalone component path, the AI runner can completely redefine or update standard artifacts such as ",e.jsx(n.code,{children:"MDX"})," notes, ",e.jsx(n.code,{children:"types.ts"}),", and ",e.jsx(n.code,{children:"stories.ts"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Legacy Backup Mechanism"}),": Safely saves the preceding versions of files appending ",e.jsx(n.code,{children:"__old.txt"})," when creating meaningful changes, to prevent accidental code loss."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Customizable AI Instructions"}),": Includes the ability to append your own ad-hoc instructions to the executed prompt."]}),`
`]}),`
`,e.jsx(n.h2,{id:"how-does-it-work",children:"How does it work?"}),`
`,e.jsx(n.p,{children:"The AI Wiki Generation flow processes an existing component path:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"It runs an ephemeral background compilation mapping the output to a temporary distribution environment to capture correct TypeScript behaviors."}),`
`,e.jsxs(n.li,{children:["It reads your configuration parameters to locate localized system prompts (e.g., ",e.jsx(n.code,{children:"componentPrompt.en.txt"}),") and synthesizes your component's real original data (MDX, vue source, storybook implementation)."]}),`
`,e.jsxs(n.li,{children:["A single unified response from the AI model intelligently distributes new code segments via the ",e.jsx(n.code,{children:"ComponentWikiFile"})," engine directly into your repository."]}),`
`]}),`
`,e.jsx(n.h2,{id:"how-to-configure-and-run",children:"How to configure and run"}),`
`,e.jsxs(n.p,{children:["Configuration for the AI generator is defined centrally in your project's ",e.jsx(n.code,{children:"design.config.json"})," file. ",e.jsx(n.strong,{children:"Create this file in the root of your project."})," Follow these exact steps to set it up:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Set up AI parameters in ",e.jsx(n.code,{children:"design.config.json"})]}),`:
Add the API key, model target, and the language specification directly to your configuration object. This `,e.jsx(n.code,{children:"wikiLanguage"})," key determines both the language injected in the MDX generated and the localized system prompt target (e.g., ",e.jsx(n.code,{children:"componentPrompt.en.txt"}),").",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "wikiLanguage": "en",
  "aiType": "gemini",
  "aiModel": "gemini-2.0-flash",
  "aiKey": "YOUR_API_KEY_HERE"
}
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Execute AI Generation for a Component"}),`:
To analyze a specific component utilizing the AI, feed its relative path (e.g. `,e.jsx(n.code,{children:"Button"})," or ",e.jsx(n.code,{children:"MyComponent"}),") to the runner. You can optionally include an instructional prompt override:",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx dxt-component-wiki <component-path> "[optional-prompt-instruction]"
`})}),`
`,e.jsx(n.strong,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx dxt-component-wiki "ButtonBase" "Ensure documentation mentions it is disabled by default"
`})}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"additional-information",children:"Additional Information"}),`
`,e.jsx(n.h3,{id:"dependency-on-project-build",children:"Dependency on Project Build"}),`
`,e.jsxs(n.p,{children:["The AI generation capability deeply couples with real-time application states. It initiates ",e.jsx(n.code,{children:"npm run build"})," during interpretation underneath ",e.jsx(n.code,{children:"dist-temporary"}),". ",e.jsx(n.strong,{children:"If your project has preexisting TypeScript implementation failures or active build errors, the AI documentation context will systematically fail."})]}),`
`,e.jsxs(n.h3,{id:"automated-backup-generation-__oldtxt",children:["Automated Backup Generation (",e.jsx(n.code,{children:"__old.txt"}),")"]}),`
`,e.jsxs(n.p,{children:["If ",e.jsx(n.code,{children:"ComponentWikiFile"})," determines that incoming documentation updates heavily differ from outgoing states, it actively replicates the former structures under the ",e.jsx(n.code,{children:"[filename]__old.txt"})," format allowing roll-backs with minimal fuss."]})]})}function p(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{p as default};

import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/bin/dxt-ai-doc - AI Documentation Generator"}),`
`,e.jsx(n.h1,{id:"dxt-ai-doc",children:"dxt-ai-doc"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ai-doc.ts"})," script is an automated AI-driven documentation generator for the project. It uses ",e.jsx(n.code,{children:"vite-node"})," to run a generation workflow that analyzes TypeScript source code (classes, composables, and functions), communicates with an AI model to summarize or explain the code, and creates or updates MDX documentation files."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Context-Aware Prompts"}),": Generates the documentation by using specific prompt templates depending on the file type (Class, Composable, or standard Function)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multi-language Support"}),": Automatically injects the target documentation language (",e.jsx(n.code,{children:"[wikiLanguage]"}),") into the prompt."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Real-time compilation"}),": Before sending the context to AI, it creates a build context to get accurate TypeScript behavior context."]}),`
`]}),`
`,e.jsx(n.h2,{id:"how-does-it-work",children:"How does it work?"}),`
`,e.jsx(n.p,{children:"The script orchestrates several key processes to automate your project's documentation:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"It reads the files from the specified directories in your configuration."}),`
`,e.jsx(n.li,{children:"It determines the code type (Class, Composable, standard Function) and prepares the specific context needed."}),`
`,e.jsx(n.li,{children:"It performs a real-time build compilation to capture accurate TypeScript information."}),`
`,e.jsx(n.li,{children:"It sends all gathered context along with customized prompt templates to the AI model."}),`
`,e.jsxs(n.li,{children:["It parses the final response and updates or creates the ",e.jsx(n.code,{children:"MDX"})," files directly in your repository."]}),`
`]}),`
`,e.jsx(n.h2,{id:"how-to-configure-and-run",children:"How to configure and run"}),`
`,e.jsxs(n.p,{children:["Configuration for the AI generator is defined centrally in your project's ",e.jsx(n.code,{children:"design.config.json"})," file. ",e.jsx(n.strong,{children:"Create this file in the root of your project."})," Follow these exact steps to set it up:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Set up AI parameters in ",e.jsx(n.code,{children:"design.config.json"})]}),`:
Add the API key, model target, and the language specification directly to your configuration object.`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "wikiLanguage": "en",
  "aiType": "gemini",
  "aiModel": "gemini-2.0-flash",
  "aiKey": "YOUR_API_KEY_HERE"
}
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Configure target directories"}),`:
In the same `,e.jsx(n.code,{children:"design.config.json"}),", configure which directories should be scanned by overriding the default ",e.jsx(n.code,{children:"aiDocDirectory"})," paths. (Defaults are ",e.jsx(n.code,{children:"/classes/"}),", ",e.jsx(n.code,{children:"/composables/"}),", and ",e.jsx(n.code,{children:"/functions/"}),").",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "aiDocDirectory": [
    "/path/to/my/classes/",
    "/path/to/my/composables/"
  ]
}
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Run the command"}),`:
The generator is registered in your `,e.jsx(n.code,{children:"package.json"})," under ",e.jsx(n.code,{children:"@dxtmisha/scripts"}),". Simply run the ",e.jsx(n.code,{children:"dxt-ai-doc"})," command via ",e.jsx(n.code,{children:"npx"})," or ",e.jsx(n.code,{children:"npm"}),":",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx dxt-ai-doc
`})}),`
`,"The script requires no arguments—it will automatically scan the configured paths in ",e.jsx(n.code,{children:"design.config.json"})," and update the documentation files."]}),`
`]}),`
`,e.jsx(n.h2,{id:"additional-information",children:"Additional Information"}),`
`,e.jsx(n.h3,{id:"dependency-on-project-build",children:"Dependency on Project Build"}),`
`,e.jsxs(n.p,{children:["The generator depends heavily on the project's build process. ",e.jsxs(n.strong,{children:["It executes ",e.jsx(n.code,{children:"npm run build"})]})," inside a temporary distribution directory (",e.jsx(n.code,{children:"dist-temporary"}),") to accurately capture your TypeScript definitions, exports, and structure. ",e.jsx(n.strong,{children:"If your project has TypeScript or build errors, the AI documentation script will fail."})]}),`
`,e.jsx(n.h3,{id:"excluding-files-skip-directive",children:"Excluding Files (Skip Directive)"}),`
`,e.jsxs(n.p,{children:["You can prevent ",e.jsx(n.code,{children:"dxt-ai-doc"})," from running on specific files by adding the ",e.jsx(n.code,{children:"// wiki:build-none"})," directive anywhere in the file."]})]})}function p(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{p as default};

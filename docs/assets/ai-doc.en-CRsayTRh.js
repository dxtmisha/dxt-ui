import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/# Commands/dxt-ai-doc - AI Documentation Generator`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-ai-doc`,children:`dxt-ai-doc`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`ai-doc.ts`}),` script is an automated AI-driven documentation generator for the project. It uses `,(0,c.jsx)(t.code,{children:`vite-node`}),` to run a generation workflow that analyzes TypeScript source code (classes, composables, and functions), communicates with an AI model to summarize or explain the code, and creates or updates MDX documentation files.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Context-Aware Prompts`}),`: Generates the documentation by using specific prompt templates depending on the file type (Class, Composable, or standard Function).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Multi-language Support`}),`: Automatically injects the target documentation language (`,(0,c.jsx)(t.code,{children:`[wikiLanguage]`}),`) into the prompt.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Real-time compilation`}),`: Before sending the context to AI, it creates a build context to get accurate TypeScript behavior context.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsx)(t.p,{children:`The script orchestrates several key processes to automate your project's documentation:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsx)(t.li,{children:`It reads the files from the specified directories in your configuration.`}),`
`,(0,c.jsx)(t.li,{children:`It determines the code type (Class, Composable, standard Function) and prepares the specific context needed.`}),`
`,(0,c.jsx)(t.li,{children:`It performs a real-time build compilation to capture accurate TypeScript information.`}),`
`,(0,c.jsx)(t.li,{children:`It sends all gathered context along with customized prompt templates to the AI model.`}),`
`,(0,c.jsxs)(t.li,{children:[`It parses the final response and updates or creates the `,(0,c.jsx)(t.code,{children:`MDX`}),` files directly in your repository.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-to-configure-and-run`,children:`How to configure and run`}),`
`,(0,c.jsxs)(t.p,{children:[`Configuration for the AI generator is defined centrally in your project's `,(0,c.jsx)(t.code,{children:`design.config.json`}),` file. `,(0,c.jsx)(t.strong,{children:`Create this file in the root of your project.`}),` Follow these exact steps to set it up:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Set up AI parameters in `,(0,c.jsx)(t.code,{children:`design.config.json`})]}),`:
Add the API key, model target, and the language specification directly to your configuration object.`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "wikiLanguage": "en",
  "aiType": "gemini",
  "aiModel": "gemini-2.0-flash",
  "aiKey": "YOUR_API_KEY_HERE"
}
`})}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Configure target directories`}),`:
In the same `,(0,c.jsx)(t.code,{children:`design.config.json`}),`, configure which directories should be scanned by overriding the default `,(0,c.jsx)(t.code,{children:`aiDocDirectory`}),` paths. (Defaults are `,(0,c.jsx)(t.code,{children:`/classes/`}),`, `,(0,c.jsx)(t.code,{children:`/composables/`}),`, and `,(0,c.jsx)(t.code,{children:`/functions/`}),`).`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "aiDocDirectory": [
    "/path/to/my/classes/",
    "/path/to/my/composables/"
  ]
}
`})}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Run the command`}),`:
The generator is registered in your `,(0,c.jsx)(t.code,{children:`package.json`}),` under `,(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`}),`. Simply run the `,(0,c.jsx)(t.code,{children:`dxt-ai-doc`}),` command via `,(0,c.jsx)(t.code,{children:`npx`}),` or `,(0,c.jsx)(t.code,{children:`npm`}),`:`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-ai-doc
`})}),`
`,`The script requires no arguments—it will automatically scan the configured paths in `,(0,c.jsx)(t.code,{children:`design.config.json`}),` and update the documentation files.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`additional-information`,children:`Additional Information`}),`
`,(0,c.jsx)(t.h3,{id:`dependency-on-project-build`,children:`Dependency on Project Build`}),`
`,(0,c.jsxs)(t.p,{children:[`The generator depends heavily on the project's build process. `,(0,c.jsxs)(t.strong,{children:[`It executes `,(0,c.jsx)(t.code,{children:`npm run build`})]}),` inside a temporary distribution directory (`,(0,c.jsx)(t.code,{children:`dist-temporary`}),`) to accurately capture your TypeScript definitions, exports, and structure. `,(0,c.jsx)(t.strong,{children:`If your project has TypeScript or build errors, the AI documentation script will fail.`})]}),`
`,(0,c.jsx)(t.h3,{id:`excluding-files-skip-directive`,children:`Excluding Files (Skip Directive)`}),`
`,(0,c.jsxs)(t.p,{children:[`You can prevent `,(0,c.jsx)(t.code,{children:`dxt-ai-doc`}),` from running on specific files by adding the `,(0,c.jsx)(t.code,{children:`// wiki:build-none`}),` directive anywhere in the file.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
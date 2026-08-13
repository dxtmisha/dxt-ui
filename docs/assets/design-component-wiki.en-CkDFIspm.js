import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/# Commands/dxt-component-wiki - AI Component Docs`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-component-wiki`,children:`dxt-component-wiki`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`dxt-component-wiki`}),` command provides automated generation of highly detailed AI-driven component documentation, types, and stories for the design system.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Granular AI File Generation`}),`: Given a standalone component path, the AI runner can completely redefine or update standard artifacts such as `,(0,c.jsx)(t.code,{children:`MDX`}),` notes, `,(0,c.jsx)(t.code,{children:`types.ts`}),`, and `,(0,c.jsx)(t.code,{children:`stories.ts`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Legacy Backup Mechanism`}),`: Safely saves the preceding versions of files appending `,(0,c.jsx)(t.code,{children:`__old.txt`}),` when creating meaningful changes, to prevent accidental code loss.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Customizable AI Instructions`}),`: Includes the ability to append your own ad-hoc instructions to the executed prompt.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsx)(t.p,{children:`The AI Wiki Generation flow processes an existing component path:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsx)(t.li,{children:`It runs an ephemeral background compilation mapping the output to a temporary distribution environment to capture correct TypeScript behaviors.`}),`
`,(0,c.jsxs)(t.li,{children:[`It reads your configuration parameters to locate localized system prompts (e.g., `,(0,c.jsx)(t.code,{children:`componentPrompt.en.txt`}),`) and synthesizes your component's real original data (MDX, vue source, storybook implementation).`]}),`
`,(0,c.jsxs)(t.li,{children:[`A single unified response from the AI model intelligently distributes new code segments via the `,(0,c.jsx)(t.code,{children:`ComponentWikiFile`}),` engine directly into your repository.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-to-configure-and-run`,children:`How to configure and run`}),`
`,(0,c.jsxs)(t.p,{children:[`Configuration for the AI generator is defined centrally in your project's `,(0,c.jsx)(t.code,{children:`design.config.json`}),` file. `,(0,c.jsx)(t.strong,{children:`Create this file in the root of your project.`}),` Follow these exact steps to set it up:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Set up AI parameters in `,(0,c.jsx)(t.code,{children:`design.config.json`})]}),`:
Add the API key, model target, and the language specification directly to your configuration object. This `,(0,c.jsx)(t.code,{children:`wikiLanguage`}),` key determines both the language injected in the MDX generated and the localized system prompt target (e.g., `,(0,c.jsx)(t.code,{children:`componentPrompt.en.txt`}),`).`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "wikiLanguage": "en",
  "aiType": "gemini",
  "aiModel": "gemini-2.0-flash",
  "aiKey": "YOUR_API_KEY_HERE"
}
`})}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Execute AI Generation for a Component`}),`:
To analyze a specific component utilizing the AI, feed its relative path (e.g. `,(0,c.jsx)(t.code,{children:`Button`}),` or `,(0,c.jsx)(t.code,{children:`MyComponent`}),`) to the runner. You can optionally include an instructional prompt override:`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-component-wiki <component-path> "[optional-prompt-instruction]"
`})}),`
`,(0,c.jsx)(t.strong,{children:`Example:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-component-wiki "ButtonBase" "Ensure documentation mentions it is disabled by default"
`})}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`additional-information`,children:`Additional Information`}),`
`,(0,c.jsx)(t.h3,{id:`dependency-on-project-build`,children:`Dependency on Project Build`}),`
`,(0,c.jsxs)(t.p,{children:[`The AI generation capability deeply couples with real-time application states. It initiates `,(0,c.jsx)(t.code,{children:`npm run build`}),` during interpretation underneath `,(0,c.jsx)(t.code,{children:`dist-temporary`}),`. `,(0,c.jsx)(t.strong,{children:`If your project has preexisting TypeScript implementation failures or active build errors, the AI documentation context will systematically fail.`})]}),`
`,(0,c.jsxs)(t.h3,{id:`automated-backup-generation-__oldtxt`,children:[`Automated Backup Generation (`,(0,c.jsx)(t.code,{children:`__old.txt`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`If `,(0,c.jsx)(t.code,{children:`ComponentWikiFile`}),` determines that incoming documentation updates heavily differ from outgoing states, it actively replicates the former structures under the `,(0,c.jsx)(t.code,{children:`[filename]__old.txt`}),` format allowing roll-backs with minimal fuss.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
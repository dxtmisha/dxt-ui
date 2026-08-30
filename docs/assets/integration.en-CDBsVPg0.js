import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/2. AI/6. IDE Integration`}),`
`,(0,c.jsx)(t.h1,{id:`integrating-aidd-into-projects--ides`,children:`Integrating AIDD into Projects & IDEs`}),`
`,(0,c.jsxs)(t.p,{children:[`To roll out the AI-Driven Development (AIDD) infrastructure in a new application or external project leveraging the `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` library, perform the following standard setup.`]}),`
`,(0,c.jsx)(t.h2,{id:`step-1-installing-the-scripts-package`,children:`Step 1: Installing the Scripts Package`}),`
`,(0,c.jsxs)(t.p,{children:[`To enable automated documentation aggregation from all installed `,(0,c.jsx)(t.code,{children:`@dxtmisha/*`}),` dependencies, install `,(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm install @dxtmisha/scripts --save-dev
`})}),`
`,(0,c.jsx)(t.h2,{id:`step-2-configuring-packagejson`,children:`Step 2: Configuring package.json`}),`
`,(0,c.jsxs)(t.p,{children:[`Add the prompt generator commands to the `,(0,c.jsx)(t.code,{children:`scripts`}),` section of your root `,(0,c.jsx)(t.code,{children:`package.json`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "scripts": {
    "prompt": "dxt-prompt",
    "postinstall": "npm run prompt"
  }
}
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`"prompt": "dxt-prompt"`})}),` — Manual execution of `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` generation at any development point.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`"postinstall": "npm run prompt"`})}),` — Automatic generation immediately after `,(0,c.jsx)(t.code,{children:`npm install`}),` or `,(0,c.jsx)(t.code,{children:`npm update`}),`, ensuring the AI context stays synchronized whenever new `,(0,c.jsx)(t.code,{children:`@dxtmisha/*`}),` versions are installed.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`step-3-configuring-gitignore`,children:`Step 3: Configuring .gitignore`}),`
`,(0,c.jsxs)(t.p,{children:[`Generated artifacts and temporary files should not be tracked by Git. Add them to `,(0,c.jsx)(t.code,{children:`.gitignore`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-gitignore`,children:`ai-prompt.md
ai-types.md
ai-description.md
ai-mcp-resources.json
ai-mcp-all-resources.json
ai-mcp-all-resources.ts
ai-tmp
ai-types-temp
`})}),`
`,(0,c.jsx)(t.h2,{id:`step-4-configuring-ai-agent-system-instructions`,children:`Step 4: Configuring AI Agent System Instructions`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` file achieves peak effectiveness when the AI assistant is strictly obligated to read it at the start of each session. Create a system rules file based on your development environment:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Antigravity IDE / Agent Customizations:`}),` `,(0,c.jsx)(t.code,{children:`.agents/rules/main.md`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cursor IDE:`}),` `,(0,c.jsx)(t.code,{children:`.cursorrules`}),` or `,(0,c.jsx)(t.code,{children:`.cursor/rules/*.mdc`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Windsurf IDE:`}),` `,(0,c.jsx)(t.code,{children:`.windsurfrules`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Claude Code / CLI:`}),` `,(0,c.jsx)(t.code,{children:`CLAUDE.md`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`GitHub Copilot / Codex:`}),` `,(0,c.jsx)(t.code,{children:`AGENTS.md`})]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Insert the mandatory directive block into the rules file:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-markdown`,children:`# AI Agent Rules

## Preparation for Work (MANDATORY GUARD)
**🔴 STOP! DO NOT PROCEED UNTIL YOU DO THIS 🔴**
At the beginning of a conversation session or before starting work on code/plans, you MUST read the \`ai-prompt.md\` file located in the project root COMPLETELY in full, from the first line to the very last line, without skipping any sections or reading only partially.
Once \`ai-prompt.md\` has been read during the current session, you do NOT need to re-read it on every single turn, unless you need to refresh your context or verify specific guidelines.
If \`ai-prompt.md\` exceeds the single view line limit, make consecutive calls to view tool parameters to cover every single line of the file.
This is your absolute priority. You must strictly adhere to all rules specified in \`ai-prompt.md\`.
`})}),`
`,(0,c.jsx)(t.h2,{id:`step-5-initial-generation-and-verification`,children:`Step 5: Initial Generation and Verification`}),`
`,(0,c.jsx)(t.p,{children:`Once configured, run the prompt aggregation script:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run prompt
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The root `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` file will be generated, consolidating `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),` UI contracts, `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),` reactive utilities, `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),` SCSS tokens, and core engineering standards.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
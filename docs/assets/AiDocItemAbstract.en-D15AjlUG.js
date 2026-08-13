import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/AiDocItemAbstract - Documentation Automation Base Class`}),`
`,(0,c.jsx)(t.h1,{id:`aidocitemabstract-class`,children:`AiDocItemAbstract Class`}),`
`,(0,c.jsx)(t.p,{children:`An abstract base class for automating documentation generation using AI. It manages the lifecycle of reading source files, gathering context (code, demos, prompts), and coordinating with an AI service to produce or update MDX and source files.`}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Lifecycle`}),` — orchestrates reading source code, running builds, and generating documentation updates.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Context Management`}),` — built-in logic to collect component code, original source, and fake demo data for AI context.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Smart Updates`}),` — automatically compares modification dates to determine if re-generation is needed.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Template System`}),` — supports prompt templates and dynamic title replacement (e.g., `,(0,c.jsx)(t.code,{children:`[title]`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Build Integration`}),` — integrates with `,(0,c.jsx)(t.code,{children:`BuildItem`}),` to ensure code is buildable before documenting.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Selective Generation`}),` — supports bypassing generation using the `,(0,c.jsx)(t.code,{children:`// wiki:build-none`}),` marker.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`Since `,(0,c.jsx)(t.code,{children:`AiDocItemAbstract`}),` is an abstract class, it must be extended. Concrete classes must provide paths for demo files and prompt templates.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Constructor Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — The base directory path for the source files.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: GitFileItem`}),` — Information about the specific file being documented.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// Example of extending and using AiDocItemAbstract
class MyComponentDoc extends AiDocItemAbstract {
  protected pathDemo = ['path', 'to', 'demo.ts']
  protected pathPrompt = ['path', 'to', 'prompt.txt']
}

const doc = new MyComponentDoc('/source/dir', gitFileItem)
await doc.make() // Triggers the documentation cycle
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`lifecycle`,children:`Lifecycle`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): Promise<void>`}),` — The main entry point. Checks if updates are needed, prepares context, calls AI, and writes the results.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isBuildDisabled(): boolean`}),` — Checks if the source file contains the `,(0,c.jsx)(t.code,{children:`// wiki:build-none`}),` marker.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`abstract-methods-implementation`,children:`Abstract Methods (Implementation)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPathWiki(): string[]`}),` — Logic to determine the target Wiki file path based on the source file location.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getItemDate(): Date`}),` — Retrieves the file modification date from the `,(0,c.jsx)(t.code,{children:`GitFileItem`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTitle(): string`}),` — Composes a standardized title for the documentation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`readDemo(): string`}),` — Reads the content of the configured demo file.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`readPrompt(): string`}),` — Reads and prepares the prompt template, replacing placeholders like `,(0,c.jsx)(t.code,{children:`[wikiLanguage]`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`makeAi(): void`}),` — Populates the AI instance with relevant context (code, demos, etc.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initName(content: string): string`}),` — Replaces the `,(0,c.jsx)(t.code,{children:`[title]`}),` placeholder in the generated content.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h3,{id:`gitfileitem`,children:`GitFileItem`}),`
`,(0,c.jsx)(t.p,{children:`Represents file information managed by Git.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — Relative path to the file.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`pathByOS: string`}),` — Absolute OS-specific path.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`date: string`}),` — Last modification date.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: any`}),` — Reserved for additional metadata.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/AiDocType - AI Documentation Type Manager`}),`
`,(0,c.jsx)(t.h1,{id:`aidoctype-class`,children:`AiDocType Class`}),`
`,(0,c.jsx)(t.p,{children:`A management class that acts as a registry and selector for different documentation types. It determines which specialized documentation handler (e.g., for classes, functions, or composables) should be used for a given file based on its characteristics.`}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dynamic Registration`}),` — allows adding new documentation types to the system at runtime.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Smart Selection`}),` — automatically identifies the correct documentation handler for a file by iterating through registered types and executing their check logic.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Delegation`}),` — orchestrates the instantiation and execution of specialized documentation handlers (`,(0,c.jsx)(t.code,{children:`AiDocItemAbstract`}),` implementations).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Static API`}),` — provides a convenient static interface for global documentation management without needing instantiation.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`AiDocType`}),` is designed to be used via its static methods. No initialization is required.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiDocType } from '@dxtmisha/scripts'

// The engine uses this class internally to process file items:
await AiDocType.make(gitFileItem)
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`documentation-management`,children:`Documentation Management`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(item: GitFileItem): Promise<void>`}),` — (Static) Analyzes the provided file item, selects the matching documentation type, and triggers the generation process.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`registry-control`,children:`Registry Control`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(type: AiDocTypeItem): void`}),` — (Static) Registers a new documentation type at the beginning of the priority list.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h3,{id:`aidoctypeitem`,children:`AiDocTypeItem`}),`
`,(0,c.jsx)(t.p,{children:`Configuration for a documentation type handler.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`check: (item: GitFileItem) => boolean`}),` — function to determine if this handler is suitable for the file.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: new (path: string, item: GitFileItem) => AiDocItemAbstract`}),` — the handler class constructor.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`gitfileitem`,children:`GitFileItem`}),`
`,(0,c.jsx)(t.p,{children:`Represents file information managed by Git.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — Relative path to the file.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`pathByOS: string`}),` — Absolute OS-specific path.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`date: string`}),` — Last modification date.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: any`}),` — Reserved for additional metadata.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
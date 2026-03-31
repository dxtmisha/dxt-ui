import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/AiDocType - AI Documentation Type Manager`}),`
`,(0,c.jsx)(n.h1,{id:`aidoctype-class`,children:`AiDocType Class`}),`
`,(0,c.jsx)(n.p,{children:`A management class that acts as a registry and selector for different documentation types. It determines which specialized documentation handler (e.g., for classes, functions, or composables) should be used for a given file based on its characteristics.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dynamic Registration`}),` — allows adding new documentation types to the system at runtime.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Smart Selection`}),` — automatically identifies the correct documentation handler for a file by iterating through registered types and executing their check logic.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Delegation`}),` — orchestrates the instantiation and execution of specialized documentation handlers (`,(0,c.jsx)(n.code,{children:`AiDocItemAbstract`}),` implementations).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Static API`}),` — provides a convenient static interface for global documentation management without needing instantiation.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`AiDocType`}),` is designed to be used via its static methods. No initialization is required.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiDocType } from '@dxtmisha/scripts'

// The engine uses this class internally to process file items:
await AiDocType.make(gitFileItem)
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`documentation-management`,children:`Documentation Management`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(item: GitFileItem): Promise<void>`}),` — (Static) Analyzes the provided file item, selects the matching documentation type, and triggers the generation process.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`registry-control`,children:`Registry Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(type: AiDocTypeItem): void`}),` — (Static) Registers a new documentation type at the beginning of the priority list.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`aidoctypeitem`,children:`AiDocTypeItem`}),`
`,(0,c.jsx)(n.p,{children:`Configuration for a documentation type handler.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`check: (item: GitFileItem) => boolean`}),` — function to determine if this handler is suitable for the file.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: new (path: string, item: GitFileItem) => AiDocItemAbstract`}),` — the handler class constructor.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`gitfileitem`,children:`GitFileItem`}),`
`,(0,c.jsx)(n.p,{children:`Represents file information managed by Git.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — Relative path to the file.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathByOS: string`}),` — Absolute OS-specific path.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`date: string`}),` — Last modification date.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: any`}),` — Reserved for additional metadata.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
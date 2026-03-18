import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function n(t){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/scripts/Classes/AiDocType - AI Documentation Type Manager"}),`
`,e.jsx(i.h1,{id:"aidoctype-class",children:"AiDocType Class"}),`
`,e.jsx(i.p,{children:"A management class that acts as a registry and selector for different documentation types. It determines which specialized documentation handler (e.g., for classes, functions, or composables) should be used for a given file based on its characteristics."}),`
`,e.jsx(i.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Dynamic Registration"})," — allows adding new documentation types to the system at runtime."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Smart Selection"})," — automatically identifies the correct documentation handler for a file by iterating through registered types and executing their check logic."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Delegation"})," — orchestrates the instantiation and execution of specialized documentation handlers (",e.jsx(i.code,{children:"AiDocItemAbstract"})," implementations)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Static API"})," — provides a convenient static interface for global documentation management without needing instantiation."]}),`
`]}),`
`,e.jsx(i.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"AiDocType"})," is designed to be used via its static methods. No initialization is required."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`import { AiDocType } from '@dxtmisha/scripts'

// The engine uses this class internally to process file items:
await AiDocType.make(gitFileItem)
`})}),`
`,e.jsx(i.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(i.h3,{id:"documentation-management",children:"Documentation Management"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"make(item: GitFileItem): Promise<void>"})," — (Static) Analyzes the provided file item, selects the matching documentation type, and triggers the generation process."]}),`
`]}),`
`,e.jsx(i.h3,{id:"registry-control",children:"Registry Control"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"add(type: AiDocTypeItem): void"})," — (Static) Registers a new documentation type at the beginning of the priority list."]}),`
`]}),`
`,e.jsx(i.h2,{id:"types",children:"Types"}),`
`,e.jsx(i.h3,{id:"aidoctypeitem",children:"AiDocTypeItem"}),`
`,e.jsx(i.p,{children:"Configuration for a documentation type handler."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"check: (item: GitFileItem) => boolean"})," — function to determine if this handler is suitable for the file."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"item: new (path: string, item: GitFileItem) => AiDocItemAbstract"})," — the handler class constructor."]}),`
`]}),`
`,e.jsx(i.h3,{id:"gitfileitem",children:"GitFileItem"}),`
`,e.jsx(i.p,{children:"Represents file information managed by Git."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"path: string"})," — Relative path to the file."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"pathByOS: string"})," — Absolute OS-specific path."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"date: string"})," — Last modification date."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"item: any"})," — Reserved for additional metadata."]}),`
`]})]})}function m(t={}){const{wrapper:i}={...s(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n(t)}export{m as default};

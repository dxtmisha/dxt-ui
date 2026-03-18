import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/DesignWiki - Wiki Registry Generator"}),`
`,e.jsx(i.h1,{id:"designwiki-class",children:"DesignWiki Class"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"DesignWiki"})," class provides essential infrastructure for the project's documentation system. It automates the creation and initialization of the central wiki configuration file, ensuring that the documentation engine (Storybook) has a stable and typed registry to store component arguments and metadata."]}),`
`,e.jsx(i.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Automated Initialization"})," — Detects missing wiki configuration files and creates them with a standard structure."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Typed Registry"})," — Generates configurations using the ",e.jsx(i.code,{children:"StorybookArgsToList"})," type to ensure full integration with the documentation framework."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Project-Specific Aliasing"})," — Uses the design system's name (from ",e.jsx(i.code,{children:"PropertiesConfig"}),") to create unique, project-aware registry variables."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Safe Execution"})," — Implements existence checks before writing, preventing accidental overwriting of existing documentation configurations."]}),`
`]}),`
`,e.jsx(i.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(i.p,{children:"The class does not require any parameters for initialization. It uses global configurations from the environment."}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`import { DesignWiki } from '@dxtmisha/scripts'

const wikiGenerator = new DesignWiki()
wikiGenerator.make()
`})}),`
`,e.jsx(i.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(i.h3,{id:"control",children:"Control"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"make(): void"})," — Triggers the wiki initialization process."]}),`
`]}),`
`,e.jsx(i.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(i.h3,{id:"the-wiki-initialization-flow",children:"The Wiki Initialization Flow"}),`
`,e.jsxs(i.p,{children:["When ",e.jsx(i.code,{children:"make()"})," is executed, the class follows this internal logic:"]}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Path Resolution"}),": It uses preconfigured directory paths (",e.jsx(i.code,{children:"UI_DIRS_WIKI"}),") and file names (",e.jsx(i.code,{children:"UI_FILE_NAME_WIKI"}),") to locate the target configuration file."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Existence Check"}),": It queries the file system via ",e.jsx(i.code,{children:"PropertiesFile.is()"})," to determine if the ",e.jsx(i.code,{children:".ts"})," configuration file already exists."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Registry Generation"}),": If missing, it fetches the current design system name and constructs a TypeScript template:",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["It imports the necessary ",e.jsx(i.code,{children:"StorybookArgsToList"})," type."]}),`
`,e.jsxs(i.li,{children:["It exports a constant named ",e.jsx(i.code,{children:"wiki[DesignName]"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Persistence"}),": Writes the generated template to the file system, ensuring the documentation engine can immediately begin importing it."]}),`
`]}),`
`,e.jsx(i.h3,{id:"integration-with-storybook",children:"Integration with Storybook"}),`
`,e.jsxs(i.p,{children:["By centralizing the creation of this registry, ",e.jsx(i.code,{children:"DesignWiki"}),' ensures that all developers working on components have a consistent place to document props and states. This registry acts as the "source of truth" for the interactive documentation, allowing Storybook to dynamically render component controls based on the metadata stored here.']})]})}function g(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{g as default};

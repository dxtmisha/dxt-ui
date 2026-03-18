import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/en/scripts/Classes/PropertiesTool - Property Utilities"}),`
`,e.jsx(n.h1,{id:"propertiestool-class",children:"PropertiesTool Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"PropertiesTool"})," class provides a set of static utilities for handling component naming, path resolution, and reading design system configuration files. It serves as an auxiliary tool for other classes, ensuring consistency in naming conventions and providing efficient access to file resources."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Naming Standardization"})," — generates consistent component and CSS class names (camelCase)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Constructor Logic"})," — includes functionality for identifying and loading base constructor properties."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cache Integration"})," — provides efficient reading of property files through a caching system."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flexible Configuration"})," — retrieves active design identifiers directly from environment settings."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["The class provides only static methods, so creating an instance via ",e.jsx(n.code,{children:"new"})," is not required."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { PropertiesTool } from '@dxtmisha/scripts'

// Direct call to static methods
const isConst = PropertiesTool.isConstructor('basic')
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"isconstructor",children:e.jsx(n.code,{children:"isConstructor"})}),`
`,e.jsx(n.p,{children:"Checks if the provided design name matches the system's constructor key. This is essential for separating base meta-properties from specific theme-related properties."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"design: string"})," — the design name to verify."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"boolean"})," — ",e.jsx(n.code,{children:"true"})," if the design is a constructor."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const result = PropertiesTool.isConstructor('dxt.constructor');
// Result: true
`})}),`
`,e.jsx(n.h3,{id:"getdesigns",children:e.jsx(n.code,{children:"getDesigns"})}),`
`,e.jsx(n.p,{children:"Returns a list of design identifiers available in the current environment. This list includes the system constructor and the design specified in the project's primary configuration."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string[]"})," — an array of design names."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const list = PropertiesTool.getDesigns();
// Result: ['dxt.constructor', 'my-project-design']
`})}),`
`,e.jsx(n.h3,{id:"getcomponentname",children:e.jsx(n.code,{children:"getComponentName"})}),`
`,e.jsxs(n.p,{children:["Generates a normalized component name string by combining the design name and the component name. The component name is automatically converted to ",e.jsx(n.code,{children:"camelCase"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"design: string"})," — the design name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"component: string"})," (optional) — the component name."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — the generated name (e.g., ",e.jsx(n.code,{children:"designName-componentName"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const name = PropertiesTool.getComponentName('basic', 'button-primary');
// Result: "basic-buttonPrimary"
`})}),`
`,e.jsx(n.h3,{id:"getclassname",children:e.jsx(n.code,{children:"getClassName"})}),`
`,e.jsxs(n.p,{children:["Similar to ",e.jsx(n.code,{children:"getComponentName"}),", but returns a string formatted as a CSS class selector (starting with a dot)."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"design: string"})," — the design name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"component: string"})," (optional) — the component name."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string"})," — a CSS class string."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const selector = PropertiesTool.getClassName('basic', 'button');
// Result: ".basic-button"
`})}),`
`,e.jsx(n.h3,{id:"readfile",children:e.jsx(n.code,{children:"readFile"})}),`
`,e.jsxs(n.p,{children:["Reads and returns a list of properties (tokens) from the file system. For the constructor, it returns a copy of base properties from ",e.jsx(n.code,{children:"properties.json"}),"; for others, it reads the property file via the system cache."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"design: string"})," — the design name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: string[] | undefined"})," — the directory path containing the file."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"PropertyList | undefined"})," — a property object or ",e.jsx(n.code,{children:"undefined"})," if the path is not provided."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const data = PropertiesTool.readFile('basic', ['src', 'theme', 'settings', 'button']);
`})}),`
`,e.jsx(n.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(n.h3,{id:"the-name-resolution-mechanism",children:"The Name Resolution Mechanism"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Case Transformation"}),": All input component names undergo ",e.jsx(n.code,{children:"toCamelCase"})," before being merged."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Prefixing"}),": Public methods always prepend the design name, preventing style collisions when using multiple themes simultaneously."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Safe Reading"}),": When reading files via ",e.jsx(n.code,{children:"readFile"})," for the constructor, deep copying (",e.jsx(n.code,{children:"copyObject"}),") is used to prevent accidental mutation of global base settings by other tools."]}),`
`]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"generating-a-css-class-for-a-dynamic-component",children:"Generating a CSS Class for a Dynamic Component"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { PropertiesTool } from '@dxtmisha/scripts'

const design = 'basic'
const component = 'input-field'

const className = PropertiesTool.getClassName(design, component)
// Result: .basic-inputField
`})})]})}function p(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{p as default};

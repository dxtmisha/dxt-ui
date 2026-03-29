import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/PropertiesTool - Property Utilities`}),`
`,(0,c.jsx)(n.h1,{id:`propertiestool-class`,children:`PropertiesTool Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesTool`}),` class provides a set of static utilities for handling component naming, path resolution, and reading design system configuration files. It serves as an auxiliary tool for other classes, ensuring consistency in naming conventions and providing efficient access to file resources.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Naming Standardization`}),` — generates consistent component and CSS class names (camelCase).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Constructor Logic`}),` — includes functionality for identifying and loading base constructor properties.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cache Integration`}),` — provides efficient reading of property files through a caching system.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flexible Configuration`}),` — retrieves active design identifiers directly from environment settings.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`The class provides only static methods, so creating an instance via `,(0,c.jsx)(n.code,{children:`new`}),` is not required.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesTool } from '@dxtmisha/scripts'

// Direct call to static methods
const isConst = PropertiesTool.isConstructor('basic')
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`isconstructor`,children:(0,c.jsx)(n.code,{children:`isConstructor`})}),`
`,(0,c.jsx)(n.p,{children:`Checks if the provided design name matches the system's constructor key. This is essential for separating base meta-properties from specific theme-related properties.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`design: string`}),` — the design name to verify.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` if the design is a constructor.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const result = PropertiesTool.isConstructor('dxt.constructor');
// Result: true
`})}),`
`,(0,c.jsx)(n.h3,{id:`getdesigns`,children:(0,c.jsx)(n.code,{children:`getDesigns`})}),`
`,(0,c.jsx)(n.p,{children:`Returns a list of design identifiers available in the current environment. This list includes the system constructor and the design specified in the project's primary configuration.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string[]`}),` — an array of design names.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const list = PropertiesTool.getDesigns();
// Result: ['dxt.constructor', 'my-project-design']
`})}),`
`,(0,c.jsx)(n.h3,{id:`getcomponentname`,children:(0,c.jsx)(n.code,{children:`getComponentName`})}),`
`,(0,c.jsxs)(n.p,{children:[`Generates a normalized component name string by combining the design name and the component name. The component name is automatically converted to `,(0,c.jsx)(n.code,{children:`camelCase`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`design: string`}),` — the design name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`component: string`}),` (optional) — the component name.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — the generated name (e.g., `,(0,c.jsx)(n.code,{children:`designName-componentName`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const name = PropertiesTool.getComponentName('basic', 'button-primary');
// Result: "basic-buttonPrimary"
`})}),`
`,(0,c.jsx)(n.h3,{id:`getclassname`,children:(0,c.jsx)(n.code,{children:`getClassName`})}),`
`,(0,c.jsxs)(n.p,{children:[`Similar to `,(0,c.jsx)(n.code,{children:`getComponentName`}),`, but returns a string formatted as a CSS class selector (starting with a dot).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`design: string`}),` — the design name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`component: string`}),` (optional) — the component name.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — a CSS class string.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const selector = PropertiesTool.getClassName('basic', 'button');
// Result: ".basic-button"
`})}),`
`,(0,c.jsx)(n.h3,{id:`readfile`,children:(0,c.jsx)(n.code,{children:`readFile`})}),`
`,(0,c.jsxs)(n.p,{children:[`Reads and returns a list of properties (tokens) from the file system. For the constructor, it returns a copy of base properties from `,(0,c.jsx)(n.code,{children:`properties.json`}),`; for others, it reads the property file via the system cache.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`design: string`}),` — the design name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string[] | undefined`}),` — the directory path containing the file.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`PropertyList | undefined`}),` — a property object or `,(0,c.jsx)(n.code,{children:`undefined`}),` if the path is not provided.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const data = PropertiesTool.readFile('basic', ['src', 'theme', 'settings', 'button']);
`})}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-name-resolution-mechanism`,children:`The Name Resolution Mechanism`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Case Transformation`}),`: All input component names undergo `,(0,c.jsx)(n.code,{children:`toCamelCase`}),` before being merged.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Prefixing`}),`: Public methods always prepend the design name, preventing style collisions when using multiple themes simultaneously.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Safe Reading`}),`: When reading files via `,(0,c.jsx)(n.code,{children:`readFile`}),` for the constructor, deep copying (`,(0,c.jsx)(n.code,{children:`copyObject`}),`) is used to prevent accidental mutation of global base settings by other tools.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`generating-a-css-class-for-a-dynamic-component`,children:`Generating a CSS Class for a Dynamic Component`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesTool } from '@dxtmisha/scripts'

const design = 'basic'
const component = 'input-field'

const className = PropertiesTool.getClassName(design, component)
// Result: .basic-inputField
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
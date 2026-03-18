import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Classes/PropertiesSettings - Component Settings"}),`
`,e.jsx(n.h1,{id:"propertiessettings-class",children:"PropertiesSettings Class"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"PropertiesSettings"})," class is responsible for automatically searching for and loading component configuration files (settings) across all active designs. It scans specialized ",e.jsx(n.code,{children:"settings"})," directories and merges the identified tokens into a unified registry, which is then used for stylesheet generation and typing."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automated Scanning"})," — independently discovers all component folders within ",e.jsx(n.code,{children:"components"})," and ",e.jsx(n.code,{children:"constructor"})," paths."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multi-Design Support"})," — loads settings for each design separately and combines them contextually."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Constructor Integration"})," — includes specialized logic for collecting component constructor properties (",e.jsx(n.code,{children:"dxt.constructor"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Standardization"})," — automatically transforms raw data from settings files into a standardized property format via ",e.jsx(n.code,{children:"PropertiesStandard"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["To initialize the settings resolver, pass a ",e.jsx(n.code,{children:"PropertiesPath"})," instance to the constructor."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: PropertiesPath"})," — the object for working with design system paths."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { PropertiesPath, PropertiesSettings } from '@dxtmisha/scripts'

const pathHandler = new PropertiesPath()
const settings = new PropertiesSettings(pathHandler)
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"get",children:e.jsx(n.code,{children:"get"})}),`
`,e.jsx(n.p,{children:"Returns a unified list of all settings properties found in the system. This includes both the individual component settings for each design and the shared component constructor properties."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"PropertyList"})," — an object containing all loaded and standardized settings."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const allSettings = settings.get();
// Result: { basic: { button: { ... } }, 'dxt.constructor': { ... } }
`})}),`
`,e.jsx(n.h2,{id:"operations",children:"Operations"}),`
`,e.jsx(n.h3,{id:"the-settings-collection-process",children:"The Settings Collection Process"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"PropertiesSettings"})," performs its data search in several stages:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Path Determination"}),": The class retrieves the current paths to ",e.jsx(n.code,{children:"settings"})," directories for each design via the path manager."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Directory Scanning"}),": For each identified path, all subdirectories (component names) are scanned."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"File Reading"}),": Within each component folder, a token file (settings) is searched for and read via ",e.jsx(n.code,{children:"PropertiesFile"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Normalization"}),": The retrieved data is processed through ",e.jsx(n.code,{children:"PropertiesStandard"})," to bring it into a uniform format (",e.jsx(n.code,{children:"PropertyItem"}),"), including converting names to kebab-case."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Constructor Generation"}),": Simultaneously, ",e.jsx(n.code,{children:"getConstructorProperties()"})," is called, which forms meta-data for the component constructor based on the list of identified folders."]}),`
`]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"collecting-all-system-settings",children:"Collecting All System Settings"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { PropertiesSettings, PropertiesPath } from '@dxtmisha/scripts'

const settingsManager = new PropertiesSettings(new PropertiesPath())
const config = settingsManager.get()

// config now contains all component variables for all themes
`})})]})}function p(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{p as default};

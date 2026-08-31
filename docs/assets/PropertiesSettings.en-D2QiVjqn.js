import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/PropertiesSettings - Component Settings`}),`
`,(0,c.jsx)(t.h1,{id:`propertiessettings-class`,children:`PropertiesSettings Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`PropertiesSettings`}),` class is responsible for automatically searching for and loading component configuration files (settings) across all active designs. It scans specialized `,(0,c.jsx)(t.code,{children:`settings`}),` directories and merges the identified tokens into a unified registry, which is then used for stylesheet generation and typing.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Scanning`}),` — independently discovers all component folders within `,(0,c.jsx)(t.code,{children:`components`}),` and `,(0,c.jsx)(t.code,{children:`constructor`}),` paths.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Multi-Design Support`}),` — loads settings for each design separately and combines them contextually.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Constructor Integration`}),` — includes specialized logic for collecting component constructor properties (`,(0,c.jsx)(t.code,{children:`dxt.constructor`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Standardization`}),` — automatically transforms raw data from settings files into a standardized property format via `,(0,c.jsx)(t.code,{children:`PropertiesStandard`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To initialize the settings resolver, pass a `,(0,c.jsx)(t.code,{children:`PropertiesPath`}),` instance to the constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: PropertiesPath`}),` — the object for working with design system paths.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesPath, PropertiesSettings } from '@dxtmisha/scripts'

const pathHandler = new PropertiesPath()
const settings = new PropertiesSettings(pathHandler)
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`get`,children:(0,c.jsx)(t.code,{children:`get`})}),`
`,(0,c.jsx)(t.p,{children:`Returns a unified list of all settings properties found in the system. This includes both the individual component settings for each design and the shared component constructor properties.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`PropertyList`}),` — an object containing all loaded and standardized settings.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const allSettings = settings.get();
// Result: { basic: { button: { ... } }, 'dxt.constructor': { ... } }
`})}),`
`,(0,c.jsx)(t.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(t.h3,{id:`the-settings-collection-process`,children:`The Settings Collection Process`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`PropertiesSettings`}),` performs its data search in several stages:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Path Determination`}),`: The class retrieves the current paths to `,(0,c.jsx)(t.code,{children:`settings`}),` directories for each design via the path manager.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Directory Scanning`}),`: For each identified path, all subdirectories (component names) are scanned.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`File Reading`}),`: Within each component folder, a token file (settings) is searched for and read via `,(0,c.jsx)(t.code,{children:`PropertiesFile`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Normalization`}),`: The retrieved data is processed through `,(0,c.jsx)(t.code,{children:`PropertiesStandard`}),` to bring it into a uniform format (`,(0,c.jsx)(t.code,{children:`PropertyItem`}),`), including converting names to kebab-case.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Constructor Generation`}),`: Simultaneously, `,(0,c.jsx)(t.code,{children:`getConstructorProperties()`}),` is called, which forms meta-data for the component constructor based on the list of identified folders.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.h3,{id:`collecting-all-system-settings`,children:`Collecting All System Settings`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesSettings, PropertiesPath } from '@dxtmisha/scripts'

const settingsManager = new PropertiesSettings(new PropertiesPath())
const config = settingsManager.get()

// config now contains all component variables for all themes
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
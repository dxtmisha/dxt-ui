import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/PropertiesToReplace - Regex String Replace Transformer`}),`
`,(0,c.jsx)(t.h1,{id:`propertiestoreplace-class`,children:`PropertiesToReplace Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`PropertiesToReplace`}),` class transforms string values of design tokens using regular expressions specified by a `,(0,c.jsx)(t.code,{children:`replace`}),` configuration. It extends `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Regex Transformation`}),` — Evaluates regex match criteria and overrides token values with processed output.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Flexible Configuration Options`}),` — Supports either shorthand pattern strings or detailed `,(0,c.jsx)(t.code,{children:`PropertyReplace`}),` configuration objects (defining pattern, flags, and replacement strings).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cleanup Safety`}),` — Removes the temporary `,(0,c.jsx)(t.code,{children:`replace`}),` directive flag from token properties after successfully transforming the target value.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cache Persistence`}),` — Saves the updated token mappings to the `,(0,c.jsx)(t.code,{children:`001-replace`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToReplace, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToReplace(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`transform--utility-operations`,children:`Transform & Utility Operations`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to loop through properties, detect string values with a `,(0,c.jsx)(t.code,{children:`replace`}),` directive, and perform transformations.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getInfo(info: PropertiesReplaceValue): PropertyReplace`}),` — Normalizes incoming shorthand string patterns or detailed configurations into structured `,(0,c.jsx)(t.code,{children:`PropertyReplace`}),` objects.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getValue(info: PropertyReplace, value: string): string`}),` — Executes the regex substitution, returning the replaced string.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/PropertiesToReplace - Regex String Replace Transformer`}),`
`,(0,c.jsx)(n.h1,{id:`propertiestoreplace-class`,children:`PropertiesToReplace Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesToReplace`}),` class transforms string values of design tokens using regular expressions specified by a `,(0,c.jsx)(n.code,{children:`replace`}),` configuration. It extends `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Regex Transformation`}),` — Evaluates regex match criteria and overrides token values with processed output.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flexible Configuration Options`}),` — Supports either shorthand pattern strings or detailed `,(0,c.jsx)(n.code,{children:`PropertyReplace`}),` configuration objects (defining pattern, flags, and replacement strings).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cleanup Safety`}),` — Removes the temporary `,(0,c.jsx)(n.code,{children:`replace`}),` directive flag from token properties after successfully transforming the target value.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cache Persistence`}),` — Saves the updated token mappings to the `,(0,c.jsx)(n.code,{children:`001-replace`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToReplace, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToReplace(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`transform--utility-operations`,children:`Transform & Utility Operations`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to loop through properties, detect string values with a `,(0,c.jsx)(n.code,{children:`replace`}),` directive, and perform transformations.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getInfo(info: PropertiesReplaceValue): PropertyReplace`}),` — Normalizes incoming shorthand string patterns or detailed configurations into structured `,(0,c.jsx)(n.code,{children:`PropertyReplace`}),` objects.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getValue(info: PropertyReplace, value: string): string`}),` — Executes the regex substitution, returning the replaced string.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
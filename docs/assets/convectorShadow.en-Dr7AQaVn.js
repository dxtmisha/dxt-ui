import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Functions/convectorShadow - Convert shadow structures to CSS shadow values`}),`
`,(0,c.jsx)(n.h1,{id:`convectorshadow`,children:(0,c.jsx)(n.code,{children:`convectorShadow`})}),`
`,(0,c.jsx)(n.p,{children:`The function transforms raw shadow configurations or shadow arrays into CSS box-shadow string values.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: PropertyItemInput`}),` — the design token property item to transform.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`void`}),` — the function directly mutates the `,(0,c.jsx)(n.code,{children:`value`}),` property of the passed `,(0,c.jsx)(n.code,{children:`item`}),` object.`]}),`
`,(0,c.jsx)(n.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsxs)(n.p,{children:[`The function checks if `,(0,c.jsx)(n.code,{children:`item.value`}),` is an object. If so, it traverses the shadow config items (converting a single object into an array if needed). For each shadow config:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`It maps type `,(0,c.jsx)(n.code,{children:`innerShadow`}),` to `,(0,c.jsx)(n.code,{children:`inset`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`It parses offset dimensions (`,(0,c.jsx)(n.code,{children:`x`}),`, `,(0,c.jsx)(n.code,{children:`y`}),`, `,(0,c.jsx)(n.code,{children:`blur`}),`, `,(0,c.jsx)(n.code,{children:`spread`}),`), appending a `,(0,c.jsx)(n.code,{children:`px`}),` suffix to pure numeric strings.`]}),`
`,(0,c.jsxs)(n.li,{children:[`If the color parameter contains an interpolation brace `,(0,c.jsx)(n.code,{children:`{`}),`, it wraps the color in `,(0,c.jsx)(n.code,{children:`@ui.toCustomVarRgb(...)`}),` format.`]}),`
`,(0,c.jsx)(n.li,{children:`It joins all parsed parts with spaces and joins multiple shadow listings with commas.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { convectorShadow } from '@dxtmisha/scripts'

const item = {
  value: {
    type: 'innerShadow',
    color: '{sys.color.primary}',
    x: '0',
    y: '4',
    blur: '10',
    spread: '2'
  }
}
convectorShadow(item)

console.log(item.value) // "inset 0px 4px 10px 2px @ui.toCustomVarRgb({sys.color.primary})"
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
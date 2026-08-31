import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Functions/convectorShadow - Convert shadow structures to CSS shadow values`}),`
`,(0,c.jsx)(t.h1,{id:`convectorshadow`,children:(0,c.jsx)(t.code,{children:`convectorShadow`})}),`
`,(0,c.jsx)(t.p,{children:`The function transforms raw shadow configurations or shadow arrays into CSS box-shadow string values.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: PropertyItemInput`}),` — the design token property item to transform.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`void`}),` — the function directly mutates the `,(0,c.jsx)(t.code,{children:`value`}),` property of the passed `,(0,c.jsx)(t.code,{children:`item`}),` object.`]}),`
`,(0,c.jsx)(t.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsxs)(t.p,{children:[`The function checks if `,(0,c.jsx)(t.code,{children:`item.value`}),` is an object. If so, it traverses the shadow config items (converting a single object into an array if needed). For each shadow config:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`It maps type `,(0,c.jsx)(t.code,{children:`innerShadow`}),` to `,(0,c.jsx)(t.code,{children:`inset`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`It parses offset dimensions (`,(0,c.jsx)(t.code,{children:`x`}),`, `,(0,c.jsx)(t.code,{children:`y`}),`, `,(0,c.jsx)(t.code,{children:`blur`}),`, `,(0,c.jsx)(t.code,{children:`spread`}),`), appending a `,(0,c.jsx)(t.code,{children:`px`}),` suffix to pure numeric strings.`]}),`
`,(0,c.jsxs)(t.li,{children:[`If the color parameter contains an interpolation brace `,(0,c.jsx)(t.code,{children:`{`}),`, it wraps the color in `,(0,c.jsx)(t.code,{children:`@ui.toCustomVarRgb(...)`}),` format.`]}),`
`,(0,c.jsx)(t.li,{children:`It joins all parsed parts with spaces and joins multiple shadow listings with commas.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { convectorShadow } from '@dxtmisha/scripts'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/styles/color/| functions/getPaletteItemOpacity - Opacity search chain`}),`
`,(0,c.jsx)(n.h1,{id:`getpaletteitemopacity`,children:(0,c.jsx)(n.code,{children:`getPaletteItemOpacity`})}),`
`,(0,c.jsxs)(n.p,{children:[`The function generates a nested CSS variable chain (using the `,(0,c.jsx)(n.code,{children:`var()`}),` fallback parameter) to search for an opacity value across multiple palette nodes.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$palette: List | String`}),` — list of palette variable names or a single name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color | String`}),` — the fallback color if no palette variables are defined.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`String`}),` — a nested `,(0,c.jsx)(n.code,{children:`var(--name1-opacity, var(--name2-opacity, ...))`}),` string.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$chain: styles.getPaletteItemOpacity(('theme-color', 'sys-color'), #ff0000); 
// var(--theme-color-opacity, var(--sys-color-opacity, 1))
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
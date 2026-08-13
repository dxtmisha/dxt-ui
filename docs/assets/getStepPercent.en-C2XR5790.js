import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getStepPercent - Calculate percentage step`}),`
`,(0,c.jsx)(t.h1,{id:`getsteppercent`,children:(0,c.jsx)(t.code,{children:`getStepPercent`})}),`
`,(0,c.jsx)(t.p,{children:`Calculates what percentage of the total range (between the minimum and maximum values) corresponds to a single unit (or one step = 1). This function is helpful when positioning segments of sliders or progress bars using percentages.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`min: number | undefined`}),` — The minimum value of the range. If `,(0,c.jsx)(t.code,{children:`undefined`}),` is passed, `,(0,c.jsx)(t.code,{children:`0`}),` is used.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max: number`}),` — The maximum value of the range.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`number`}),` — The percentage (from 0 to 100) that one step occupies. If the maximum value is less than or equal to the minimum, it returns `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getStepPercent } from '@dxtmisha/functional-basic'

// Range from 0 to 200, so a step of 1 corresponds to 0.5%
console.log(getStepPercent(0, 200)) // 0.5

// Range from 50 to 150 (difference 100), a step is 1%
console.log(getStepPercent(50, 150)) // 1
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
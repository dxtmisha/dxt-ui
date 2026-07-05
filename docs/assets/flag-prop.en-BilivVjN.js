import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/# UI/properties/flags/Component Prop (prop)`}),`
`,(0,c.jsx)(n.h1,{id:`component-prop-prop`,children:`Component Prop (prop)`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`_prop`}),` flag instructs the generator that the given property should become part of the component's public interface (Props) and be available in TypeScript. This allows for controlling component styles via external parameters.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Input Configuration (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "~size": {
      "sm": { "height": "32px" },
      "md": { "height": "40px" },
      "_prop": true,
      "_default": "md"
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Output Result (TypeScript):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`type PropsToken = {
  size?: 'sm' | 'md'
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
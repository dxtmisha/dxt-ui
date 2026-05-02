import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/# UI/properties/types/Responsiveness (media, container)`}),`
`,(0,c.jsx)(n.h1,{id:`responsiveness-media-container`,children:`Responsiveness (media, container)`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`media`}),` and `,(0,c.jsx)(n.code,{children:`container`}),` structural types manage the generation of adaptive rules (`,(0,c.jsx)(n.code,{children:`@media`}),` and `,(0,c.jsx)(n.code,{children:`@container`}),`). They enable precise scaling of the interface based on viewport dimensions or parent block constraints.`]}),`
`,(0,c.jsx)(n.p,{children:`The system distinguishes four primary responsiveness types, deeply integrated with the design system's breakpoints:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`media`}),`: Generates a `,(0,c.jsx)(n.code,{children:`min-width`}),` condition (from the specified point and above). If two values are passed (e.g., `,(0,c.jsx)(n.code,{children:`sm,md`}),`), it generates a range: `,(0,c.jsx)(n.code,{children:`(min-width: ...) and (max-width: ...)`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`media-max`}),`: Generates a `,(0,c.jsx)(n.code,{children:`max-width`}),` condition. The system automatically subtracts `,(0,c.jsx)(n.code,{children:`1px`}),` from the breakpoint value to prevent style overlap at the exact boundary.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`container`}),` / `,(0,c.jsx)(n.strong,{children:`container-max`}),`: Operate identically to media queries but generate `,(0,c.jsx)(n.code,{children:`@container`}),` rules, allowing elements to adapt to their parent container's dimensions. Requires `,(0,c.jsx)(n.code,{children:`container-type`}),` to be defined on the parent element.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Adaptive queries can be initialized using the `,(0,c.jsx)(n.code,{children:`|`}),` separator shortcut (e.g., `,(0,c.jsx)(n.code,{children:`media-max|md`}),`) or explicitly via the `,(0,c.jsx)(n.code,{children:`_type`}),` property. The `,(0,c.jsx)(n.code,{children:`value`}),` field accepts both design tokens (sm, md, lg) and raw CSS units (768px).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Input Configuration (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "card": {
    "padding": "24px",
    
    "media-max|md": {            // Viewport-based query (media-max)
      "padding": "16px"
    },
    
    "mobile": {                  // Explicit type declaration (explicit)
      "_type": "container-max",  // Parent-based query (container-max)
      "value": "400px",
      "padding": "8px"
    },
    
    "container-max|lg": {        // Container-max shortcut
       "padding": "20px"
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Conceptual Compiled Output (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.card {
  padding: 24px;

  @media (max-width: 960px) {    // media-max|md
    padding: 16px;
  }

  @container (max-width: 400px) { // _type: container-max
    padding: 8px;
  }
  
  @container (max-width: 1200px) { // container-max|lg
    padding: 20px;
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`group-formation-media-group`,children:`Group Formation (Media Group)`}),`
`,(0,c.jsxs)(n.p,{children:[`The specialized types `,(0,c.jsx)(n.code,{children:`media-group`}),`, `,(0,c.jsx)(n.code,{children:`media-max-group`}),`, `,(0,c.jsx)(n.code,{children:`container-group`}),`, and `,(0,c.jsx)(n.code,{children:`container-max-group`}),` allow for the automatic generation of a set of adaptive rules for all available breakpoints defined in the system.`]}),`
`,(0,c.jsx)(n.p,{children:`This eliminates the need to manually write each media query when the adaptation logic is the same for different sizes but must be encapsulated into separate selectors.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Example Configuration (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "group|icon": {
      "_type": "media-group",
      "padding": "8px"
    }
  }
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Compiled Output (SCSS):`}),`
When using `,(0,c.jsx)(n.code,{children:`media-group`}),`, the system creates nested classes for each breakpoint by adding a suffix (e.g., `,(0,c.jsx)(n.code,{children:`iconSm`}),`, `,(0,c.jsx)(n.code,{children:`iconMd`}),`):`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  &--iconSm { @media (min-width: 640px) { padding: 8px; } }
  &--iconMd { @media (min-width: 768px) { padding: 8px; } }
  &--iconLg { @media (min-width: 1024px) { padding: 8px; } }
  // and so on for all breakpoints...
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
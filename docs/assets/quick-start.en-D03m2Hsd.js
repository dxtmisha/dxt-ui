import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/# UI/properties/! Quick start`}),`
`,(0,c.jsx)(n.h1,{id:`quick-start`,children:`Quick Start`}),`
`,(0,c.jsxs)(n.p,{children:[`This guide helps you quickly master working with the `,(0,c.jsx)(n.code,{children:`properties.json`}),` file using a typical UI component as an example. The file serves as the `,(0,c.jsx)(n.strong,{children:`single source of truth`}),` — both styles (SCSS) and the programmatic interface (TypeScript Props) are generated from it.`]}),`
`,(0,c.jsx)(n.h2,{id:`1-base-properties-and-tokens`,children:`1. Base Properties and Tokens`}),`
`,(0,c.jsxs)(n.p,{children:[`Instead of fixed values (HEX, px), always use the design token system `,(0,c.jsx)(n.code,{children:`{sys...}`}),`. This ensures theme support and consistency.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "padding": "{sys.spacing.md}",
  "background-color": "{sys.palette.surface}",
  "border-radius": "{sys.rounded.md}"
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Result (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.component {
  padding: var(--sys-spacing-md);
  background-color: var(--sys-palette-surface);
  border-radius: var(--sys-rounded-md);
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`2-states`,children:`2. States`}),`
`,(0,c.jsx)(n.p,{children:`Use reserved keys to describe interactivity (hover, focus, active, disabled).`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "hover": {
    "background-color": "{sys.palette.surfaceVariant}"
  },
  "disabled": {
    "opacity": "{sys.opacity.disabled}",
    "cursor": "not-allowed"
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Result (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.component {
  &:hover { background-color: var(--sys-palette-surfaceVariant); }
  &:disabled { 
    opacity: var(--sys-opacity-disabled);
    cursor: not-allowed;
  }
}
`})}),`
`,(0,c.jsxs)(n.h2,{id:`3-modifiers-marker-`,children:[`3. Modifiers (Marker `,(0,c.jsx)(n.code,{children:`~`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`To create a variation of a component (e.g., `,(0,c.jsx)(n.code,{children:`primary`}),` or `,(0,c.jsx)(n.code,{children:`secondary`}),`), use the `,(0,c.jsx)(n.code,{children:`~`}),` prefix. These keys are automatically transformed into `,(0,c.jsx)(n.strong,{children:`Props`}),` in Vue/React and BEM modifiers in CSS.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "~primary": {
    "color": "{sys.palette.onPrimary}",
    "background-color": "{sys.palette.primary}",
    "_default": true
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Result (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.component {
  &--primary {
    color: var(--sys-palette-onPrimary);
    background-color: var(--sys-palette-primary);
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Result (TypeScript Props):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`type PropsToken = {
  primary?: boolean // Generated automatically
}
`})}),`
`,(0,c.jsxs)(n.h2,{id:`4-custom-variables-_var`,children:[`4. Custom Variables (`,(0,c.jsx)(n.code,{children:`_var`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`If you need a property to be available as a CSS variable for external control or use in scripts, add the `,(0,c.jsx)(n.code,{children:`_var: true`}),` flag.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "height": {
    "value": "48px",
    "_var": true
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Result (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.component {
  --component-height: 48px;
  height: var(--component-height);
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
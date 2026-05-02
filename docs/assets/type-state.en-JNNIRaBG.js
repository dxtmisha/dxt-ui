import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/# UI/properties/types/State (state)`}),`
`,(0,c.jsx)(n.h1,{id:`state-state`,children:`State (state)`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`state`}),` structural type is designated for conceptualizing functional variations, interactive modes, or modifier scales (such as size grids). Assigning this type explicitly forces the compiler to map a modifier CSS class natively to the parent scope adhering to BEM (e.g., `,(0,c.jsx)(n.code,{children:`&--primary`}),` or composite `,(0,c.jsx)(n.code,{children:`&--size-sm`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`States can be rigidly declared utilizing the `,(0,c.jsx)(n.code,{children:`~`}),` prefix or manually via the systemic `,(0,c.jsx)(n.code,{children:`_type: "state"`}),` property. Within `,(0,c.jsx)(n.code,{children:`dxt-ui`}),`, every declared state natively reflects in the component's strict typings (`,(0,c.jsx)(n.code,{children:`props.ts`}),`) and synchronizes with Vue's reactive prop bindings.`]}),`
`,(0,c.jsx)(n.p,{children:`The architectural engine relies on two foundational approaches:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Singular states:`}),` Utilized for pure boolean toggle flags (e.g., `,(0,c.jsx)(n.code,{children:`~primary`}),`). The corresponding compiled modifier is mapped explicitly (`,(0,c.jsx)(n.code,{children:`&--primary`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Grouped states:`}),` Utilized for array-like or multi-value properties (e.g., the `,(0,c.jsx)(n.code,{children:`~size`}),` grid). Nested structural keys organically emit composite modifiers (`,(0,c.jsx)(n.code,{children:`&--size-sm`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`_default`}),` key defines the foundational fallback value during component initialization. Boolean flags accept a `,(0,c.jsx)(n.code,{children:`true`}),` assignment, whereas grouped parameters require the string identifier of the active node (e.g., `,(0,c.jsx)(n.code,{children:`"md"`}),`). The compiler automatically translates this structural fallback into the `,(0,c.jsx)(n.code,{children:`props.ts`}),` configuration.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Input Configuration (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "padding": "12px",
    
    "~primary": {                // Singular state (utilizing ~ alias)
      "background-color": "blue",
      "_default": true           // Boolean default fallback
    },
    
    "disabled": {                // Explicit state type assignment
      "_type": "state",
      "opacity": "0.5"
    },
    
    "~size": {                   // Grouped multi-value states
      "sm": { "height": "32px" },
      "md": { "height": "40px" },
      "_default": "md"           // String default fallback
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Conceptual Compiled Output (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  padding: 12px;

  &--primary { background-color: blue; }
  &--disabled { opacity: 0.5; }
  &--size-sm { height: 32px; }
  &--size-md { height: 40px; }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Vue Integration (`,(0,c.jsx)(n.code,{children:`props.ts`}),` and `,(0,c.jsx)(n.code,{children:`Component.vue`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// --- props.ts ---
primary?: boolean
disabled?: boolean
size?: 'sm' | 'md'

// --- Component.vue (class bindings) ---
'd1-button--primary': props.primary,
'd1-button--disabled': props.disabled,
[\`d1-button--size--\${props.size}\`]: inArray(propsValues.size, props.size)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
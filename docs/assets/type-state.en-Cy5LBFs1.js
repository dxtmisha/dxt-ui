import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/1. UI/properties/types/State (state)`}),`
`,(0,c.jsx)(t.h1,{id:`state-state`,children:`State (state)`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`state`}),` structural type is designated for conceptualizing functional variations, interactive modes, or modifier scales (such as size grids). Assigning this type explicitly forces the compiler to map a modifier CSS class natively to the parent scope adhering to BEM (e.g., `,(0,c.jsx)(t.code,{children:`&--primary`}),` or composite `,(0,c.jsx)(t.code,{children:`&--size-sm`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`States can be rigidly declared utilizing the `,(0,c.jsx)(t.code,{children:`~`}),` prefix or manually via the systemic `,(0,c.jsx)(t.code,{children:`_type: "state"`}),` property. Within `,(0,c.jsx)(t.code,{children:`dxt-ui`}),`, every declared state natively reflects in the component's strict typings (`,(0,c.jsx)(t.code,{children:`props.ts`}),`) and synchronizes with Vue's reactive prop bindings.`]}),`
`,(0,c.jsx)(t.p,{children:`The architectural engine relies on two foundational approaches:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Singular states:`}),` Utilized for pure boolean toggle flags (e.g., `,(0,c.jsx)(t.code,{children:`~primary`}),`). The corresponding compiled modifier is mapped explicitly (`,(0,c.jsx)(t.code,{children:`&--primary`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Grouped states:`}),` Utilized for array-like or multi-value properties (e.g., the `,(0,c.jsx)(t.code,{children:`~size`}),` grid). Nested structural keys organically emit composite modifiers (`,(0,c.jsx)(t.code,{children:`&--size-sm`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`_default`}),` key defines the foundational fallback value during component initialization. Boolean flags accept a `,(0,c.jsx)(t.code,{children:`true`}),` assignment, whereas grouped parameters require the string identifier of the active node (e.g., `,(0,c.jsx)(t.code,{children:`"md"`}),`). The compiler automatically translates this structural fallback into the `,(0,c.jsx)(t.code,{children:`props.ts`}),` configuration.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Input Configuration (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
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
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Conceptual Compiled Output (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.button {
  padding: 12px;

  &--primary { background-color: blue; }
  &--disabled { opacity: 0.5; }
  &--size-sm { height: 32px; }
  &--size-md { height: 40px; }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Vue Integration (`,(0,c.jsx)(t.code,{children:`props.ts`}),` and `,(0,c.jsx)(t.code,{children:`Component.vue`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// --- props.ts ---
primary?: boolean
disabled?: boolean
size?: 'sm' | 'md'

// --- Component.vue (class bindings) ---
'd1-button--primary': props.primary,
'd1-button--disabled': props.disabled,
[\`d1-button--size--\${props.size}\`]: inArray(propsValues.size, props.size)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
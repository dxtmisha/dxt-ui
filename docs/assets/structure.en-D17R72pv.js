import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/# UI/properties/# Structure`}),`
`,(0,c.jsx)(n.h1,{id:`structure`,children:`Structure`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`properties.json`}),` configuration acts completely as a tree structure. Object keys on every depth boundary act as explicit names (selectors), and bottom leaf-nodes act as actual style setups (known as `,(0,c.jsx)(n.code,{children:`PropertyItem`}),`). Any standard CSS property explicitly defined as a key naturally generates valid CSS mapping formatting.`]}),`
`,(0,c.jsxs)(n.p,{children:[`The following structure demonstrates the definition of base styles, state modifiers (`,(0,c.jsx)(n.code,{children:`hover`}),`, `,(0,c.jsx)(n.code,{children:`disabled`}),`), and stylistic variations that compile into Vue Props.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "padding": "var(--sys-height) * {sys.spacing.adaptive.md}",
  
  "hover": {
    "gradient-opacity": "{sys.opacity.hover}"
  },

  "disabled": {
    "color": "{sys.palette.onSurface}",
    "color-opacity": "{sys.opacity.surface.disabled}"
  },

  "~primary": {
    "color": "{sys.palette.onPrimary}",
    "palette-background": "{sys.palette.primary}",
    "active": {
      "box-shadow": "{sys.shadow.lg}"
    },
    "_category": "style",
    "_default": true
  },

  "~size": {
    "sm": {
      "height": "{ref.spacing.10}"
    },
    "md": {
      "height": "{ref.spacing.12}"
    },
    "_default": "md"
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:`The properties generator processes the JSON schema via the following compilation rules:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Physical style keys (e.g., `,(0,c.jsx)(n.code,{children:`padding`}),`) are inherently generated inside the `,(0,c.jsx)(n.code,{children:`.component`}),` CSS layout block.`]}),`
`,(0,c.jsxs)(n.li,{children:[`System token linkages wrapped in `,(0,c.jsx)(n.code,{children:`{...}`}),` are correctly resolved into their designated design system CSS variables.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Property variations mapped with the `,(0,c.jsx)(n.code,{children:`~`}),` prefix are concurrently compiled into structural CSS modifiers (e.g., `,(0,c.jsx)(n.code,{children:`--primary`}),`) and exported into the component's TypeScript interface.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Generated SCSS compilation:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.component {
  padding: calc(var(--sys-height) * var(--sys-spacing-adaptive-md));

  /* Pseudo-classes states */
  &:hover {
    --component-gradient-opacity: var(--sys-opacity-hover);
  }
  &:disabled {
    color: var(--sys-palette-onSurface);
    --component-color-opacity: var(--sys-opacity-surface-disabled);
  }

  /* Modification category "style": --primary */
  &--primary {
    color: var(--sys-palette-onPrimary);
    background-color: var(--sys-palette-primary);
    
    &:active {
      box-shadow: var(--sys-shadow-lg);
    }
  }

  /* Modifiers groups "size" */
  &--size-sm { height: var(--ref-spacing-10); }
  &--size-md { height: var(--ref-spacing-12); }
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Generated Vue Props interface (`,(0,c.jsx)(n.code,{children:`props.ts`}),`):`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`type PropsToken = {
  // :type [!] System label / Системная метка
  primary?: boolean
  size?: 'sm' | 'md'
  // :type [!] System label / Системная метка
}

export const defaults: object = {
  // :default [!] System label / Системная метка
  primary: true,
  size: 'md'
  // :default [!] System label / Системная метка
}
`})}),`
`,(0,c.jsx)(n.p,{children:`Generated Vue class binding logic:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'component': true,
    'component--primary': props.primary,
    [\`component--size--\${props.size}\`]: inArray(propsValues.size, props.size)
    // :classes-values [!] System label / Системная метка
  }
}))
`})}),`
`,(0,c.jsx)(n.h2,{id:`key-hierarchy`,children:`Key Hierarchy`}),`
`,(0,c.jsx)(n.p,{children:`Normally the depth pattern follows:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Root Domain node — `,(0,c.jsx)(n.code,{children:`[Design / Global scope Name]`}),` (e.g. `,(0,c.jsx)(n.code,{children:`ui`}),`, `,(0,c.jsx)(n.code,{children:`d1`}),`)`]}),`
`,(0,c.jsxs)(n.li,{children:[`Element node — `,(0,c.jsx)(n.code,{children:`[Component Name]`}),` (e.g. `,(0,c.jsx)(n.code,{children:`component`}),`)`]}),`
`,(0,c.jsxs)(n.li,{children:[`Logic node — `,(0,c.jsx)(n.code,{children:`[Styles, sub-components, properties attributes]`}),` (e.g. `,(0,c.jsx)(n.code,{children:`background`}),`, `,(0,c.jsx)(n.code,{children:`size`}),`, `,(0,c.jsx)(n.code,{children:`hover`}),`, `,(0,c.jsx)(n.code,{children:`--padding`}),`)`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`inter-links-mapping`,children:`Inter-Links Mapping`}),`
`,(0,c.jsxs)(n.p,{children:[`Values wrapped in curly braces (e.g., `,(0,c.jsx)(n.code,{children:`"{sys.palette.primary}"`}),` or `,(0,c.jsx)(n.code,{children:`"{ref.spacing.10}"`}),`) allow you to dynamically reference design system tokens. During compilation, they are substituted with their actual CSS variables or mapped absolute values automatically.`]}),`
`,(0,c.jsx)(n.h2,{id:`service-flags`,children:`Service flags`}),`
`,(0,c.jsxs)(n.p,{children:[`All configuration keys managing the generator processes start with a bottom underscore `,(0,c.jsx)(n.code,{children:`_`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`fundamental-identifiers`,children:`Fundamental Identifiers`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_type: string`}),` — Maps the output generator rendering component rule (`,(0,c.jsx)(n.code,{children:`var`}),`, `,(0,c.jsx)(n.code,{children:`state`}),`, `,(0,c.jsx)(n.code,{children:`subclass`}),`, `,(0,c.jsx)(n.code,{children:`media`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_category: string`}),` — Provides metadata classification tagging for sortings explicitly.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`behaviors-modifications`,children:`Behaviors modifications`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_var: boolean`}),` — Signals generator building mapping local CSS variable format explicitly for node (`,(0,c.jsx)(n.code,{children:`--name: value`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_state: boolean`}),` — Tags current processing node matching internal `,(0,c.jsx)(n.code,{children:`state`}),` processing rendering setup layout block configuration.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_subclass: boolean`}),` — Sets local component identifying subclass nested properties.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_prop: boolean`}),` — Includes the node processing result towards `,(0,c.jsx)(n.code,{children:`props.ts`}),` generation exporting value via Vue/React.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_theme: string`}),` — Anchors processing layout styles to specified color theme processing dynamically.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`parsing-and-parameters`,children:`Parsing and parameters`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_rename: string`}),` — Overrides output strings variable representation. (Key `,(0,c.jsx)(n.code,{children:`backgroundItem`}),` with `,(0,c.jsx)(n.code,{children:`_rename: "bg"`}),` outputs `,(0,c.jsx)(n.code,{children:`.component__bg`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_replace: string`}),` — Allows replacing the pattern via internal RegEx match configurations.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_fullName: string`}),` — Ignores standard tree names scoping mapping explicit structure strings exactly.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_fullValue: string`}),` — Outputs precise variable processing strings avoiding numbers/px suffix parsing parameters.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_default: any`}),` — Outputs parameter configurations applying exact properties as fallback mechanism natively values outputs logic setups.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`structure-architecture-configs`,children:`Structure Architecture Configs`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_important: boolean`}),` — Extends parameter applying matching output rendering value logic via `,(0,c.jsx)(n.code,{children:`!important`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_modification: boolean`}),` — Modifies structure explicitly rendering variations handling element structures specifically.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_drag: string`}),` — Points pipeline pulling sub-tree data replacing into different configurations path branches automatically logic processing setups configurations.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_dragSetting: boolean`}),` — Pushes internal nested processing setups propagating settings internally towards leaf nodes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_settingClone: boolean`}),` — Clones the current configuration settings propagating them into nested levels.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_style: boolean`}),` — Outputs local structural CSS layouts variables explicitly inline styles layouts structures parameters correctly.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_remove: boolean`}),` — Filters out current processing element structure completely erasing node output mapping rendering format.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
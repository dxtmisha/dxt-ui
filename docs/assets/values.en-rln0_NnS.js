import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/1. UI/properties/4. Values`}),`
`,(0,c.jsx)(t.h1,{id:`working-with-values-value`,children:`Working with values (Value)`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`value`}),` field in `,(0,c.jsx)(t.code,{children:`properties.json`}),` defines the final content of a property (color, dimension, path, etc.). The `,(0,c.jsx)(t.code,{children:`value`}),` content can consist of literals, dynamic references to other tokens, or system-provided markers.`]}),`
`,(0,c.jsx)(t.h3,{id:`literals-and-data-types`,children:`Literals and Data Types`}),`
`,(0,c.jsx)(t.p,{children:`The system supports standard JSON data types:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Strings`}),`: `,(0,c.jsx)(t.code,{children:`"12px"`}),`, `,(0,c.jsx)(t.code,{children:`"relative"`}),`, `,(0,c.jsx)(t.code,{children:`"none"`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Numbers`}),`: `,(0,c.jsx)(t.code,{children:`24`}),`, `,(0,c.jsx)(t.code,{children:`0.5`}),` (automatically converted to strings during compilation).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Colors`}),`: HEX formats are supported:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`#FFF`}),` / `,(0,c.jsx)(t.code,{children:`#FFFFFF`}),` — standard color.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`#FFFFFF80`}),` — color with alpha channel (8 characters).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.h3,{id:`references-and-system-markers-`,children:[`References and System Markers (`,(0,c.jsx)(t.code,{children:`{...}`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`You can borrow values from other properties using curly braces. This mechanism enables token dependency management.`}),`
`,(0,c.jsx)(t.h4,{id:`path-resolution-rules`,children:`Path Resolution Rules:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Absolute Path`}),`: `,(0,c.jsx)(t.code,{children:`{design.component.property}`}),` — entire path from the root.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Relative Path (Auto-Design)`}),`: `,(0,c.jsx)(t.code,{children:`{primary-color}`}),`. If the first path segment is not a registered design name, the system automatically prepends the current design name (`,(0,c.jsx)(t.code,{children:`{current-design.primary-color}`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Nesting`}),`: Supports unlimited nesting through dot notation: `,(0,c.jsx)(t.code,{children:`{base.spacing.small}`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`special-markers-shortcuts`,children:`Special Markers (Shortcuts):`}),`
`,(0,c.jsx)(t.p,{children:`Special placeholders are used to shorten paths within references:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`?`}),` — replaced by `,(0,c.jsx)(t.code,{children:`[current_design].`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`??`}),` — replaced by `,(0,c.jsx)(t.code,{children:`[current_design].[current_component].`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Example:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "button": {
    "color": "{?primary}",          // Resolves to {d1.primary}
    "padding": "{??base-padding}"   // Resolves to {d1.button.base-padding}
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:`These markers enable portable configuration code that remains resilient to design or component renames.`}),`
`,(0,c.jsx)(t.h4,{id:`expressions-and-mixed-content`,children:`Expressions and Mixed Content:`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`value`}),` field can contain arbitrary text with one or more `,(0,c.jsx)(t.code,{children:`{...}`}),` references embedded within it. The system will identify and resolve each reference while preserving the surrounding text.`]}),`
`,(0,c.jsxs)(t.p,{children:[`This enables the use of tokens within CSS functions (e.g., `,(0,c.jsx)(t.code,{children:`calc()`}),`) or combination with native CSS variables.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Example:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "button": {
    "padding": "var(--sys-height) * {sys.spacing.adaptive.md}"
  }
}
`})}),`
`,(0,c.jsxs)(t.h3,{id:`full-value-marker-`,children:[`Full Value Marker (`,(0,c.jsx)(t.code,{children:`=`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`If a value begins with the `,(0,c.jsx)(t.code,{children:`=`}),` character, the compiler treats it as a "complete" (full value). The value is passed to SCSS "as is" without any further automatic processing.`]}),`
`,(0,c.jsx)(t.p,{children:`This is highly useful for complex CSS functions or when raw paths must be preserved.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Usage Example:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "button": {
    "color": "{?primary}",           // Reference via design marker
    "padding": "{??base-padding}",   // Reference via component marker
    "width": "=calc(100% - 20px)",   // Full value (no processing)
    "border": "1px solid #00000030"  // HEX with opacity
  }
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`additional-meta-parameters`,children:`Additional Meta-Parameters`}),`
`,(0,c.jsxs)(t.p,{children:[`For more precise value control, special service flags (starting with `,(0,c.jsx)(t.code,{children:`_`}),`) can be used:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`_important: boolean`}),` — adds the `,(0,c.jsx)(t.code,{children:`!important`}),` specifier to the property in CSS.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`_fullValue: boolean`}),` — programmatic equivalent of the `,(0,c.jsx)(t.code,{children:`=`}),` marker. Disables automatic unit appending (`,(0,c.jsx)(t.code,{children:`px`}),`) and reference resolving `,(0,c.jsx)(t.code,{children:`{}`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`_replace: object`}),` — allows performing text replacement in the final value using regular expressions. Accepts an object `,(0,c.jsx)(t.code,{children:`{ pattern, flags, replace }`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`_modification: boolean`}),` — controls if the property can be modified in SCSS (defaults to `,(0,c.jsx)(t.code,{children:`true`}),`). If set to `,(0,c.jsx)(t.code,{children:`false`}),`, the property is considered static.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Usage Example:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "button": {
    "width": { 
      "value": "100%", 
      "_important": true      // Output: width: 100% !important;
    },
    "padding": { 
      "value": "16px", 
      "_replace": {           // Output: padding: 16rem;
        "pattern": "px", 
        "replace": "rem", 
        "flags": "g" 
      }
    },
    "height": { 
      "value": "calc(100vh - 20px)", 
      "_fullValue": true      // Output: height: calc(100vh - 20px);
    }
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/# UI/properties/# Values`}),`
`,(0,c.jsx)(n.h1,{id:`working-with-values-value`,children:`Working with values (Value)`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`value`}),` field in `,(0,c.jsx)(n.code,{children:`properties.json`}),` defines the final content of a property (color, dimension, path, etc.). The `,(0,c.jsx)(n.code,{children:`value`}),` content can consist of literals, dynamic references to other tokens, or system-provided markers.`]}),`
`,(0,c.jsx)(n.h3,{id:`literals-and-data-types`,children:`Literals and Data Types`}),`
`,(0,c.jsx)(n.p,{children:`The system supports standard JSON data types:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Strings`}),`: `,(0,c.jsx)(n.code,{children:`"12px"`}),`, `,(0,c.jsx)(n.code,{children:`"relative"`}),`, `,(0,c.jsx)(n.code,{children:`"none"`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Numbers`}),`: `,(0,c.jsx)(n.code,{children:`24`}),`, `,(0,c.jsx)(n.code,{children:`0.5`}),` (automatically converted to strings during compilation).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Colors`}),`: HEX formats are supported:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`#FFF`}),` / `,(0,c.jsx)(n.code,{children:`#FFFFFF`}),` — standard color.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`#FFFFFF80`}),` — color with alpha channel (8 characters).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`references-and-system-markers-`,children:[`References and System Markers (`,(0,c.jsx)(n.code,{children:`{...}`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`You can borrow values from other properties using curly braces. This mechanism enables token dependency management.`}),`
`,(0,c.jsx)(n.h4,{id:`path-resolution-rules`,children:`Path Resolution Rules:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Absolute Path`}),`: `,(0,c.jsx)(n.code,{children:`{design.component.property}`}),` — entire path from the root.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Relative Path (Auto-Design)`}),`: `,(0,c.jsx)(n.code,{children:`{primary-color}`}),`. If the first path segment is not a registered design name, the system automatically prepends the current design name (`,(0,c.jsx)(n.code,{children:`{current-design.primary-color}`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Nesting`}),`: Supports unlimited nesting through dot notation: `,(0,c.jsx)(n.code,{children:`{base.spacing.small}`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`special-markers-shortcuts`,children:`Special Markers (Shortcuts):`}),`
`,(0,c.jsx)(n.p,{children:`Special placeholders are used to shorten paths within references:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`?`}),` — replaced by `,(0,c.jsx)(n.code,{children:`[current_design].`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`??`}),` — replaced by `,(0,c.jsx)(n.code,{children:`[current_design].[current_component].`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "color": "{?primary}",          // Resolves to {d1.primary}
    "padding": "{??base-padding}"   // Resolves to {d1.button.base-padding}
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:`These markers enable portable configuration code that remains resilient to design or component renames.`}),`
`,(0,c.jsx)(n.h4,{id:`expressions-and-mixed-content`,children:`Expressions and Mixed Content:`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`value`}),` field can contain arbitrary text with one or more `,(0,c.jsx)(n.code,{children:`{...}`}),` references embedded within it. The system will identify and resolve each reference while preserving the surrounding text.`]}),`
`,(0,c.jsxs)(n.p,{children:[`This enables the use of tokens within CSS functions (e.g., `,(0,c.jsx)(n.code,{children:`calc()`}),`) or combination with native CSS variables.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "padding": "var(--sys-height) * {sys.spacing.adaptive.md}"
  }
}
`})}),`
`,(0,c.jsxs)(n.h3,{id:`full-value-marker-`,children:[`Full Value Marker (`,(0,c.jsx)(n.code,{children:`=`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`If a value begins with the `,(0,c.jsx)(n.code,{children:`=`}),` character, the compiler treats it as a "complete" (full value). The value is passed to SCSS "as is" without any further automatic processing.`]}),`
`,(0,c.jsx)(n.p,{children:`This is highly useful for complex CSS functions or when raw paths must be preserved.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Usage Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "color": "{?primary}",           // Reference via design marker
    "padding": "{??base-padding}",   // Reference via component marker
    "width": "=calc(100% - 20px)",   // Full value (no processing)
    "border": "1px solid #00000030"  // HEX with opacity
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`additional-meta-parameters`,children:`Additional Meta-Parameters`}),`
`,(0,c.jsxs)(n.p,{children:[`For more precise value control, special service flags (starting with `,(0,c.jsx)(n.code,{children:`_`}),`) can be used:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_important: boolean`}),` — adds the `,(0,c.jsx)(n.code,{children:`!important`}),` specifier to the property in CSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_fullValue: boolean`}),` — programmatic equivalent of the `,(0,c.jsx)(n.code,{children:`=`}),` marker. Disables automatic unit appending (`,(0,c.jsx)(n.code,{children:`px`}),`) and reference resolving `,(0,c.jsx)(n.code,{children:`{}`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_replace: object`}),` — allows performing text replacement in the final value using regular expressions. Accepts an object `,(0,c.jsx)(n.code,{children:`{ pattern, flags, replace }`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_modification: boolean`}),` — controls if the property can be modified in SCSS (defaults to `,(0,c.jsx)(n.code,{children:`true`}),`). If set to `,(0,c.jsx)(n.code,{children:`false`}),`, the property is considered static.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Usage Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
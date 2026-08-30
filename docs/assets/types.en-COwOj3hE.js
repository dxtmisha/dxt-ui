import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/constructor/properties/3. Types`}),`
`,(0,c.jsx)(t.h1,{id:`types-_type`,children:`Types (_type)`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`_type`}),` meta-parameter defines the architectural classification of a configuration node. It dictates the structural pipeline by instructing the assembly engine on how to process the current node (e.g., as a CSS variable, media query, pseudo-element, or BEM modifier). Declaring the correct type is critical for the accurate generation of SCSS mixins and TypeScript interfaces.`]}),`
`,(0,c.jsx)(t.h2,{id:`default-behavior-and-auto-detection`,children:`Default Behavior and Auto-detection`}),`
`,(0,c.jsxs)(t.p,{children:[`If `,(0,c.jsx)(t.code,{children:`_type`}),` is omitted, the interpreter invokes an automatic inference module (`,(0,c.jsx)(t.code,{children:`Automatcher`}),`):`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Key Recognition:`}),` The engine scans the property name for registered symbolic aliases or prefix patterns formatted as `,(0,c.jsx)(t.code,{children:`[type]|[property_name]`}),`. Upon detection, the extracted type is dynamically assigned to the node.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Pass-through (Bypass):`}),` Nodes lacking system prefixes retain an `,(0,c.jsx)(t.code,{children:`undefined`}),` state for `,(0,c.jsx)(t.code,{children:`_type`}),`. These nodes bypass structural TS converters and pass directly into the global SCSS map generation phase, where they are rendered universally as standard CSS physical key-value properties.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`supported-types-propertytype`,children:`Supported Types (PropertyType)`}),`
`,(0,c.jsxs)(t.p,{children:[`The system supports a comprehensive set of structural specificators (`,(0,c.jsx)(t.code,{children:`_type`}),`) resolving any compilation requirement:`]}),`
`,(0,c.jsx)(t.h3,{id:`base-properties--variables`,children:`Base Properties & Variables`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`property`}),` — Defines a standard physical CSS style property.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`var`}),` — Declares the node specifically to generate as a custom CSS variable (custom property).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`architectural-nodes`,children:`Architectural Nodes`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`design`}),` — The system name of the root design structure.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`component`}),` — Base designation of the UI component governing SCSS map hierarchies.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`class`}),` — Binds an explicit, custom CSS class name to the active structural node.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`theme`}),` — Specifies the branch properties are overrides utilized for generating themed classes.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`elements--modifiers-bem`,children:`Elements & Modifiers (BEM)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`subclass`}),` — Identifies a BEM element (subclass) structurally nested within the core block.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`state`}),` — Defines variations or additional states of the element (e.g., BEM modifiers).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`virtual`}),` — Defines a virtual pseudo-element mapping (`,(0,c.jsx)(t.code,{children:`::before`}),`, `,(0,c.jsx)(t.code,{children:`::after`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selector`}),` — Defines sub-properties and pseudo-classes of the element (e.g., `,(0,c.jsx)(t.code,{children:`:hover`}),`, `,(0,c.jsx)(t.code,{children:`:focus`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`adaptability-responsive--container`,children:`Adaptability (Responsive & Container)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`media`}),` / `,(0,c.jsx)(t.code,{children:`media-max`}),` — Structures properties mapped directly into viewport `,(0,c.jsx)(t.code,{children:`@media`}),` queries (scaling via min-width / max-width).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`media-group`}),` / `,(0,c.jsx)(t.code,{children:`media-max-group`}),` — Wraps extensive property lists actively into isolated media group clusters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`container`}),`, `,(0,c.jsx)(t.code,{children:`container-max`}),`... — Equivalents to media rules but specifically tracking native `,(0,c.jsx)(t.code,{children:`@container`}),` contextual queries.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`animations`,children:`Animations`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`animate`}),` — Designates a block compiling native CSS animation attributes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`animate-frame`}),` — Represents a localized percentage structural frame bound inside `,(0,c.jsx)(t.code,{children:`@keyframes`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`logic--scoped-merging`,children:`Logic & Scoped Merging`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`link`}),` — Defines an active dynamic link parsing and inheriting native property trees from another structural segment.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`link-class`}),` — Acts as a structural link pointing towards an element specifically to resolve and copy its class mapping.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`file`}),` — References an external physical configuration `,(0,c.jsx)(t.code,{children:`.json`}),` file for deep merging logic.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mixin`}),` — Designated purely as an accessory utility mixin block; explicitly pruned from finalizing CSS outputs natively.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`scss-integration--exclusions`,children:`SCSS Integration & Exclusions`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`scss`}),` — Evaluates the node actively targeting native SCSS scope parameters / nested builds.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`root`}),` — Declares the node globally, forcing structure layout surfacing natively via SCSS `,(0,c.jsx)(t.code,{children:`@at-root`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`none`}),` — Mutes the node entirely, aggressively dropping it from any output stream generation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`other`}),` — Natively functions identically to `,(0,c.jsx)(t.code,{children:`none`}),`; an internalized fallback flag for undefined states.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`simplified-syntax-aliases`,children:`Simplified Syntax (Aliases)`}),`
`,(0,c.jsxs)(t.p,{children:[`To prevent deep nesting hierarchies and redundant `,(0,c.jsx)(t.code,{children:`{"_type": "..."}`}),` bindings for every node, the system natively implements shorthand prefix aliasing built directly into the key nomenclature. The compiler automatically identifies the prefix and assigns the corresponding structural `,(0,c.jsx)(t.code,{children:`_type`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`1-dedicated-symbol-prefixes-symbols`,children:`1. Dedicated Symbol Prefixes (SYMBOLS)`}),`
`,(0,c.jsx)(t.p,{children:`Frequently invoked architectural node types are securely bound to rapid symbol aliases. Prepending these characters dictates the node configuration:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$`}),` `,(0,c.jsxs)(t.em,{children:[`(maps to `,(0,c.jsx)(t.code,{children:`var`}),`)`]}),` — System variable declaration (Example: `,(0,c.jsx)(t.code,{children:`"$border"`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`#`}),` `,(0,c.jsxs)(t.em,{children:[`(maps to `,(0,c.jsx)(t.code,{children:`subclass`}),`)`]}),` — Nested BEM element block (Example: `,(0,c.jsx)(t.code,{children:`"#icon"`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`~`}),` `,(0,c.jsxs)(t.em,{children:[`(maps to `,(0,c.jsx)(t.code,{children:`state`}),`)`]}),` — Element variations and additional states (Example: `,(0,c.jsx)(t.code,{children:`"~primary"`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`:`}),` `,(0,c.jsxs)(t.em,{children:[`(maps to `,(0,c.jsx)(t.code,{children:`selector`}),`)`]}),` — Element sub-properties and pseudo-classes (Example: `,(0,c.jsx)(t.code,{children:`":hover"`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`::`}),` `,(0,c.jsxs)(t.em,{children:[`(maps to `,(0,c.jsx)(t.code,{children:`virtual`}),`)`]}),` — Virtual pseudo-element targeting (Example: `,(0,c.jsx)(t.code,{children:`"::after"`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`@`}),` `,(0,c.jsxs)(t.em,{children:[`(maps to `,(0,c.jsx)(t.code,{children:`link`}),`)`]}),` — Scoped architectural tree linking.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`@@`}),` `,(0,c.jsxs)(t.em,{children:[`(maps to `,(0,c.jsx)(t.code,{children:`link-class`}),`)`]}),` — Explicit class-oriented structural referencing.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`&`}),` `,(0,c.jsxs)(t.em,{children:[`(maps to `,(0,c.jsx)(t.code,{children:`scss`}),`)`]}),` — Contextual native SCSS selection.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`&&`}),` `,(0,c.jsxs)(t.em,{children:[`(maps to `,(0,c.jsx)(t.code,{children:`root`}),`)`]}),` — Globals lifting via native `,(0,c.jsx)(t.code,{children:`@at-root`}),` SCSS scope breaking.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--`}),` `,(0,c.jsxs)(t.em,{children:[`(maps to `,(0,c.jsx)(t.code,{children:`none`}),`)`]}),` — Pruned ignore forcing node exclusion from all system-generated outputs.`]}),`
`]}),`
`,(0,c.jsxs)(t.h3,{id:`2-universal-pipe-syntax-`,children:[`2. Universal Pipe Syntax (`,(0,c.jsx)(t.code,{children:`|`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`For dynamic structure types lacking hardcoded symbolic shortcuts (e.g., `,(0,c.jsx)(t.code,{children:`media`}),` or `,(0,c.jsx)(t.code,{children:`container-group`}),`), the compiler parses a delimited string syntax: `,(0,c.jsx)(t.code,{children:`[type]|[property_name]`}),`.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Lexical sequences preceding the `,(0,c.jsx)(t.code,{children:`|`}),` delimiter are actively mapped via string parsing as the strict systemic `,(0,c.jsx)(t.code,{children:`_type`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Example:`}),` The string format `,(0,c.jsx)(t.code,{children:`"media-group|adaptive-block"`}),` explicitly executes mapping assigning the type natively as `,(0,c.jsx)(t.code,{children:`media-group`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`compilation-example`,children:`Compilation Example`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Input Configuration (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "padding": "12px",             // Fallback type (property)
  
  "sm": {                        // Explicit type assignment (media)
    "_type": "media",
    "padding": "16px"
  },

  "$border": "8px",              // Alias: var
  
  "#icon": {                     // Alias: subclass
    "width": "24px"
  },
  
  ":hover": {                    // Alias: selector
    "background-color": "#aaaaaa"
  },
  
  "~primary": {                  // Alias: state
    "color": "#ff0000"
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Conceptual Compiled Output (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.component-name {
  padding: 12px;
  --sys-[component]-border: 8px;

  @media (min-width: 576px) {  /* sm branch (media) */
    padding: 16px;
  }

  &__icon {                    /* #icon branch (subclass) */
    width: 24px;
  }

  &:hover {                    /* :hover branch (selector) */
    background-color: #aaaaaa;
  }

  &--primary {                 /* ~primary branch (state) */
    color: #ff0000;
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
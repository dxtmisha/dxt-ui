import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/PropertiesSeparator - Property Splitting`}),`
`,(0,c.jsx)(t.h1,{id:`propertiesseparator-class`,children:`PropertiesSeparator Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`PropertiesSeparator`}),` class is designed to automatically transform a flat structure of tokens with composite names (using separators) into a hierarchical structure of nested objects. This allows for logical property organization, such as turning `,(0,c.jsx)(t.code,{children:`button.primary.background`}),` into `,(0,c.jsx)(t.code,{children:`{ button: { primary: { background: ... } } }`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automatic Nesting`}),` — transforms flat keys with separators (default is `,(0,c.jsx)(t.code,{children:`.`}),`) into nested objects.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Recursive Processing`}),` — supports unlimited nesting depth (with an optional limit via configuration).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Smart Merging`}),` — correctly merges new sub-properties with existing objects using recursive replacement.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Name Cleaning`}),` — automatically removes technical prefixes and suffixes (e.g., separator basic names) before processing.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`The class provides static methods, so it does not need to be initialized via `,(0,c.jsx)(t.code,{children:`new`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesSeparator } from '@dxtmisha/scripts'

// Using static methods
const results = PropertiesSeparator.to(rawProperties)
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`is`,children:(0,c.jsx)(t.code,{children:`is`})}),`
`,(0,c.jsxs)(t.p,{children:[`A static method to quickly check if the provided property list contains any keys that require splitting. It scans the top level (and nested levels up to the `,(0,c.jsx)(t.code,{children:`limit`}),`) for separator characters in the names.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`properties: PropertyList`}),` — the list of properties to analyze.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit: number`}),` — the maximum depth of the check (default is taken from `,(0,c.jsx)(t.code,{children:`PropertiesConfig`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if at least one key contains a separator.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const needsSplitting = PropertiesSeparator.is(myProperties);
// Result: true if keys like "color.blue.50" exist
`})}),`
`,(0,c.jsx)(t.h3,{id:`to`,children:(0,c.jsx)(t.code,{children:`to`})}),`
`,(0,c.jsx)(t.p,{children:`A static method that performs the actual transformation of a flat property list into a nested structure. The method recursively traverses all elements and, if it finds a key with a separator, "wraps" the property into a chain of nested objects according to the name segments.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`properties: PropertyList`}),` — the list of properties to transform.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`PropertyList`}),` — a new property list with a hierarchical structure.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const nestedProperties = PropertiesSeparator.to({
  'palette.blue.50': { value: '#e3f2fd' }
});
/* Result:
{
  palette: {
    value: {
      blue: {
        value: {
          '50': { value: '#e3f2fd', __wrap: true }
        }
      }
    }
  }
}
*/
`})}),`
`,(0,c.jsx)(t.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(t.h3,{id:`the-name-splitting-mechanism`,children:`The Name Splitting Mechanism`}),`
`,(0,c.jsxs)(t.p,{children:[`The transformation process in `,(0,c.jsx)(t.code,{children:`PropertiesSeparator`}),` involves several steps:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Separator Detection`}),`: The `,(0,c.jsx)(t.code,{children:`to`}),` method checks each property name via `,(0,c.jsx)(t.code,{children:`PropertiesKeys.isSeparator`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Segmentation`}),`: If a separator is found, the name is split into parts (e.g., `,(0,c.jsx)(t.code,{children:`a.b.c`}),` -> `,(0,c.jsx)(t.code,{children:`['a', 'b', 'c']`}),`). Technical characters are removed beforehand via `,(0,c.jsx)(t.code,{children:`removeBasicName`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Wrapping`}),`: The `,(0,c.jsx)(t.code,{children:`wrap`}),` method recursively creates nested `,(0,c.jsx)(t.code,{children:`value`}),` objects, placing the original property element at the deepest level. Intermediate objects are marked with `,(0,c.jsx)(t.code,{children:`__wrap: true`}),` to indicate their structural nature.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Recursive Merging`}),`: The resulting "branch" is merged with the main `,(0,c.jsx)(t.code,{children:`data`}),` object via `,(0,c.jsx)(t.code,{children:`replaceRecursive`}),`, allowing multiple properties with the same base (e.g., `,(0,c.jsx)(t.code,{children:`blue.50`}),` and `,(0,c.jsx)(t.code,{children:`blue.100`}),`) to correctly aggregate under a single `,(0,c.jsx)(t.code,{children:`blue`}),` object.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.h3,{id:`grouping-palette-colors`,children:`Grouping Palette Colors`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesSeparator } from '@dxtmisha/scripts'

const flatPalette = {
  'blue.50': { value: '#eef' },
  'blue.100': { value: '#ccf' }
}

const tree = PropertiesSeparator.to(flatPalette)
// Properties are now grouped in the tree.blue.value object
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
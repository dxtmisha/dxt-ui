import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/# UI/# Wiki Data Configuration`}),`
`,(0,c.jsx)(n.h1,{id:`wiki-data-configuration`,children:`Wiki Data Configuration`}),`
`,(0,c.jsxs)(n.p,{children:[`To manage demo data and Storybook arguments within a specific project (e.g., `,(0,c.jsx)(n.code,{children:`d1`}),`), the `,(0,c.jsx)(n.code,{children:`src/wiki/wiki.ts`}),` file is used. This file allows you to supplement or override global Wiki settings defined in the main `,(0,c.jsx)(n.code,{children:`@dxtmisha/wiki`}),` package.`]}),`
`,(0,c.jsx)(n.h3,{id:`why-is-this-needed`,children:`Why is this needed?`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`wiki.ts`}),` file serves as the central configuration point for:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Overriding global default values for Storybook arguments (e.g., button text or icons).`}),`
`,(0,c.jsx)(n.li,{children:`Configuring selection lists (options) for project-specific resources.`}),`
`,(0,c.jsx)(n.li,{children:`Adding unique demo data not included in the base library.`}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`how-to-work-with-the-file`,children:`How to work with the file`}),`
`,(0,c.jsxs)(n.p,{children:[`In each component package (e.g., `,(0,c.jsx)(n.code,{children:`@dxtmisha/d1`}),`), the `,(0,c.jsx)(n.code,{children:`src/wiki/wiki.ts`}),` file exports an object of type `,(0,c.jsx)(n.code,{children:`StorybookArgsToList`}),`. This object imports the base `,(0,c.jsx)(n.code,{children:`wiki`}),` data items and modifies them as needed.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { StorybookControl, StorybookCategory, type StorybookArgsToList } from '@dxtmisha/wiki'
import { wiki } from '@dxtmisha/wiki/media'

export const wikiD1: StorybookArgsToList = {
  // 1. Inheritance: Overriding existing argument 'image.value'
  'image.value': {
    ...wiki['image.value'],
    options: {
      ...wiki['image.value']?.options,
      value: 'mail-01'
    }
  },

  // 2. New Parameter: Creating a completely new property
  'my.new.parameter': {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.technical,
      description: 'Description of a completely new parameter not in the base',
      value: 'Default Value'
    }
  }
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`naming-conventions`,children:`Naming Conventions`}),`
`,(0,c.jsxs)(n.p,{children:[`The choice of key name in the `,(0,c.jsx)(n.code,{children:`wiki`}),` object determines the scope of the settings:`]}),`
`,(0,c.jsx)(n.h4,{id:`global-properties`,children:`Global Properties`}),`
`,(0,c.jsxs)(n.p,{children:[`If the key consists only of the property name (e.g., `,(0,c.jsx)(n.code,{children:`value`}),`, `,(0,c.jsx)(n.code,{children:`size`}),`, `,(0,c.jsx)(n.code,{children:`text`}),`), the settings are considered `,(0,c.jsx)(n.strong,{children:`global`}),`. They are automatically applied to all components in the system that have that property. This is useful for defining uniform descriptions or control types for the entire library.`]}),`
`,(0,c.jsx)(n.h4,{id:`specific-properties`,children:`Specific Properties`}),`
`,(0,c.jsxs)(n.p,{children:[`If the key contains a dot, it is interpreted as `,(0,c.jsx)(n.code,{children:`[ComponentName].[PropertyName]`}),` (e.g., `,(0,c.jsx)(n.code,{children:`button.size`}),`, `,(0,c.jsx)(n.code,{children:`input.value`}),`).`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Settings are applied `,(0,c.jsx)(n.strong,{children:`only to the specified component`}),`.`]}),`
`,(0,c.jsx)(n.li,{children:`These values take precedence over global settings.`}),`
`,(0,c.jsx)(n.li,{children:`Allows defining unique behavior or default values for a specific element without affecting others.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`data-type-structure`,children:`Data Type Structure`}),`
`,(0,c.jsxs)(n.p,{children:[`To correctly configure the `,(0,c.jsx)(n.code,{children:`wiki.ts`}),` file, it is important to understand the structure of the types used. Below is a detailed description of the main `,(0,c.jsx)(n.code,{children:`StorybookArgsToList`}),` type and its components.`]}),`
`,(0,c.jsx)(n.h3,{id:`storybookargstolist`,children:(0,c.jsx)(n.code,{children:`StorybookArgsToList`})}),`
`,(0,c.jsxs)(n.p,{children:[`This is a record type (`,(0,c.jsx)(n.code,{children:`Record`}),`) used for argument configuration.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Key`}),`: Argument name (string).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Value`}),`: An object of type `,(0,c.jsx)(n.code,{children:`StorybookArgsToItem`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`storybookargstoitem`,children:(0,c.jsx)(n.code,{children:`StorybookArgsToItem`})}),`
`,(0,c.jsx)(n.p,{children:`Describes the configuration of a specific Storybook control.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: StorybookControl`}),` — defines the interface type for value control (text field, checkbox, etc.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: StorybookArgsToOptionsByType`}),` — an object for advanced behavior and display settings.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDemo?: boolean`}),` — indicates that the parameter is for demonstration purposes only.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`demo?: any`}),` — demonstration data that will be substituted in examples.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hide?: boolean`}),` — allows hiding the parameter from the argument table if it is purely technical.`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`storybookargstooptionsbytype`,children:(0,c.jsx)(n.code,{children:`StorybookArgsToOptionsByType`})}),`
`,(0,c.jsx)(n.p,{children:`An object for configuring argument metadata and constraints.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`category?: StorybookCategory`}),` — the category name for grouping in the table (use values from the `,(0,c.jsx)(n.code,{children:`StorybookCategory`}),` enum).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: any`}),` — the current value of the argument.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: string | number | boolean`}),` — the value that will be displayed as "default" in the documentation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`description?: string | Record<string, string>`}),` — description of the property. Can be a string or an object for different languages.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: string[] | Record<string, string>`}),` — a list of available options for selection (relevant for `,(0,c.jsx)(n.code,{children:`select`}),` or `,(0,c.jsx)(n.code,{children:`radio`}),` types).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`min?: number`}),` / `,(0,c.jsx)(n.code,{children:`max?: number`}),` — minimum and maximum values for numeric controls.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`order?: number`}),` — numeric index for sorting arguments in the list.`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`enums`,children:`Enums`}),`
`,(0,c.jsx)(n.h4,{id:`storybookcontrol`,children:(0,c.jsx)(n.code,{children:`StorybookControl`})}),`
`,(0,c.jsx)(n.p,{children:`Defines the visual type of the control:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text`}),` — text field.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`boolean`}),` — checkbox (true/false).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`number`}),` — numeric input.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`select`}),` — dropdown list (requires `,(0,c.jsx)(n.code,{children:`options`}),` to be filled).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`object`}),` — editor for JSON objects.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`storybookcategory`,children:(0,c.jsx)(n.code,{children:`StorybookCategory`})}),`
`,(0,c.jsx)(n.p,{children:`Used for grouping properties into logical blocks:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Values`}),` — primary values.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Styles`}),` — appearance parameters.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Technical`}),` — technical and internal settings.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Adaptive`}),` — responsiveness parameters.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Status`}),` — component states.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
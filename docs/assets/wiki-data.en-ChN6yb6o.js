import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/constructor/4. Wiki Data Configuration`}),`
`,(0,c.jsx)(t.h1,{id:`wiki-data-configuration`,children:`Wiki Data Configuration`}),`
`,(0,c.jsxs)(t.p,{children:[`To manage demo data and Storybook arguments within a specific project (e.g., `,(0,c.jsx)(t.code,{children:`d1`}),`), the `,(0,c.jsx)(t.code,{children:`src/wiki/wiki.ts`}),` file is used. This file allows you to supplement or override global Wiki settings defined in the main `,(0,c.jsx)(t.code,{children:`@dxtmisha/wiki`}),` package.`]}),`
`,(0,c.jsx)(t.h3,{id:`why-is-this-needed`,children:`Why is this needed?`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`wiki.ts`}),` file serves as the central configuration point for:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Overriding global default values for Storybook arguments (e.g., button text or icons).`}),`
`,(0,c.jsx)(t.li,{children:`Configuring selection lists (options) for project-specific resources.`}),`
`,(0,c.jsx)(t.li,{children:`Adding unique demo data not included in the base library.`}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`how-to-work-with-the-file`,children:`How to work with the file`}),`
`,(0,c.jsxs)(t.p,{children:[`In each component package (e.g., `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`), the `,(0,c.jsx)(t.code,{children:`src/wiki/wiki.ts`}),` file exports an object of type `,(0,c.jsx)(t.code,{children:`StorybookArgsToList`}),`. This object imports the base `,(0,c.jsx)(t.code,{children:`wiki`}),` data items and modifies them as needed.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { StorybookControl, StorybookCategory, type StorybookArgsToList } from '@dxtmisha/wiki'
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
`,(0,c.jsx)(t.h2,{id:`naming-conventions`,children:`Naming Conventions`}),`
`,(0,c.jsxs)(t.p,{children:[`The choice of key name in the `,(0,c.jsx)(t.code,{children:`wiki`}),` object determines the scope of the settings:`]}),`
`,(0,c.jsx)(t.h4,{id:`global-properties`,children:`Global Properties`}),`
`,(0,c.jsxs)(t.p,{children:[`If the key consists only of the property name (e.g., `,(0,c.jsx)(t.code,{children:`value`}),`, `,(0,c.jsx)(t.code,{children:`size`}),`, `,(0,c.jsx)(t.code,{children:`text`}),`), the settings are considered `,(0,c.jsx)(t.strong,{children:`global`}),`. They are automatically applied to all components in the system that have that property. This is useful for defining uniform descriptions or control types for the entire library.`]}),`
`,(0,c.jsx)(t.h4,{id:`specific-properties`,children:`Specific Properties`}),`
`,(0,c.jsxs)(t.p,{children:[`If the key contains a dot, it is interpreted as `,(0,c.jsx)(t.code,{children:`[ComponentName].[PropertyName]`}),` (e.g., `,(0,c.jsx)(t.code,{children:`button.size`}),`, `,(0,c.jsx)(t.code,{children:`input.value`}),`).`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Settings are applied `,(0,c.jsx)(t.strong,{children:`only to the specified component`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:`These values take precedence over global settings.`}),`
`,(0,c.jsx)(t.li,{children:`Allows defining unique behavior or default values for a specific element without affecting others.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`data-type-structure`,children:`Data Type Structure`}),`
`,(0,c.jsxs)(t.p,{children:[`To correctly configure the `,(0,c.jsx)(t.code,{children:`wiki.ts`}),` file, it is important to understand the structure of the types used. Below is a detailed description of the main `,(0,c.jsx)(t.code,{children:`StorybookArgsToList`}),` type and its components.`]}),`
`,(0,c.jsx)(t.h3,{id:`storybookargstolist`,children:(0,c.jsx)(t.code,{children:`StorybookArgsToList`})}),`
`,(0,c.jsxs)(t.p,{children:[`This is a record type (`,(0,c.jsx)(t.code,{children:`Record`}),`) used for argument configuration.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Key`}),`: Argument name (string).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Value`}),`: An object of type `,(0,c.jsx)(t.code,{children:`StorybookArgsToItem`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h3,{id:`storybookargstoitem`,children:(0,c.jsx)(t.code,{children:`StorybookArgsToItem`})}),`
`,(0,c.jsx)(t.p,{children:`Describes the configuration of a specific Storybook control.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: StorybookControl`}),` — defines the interface type for controlling the value (text field, toggle, etc.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: StorybookArgsToOptionsByType`}),` — an object for advanced behavior and display settings.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isDemo?: boolean`}),` — indicates that the parameter is for demonstration purposes only.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`demo?: any`}),` — demonstration data that will be substituted into examples.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`demoOptions?: Record<string, any>`}),` — additional demo options for the item.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hide?: boolean`}),` — allows hiding the parameter from the argument table if it is purely technical.`]}),`
`]}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h3,{id:`storybookargstooptionsbytype`,children:(0,c.jsx)(t.code,{children:`StorybookArgsToOptionsByType`})}),`
`,(0,c.jsx)(t.p,{children:`An object for configuring argument metadata and constraints.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`category?: StorybookCategory`}),` — category name for grouping in the table (use values from the `,(0,c.jsx)(t.code,{children:`StorybookCategory`}),` enum).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type?: StorybookControl | string | string[]`}),` — data type or target control type (e.g., `,(0,c.jsx)(t.code,{children:`'string'`}),`, `,(0,c.jsx)(t.code,{children:`['string', 'File']`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue?: string | number | boolean`}),` — default value displayed in documentation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: any`}),` — current value of the argument.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`description?: StorybookArgsToDescription`}),` (`,(0,c.jsx)(t.code,{children:`string | Record<string, string>`}),`) — property description. Can be a string or an object with language translations (`,(0,c.jsx)(t.code,{children:`en`}),`, `,(0,c.jsx)(t.code,{children:`ru`}),`, `,(0,c.jsx)(t.code,{children:`vi`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: (string | number)[] | Record<string, string>`}),` — list of available options for selection (relevant for `,(0,c.jsx)(t.code,{children:`select`}),` control type).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`min?: number`}),` / `,(0,c.jsx)(t.code,{children:`max?: number`}),` — minimum and maximum values for numeric controls.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`order?: number`}),` — numeric index for sorting arguments in the list.`]}),`
`]}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h3,{id:`enums`,children:`Enums`}),`
`,(0,c.jsx)(t.h4,{id:`storybookcontrol`,children:(0,c.jsx)(t.code,{children:`StorybookControl`})}),`
`,(0,c.jsx)(t.p,{children:`Defines the visual type of the control:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`text`}),` — text field.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`string`}),` — string input field.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`number`}),` — numeric input.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`boolean`}),` — checkbox/toggle (true/false).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`select`}),` — dropdown list (requires `,(0,c.jsx)(t.code,{children:`options`}),` to be filled).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`array`}),` — array input.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`object`}),` — editor for JSON objects.`]}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`storybookcategory`,children:(0,c.jsx)(t.code,{children:`StorybookCategory`})}),`
`,(0,c.jsx)(t.p,{children:`Used for grouping properties into logical blocks:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`actions`}),` (`,(0,c.jsx)(t.code,{children:`'Actions'`}),`) — actions and events.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`adaptive`}),` (`,(0,c.jsx)(t.code,{children:`'Adaptive'`}),`) — responsiveness and adaptive alignment parameters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`aria`}),` (`,(0,c.jsx)(t.code,{children:`'ARIA'`}),`) — accessibility (ARIA) attributes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`arrow`}),` (`,(0,c.jsx)(t.code,{children:`'Arrow'`}),`) — arrow and directional indicator parameters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`attributes`}),` (`,(0,c.jsx)(t.code,{children:`'Attributes'`}),`) — HTML attributes and system properties.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`bars`}),` (`,(0,c.jsx)(t.code,{children:`'Bars'`}),`) — bars, panels, and progress indicator parameters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`counter`}),` (`,(0,c.jsx)(t.code,{children:`'Counter'`}),`) — counter and badge parameters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`form`}),` (`,(0,c.jsx)(t.code,{children:`'Form'`}),`) — form and input element properties.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hook`}),` (`,(0,c.jsx)(t.code,{children:`'Hook'`}),`) — hooks and composable function parameters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icon`}),` (`,(0,c.jsx)(t.code,{children:`'Icon'`}),`) — icon parameters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`information`}),` (`,(0,c.jsx)(t.code,{children:`'Information'`}),`) — informational properties and tooltips.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mask`}),` (`,(0,c.jsx)(t.code,{children:`'Mask'`}),`) — input mask parameters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`option`}),` (`,(0,c.jsx)(t.code,{children:`'Options'`}),`) — options and selection lists.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`search`}),` (`,(0,c.jsx)(t.code,{children:`'Search'`}),`) — search and filtering parameters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`sort`}),` (`,(0,c.jsx)(t.code,{children:`'Sort'`}),`) — sorting parameters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`status`}),` (`,(0,c.jsx)(t.code,{children:`'Status'`}),`) — component states (loading, error, active, etc.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`style`}),` (`,(0,c.jsx)(t.code,{children:`'Styles'`}),`) — appearance and styling parameters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`technical`}),` (`,(0,c.jsx)(t.code,{children:`'Technical'`}),`) — technical and internal settings.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`text`}),` (`,(0,c.jsx)(t.code,{children:`'Text'`}),`) — text parameters and typography.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value`}),` (`,(0,c.jsx)(t.code,{children:`'Values'`}),`) — primary component values.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
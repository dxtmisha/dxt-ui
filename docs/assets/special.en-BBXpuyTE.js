import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`special-characters`,children:`Special characters`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`special`}),` property defines special characters to denote user input positions in the mask and configure their extended behavior.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`string`}),` — single special character (default `,(0,c.jsx)(t.code,{children:`'*'`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`string[]`}),` — array of special characters for different group types`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`MaskSpecialList`}),` — object with extended configuration for each character`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Special characters in the mask template denote positions where users can enter data, unlike literal characters that are inserted automatically.`}),`
`,(0,c.jsxs)(t.p,{children:[`When using a simple string (e.g., `,(0,c.jsx)(t.code,{children:`special="*"`}),`), all input positions in the mask are restricted by the same validation rules.`]}),`
`,(0,c.jsxs)(t.p,{children:[`An array of characters (e.g., `,(0,c.jsx)(t.code,{children:`special="['*', 'A', '#']"`}),`) allows creating different group types with individual constraints: one group for digits, another for letters, a third for special characters.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Object notation `,(0,c.jsx)(t.code,{children:`MaskSpecialList`}),` (see `,(0,c.jsx)(t.a,{href:`#maskspeciallist`,children:`detailed description below`}),`) provides maximum flexibility. Each special character is configured separately with the ability to set default values, rubber groups with variable length, auto-transition characters, and custom validation.`]}),`
`,(0,c.jsxs)(t.p,{children:[`For built-in types (`,(0,c.jsx)(t.code,{children:`currency`}),`, `,(0,c.jsx)(t.code,{children:`number`}),`, `,(0,c.jsx)(t.code,{children:`date`}),`, `,(0,c.jsx)(t.code,{children:`time`}),`), the system automatically generates special characters considering regional settings, ignoring the user-defined `,(0,c.jsx)(t.code,{children:`special`}),` value.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Simple special character -->
<Mask mask="***-***" special="*" />

<!-- Multiple group types -->
<Mask mask="AA*-###" :special="['A', '*', '#']" />

<!-- Extended configuration -->
<Mask
mask="***-***"
:special="{
  '*': {
    pattern: '\\d',
    view: '_',
    rubber: true,
    minLength: 2,
    maxLength: 8,
    transitionChar: ' '
  }
}"
/>

<!-- Groups with default values -->
<Mask
mask="DD/MM/YYYY"
:special="{
  'D': { defaultValue: '01', pattern: '\\d' },
  'M': { defaultValue: '01', pattern: '\\d' },
  'Y': { defaultValue: '2024', pattern: '\\d' }
}"
/>
`,language:`html`}),`
`,(0,c.jsx)(t.h2,{id:`maskspeciallist`,children:`MaskSpecialList`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`MaskSpecialList`}),` is an extended configuration object that allows for fine-tuned control over the behavior of each special character in the mask. Each key in the object corresponds to one of the characters defined in the `,(0,c.jsx)(t.code,{children:`special`}),` property (or the default `,(0,c.jsx)(t.code,{children:`*`}),` character).`]}),`
`,(0,c.jsx)(t.h3,{id:`maskspecialitem-properties`,children:`MaskSpecialItem Properties`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue?: string`}),` — `,(0,c.jsx)(t.strong,{children:`initial value`}),`. Automatically populates the group on initialization. The user can modify it if the `,(0,c.jsx)(t.code,{children:`match`}),` rules allow.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`rubber?: boolean`}),` — `,(0,c.jsx)(t.strong,{children:`rubber mode`}),`. Enables dynamic length for the group. In the mask template, such a group is typically represented by one or more identical characters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`transitionChar?: string | string[]`}),` — `,(0,c.jsx)(t.strong,{children:`transition character`}),`. A specific character (e.g., space or dot) that triggers an immediate focus shift to the next part of the mask upon entry. Only for `,(0,c.jsx)(t.code,{children:`rubber: true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`minLength?: number`}),` — `,(0,c.jsx)(t.strong,{children:`minimum length`}),`. Used to validate whether the group has been sufficiently filled.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxLength?: number`}),` — `,(0,c.jsx)(t.strong,{children:`maximum length`}),`. The limit for expansion in "rubber" groups.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`match?: RegExp | string`}),` — `,(0,c.jsx)(t.strong,{children:`input filter`}),`. A regular expression that checks `,(0,c.jsx)(t.em,{children:`each individual`}),` character as it is typed. Default: `,(0,c.jsx)(t.code,{children:`[0-9]`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`pattern?: string | Function`}),` — `,(0,c.jsx)(t.strong,{children:`group validator`}),`. A rule for validating the entire accumulated string in the group. Can be a string (regex) or a function receiving mask data.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`view?: string`}),` — `,(0,c.jsx)(t.strong,{children:`visual placeholder`}),`. The character the user sees in empty slots of this group. Default: `,(0,c.jsx)(t.code,{children:`_`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`how-to-work-with-maskspeciallist`,children:`How to Work with MaskSpecialList`}),`
`,(0,c.jsxs)(t.p,{children:[`For effective use of `,(0,c.jsx)(t.code,{children:`MaskSpecialList`}),`, follow these simple rules:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Character Mapping`}),`: Every key in the `,(0,c.jsx)(t.code,{children:`MaskSpecialList`}),` object must be a character you used in your `,(0,c.jsx)(t.code,{children:`mask`}),` template. For example, if the mask is `,(0,c.jsx)(t.code,{children:`AAA-***`}),`, you can configure group `,(0,c.jsx)(t.code,{children:`A`}),` for letters and `,(0,c.jsx)(t.code,{children:`*`}),` for digits.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Filter Configuration (`,(0,c.jsx)(t.code,{children:`match`}),`)`]}),`: Use `,(0,c.jsx)(t.code,{children:`match`}),` to restrict the types of characters a user can physically type. This stops letters from being entered where numbers are expected at the earliest possible stage.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Use Rubber Groups`}),`: If a field's length is unknown in advance (like a phone extension), set `,(0,c.jsx)(t.code,{children:`rubber: true`}),`. This allows the mask to expand as the user types.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Manage Transitions`}),`: For a better user experience, define a `,(0,c.jsx)(t.code,{children:`transitionChar`}),` (like a space or dot). This allows users to manually finish the current group and jump to the next one without filling the entire length.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Default Values`}),`: If part of the data is frequently repeated (like the current year), use `,(0,c.jsx)(t.code,{children:`defaultValue`}),`. This reduces the number of actions required from the user.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const value = ref('')
<\/script>

<template>
<!-- Example of a rubber mask for an IP address -->
<Mask
  v-model="value"
  mask="*.#.#.#"
  :special="{
    '*': { rubber: true, maxLength: 3, transitionChar: '.', pattern: '\\d{1,3}' },
    '#': { rubber: true, maxLength: 3, transitionChar: '.', pattern: '\\d{1,3}' }
  }"
/>

<!-- Example of a mask with different group types and default values -->
<Mask
  mask="AAA-****"
  :special="{
    'A': { match: /[A-Z]/, view: 'A' },
    '*': { defaultValue: '0000', match: /[0-9]/, view: '0' }
  }"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};
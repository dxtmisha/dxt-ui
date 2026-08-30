import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,em:`em`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.h2,{id:`marks-steps-and-magnet-snapping-marks`,children:[`Marks, steps, and magnet snapping (`,(0,c.jsx)(t.code,{children:`marks`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`marks`}),` prop allows you to render tick marks and labels along the slider scale, as well as associate numerical slider positions with custom data payloads of any type.`]}),`
`,(0,c.jsx)(t.h3,{id:`data-formats-for-marks`,children:`Data formats for marks`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`marks`}),` property accepts data in several flexible formats:`]}),`
`,(0,c.jsx)(t.h4,{id:`simple-array-of-numbers`,children:`Simple array of numbers`}),`
`,(0,c.jsx)(t.p,{children:`When passing a simple array of numbers, the slider generates tick marks at the specified numeric positions and uses the numbers as label text.`}),`
`,(0,c.jsx)(i,{code:`
<Slider :marks="[0, 20, 50, 80, 100]" />
`,language:`html`}),`
`,(0,c.jsx)(t.h4,{id:`array-of-objects-advanced-configuration`,children:`Array of objects (advanced configuration)`}),`
`,(0,c.jsx)(t.p,{children:`Each array item can be an object with the following properties:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mark`}),` `,(0,c.jsx)(t.em,{children:`(number)`}),` — numeric position along the slider range (between `,(0,c.jsx)(t.code,{children:`min`}),` and `,(0,c.jsx)(t.code,{children:`max`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`label`}),` `,(0,c.jsx)(t.em,{children:`(string)`}),` — display text label for the tick mark.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value`}),` `,(0,c.jsx)(t.em,{children:`(any)`}),` — custom payload or string identifier associated with this mark position.`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const planMarks = [
{ mark: 0, value: 'free', label: 'Free' },
{ mark: 50, value: 'pro', label: 'Pro' },
{ mark: 100, value: 'enterprise', label: 'Enterprise' }
]
<\/script>

<template>
<Slider :marks="planMarks" magnet />
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h4,{id:`object--dictionary-format`,children:`Object / Dictionary format`}),`
`,(0,c.jsx)(t.p,{children:`Marks can also be passed as a dictionary object where keys represent positions or identifiers:`}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const speedMarks = {
0: '0 km/h',
60: '60 km/h',
110: '110 km/h (Max)'
}
<\/script>

<template>
<Slider :marks="speedMarks" />
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.h3,{id:`custom-property-mapping-keylabel-and-keyvalue`,children:[`Custom Property Mapping (`,(0,c.jsx)(t.code,{children:`keyLabel`}),` and `,(0,c.jsx)(t.code,{children:`keyValue`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`If your incoming data structure uses custom property names instead of `,(0,c.jsx)(t.code,{children:`label`}),` and `,(0,c.jsx)(t.code,{children:`value`}),`, configure key aliases using `,(0,c.jsx)(t.code,{children:`keyLabel`}),` and `,(0,c.jsx)(t.code,{children:`keyValue`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keyLabel`}),` — property name containing the display label text (default `,(0,c.jsx)(t.code,{children:`'label'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keyValue`}),` — property name containing the payload data (default `,(0,c.jsx)(t.code,{children:`'value'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selectedCategory = ref(2)
const categories = [
{ id: 1, title: 'Economy', position: 0 },
{ id: 2, title: 'Standard', position: 50 },
{ id: 3, title: 'Premium', position: 100 }
]
<\/script>

<template>
<Slider
  v-model="selectedCategory"
  :marks="categories"
  keyLabel="title"
  keyValue="id"
  magnet
/>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.h3,{id:`magnet-snapping-magnet-and-step-increments-step`,children:[`Magnet Snapping (`,(0,c.jsx)(t.code,{children:`magnet`}),`) and Step Increments (`,(0,c.jsx)(t.code,{children:`step`}),`)`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`step`}),` — defines discrete numerical value increments during pointer drag or arrow key navigation (default `,(0,c.jsx)(t.code,{children:`1`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`magnet`}),` — boolean flag enabling magnet snapping mode. When `,(0,c.jsx)(t.code,{children:`magnet`}),` is active, the slider handle automatically snaps to the nearest defined mark item in the `,(0,c.jsx)(t.code,{children:`marks`}),` list, preventing selection of unlisted values between marks.`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Handle snaps strictly to defined mark positions -->
<Slider
v-model="volume"
:marks="[0, 25, 50, 75, 100]"
magnet
/>
`,language:`html`}),`
`,(0,c.jsxs)(t.h3,{id:`event-detail-payload-input-and-change`,children:[`Event Detail Payload (`,(0,c.jsx)(t.code,{children:`@input`}),` and `,(0,c.jsx)(t.code,{children:`@change`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`When slider values change, `,(0,c.jsx)(t.code,{children:`@input`}),` and `,(0,c.jsx)(t.code,{children:`@change`}),` emit a detailed `,(0,c.jsx)(t.code,{children:`detail`}),` object with the following structure:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail.mark`}),` — numeric mark position value (or `,(0,c.jsx)(t.code,{children:`[min, max]`}),` pair in `,(0,c.jsx)(t.code,{children:`multiple`}),` mode).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail.item`}),` — normalized mark item object (`,(0,c.jsx)(t.code,{children:`{ mark, value, label, style }`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail.value`}),` — custom data payload extracted from the mark item's `,(0,c.jsx)(t.code,{children:`value`}),` property.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Simplified events `,(0,c.jsx)(t.code,{children:`@inputLite`}),` and `,(0,c.jsx)(t.code,{children:`@changeLite`}),` are also available for receiving raw `,(0,c.jsx)(t.code,{children:`v-model`}),` values directly.`]}),`
`,(0,c.jsxs)(t.h3,{id:`custom-mark-rendering-via-mark-slot`,children:[`Custom Mark Rendering via `,(0,c.jsx)(t.code,{children:`#mark`}),` Slot`]}),`
`,(0,c.jsxs)(t.p,{children:[`Customize the visual rendering of mark items using the `,(0,c.jsx)(t.code,{children:`#mark`}),` slot, which exposes `,(0,c.jsx)(t.code,{children:`{ item }`}),`:`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<Slider :marks="[0, 50, 100]">
  <template #mark="{ item }">
    <span class="custom-mark">
      <strong>{{ item.label }}</strong>
    </span>
  </template>
</Slider>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};
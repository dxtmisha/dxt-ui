import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/# Reactive Classes (Ref)`}),`
`,(0,c.jsx)(n.h1,{id:`reactive-classes-ref`,children:`Reactive Classes (Ref)`}),`
`,(0,c.jsxs)(n.p,{children:[`Reactive versions of basic classes are created for seamless integration with the `,(0,c.jsx)(n.strong,{children:`Vue 3 (Composition API)`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`features`,children:`Features`}),`
`,(0,c.jsxs)(n.p,{children:[`The core idea is that the class itself monitors input data changes and provides ready-to-use `,(0,c.jsx)(n.code,{children:`ComputedRef`}),` for templates. This eliminates the need to manually recalculate values when the locale or input variables change.`]}),`
`,(0,c.jsx)(n.h2,{id:`available-classes`,children:`Available Classes`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`GeoRef`}),` — Management of global locale (country, language) and its reactive state.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`DatetimeRef`}),` — Reactive date manipulation, formatting, and time component calculation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`GeoIntlRef`}),` — Reactive formatting of numbers, currencies, lists, and relative time.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`EventRef`}),` — Event listener management with automatic binding to reactive elements.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`GeoFlagRef`}),` — Reactive retrieval of country flag links and state lists.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`how-to-work-with-them`,children:`How to Work with Them`}),`
`,(0,c.jsxs)(n.p,{children:[`Unlike the basic classes from `,(0,c.jsx)(n.code,{children:`functional-basic`}),`, which work with direct values, classes with the `,(0,c.jsx)(n.code,{children:`Ref`}),` suffix accept both raw data and `,(0,c.jsx)(n.code,{children:`ref`}),` as input. Internally, they set up listeners (`,(0,c.jsx)(n.code,{children:`watch`}),`) such that any change to the source automatically updates all dependent computed properties.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Global application state is managed via the static `,(0,c.jsx)(n.code,{children:`GeoRef`}),` class. Its methods return reactive data about the current country and language, and calling `,(0,c.jsx)(n.code,{children:`GeoRef.set()`}),` instantly updates formatting across all other classes, such as `,(0,c.jsx)(n.code,{children:`GeoIntlRef`}),` or `,(0,c.jsx)(n.code,{children:`DatetimeRef`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ref } from 'vue'
import { GeoRef, DatetimeRef, GeoIntlRef } from '@dxtmisha/functional'

// 1. Global management (GeoRef)
const country = GeoRef.getCountry() // Always up-to-date country code

// 2. Reactive date wrapper (DatetimeRef)
const dateRaw = ref('2024-03-21')
const date = new DatetimeRef(dateRaw)
const displayDate = date.locale() // Automatically updates when dateRaw or locale changes

// 3. On-the-fly formatting (GeoIntlRef)
const price = ref(12500)
const intl = new GeoIntlRef()
const displayPrice = intl.currency(price, 'USD')
`})}),`
`,(0,c.jsxs)(n.p,{children:[`The same approach is used in `,(0,c.jsx)(n.code,{children:`EventRef`}),` for handling events. If the target element (`,(0,c.jsx)(n.code,{children:`ref`}),`) changes or temporarily becomes `,(0,c.jsx)(n.code,{children:`null`}),`, the class will automatically re-attach listeners once the element reappears in the DOM. You don't need to track element lifecycles manually — just pass a reference to the object.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ref } from 'vue'
import { EventRef } from '@dxtmisha/functional'

const buttonRef = ref(null)

// The listener will find the button itself once Vue binds it to buttonRef
new EventRef(buttonRef, null, 'click', () => {
  console.log('Click handled reactively')
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
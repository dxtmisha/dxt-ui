import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/5. Reactive Classes (Ref)`}),`
`,(0,c.jsx)(t.h1,{id:`reactive-classes-ref`,children:`Reactive Classes (Ref)`}),`
`,(0,c.jsxs)(t.p,{children:[`Reactive versions of basic classes are created for seamless integration with the `,(0,c.jsx)(t.strong,{children:`Vue 3 (Composition API)`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,c.jsxs)(t.p,{children:[`The core idea is that the class itself monitors input data changes and provides ready-to-use `,(0,c.jsx)(t.code,{children:`ComputedRef`}),` for templates. This eliminates the need to manually recalculate values when the locale or input variables change.`]}),`
`,(0,c.jsx)(t.h2,{id:`available-classes`,children:`Available Classes`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`GeoRef`}),` — Management of global locale (country, language) and its reactive state.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`DatetimeRef`}),` — Reactive date manipulation, formatting, and time component calculation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`GeoIntlRef`}),` — Reactive formatting of numbers, currencies, lists, and relative time.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`EventRef`}),` — Event listener management with automatic binding to reactive elements.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`GeoFlagRef`}),` — Reactive retrieval of country flag links and state lists.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-to-work-with-them`,children:`How to Work with Them`}),`
`,(0,c.jsxs)(t.p,{children:[`Unlike the basic classes from `,(0,c.jsx)(t.code,{children:`functional-basic`}),`, which work with direct values, classes with the `,(0,c.jsx)(t.code,{children:`Ref`}),` suffix accept both raw data and `,(0,c.jsx)(t.code,{children:`ref`}),` as input. Internally, they set up listeners (`,(0,c.jsx)(t.code,{children:`watch`}),`) such that any change to the source automatically updates all dependent computed properties.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Global application state is managed via the static `,(0,c.jsx)(t.code,{children:`GeoRef`}),` class. Its methods return reactive data about the current country and language, and calling `,(0,c.jsx)(t.code,{children:`GeoRef.set()`}),` instantly updates formatting across all other classes, such as `,(0,c.jsx)(t.code,{children:`GeoIntlRef`}),` or `,(0,c.jsx)(t.code,{children:`DatetimeRef`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { ref } from 'vue'
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
`,(0,c.jsxs)(t.p,{children:[`The same approach is used in `,(0,c.jsx)(t.code,{children:`EventRef`}),` for handling events. If the target element (`,(0,c.jsx)(t.code,{children:`ref`}),`) changes or temporarily becomes `,(0,c.jsx)(t.code,{children:`null`}),`, the class will automatically re-attach listeners once the element reappears in the DOM. You don't need to track element lifecycles manually — just pass a reference to the object.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { ref } from 'vue'
import { EventRef } from '@dxtmisha/functional'

const buttonRef = ref(null)

// The listener will find the button itself once Vue binds it to buttonRef
new EventRef(buttonRef, null, 'click', () => {
  console.log('Click handled reactively')
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
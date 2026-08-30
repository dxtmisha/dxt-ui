import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`more`,children:(0,c.jsx)(t.code,{children:`more`})}),`
`,(0,c.jsx)(t.p,{children:`Event triggers when clicking on the "Show more" button loader. Passes the original DOM event and the click options payload.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: MouseEvent`}),` — original DOM mouse event`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: EventClickValue`}),` — object with click data`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`EventClickValue structure:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` — action/button type (`,(0,c.jsx)(t.code,{children:`'more'`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: any`}),` — value representing the next page number (e.g. `,(0,c.jsx)(t.code,{children:`value + 1`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail: Record<string, any> | undefined`}),` — additional button attributes`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleMore = (event, options) => {
console.log('DOM event:', event)
console.log('Action type:', options.type)
console.log('Next page value:', options.value)
}
<\/script>

<template>
<Pagination @more="handleMore" :count="100" show-more />
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`morelite`,children:(0,c.jsx)(t.code,{children:`moreLite`})}),`
`,(0,c.jsxs)(t.p,{children:[`Lightweight version of the `,(0,c.jsx)(t.code,{children:`more`}),` event. Triggers when clicking on the "Show more" button, passing only the click options payload without the original DOM event.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: EventClickValue`}),` — object with click data`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`moreprev`,children:(0,c.jsx)(t.code,{children:`morePrev`})}),`
`,(0,c.jsx)(t.p,{children:`Event triggers when clicking on the "Show previous" button loader. Passes the original DOM event and the click options payload.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: MouseEvent`}),` — original DOM mouse event`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: EventClickValue`}),` — object with click data`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`EventClickValue structure:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` — action/button type (`,(0,c.jsx)(t.code,{children:`'morePrev'`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: any`}),` — value representing the previous page number (e.g. `,(0,c.jsx)(t.code,{children:`value - 1`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail: Record<string, any> | undefined`}),` — additional button attributes`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleMorePrev = (event, options) => {
console.log('DOM event:', event)
console.log('Action type:', options.type)
console.log('Previous page value:', options.value)
}
<\/script>

<template>
<Pagination @morePrev="handleMorePrev" :count="100" show-more-prev />
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`moreprevlite`,children:(0,c.jsx)(t.code,{children:`morePrevLite`})}),`
`,(0,c.jsxs)(t.p,{children:[`Lightweight version of the `,(0,c.jsx)(t.code,{children:`morePrev`}),` event. Triggers when clicking on the "Show previous" button, passing only the click options payload without the original DOM event.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: EventClickValue`}),` — object with click data`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`rows`,children:(0,c.jsx)(t.code,{children:`rows`})}),`
`,(0,c.jsx)(t.p,{children:`Event triggers when a row limit option is selected from the rows-per-page drop-down menu. Passes the original DOM event and the click options payload.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: MouseEvent`}),` — original DOM mouse event`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: EventClickValue`}),` — object with click data`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`EventClickValue structure:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` — action/button type (`,(0,c.jsx)(t.code,{children:`'rows'`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: any`}),` — selected rows limit count (e.g., `,(0,c.jsx)(t.code,{children:`10`}),`, `,(0,c.jsx)(t.code,{children:`25`}),`, `,(0,c.jsx)(t.code,{children:`50`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail: Record<string, any> | undefined`}),` — additional menu details`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleRows = (event, options) => {
console.log('DOM event:', event)
console.log('Action type:', options.type)
console.log('Selected rows limit:', options.value)
}
<\/script>

<template>
<Pagination @rows="handleRows" :count="100" :menu-rows="[10, 20, 50]" />
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`rowslite`,children:(0,c.jsx)(t.code,{children:`rowsLite`})}),`
`,(0,c.jsxs)(t.p,{children:[`Lightweight version of the `,(0,c.jsx)(t.code,{children:`rows`}),` event. Triggers when a row limit option is selected from the rows-per-page dropdown menu, passing only the click options payload without the original DOM event.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: EventClickValue`}),` — object with click data`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};
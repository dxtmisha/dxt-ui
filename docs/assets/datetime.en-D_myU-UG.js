import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/5. Datetime`}),`
`,(0,c.jsx)(t.h1,{id:`datetime`,children:`Datetime`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`Datetime`}),` class is an advanced tool for date manipulation, navigation, and localized formatting. It extends the standard `,(0,c.jsx)(t.code,{children:`Date`}),` object by adding smart movement methods (by days, weeks, months) and seamless integration with the internationalization system.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Datetime } from '@dxtmisha/functional-basic'

// 1. Initialization (from string, number, or Date object)
const date = new Datetime('2024-03-21')

// 2. Localized formatting
date.locale()           // '03/21/2024' (depends on Geo)
date.localeMonth('long') // 'March'

// 3. Get timezone info
date.getTimeZone() // '+03:00'
`})}),`
`,(0,c.jsx)(t.h2,{id:`manipulation-and-offsets`,children:`Manipulation and Offsets`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`moveBy...`}),` methods allow you to modify the date relative to its current value. All methods support method chaining.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const date = new Datetime()

// Move 2 years forward and 1 month back
date.moveByYear(2).moveByMonth(-1)

// Set specific values
date.setDay(15).setHour(12)
`})}),`
`,(0,c.jsx)(t.h2,{id:`navigation`,children:`Navigation`}),`
`,(0,c.jsx)(t.p,{children:`Specialized methods for quick navigation to period boundaries (start of month, next week, etc.).`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const date = new Datetime()

// Move to the first day of the current month
date.moveDayFirst()

// Move to the first day of the next month
date.moveMonthNext()

// Move to the first day of the week (locale-aware)
date.moveWeekdayFirst()
`})}),`
`,(0,c.jsx)(t.h2,{id:`cloning-immutability`,children:`Cloning (Immutability)`}),`
`,(0,c.jsxs)(t.p,{children:[`If you need to derive a modified date without changing the original object, use the `,(0,c.jsx)(t.code,{children:`clone...`}),` methods.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const start = new Datetime()
const nextMonth = start.cloneMonthNext() // A new Datetime object

console.log(start.locale())     // Today
console.log(nextMonth.locale()) // +1 month
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/# Datetime`}),`
`,(0,c.jsx)(n.h1,{id:`datetime`,children:`Datetime`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`Datetime`}),` class is an advanced tool for date manipulation, navigation, and localized formatting. It extends the standard `,(0,c.jsx)(n.code,{children:`Date`}),` object by adding smart movement methods (by days, weeks, months) and seamless integration with the internationalization system.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Datetime } from '@dxtmisha/functional-basic'

// 1. Initialization (from string, number, or Date object)
const date = new Datetime('2024-03-21')

// 2. Localized formatting
date.locale()           // '03/21/2024' (depends on Geo)
date.localeMonth('long') // 'March'

// 3. Get timezone info
date.getTimeZone() // '+03:00'
`})}),`
`,(0,c.jsx)(n.h2,{id:`manipulation-and-offsets`,children:`Manipulation and Offsets`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`moveBy...`}),` methods allow you to modify the date relative to its current value. All methods support method chaining.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const date = new Datetime()

// Move 2 years forward and 1 month back
date.moveByYear(2).moveByMonth(-1)

// Set specific values
date.setDay(15).setHour(12)
`})}),`
`,(0,c.jsx)(n.h2,{id:`navigation`,children:`Navigation`}),`
`,(0,c.jsx)(n.p,{children:`Specialized methods for quick navigation to period boundaries (start of month, next week, etc.).`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const date = new Datetime()

// Move to the first day of the current month
date.moveDayFirst()

// Move to the first day of the next month
date.moveMonthNext()

// Move to the first day of the week (locale-aware)
date.moveWeekdayFirst()
`})}),`
`,(0,c.jsx)(n.h2,{id:`cloning-immutability`,children:`Cloning (Immutability)`}),`
`,(0,c.jsxs)(n.p,{children:[`If you need to derive a modified date without changing the original object, use the `,(0,c.jsx)(n.code,{children:`clone...`}),` methods.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const start = new Datetime()
const nextMonth = start.cloneMonthNext() // A new Datetime object

console.log(start.locale())     // Today
console.log(nextMonth.locale()) // +1 month
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
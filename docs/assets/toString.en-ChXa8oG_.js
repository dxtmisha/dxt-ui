import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-DoUQMcLv.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/en/functional-basic/Functions/toString - Conversion of a value to a string`}),`
`,(0,l.jsx)(t.h1,{id:`tostring`,children:(0,l.jsx)(t.code,{children:`toString`})}),`
`,(0,l.jsxs)(t.p,{children:[`A utility for converting any value to a string safely. Returns an empty string `,(0,l.jsx)(t.code,{children:`''`}),` if the value is `,(0,l.jsx)(t.code,{children:`null`}),` or `,(0,l.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,l.jsxs)(t.p,{children:[`Unlike naive string conversions (such as `,(0,l.jsx)(t.code,{children:`value || ''`}),` or template literals `,(0,l.jsx)(t.code,{children:"${value}"}),`):`]}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[`Falsy values like `,(0,l.jsx)(t.code,{children:`0`}),`, `,(0,l.jsx)(t.code,{children:`-0`}),`, `,(0,l.jsx)(t.code,{children:`false`}),`, and `,(0,l.jsx)(t.code,{children:`0n`}),` are correctly preserved and converted to `,(0,l.jsx)(t.code,{children:`'0'`}),`, `,(0,l.jsx)(t.code,{children:`'false'`}),`, etc., rather than being collapsed to an empty string.`]}),`
`,(0,l.jsxs)(t.li,{children:[`Symbols (`,(0,l.jsx)(t.code,{children:`Symbol(...)`}),`) are safely converted to `,(0,l.jsx)(t.code,{children:`'Symbol(...)'`}),` without throwing a `,(0,l.jsx)(t.code,{children:`TypeError`}),`.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`null`}),` and `,(0,l.jsx)(t.code,{children:`undefined`}),` safely return `,(0,l.jsx)(t.code,{children:`''`}),` without throwing exceptions.`]}),`
`,(0,l.jsxs)(t.li,{children:[`Objects with custom `,(0,l.jsx)(t.code,{children:`toString()`}),` or `,(0,l.jsx)(t.code,{children:`Symbol.toPrimitive`}),` methods are properly resolved.`]}),`
`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`value: T`}),` — The value for conversion.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Returns:`}),`
`,(0,l.jsx)(t.code,{children:`string`}),` — The string representation of the value, or an empty string for `,(0,l.jsx)(t.code,{children:`null`}),` / `,(0,l.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,l.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { toString } from '@dxtmisha/functional-basic'

// Basic strings and primitives
toString('Hello')                      // 'Hello'
toString(123)                          // '123'
toString(true)                         // 'true'

// Safe preservation of falsy values (not lost to empty string)
toString(0)                            // '0'
toString(-0)                           // '0'
toString(false)                        // 'false'
toString(0n)                           // '0'

// Nullish values
toString(null)                         // ''
toString(undefined)                    // ''

// Symbols (does not throw TypeError)
toString(Symbol('id'))                 // 'Symbol(id)'

// Arrays and objects
toString([1, 2, 3])                    // '1,2,3'
toString([])                           // ''
toString({ a: 1 })                     // '[object Object]'
toString({ toString: () => 'custom' }) // 'custom'
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};
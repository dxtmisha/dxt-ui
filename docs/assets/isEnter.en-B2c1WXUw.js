import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isEnter - Check for Enter or Space key press`}),`
`,(0,c.jsx)(t.h1,{id:`isenter`,children:(0,c.jsx)(t.code,{children:`isEnter`})}),`
`,(0,c.jsxs)(t.p,{children:[`Checks if the pressed key is `,(0,c.jsx)(t.code,{children:`Enter`}),` or `,(0,c.jsx)(t.code,{children:`Space`}),` (WAI-ARIA action key) outside of text input elements. This function is designed for keyboard activation of interactive controls (buttons, links, cards).`]}),`
`,(0,c.jsxs)(t.p,{children:[`If focus is inside an input field (`,(0,c.jsx)(t.code,{children:`input`}),`, `,(0,c.jsx)(t.code,{children:`textarea`}),`, `,(0,c.jsx)(t.code,{children:`select`}),`, `,(0,c.jsx)(t.code,{children:`contenteditable`}),`), the function returns `,(0,c.jsx)(t.code,{children:`false`}),` to avoid interfering with regular text entry, unless explicitly overridden by `,(0,c.jsx)(t.code,{children:`isInputElement`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: KeyboardEvent`}),` — the keyboard event object.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isInputElement?: boolean`}),` — explicit override flag: `,(0,c.jsx)(t.code,{children:`true`}),` to treat target as an input (returns `,(0,c.jsx)(t.code,{children:`false`}),`), `,(0,c.jsx)(t.code,{children:`false`}),` to allow activation even inside input elements. If omitted, determined automatically via `,(0,c.jsx)(t.code,{children:`isInput(event.target)`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if `,(0,c.jsx)(t.code,{children:`Enter`}),` or `,(0,c.jsx)(t.code,{children:`Space`}),` is pressed outside of an input element (or when explicitly allowed), otherwise `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Supported event properties:`}),`
The function checks the following event properties:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key`}),`: `,(0,c.jsx)(t.code,{children:`'Enter'`}),`, `,(0,c.jsx)(t.code,{children:`' '`}),`, `,(0,c.jsx)(t.code,{children:`'Spacebar'`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code`}),`: `,(0,c.jsx)(t.code,{children:`'Enter'`}),`, `,(0,c.jsx)(t.code,{children:`'NumpadEnter'`}),`, `,(0,c.jsx)(t.code,{children:`'Space'`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keyCode`}),`: `,(0,c.jsx)(t.code,{children:`13`}),`, `,(0,c.jsx)(t.code,{children:`32`})]}),`
`,(0,c.jsxs)(t.li,{children:[`IME composition guard: if `,(0,c.jsx)(t.code,{children:`event.isComposing === true`}),`, the function always returns `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isEnter } from '@dxtmisha/functional-basic'

const onKeyDown = (event: KeyboardEvent) => {
  if (isEnter(event)) {
    console.log('Enter or Space pressed')
    // Perform action
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
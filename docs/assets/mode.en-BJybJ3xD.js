import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";function i(e){let t={code:`code`,em:`em`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:`usage-modes-manual-vs-auto`,children:`Usage Modes: Manual vs. Auto`}),`
`,(0,o.jsxs)(t.p,{children:[`MotionFlip provides two different modes for tracking layout changes: `,(0,o.jsx)(t.strong,{children:`Manual Mode`}),` and `,(0,o.jsx)(t.strong,{children:`Auto Mode`}),`. Understanding the difference is crucial for choosing the right approach for your application's performance and control needs.`]}),`
`,(0,o.jsx)(t.h3,{id:`manual-mode-default`,children:`Manual Mode (Default)`}),`
`,(0,o.jsxs)(t.p,{children:[`By default, MotionFlip operates in manual mode. In this mode, the component does not track DOM changes automatically. Instead, you must explicitly inform MotionFlip when a change is about to happen by calling the `,(0,o.jsx)(t.code,{children:`update()`}),` method and wrapping your state modifications within its callback.`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`How it works:`})}),`
`,(0,o.jsxs)(t.ol,{children:[`
`,(0,o.jsxs)(t.li,{children:[`You call `,(0,o.jsx)(t.code,{children:`await flipRef.value.update(callback)`}),`.`]}),`
`,(0,o.jsxs)(t.li,{children:[`MotionFlip records the exact positions and sizes of all child elements `,(0,o.jsx)(t.em,{children:`before`}),` your callback runs.`]}),`
`,(0,o.jsx)(t.li,{children:`Your callback executes, updating the Vue state (e.g., adding, removing, or shuffling items).`}),`
`,(0,o.jsxs)(t.li,{children:[`MotionFlip waits for the DOM to update, measures the `,(0,o.jsx)(t.em,{children:`new`}),` positions, and smoothly animates the elements from their old positions to the new ones.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Pros:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Maximum Performance:`}),` Avoids the overhead of continuous `,(0,o.jsx)(t.code,{children:`MutationObserver`}),` background tracking.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Precision and Control:`}),` Animations are perfectly synchronized with your specific state changes.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Graceful Interruptions:`}),` If a new animation is triggered before the current one finishes, MotionFlip can seamlessly calculate the visual transition.`]}),`
`]}),`
`,(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:`When to use:`}),` Recommended for almost all use cases, especially complex lists, drag-and-drop interfaces, and large grids.`]}),`
`,(0,o.jsx)(t.h3,{id:`auto-mode`,children:`Auto Mode`}),`
`,(0,o.jsxs)(t.p,{children:[`Auto mode can be enabled by setting the `,(0,o.jsx)(t.code,{children:`auto`}),` property to `,(0,o.jsx)(t.code,{children:`true`}),`. In this mode, MotionFlip utilizes a `,(0,o.jsx)(t.code,{children:`MutationObserver`}),` to automatically detect when child elements are added, removed, or rearranged in the DOM.`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`How it works:`})}),`
`,(0,o.jsxs)(t.ol,{children:[`
`,(0,o.jsxs)(t.li,{children:[`MotionFlip constantly monitors its container for DOM mutations (`,(0,o.jsx)(t.code,{children:`childList`}),` changes).`]}),`
`,(0,o.jsxs)(t.li,{children:[`When you modify your list state (e.g., `,(0,o.jsx)(t.code,{children:`items.value.push(newItem)`}),`), Vue updates the DOM.`]}),`
`,(0,o.jsxs)(t.li,{children:[`The `,(0,o.jsx)(t.code,{children:`MutationObserver`}),` detects this change and automatically triggers the FLIP animation.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Pros:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Simpler Code:`}),` You do not need to call the `,(0,o.jsx)(t.code,{children:`update()`}),` method or manage component refs. Simply mutate your state, and the animation happens automatically.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`External Changes:`}),` Useful if DOM changes are made by third-party libraries outside of Vue's reactivity system.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Cons:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Performance Overhead:`}),` The `,(0,o.jsx)(t.code,{children:`MutationObserver`}),` runs continuously, which can slightly impact performance on pages with heavy DOM activity.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Asynchronous Limitations:`}),` Because `,(0,o.jsx)(t.code,{children:`MutationObserver`}),` fires `,(0,o.jsx)(t.em,{children:`after`}),` the DOM has already mutated, Auto Mode cannot cleanly interrupt an ongoing animation if a new mutation occurs before the previous transition finishes.`]}),`
`]}),`
`,(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:`When to use:`}),` Best for simple applications, prototypes, or when changes are driven by unpredictable external sources.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=r(),t()})))()}s();export{a as default};
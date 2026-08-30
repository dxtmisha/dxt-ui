import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`adding-notifications`,children:`Adding Notifications`}),`
`,(0,c.jsxs)(t.p,{children:[`The primary interaction with the `,(0,c.jsx)(t.code,{children:`Snackbar`}),` component occurs through the `,(0,c.jsx)(t.code,{children:`add`}),` method, which is used to dynamically push new messages into the queue.`]}),`
`,(0,c.jsx)(t.h3,{id:`method-add`,children:`Method add()`}),`
`,(0,c.jsxs)(t.p,{children:[`The component instance (via `,(0,c.jsx)(t.code,{children:`ref`}),`) provides a `,(0,c.jsx)(t.code,{children:`data`}),` object containing the `,(0,c.jsx)(t.code,{children:`add(item: SnackbarValue)`}),` method. The `,(0,c.jsx)(t.code,{children:`item`}),` parameter determines the configuration and behavior of the new notification.`]}),`
`,(0,c.jsx)(i,{code:`
snackbar.value?.data.add({
data: {
  label: 'Notification Title',
  description: 'Description of the occurring event'
}
})
`,language:`typescript`}),`
`,(0,c.jsx)(t.h3,{id:`snackbarvalue-structure`,children:`SnackbarValue Structure`}),`
`,(0,c.jsx)(t.p,{children:`The configuration object includes the following properties:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`data`})}),` (`,(0,c.jsx)(t.code,{children:`SnackbarItemProps`}),`) — Properties for the rendered component (by default `,(0,c.jsx)(t.code,{children:`SnackbarItem`}),`). This is where you pass information like `,(0,c.jsx)(t.code,{children:`label`}),`, `,(0,c.jsx)(t.code,{children:`description`}),`, `,(0,c.jsx)(t.code,{children:`icon`}),`, action buttons, and other visual data.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`component`})}),` (`,(0,c.jsx)(t.code,{children:`any`}),`) — Allows for passing a custom Vue component to be rendered instead of the standard `,(0,c.jsx)(t.code,{children:`SnackbarItem`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`highPriority`})}),` (`,(0,c.jsx)(t.code,{children:`boolean`}),`) — If `,(0,c.jsx)(t.code,{children:`true`}),`, the notification is displayed in a separate priority container (usually pinned to the top or the start of the list).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`delay`})}),` (`,(0,c.jsx)(t.code,{children:`number`}),`) — Individual lifespan of the notification in milliseconds. If omitted, the global `,(0,c.jsx)(t.code,{children:`delay`}),` value from the `,(0,c.jsx)(t.code,{children:`Snackbar`}),` settings is used.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`value`})}),` (`,(0,c.jsx)(t.code,{children:`string`}),`) — A unique key for the notification. If omitted, it is generated automatically. Used for manual removal of the message via the `,(0,c.jsx)(t.code,{children:`remove(value)`}),` method.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`custom-components`,children:`Custom Components`}),`
`,(0,c.jsxs)(t.p,{children:[`For notifications with non-standard layouts, you can pass your own component via the `,(0,c.jsx)(t.code,{children:`component`}),` property. All properties specified in the `,(0,c.jsx)(t.code,{children:`data`}),` object will be passed to your component as `,(0,c.jsx)(t.code,{children:`props`}),`.`]}),`
`,(0,c.jsx)(i,{code:`
import MyAlert from './MyAlert.vue'

snackbar.value?.data.add({
component: MyAlert,
data: {
  title: 'Warning!',
  message: 'This is a message with custom styling'
}
})
`,language:`typescript`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`highPriority`}),` property is recommended for critical system notifications or authorization errors, ensuring they reliably catch the user's attention and are displayed separately from the general message flow.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};
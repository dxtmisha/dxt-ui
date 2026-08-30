import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,em:`em`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`component-integration`,children:`Component Integration`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`SelectableArea`}),` is built upon a `,(0,c.jsx)(t.em,{children:`renderless`}),` architecture pattern. It encapsulates complex selection mechanics (coordinate calculation, lasso drawing, keyboard modifier handling) while completely delegating the visual rendering to your template via default slot properties.`]}),`
`,(0,c.jsx)(t.p,{children:`To ensure the selection engine operates correctly, you must bind the provided properties to your target DOM nodes.`}),`
`,(0,c.jsx)(t.h3,{id:`element-configuration`,children:`Element Configuration`}),`
`,(0,c.jsx)(t.p,{children:`Every interactive item within the area must implement the following bindings:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`className`}),` — the core identifier. Bound to the `,(0,c.jsx)(t.code,{children:`class`}),` attribute. Required for registering the element within the component's internal coordinate system.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`classClick`}),` — the interactive zone identifier. Bound to the `,(0,c.jsx)(t.code,{children:`class`}),` attribute. Indicates the specific area of the element that should respond to mouse events.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data-value`}),` — the element's unique key (string or number). Passed as a standard HTML attribute. This precise value is pushed to the `,(0,c.jsx)(t.code,{children:`selected`}),` array upon selection.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`onClick`}),` — the internal event handler. Bound to the `,(0,c.jsx)(t.code,{children:`@click`}),` directive. Responsible for processing single-click selections, as well as multi-selection using Shift and Cmd/Ctrl modifiers.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`state-and-visual-management`,children:`State and Visual Management`}),`
`,(0,c.jsxs)(t.p,{children:[`To achieve maximum rendering performance (particularly when lasso-selecting hundreds of DOM nodes), `,(0,c.jsx)(t.code,{children:`SelectableArea`}),` `,(0,c.jsx)(t.strong,{children:`autonomously`}),` manipulates the DOM tree by directly toggling active state classes. This design bypasses expensive Vue virtual DOM patching cycles during rapid interactions.`]}),`
`,(0,c.jsxs)(t.h4,{id:`custom-styling-logic-classselection`,children:[`Custom Styling Logic (`,(0,c.jsx)(t.code,{children:`classSelection`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`classSelection`}),` property provided by the slot is `,(0,c.jsx)(t.strong,{children:`not required`}),` for standard functionality. It is exposed strictly for advanced use cases where your application's architecture requires overriding the default selection behavior. You can apply `,(0,c.jsx)(t.code,{children:`classSelection`}),` to leverage the component's design tokens for items whose active state is controlled by your own external business logic.`]}),`
`,(0,c.jsx)(i,{code:`
<template #default="{ className, classClick, classSelection, onClick }">
<div class="my-grid-container">
  <div
    v-for="item in items"
    :key="item.id"
    :class="[
      className,
      classClick,
      /* Apply classSelection only when implementing external custom state logic */
      isCustomActive(item) ? classSelection : ''
    ]"
    :data-value="item.id"
    @click="onClick"
  >
    {{ item.name }}
  </div>
</div>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};
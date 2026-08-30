import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,em:`em`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`component-integration`,children:`Component Integration`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`DraggableWrapper`}),` is built upon a `,(0,c.jsx)(t.em,{children:`renderless`}),` architecture pattern. It encapsulates complex drag-and-drop and sorting mechanics (coordinate calculations, movement calculations, displacement styles) while completely delegating the visual rendering to your template via default slot properties.`]}),`
`,(0,c.jsx)(t.p,{children:`To ensure the sorting engine operates correctly, you must bind the provided properties to your target DOM nodes.`}),`
`,(0,c.jsx)(t.h3,{id:`element-configuration`,children:`Element Configuration`}),`
`,(0,c.jsx)(t.p,{children:`The elements inside the list or drop zones must implement the following bindings:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`className`}),` — the core identifier. Bound to the `,(0,c.jsx)(t.code,{children:`class`}),` attribute. Required for connecting the draggable elements and drop zones to the wrapper logic and applying shift styles.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`classClick`}),` — the interactive zone identifier (drag handle). Bound to the `,(0,c.jsx)(t.code,{children:`class`}),` attribute. Indicates the specific area of the element (e.g., handle icon) that initiates the drag action. If the entire item is draggable, it must be bound to the item itself.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`classPosition`}),` — the sorting position identifier. Bound to the `,(0,c.jsx)(t.code,{children:`class`}),` attribute. Used by the component to calculate the insertion points of elements. Required for all sortable elements in the list.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`classDrop`}),` — the drop zone identifier. Bound to the `,(0,c.jsx)(t.code,{children:`class`}),` attribute. Indicates additional drop targets (such as a trash bin or external panel) that accept elements.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data-value`}),` — the element's unique key (string). Passed as a standard HTML attribute. Required for identifying elements in `,(0,c.jsx)(t.code,{children:`position`}),` and `,(0,c.jsx)(t.code,{children:`drop`}),` events.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`state-and-visual-management`,children:`State and Visual Management`}),`
`,(0,c.jsxs)(t.p,{children:[`To achieve smooth drag-and-drop animation and sorting performance, `,(0,c.jsx)(t.code,{children:`DraggableWrapper`}),` `,(0,c.jsx)(t.strong,{children:`autonomously`}),` manipulates the DOM tree by directly applying transform styles and shifting elements. This design ensures instant feedback during rapid drag movements.`]}),`
`,(0,c.jsx)(i,{code:`
<DraggableWrapper
@position="onPositionChange"
@drop="onItemDropped"
>
<template #default="{ className, classClick, classPosition, classDrop }">
  <div class="list">
    <div :class="['item', className, classPosition]" data-value="item-1">
      <span :class="classClick">☰</span>
      Item 1
    </div>
  </div>
</template>
</DraggableWrapper>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};
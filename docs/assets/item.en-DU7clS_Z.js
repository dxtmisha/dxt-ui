import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{d as i,f as a,s as o}from"./blocks-WIGGT2yz.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/en/wiki/styles/# Item Containers`}),`
`,(0,l.jsx)(t.h1,{id:`item-containers`,children:`Item Containers`}),`
`,(0,l.jsxs)(t.p,{children:[`The `,(0,l.jsx)(t.code,{children:`.wiki-storybook-item`}),` class is a versatile container for demonstrating components. It provides standard rounding, borders, and aspect ratio management.`]}),`
`,(0,l.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,l.jsxs)(t.p,{children:[`By default, an element has a `,(0,l.jsx)(t.strong,{children:`1:1`}),` aspect ratio and a maximum width of `,(0,l.jsx)(t.strong,{children:`1080px`}),`.`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-html`,children:`<div class="wiki-storybook-item">
  <!-- Content -->
</div>
`})}),`
`,(0,l.jsx)(i,{children:(0,l.jsx)(`div`,{class:`wiki-storybook-item`,children:(0,l.jsx)(t.p,{children:`1:1 Element`})})}),`
`,(0,l.jsx)(t.h2,{id:`internal-labels`,children:`Internal Labels`}),`
`,(0,l.jsxs)(t.p,{children:[`The `,(0,l.jsx)(t.code,{children:`.wiki-storybook-item__label`}),` element is used for subtitles or notes. By default, it is positioned in the top-left corner.`]}),`
`,(0,l.jsx)(t.h3,{id:`label-positioning-options`,children:`Label positioning options:`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsx)(t.li,{children:`Default: Absolute positioning overlaying the content.`}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item__label--static`}),`: Standard static positioning (standard text block).`]}),`
`]}),`
`,(0,l.jsx)(i,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-flex-column`,children:[(0,l.jsxs)(`div`,{class:`wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--compact`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item__label`,children:`Overlay Label`}),(0,l.jsx)(`div`,{class:`wiki-storybook-dummy--size--sm wiki-storybook-dummy--color--blue`})]}),(0,l.jsxs)(`div`,{class:`wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--compact`,children:[(0,l.jsx)(`div`,{class:"wiki-storybook-item__label `.wiki-storybook-item__label--static`",children:`Static Label`}),(0,l.jsx)(`div`,{class:`wiki-storybook-dummy--size--sm wiki-storybook-dummy--color--blue`})]})]})}),`
`,(0,l.jsx)(t.h2,{id:`aspect-ratio-modifiers`,children:`Aspect Ratio Modifiers`}),`
`,(0,l.jsx)(t.p,{children:`Use these modifiers to change the proportions:`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--auto`}),`: Automatic height based on content`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--rectangle`}),`: `,(0,l.jsx)(t.strong,{children:`16:9`}),` aspect ratio`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--widescreen`}),`: `,(0,l.jsx)(t.strong,{children:`32:9`}),` aspect ratio`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--compact`}),`: `,(0,l.jsx)(t.strong,{children:`64:9`}),` aspect ratio`]}),`
`]}),`
`,(0,l.jsx)(i,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-flex-column`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto`,children:`Automatic Height`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--rectangle`,children:`16:9 Element`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--widescreen`,children:`32:9 Element`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--compact`,children:`64:9 Element`})]})}),`
`,(0,l.jsx)(t.h2,{id:`grid-sizing`,children:`Grid Sizing`}),`
`,(0,l.jsxs)(t.p,{children:[`Classes in the format `,(0,l.jsx)(t.code,{children:`--squared--[size]`}),` control the element's width within a `,(0,l.jsx)(t.code,{children:`.wiki-storybook-group`}),` grid.`]}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--squared--xs`}),`: Spans 3 columns on mobile, 2 on desktop.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--squared--sm`}),`: Spans 6 columns on mobile, 2 or 4 on desktop.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--squared--md`}),`: Spans 12 columns on mobile, 4 or 6 on desktop.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--squared--lg`}),`: Spans 12 columns on mobile, 6 on desktop.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--squared--max`}),`: Full width (12 columns) on any device.`]}),`
`]}),`
`,(0,l.jsx)(i,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-group`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--xs`,children:`XS`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--xs`,children:`XS`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--sm`,children:`SM`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--widescreen wiki-storybook-item--squared--md`,children:`MD`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--widescreen wiki-storybook-item--squared--max`,children:`MAX`})]})}),`
`,(0,l.jsx)(t.h2,{id:`additional-modifiers`,children:`Additional Modifiers`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--widthAuto`}),`: Sets an automatic width (default is `,(0,l.jsx)(t.code,{children:`100%`}),`).`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--overflowVisible`}),`: Allows content to overflow the borders (disables `,(0,l.jsx)(t.code,{children:`hidden`}),`).`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--overflowAuto`}),`: Enables standard browser scrollbar (`,(0,l.jsx)(t.code,{children:`overflow: auto`}),`).`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--borderNone`}),`: Removes the default border.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--padding`}),`: Adds a standard `,(0,l.jsx)(t.code,{children:`16px`}),` inner padding.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--center`}),`: Centers the internal content.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`.wiki-storybook-item--rtl`}),`: Sets the text direction to right-to-left (for RTL testing).`]}),`
`]}),`
`,(0,l.jsx)(i,{children:(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding wiki-storybook-item--center`,children:(0,l.jsx)(t.p,{children:`Centered content with padding (width: auto)`})})})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};
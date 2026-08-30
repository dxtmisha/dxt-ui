import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`differences-between-page-section-block-and-group`,children:`Differences between Page, Section, Block, and Group`}),`
`,(0,c.jsxs)(t.p,{children:[`All components are built on top of `,(0,c.jsx)(t.strong,{children:`Block`}),` and differ in semantics and header levels:`]}),`
`,(0,c.jsx)(t.h3,{id:`page`,children:`Page`}),`
`,(0,c.jsxs)(t.p,{children:[`This is the root structural component that serves as the main wrapper for all page content. Its primary purpose is to define the main theme and semantically link content to the first-level heading. Its main difference is its uniqueness (used once per page); therefore, choose it as the primary container when creating a new page (`,(0,c.jsx)(t.code,{children:`<main>`}),`, `,(0,c.jsx)(t.code,{children:`h1`}),`).`]}),`
`,(0,c.jsx)(t.h3,{id:`section`,children:`Section`}),`
`,(0,c.jsxs)(t.p,{children:[`A container for major thematic division of the page into independent semantic blocks. It is needed for logical partitioning of content into parts like "About Us" or "Services". Unlike Block and Group, it carries higher semantic weight, so use it to form the page structure and highlight its main sections (`,(0,c.jsx)(t.code,{children:`<section>`}),`, `,(0,c.jsx)(t.code,{children:`h2`}),`).`]}),`
`,(0,c.jsx)(t.h3,{id:`block`,children:`Block`}),`
`,(0,c.jsxs)(t.p,{children:[`A universal and highly flexible building block for grouping any related content. It is the base element for creating independent functional units, cards, or informational inserts. Use it in any scenario where you need to organize content without strict adherence to global page divisions (`,(0,c.jsx)(t.code,{children:`<div>`}),`, `,(0,c.jsx)(t.code,{children:`h3`}),`).`]}),`
`,(0,c.jsx)(t.h3,{id:`group`,children:`Group`}),`
`,(0,c.jsxs)(t.p,{children:[`An auxiliary component for combining small thematic elements into logical groups. Its main goal is to structure details, such as form fields or sub-sections within a card. It ranks at the bottom of the hierarchy and is used for fine-tuning content structure within larger blocks or sections (`,(0,c.jsx)(t.code,{children:`<div>`}),`, `,(0,c.jsx)(t.code,{children:`h4`}),`).`]}),`
`,(0,c.jsx)(t.h3,{id:`hierarchy-example`,children:`Hierarchy Example`}),`
`,(0,c.jsx)(i,{code:`
<Page headline="User Account">
<Section label="User Profile" description="Manage personal data" icon="person">
  <Block label="Basic Information">
    <p>Configure your display name and bio for other users.</p>
    
    <Group label="Contact Details">
      <p>Email: user@example.com</p>
      <p>Phone: +7 (999) 000-00-00</p>
    </Group>
  </Block>
  
  <Block label="Security" description="Password and authentication settings">
    <p>Regular password updates improve your account security.</p>
  </Block>
</Section>

<Section label="Notifications" icon="notifications">
  <Block label="Subscriptions">
    <Group label="Email">
      <p>Weekly news and promotions.</p>
    </Group>
    <Group label="SMS">
      <p>Critical system messages only.</p>
    </Group>
  </Block>
</Section>
</Page>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};
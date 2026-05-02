import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/styles/en/Font`}),`
`,(0,c.jsx)(n.h1,{id:`font`,children:`Font`}),`
`,(0,c.jsx)(n.p,{children:`A set of SCSS mixins for managing typography and text styles with CSS Custom Properties support.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`How it works:`}),` The system provides mixins for text styling with automatic RTL support through dir integration. Text alignment mixins automatically invert for RTL layouts. CSS custom properties are used for font-size, line-height, and paragraph spacing, allowing dynamic theming and responsive typography.`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization-mixins`,children:`Initialization Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`initparagraphspacing`,children:(0,c.jsx)(n.code,{children:`initParagraphSpacing`})}),`
`,(0,c.jsx)(n.p,{children:`Initializes paragraph spacing system for consecutive paragraphs.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@include initParagraphSpacing;
// p + p { padding-top: var(--sys-paragraph-spacing, 0); }
`})}),`
`,(0,c.jsx)(n.h2,{id:`typography-mixins`,children:`Typography Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`fontsize`,children:(0,c.jsx)(n.code,{children:`fontSize`})}),`
`,(0,c.jsx)(n.p,{children:`Sets font size with CSS custom property.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — font size value`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include fontSize(16px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`lineheight`,children:(0,c.jsx)(n.code,{children:`lineHeight`})}),`
`,(0,c.jsx)(n.p,{children:`Sets line height with CSS custom property.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — line height value`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include lineHeight(1.5);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`paragraphspacing`,children:(0,c.jsx)(n.code,{children:`paragraphSpacing`})}),`
`,(0,c.jsx)(n.p,{children:`Sets spacing between consecutive paragraphs.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — spacing value`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.content {
  @include paragraphSpacing(1em);
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`text-alignment-mixins`,children:`Text Alignment Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`textalign`,children:(0,c.jsx)(n.code,{children:`textAlign`})}),`
`,(0,c.jsx)(n.p,{children:`Sets text alignment with automatic RTL support.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — alignment value ('left', 'right', 'center', 'justify')`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include textAlign('left'); // auto-inverts for RTL
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`textcase`,children:(0,c.jsx)(n.code,{children:`textCase`})}),`
`,(0,c.jsx)(n.p,{children:`Sets text transformation.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — text-transform value ('uppercase', 'lowercase', 'capitalize', 'none')`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include textCase('uppercase');
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`text-overflow-mixins`,children:`Text Overflow Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`textoverflow`,children:(0,c.jsx)(n.code,{children:`textOverflow`})}),`
`,(0,c.jsx)(n.p,{children:`Sets text overflow behavior.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — overflow value ('truncate', 'ellipsis', 'clip')`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include textOverflow('truncate');
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`truncate`,children:(0,c.jsx)(n.code,{children:`truncate`})}),`
`,(0,c.jsx)(n.p,{children:`Truncates text with ellipsis on single line.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include truncate;
  // overflow: hidden;
  // text-overflow: ellipsis;
  // white-space: nowrap;
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`clamp`,children:(0,c.jsx)(n.code,{children:`clamp`})}),`
`,(0,c.jsx)(n.p,{children:`Limits text to specified number of lines with ellipsis.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$clamp`}),` — number of lines`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include clamp(3);
  // -webkit-line-clamp: 3;
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`utility-mixins`,children:`Utility Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`textselectnone`,children:(0,c.jsx)(n.code,{children:`textSelectNone`})}),`
`,(0,c.jsx)(n.p,{children:`Disables text selection.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include textSelectNone;
  // user-select: none;
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
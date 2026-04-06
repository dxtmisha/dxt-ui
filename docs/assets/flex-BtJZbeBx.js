import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/styles/en/Flex`}),`
`,(0,c.jsx)(n.h1,{id:`flex`,children:`Flex`}),`
`,(0,c.jsx)(n.p,{children:`A set of SCSS mixins for working with flexbox layouts with CSS Custom Properties support.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`How it works:`}),` The system provides convenient mixins for common flexbox patterns. Each mixin combines multiple flexbox properties into a single declaration, reducing code repetition. The mixins support both standard flex containers and inline-flex variants, with automatic alignment presets for horizontal/vertical layouts.`]}),`
`,(0,c.jsx)(n.h2,{id:`basic-mixins`,children:`Basic Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`flex-1`,children:(0,c.jsx)(n.code,{children:`flex`})}),`
`,(0,c.jsx)(n.p,{children:`Sets display: flex.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.container {
  @include flex;
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`flexinline`,children:(0,c.jsx)(n.code,{children:`flexInline`})}),`
`,(0,c.jsx)(n.p,{children:`Sets display: inline-flex.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.container {
  @include flexInline;
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`alignment-mixins`,children:`Alignment Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`flexx`,children:(0,c.jsx)(n.code,{children:`flexX`})}),`
`,(0,c.jsx)(n.p,{children:`Creates horizontal flex container with centered items.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.container {
  @include flexX;
  // display: flex;
  // align-items: center;
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`flexy`,children:(0,c.jsx)(n.code,{children:`flexY`})}),`
`,(0,c.jsx)(n.p,{children:`Creates vertical flex container with centered items.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.container {
  @include flexY;
  // display: flex;
  // align-items: center;
  // flex-flow: column;
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`flexstretchx`,children:(0,c.jsx)(n.code,{children:`flexStretchX`})}),`
`,(0,c.jsx)(n.p,{children:`Creates horizontal flex container with stretched items.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.container {
  @include flexStretchX;
  // display: flex;
  // align-items: stretch;
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`flexstretchy`,children:(0,c.jsx)(n.code,{children:`flexStretchY`})}),`
`,(0,c.jsx)(n.p,{children:`Creates vertical flex container with stretched items.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.container {
  @include flexStretchY;
  // display: flex;
  // align-items: stretch;
  // flex-flow: column;
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`flexcenter`,children:(0,c.jsx)(n.code,{children:`flexCenter`})}),`
`,(0,c.jsx)(n.p,{children:`Creates centered flex container (both axes).`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.container {
  @include flexCenter;
  // display: flex;
  // align-items: center;
  // justify-content: center;
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`flexbetween`,children:(0,c.jsx)(n.code,{children:`flexBetween`})}),`
`,(0,c.jsx)(n.p,{children:`Creates flex container with space-between alignment.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.container {
  @include flexBetween;
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`inline-flex-mixins`,children:`Inline Flex Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`flexinlinex`,children:(0,c.jsx)(n.code,{children:`flexInlineX`})}),`
`,(0,c.jsx)(n.p,{children:`Creates horizontal inline-flex container with centered items.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.container {
  @include flexInlineX;
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`flexinliney`,children:(0,c.jsx)(n.code,{children:`flexInlineY`})}),`
`,(0,c.jsx)(n.p,{children:`Creates vertical inline-flex container with centered items.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.container {
  @include flexInlineY;
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`flexinlinecenter`,children:(0,c.jsx)(n.code,{children:`flexInlineCenter`})}),`
`,(0,c.jsx)(n.p,{children:`Creates centered inline-flex container (both axes).`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.container {
  @include flexInlineCenter;
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`flexinlinebetween`,children:(0,c.jsx)(n.code,{children:`flexInlineBetween`})}),`
`,(0,c.jsx)(n.p,{children:`Creates inline-flex container with space-between alignment.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.container {
  @include flexInlineBetween;
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`utility-mixins`,children:`Utility Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`justifycontent`,children:(0,c.jsx)(n.code,{children:`justifyContent`})}),`
`,(0,c.jsx)(n.p,{children:`Sets justify-content property.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — justify-content value`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.container {
  @include justifyContent(center);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`flexposition`,children:(0,c.jsx)(n.code,{children:`flexPosition`})}),`
`,(0,c.jsx)(n.p,{children:`Applies flex layout based on preset value.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — preset name ('x', 'y', 'center', 'between', 'inline-x', 'inline-y', 'inline-center', 'inline-between')`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.container {
  @include flexPosition('center');
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`flexdynamic`,children:(0,c.jsx)(n.code,{children:`flexDynamic`})}),`
`,(0,c.jsx)(n.p,{children:`Creates flexible item that grows and shrinks.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.item {
  @include flexDynamic;
  // flex-basis: 1px;
  // flex-grow: 1;
  // flex-shrink: 1;
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
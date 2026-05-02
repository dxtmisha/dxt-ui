import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/styles/en/Dir`}),`
`,(0,c.jsx)(n.h1,{id:`dir`,children:`Dir`}),`
`,(0,c.jsx)(n.p,{children:`A set of SCSS functions and mixins for managing text direction (LTR/RTL) with CSS Custom Properties support.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`How it works:`}),` The system uses CSS custom properties to manage bidirectional text. By default, LTR (left-to-right) is set. When `,(0,c.jsx)(n.code,{children:`html[dir="rtl"]`}),` or `,(0,c.jsx)(n.code,{children:`.dir-rtl`}),` class is applied, all direction-related variables are automatically inverted, allowing seamless RTL support without code duplication.`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization-mixins`,children:`Initialization Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`initdir`,children:(0,c.jsx)(n.code,{children:`initDir`})}),`
`,(0,c.jsx)(n.p,{children:`Initializes direction system with CSS custom properties for LTR and RTL support.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@include initDir;
`})}),`
`,(0,c.jsx)(n.h3,{id:`dirtortl`,children:(0,c.jsx)(n.code,{children:`dirToRtl`})}),`
`,(0,c.jsx)(n.p,{children:`Applies RTL (right-to-left) direction styles.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`html[dir="rtl"] {
  @include dirToRtl;
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`validation-functions`,children:`Validation Functions`}),`
`,(0,c.jsx)(n.h3,{id:`isdir`,children:(0,c.jsx)(n.code,{children:`isDir`})}),`
`,(0,c.jsx)(n.p,{children:`Returns direction multiplier (1 for LTR, -1 for RTL).`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$dir: isDir(); // var(--d-dir, 1)
`})}),`
`,(0,c.jsx)(n.h3,{id:`isdirleft`,children:(0,c.jsx)(n.code,{children:`isDirLeft`})}),`
`,(0,c.jsx)(n.p,{children:`Checks if current direction is left-aligned.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$isLeft: isDirLeft(); // var(--d-dir-left, 1)
`})}),`
`,(0,c.jsx)(n.h3,{id:`isdirright`,children:(0,c.jsx)(n.code,{children:`isDirRight`})}),`
`,(0,c.jsx)(n.p,{children:`Checks if current direction is right-aligned.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$isRight: isDirRight(); // var(--d-dir-right, 0)
`})}),`
`,(0,c.jsx)(n.h2,{id:`direction-functions`,children:`Direction Functions`}),`
`,(0,c.jsx)(n.h3,{id:`dirleft`,children:(0,c.jsx)(n.code,{children:`dirLeft`})}),`
`,(0,c.jsx)(n.p,{children:`Returns text alignment value for left side.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`text-align: dirLeft(); // left (LTR) or right (RTL)
`})}),`
`,(0,c.jsx)(n.h3,{id:`dirright`,children:(0,c.jsx)(n.code,{children:`dirRight`})}),`
`,(0,c.jsx)(n.p,{children:`Returns text alignment value for right side.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`text-align: dirRight(); // right (LTR) or left (RTL)
`})}),`
`,(0,c.jsx)(n.h3,{id:`dirleftauto`,children:(0,c.jsx)(n.code,{children:`dirLeftAuto`})}),`
`,(0,c.jsx)(n.p,{children:`Returns 'auto' value for left property.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`left: dirLeftAuto(); // auto (LTR) or unset (RTL)
`})}),`
`,(0,c.jsx)(n.h3,{id:`dirrightauto`,children:(0,c.jsx)(n.code,{children:`dirRightAuto`})}),`
`,(0,c.jsx)(n.p,{children:`Returns 'auto' value for right property.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`right: dirRightAuto(); // unset (LTR) or auto (RTL)
`})}),`
`,(0,c.jsx)(n.h3,{id:`dirflexleft`,children:(0,c.jsx)(n.code,{children:`dirFlexLeft`})}),`
`,(0,c.jsx)(n.p,{children:`Returns flex alignment value for left side.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`justify-content: dirFlexLeft(); // flex-start (LTR) or flex-end (RTL)
`})}),`
`,(0,c.jsx)(n.h3,{id:`dirflexright`,children:(0,c.jsx)(n.code,{children:`dirFlexRight`})}),`
`,(0,c.jsx)(n.p,{children:`Returns flex alignment value for right side.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Parameters:`}),` none`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`justify-content: dirFlexRight(); // flex-end (LTR) or flex-start (RTL)
`})}),`
`,(0,c.jsx)(n.h2,{id:`position-functions`,children:`Position Functions`}),`
`,(0,c.jsx)(n.h3,{id:`dirtoleft`,children:(0,c.jsx)(n.code,{children:`dirToLeft`})}),`
`,(0,c.jsx)(n.p,{children:`Calculates position value for left property based on direction.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$left`}),` — left position variable`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$right`}),` — right position variable`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`left: dirToLeft(--pos-left, --pos-right);
`})}),`
`,(0,c.jsx)(n.h3,{id:`dirtoright`,children:(0,c.jsx)(n.code,{children:`dirToRight`})}),`
`,(0,c.jsx)(n.p,{children:`Calculates position value for right property based on direction.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$left`}),` — left position variable`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$right`}),` — right position variable`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`right: dirToRight(--pos-left, --pos-right);
`})}),`
`,(0,c.jsx)(n.h3,{id:`dirorder`,children:(0,c.jsx)(n.code,{children:`dirOrder`})}),`
`,(0,c.jsx)(n.p,{children:`Calculates order value based on direction multiplier.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — order value`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`order: dirOrder(2); // 3 (LTR) or 999997 (RTL)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
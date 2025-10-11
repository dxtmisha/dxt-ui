import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-C8vOrmRQ.js";import{M as d}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function i(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"@dxtmisha/styles/en/Dir"}),`
`,e.jsx(n.h1,{id:"dir",children:"Dir"}),`
`,e.jsx(n.p,{children:"A set of SCSS functions and mixins for managing text direction (LTR/RTL) with CSS Custom Properties support."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"How it works:"})," The system uses CSS custom properties to manage bidirectional text. By default, LTR (left-to-right) is set. When ",e.jsx(n.code,{children:'html[dir="rtl"]'})," or ",e.jsx(n.code,{children:".dir-rtl"})," class is applied, all direction-related variables are automatically inverted, allowing seamless RTL support without code duplication."]}),`
`,e.jsx(n.h2,{id:"initialization-mixins",children:"Initialization Mixins"}),`
`,e.jsx(n.h3,{id:"initdir",children:e.jsx(n.code,{children:"initDir"})}),`
`,e.jsx(n.p,{children:"Initializes direction system with CSS custom properties for LTR and RTL support."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`@include initDir;
`})}),`
`,e.jsx(n.h3,{id:"dirtortl",children:e.jsx(n.code,{children:"dirToRtl"})}),`
`,e.jsx(n.p,{children:"Applies RTL (right-to-left) direction styles."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`html[dir="rtl"] {
  @include dirToRtl;
}
`})}),`
`,e.jsx(n.h2,{id:"validation-functions",children:"Validation Functions"}),`
`,e.jsx(n.h3,{id:"isdir",children:e.jsx(n.code,{children:"isDir"})}),`
`,e.jsx(n.p,{children:"Returns direction multiplier (1 for LTR, -1 for RTL)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$dir: isDir(); // var(--d-dir, 1)
`})}),`
`,e.jsx(n.h3,{id:"isdirleft",children:e.jsx(n.code,{children:"isDirLeft"})}),`
`,e.jsx(n.p,{children:"Checks if current direction is left-aligned."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$isLeft: isDirLeft(); // var(--d-dir-left, 1)
`})}),`
`,e.jsx(n.h3,{id:"isdirright",children:e.jsx(n.code,{children:"isDirRight"})}),`
`,e.jsx(n.p,{children:"Checks if current direction is right-aligned."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$isRight: isDirRight(); // var(--d-dir-right, 0)
`})}),`
`,e.jsx(n.h2,{id:"direction-functions",children:"Direction Functions"}),`
`,e.jsx(n.h3,{id:"dirleft",children:e.jsx(n.code,{children:"dirLeft"})}),`
`,e.jsx(n.p,{children:"Returns text alignment value for left side."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`text-align: dirLeft(); // left (LTR) or right (RTL)
`})}),`
`,e.jsx(n.h3,{id:"dirright",children:e.jsx(n.code,{children:"dirRight"})}),`
`,e.jsx(n.p,{children:"Returns text alignment value for right side."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`text-align: dirRight(); // right (LTR) or left (RTL)
`})}),`
`,e.jsx(n.h3,{id:"dirleftauto",children:e.jsx(n.code,{children:"dirLeftAuto"})}),`
`,e.jsx(n.p,{children:"Returns 'auto' value for left property."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`left: dirLeftAuto(); // auto (LTR) or unset (RTL)
`})}),`
`,e.jsx(n.h3,{id:"dirrightauto",children:e.jsx(n.code,{children:"dirRightAuto"})}),`
`,e.jsx(n.p,{children:"Returns 'auto' value for right property."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`right: dirRightAuto(); // unset (LTR) or auto (RTL)
`})}),`
`,e.jsx(n.h3,{id:"dirflexleft",children:e.jsx(n.code,{children:"dirFlexLeft"})}),`
`,e.jsx(n.p,{children:"Returns flex alignment value for left side."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`justify-content: dirFlexLeft(); // flex-start (LTR) or flex-end (RTL)
`})}),`
`,e.jsx(n.h3,{id:"dirflexright",children:e.jsx(n.code,{children:"dirFlexRight"})}),`
`,e.jsx(n.p,{children:"Returns flex alignment value for right side."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`justify-content: dirFlexRight(); // flex-end (LTR) or flex-start (RTL)
`})}),`
`,e.jsx(n.h2,{id:"position-functions",children:"Position Functions"}),`
`,e.jsx(n.h3,{id:"dirtoleft",children:e.jsx(n.code,{children:"dirToLeft"})}),`
`,e.jsx(n.p,{children:"Calculates position value for left property based on direction."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$left"})," — left position variable"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$right"})," — right position variable"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`left: dirToLeft(--pos-left, --pos-right);
`})}),`
`,e.jsx(n.h3,{id:"dirtoright",children:e.jsx(n.code,{children:"dirToRight"})}),`
`,e.jsx(n.p,{children:"Calculates position value for right property based on direction."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$left"})," — left position variable"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$right"})," — right position variable"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`right: dirToRight(--pos-left, --pos-right);
`})}),`
`,e.jsx(n.h3,{id:"dirorder",children:e.jsx(n.code,{children:"dirOrder"})}),`
`,e.jsx(n.p,{children:"Calculates order value based on direction multiplier."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — order value"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`order: dirOrder(2); // 3 (LTR) or 999997 (RTL)
`})})]})}function a(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{a as default};

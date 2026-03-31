import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/styles/ru/Content`}),`
`,(0,c.jsx)(n.h1,{id:`content`,children:`Content`}),`
`,(0,c.jsx)(n.p,{children:`Набор SCSS миксинов для управления видимостью контента с поддержкой CSS Custom Properties.`}),`
`,(0,c.jsx)(n.h2,{id:`миксины`,children:`Миксины`}),`
`,(0,c.jsx)(n.h3,{id:`contentvisibility`,children:(0,c.jsx)(n.code,{children:`contentVisibility`})}),`
`,(0,c.jsxs)(n.p,{children:[`Устанавливает свойство `,(0,c.jsx)(n.code,{children:`content-visibility`}),` с опциональным fallback для браузеров без поддержки.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение content-visibility ('auto', 'hidden', 'visible')`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$display: null`}),` — fallback значение display`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.list-item {
  @include contentVisibility('auto');
}

.hidden-section {
  @include contentVisibility('hidden', none);
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
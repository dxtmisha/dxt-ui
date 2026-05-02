import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/# UI/properties/flags/Состояние (state)`}),`
`,(0,c.jsx)(n.h1,{id:`состояние-state`,children:`Состояние (state)`}),`
`,(0,c.jsxs)(n.p,{children:[`Флаг `,(0,c.jsx)(n.code,{children:`_state: true`}),` позволяет явно пометить узел как состояние (псевдокласс). Это требуется, если имя узла не распознается автоматическим парсером. Свойства будут автоматически обернуты в селектор состояния (`,(0,c.jsx)(n.code,{children:`&:name { ... }`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Входная конфигурация (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "my-custom-state": {
      "_state": true,
      "opacity": "0.5"
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Результат (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  &:my-custom-state {
    opacity: 0.5;
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
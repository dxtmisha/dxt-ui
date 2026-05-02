import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/# UI/properties/flags/Замена (replace)`}),`
`,(0,c.jsx)(n.h1,{id:`замена-replace`,children:`Замена (replace)`}),`
`,(0,c.jsxs)(n.p,{children:[`Флаг `,(0,c.jsx)(n.code,{children:`_replace`}),` позволяет изменять финальное значение или имя через регулярные выражения. Параметр принимает объект с полями `,(0,c.jsx)(n.code,{children:`pattern`}),`, `,(0,c.jsx)(n.code,{children:`flags`}),` и `,(0,c.jsx)(n.code,{children:`replace`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Входная конфигурация (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "padding": {
      "value": "12px",
      "_replace": {
        "pattern": "px",
        "replace": "rem",
        "flags": "g"
      }
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Результат (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  padding: 12rem;
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/1. UI/properties/flags/Переменная (var)`}),`
`,(0,c.jsx)(t.h1,{id:`переменная-var`,children:`Переменная (var)`}),`
`,(0,c.jsxs)(t.p,{children:[`Флаг `,(0,c.jsx)(t.code,{children:`_var: true`}),` заставляет компилятор генерировать для данного узла отдельную CSS-переменную, даже если он уже является стандартным свойством. Это полезно для создания динамических переопределений через JS или наследования.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Входная конфигурация (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "button": {
    "padding": {
      "value": "16px",
      "_var": true
    }
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Результат (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.button {
  --button-padding: 16px;
  padding: var(--button-padding);
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
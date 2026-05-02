import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/# UI/properties/types/Анимация (animate)`}),`
`,(0,c.jsx)(n.h1,{id:`анимация-animate`,children:`Анимация (animate)`}),`
`,(0,c.jsxs)(n.p,{children:[`Тип `,(0,c.jsx)(n.code,{children:`animate`}),` используется для генерации нативных CSS-правил `,(0,c.jsx)(n.code,{children:`@keyframes`}),`. Каждое вложенное объектное свойство интерпретируется как отдельный кадр (frame) анимации, где ключами выступают проценты (`,(0,c.jsx)(n.code,{children:`0%`}),`, `,(0,c.jsx)(n.code,{children:`50%`}),`, `,(0,c.jsx)(n.code,{children:`100%`}),`) или ключевые слова (`,(0,c.jsx)(n.code,{children:`from`}),`, `,(0,c.jsx)(n.code,{children:`to`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Название анимации формируется автоматически с учетом вложенности (префиксы родителей), что гарантирует уникальность имен внутри системы `,(0,c.jsx)(n.code,{children:`dxt-ui`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Входная конфигурация (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "fade": {
      "_type": "animate",
      "from": { "opacity": "0" },
      "to": { "opacity": "1" }
    },
    
    "~loading": {
      "animation-name": "button-fade",
      "animation-duration": "0.3s"
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ожидаемый результат генерации (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@keyframes button-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

.button {
  &--loading {
    animation-name: button-fade;
    animation-duration: 0.3s;
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
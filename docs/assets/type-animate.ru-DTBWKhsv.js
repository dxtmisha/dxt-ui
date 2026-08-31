import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/1. UI/properties/types/Анимация (animate)`}),`
`,(0,c.jsx)(t.h1,{id:`анимация-animate`,children:`Анимация (animate)`}),`
`,(0,c.jsxs)(t.p,{children:[`Тип `,(0,c.jsx)(t.code,{children:`animate`}),` используется для генерации нативных CSS-правил `,(0,c.jsx)(t.code,{children:`@keyframes`}),`. Каждое вложенное объектное свойство интерпретируется как отдельный кадр (frame) анимации, где ключами выступают проценты (`,(0,c.jsx)(t.code,{children:`0%`}),`, `,(0,c.jsx)(t.code,{children:`50%`}),`, `,(0,c.jsx)(t.code,{children:`100%`}),`) или ключевые слова (`,(0,c.jsx)(t.code,{children:`from`}),`, `,(0,c.jsx)(t.code,{children:`to`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Название анимации формируется автоматически с учетом вложенности (префиксы родителей), что гарантирует уникальность имен внутри системы `,(0,c.jsx)(t.code,{children:`dxt-ui`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Входная конфигурация (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
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
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ожидаемый результат генерации (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@keyframes button-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

.button {
  &--loading {
    animation-name: button-fade;
    animation-duration: 0.3s;
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
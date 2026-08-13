import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/# UI/properties/types/Псевдоклассы и псевдоэлементы (selector, virtual)`}),`
`,(0,c.jsx)(t.h1,{id:`псевдоклассы-и-псевдоэлементы-selector-virtual`,children:`Псевдоклассы и псевдоэлементы (selector, virtual)`}),`
`,(0,c.jsxs)(t.p,{children:[`Структурные типы `,(0,c.jsx)(t.code,{children:`selector`}),` и `,(0,c.jsx)(t.code,{children:`virtual`}),` предназначены для стилизации нативных состояний и элементов в браузере (соответственно, псевдоклассов `,(0,c.jsx)(t.code,{children:`:hover`}),`, `,(0,c.jsx)(t.code,{children:`:focus`}),` и псевдоэлементов `,(0,c.jsx)(t.code,{children:`::before`}),`, `,(0,c.jsx)(t.code,{children:`::after`}),`). Компилятор привязывает эти стили к родительскому блоку с использованием базового синтаксиса SCSS (`,(0,c.jsx)(t.code,{children:`&:`}),` и `,(0,c.jsx)(t.code,{children:`&::`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Объявить эти типы можно с помощью шорткатов `,(0,c.jsx)(t.code,{children:`:`}),` (для псевдоклассов) и `,(0,c.jsx)(t.code,{children:`::`}),` (для псевдоэлементов). Большинство стандартных браузерных ключей (таких как `,(0,c.jsx)(t.code,{children:`hover`}),`, `,(0,c.jsx)(t.code,{children:`active`}),`, `,(0,c.jsx)(t.code,{children:`before`}),`) также распознаются компилятором автоматически без явных префиксов.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Входная конфигурация (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Для псевдоэлементов (`,(0,c.jsx)(t.code,{children:`virtual`}),`) компилятор автоматически генерирует базовое свойство `,(0,c.jsx)(t.code,{children:`content: ""`}),`, поэтому вручную прописывать его в конфигурации не нужно.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "button": {
    "padding": "12px",
    
    ":hover": {                  // Явный псевдокласс (selector, префикс :)
      "opacity": "0.8"
    },
    
    "::after": {                 // Явный псевдоэлемент (virtual, префикс ::)
      "position": "absolute",
      "inset": "0"
    },
    
    "active": {                  // Неявное объявление (определяется автоматически)
      "transform": "scale(0.95)"
    }
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ожидаемый результат генерации (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.button {
  padding: 12px;

  &:hover { opacity: 0.8; }
  
  &::after {
    content: "";
    position: absolute;
    inset: 0;
  }
  
  &:active { transform: scale(0.95); }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
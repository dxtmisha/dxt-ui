import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/# UI/properties/types/Псевдоклассы и псевдоэлементы (selector, virtual)`}),`
`,(0,c.jsx)(n.h1,{id:`псевдоклассы-и-псевдоэлементы-selector-virtual`,children:`Псевдоклассы и псевдоэлементы (selector, virtual)`}),`
`,(0,c.jsxs)(n.p,{children:[`Структурные типы `,(0,c.jsx)(n.code,{children:`selector`}),` и `,(0,c.jsx)(n.code,{children:`virtual`}),` предназначены для стилизации нативных состояний и элементов в браузере (соответственно, псевдоклассов `,(0,c.jsx)(n.code,{children:`:hover`}),`, `,(0,c.jsx)(n.code,{children:`:focus`}),` и псевдоэлементов `,(0,c.jsx)(n.code,{children:`::before`}),`, `,(0,c.jsx)(n.code,{children:`::after`}),`). Компилятор привязывает эти стили к родительскому блоку с использованием базового синтаксиса SCSS (`,(0,c.jsx)(n.code,{children:`&:`}),` и `,(0,c.jsx)(n.code,{children:`&::`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Объявить эти типы можно с помощью шорткатов `,(0,c.jsx)(n.code,{children:`:`}),` (для псевдоклассов) и `,(0,c.jsx)(n.code,{children:`::`}),` (для псевдоэлементов). Большинство стандартных браузерных ключей (таких как `,(0,c.jsx)(n.code,{children:`hover`}),`, `,(0,c.jsx)(n.code,{children:`active`}),`, `,(0,c.jsx)(n.code,{children:`before`}),`) также распознаются компилятором автоматически без явных префиксов.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Входная конфигурация (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Для псевдоэлементов (`,(0,c.jsx)(n.code,{children:`virtual`}),`) компилятор автоматически генерирует базовое свойство `,(0,c.jsx)(n.code,{children:`content: ""`}),`, поэтому вручную прописывать его в конфигурации не нужно.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
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
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ожидаемый результат генерации (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  padding: 12px;

  &:hover { opacity: 0.8; }
  
  &::after {
    content: "";
    position: absolute;
    inset: 0;
  }
  
  &:active { transform: scale(0.95); }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
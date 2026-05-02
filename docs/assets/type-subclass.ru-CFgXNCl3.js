import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/# UI/properties/types/Подкласс (subclass)`}),`
`,(0,c.jsx)(n.h1,{id:`подкласс-subclass`,children:`Подкласс (subclass)`}),`
`,(0,c.jsxs)(n.p,{children:[`Тип `,(0,c.jsx)(n.code,{children:`subclass`}),` используется для создания вложенных структурных элементов по методологии BEM (Блок-Элемент-Модификатор). Привязка этого типа к узлу предписывает компилятору сгенерировать дочерний CSS-класс, используя родительское имя как основу (например, `,(0,c.jsx)(n.code,{children:`&__element`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Наиболее частый и лаконичный способ создать подкласс — использование префикса `,(0,c.jsx)(n.code,{children:`#`}),`. Для строгой, развернутой структурной разметки тип `,(0,c.jsx)(n.code,{children:`subclass`}),` можно объявить явно через свойство `,(0,c.jsx)(n.code,{children:`_type`}),`. Оба подхода генерируют идентичный результат.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Входная конфигурация (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "card": {
    "padding": "16px",
    
    "#icon": {                   // Использование алиаса #
      "width": "24px"
    },
    
    "content": {                 // Явное объявление типа
      "_type": "subclass",
      "display": "flex"
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ожидаемый результат генерации (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.card {
  padding: 16px;

  &__icon {
    width: 24px;
  }

  &__content {
    display: flex;
  }
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Использование типа `,(0,c.jsx)(n.code,{children:`subclass`}),` гарантирует надежную инкапсуляцию стилей и предотвращает глобальное загрязнение CSS, жестко привязывая внутренние элементы к их компоненту-родителю.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
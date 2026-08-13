import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/# UI/properties/types/Подкласс (subclass)`}),`
`,(0,c.jsx)(t.h1,{id:`подкласс-subclass`,children:`Подкласс (subclass)`}),`
`,(0,c.jsxs)(t.p,{children:[`Тип `,(0,c.jsx)(t.code,{children:`subclass`}),` используется для создания вложенных структурных элементов по методологии BEM (Блок-Элемент-Модификатор). Привязка этого типа к узлу предписывает компилятору сгенерировать дочерний CSS-класс, используя родительское имя как основу (например, `,(0,c.jsx)(t.code,{children:`&__element`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Наиболее частый и лаконичный способ создать подкласс — использование префикса `,(0,c.jsx)(t.code,{children:`#`}),`. Для строгой, развернутой структурной разметки тип `,(0,c.jsx)(t.code,{children:`subclass`}),` можно объявить явно через свойство `,(0,c.jsx)(t.code,{children:`_type`}),`. Оба подхода генерируют идентичный результат.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Входная конфигурация (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
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
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ожидаемый результат генерации (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.card {
  padding: 16px;

  &__icon {
    width: 24px;
  }

  &__content {
    display: flex;
  }
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Использование типа `,(0,c.jsx)(t.code,{children:`subclass`}),` гарантирует надежную инкапсуляцию стилей и предотвращает глобальное загрязнение CSS, жестко привязывая внутренние элементы к их компоненту-родителю.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
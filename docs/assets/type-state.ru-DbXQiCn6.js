import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/1. UI/properties/types/Состояние (state)`}),`
`,(0,c.jsx)(t.h1,{id:`состояние-state`,children:`Состояние (state)`}),`
`,(0,c.jsxs)(t.p,{children:[`Тип `,(0,c.jsx)(t.code,{children:`state`}),` предназначен для описания вариаций, интерактивных режимов или сеток модификаторов (например, размеров). Привязка этого типа предписывает компилятору сгенерировать класс-модификатор по методологии BEM (например, `,(0,c.jsx)(t.code,{children:`&--primary`}),` или составной `,(0,c.jsx)(t.code,{children:`&--size-sm`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Объявить состояние можно с помощью префикса `,(0,c.jsx)(t.code,{children:`~`}),` или явно через `,(0,c.jsx)(t.code,{children:`_type: "state"`}),`. В `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` каждое объявленное состояние автоматически типизируется в `,(0,c.jsx)(t.code,{children:`props.ts`}),` и привязывается к реактивным свойствам Vue.`]}),`
`,(0,c.jsx)(t.p,{children:`В системе выделяют два основных подхода к формированию состояний:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Одиночное состояние:`}),` Используется для простых булевых флагов (например, `,(0,c.jsx)(t.code,{children:`~primary`}),`). Результирующий класс-модификатор строится напрямую (`,(0,c.jsx)(t.code,{children:`&--primary`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сгруппированные состояния:`}),` Используется для многозначных параметров (например, размерной сетки `,(0,c.jsx)(t.code,{children:`~size`}),`). Вложенные в него ключи образуют составные модификаторы (`,(0,c.jsx)(t.code,{children:`&--size-sm`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Ключ `,(0,c.jsx)(t.code,{children:`_default`}),` определяет базовое значение свойства при инициализации компонента. Для булевых флагов задается значение `,(0,c.jsx)(t.code,{children:`true`}),`, а для сгруппированных параметров — строковой идентификатор активного узла (например, `,(0,c.jsx)(t.code,{children:`"md"`}),`). Компилятор автоматически транслирует это значение в файле `,(0,c.jsx)(t.code,{children:`props.ts`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Входная конфигурация (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "button": {
    "padding": "12px",
    
    "~primary": {                // Одиночное состояние (алиас ~)
      "background-color": "blue",
      "_default": true           // Булево значение по умолчанию
    },
    
    "disabled": {                // Явное объявление типа (state)
      "_type": "state",
      "opacity": "0.5"
    },
    
    "~size": {                   // Сгруппированные состояния
      "sm": { "height": "32px" },
      "md": { "height": "40px" },
      "_default": "md"           // Строковое значение по умолчанию
    }
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ожидаемый результат генерации (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.button {
  padding: 12px;

  &--primary { background-color: blue; }
  &--disabled { opacity: 0.5; }
  &--size-sm { height: 32px; }
  &--size-md { height: 40px; }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Интеграция с Vue (`,(0,c.jsx)(t.code,{children:`props.ts`}),` и `,(0,c.jsx)(t.code,{children:`Component.vue`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// --- props.ts ---
primary?: boolean
disabled?: boolean
size?: 'sm' | 'md'

// --- Component.vue (classes) ---
'd1-button--primary': props.primary,
'd1-button--disabled': props.disabled,
[\`d1-button--size--\${props.size}\`]: inArray(propsValues.size, props.size)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
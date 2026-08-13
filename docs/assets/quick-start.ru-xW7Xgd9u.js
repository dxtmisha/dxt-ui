import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/# UI/properties/! Быстрый старт`}),`
`,(0,c.jsx)(t.h1,{id:`быстрый-старт`,children:`Быстрый старт`}),`
`,(0,c.jsxs)(t.p,{children:[`Данное руководство поможет вам быстро освоить работу с файлом `,(0,c.jsx)(t.code,{children:`properties.json`}),` на примере типичного UI-компонента. Файл является `,(0,c.jsx)(t.strong,{children:`единым источником истины`}),` — из него генерируются как стили (SCSS), так и программный интерфейс (TypeScript Props).`]}),`
`,(0,c.jsx)(t.h2,{id:`1-базовые-свойства-и-токены`,children:`1. Базовые свойства и токены`}),`
`,(0,c.jsxs)(t.p,{children:[`Вместо фиксированных значений (HEX, px) всегда используйте систему дизайн-токенов `,(0,c.jsx)(t.code,{children:`{sys...}`}),`. Это гарантирует поддержку тем и консистентность.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "padding": "{sys.spacing.md}",
  "background-color": "{sys.palette.surface}",
  "border-radius": "{sys.rounded.md}"
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Результат (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.component {
  padding: var(--sys-spacing-md);
  background-color: var(--sys-palette-surface);
  border-radius: var(--sys-rounded-md);
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`2-состояния-states`,children:`2. Состояния (States)`}),`
`,(0,c.jsx)(t.p,{children:`Для описания интерактивности (hover, focus, active, disabled) используйте зарезервированные ключи.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "hover": {
    "background-color": "{sys.palette.surfaceVariant}"
  },
  "disabled": {
    "opacity": "{sys.opacity.disabled}",
    "cursor": "not-allowed"
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Результат (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.component {
  &:hover { background-color: var(--sys-palette-surfaceVariant); }
  &:disabled { 
    opacity: var(--sys-opacity-disabled);
    cursor: not-allowed;
  }
}
`})}),`
`,(0,c.jsxs)(t.h2,{id:`3-модификаторы-маркер-`,children:[`3. Модификаторы (Маркер `,(0,c.jsx)(t.code,{children:`~`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Чтобы создать вариацию компонента (например, `,(0,c.jsx)(t.code,{children:`primary`}),` или `,(0,c.jsx)(t.code,{children:`secondary`}),`), используйте префикс `,(0,c.jsx)(t.code,{children:`~`}),`. Такие ключи автоматически преобразуются в `,(0,c.jsx)(t.strong,{children:`Props`}),` во Vue/React и в BEM-модификаторы в CSS.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "~primary": {
    "color": "{sys.palette.onPrimary}",
    "background-color": "{sys.palette.primary}",
    "_default": true
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Результат (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.component {
  &--primary {
    color: var(--sys-palette-onPrimary);
    background-color: var(--sys-palette-primary);
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Результат (TypeScript Props):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type PropsToken = {
  primary?: boolean // Генерируется автоматически
}
`})}),`
`,(0,c.jsxs)(t.h2,{id:`4-кастомные-переменные-_var`,children:[`4. Кастомные переменные (`,(0,c.jsx)(t.code,{children:`_var`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Если вам нужно, чтобы свойство было доступно как CSS-переменная для внешнего управления или использования в скриптах, добавьте флаг `,(0,c.jsx)(t.code,{children:`_var: true`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "height": {
    "value": "48px",
    "_var": true
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Результат (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.component {
  --component-height: 48px;
  height: var(--component-height);
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
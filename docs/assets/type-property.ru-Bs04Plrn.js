import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/constructor/properties/types/Свойство (property)`}),`
`,(0,c.jsx)(t.h1,{id:`свойство-property`,children:`Свойство (property)`}),`
`,(0,c.jsxs)(t.p,{children:[`Тип `,(0,c.jsx)(t.code,{children:`property`}),` — это базовый, фундаментальный тип генератора. Он предписывает компилятору собрать узел в стандартное CSS-свойство с его значением.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Автоопределение:`}),` Если вы не указываете `,(0,c.jsx)(t.code,{children:`_type`}),` явно и парсер не находит никаких алиасов-префиксов в имени узла, система `,(0,c.jsx)(t.strong,{children:`автоматически (по умолчанию)`}),` назначает узлу тип `,(0,c.jsx)(t.code,{children:`property`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`стандартное-объявление-неявное`,children:`Стандартное объявление (Неявное)`}),`
`,(0,c.jsxs)(t.p,{children:[`В 90% случаев тип `,(0,c.jsx)(t.code,{children:`property`}),` не нужно указывать руками. Если вы передаете простую пару ключ-значение (строку или число), движок самостоятельно сгенерирует CSS-свойство.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Входная конфигурация (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "button": {
    "padding": "12px 16px",
    "border-radius": "8px"
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ожидаемый результат генерации (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.button {
  padding: 12px 16px;
  border-radius: 8px;
}
`})}),`
`,(0,c.jsxs)(t.h2,{id:`развернутое-объявление-явный-тип-property`,children:[`Развернутое объявление (Явный тип `,(0,c.jsx)(t.code,{children:`property`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Явное указание типа требуется тогда, когда значение свойства — это сложный объект, и вам нужно использовать конфигурационные флаги компилятора (например, `,(0,c.jsx)(t.code,{children:`_var: true`}),` для создания переменной или `,(0,c.jsx)(t.code,{children:`_rename`}),` для подмены имени на выходе), но при этом вы хотите сохранить логику обычного CSS-свойства.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Входная конфигурация (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "button": {
    "custom-offset": {
      "_type": "property",
      "value": "24px",
      "_rename": "margin-bottom"
    }
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ожидаемый результат генерации (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.button {
  margin-bottom: 24px;
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Именно тип `,(0,c.jsx)(t.code,{children:`property`}),` лежит в основе всех стилей `,(0,c.jsx)(t.code,{children:`dxt-ui`}),`, формируя каркас CSS-выборок до применения продвинутой логики BEM, медиа-запросов и переменных.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
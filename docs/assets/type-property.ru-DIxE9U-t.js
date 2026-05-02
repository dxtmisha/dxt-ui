import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/# UI/properties/types/Свойство (property)`}),`
`,(0,c.jsx)(n.h1,{id:`свойство-property`,children:`Свойство (property)`}),`
`,(0,c.jsxs)(n.p,{children:[`Тип `,(0,c.jsx)(n.code,{children:`property`}),` — это базовый, фундаментальный тип генератора. Он предписывает компилятору собрать узел в стандартное CSS-свойство с его значением.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Автоопределение:`}),` Если вы не указываете `,(0,c.jsx)(n.code,{children:`_type`}),` явно и парсер не находит никаких алиасов-префиксов в имени узла, система `,(0,c.jsx)(n.strong,{children:`автоматически (по умолчанию)`}),` назначает узлу тип `,(0,c.jsx)(n.code,{children:`property`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`стандартное-объявление-неявное`,children:`Стандартное объявление (Неявное)`}),`
`,(0,c.jsxs)(n.p,{children:[`В 90% случаев тип `,(0,c.jsx)(n.code,{children:`property`}),` не нужно указывать руками. Если вы передаете простую пару ключ-значение (строку или число), движок самостоятельно сгенерирует CSS-свойство.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Входная конфигурация (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "padding": "12px 16px",
    "border-radius": "8px"
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ожидаемый результат генерации (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  padding: 12px 16px;
  border-radius: 8px;
}
`})}),`
`,(0,c.jsxs)(n.h2,{id:`развернутое-объявление-явный-тип-property`,children:[`Развернутое объявление (Явный тип `,(0,c.jsx)(n.code,{children:`property`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Явное указание типа требуется тогда, когда значение свойства — это сложный объект, и вам нужно использовать конфигурационные флаги компилятора (например, `,(0,c.jsx)(n.code,{children:`_var: true`}),` для создания переменной или `,(0,c.jsx)(n.code,{children:`_rename`}),` для подмены имени на выходе), но при этом вы хотите сохранить логику обычного CSS-свойства.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Входная конфигурация (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "custom-offset": {
      "_type": "property",
      "value": "24px",
      "_rename": "margin-bottom"
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ожидаемый результат генерации (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  margin-bottom: 24px;
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Именно тип `,(0,c.jsx)(n.code,{children:`property`}),` лежит в основе всех стилей `,(0,c.jsx)(n.code,{children:`dxt-ui`}),`, формируя каркас CSS-выборок до применения продвинутой логики BEM, медиа-запросов и переменных.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";function i(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:`текстовое-содержимое-label-length`,children:`Текстовое содержимое (label, length)`}),`
`,(0,o.jsxs)(t.p,{children:[`Управляет отображением текста и генерацией заполнителя. По умолчанию: `,(0,o.jsx)(t.code,{children:`length = 3`}),`.`]}),`
`,(0,o.jsxs)(t.blockquote,{children:[`
`,(0,o.jsxs)(t.p,{children:[`При наличии слота по умолчанию (`,(0,o.jsx)(t.code,{children:`default`}),`) свойства `,(0,o.jsx)(t.code,{children:`label`}),` и `,(0,o.jsx)(t.code,{children:`length`}),` игнорируются.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`label`}),` — статический текст или число для вывода вместо случайного текста`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`length`}),` — ожидаемая длина текста (число) или диапазон длин (`,(0,o.jsx)(t.code,{children:`[min, max]`}),`)`]}),`
`]}),`
`,(0,o.jsx)(t.h3,{id:`поведение`,children:`Поведение`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[`Свойства работают по принципу приоритета: слот `,(0,o.jsx)(t.code,{children:`default`}),` отменяет `,(0,o.jsx)(t.code,{children:`label`}),` и `,(0,o.jsx)(t.code,{children:`length`})]}),`
`,(0,o.jsxs)(t.li,{children:[`Заданное свойство `,(0,o.jsx)(t.code,{children:`label`}),` выводится напрямую и отменяет генерацию через `,(0,o.jsx)(t.code,{children:`length`})]}),`
`,(0,o.jsxs)(t.li,{children:[`При передаче числа в `,(0,o.jsx)(t.code,{children:`length`}),` (например, `,(0,o.jsx)(t.code,{children:`:length="5"`}),`) генерируется фиксированное количество слов`]}),`
`,(0,o.jsxs)(t.li,{children:[`При передаче массива в `,(0,o.jsx)(t.code,{children:`length`}),` (например, `,(0,o.jsx)(t.code,{children:`:length="[4, 10]"`}),`) длина текста определяется случайно в указанных пределах`]}),`
`,(0,o.jsx)(t.li,{children:`Диапазон длин позволяет имитировать естественную разницу длин текстовых строк при отображении списков`}),`
`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=r(),t()})))()}s();export{a as default};
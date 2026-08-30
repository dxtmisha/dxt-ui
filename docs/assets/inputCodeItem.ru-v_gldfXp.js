import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i}from"./blocks-LSqYfV8h.js";function a(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:`Отдельная ячейка ввода, представляющая собой один символ или цифру в составе общей последовательности ввода проверочного кода.`}),`
`,(0,s.jsxs)(t.p,{children:[`Компонент InputCodeItem обычно управляется и рендерится своим родительским контейнером `,(0,s.jsx)(t.code,{children:`InputCode`}),`. Он поддерживает управление фокусом, перехват нажатий клавиш (таких как стрелки навигации или Backspace), ограничение формата символов (с помощью регулярных выражений через `,(0,s.jsx)(t.code,{children:`match`}),`) и скрытое маскирование символов (свойство `,(0,s.jsx)(t.code,{children:`hide`}),`, например, для безопасного ввода PIN-кода).`]}),`
`,(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,s.jsxs)(t.ul,{children:[`
`,(0,s.jsx)(t.li,{children:`Представляет поле ввода для одного символа/цифры`}),`
`,(0,s.jsxs)(t.li,{children:[`Пользовательская проверка символа с помощью RegExp (свойство `,(0,s.jsx)(t.code,{children:`match`}),`)`]}),`
`,(0,s.jsxs)(t.li,{children:[`Обработка событий клавиатуры (переключение фокуса, отслеживание Backspace, обработка вставки `,(0,s.jsx)(t.code,{children:`paste`}),`)`]}),`
`,(0,s.jsxs)(t.li,{children:[`Поддержка скрытого/безопасного режима отображения через свойство `,(0,s.jsx)(t.code,{children:`hide`})]}),`
`,(0,s.jsxs)(t.li,{children:[`Управление доступностью через состояние `,(0,s.jsx)(t.code,{children:`disabled`})]}),`
`]}),`
`,(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,s.jsxs)(t.ul,{children:[`
`,(0,s.jsx)(t.li,{children:`Внутренние ячейки ввода проверочных кодов`}),`
`,(0,s.jsx)(t.li,{children:`Отдельные слоты для ввода букв/цифр в шаблонах подтверждения OTP`}),`
`]})]})}function o(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}var s;function c(){return(c=e((()=>{s=r(),t(),i()})))()}c();export{o as default};
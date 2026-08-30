import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";function i(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,ul:`ul`,...n(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,o.jsx)(t.h3,{id:`action`,children:`Action`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`update(callback: MotionFlipCallback): Promise<void>`}),` — Выполняет функцию обновления DOM и анимирует изменение расположения элементов с помощью FLIP-анимации.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`stop(): void`}),` — Останавливает активную FLIP-анимацию и сбрасывает ее состояние.`]}),`
`]}),`
`,(0,o.jsx)(t.h2,{id:`анимация-изменений-через-flip`,children:`Анимация изменений через FLIP`}),`
`,(0,o.jsxs)(t.p,{children:[`Метод `,(0,o.jsx)(t.code,{children:`update`}),` координирует процесс FLIP-анимации при изменении DOM-дерева.`]}),`
`,(0,o.jsxs)(t.ol,{children:[`
`,(0,o.jsx)(t.li,{children:`Фиксирует исходные координаты и размеры всех дочерних элементов до вызова колбэка.`}),`
`,(0,o.jsxs)(t.li,{children:[`Выполняет асинхронную функцию `,(0,o.jsx)(t.code,{children:`callback`}),` для обновления состояния и элементов DOM.`]}),`
`,(0,o.jsx)(t.li,{children:`Измеряет новые позиции элементов и рассчитывает смещения с помощью CSS-переменных.`}),`
`,(0,o.jsx)(t.li,{children:`Запускает плавный CSS-переход для перемещения элементов в новые позиции.`}),`
`]}),`
`,(0,o.jsxs)(t.blockquote,{children:[`
`,(0,o.jsxs)(t.p,{children:[`Important: Все изменения состояния, влияющие на DOM-структуру дочерних элементов, необходимо оборачивать в колбэк метода `,(0,o.jsx)(t.code,{children:`update`}),`, чтобы компонент мог точно измерить исходные и конечные координаты.`]}),`
`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=r(),t()})))()}s();export{a as default};
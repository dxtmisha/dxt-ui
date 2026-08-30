import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`управление-производительностью-списка`,children:`Управление производительностью списка`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`lite`}),` и `,(0,c.jsx)(t.code,{children:`liteThreshold`}),` работают в связке для оптимизации рендеринга больших списков. Они включают облегченный режим отображения, который снижает визуальную сложность и ускоряет производительность при превышении порогового количества элементов.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lite`}),` — включает облегченный режим отображения списка`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`liteThreshold`}),` — порог количества элементов для активации упрощенного режима, по умолчанию зависит от конфигурации`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Режим отображения определяется автоматически: при `,(0,c.jsx)(t.code,{children:`lite=false`}),` список всегда рендерится в полном режиме. При `,(0,c.jsx)(t.code,{children:`lite=true`}),` компонент сравнивает общее количество элементов с `,(0,c.jsx)(t.code,{children:`liteThreshold`}),`. Если количество элементов не превышает порог, используется полный режим с расширенной визуализацией. При превышении порога включается облегченный режим для снижения нагрузки на рендеринг. Используйте `,(0,c.jsx)(t.code,{children:`lite`}),` для работы с динамическими данными переменного размера.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Автоматическое переключение режима -->
<List :list="items" :lite="true" :liteThreshold="50" />

<!-- Всегда полный режим -->
<List :list="items" :lite="false" />

<!-- Облегченный режим для больших каталогов -->
<List :list="products" :lite="true" :liteThreshold="100" />

<!-- Пользовательский порог для мобильных устройств -->
<List :list="data" :lite="true" :liteThreshold="30" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};
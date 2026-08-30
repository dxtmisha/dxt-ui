import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`режим-скелетона`,children:`Режим скелетона`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`isSkeleton`}),` определяет поведение элемента при взаимодействии с родительским компонентом Skeleton.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возможные значения:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`true`}),` — элемент отображается как скелетон при активном состоянии Skeleton`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`false`}),` — элемент становится невидимым при активном состоянии Skeleton`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Работает в паре с компонентом Skeleton для управления видимостью и режимом отображения дочерних элементов. При `,(0,c.jsx)(t.code,{children:`active=false`}),` у родительского Skeleton все дочерние элементы отображаются нормально независимо от значения `,(0,c.jsx)(t.code,{children:`isSkeleton`}),`. При `,(0,c.jsx)(t.code,{children:`active=true`}),` элементы с `,(0,c.jsx)(t.code,{children:`isSkeleton=true`}),` показываются как скелетон-заглушки, а элементы с `,(0,c.jsx)(t.code,{children:`isSkeleton=false`}),` скрываются полностью.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Элемент будет отображаться как скелетон -->
<Skeleton active>
<Component isSkeleton text="Загрузка..." />
</Skeleton>

<!-- Элемент будет скрыт -->
<Skeleton active>
<Component :isSkeleton="false" text="Скрытый текст" />
</Skeleton>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};
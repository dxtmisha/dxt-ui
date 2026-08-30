import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`more`,children:(0,c.jsx)(t.code,{children:`more`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает при клике на кнопку подгрузки страниц («Показать еще»). Передает оригинальное событие DOM и объект параметров клика.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: MouseEvent`}),` — оригинальное событие мыши DOM`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: EventClickValue`}),` — объект с данными о клике`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Структура EventClickValue:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` — тип действия/кнопки (`,(0,c.jsx)(t.code,{children:`'more'`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: any`}),` — значение, представляющее номер следующей страницы (например, `,(0,c.jsx)(t.code,{children:`value + 1`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail: Record<string, any> | undefined`}),` — дополнительные атрибуты кнопки`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleMore = (event, options) => {
console.log('Событие DOM:', event)
console.log('Тип действия:', options.type)
console.log('Значение следующей страницы:', options.value)
}
<\/script>

<template>
<Pagination @more="handleMore" :count="100" show-more />
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`morelite`,children:(0,c.jsx)(t.code,{children:`moreLite`})}),`
`,(0,c.jsxs)(t.p,{children:[`Упрощенная версия события `,(0,c.jsx)(t.code,{children:`more`}),`. Срабатывает при клике на кнопку подгрузки страниц («Показать еще»), передавая только объект параметров клика без оригинального события DOM.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: EventClickValue`}),` — объект с данными о клике`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`moreprev`,children:(0,c.jsx)(t.code,{children:`morePrev`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает при клике на кнопку подгрузки предыдущих страниц («Показать предыдущие»). Передает оригинальное событие DOM и объект параметров клика.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: MouseEvent`}),` — оригинальное событие мыши DOM`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: EventClickValue`}),` — объект с данными о клике`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Структура EventClickValue:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` — тип действия/кнопки (`,(0,c.jsx)(t.code,{children:`'morePrev'`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: any`}),` — значение, представляющее номер предыдущей страницы (например, `,(0,c.jsx)(t.code,{children:`value - 1`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail: Record<string, any> | undefined`}),` — дополнительные атрибуты кнопки`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleMorePrev = (event, options) => {
console.log('Событие DOM:', event)
console.log('Тип действия:', options.type)
console.log('Значение предыдущей страницы:', options.value)
}
<\/script>

<template>
<Pagination @morePrev="handleMorePrev" :count="100" show-more-prev />
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`moreprevlite`,children:(0,c.jsx)(t.code,{children:`morePrevLite`})}),`
`,(0,c.jsxs)(t.p,{children:[`Упрощенная версия события `,(0,c.jsx)(t.code,{children:`morePrev`}),`. Срабатывает при клике на кнопку подгрузки предыдущих страниц («Показать предыдущие»), передавая только объект параметров клика без оригинального события DOM.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: EventClickValue`}),` — объект с данными о клике`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`rows`,children:(0,c.jsx)(t.code,{children:`rows`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает при выборе варианта лимита количества строк из выпадающего меню «Строк на странице». Передает оригинальное событие DOM и объект параметров клика.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: MouseEvent`}),` — оригинальное событие мыши DOM`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: EventClickValue`}),` — объект с данными о клике`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Структура EventClickValue:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` — тип действия/кнопки (`,(0,c.jsx)(t.code,{children:`'rows'`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: any`}),` — выбранный лимит строк (например, `,(0,c.jsx)(t.code,{children:`10`}),`, `,(0,c.jsx)(t.code,{children:`25`}),`, `,(0,c.jsx)(t.code,{children:`50`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail: Record<string, any> | undefined`}),` — дополнительные детали меню`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleRows = (event, options) => {
console.log('Событие DOM:', event)
console.log('Тип действия:', options.type)
console.log('Выбранный лимит строк:', options.value)
}
<\/script>

<template>
<Pagination @rows="handleRows" :count="100" :menu-rows="[10, 20, 50]" />
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`rowslite`,children:(0,c.jsx)(t.code,{children:`rowsLite`})}),`
`,(0,c.jsxs)(t.p,{children:[`Упрощенная версия события `,(0,c.jsx)(t.code,{children:`rows`}),`. Срабатывает при выборе варианта лимита строк в выпадающем меню, передавая только объект параметров клика без оригинального события DOM.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: EventClickValue`}),` — объект с данными о клике`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};
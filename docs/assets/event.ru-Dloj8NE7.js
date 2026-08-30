import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`input`,children:(0,c.jsx)(t.code,{children:`input`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает в реальном времени при изменении положения ползунка (перетаскивание, клавиатура).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail: SliderEventDetail`}),` — объект с детальной информацией о текущем состоянии слайдера`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`inputlite`,children:(0,c.jsx)(t.code,{children:`inputLite`})}),`
`,(0,c.jsxs)(t.p,{children:[`Событие срабатывает в реальном времени при изменении положения ползунка, передавая только значение `,(0,c.jsx)(t.code,{children:`v-model`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: SliderValueType`}),` — текущее значение слайдера (`,(0,c.jsx)(t.code,{children:`number`}),` или `,(0,c.jsx)(t.code,{children:`[number, number]`}),`)`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`change`,children:(0,c.jsx)(t.code,{children:`change`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает при завершении перемещения ползунка и фиксации значения.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail: SliderEventDetail`}),` — объект с детальной информацией о зафиксированном состоянии слайдера`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`changelite`,children:(0,c.jsx)(t.code,{children:`changeLite`})}),`
`,(0,c.jsxs)(t.p,{children:[`Событие срабатывает при завершении перемещения ползунка, передавая только фиксированное значение `,(0,c.jsx)(t.code,{children:`v-model`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: SliderValueType`}),` — зафиксированное значение слайдера (`,(0,c.jsx)(t.code,{children:`number`}),` или `,(0,c.jsx)(t.code,{children:`[number, number]`}),`)`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Структура объекта SliderEventDetail:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mark: SliderValueType`}),` — текущая числовая позиция или пара позиций `,(0,c.jsx)(t.code,{children:`[min, max]`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: SliderMarkItem | [SliderMarkItem, SliderMarkItem]`}),` — объект активной метки или пара меток для режима `,(0,c.jsx)(t.code,{children:`multiple`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: SliderMarkItemValue | [SliderMarkItemValue, SliderMarkItemValue]`}),` — пользовательское значение данных из метки`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Структура объекта SliderMarkItem:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mark: number`}),` — позиция метки на шкале`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`label: string`}),` — отображаемая текстовая подпись метки`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: SliderMarkItemValue`}),` — пользовательское значение данных (`,(0,c.jsx)(t.code,{children:`NumberOrStringOrBoolean`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`style?: Record<string, any>`}),` — стили позиционирования метки`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleInput = (detail) => {
console.log('Позиция:', detail.mark)
console.log('Метка:', detail.item)
}

const handleChangeLite = (value) => {
console.log('Финальное значение:', value)
}
<\/script>

<template>
<Slider
  @input="handleInput"
  @changeLite="handleChangeLite"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};
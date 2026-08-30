import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`адаптивное-масштабирование`,children:`Адаптивное масштабирование`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`adaptive`}),`, `,(0,c.jsx)(t.code,{children:`adaptiveGroup`}),`, `,(0,c.jsx)(t.code,{children:`adaptiveAlways`}),`, `,(0,c.jsx)(t.code,{children:`objectWidth`}),` и `,(0,c.jsx)(t.code,{children:`objectHeight`}),` управляют автоматическим масштабированием изображений для обеспечения визуального соответствия физических размеров объектов на разных изображениях.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`adaptive`}),` — включает режим адаптивного масштабирования`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`adaptiveGroup`}),` — название группы для синхронизации масштаба (по умолчанию `,(0,c.jsx)(t.code,{children:`'basic'`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`objectWidth`}),` — физическая ширина объекта на изображении в миллиметрах`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`objectHeight`}),` — физическая высота объекта на изображении в миллиметрах`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`adaptiveAlways`}),` — выполнять расчёты даже для невидимых элементов`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства работают совместно для обеспечения пропорционального отображения изображений с объектами разных физических размеров. При активации `,(0,c.jsx)(t.code,{children:`adaptive`}),` компонент начинает отслеживать размеры элемента и сравнивать их с другими изображениями в той же группе, автоматически подбирая оптимальный масштаб для каждого элемента.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`objectWidth`}),` или `,(0,c.jsx)(t.code,{children:`objectHeight`}),` задают реальные физические размеры объекта на изображении в миллиметрах. Эти значения необходимы для расчёта коэффициента масштабирования — компонент использует их для определения, во сколько раз нужно увеличить или уменьшить изображение, чтобы объекты на разных изображениях выглядели одинакового размера. Достаточно указать только одно из свойств — либо ширину, либо высоту.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Компонент автоматически определяет, по какой оси (горизонтальной или вертикальной) производить масштабирование, основываясь на доступных размерах и пропорциях изображения. Если указан `,(0,c.jsx)(t.code,{children:`objectWidth`}),`, масштабирование будет происходить по горизонтали, если `,(0,c.jsx)(t.code,{children:`objectHeight`}),` — по вертикали. Это позволяет гибко работать с изображениями разных ориентаций.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Элементы с одинаковым значением `,(0,c.jsx)(t.code,{children:`adaptiveGroup`}),` масштабируются синхронно, обеспечивая одинаковый визуальный размер объектов на всех изображениях группы. Это особенно полезно при отображении галерей продуктов или сравнительных таблиц, где важно сохранить визуальное соответствие размеров.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Для оптимизации производительности расчёты масштабирования выполняются только для видимых элементов в пределах области просмотра (viewport) плюс небольшой запас. Если элемент находится за пределами видимой области, расчёты приостанавливаются до момента, когда элемент появится на экране. Свойство `,(0,c.jsx)(t.code,{children:`adaptiveAlways`}),` отключает эту оптимизацию и заставляет компонент постоянно пересчитывать масштаб независимо от видимости элемента.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const phone1 = ref('/images/phone-model-a.png')
const phone2 = ref('/images/phone-model-b.png')
const phone3 = ref('/images/phone-model-c.png')
<\/script>

<template>
<!-- Базовое использование с шириной объекта -->
<Image
  :value="phone1"
  adaptive
  object-width="76.2"
/>

<!-- Несколько изображений в одной группе -->
<Image
  :value="phone1"
  adaptive
  adaptive-group="phones"
  object-width="76.2"
/>
<Image
  :value="phone2"
  adaptive
  adaptive-group="phones"
  object-width="71.9"
/>
<Image
  :value="phone3"
  adaptive
  adaptive-group="phones"
  object-width="129.9"
/>

<!-- С высотой вместо ширины -->
<Image
  adaptive
  object-height="154.8"
  :value="phone1"
/>

<!-- Постоянное масштабирование -->
<Image
  adaptive
  adaptive-always
  object-width="76.2"
  :value="phone1"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};
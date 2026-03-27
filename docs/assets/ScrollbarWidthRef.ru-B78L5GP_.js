import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Classes/ScrollbarWidthRef - Ширина скролла`}),`
`,(0,c.jsx)(n.h1,{id:`класс-scrollbarwidthref`,children:`Класс ScrollbarWidthRef`}),`
`,(0,c.jsx)(n.p,{children:`Реактивная надстройка над базовой утилитой для определения параметров полосы прокрутки. Класс позволяет отслеживать как наличие скроллбара (его тип), так и его фактическую ширину в пикселях. Это критично для предотвращения «прыжков» верстки (layout shift) при скрытии или появлении скролла, например, при открытии модальных окон.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Реактивность`}),` — автоматическое обновление значений `,(0,c.jsx)(n.code,{children:`item`}),` и `,(0,c.jsx)(n.code,{children:`width`}),` при получении данных от браузера.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматический расчет`}),` — класс самостоятельно инициирует замер ширины скролла сразу после создания экземпляра.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Состояние готовности`}),` — наличие вычисляемого свойства `,(0,c.jsx)(n.code,{children:`is`}),` позволяет безопасно использовать данные только после их инициализации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кроссплатформенность`}),` — корректно определяет «тонкие» и скрывающиеся скроллбары (macOS, мобильные устройства).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Создает новый экземпляр `,(0,c.jsx)(n.code,{children:`ScrollbarWidthRef`}),` и запускает асинхронный процесс замера ширины скролла.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`Нет`})}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ScrollbarWidthRef } from '@dxtmisha/functional'

const scrollbar = new ScrollbarWidthRef()
`})}),`
`,(0,c.jsx)(n.h2,{id:`свойства`,children:`Свойства`}),`
`,(0,c.jsx)(n.h3,{id:`состояние`,children:`Состояние`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: Ref<boolean | undefined>`}),` — Флаг, определяющий результат проверки `,(0,c.jsx)(n.code,{children:`ScrollbarWidth.is()`}),`. Возвращает `,(0,c.jsx)(n.code,{children:`true`}),`, если скроллбар считается «специальным» (например, автоскрывающийся в macOS или мобильный, где ширина обычно `,(0,c.jsx)(n.code,{children:`<= 8px`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`width: Ref<number>`}),` — Фактическая ширина полосы прокрутки в пикселях. По умолчанию `,(0,c.jsx)(n.code,{children:`0`}),`. Обновляется асинхронно после замера.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is: Computed<boolean>`}),` — Возвращает `,(0,c.jsx)(n.code,{children:`true`}),`, когда расчет ширины завершен и значения `,(0,c.jsx)(n.code,{children:`item`}),` и `,(0,c.jsx)(n.code,{children:`width`}),` актуальны.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`динамическая-компенсация-скролла-в-css`,children:`Динамическая компенсация скролла в CSS`}),`
`,(0,c.jsx)(n.p,{children:`Использование реактивной ширины для создания CSS-переменной, которая компенсирует отступ при блокировке скролла.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-vue`,children:`<template>
  <div :style="style" class="container">
    Контент с динамическим отступом
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { ScrollbarWidthRef } from '@dxtmisha/functional'

const scrollbar = new ScrollbarWidthRef()

// Рассчитываем переменную только после того, как ширина определена
const style = computed(() => ({
  '--scrollbar-width': scrollbar.is.value ? \`\${scrollbar.width.value}px\` : '0px'
}))
<\/script>

<style scoped>
.container {
  /* Пример использования для отступа справа */
  padding-right: var(--scrollbar-width);
}
</style>
`})}),`
`,(0,c.jsx)(n.h3,{id:`отслеживание-типа-скроллбара`,children:`Отслеживание типа скроллбара`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { watch } from 'vue'
import { ScrollbarWidthRef } from '@dxtmisha/functional'

const scrollbar = new ScrollbarWidthRef()

watch(() => scrollbar.is.value, (ready) => {
  if (ready) {
    if (scrollbar.item.value) {
      console.log('Используется системный/скрывающийся скроллбар')
    } else {
      console.log(\`Стандартный скроллбар шириной \${scrollbar.width.value}px\`)
    }
  }
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
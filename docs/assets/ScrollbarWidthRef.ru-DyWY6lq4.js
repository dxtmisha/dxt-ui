import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/ru/functional/Classes/ScrollbarWidthRef - Менеджер ширины скролла"}),`
`,n.jsx(e.h1,{id:"класс-scrollbarwidthref",children:"Класс ScrollbarWidthRef"}),`
`,n.jsx(e.p,{children:"Реактивный утилитарный класс для определения и управления шириной полосы прокрутки браузера. Он использует механизм обнаружения и предоставляет реактивные свойства для проверки того, была ли рассчитана ширина скролла."}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Реактивность"})," — использует Vue ",n.jsx(e.code,{children:"ref"})," и ",n.jsx(e.code,{children:"computed"})," для предоставления состояния скролла."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Асинхронное обнаружение"})," — автоматически рассчитывает ширину при инициализации через ",n.jsx(e.code,{children:"ScrollbarWidth.is()"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Легкость"})," — минимальный размер, полезен для расчетов макета, зависящих от наличия скролла."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Создает новый экземпляр ",n.jsx(e.code,{children:"ScrollbarWidthRef"}),". При создании класс запускает асинхронный процесс определения ширины скролла браузера. Результат записывается в реактивные свойства, как только он становится доступен."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { ScrollbarWidthRef } from '@dxtmisha/functional'
import { watch } from 'vue'

const scrollbar = new ScrollbarWidthRef()

// Отслеживание готовности данных
watch(scrollbar.is, (isReady) => {
  if (isReady) {
    console.log('Ширина скролла определена:', scrollbar.item.value)
  }
})
`})}),`
`,n.jsx(e.h2,{id:"свойства",children:"Свойства"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item: Ref<boolean | undefined>"})," — Реактивный элемент, содержащий состояние наличия скролла. Значение ",n.jsx(e.code,{children:"true"})," означает, что скролл занимает место в макете."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"is: ComputedRef<boolean>"})," — Вычисляемое свойство, которое проверяет, завершен ли расчет ширины полосы прокрутки."]}),`
`]})]})}function x(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{x as default};

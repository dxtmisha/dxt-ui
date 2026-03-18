import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/ru/functional/Composables/useLazyRef - Ленивая загрузка"}),`
`,e.jsx(n.h1,{id:"uselazyref",children:e.jsx(n.code,{children:"useLazyRef"})}),`
`,e.jsxs(n.p,{children:["Composable для инициализации отслеживания появления элемента на экране с использованием ",e.jsx(n.code,{children:"IntersectionObserver"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: IntersectionObserverInit"})," — настройки для ",e.jsx(n.code,{children:"IntersectionObserver"}),". По умолчанию: ",e.jsx(n.code,{children:"{ rootMargin: '128px 0px' }"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возвращает:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"intersectionObserver: IntersectionObserver | undefined"})," — экземпляр ",e.jsx(n.code,{children:"IntersectionObserver"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItem(element: HTMLElement): LazyItem | undefined"})," — получение данных отслеживаемого элемента."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"addLazyItem(element: Ref<HTMLElement | undefined>): ShallowRef<boolean>"})," — добавление элемента для отслеживания (возвращает статус видимости)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"removeLazyItem(element?: HTMLElement): void"})," — удаление элемента из отслеживания."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disconnectLazy(): void"})," — прекращение отслеживания и отключение наблюдателя."]}),`
`]}),`
`,e.jsx(n.h2,{id:"пример-использования",children:"Пример использования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ref, watch } from 'vue'
import { useLazyRef } from '@dxtmisha/functional'

const element = ref<HTMLElement>()
const { addLazyItem } = useLazyRef({ rootMargin: '200px' })

const isVisible = addLazyItem(element)

watch(isVisible, (visible) => {
  if (visible) {
    console.log('Элемент теперь виден!')
  }
})
`})})]})}function m(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{m as default};

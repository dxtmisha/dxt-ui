import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/ru/functional/Composables/useLazyItemByMarginRef - Ленивая загрузка по отступу"}),`
`,e.jsx(n.h1,{id:"uselazyitembymarginref",children:e.jsx(n.code,{children:"useLazyItemByMarginRef"})}),`
`,e.jsxs(n.p,{children:["Composable для отслеживания появления элемента на экране с использованием ",e.jsx(n.code,{children:"IntersectionObserver"}),". Оптимизирован за счет использования единого экземпляра наблюдателя для одинаковых значений ",e.jsx(n.code,{children:"rootMargin"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element: RefType<HTMLElement | undefined>"})," — реактивная ссылка на отслеживаемый HTML-элемент."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rootMargin: string"})," — отступ для ",e.jsx(n.code,{children:"IntersectionObserver"})," (например, ",e.jsx(n.code,{children:"'100px 0px'"}),")."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возвращает:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lazyItemStatus: ShallowRef<boolean>"})," — статус видимости элемента (пересекает ли он область с учетом ",e.jsx(n.code,{children:"rootMargin"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lazyItem: LazyItem | undefined"})," — (getter) объект с подробной информацией об отслеживании (ratio, entry и т.д.)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"пример-использования",children:"Пример использования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ref } from 'vue'
import { useLazyItemByMarginRef } from '@dxtmisha/functional'

const element = ref<HTMLElement>()
const { lazyItemStatus } = useLazyItemByMarginRef(element, '128px 0px')

// lazyItemStatus.value станет true, когда элемент окажется в 128px от области видимости
`})})]})}function x(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{x as default};

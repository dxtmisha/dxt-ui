import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional/Composables/useLazyItemByMarginRef - Ленивая загрузка по отступу`}),`
`,(0,c.jsx)(n.h1,{id:`uselazyitembymarginref`,children:(0,c.jsx)(n.code,{children:`useLazyItemByMarginRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`Composable для отслеживания появления элемента на экране с использованием `,(0,c.jsx)(n.code,{children:`IntersectionObserver`}),`. Оптимизирован за счет использования единого экземпляра наблюдателя для одинаковых значений `,(0,c.jsx)(n.code,{children:`rootMargin`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element: RefType<HTMLElement | undefined>`}),` — реактивная ссылка на отслеживаемый HTML-элемент.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`rootMargin: string`}),` — отступ для `,(0,c.jsx)(n.code,{children:`IntersectionObserver`}),` (например, `,(0,c.jsx)(n.code,{children:`'100px 0px'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lazyItemStatus: ShallowRef<boolean>`}),` — статус видимости элемента (пересекает ли он область с учетом `,(0,c.jsx)(n.code,{children:`rootMargin`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lazyItem: LazyItem | undefined`}),` — (getter) объект с подробной информацией об отслеживании (ratio, entry и т.д.).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { useLazyItemByMarginRef } from '@dxtmisha/functional'

const element = ref<HTMLElement>()
const { lazyItemStatus } = useLazyItemByMarginRef(element, '128px 0px')

// lazyItemStatus.value станет true, когда элемент окажется в 128px от области видимости
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
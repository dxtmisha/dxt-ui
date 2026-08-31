import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Composables/useLazyItemByMarginRef - Ленивая загрузка по отступу`}),`
`,(0,c.jsx)(t.h1,{id:`uselazyitembymarginref`,children:(0,c.jsx)(t.code,{children:`useLazyItemByMarginRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Composable для отслеживания появления элемента на экране с использованием `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),`. Оптимизирован за счет использования единого экземпляра наблюдателя для одинаковых значений `,(0,c.jsx)(t.code,{children:`rootMargin`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: RefType<HTMLElement | undefined>`}),` — реактивная ссылка на отслеживаемый HTML-элемент.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`rootMargin: string`}),` — отступ для `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),` (например, `,(0,c.jsx)(t.code,{children:`'100px 0px'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lazyItemStatus: ShallowRef<boolean>`}),` — статус видимости элемента (пересекает ли он область с учетом `,(0,c.jsx)(t.code,{children:`rootMargin`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lazyItem: LazyItem | undefined`}),` — (getter) объект с подробной информацией об отслеживании (ratio, entry и т.д.).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { useLazyItemByMarginRef } from '@dxtmisha/functional'

const element = ref<HTMLElement>()
const { lazyItemStatus } = useLazyItemByMarginRef(element, '128px 0px')

// lazyItemStatus.value станет true, когда элемент окажется в 128px от области видимости
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
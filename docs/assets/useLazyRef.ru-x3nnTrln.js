import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Composables/useLazyRef - Ленивая загрузка`}),`
`,(0,c.jsx)(t.h1,{id:`uselazyref`,children:(0,c.jsx)(t.code,{children:`useLazyRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Composable для инициализации отслеживания появления элемента на экране с использованием `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: IntersectionObserverInit`}),` — настройки для `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),`. По умолчанию: `,(0,c.jsx)(t.code,{children:`{ rootMargin: '128px 0px' }`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`intersectionObserver: IntersectionObserver | undefined`}),` — экземпляр `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getItem(element: HTMLElement): LazyItem | undefined`}),` — получение данных отслеживаемого элемента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addLazyItem(element: Ref<HTMLElement | undefined>): ShallowRef<boolean>`}),` — добавление элемента для отслеживания (возвращает статус видимости).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`removeLazyItem(element?: HTMLElement): void`}),` — удаление элемента из отслеживания.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`disconnectLazy(): void`}),` — прекращение отслеживания и отключение наблюдателя.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref, watch } from 'vue'
import { useLazyRef } from '@dxtmisha/functional'

const element = ref<HTMLElement>()
const { addLazyItem } = useLazyRef({ rootMargin: '200px' })

const isVisible = addLazyItem(element)

watch(isVisible, (visible) => {
  if (visible) {
    console.log('Элемент теперь виден!')
  }
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
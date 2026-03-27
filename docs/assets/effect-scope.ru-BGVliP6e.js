import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/# Глобальная область эффектов`}),`
`,(0,c.jsx)(n.h1,{id:`глобальная-область-эффектов`,children:`Глобальная область эффектов`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.strong,{children:`EffectScopeGlobal`}),` предоставляет доступ к единой, долгоживущей области действия эффектов (`,(0,c.jsx)(n.strong,{children:`EffectScope`}),`) в `,(0,c.jsx)(n.strong,{children:`Vue 3`}),`. Это позволяет создавать реактивные зависимости (watch, computed), которые не зависят от жизненного цикла конкретных компонентов.`]}),`
`,(0,c.jsx)(n.h2,{id:`особенности`,children:`Особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Персистентность`}),`: Эффекты, запущенные через этот класс, живут на протяжении всего времени работы приложения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Изоляция`}),`: Позволяет группировать глобальные реактивные процессы в одном месте для предотвращения утечек памяти.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Контроль`}),`: Все созданные внутри `,(0,c.jsx)(n.code,{children:`run()`}),` зависимости автоматически связываются с глобальным контекстом.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры-использования`,children:`Примеры использования`}),`
`,(0,c.jsx)(n.p,{children:`Обычно используется для настройки глобальных слушателей или вычисляемых свойств, которые должны быть доступны во всем приложении.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { watch, ref } from 'vue'
import { EffectScopeGlobal } from '@dxtmisha/functional'

const globalState = ref(0)

// 1. Запуск глобального процесса
EffectScopeGlobal.run(() => {
  watch(globalState, (val) => {
    console.log('Глобальное состояние изменилось:', val)
  })
})

// 2. Создание долгоживущих computed-свойств
const persistentValue = EffectScopeGlobal.run(() => {
  return computed(() => globalState.value * 2)
})
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Этот подход гарантирует, что даже если компонент, инициировавший создание этого `,(0,c.jsx)(n.code,{children:`watch`}),`, будет уничтожен (unmounted), наблюдатель продолжит свою работу.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};
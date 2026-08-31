import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/9. Глобальная область эффектов`}),`
`,(0,c.jsx)(t.h1,{id:`глобальная-область-эффектов`,children:`Глобальная область эффектов`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.strong,{children:`EffectScopeGlobal`}),` предоставляет доступ к единой, долгоживущей области действия эффектов (`,(0,c.jsx)(t.strong,{children:`EffectScope`}),`) в `,(0,c.jsx)(t.strong,{children:`Vue 3`}),`. Это позволяет создавать реактивные зависимости (watch, computed), которые не зависят от жизненного цикла конкретных компонентов.`]}),`
`,(0,c.jsx)(t.h2,{id:`особенности`,children:`Особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Персистентность`}),`: Эффекты, запущенные через этот класс, живут на протяжении всего времени работы приложения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Изоляция`}),`: Позволяет группировать глобальные реактивные процессы в одном месте для предотвращения утечек памяти.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Контроль`}),`: Все созданные внутри `,(0,c.jsx)(t.code,{children:`run()`}),` зависимости автоматически связываются с глобальным контекстом.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры-использования`,children:`Примеры использования`}),`
`,(0,c.jsx)(t.p,{children:`Обычно используется для настройки глобальных слушателей или вычисляемых свойств, которые должны быть доступны во всем приложении.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { watch, ref } from 'vue'
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
`,(0,c.jsxs)(t.p,{children:[`Этот подход гарантирует, что даже если компонент, инициировавший создание этого `,(0,c.jsx)(t.code,{children:`watch`}),`, будет уничтожен (unmounted), наблюдатель продолжит свою работу.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
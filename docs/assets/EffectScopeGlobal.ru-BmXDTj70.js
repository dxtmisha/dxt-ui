import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Classes/EffectScopeGlobal - Глобальная реактивная область`}),`
`,(0,c.jsx)(t.h1,{id:`класс-effectscopeglobal`,children:`Класс EffectScopeGlobal`}),`
`,(0,c.jsxs)(t.p,{children:[`Утилитарный класс, предоставляющий глобальную, отсоединенную (detached) область `,(0,c.jsx)(t.code,{children:`effectScope`}),` Vue. Это позволяет запускать реактивные эффекты (watchers, computed properties), которые не привязаны к жизненному циклу конкретного компонента, гарантируя, что они не будут автоматически удалены при размонтировании компонента.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Область инициализируется лениво при первом вызове `,(0,c.jsx)(t.code,{children:`run`}),` и создается как «отсоединенная» (`,(0,c.jsx)(t.code,{children:`effectScope(true)`}),`), что означает, что она не будет захвачена никакой родительской областью.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Глобальная устойчивость`}),` — эффекты живут столько же, сколько и приложение.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Отсоединенная область`}),` — создается с помощью `,(0,c.jsx)(t.code,{children:`effectScope(true)`}),`, что предотвращает случайное удаление родительскими областями.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ленивая инициализация`}),` — внутренняя область создается только при первой необходимости.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление областью`}),` — группирует глобальные реактивные эффекты вместе для организованного управления.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Простота использования`}),` — простой статический метод для запуска любой реактивной функции.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`действия`,children:`Действия`}),`
`,(0,c.jsx)(t.h3,{id:`run`,children:(0,c.jsx)(t.code,{children:`run`})}),`
`,(0,c.jsx)(t.p,{children:`Запускает переданную функцию в глобальной области действия эффекта.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fn: () => T`}),` — выполняемая функция (обычно содержащая реактивную логику, такую как `,(0,c.jsx)(t.code,{children:`watch`}),` или `,(0,c.jsx)(t.code,{children:`computed`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`T | undefined`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { EffectScopeGlobal } from '@dxtmisha/functional'
import { watch, ref } from 'vue'

const globalState = ref(0)

// Этот watcher будет сохраняться, даже если создавший его компонент будет размонтирован
EffectScopeGlobal.run(() => {
  watch(globalState, (val) => {
    console.log('Глобальное состояние изменилось:', val)
  })
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
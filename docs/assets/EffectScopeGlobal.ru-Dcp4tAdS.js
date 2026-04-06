import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional/Classes/EffectScopeGlobal - Глобальная реактивная область`}),`
`,(0,c.jsx)(n.h1,{id:`класс-effectscopeglobal`,children:`Класс EffectScopeGlobal`}),`
`,(0,c.jsxs)(n.p,{children:[`Утилитарный класс, предоставляющий глобальную, отсоединенную (detached) область `,(0,c.jsx)(n.code,{children:`effectScope`}),` Vue. Это позволяет запускать реактивные эффекты (watchers, computed properties), которые не привязаны к жизненному циклу конкретного компонента, гарантируя, что они не будут автоматически удалены при размонтировании компонента.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Область инициализируется лениво при первом вызове `,(0,c.jsx)(n.code,{children:`run`}),` и создается как «отсоединенная» (`,(0,c.jsx)(n.code,{children:`effectScope(true)`}),`), что означает, что она не будет захвачена никакой родительской областью.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Глобальная устойчивость`}),` — эффекты живут столько же, сколько и приложение.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Отсоединенная область`}),` — создается с помощью `,(0,c.jsx)(n.code,{children:`effectScope(true)`}),`, что предотвращает случайное удаление родительскими областями.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ленивая инициализация`}),` — внутренняя область создается только при первой необходимости.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление областью`}),` — группирует глобальные реактивные эффекты вместе для организованного управления.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Простота использования`}),` — простой статический метод для запуска любой реактивной функции.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`действия`,children:`Действия`}),`
`,(0,c.jsx)(n.h3,{id:`run`,children:(0,c.jsx)(n.code,{children:`run`})}),`
`,(0,c.jsx)(n.p,{children:`Запускает переданную функцию в глобальной области действия эффекта.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fn: () => T`}),` — выполняемая функция (обычно содержащая реактивную логику, такую как `,(0,c.jsx)(n.code,{children:`watch`}),` или `,(0,c.jsx)(n.code,{children:`computed`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`T | undefined`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { EffectScopeGlobal } from '@dxtmisha/functional'
import { watch, ref } from 'vue'

const globalState = ref(0)

// Этот watcher будет сохраняться, даже если создавший его компонент будет размонтирован
EffectScopeGlobal.run(() => {
  watch(globalState, (val) => {
    console.log('Глобальное состояние изменилось:', val)
  })
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
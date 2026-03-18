import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(c){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"@dxtmisha/ru/functional/Classes/EffectScopeGlobal - Глобальная реактивная область"}),`
`,e.jsx(n.h1,{id:"класс-effectscopeglobal",children:"Класс EffectScopeGlobal"}),`
`,e.jsxs(n.p,{children:["Утилитарный класс, предоставляющий глобальную, отсоединенную (detached) область ",e.jsx(n.code,{children:"effectScope"})," Vue. Это позволяет запускать реактивные эффекты (watchers, computed properties), которые не привязаны к жизненному циклу конкретного компонента, гарантируя, что они не будут автоматически удалены при размонтировании компонента."]}),`
`,e.jsxs(n.p,{children:["Область инициализируется лениво при первом вызове ",e.jsx(n.code,{children:"run"})," и создается как «отсоединенная» (",e.jsx(n.code,{children:"effectScope(true)"}),"), что означает, что она не будет захвачена никакой родительской областью."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Глобальная устойчивость"})," — эффекты живут столько же, сколько и приложение."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Отсоединенная область"})," — создается с помощью ",e.jsx(n.code,{children:"effectScope(true)"}),", что предотвращает случайное удаление родительскими областями."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ленивая инициализация"})," — внутренняя область создается только при первой необходимости."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Управление областью"})," — группирует глобальные реактивные эффекты вместе для организованного управления."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Простота использования"})," — простой статический метод для запуска любой реактивной функции."]}),`
`]}),`
`,e.jsx(n.h2,{id:"действия",children:"Действия"}),`
`,e.jsx(n.h3,{id:"run",children:e.jsx(n.code,{children:"run"})}),`
`,e.jsx(n.p,{children:"Запускает переданную функцию в глобальной области действия эффекта."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fn: () => T"})," — выполняемая функция (обычно содержащая реактивную логику, такую как ",e.jsx(n.code,{children:"watch"})," или ",e.jsx(n.code,{children:"computed"}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"T | undefined"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { EffectScopeGlobal } from '@dxtmisha/functional'
import { watch, ref } from 'vue'

const globalState = ref(0)

// Этот watcher будет сохраняться, даже если создавший его компонент будет размонтирован
EffectScopeGlobal.run(() => {
  watch(globalState, (val) => {
    console.log('Глобальное состояние изменилось:', val)
  })
})
`})})]})}function j(c={}){const{wrapper:n}={...s(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(r,{...c})}):r(c)}export{j as default};

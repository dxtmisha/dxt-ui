import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(t){const n={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/ru/functional/Functions/computedByLanguage - Вычисляемое свойство по языку"}),`
`,e.jsx(n.h1,{id:"computedbylanguage",children:e.jsx(n.code,{children:"computedByLanguage"})}),`
`,e.jsx(n.p,{children:"Создаёт реактивное вычисляемое свойство, которое автоматически пересчитывается при изменении текущего языка или зависимостей внутри геттеров."}),`
`,e.jsx(n.h3,{id:"как-это-работает",children:"Как это работает"}),`
`,e.jsx(n.p,{children:"Функция выполняет проверку в следующем порядке:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Проверка языка"}),": Проверяет наличие установленного языка через ",e.jsx(n.code,{children:"GeoRef.get().value"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Проверка условий"}),": Если передан параметр ",e.jsx(n.code,{children:"conditions"}),", он вызывается для дополнительной проверки (например, проверка прав доступа или состояния загрузки данных)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Выполнение основного геттера"}),": Если обе проверки выше прошли успешно, вызывается ",e.jsx(n.code,{children:"getter"}),". Если он возвращает значение (не ",e.jsx(n.code,{children:"undefined"}),"), это значение становится результатом."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Резервный вариант"}),": Если любая из проверок не прошла или ",e.jsx(n.code,{children:"getter"})," вернул ",e.jsx(n.code,{children:"undefined"}),", выполняется ",e.jsx(n.code,{children:"getterNone"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getter: ComputedGetter<R>"})," — Основная логика получения значения. Вызывается только если язык установлен и условия выполнены."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getterNone: R | (() => R)"}),' — Резервное значение или функция, возвращающая его. Вызывается как "план Б". По умолчанию: ',e.jsx(n.code,{children:"() => undefined"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"conditions?: () => boolean"}),' — Функция-условие. Служит "затвором" (gatekeeper): если она возвращает ',e.jsx(n.code,{children:"false"}),", основной ",e.jsx(n.code,{children:"getter"})," даже не будет запущен."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"debugOptions?: DebuggerOptions"})," — Опции отладки реактивных вычислений Vue.js."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"ComputedRef<R>"})," — Реактивное вычисляемое свойство."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { computedByLanguage } from '@dxtmisha/functional'
import { ref } from 'vue'

// Базовый пример
const label = computedByLanguage(() => translateKey('hello'))

// С резервным значением
const title = computedByLanguage(
  () => translateKey('page.title'),
  () => 'Untitled'
)

// С дополнительным условием
const isReady = ref(true)
const content = computedByLanguage(
  () => translateKey('content'),
  () => 'Loading...',
  () => isReady.value
)
`})})]})}function a(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{a as default};

import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-C8vOrmRQ.js";import{M as i}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/functional/ru/Execution Utils"}),`
`,e.jsx(n.h1,{id:"утилиты-выполнения",children:"Утилиты выполнения"}),`
`,e.jsx(n.p,{children:"Набор функций для универсального выполнения синхронных и асинхронных операций."}),`
`,e.jsx(n.h2,{id:"executefunction",children:e.jsx(n.code,{children:"executeFunction"})}),`
`,e.jsx(n.p,{children:"Выполняет функцию и возвращает её результат, или возвращает входные данные, если это не функция."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: T | FunctionArgs<any, T>"})," — функция или любое значение"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { executeFunction } from '@dxtmisha/functional'

executeFunction(() => 'Hello World') // 'Hello World'
executeFunction('Static value') // 'Static value'
executeFunction(() => 42 + 8) // 50
executeFunction({ data: 'object' }) // { data: 'object' }
`})}),`
`,e.jsx(n.h2,{id:"executepromise",children:e.jsx(n.code,{children:"executePromise"})}),`
`,e.jsx(n.p,{children:"Выполняет асинхронную функцию или возвращает значение, автоматически обрабатывая Promise."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: (() => Promise<T>) | (() => T) | T"})," — асинхронная функция, синхронная функция или значение"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { executePromise } from '@dxtmisha/functional'

await executePromise(async () => fetch('/api').then(r => r.json())) // Promise result
await executePromise(() => 'Sync result') // 'Sync result'
await executePromise('Static value') // 'Static value'
`})}),`
`,e.jsx(n.h2,{id:"executeuse",children:e.jsx(n.code,{children:"executeUse"})}),`
`,e.jsx(n.p,{children:"Возвращает функцию для кеширования и переиспользования результатов инициализации в Vue компонентах. Поддерживает различные режимы работы: локальное кеширование, глобальное состояние, наследование через provide/inject и автоматическую очистку при размонтировании."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: (...args: O) => R"})," — функция инициализации, результат которой будет кеширован"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unmounted: boolean"})," — удалять ли данные из кеша при размонтировании компонента (по умолчанию ",e.jsx(n.code,{children:"true"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isGlobal: boolean"})," — является ли объект глобальным для всего приложения (по умолчанию ",e.jsx(n.code,{children:"false"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isProvide: boolean"})," — использовать ли provide/inject для наследования в дочерних компонентах (по умолчанию ",e.jsx(n.code,{children:"true"}),")"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
Функцию, которая при первом вызове выполняет callback и кеширует результат, а при последующих вызовах возвращает закешированное значение.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { executeUse } from '@dxtmisha/functional'
import { reactive, ref } from 'vue'

// Простое кеширование состояния
const useCounter = executeUse(() => {
  return reactive({
    count: 0,
    increment() { this.count++ },
    decrement() { this.count-- }
  })
})

// В компоненте
const counter = useCounter() // создается один раз
counter.increment()

// Кеширование с параметрами
const useStore = executeUse((initialData) => {
  return reactive({
    data: initialData,
    loading: false,
    error: null,
    async fetch() {
      this.loading = true
      try {
        this.data = await api.getData()
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    }
  })
})

// Глобальное состояние (сохраняется между компонентами)
const useGlobalTheme = executeUse(
  () => reactive({ theme: 'dark', language: 'ru' }),
  false,  // не удалять при размонтировании
  true,   // глобальное состояние
  false   // без provide/inject
)

// Локальное состояние с наследованием
const useFormState = executeUse(
  (formId) => reactive({
    formId,
    values: {},
    errors: {},
    isValid: false,
    setValue(key, value) {
      this.values[key] = value
      this.validate()
    },
    validate() {
      // логика валидации
      this.isValid = Object.keys(this.errors).length === 0
    }
  }),
  true,   // очищать при размонтировании
  false,  // не глобальное
  true    // с наследованием через provide/inject
)

// Кеширование API клиента
const useApiClient = executeUse(() => {
  const baseURL = process.env.VUE_APP_API_URL

  return {
    async get(endpoint) {
      const response = await fetch(\`\${baseURL}\${endpoint}\`)
      return response.json()
    },
    async post(endpoint, data) {
      const response = await fetch(\`\${baseURL}\${endpoint}\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      return response.json()
    }
  }
})

// Использование в компонентах
export default {
  setup() {
    // Все вызовы вернут один и тот же объект
    const counter = useCounter()
    const store = useStore({ items: [] })
    const theme = useGlobalTheme()
    const api = useApiClient()

    return { counter, store, theme, api }
  }
}
`})})]})}function h(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{h as default};

import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-Zkkrlp1B.js";import{M as i}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function s(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/functional/ru/Execution Utils"}),`
`,n.jsx(e.h1,{id:"утилиты-выполнения",children:"Утилиты выполнения"}),`
`,n.jsx(e.p,{children:"Набор функций для универсального выполнения синхронных и асинхронных операций."}),`
`,n.jsx(e.h2,{id:"computedbylanguage",children:n.jsx(e.code,{children:"computedByLanguage"})}),`
`,n.jsx(e.p,{children:"Создает реактивное вычисляемое свойство, значение которого зависит от текущего языка и заданных условий."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getter: ComputedGetter<R>"})," — функция, возвращающая основное значение в зависимости от языка"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getterNone: R | (() => R)"})," — альтернативное значение, если условия не выполнены или getter вернул undefined (по умолчанию undefined)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"conditions: () => boolean"})," — условие для вызова основного getter (опционально)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"debugOptions: DebuggerOptions"})," — опции отладки Vue (опционально)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { computedByLanguage } from '@dxtmisha/functional'
import { ref } from 'vue'

// Простой пример с переводами
const title = computedByLanguage(
  () => {
    const lang = GeoRef.get().value
    return lang === 'ru' ? 'Заголовок' : 'Title'
  },
  'Default Title'
)

// С условием
const description = computedByLanguage(
  () => {
    const lang = GeoRef.get().value
    const translations = {
      ru: 'Описание на русском',
      en: 'Description in English'
    }
    return translations[lang]
  },
  () => 'Описание по умолчанию',
  () => showDescription.value // условие показа
)

// Использование в компоненте
export default {
  setup() {
    const showText = ref(true)

    const greeting = computedByLanguage(
      () => {
        const lang = GeoRef.get().value
        return lang === 'ru' ? 'Привет, мир!' : 'Hello, world!'
      },
      'Greeting',
      () => showText.value
    )

    return { greeting }
  }
}
`})}),`
`,n.jsx(e.h2,{id:"executefunction",children:n.jsx(e.code,{children:"executeFunction"})}),`
`,n.jsx(e.p,{children:"Выполняет функцию и возвращает её результат, или возвращает входные данные, если это не функция."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: T | FunctionArgs<any, T>"})," — функция или любое значение"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { executeFunction } from '@dxtmisha/functional'

executeFunction(() => 'Hello World') // 'Hello World'
executeFunction('Static value') // 'Static value'
executeFunction(() => 42 + 8) // 50
executeFunction({ data: 'object' }) // { data: 'object' }
`})}),`
`,n.jsx(e.h2,{id:"executepromise",children:n.jsx(e.code,{children:"executePromise"})}),`
`,n.jsx(e.p,{children:"Выполняет асинхронную функцию или возвращает значение, автоматически обрабатывая Promise."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: (() => Promise<T>) | (() => T) | T"})," — асинхронная функция, синхронная функция или значение"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { executePromise } from '@dxtmisha/functional'

await executePromise(async () => fetch('/api').then(r => r.json())) // Promise result
await executePromise(() => 'Sync result') // 'Sync result'
await executePromise('Static value') // 'Static value'
`})}),`
`,n.jsx(e.h2,{id:"executeuse",children:n.jsx(e.code,{children:"executeUse"})}),`
`,n.jsx(e.p,{children:"Возвращает функцию для кеширования и переиспользования результатов инициализации в Vue компонентах. Поддерживает различные режимы работы: локальное кеширование, глобальное состояние, наследование через provide/inject и автоматическую очистку при размонтировании."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: (...args: O) => R"})," — функция инициализации, результат которой будет кеширован"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"unmounted: boolean"})," — удалять ли данные из кеша при размонтировании компонента (по умолчанию ",n.jsx(e.code,{children:"true"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isGlobal: boolean"})," — является ли объект глобальным для всего приложения (по умолчанию ",n.jsx(e.code,{children:"false"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isProvide: boolean"})," — использовать ли provide/inject для наследования в дочерних компонентах (по умолчанию ",n.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
Функцию, которая при первом вызове выполняет callback и кеширует результат, а при последующих вызовах возвращает закешированное значение.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { executeUse } from '@dxtmisha/functional'
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
`})})]})}function h(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{h as default};

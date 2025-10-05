import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-DB_maGql.js";import{M as a}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"@dxtmisha/functional/ru/Classes/Global"}),`
`,n.jsx(e.h1,{id:"класс-global",children:"Класс Global"}),`
`,n.jsx(e.p,{children:"Статический класс для управления глобальными данными приложения. Предоставляет простой и безопасный способ хранения и получения глобальных конфигураций, настроек и данных с защитой от повторной инициализации."}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Единоразовая инициализация"})," — данные можно добавить только один раз для предотвращения случайного перезаписывания"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Типобезопасное получение данных"})," — поддержка дженериков TypeScript для типизированного доступа"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Глобальное хранилище"})," — централизованное место для хранения конфигураций приложения"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Простой API"})," — всего два метода для работы с глобальными данными"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Защита от конфликтов"})," — предотвращает повторную инициализацию глобальных данных"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Память эффективность"})," — использует простое копирование объекта без глубокого клонирования"]}),`
`]}),`
`,n.jsx(e.h2,{id:"статические-методы",children:"Статические методы"}),`
`,n.jsx(e.h3,{id:"add",children:n.jsx(e.code,{children:"add"})}),`
`,n.jsx(e.p,{children:"Добавляет глобальные данные. Метод работает только один раз для предотвращения случайного перезаписывания."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: Record<string, any>"})," — объект с глобальными данными"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Global } from '@dxtmisha/functional'

// Инициализация глобальных данных (выполняется один раз)
Global.add({
  apiUrl: 'https://api.example.com',
  appName: 'MyApplication',
  version: '1.0.0',
  features: {
    darkMode: true,
    notifications: false
  },
  maxRetries: 3
})

// Попытка повторной инициализации будет проигнорирована
Global.add({
  apiUrl: 'https://different-api.com' // Это не перезапишет данные
})
`})}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsx(e.p,{children:"Возвращает значение по его имени с поддержкой типизации."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — название свойства для получения"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"R"})," — значение указанного типа или undefined"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Получение данных с автоматическим выводом типов
const apiUrl = Global.get('apiUrl')
console.log(apiUrl) // 'https://api.example.com'

// Получение с явным указанием типа
const features = Global.get<{ darkMode: boolean; notifications: boolean }>('features')
console.log(features.darkMode) // true

// Получение примитивных типов
const maxRetries = Global.get<number>('maxRetries')
console.log(maxRetries) // 3

// Получение несуществующего свойства
const nonExistent = Global.get('nonExistent')
console.log(nonExistent) // undefined
`})}),`
`,n.jsx(e.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,n.jsx(e.h3,{id:"конфигурация-приложения",children:"Конфигурация приложения"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class AppConfig {
  static initialize() {
    Global.add({
      api: {
        baseUrl: process.env.API_BASE_URL || 'https://api.myapp.com',
        timeout: 10000,
        retries: 3
      },
      ui: {
        theme: 'light',
        language: 'ru',
        animations: true
      },
      features: {
        newDashboard: true,
        advancedSearch: false
      },
      app: {
        name: 'MyApplication',
        version: '2.1.0',
        environment: process.env.NODE_ENV || 'production'
      }
    })
  }

  static getApiConfig() {
    return Global.get('api')
  }

  static isFeatureEnabled(featureName) {
    const features = Global.get('features')
    return features ? features[featureName] || false : false
  }
}

// Использование
AppConfig.initialize()
const apiConfig = AppConfig.getApiConfig()
console.log(\`API URL: \${apiConfig.baseUrl}\`)
`})}),`
`,n.jsx(e.h3,{id:"система-констант",children:"Система констант"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const AppConstants = {
  setup() {
    Global.add({
      constants: {
        limits: {
          maxFileSize: 10 * 1024 * 1024, // 10MB
          sessionTimeout: 30 * 60 * 1000 // 30 минут
        },
        endpoints: {
          auth: '/api/auth',
          users: '/api/users'
        },
        patterns: {
          email: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
          phone: /^\\+?[\\d\\s\\-\\(\\)]+$/
        }
      }
    })
  },

  validateEmail(email) {
    const patterns = Global.get('constants')?.patterns
    return patterns ? patterns.email.test(email) : false
  }
}

// Использование
AppConstants.setup()
console.log(AppConstants.validateEmail('user@example.com')) // true
`})}),`
`,n.jsx(e.p,{children:"Класс Global предоставляет простой и надежный способ управления глобальными данными приложения, обеспечивая централизованное хранение конфигураций с защитой от случайного перезаписывания."})]})}function h(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{h as default};

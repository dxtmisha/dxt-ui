import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-Dqnce8mp.js";import{M as r}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function s(c){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/functional/ru/Classes/CacheItem"}),`
`,n.jsx(e.h1,{id:"класс-cacheitem",children:"Класс CacheItem"}),`
`,n.jsx(e.p,{children:"Низкоуровневый класс для управления одним кешированным значением с автоматической инвалидацией на основе данных сравнения. Этот класс используется внутри класса Cache, но также может использоваться напрямую для точного контроля кеша."}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Кеширование одного значения"})," — управляет одним кешированным значением с интеллектуальной инвалидацией"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Инвалидация на основе сравнения"})," — автоматически инвалидирует кеш при изменении данных сравнения"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Отслеживание предыдущего значения"})," — сохраняет ссылку на старое кешированное значение во время обновлений"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Поддержка синхронного и асинхронного режимов"})," — выполнение как синхронных, так и асинхронных callback"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Типобезопасность"})," — полная поддержка TypeScript с дженериками"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Эффективное использование памяти"})," — минимальные накладные расходы для хранения одного значения"]}),`
`]}),`
`,n.jsx(e.h2,{id:"конструктор",children:"Конструктор"}),`
`,n.jsx(e.h3,{id:"constructor",children:n.jsx(e.code,{children:"constructor"})}),`
`,n.jsx(e.p,{children:"Создаёт новый экземпляр CacheItem с предоставленной callback функцией."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: () => T"})," — функция для выполнения когда кеш нужно сгенерировать или обновить"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { CacheItem } from '@dxtmisha/functional'

// Простой элемент кеша для дорогих вычислений
const expensiveComputation = new CacheItem(() => {
  console.log('Выполнение дорогих вычислений...')
  return Math.random() * 1000
})

// Элемент кеша для API данных
const apiData = new CacheItem(() => {
  console.log('Получение из API...')
  return fetch('/api/data').then(r => r.json())
})
`})}),`
`,n.jsx(e.h2,{id:"методы-получения-данных",children:"Методы получения данных"}),`
`,n.jsx(e.h3,{id:"getcache",children:n.jsx(e.code,{children:"getCache"})}),`
`,n.jsx(e.p,{children:"Получает кешированные данные или выполняет callback для генерации новых данных если кеш недействителен."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"comparison: any[]"})," — массив значений, используемых для сравнения при инвалидации кеша"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"T"})," — кешированные данные или результат выполнения callback"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const userCache = new CacheItem(() => {
  console.log('Загрузка данных пользователя...')
  return { id: 1, name: 'Иван Иванов', role: 'admin' }
})

let userId = 1
let userRole = 'admin'

// Первый вызов - выполняет callback
const user1 = userCache.getCache([userId, userRole])
console.log(user1) // Лог: "Загрузка данных пользователя..." затем возвращает объект пользователя

// Второй вызов с тем же сравнением - возвращает кешированные данные
const user1Cached = userCache.getCache([userId, userRole])
console.log(user1Cached) // Возвращает кешированные данные без логирования

// Изменение данных сравнения - кеш инвалидирован
userId = 2
const user2 = userCache.getCache([userId, userRole])
console.log(user2) // Лог: "Загрузка данных пользователя..." затем возвращает новый объект пользователя
`})}),`
`,n.jsx(e.h3,{id:"getcacheasync",children:n.jsx(e.code,{children:"getCacheAsync"})}),`
`,n.jsx(e.p,{children:"Асинхронно получает кешированные данные или выполняет асинхронный callback для генерации новых данных."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"comparison: any[]"})," — массив значений, используемых для сравнения при инвалидации кеша"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Promise<T>"})," — промис, разрешающийся в кешированные данные или результат callback"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const apiCache = new CacheItem(async () => {
  console.log('Получение пользователя из API...')
  const response = await fetch('/api/user/1')
  return await response.json()
})

// Первый вызов - выполняет асинхронный callback
const user = await apiCache.getCacheAsync([])
console.log(user) // Лог: "Получение пользователя из API..." затем возвращает данные пользователя

// Второй вызов - возвращает кешированные данные
const userCached = await apiCache.getCacheAsync([])
console.log(userCached) // Возвращает кешированные данные без API вызова
`})}),`
`,n.jsx(e.h3,{id:"getcacheold",children:n.jsx(e.code,{children:"getCacheOld"})}),`
`,n.jsx(e.p,{children:"Возвращает предыдущее кешированное значение (до последнего обновления)."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"T | undefined"})," — предыдущее кешированное значение или undefined если нет предыдущего значения"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const dataCache = new CacheItem(() => ({ timestamp: Date.now() }))

// Получить начальные данные
const data1 = dataCache.getCache(['v1'])
console.log(dataCache.getCacheOld()) // undefined (нет предыдущего значения)

// Обновить кеш с новым сравнением
const data2 = dataCache.getCache(['v2'])
console.log(dataCache.getCacheOld()) // Возвращает data1 (предыдущее значение)

// Обновить снова
const data3 = dataCache.getCache(['v3'])
console.log(dataCache.getCacheOld()) // Возвращает data2 (предыдущее значение)
`})}),`
`,n.jsx(e.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,n.jsx(e.h3,{id:"кеширование-вычислений",children:"Кеширование вычислений"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const expensiveCache = new CacheItem(() => {
  console.log('Выполнение дорогих вычислений...')
  return Array.from({length: 1000000}, (_, i) => i * i).reduce((a, b) => a + b)
})

let factor = 1
let data = [1, 2, 3]

// Первый вызов
const result1 = expensiveCache.getCache([factor, data])
console.log('Результат:', result1)

// Кешированный вызов
const result2 = expensiveCache.getCache([factor, data])
console.log('Кешированный:', result2) // Без пересчета
`})}),`
`,n.jsx(e.h3,{id:"валидация-с-историей",children:"Валидация с историей"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const validationCache = new CacheItem(() => {
  const errors = []
  if (!this.value) errors.push('Поле обязательно')
  if (this.value.length < 3) errors.push('Минимум 3 символа')
  return { isValid: errors.length === 0, errors }
})

function validateField(value) {
  this.value = value
  const current = validationCache.getCache([value])
  const previous = validationCache.getCacheOld()

  return { current, previous, hasChanged: previous && current !== previous }
}

// Использование
console.log(validateField('ab')) // Показывает ошибки
console.log(validateField('abc')) // Валидный результат
`})}),`
`,n.jsx(e.h3,{id:"асинхронные-данные",children:"Асинхронные данные"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const apiCache = new CacheItem(async () => {
  const response = await fetch('/api/data')
  return response.json()
})

async function getData(userId) {
  return await apiCache.getCacheAsync([userId])
}

// Использование
const data = await getData(1) // API вызов
const cached = await getData(1) // Кешированные данные
`})}),`
`,n.jsx(e.p,{children:"Класс CacheItem предоставляет низкоуровневый контроль над кешированием одного значения с мощными возможностями инвалидации и отслеживания истории изменений."})]})}function j(c={}){const{wrapper:e}={...a(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(s,{...c})}):s(c)}export{j as default};

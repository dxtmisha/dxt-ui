import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Dqnce8mp.js";import{M as l}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/functional/ru/Classes/Api"}),`
`,n.jsx(e.h1,{id:"класс-api",children:"Класс Api"}),`
`,n.jsx(e.p,{children:"Статический класс для обработки HTTP-запросов с расширенными возможностями: кеширование, эмуляция, индикаторы загрузки и автоматическая генерация URL с учётом локали. Предоставляет методы для REST API операций с комплексной обработкой ошибок и ответов."}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"HTTP методы"})," — GET, POST, PUT, DELETE запросы с правильной обработкой"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Кеширование запросов"})," — интеллектуальная система кеширования и эмуляции ответов"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Управление загрузкой"})," — автоматические индикаторы загрузки с интеграцией класса Loading"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Поддержка локали"})," — автоматическая замена плейсхолдеров локали/страны/языка в URL"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Обработка ошибок"})," — комплексная обработка ошибок с отслеживанием статуса"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Управление заголовками"})," — гибкая настройка заголовков и значений по умолчанию"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Обработка тела запроса"})," — автоматическая обработка JSON/FormData/строковых данных"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Режим разработки"})," — эмуляция запросов и возможности отладки"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Хуки подготовки"})," — управление жизненным циклом до/после запроса"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Преобразование ответов"})," — автоматическое извлечение и форматирование данных"]}),`
`]}),`
`,n.jsx(e.h2,{id:"методы-конфигурации",children:"Методы конфигурации"}),`
`,n.jsx(e.h3,{id:"seturl",children:n.jsx(e.code,{children:"setUrl"})}),`
`,n.jsx(e.p,{children:"Устанавливает базовый URL API для всех запросов."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"url: string"})," — базовый путь API"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Api"})," — ссылка на класс для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Api } from '@dxtmisha/functional'

// Установить базовый URL API
Api.setUrl('/api/v2/')

// Все последующие запросы будут использовать этот базовый URL
// request('/users') → '/api/v2/users'
`})}),`
`,n.jsx(e.h3,{id:"setheaders",children:n.jsx(e.code,{children:"setHeaders"})}),`
`,n.jsx(e.p,{children:"Устанавливает заголовки по умолчанию для всех запросов."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"headers: Record<string, string>"})," — объект заголовков по умолчанию"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Api"})," — ссылка на класс для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Установить заголовки по умолчанию
Api.setHeaders({
  'Authorization': 'Bearer token123',
  'X-API-Key': 'your-api-key',
  'Accept-Language': 'ru-RU'
})

// Заголовки будут включены во все запросы
`})}),`
`,n.jsx(e.h3,{id:"setrequestdefault",children:n.jsx(e.code,{children:"setRequestDefault"})}),`
`,n.jsx(e.p,{children:"Устанавливает данные запроса по умолчанию, которые будут объединяться с каждым запросом."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"request: RefOrNormal<Record<string, any>>"})," — данные запроса по умолчанию"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Установить параметры запроса по умолчанию
Api.setRequestDefault({
  version: '1.0',
  clientId: 'web-app'
})

// Эти данные будут объединены с каждым телом запроса
`})}),`
`,n.jsx(e.h3,{id:"setpreparation",children:n.jsx(e.code,{children:"setPreparation"})}),`
`,n.jsx(e.p,{children:"Устанавливает функцию для выполнения перед каждым запросом (например, обновление токена)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: () => Promise<void>"})," — асинхронная функция для выполнения перед запросами"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Api"})," — ссылка на класс для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Установить функцию подготовки
Api.setPreparation(async () => {
  await refreshAuthToken()
  console.log('Токен обновлён перед запросом')
})
`})}),`
`,n.jsx(e.h3,{id:"setend",children:n.jsx(e.code,{children:"setEnd"})}),`
`,n.jsx(e.p,{children:"Устанавливает функцию для выполнения после каждого запроса для анализа ответа."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: (query: Response) => Promise<ApiPreparationEnd>"})," — функция анализа ответа"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Api"})," — ссылка на класс для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Установить функцию анализа ответа
Api.setEnd(async (response) => {
  if (response.status === 401) {
    return { reset: true } // перезапустить запрос
  }
  return {}
})
`})}),`
`,n.jsx(e.h2,{id:"работа-с-эмулятором",children:"Работа с эмулятором"}),`
`,n.jsx(e.p,{children:"Класс Api предоставляет мощную систему эмуляции запросов для разработки и тестирования без реального backend сервера."}),`
`,n.jsx(e.h3,{id:"addresponse",children:n.jsx(e.code,{children:"addResponse"})}),`
`,n.jsx(e.p,{children:"Добавляет эмулированные ответы для перехвата запросов."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"response: ApiResponse | ApiResponse[]"})," — конфигурация эмулированного ответа"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Api } from '@dxtmisha/functional'

// Простая эмуляция GET запроса
Api.addResponse({
  path: '/users',
  method: 'GET',
  response: [
    { id: 1, name: 'Иван', email: 'ivan@example.com' },
    { id: 2, name: 'Мария', email: 'maria@example.com' }
  ]
})

// Эмуляция POST запроса с валидацией
Api.addResponse({
  path: '/users',
  method: 'POST',
  request: { name: '*any', email: '*any' }, // любые name и email
  response: (request) => ({
    id: Math.random(),
    ...request,
    created: new Date().toISOString()
  })
})

// Эмуляция с RegExp путем
Api.addResponse({
  path: /^\\/users\\/\\d+$/,
  method: 'GET',
  response: { id: 1, name: 'Пользователь', status: 'active' }
})
`})}),`
`,n.jsx(e.h3,{id:"конфигурация-эмулированного-ответа-apiresponse",children:"Конфигурация эмулированного ответа (ApiResponse)"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Свойства ApiResponse:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: string | RegExp"})," — путь запроса (строка или регулярное выражение)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"method: ApiMethod"})," — HTTP метод ('GET', 'POST', 'PUT', 'DELETE')"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"request?: ApiFetch['request'] | '*any'"})," — ожидаемые данные запроса"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"response: any | ((request) => any)"})," — статический ответ или функция генерации"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"disable?: RefOrNormal<boolean>"})," — отключение эмуляции (может быть ref)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isForGlobal?: boolean"})," — только для глобального кеша"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"lag?: RefOrNormal<boolean>"})," — имитация медленного соединения (0-2 сек)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Эмуляция с задержкой
Api.addResponse({
  path: '/slow-endpoint',
  method: 'GET',
  response: { data: 'Медленные данные' },
  lag: true // случайная задержка 0-2000мс
})

// Условная эмуляция
const isDevelopment = ref(process.env.NODE_ENV === 'development')
Api.addResponse({
  path: '/admin/users',
  method: 'GET',
  response: { users: [] },
  disable: computed(() => !isDevelopment.value) // отключается в продакшене
})

// Динамическая функция ответа
Api.addResponse({
  path: '/auth/login',
  method: 'POST',
  request: '*any',
  response: (request) => {
    if (request?.username === 'admin' && request?.password === 'password') {
      return {
        success: true,
        token: 'fake-jwt-token',
        user: { id: 1, username: 'admin', role: 'administrator' }
      }
    }
    throw new Error('Неверные учетные данные')
  }
})
`})}),`
`,n.jsx(e.h3,{id:"getresponselist",children:n.jsx(e.code,{children:"getResponseList"})}),`
`,n.jsx(e.p,{children:"Возвращает список всех зарегистрированных эмулированных ответов."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"(ApiResponse & Record<string, any>)[]"})," — массив эмулированных ответов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Получение списка всех эмуляций
const emulators = Api.getResponseList()
console.log('Активные эмуляторы:', emulators.map(r => \`\${r.method} \${r.path}\`))

// Отладка эмуляций
function debugEmulators() {
  const responses = Api.getResponseList()
  responses.forEach(resp => {
    console.log(\`Эмулятор: \${resp.method} \${resp.path}\`)
    console.log('Ожидаемый запрос:', resp.request)
    console.log('Ответ:', typeof resp.response === 'function' ? '[Function]' : resp.response)
  })
}
`})}),`
`,n.jsx(e.h3,{id:"режимы-работы-эмулятора",children:"Режимы работы эмулятора"}),`
`,n.jsx(e.h4,{id:"global-режим-автоматический-для-get",children:"Global режим (автоматический для GET)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// GET запросы автоматически используют глобальный кеш
const userData = await Api.get({ path: '/user/profile' })
// Если есть эмуляция для этого пути, она будет использована
`})}),`
`,n.jsx(e.h4,{id:"devmode-принудительная-эмуляция",children:"DevMode (принудительная эмуляция)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Принудительное использование эмулятора
const testData = await Api.get({
  path: '/test-endpoint',
  devMode: true // всегда использует эмулятор если доступен
})
`})}),`
`,n.jsx(e.h3,{id:"сложные-сценарии-эмуляции",children:"Сложные сценарии эмуляции"}),`
`,n.jsx(e.h4,{id:"условные-ответы-на-основе-параметров",children:"Условные ответы на основе параметров"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`Api.addResponse({
  path: '/api/search',
  method: 'GET',
  request: '*any',
  response: (request) => {
    const query = request?.q || ''

    if (query.includes('error')) {
      throw new Error('Ошибка поиска')
    }

    if (query.length < 2) {
      return { results: [], message: 'Запрос слишком короткий' }
    }

    // Имитация поиска
    const mockResults = [
      { id: 1, title: 'Результат 1', relevance: 0.9 },
      { id: 2, title: 'Результат 2', relevance: 0.7 }
    ].filter(item => item.title.toLowerCase().includes(query.toLowerCase()))

    return {
      results: mockResults,
      total: mockResults.length,
      query: query
    }
  }
})
`})}),`
`,n.jsx(e.h4,{id:"последовательная-эмуляция-для-тестирования-состояний",children:"Последовательная эмуляция (для тестирования состояний)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`let loginAttempts = 0

Api.addResponse({
  path: '/auth/login',
  method: 'POST',
  request: '*any',
  response: (request) => {
    loginAttempts++

    if (loginAttempts === 1) {
      throw new Error('Временная ошибка сервера')
    }

    if (loginAttempts === 2) {
      return { success: false, message: 'Неверный пароль' }
    }

    return {
      success: true,
      token: 'success-token',
      attempts: loginAttempts
    }
  }
})
`})}),`
`,n.jsx(e.h4,{id:"эмуляция-файловых-операций",children:"Эмуляция файловых операций"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Эмуляция загрузки файла
Api.addResponse({
  path: '/upload',
  method: 'POST',
  request: '*any',
  response: (request) => {
    if (request instanceof FormData) {
      const file = request.get('file')
      return {
        success: true,
        filename: file?.name || 'unknown.txt',
        size: file?.size || 0,
        uploadId: Math.random().toString(36)
      }
    }
    throw new Error('Файл не найден в запросе')
  },
  lag: true // имитация медленной загрузки
})
`})}),`
`,n.jsx(e.h3,{id:"управление-эмулятором-в-runtime",children:"Управление эмулятором в runtime"}),`
`,n.jsx(e.h4,{id:"динамическое-включениевыключение",children:"Динамическое включение/выключение"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { ref } from 'vue'

const isEmulationEnabled = ref(true)

Api.addResponse({
  path: '/dynamic-endpoint',
  method: 'GET',
  response: { message: 'Эмулированные данные' },
  disable: computed(() => !isEmulationEnabled.value)
})

// Переключение эмуляции
function toggleEmulation() {
  isEmulationEnabled.value = !isEmulationEnabled.value
}
`})}),`
`,n.jsx(e.h4,{id:"отладка-эмулятора",children:"Отладка эмулятора"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Включение режима отладки для всех запросов
async function makeDebugRequest() {
  const result = await Api.get({
    path: '/debug-test',
    devMode: true // покажет предупреждения в консоли
  })

  console.log('Response data:', result)
  console.log('Last response:', Api.getLastResponse())
  console.log('Status:', Api.getStatus())
}
`})}),`
`,n.jsx(e.h2,{id:"методы-http-запросов",children:"Методы HTTP запросов"}),`
`,n.jsx(e.h3,{id:"request",children:n.jsx(e.code,{children:"request"})}),`
`,n.jsx(e.p,{children:"Универсальный метод запроса, принимающий строку URL или объект конфигурации."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"pathRequest: string | ApiFetch"})," — строка URL или конфигурация запроса"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Promise<T>"})," — данные ответа"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Простой запрос строкой
const users = await Api.request('/users')

// Полный объект конфигурации
const user = await Api.request({
  path: '/users/123',
  method: 'GET',
  headers: { 'Cache-Control': 'no-cache' }
})
`})}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsx(e.p,{children:"Отправляет GET запрос."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"request: ApiFetch"})," — конфигурация запроса"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Promise<T>"})," — данные ответа"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Простой GET запрос
const users = await Api.get({ path: '/users' })

// GET с параметрами запроса
const filteredUsers = await Api.get({
  path: '/users',
  request: { status: 'active', limit: 10 }
})
// Результат: GET /users?status=active&limit=10
`})}),`
`,n.jsx(e.h3,{id:"post",children:n.jsx(e.code,{children:"post"})}),`
`,n.jsx(e.p,{children:"Отправляет POST запрос."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"request: ApiFetch"})," — конфигурация запроса"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Promise<T>"})," — данные ответа"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Создать нового пользователя
const newUser = await Api.post({
  path: '/users',
  request: {
    name: 'Иван Иванов',
    email: 'ivan@example.com'
  }
})

// Загрузка файла с FormData
const formData = new FormData()
formData.append('file', fileInput.files[0])

const uploadResult = await Api.post({
  path: '/upload',
  request: formData,
  type: '' // Убрать Content-Type для FormData
})
`})}),`
`,n.jsx(e.h3,{id:"put",children:n.jsx(e.code,{children:"put"})}),`
`,n.jsx(e.p,{children:"Отправляет PUT запрос."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"request: ApiFetch"})," — конфигурация запроса"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Promise<T>"})," — данные ответа"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Обновить пользователя
const updatedUser = await Api.put({
  path: '/users/123',
  request: {
    name: 'Иван Петров',
    email: 'ivan.petrov@example.com'
  }
})
`})}),`
`,n.jsx(e.h3,{id:"delete",children:n.jsx(e.code,{children:"delete"})}),`
`,n.jsx(e.p,{children:"Отправляет DELETE запрос."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"request: ApiFetch"})," — конфигурация запроса"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Promise<T>"})," — данные ответа"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Удалить пользователя
await Api.delete({
  path: '/users/123'
})

// Удаление с подтверждением
await Api.delete({
  path: '/users/123',
  request: { force: true }
})
`})}),`
`,n.jsx(e.h2,{id:"кеширование-и-эмуляция-ответов",children:"Кеширование и эмуляция ответов"}),`
`,n.jsx(e.h3,{id:"addresponse-1",children:n.jsx(e.code,{children:"addResponse"})}),`
`,n.jsx(e.p,{children:"Добавляет кешированные ответы для разработки/тестирования или офлайн режима."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"response: ApiResponse | ApiResponse[]"})," — конфигурация ответа(ов)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Api"})," — ссылка на класс для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Добавить один кешированный ответ
Api.addResponse({
  path: '/users',
  method: 'GET',
  response: [
    { id: 1, name: 'Иван Иванов' },
    { id: 2, name: 'Мария Петрова' }
  ]
})

// Добавить несколько ответов
Api.addResponse([
  {
    path: '/users',
    method: 'GET',
    response: () => generateUserList(), // Динамический ответ
    lag: true // Имитация задержки сети
  },
  {
    path: /^\\/users\\/\\d+$/, // RegExp для сопоставления пути
    method: 'GET',
    response: (request) => getUserById(request.id)
  }
])
`})}),`
`,n.jsx(e.h2,{id:"информационные-методы",children:"Информационные методы"}),`
`,n.jsx(e.h3,{id:"islocalhost",children:n.jsx(e.code,{children:"isLocalhost"})}),`
`,n.jsx(e.p,{children:"Проверяет, выполняется ли код в среде localhost."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"boolean"})," — true если выполняется на localhost"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`if (Api.isLocalhost()) {
  console.log('Обнаружена среда разработки')
  Api.addResponse(mockData) // Использовать мок-данные в разработке
}
`})}),`
`,n.jsx(e.h3,{id:"getheaders",children:n.jsx(e.code,{children:"getHeaders"})}),`
`,n.jsx(e.p,{children:"Получает объединённые заголовки для запроса, соединяя заголовки по умолчанию с переданными."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: Record<string, string> | null"})," — дополнительные заголовки (опционально)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type?: string"})," — значение заголовка Content-Type (по умолчанию: 'application/json;charset=UTF-8')"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Record<string, string> | undefined"})," — объект объединённых заголовков или undefined если value равно null"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Получить только заголовки по умолчанию
const headers = Api.getHeaders()
// Возвращает: заголовки по умолчанию + Content-Type

// Объединить с пользовательскими заголовками
const customHeaders = Api.getHeaders({
  'Authorization': 'Bearer token123',
  'X-Custom-Header': 'value'
})
// Возвращает: заголовки по умолчанию + пользовательские + Content-Type

// Полностью исключить заголовки
const noHeaders = Api.getHeaders(null)
// Возвращает: undefined

// Пользовательский Content-Type
const xmlHeaders = Api.getHeaders({}, 'application/xml')
// Возвращает: заголовки с Content-Type: application/xml
`})}),`
`,n.jsx(e.h3,{id:"getlastresponse",children:n.jsx(e.code,{children:"getLastResponse"})}),`
`,n.jsx(e.p,{children:"Возвращает сырые данные последнего запроса."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"T"})," — данные последнего ответа"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const users = await Api.get({ path: '/users' })
const rawResponse = Api.getLastResponse()
console.log('Сырой ответ:', rawResponse)
`})}),`
`,n.jsx(e.h3,{id:"getlastmessage",children:n.jsx(e.code,{children:"getLastMessage"})}),`
`,n.jsx(e.p,{children:"Возвращает сообщение из последнего ответа."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — сообщение последнего ответа"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`try {
  await Api.post({ path: '/users', request: userData })
} catch (error) {
  const message = Api.getLastMessage()
  showNotification(message || 'Произошла неизвестная ошибка')
}
`})}),`
`,n.jsx(e.h3,{id:"getstatus",children:n.jsx(e.code,{children:"getStatus"})}),`
`,n.jsx(e.p,{children:"Возвращает HTTP статус код последнего запроса."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"number | undefined"})," — HTTP статус код"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`await Api.get({ path: '/users' })
const status = Api.getStatus()

if (status === 200) {
  console.log('Запрос успешен')
} else if (status === 404) {
  console.log('Ресурс не найден')
}
`})}),`
`,n.jsx(e.h3,{id:"getstatustext",children:n.jsx(e.code,{children:"getStatusText"})}),`
`,n.jsx(e.p,{children:"Возвращает HTTP статус текст последнего запроса."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string | undefined"})," — HTTP статус текст"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`await Api.get({ path: '/users' })
console.log('Статус:', Api.getStatus(), Api.getStatusText())
// Вывод: "Статус: 200 OK"
`})}),`
`,n.jsx(e.h3,{id:"geterror",children:n.jsx(e.code,{children:"getError"})}),`
`,n.jsx(e.p,{children:"Возвращает ошибку последнего неудавшегося запроса."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string | undefined"})," — сообщение об ошибке"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`try {
  await Api.get({ path: '/invalid-endpoint' })
} catch (e) {
  const error = Api.getError()
  console.error('Запрос не удался:', error)
}
`})}),`
`,n.jsx(e.h2,{id:"утилитарные-методы",children:"Утилитарные методы"}),`
`,n.jsx(e.h3,{id:"geturl",children:n.jsx(e.code,{children:"getUrl"})}),`
`,n.jsx(e.p,{children:"Получает полный путь к скрипту запроса с заменой плейсхолдеров локали."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: string"})," — путь к скрипту"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"api?: boolean"})," — добавлять ли базовый путь API (по умолчанию: true)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — полный URL с замененными плейсхолдерами локали"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// С базовым путём API
const url = Api.getUrl('/users')
// Возвращает: '/api/users' (или '/api/ru-RU/users' если используются плейсхолдеры)

// Без базового пути API
const fullUrl = Api.getUrl('https://external-api.com/data', false)
// Возвращает: 'https://external-api.com/data'

// С плейсхолдерами локали
Api.setUrl('/api/{locale}/')
const localizedUrl = Api.getUrl('/users')
// Возвращает: '/api/ru-RU/users' (на основе текущей локали)
`})}),`
`,n.jsx(e.h3,{id:"getbody",children:n.jsx(e.code,{children:"getBody"})}),`
`,n.jsx(e.p,{children:"Получает обработанные данные тела запроса на основе метода и типа данных."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"request?: ApiFetch['request']"})," — данные запроса (по умолчанию: ",")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"method?: ApiMethod"})," — HTTP метод (по умолчанию: 'GET')"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string | FormData | undefined"})," — обработанные данные тела"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// JSON тело для POST запроса
const jsonBody = Api.getBody({ name: 'Иван', email: 'ivan@example.com' }, 'POST')
// Возвращает: '{"name":"Иван","email":"ivan@example.com"}'

// FormData тело
const formData = new FormData()
formData.append('file', fileInput.files[0])
const formBody = Api.getBody(formData, 'POST')
// Возвращает: объект FormData

// Нет тела для GET запроса
const getBody = Api.getBody({ limit: 10 }, 'GET')
// Возвращает: undefined (GET параметры идут в URL)
`})}),`
`,n.jsx(e.h3,{id:"getbodyforget",children:n.jsx(e.code,{children:"getBodyForGet"})}),`
`,n.jsx(e.p,{children:"Получает параметры строки запроса для GET запросов."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"request?: ApiFetch['request']"})," — данные запроса"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path?: string"})," — текущий путь запроса (по умолчанию: '')"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"method?: ApiMethod"})," — HTTP метод (по умолчанию: 'GET')"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — строка запроса с префиксом ? или &"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Первые параметры
const queryString = Api.getBodyForGet({ limit: 10, status: 'active' }, '/users')
// Возвращает: '?limit=10&status=active'

// Дополнительные параметры (в пути уже есть ?)
const additionalQuery = Api.getBodyForGet({ sort: 'name' }, '/users?limit=10')
// Возвращает: '&sort=name'

// Не-GET метод
const noQuery = Api.getBodyForGet({ data: 'test' }, '/users', 'POST')
// Возвращает: '' (пустая строка)
`})}),`
`,n.jsx(e.h3,{id:"getresponselist-1",children:n.jsx(e.code,{children:"getResponseList"})}),`
`,n.jsx(e.p,{children:"Возвращает список конфигураций кешированных ответов (исключая глобальные)."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"(ApiResponse & Record<string, any>)[]"})," — массив конфигураций ответов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Добавить кешированные ответы
Api.addResponse([
  { path: '/users', method: 'GET', response: userData },
  { path: '/posts', method: 'GET', response: postsData, isForGlobal: true }
])

// Получить не-глобальные ответы
const responses = Api.getResponseList()
// Возвращает: [{ path: '/users', method: 'GET', response: userData }]
// Исключает глобальный (isForGlobal: true)

// Полезно для отладки и разработки
console.log('Активные мок-ответы:', responses.map(r => r.path))
`})}),`
`,n.jsx(e.h3,{id:"addrequestdefault",children:n.jsx(e.code,{children:"addRequestDefault"})}),`
`,n.jsx(e.p,{children:"Добавляет данные запроса по умолчанию к предоставленному запросу, объединяя с существующими данными."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"request: ApiFetch['request']"})," — данные запроса для объединения с умолчаниями"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ApiFetch['request']"})," — объединённые данные запроса"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Установить данные запроса по умолчанию
Api.setRequestDefault({
  version: '1.0',
  clientId: 'web-app'
})

// Объединить с конкретным запросом
const mergedRequest = Api.addRequestDefault({
  userId: 123,
  action: 'update'
})
// Возвращает: { version: '1.0', clientId: 'web-app', userId: 123, action: 'update' }

// Работает и с FormData
const formData = new FormData()
formData.append('file', file)
const mergedFormData = Api.addRequestDefault(formData)
// В FormData будут добавлены поля по умолчанию, если их нет
`})}),`
`,n.jsx(e.h2,{id:"расширенная-конфигурация",children:"Расширенная конфигурация"}),`
`,n.jsxs(e.h3,{id:"конфигурация-запроса-apifetch",children:["Конфигурация запроса (",n.jsx(e.code,{children:"ApiFetch"}),")"]}),`
`,n.jsx(e.p,{children:"Полный интерфейс для настройки API запросов со всеми доступными опциями:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface ApiFetch {
  /** Использовать базовый URL API (по умолчанию: true) */
  api?: boolean

  /** Путь endpoint относительно базового URL */
  path?: string

  /** Полный URL (переопределяет комбинацию api + path) */
  pathFull?: string

  /** HTTP метод: GET, POST, PUT, DELETE (по умолчанию: 'GET') */
  method?: ApiMethod

  /** Тело запроса/параметры */
  request?: FormData | Record<string, any> | string

  /** Включить заголовки аутентификации */
  auth?: boolean

  /** Пользовательские заголовки (null = без заголовков) */
  headers?: Record<string, string> | null

  /** Значение заголовка Content-Type (по умолчанию: 'application/json;charset=UTF-8') */
  type?: string

  /** Извлечь поле 'data' из ответа (по умолчанию: true) */
  toData?: boolean

  /** Использовать глобальный кеш ответов (по умолчанию: true для GET, false для других) */
  global?: boolean

  /** Включить логирование разработки и отладку (по умолчанию: false) */
  devMode?: boolean

  /** Подавить логирование ошибок в консоль (по умолчанию: false) */
  hideError?: boolean

  /** Пользовательский процессор ответа */
  queryReturn?: (query: Response) => Promise<any>

  /** Запускать глобальные хуки подготовки (по умолчанию: true) */
  globalPreparation?: boolean

  /** Запускать глобальные хуки завершения (по умолчанию: true) */
  globalEnd?: boolean

  /** Дополнительные опции fetch() */
  init?: RequestInit
}
`})}),`
`,n.jsx(e.h4,{id:"детали-свойств",children:"Детали свойств:"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"api?: boolean"})})," (по умолчанию: ",n.jsx(e.code,{children:"true"}),")"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["При ",n.jsx(e.code,{children:"true"})," добавляет базовый URL, установленный через ",n.jsx(e.code,{children:"setUrl()"}),", к пути"]}),`
`,n.jsxs(e.li,{children:["При ",n.jsx(e.code,{children:"false"})," использует путь как есть без модификации базового URL"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// С api: true (по умолчанию)
{ path: '/users', api: true }     // → '/api/users'

// С api: false
{ path: 'https://external.com/api', api: false }  // → 'https://external.com/api'
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:n.jsx(e.code,{children:"path?: string"})})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Путь endpoint относительно базового URL"}),`
`,n.jsxs(e.li,{children:["Поддерживает плейсхолдеры локали: ",n.jsx(e.code,{children:"{locale}"}),", ",n.jsx(e.code,{children:"{country}"}),", ",n.jsx(e.code,{children:"{language}"})]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`{ path: '/users/{locale}/profile' }  // → '/users/ru-RU/profile'
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:n.jsx(e.code,{children:"pathFull?: string"})})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Полный URL, который переопределяет комбинацию базового URL + путь"}),`
`,n.jsxs(e.li,{children:["При указании игнорирует свойства ",n.jsx(e.code,{children:"api"})," и ",n.jsx(e.code,{children:"path"})]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`{ pathFull: 'https://api.example.com/v2/users' }  // Использует этот точный URL
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"method?: ApiMethod"})})," (по умолчанию: ",n.jsx(e.code,{children:"'GET'"}),")"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"HTTP метод для запроса"}),`
`,n.jsxs(e.li,{children:["Доступные значения: ",n.jsx(e.code,{children:"'GET'"}),", ",n.jsx(e.code,{children:"'POST'"}),", ",n.jsx(e.code,{children:"'PUT'"}),", ",n.jsx(e.code,{children:"'DELETE'"})]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:n.jsx(e.code,{children:"request?: FormData | Record<string, any> | string"})})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Данные тела запроса или параметры запроса"}),`
`,n.jsx(e.li,{children:"Для GET запросов: преобразуется в параметры строки запроса"}),`
`,n.jsx(e.li,{children:"Для других методов: отправляется как тело запроса"}),`
`,n.jsx(e.li,{children:"Поддерживает объекты (JSON), FormData и сырые строки"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Объект (JSON)
{ request: { name: 'Иван', email: 'ivan@example.com' } }

// FormData (загрузка файлов)
const formData = new FormData()
formData.append('file', file)
{ request: formData }

// Сырая строка
{ request: '{"custom": "json"}' }
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:n.jsx(e.code,{children:"auth?: boolean"})})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Контролирует, должны ли включаться заголовки аутентификации"}),`
`,n.jsx(e.li,{children:"Реализация зависит от вашей настройки аутентификации"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:n.jsx(e.code,{children:"headers?: Record<string, string> | null"})})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Пользовательские заголовки для включения в запрос"}),`
`,n.jsxs(e.li,{children:["Объединяются с заголовками по умолчанию, установленными через ",n.jsx(e.code,{children:"setHeaders()"})]}),`
`,n.jsxs(e.li,{children:["Установите в ",n.jsx(e.code,{children:"null"})," для исключения всех заголовков (включая по умолчанию)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Добавить пользовательские заголовки
{ headers: { 'X-Custom': 'value', 'Authorization': 'Bearer token' } }

// Исключить все заголовки
{ headers: null }
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"type?: string"})})," (по умолчанию: ",n.jsx(e.code,{children:"'application/json;charset=UTF-8'"}),")"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Устанавливает заголовок Content-Type"}),`
`,n.jsxs(e.li,{children:["Используйте пустую строку ",n.jsx(e.code,{children:"''"})," чтобы позволить браузеру установить автоматически (полезно для FormData)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// JSON контент
{ type: 'application/json' }

// Form data (позволить браузеру установить)
{ type: '' }

// XML контент
{ type: 'application/xml' }
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"toData?: boolean"})})," (по умолчанию: ",n.jsx(e.code,{children:"true"}),")"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["При ",n.jsx(e.code,{children:"true"})," автоматически извлекает поле ",n.jsx(e.code,{children:"data"})," из ответа, если оно существует"]}),`
`,n.jsxs(e.li,{children:["При ",n.jsx(e.code,{children:"false"})," возвращает сырой объект ответа"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Ответ: { data: { id: 1, name: 'Иван' }, success: true }

// С toData: true (по умолчанию)
const result = await Api.get({ path: '/user' })
// result = { id: 1, name: 'Иван' }

// С toData: false
const result = await Api.get({ path: '/user', toData: false })
// result = { data: { id: 1, name: 'Иван' }, success: true }
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"global?: boolean"})})," (по умолчанию: ",n.jsx(e.code,{children:"true"})," для GET, ",n.jsx(e.code,{children:"false"})," для других)"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Включает глобальное кеширование и эмуляцию ответов"}),`
`,n.jsxs(e.li,{children:["При ",n.jsx(e.code,{children:"true"})," проверяет кешированные ответы, добавленные через ",n.jsx(e.code,{children:"addResponse()"})]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"devMode?: boolean"})})," (по умолчанию: ",n.jsx(e.code,{children:"false"}),")"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Включает функции логирования и отладки разработки"}),`
`,n.jsx(e.li,{children:"Логирует попадания в кеш, данные запроса и информацию об ответе"}),`
`,n.jsx(e.li,{children:"Разрешает повторное использование кешированных ответов (обычно используются один раз)"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Включить логирование режима разработки
const users = await Api.get({ path: '/users', devMode: true })
// Вывод в консоль: "Response type: /users", "Response data: /users {...}"
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"hideError?: boolean"})})," (по умолчанию: ",n.jsx(e.code,{children:"false"}),")"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["При ",n.jsx(e.code,{children:"true"})," подавляет логирование ошибок в консоль"]}),`
`,n.jsx(e.li,{children:"Ошибки все еще выбрасываются, просто не логируются"}),`
`,n.jsx(e.li,{children:"Полезно для ожидаемых ошибок или пользовательской обработки ошибок"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:n.jsx(e.code,{children:"queryReturn?: (query: Response) => Promise<any>"})})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Пользовательская функция для обработки сырого объекта Response"}),`
`,n.jsx(e.li,{children:"Переопределяет стандартный парсинг JSON/text"}),`
`,n.jsx(e.li,{children:"Полезно для пользовательской обработки ответов или бинарных данных"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Пользовательская обработка ответа
const result = await Api.get({
  path: '/download',
  queryReturn: async (response) => {
    return await response.blob()  // Вернуть бинарные данные
  }
})
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"globalPreparation?: boolean"})})," (по умолчанию: ",n.jsx(e.code,{children:"true"}),")"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Контролирует, запускаются ли глобальные хуки подготовки перед этим запросом"}),`
`,n.jsxs(e.li,{children:["Установите в ",n.jsx(e.code,{children:"false"})," чтобы пропустить подготовку для конкретных запросов"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"globalEnd?: boolean"})})," (по умолчанию: ",n.jsx(e.code,{children:"true"}),")"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Контролирует, запускаются ли глобальные хуки завершения после этого запроса"}),`
`,n.jsxs(e.li,{children:["Установите в ",n.jsx(e.code,{children:"false"})," чтобы пропустить пост-обработку для конкретных запросов"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:n.jsx(e.code,{children:"init?: RequestInit"})})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Дополнительные опции, передаваемые напрямую в API ",n.jsx(e.code,{children:"fetch()"})]}),`
`,n.jsx(e.li,{children:"Позволяет точно контролировать поведение запроса"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Пользовательские опции fetch
{
  init: {
    cache: 'no-cache',
    credentials: 'include',
    redirect: 'follow',
    signal: abortController.signal
  }
}
`})}),`
`,n.jsx(e.h4,{id:"примеры-использования",children:"Примеры использования:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Минимальный запрос
const users = await Api.get({ path: '/users' })

// Полная конфигурация
const result = await Api.post({
  api: true,
  path: '/users',
  method: 'POST',
  request: { name: 'Иван', email: 'ivan@example.com' },
  headers: { 'X-Custom-Header': 'value' },
  type: 'application/json',
  toData: true,
  devMode: false,
  hideError: false,
  globalPreparation: true,
  globalEnd: true,
  init: { cache: 'no-cache' }
})

// Загрузка файла с FormData
const formData = new FormData()
formData.append('file', fileInput.files[0])

const uploadResult = await Api.post({
  path: '/upload',
  request: formData,
  type: '',  // Позволить браузеру установить Content-Type
  headers: { 'X-Upload-Session': 'abc123' }
})

// Вызов внешнего API
const externalData = await Api.get({
  pathFull: 'https://jsonplaceholder.typicode.com/posts/1',
  api: false,
  toData: false  // Не пытаться извлечь поле 'data'
})
`})})]})}function p(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{p as default};

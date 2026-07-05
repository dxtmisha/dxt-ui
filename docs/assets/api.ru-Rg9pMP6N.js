import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/# Api`}),`
`,(0,c.jsx)(n.h1,{id:`api`,children:`Api`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`Api`}),` — это основной инструмент для работы с HTTP-запросами. Он предоставляет простой интерфейс для стандартных методов и управляет глобальными настройками, такими как базовый URL, заголовки по умолчанию и хуки жизненного цикла.`]}),`
`,(0,c.jsx)(n.h3,{id:`основные-возможности`,children:`Основные возможности`}),`
`,(0,c.jsx)(n.p,{children:`Класс предоставляет полный набор инструментов для управления сетевым взаимодействием:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`CRUD методы`}),` — выполнение `,(0,c.jsx)(n.code,{children:`GET`}),`, `,(0,c.jsx)(n.code,{children:`POST`}),`, `,(0,c.jsx)(n.code,{children:`PUT`}),`, `,(0,c.jsx)(n.code,{children:`PATCH`}),`, `,(0,c.jsx)(n.code,{children:`DELETE`}),` запросов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Глобальная конфигурация`}),` — настройка базовых URL, источников (origin), заголовков и параметров.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Хуки жизненного цикла`}),` — обработка событий до и после запроса (например, для Refresh Token).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Гидратация (SSR)`}),` — передача данных от сервера к клиенту для предотвращения дублирования запросов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование`}),` — сохранение ответов в памяти или внешнем хранилище (LocalStorage).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Эмуляция ответов`}),` — создание мок-данных для разработки и тестирования.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическая локализация`}),` — замена меток `,(0,c.jsx)(n.code,{children:`{locale}`}),`, `,(0,c.jsx)(n.code,{children:`{country}`}),` и `,(0,c.jsx)(n.code,{children:`{language}`}),` в путях запросов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление загрузкой и ошибками`}),` — интеграция с глобальными компонентами индикации и центрами ошибок.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`базовое-использование`,children:`Базовое использование`}),`
`,(0,c.jsxs)(n.p,{children:[`Самый простой способ выполнить запрос — использовать статические методы `,(0,c.jsx)(n.code,{children:`get`}),`, `,(0,c.jsx)(n.code,{children:`post`}),`, `,(0,c.jsx)(n.code,{children:`put`}),`, или `,(0,c.jsx)(n.code,{children:`delete`}),`. Все методы поддерживают типизацию ответа через Generic.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Api } from '@dxtmisha/functional-basic'

// Простой GET запрос с типизацией
const data = await Api.get<User[]>({ path: 'users' })

// POST запрос с отправкой данных в теле
const newUser = await Api.post<User>({
  path: 'users',
  request: { name: 'Иван Иванов', job: 'Разработчик' }
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`глобальная-конфигурация`,children:`Глобальная конфигурация`}),`
`,(0,c.jsx)(n.p,{children:`Вы можете настроить поведение API глобально, например, при инициализации приложения. Это избавит от необходимости указывать полные пути и общие заголовки в каждом вызове.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Установка базового URL для всех относительных путей
Api.setUrl('/api/')

// Установка источника (протокола и домена) для базового URL
// Если urlRoot начинается с '/', к нему будет добавлен origin
Api.setOrigin('https://api.example.com')

// Добавление общих заголовков (например, токен авторизации)
Api.setHeaders({
  'Authorization': 'Bearer YOUR_TOKEN'
})

// Установка общих параметров, которые будут добавлены к каждому запросу
Api.setRequestDefault({
  app_version: '1.0.0'
})

// Установка функции-обертки для запросов
Api.setWrapper(async (callback, apiFetch) => {
  // Выполнить кастомную логику вокруг запроса
  return await callback()
})

// Проверка, работает ли сервер на localhost
if (Api.isLocalhost()) {
  console.log('Работаем локально')
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`метод-setconfig`,children:`Метод setConfig`}),`
`,(0,c.jsx)(n.p,{children:`Позволяет установить все основные настройки одним объектом.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`Api.setConfig({
  urlRoot: '/api/',
  origin: 'https://api.example.com',
  headers: { 'Authorization': 'Bearer ...' },
  timeout: 5000,
  devMode: true,
  wrapper: async (callback) => await callback()
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`работа-с-url`,children:`Работа с URL`}),`
`,(0,c.jsxs)(n.p,{children:[`При формировании итогового URL класс автоматически заменяет специальные метки на текущие значения из настроек локализации (`,(0,c.jsx)(n.code,{children:`Geo`}),`):`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`{locale}`}),` — текущая локаль (например, `,(0,c.jsx)(n.code,{children:`ru-RU`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`{country}`}),` — текущая страна (например, `,(0,c.jsx)(n.code,{children:`ru`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`{language}`}),` — текущий язык (например, `,(0,c.jsx)(n.code,{children:`ru`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Если текущая локаль 'ru-RU', итоговый путь будет '/api/ru-RU/users'
const data = await Api.get({ path: '{locale}/users' })
`})}),`
`,(0,c.jsx)(n.h2,{id:`статус-и-мета-информация`,children:`Статус и мета-информация`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`Api`}),` автоматически извлекает метаданные из ответа сервера (например, `,(0,c.jsx)(n.code,{children:`success`}),`, `,(0,c.jsx)(n.code,{children:`status`}),`, `,(0,c.jsx)(n.code,{children:`message`}),`, `,(0,c.jsx)(n.code,{children:`code`}),`) и объединяет их с вашим объектом данных. Это позволяет получать и полезную нагрузку, и результат выполнения в одном объекте.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Вы можете получить полный статус последнего запроса через метод `,(0,c.jsx)(n.code,{children:`getStatus()`}),`, который возвращает экземпляр `,(0,c.jsx)(n.code,{children:`ApiStatus`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const data = await Api.get({ path: 'users' })
const status = Api.getStatus()

console.log(status.getStatus())     // 200 (HTTP статус)
console.log(status.getStatusType()) // 'success' | 'error' | 'warning' | 'info'
console.log(status.getMessage())    // Сообщение от сервера или текст статуса
console.log(status.getResponse())   // Исходное тело ответа после парсинга
`})}),`
`,(0,c.jsx)(n.h2,{id:`идентификация-ошибок`,children:`Идентификация ошибок`}),`
`,(0,c.jsxs)(n.p,{children:[`Библиотека предоставляет продвинутую систему управления ошибками через `,(0,c.jsx)(n.code,{children:`ApiError`}),`. Вы можете заранее зарегистрировать известные паттерны ошибок API, и система автоматически идентифицирует их на основе статуса, кодов или кастомных функций валидации.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ApiError, ApiMethodItem } from '@dxtmisha/functional-basic'

// Регистрация конкретного паттерна ошибки
ApiError.add({
  url: 'users/login',
  method: ApiMethodItem.post,
  code: 'INVALID_CREDENTIALS',
  message: 'Пожалуйста, проверьте логин и пароль.'
})

// При выполнении запроса
const status = Api.getStatus()
const errorItem = status.get()?.errorObject // Экземпляр ApiErrorItem

if (errorItem && errorItem.getCode() === 'INVALID_CREDENTIALS') {
  // Обработка конкретного случая ошибки
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`хуки-жизненного-цикла`,children:`Хуки жизненного цикла`}),`
`,(0,c.jsx)(n.p,{children:`Библиотека позволяет внедрить глобальную логику, которая будет срабатывать для каждого запроса. Это удобно для динамического добавления токенов, логирования или централизованной обработки ошибок сервера.`}),`
`,(0,c.jsx)(n.h3,{id:`хук-подготовки-setpreparation`,children:`Хук подготовки (setPreparation)`}),`
`,(0,c.jsx)(n.p,{children:`Выполняется непосредственно перед отправкой запроса на сервер.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Параметры`}),`: получает объект `,(0,c.jsx)(n.code,{children:`apiFetch`}),`, содержащий все настройки текущего запроса (путь, метод, данные и т.д.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Применение`}),`: проверка прав доступа, добавление динамических параметров в `,(0,c.jsx)(n.code,{children:`apiFetch.request`}),` или простое логирование начала операции.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`Api.setPreparation(async (apiFetch) => {
  // Можно изменить apiFetch перед отправкой
  console.log(\`Запуск запроса: \${apiFetch.path}\`)
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`хук-завершения-setend`,children:`Хук завершения (setEnd)`}),`
`,(0,c.jsx)(n.p,{children:`Выполняется после того, как сервер вернул ответ, но до того, как данные попадут в ваш код.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Параметры`}),`: получает нативный объект `,(0,c.jsx)(n.code,{children:`Response`}),` и объект настроек `,(0,c.jsx)(n.code,{children:`apiFetch`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Возвращает`}),`: Promise с объектом `,(0,c.jsx)(n.code,{children:`{ reset?: boolean, data?: any }`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Флаг reset`}),`: если вернуть `,(0,c.jsx)(n.code,{children:`true`}),`, библиотека прервет текущую цепочку и выполнит запрос заново. Это полезно для автоматического обновления истекшего токена (Refresh Token).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поле data`}),`: позволяет подменить или дополнить данные, которые вернет метод `,(0,c.jsx)(n.code,{children:`Api.request`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`Api.setEnd(async (response, apiFetch) => {
  // Например, обработка ошибки 401 (Unauthorized)
  if (response.status === 401) {
    const isRefreshed = await myAuthService.refreshToken()
    
    if (isRefreshed) {
      return { reset: true } // Повторить запрос с новым токеном
    }
  }
  
  return {} // Продолжить стандартную обработку
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`обертка-запроса-request-wrapper`,children:`Обертка запроса (Request Wrapper)`}),`
`,(0,c.jsxs)(n.p,{children:[`Обертка запросов (`,(0,c.jsx)(n.code,{children:`wrapper`}),`) позволяет перехватить и обернуть выполнение физического сетевого запроса в кастомную функцию. Это полезно для интеграции с внешними инструментами мониторинга производительности (APM), такими как Sentry или OpenTelemetry, для трейсинга и измерения времени выполнения запросов.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Обертку можно установить как глобально для всего инстанса (через `,(0,c.jsx)(n.code,{children:`Api.setWrapper`}),` или в методе `,(0,c.jsx)(n.code,{children:`Api.setConfig`}),`), так и локально для конкретного запроса в объекте `,(0,c.jsx)(n.code,{children:`ApiFetch`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`пример-использования-с-sentry`,children:`Пример использования с Sentry:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import * as Sentry from '@sentry/vue'

// Глобальная настройка для всех запросов
Api.setWrapper(async (callback, apiFetch) => {
  const name = \`\${apiFetch.method || 'GET'} \${apiFetch.path || ''}\`
  return Sentry.startSpan({ name, op: 'http.client' }, callback)
})

// Настройка для конкретного запроса (переопределяет глобальную обертку)
const data = await Api.get({
  path: 'critical-action',
  wrapper: async (callback) => {
    return Sentry.startSpan({ name: 'CRITICAL_ACTION' }, callback)
  }
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`гидратация`,children:`Гидратация`}),`
`,(0,c.jsx)(n.p,{children:`Гидратация позволяет передавать данные, полученные при серверном рендеринге (SSR), на клиентскую сторону. Это предотвращает повторное выполнение одних и тех же запросов сразу после загрузки страницы.`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`На сервере`}),`: выполните нужные запросы и получите скрипт через `,(0,c.jsx)(n.code,{children:`Api.getHydrationScript()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`В шаблоне`}),`: вставьте полученную строку в HTML.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`На клиенте`}),`: при инициализации `,(0,c.jsx)(n.code,{children:`Api`}),` данные будут автоматически загружены в менеджер ответов.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Пример на сервере (SSR)
await Api.get({ path: 'settings' });
const hydrationScript = Api.getHydrationScript(); // <script>...<\/script>
`})}),`
`,(0,c.jsx)(n.h2,{id:`кэширование`,children:`Кэширование`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`Api`}),` поддерживает автоматическое кэширование ответов. Вы можете использовать как встроенное хранилище в памяти, так и подключить внешнее (например, `,(0,c.jsx)(n.code,{children:`LocalStorage`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ApiCache, DataStorage } from '@dxtmisha/functional-basic';

// Подключение внешнего хранилища (необязательно)
ApiCache.init(
  async (key) => DataStorage.get(key),
  async (key, value) => DataStorage.set(key, value)
);

// Использование в запросе
const data = await Api.get({
  path: 'catalog/list',
  cache: 3600 // Кэшировать на 1 час (в секундах)
});
`})}),`
`,(0,c.jsx)(n.h2,{id:`эмуляция-ответов`,children:`Эмуляция ответов`}),`
`,(0,c.jsxs)(n.p,{children:[`Встроенный менеджер `,(0,c.jsx)(n.code,{children:`ApiResponse`}),` (доступен через `,(0,c.jsx)(n.code,{children:`Api.getResponse()`}),`) позволяет перехватывать запросы и возвращать мок-данные. Это крайне полезно при разработке интерфейса, когда бэкенд еще не готов, или для написания тестов.`]}),`
`,(0,c.jsx)(n.h3,{id:`регистрация-моков`,children:`Регистрация моков`}),`
`,(0,c.jsx)(n.p,{children:`Вы можете добавлять как статические ответы, так и динамические функции.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const responseManager = Api.getResponse()

// 1. Статический ответ на GET запрос
responseManager.add({
  path: 'profile',
  method: 'GET',
  response: { id: 1, name: 'Admin' },
  lag: true // Имитация задержки сети (0-2 сек)
})

// 2. Динамический ответ на основе параметров запроса
responseManager.add({
  path: 'users/search',
  method: 'GET',
  response: (request) => {
    return {
      results: [\`Результат для: \${request.query}\`],
      count: 1
    }
  }
})

// 3. Перехват POST запроса с любым телом
responseManager.add({
  path: 'users/update',
  method: 'POST',
  request: '*any', // Игнорировать проверку тела запроса
  response: { success: true }
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`режим-разработки`,children:`Режим разработки`}),`
`,(0,c.jsx)(n.p,{children:`Для удобства отладки можно включить логирование эмуляции в консоль. В этом режиме менеджер будет предупреждать в консоли о каждом перехваченном запросе.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`Api.getResponse().setDevMode(true)
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Эмулятор срабатывает `,(0,c.jsx)(n.strong,{children:`до`}),` выполнения реального `,(0,c.jsx)(n.code,{children:`fetch`}),`. Если подходящий мок не найден, `,(0,c.jsx)(n.code,{children:`Api`}),` выполнит обычный сетевой запрос.`]}),`
`,(0,c.jsx)(n.h2,{id:`продвинутое-использование-apiinstance`,children:`Продвинутое использование: ApiInstance`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`Api`}),` является `,(0,c.jsx)(n.strong,{children:`статическим прокси`}),` для глобального экземпляра `,(0,c.jsx)(n.code,{children:`ApiInstance`}),`. Этот экземпляр хранится в `,(0,c.jsx)(n.code,{children:`ServerStorage`}),`, что обеспечивает изоляцию между запросами при SSR и поведение синглтона на клиенте.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Для продвинутых сценариев — например, при необходимости работы с несколькими независимыми API одновременно или создания временных изолированных окружений — вы можете создавать экземпляры `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` напрямую.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ApiInstance } from '@dxtmisha/functional-basic'

const secondaryApi = new ApiInstance()
secondaryApi.setUrl('https://another-api.com/')
secondaryApi.setHeaders({ 'X-Client-Id': '...' })

const data = await secondaryApi.get({ path: 'resource' })
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
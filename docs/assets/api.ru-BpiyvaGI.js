import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/# Api`}),`
`,(0,c.jsx)(n.h1,{id:`api`,children:`Api`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`Api`}),` — это основной инструмент для работы с HTTP-запросами. Он предоставляет простой интерфейс для стандартных методов и управляет глобальными настройками, такими как базовый URL, заголовки по умолчанию и хуки жизненного цикла.`]}),`
`,(0,c.jsx)(n.h3,{id:`основные-возможности`,children:`Основные возможности`}),`
`,(0,c.jsx)(n.p,{children:`Класс предоставляет полный набор инструментов для управления сетевым взаимодействием:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`CRUD методы`}),` — выполнение `,(0,c.jsx)(n.code,{children:`GET`}),`, `,(0,c.jsx)(n.code,{children:`POST`}),`, `,(0,c.jsx)(n.code,{children:`PUT`}),`, `,(0,c.jsx)(n.code,{children:`PATCH`}),`, `,(0,c.jsx)(n.code,{children:`DELETE`}),` запросов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Глобальная конфигурация`}),` — настройка базовых URL, заголовков и параметров.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Хуки жизненного цикла`}),` — обработка событий до и после запроса (например, для Refresh Token).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Гидратация (SSR)`}),` — передача данных от сервера к клиенту для предотвращения дублирования запросов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование`}),` — сохранение ответов в памяти или внешнем хранилище (LocalStorage).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Эмуляция ответов`}),` — создание мок-данных для разработки и тестирования.`]}),`
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
Api.setUrl('https://api.example.com/v1/')

// Добавление общих заголовков (например, токен авторизации)
Api.setHeaders({
  'Authorization': 'Bearer YOUR_TOKEN'
})

// Установка общих параметров, которые будут добавлены к каждому запросу
Api.setRequestDefault({
  app_version: '1.0.0'
})
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
`,(0,c.jsxs)(n.p,{children:[`Эмулятор срабатывает `,(0,c.jsx)(n.strong,{children:`до`}),` выполнения реального `,(0,c.jsx)(n.code,{children:`fetch`}),`. Если подходящий мок не найден, `,(0,c.jsx)(n.code,{children:`Api`}),` выполнит обычный сетевой запрос.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as d}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"@dxtmisha/ru/functional-basic/Classes/Api - Управление запросами"}),`
`,e.jsx(n.h1,{id:"класс-api",children:"Класс Api"}),`
`,e.jsx(n.p,{children:"Статический класс-обертка над Fetch API для эффективной работы с сетевыми запросами. Предоставляет расширенные возможности конфигурирования, глобальной обработки статусов, эмуляции ответов, установки хуков подготовки и автоматического парсинга данных."}),`
`,e.jsxs(n.p,{children:["Включает тесную интеграцию с зависимыми классами: ",e.jsx(n.code,{children:"ApiStatus"}),", ",e.jsx(n.code,{children:"ApiResponse"}),", ",e.jsx(n.code,{children:"ApiPreparation"}),", ",e.jsx(n.code,{children:"ApiDefault"})," и ",e.jsx(n.code,{children:"ApiHeaders"}),"."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CRUD методы"})," — удобные алиасы ",e.jsx(n.code,{children:"get"}),", ",e.jsx(n.code,{children:"post"}),", ",e.jsx(n.code,{children:"put"}),", ",e.jsx(n.code,{children:"delete"})," для работы с HTTP-запросами"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Глобальная конфигурация"})," — установка базового URL, заголовков и параметров по умолчанию для всех запросов"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Хуки жизненного цикла"})," — возможность задать функции, выполняемые до (",e.jsx(n.code,{children:"setPreparation"}),") и после (",e.jsx(n.code,{children:"setEnd"}),") каждого запроса"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Отслеживание статуса"})," — доступ к статусу и ошибкам последнего запроса через ",e.jsx(n.code,{children:"ApiStatus"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Кэширование и эмуляция"})," — управление мок-ответами и кэшированием через ",e.jsx(n.code,{children:"ApiResponse"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Автоматический парсинг"})," — преобразование тела запроса в JSON/FormData и автоматическое извлечение данных из JSON-ответов"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Геолокация"})," — автоматическая подстановка ",e.jsx(n.code,{children:"{locale}"}),", ",e.jsx(n.code,{children:"{country}"}),", ",e.jsx(n.code,{children:"{language}"})," в пути запросов"]}),`
`]}),`
`,e.jsx(n.h2,{id:"методы-запросов",children:"Методы запросов"}),`
`,e.jsx(n.h3,{id:"request",children:e.jsx(n.code,{children:"request"})}),`
`,e.jsxs(n.p,{children:["Универсальный метод для выполнения сетевого HTTP-запроса. Если передана строка, выполняется простой ",e.jsx(n.code,{children:"GET"}),` запрос по этому адресу.
В случае сетевых сбоев (например, 500 статус) метод явно выбрасывает исключение (`,e.jsx(n.code,{children:"throw e"}),"), что позволяет перехватывать ошибки в ",e.jsx(n.code,{children:"try/catch"}),". Если сервер возвращает JSON объект, к возвращаемым данным автоматически добавляется поле ",e.jsx(n.code,{children:"statusObject"})," (инстанс статуса запроса)."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pathRequest: string | ApiFetch"})," — путь (строка) или конфигурационный объект запроса."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"Promise<ApiData<T>>"})," — возвращает спарсенные данные ответа сервера (с полями ",e.jsx(n.code,{children:"data"}),", ",e.jsx(n.code,{children:"statusObject"})," и др., если возвращается объект)."]}),`
`,e.jsx(n.h3,{id:"get",children:e.jsx(n.code,{children:"get"})}),`
`,e.jsxs(n.p,{children:["Отправляет запрос методом ",e.jsx(n.code,{children:"GET"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request: ApiFetch"})," — конфигурационный объект запроса (содержащий ",e.jsx(n.code,{children:"path"}),", ",e.jsx(n.code,{children:"request"})," и т.д.)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"Promise<T>"})]}),`
`,e.jsx(n.h3,{id:"post",children:e.jsx(n.code,{children:"post"})}),`
`,e.jsxs(n.p,{children:["Отправляет запрос методом ",e.jsx(n.code,{children:"POST"}),". Идеально для создания/сохранения сущностей."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request: ApiFetch"})," — конфигурационный объект запроса (содержащий ",e.jsx(n.code,{children:"path"}),", ",e.jsx(n.code,{children:"request"})," и т.д.)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"Promise<T>"})]}),`
`,e.jsx(n.h3,{id:"put",children:e.jsx(n.code,{children:"put"})}),`
`,e.jsxs(n.p,{children:["Отправляет запрос методом ",e.jsx(n.code,{children:"PUT"}),". Применяется для обновления данных."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request: ApiFetch"})," — конфигурационный объект запроса (содержащий ",e.jsx(n.code,{children:"path"}),", ",e.jsx(n.code,{children:"request"})," и т.д.)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"Promise<T>"})]}),`
`,e.jsx(n.h3,{id:"delete",children:e.jsx(n.code,{children:"delete"})}),`
`,e.jsxs(n.p,{children:["Отправляет запрос методом ",e.jsx(n.code,{children:"DELETE"}),". Применяется для удаления данных из системы."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request: ApiFetch"})," — конфигурационный объект запроса (содержащий ",e.jsx(n.code,{children:"path"}),", ",e.jsx(n.code,{children:"request"})," и т.д.)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"Promise<T>"})]}),`
`,e.jsx(n.h2,{id:"методы-получения-инстансов",children:"Методы получения инстансов"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isLocalhost(): boolean"})," — Возвращает ",e.jsx(n.code,{children:"true"}),", если код запущен на локальном сервере."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getStatus(): ApiStatus"})," — Возвращает менеджер ",e.jsx(n.code,{children:"ApiStatus"})," для работы со статусом последнего запроса."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getResponse(): ApiResponse"})," — Возвращает менеджер эмуляции ",e.jsx(n.code,{children:"ApiResponse"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"конфигурация",children:"Конфигурация"}),`
`,e.jsxs(n.p,{children:["Методы для настройки API (поддерживают чейнинг вызовов, возвращают класс ",e.jsx(n.code,{children:"Api"}),"):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setHeaders(headers: Record<string, string>): Api"})," — Устанавливает глобальные заголовки по умолчанию."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setRequestDefault(request: Record<string, any>): Api"})," — Устанавливает общие параметры для всех запросов."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setUrl(url: string): Api"})," — Изменяет базовый URL путь для API скриптов."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): Api"})," — Устанавливает хук, выполняемый перед каждым сетевым запросом."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): Api"})," — Устанавливает хук, выполняемый после получения ответа."]}),`
`]}),`
`,e.jsx(n.h2,{id:"формирование-запроса",children:"Формирование запроса"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getUrl(path: string, api?: boolean): string"})," — Формирует полный адрес к скрипту запроса с подстановкой гео-меток."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getBody(request?: ApiFetch['request'], method?: string): string | FormData | undefined"})," — Формирует данные для тела запроса."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getBodyForGet(request: ApiFetch['request'], path?: string, method?: string): string"})," — Формирует строку query-параметров для GET-запроса."]}),`
`]}),`
`,e.jsx(n.h2,{id:"объект-apifetch",children:"Объект ApiFetch"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ApiFetch"})," — главный конфигурационный объект, передаваемый в методы ",e.jsx(n.code,{children:"request"}),", ",e.jsx(n.code,{children:"get"}),", ",e.jsx(n.code,{children:"post"}),", ",e.jsx(n.code,{children:"put"}),", ",e.jsx(n.code,{children:"delete"}),". Все поля опциональны:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path?: string"})," — путь к endpoint-скрипту относительно базового URL (например: ",e.jsx(n.code,{children:"'users/list'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pathFull?: string"})," — полный URL запроса. Если указан, игнорирует ",e.jsx(n.code,{children:"api"})," и ",e.jsx(n.code,{children:"path"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"api?: boolean"})," — добавлять ли базовый URL перед ",e.jsx(n.code,{children:"path"}),". По умолчанию: ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"method?: ApiMethod"})," — HTTP-метод (",e.jsx(n.code,{children:"'GET'"}),", ",e.jsx(n.code,{children:"'POST'"}),", ",e.jsx(n.code,{children:"'PUT'"}),", ",e.jsx(n.code,{children:"'DELETE'"}),"). По умолчанию: ",e.jsx(n.code,{children:"'GET'"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request?: FormData | Record<string, any> | string"})," — тело запроса (для POST/PUT) или query-параметры (для GET). Передается как JSON или ",e.jsx(n.code,{children:"FormData"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"headers?: Record<string, string> | null"})," — дополнительные заголовки запроса. ",e.jsx(n.code,{children:"null"})," — отключить все заголовки."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: string"})," — значение ",e.jsx(n.code,{children:"Content-Type"}),". По умолчанию: ",e.jsx(n.code,{children:"'application/json;charset=UTF-8'"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"auth?: boolean"})," — добавить заголовки аутентификации."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toData?: boolean"})," — если ",e.jsx(n.code,{children:"true"}),", автоматически разворачивает ",e.jsx(n.code,{children:"data"})," из обертки ",e.jsx(n.code,{children:"{ data: ... }"}),". По умолчанию: ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hideError?: boolean"})," — подавляет вывод ошибок в ",e.jsx(n.code,{children:"console.error"})," при сбое. По умолчанию: ",e.jsx(n.code,{children:"false"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"globalPreparation?: boolean"})," — запускать ли глобальный хук ",e.jsx(n.code,{children:"setPreparation"})," до этого запроса. По умолчанию: ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"globalEnd?: boolean"})," — запускать ли глобальный хук ",e.jsx(n.code,{children:"setEnd"})," после ответа. По умолчанию: ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"queryReturn?: (query: Response) => Promise<any>"})," — обработчик ответа вместо стандартного чтения JSON."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"init?: RequestInit"})," — дополнительные опции для нативного ",e.jsx(n.code,{children:"fetch()"})," (CORS, режим кеша и др.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"controller?: AbortController"})," — контроллер для отмены запроса."]}),`
`]}),`
`,e.jsx(n.h2,{id:"отмена-запросов-abortcontroller",children:"Отмена запросов (AbortController)"}),`
`,e.jsxs(n.p,{children:["API поддерживает отмену запросов из коробки. Для этого можно передать экземпляр ",e.jsx(n.code,{children:"AbortController"})," в поле ",e.jsx(n.code,{children:"controller"})," объекта ",e.jsx(n.code,{children:"ApiFetch"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const controller = new AbortController()

// Запускаем запрос, передавая контроллер
Api.get({ path: 'users', controller }).catch(e => {
  if (e.name === 'AbortError') {
    console.log('Запрос был отменен пользователем')
  }
})

// Отменяем при размонтировании компонента (например)
controller.abort()
`})}),`
`,e.jsx(n.h2,{id:"эмуляция-ответов-apiresponse",children:"Эмуляция ответов (ApiResponse)"}),`
`,e.jsxs(n.p,{children:["Менеджер эмуляции ",e.jsx(n.code,{children:"ApiResponse"})," (доступен через ",e.jsx(n.code,{children:"Api.getResponse()"}),") позволяет настраивать мок-ответы для определенных путей — это невероятно полезно при разработке UI без готового Backend API или для написания тестов."]}),`
`,e.jsx(n.h3,{id:"регистрация-мок-ответов",children:"Регистрация мок-ответов"}),`
`,e.jsxs(n.p,{children:["Метод ",e.jsx(n.code,{children:"add"})," принимает объект типа ",e.jsx(n.code,{children:"ApiResponseItem"})," или массив таких объектов."]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Важные поля ",e.jsx(n.code,{children:"ApiResponseItem"}),":"]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path"})," — Строка (точное совпадение) или Регулярное выражение (",e.jsx(n.code,{children:"RegExp"}),") для перехвата пути."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"method"})," — HTTP метод (",e.jsx(n.code,{children:"ApiMethodItem.get"}),", ",e.jsx(n.code,{children:"post"})," и т.д.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"request"})," — (Опционально) Фильтр по телу запроса. Можно использовать специальный маркер ",e.jsx(n.code,{children:"'*any'"}),", чтобы перехватывать любые данные."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"response"})," — Статический объект с данными ответа ",e.jsx(n.em,{children:"или"})," функция ",e.jsx(n.code,{children:"(request) => any"}),", генерирующая ответ динамически на основе параметров запроса."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lag"})," — (Опционально) Имитировать задержку сети (",e.jsx(n.code,{children:"boolean"}),"), добавляет случайный setTimeout от 0 до 2000мс."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const responseManager = Api.getResponse()

// Включить режим разработчика (в консоль будут выводиться логи перехваченных запросов)
responseManager.setDevMode(true)

// Пример 1: Статический ответ на GET запрос
responseManager.add({
  path: 'users/profile', // можно использовать строку или RegExp
  method: 'GET',
  response: { id: 1, name: 'Admin', role: 'superuser' },
  lag: true // Искусственная задержка (lag) для симуляции реального сетевого пинга
})

// Пример 2: Динамический ответ с функцией (полезно для пагинации или поиска)
responseManager.add({
  path: /users\\/search/, // перехватываем по RegExp
  method: 'GET',
  // Функция получает оригинальные параметры, переданные в request
  response: (request) => {
    return [
        { id: 1, name: \`Искали: \${request.query}\` }
    ]
  }
})

// Пример 3: Перехват POST запроса с любым телом
responseManager.add({
  path: 'users/create',
  method: 'POST',
  request: '*any', // маркер *any позволяет игнорировать проверку тела запроса
  response: { success: true, message: 'Пользователь успешно создан (MOCK)' }
})

// Использование в коде (сетевой запрос не уйдет, вернется мок)
const profile = await Api.get({ path: 'users/profile' })
`})}),`
`,e.jsx(n.h3,{id:"приоритет-и-фильтрация-моков",children:"Приоритет и фильтрация моков"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Эмулятор (mock) срабатывает ",e.jsx(n.strong,{children:"до"})," реального ",e.jsx(n.code,{children:"fetch"}),"."]}),`
`,e.jsxs(n.li,{children:["Если эмулятор не находит совпадений (по ",e.jsx(n.code,{children:"path"}),", ",e.jsx(n.code,{children:"method"})," или ",e.jsx(n.code,{children:"request"}),"), класс ",e.jsx(n.code,{children:"Api"})," выполнит реальный сетевой запрос к серверу."]}),`
`,e.jsxs(n.li,{children:["Вы можете отключить определенный мок, передав функцию в поле ",e.jsx(n.code,{children:"disable: () => true"}),". Метод ",e.jsx(n.code,{children:"add"})," не будет его перехватывать."]}),`
`]}),`
`,e.jsx(n.h2,{id:"примеры",children:"Примеры"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Api } from '@dxtmisha/functional'

// Конфигурация API
Api.setUrl('https://api.example.com/v1/')
   .setHeaders({ 'Authorization': 'Bearer token123' })
   .setRequestDefault({ source: 'webapp' })

// Отслеживание подготовки перед началом (hook)
Api.setPreparation(async (apiFetch) => {
    console.log('Начинается запрос к:', apiFetch.path)
})

// Простой GET запрос с обработкой ошибок
try {
  const data = await Api.get({ path: 'users' })
  // Из объекта ответа также можно извлечь встроенный статус (если возвращается объект):
  // console.log(data.statusObject.getStatus())
} catch (e) {
  console.error('Сетевая ошибка при запросе пользователей:', e)
}

// POST запрос с телом и возможностью отмены
const abortCtrl = new AbortController()
try {
  const newUser = await Api.post({
    path: 'users/create',
    request: { name: 'John Doe', age: 30 },
    controller: abortCtrl
  })
} catch (e) {
  if (e.name === 'AbortError') console.log('Запрос отменен!')
}

// Отмена в случае необходимости
// abortCtrl.abort()
`})})]})}function j(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{j as default};

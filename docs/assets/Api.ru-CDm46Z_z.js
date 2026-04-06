import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/Api - Управление запросами`}),`
`,(0,c.jsx)(n.h1,{id:`класс-api`,children:`Класс Api`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`Api`}),` — это статичная обертка над инстансом `,(0,c.jsx)(n.code,{children:`ApiInstance`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Все вызовы методов `,(0,c.jsx)(n.code,{children:`Api`}),` автоматически делегируются внутреннему глобальному объекту `,(0,c.jsx)(n.code,{children:`ApiInstance`}),`. Это позволяет работать с HTTP запросами без необходимости самостоятельного создания инстансов:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Api } from '@dxtmisha/functional'

// Эти вызовы обращаются к одному и тому же глобальному инстансу под капотом
Api.setUrl('https://api.example.com/v1/')
Api.setHeaders({ 'Authorization': 'Bearer token123' })

const data = await Api.get({ path: 'users' })
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`доступ-к-инстансу`,children:`Доступ к инстансу`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): ApiInstance`}),` — Возвращает внутренний объект `,(0,c.jsx)(n.code,{children:`ApiInstance`}),`, используемый всеми статическими методами.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`информационные-методы`,children:`Информационные методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isLocalhost(): boolean`}),` — Возвращает `,(0,c.jsx)(n.code,{children:`true`}),`, если код работает на локальном сервере разработки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatus(): ApiStatus`}),` — Возвращает менеджер `,(0,c.jsx)(n.code,{children:`ApiStatus`}),` для отслеживания состояния и ошибок последнего запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getResponse(): ApiResponse`}),` — Возвращает менеджер ответов/эмуляции `,(0,c.jsx)(n.code,{children:`ApiResponse`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getUrl(path: string, api?: boolean): string`}),` — Возвращает полный URL запроса. Динамические заполнители `,(0,c.jsx)(n.code,{children:`{locale}`}),`, `,(0,c.jsx)(n.code,{children:`{country}`}),`, `,(0,c.jsx)(n.code,{children:`{language}`}),` заменяются автоматически.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBody(request?, method?): string | FormData | undefined`}),` — Возвращает данные для тела запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBodyForGet(request, path?, method?): string`}),` — Возвращает строку параметров запроса для метода GET.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`методы-конфигурации`,children:`Методы конфигурации`}),`
`,(0,c.jsxs)(n.p,{children:[`Все методы конфигурации возвращают сам класс `,(0,c.jsx)(n.code,{children:`Api`}),` для цепочечного вызова:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setUrl(url: string): Api`}),` — Устанавливает базовый URL для всех запросов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setHeaders(headers: Record<string, string>): Api`}),` — Устанавливает заголовки по умолчанию для всех запросов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setRequestDefault(request: Record<string, any>): Api`}),` — Устанавливает данные запроса по умолчанию, объединяемые с каждым телом запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setPreparation(callback): Api`}),` — Устанавливает функцию обратного вызова, выполняемую перед каждым запросом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setEnd(callback): Api`}),` — Устанавливает функцию обратного вызова, выполняемую после каждого запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setConfig(config?: ApiConfig): Api`}),` — Применяет полный объект конфигурации сразу (`,(0,c.jsx)(n.code,{children:`urlRoot`}),`, `,(0,c.jsx)(n.code,{children:`headers`}),`, `,(0,c.jsx)(n.code,{children:`requestDefault`}),`, `,(0,c.jsx)(n.code,{children:`preparation`}),`, `,(0,c.jsx)(n.code,{children:`end`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`методы-запросов`,children:`Методы запросов`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request<T>(pathRequest: string | ApiFetch): Promise<T>`}),` — Основной исполнитель запросов. Принимает строку пути или объект конфигурации `,(0,c.jsx)(n.code,{children:`ApiFetch`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get<T>(request: ApiFetch): Promise<T>`}),` — Отправляет HTTP GET запрос.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`post<T>(request: ApiFetch): Promise<T>`}),` — Отправляет HTTP POST запрос.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`put<T>(request: ApiFetch): Promise<T>`}),` — Отправляет HTTP PUT запрос.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`delete<T>(request: ApiFetch): Promise<T>`}),` — Отправляет HTTP DELETE запрос.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`setconfig`,children:`setConfig`}),`
`,(0,c.jsxs)(n.p,{children:[`Метод `,(0,c.jsx)(n.code,{children:`setConfig`}),` позволяет применить несколько параметров конфигурации одновременно с помощью объекта `,(0,c.jsx)(n.code,{children:`ApiConfig`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Api } from '@dxtmisha/functional'

Api.setConfig({
  urlRoot: 'https://api.example.com/v1/',
  headers: { 'Authorization': 'Bearer token123' },
  requestDefault: { source: 'webapp' },
  preparation: async (apiFetch) => {
    console.log('Подготовка:', apiFetch.path)
  },
  end: async (response, apiFetch) => {
    if (response.status === 401) {
      return { reset: true }
    }
    return {}
  }
})
`})}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Важно:`}),` Полный список параметров (`,(0,c.jsx)(n.code,{children:`ApiFetch`}),`), хуков (Lifecycle Hooks), эмуляции ответов и структуры данных ответа описан в документации базового класса `,(0,c.jsx)(n.strong,{children:`ApiInstance`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};
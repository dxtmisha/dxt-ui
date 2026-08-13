import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/ApiResponse - Эмуляция ответов API`}),`
`,(0,c.jsx)(t.h1,{id:`класс-apiresponse`,children:`Класс ApiResponse`}),`
`,(0,c.jsx)(t.p,{children:`Класс-менеджер для перехвата, кэширования и эмуляции ответов API. Он позволяет перехватывать исходящие API-запросы и возвращать предопределенные мок-данные вместо выполнения реального сетевого трафика.`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ApiResponse`}),` является `,(0,c.jsx)(t.strong,{children:`вспомогательным классом`}),`, предназначенным для эмуляции и мокирования API. В большинстве случаев рекомендуется регистрировать мок-ответы через параметр `,(0,c.jsx)(t.code,{children:`response`}),` в глобальной конфигурации `,(0,c.jsx)(t.code,{children:`Api`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Перехват запросов`}),` — интеллектуально сопоставляет исходящие запросы на основе пути, HTTP-метода и объекта данных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Динамические возможности`}),` — поддерживает как статические объекты, так и выполнение динамических функций-коллбэков для обработки контекста запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Симуляция задержки сети`}),` — встроенная система для имитации сетевых задержек с помощью рандомизированных таймеров.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Режим разработчика`}),` — выводит полезную отладочную информацию в консоль браузера, показывая, какие данные сопоставились с конкретным моком.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(t.code,{children:`ApiResponse(requestDefault)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`requestDefault: ApiDefault`}),` — класс запросов по умолчанию, используемый для конфигурации и хранения.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ApiResponse } from '@dxtmisha/functional-basic'

const apiResponse = new ApiResponse(myApiDefault)
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsx)(t.h4,{id:`emulator`,children:(0,c.jsx)(t.code,{children:`emulator`})}),`
`,(0,c.jsx)(t.p,{children:`Основной цикл движка, который проверяет конфигурации запросов и выполняет соответствующие эмулированные ответы. Этот метод работает только в среде DOM.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apiFetch: ApiFetch`}),` — Свойства запроса для эмуляции.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`Promise<T | undefined>`}),` — Данные эмулированного ответа.`]}),`
`,(0,c.jsx)(t.h4,{id:`emulatorasync`,children:(0,c.jsx)(t.code,{children:`emulatorAsync`})}),`
`,(0,c.jsx)(t.p,{children:`Синхронная версия эмулятора. Возвращает мок-ответ немедленно, без задержек и состояния загрузки. Этот метод работает только в среде DOM.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apiFetch: ApiFetch`}),` — Свойства запроса для эмуляции.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`T | undefined`}),` — Данные эмулированного ответа.`]}),`
`,(0,c.jsx)(t.h3,{id:`проверка`,children:`Проверка`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(path: string, method: ApiMethod, request?: ApiFetch['request'], devMode?: boolean): ApiResponseItem | undefined`}),` — Синхронно проверяет наличие подходящего мок-запроса в кэше.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getList(): (ApiResponseItem & Record<string, any>)[]`}),` — Возвращает список всех зарегистрированных конфигураций эмулятора.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(response: ApiResponseItem | ApiResponseItem[]): this`}),` — Добавляет объекты мок-ответов в локальный реестр.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setDevMode(devMode: boolean): this`}),` — Включает или выключает режим отладочного вывода в консоль.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h4,{id:`apiresponseitem`,children:(0,c.jsx)(t.code,{children:`ApiResponseItem`})}),`
`,(0,c.jsx)(t.p,{children:`Объект, определяющий конфигурацию мок-ответа.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string | RegExp`}),` — Путь или шаблон URL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`method: ApiMethod`}),` — HTTP-метод (GET, POST и т.д.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response: any | ((request?: any) => any)`}),` — Данные мока или функция для их генерации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`request?: ApiFetch['request'] | '*any'`}),` — Опциональные данные запроса для сопоставления.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lag?: boolean`}),` — Нужно ли имитировать задержку сети.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`disable?: any`}),` — Условие для отключения мока (boolean или функция).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isForGlobal?: boolean`}),` — Пометить как глобальный мок (скрыт из getList).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`руководство-эмуляция-api`,children:`Руководство: Эмуляция API`}),`
`,(0,c.jsx)(t.p,{children:`Следующие правила и условия определяют, как система эмуляции перехватывает и подменяет сетевые запросы:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Регистрация моков`}),` — ответы, добавленные через `,(0,c.jsx)(t.code,{children:`add()`}),`, имеют приоритет и проверяются перед выполнением любого реального сетевого вызова.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Критерии сопоставления`}),` — мок срабатывает только в том случае, если путь (строка или RegExp), HTTP-метод и тело запроса полностью соответствуют конфигурации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Wildcard для тела`}),` — использование значения `,(0,c.jsx)(t.code,{children:`*any`}),` для запроса позволяет моку соответствовать любой полезной нагрузке, пропуская глубокое сравнение объектов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Динамические данные`}),` — свойство `,(0,c.jsx)(t.code,{children:`response`}),` может быть функцией, что позволяет генерировать динамические данные мока на основе входящих параметров запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Симуляция задержки`}),` — установка `,(0,c.jsx)(t.code,{children:`lag: true`}),` добавляет случайную задержку (0–2000 мс) и активирует общее состояние загрузки (класс `,(0,c.jsx)(t.code,{children:`d-response-loading`}),` на body).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Повторные срабатывания`}),` — по умолчанию конфигурация эмулятора срабатывает только один раз, если не включен `,(0,c.jsx)(t.code,{children:`devMode`}),`, что предотвращает дублирование моков для одного и того же состояния.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
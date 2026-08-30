import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Composables/useApiManagementRef - Управление API`}),`
`,(0,c.jsx)(t.h1,{id:`useapimanagementref`,children:(0,c.jsx)(t.code,{children:`useApiManagementRef`})}),`
`,(0,c.jsx)(t.p,{children:`Мощный композабл для комплексной оркестрации API-запросов. Он централизованно управляет загрузкой данных (GET), форматированием списков, клиентским поиском и мутациями (POST, PUT, DELETE) через единый реактивный интерфейс.`}),`
`,(0,c.jsx)(t.h2,{id:`параметры`,children:`Параметры`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`propsGet: ApiManagementGet<Return, Type>`}),` — настройки главного GET-запроса (path, reactivity, skeleton и т.д.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`formattersOptions?: FormattersOptions`}),` — опциональные правила для реактивного форматирования данных (`,(0,c.jsx)(t.code,{children:`useFormattersRef`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`searchOptions?: ApiManagementSearch<Item, Columns>`}),` — опциональные настройки для клиентского поиска по списку (`,(0,c.jsx)(t.code,{children:`useSearchRef`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`postRequest?: ApiManagementRequest<Post>`}),` — опциональные настройки для POST-запроса создания.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`putRequest?: ApiManagementRequest<Put>`}),` — опциональные настройки для PUT-запроса обновления.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`deleteRequest?: ApiManagementRequest<Delete>`}),` — опциональные настройки для DELETE-запроса удаления.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`action?: function`}),` — общий коллбэк для выполнения после любой успешной мутации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apiInstance?: ApiInstance`}),` — Экземпляр API, используемый для выполнения запроса. По умолчанию `,(0,c.jsx)(t.code,{children:`Api.getItem()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`возвращает`,children:`Возвращает`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isValid: ComputedRef<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),`, если данные прошли проверку `,(0,c.jsx)(t.code,{children:`typeData`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isResponseContractValid: ComputedRef<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),`, если данные ответа соответствуют определенному контракту.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`responseValidationResult: ComputedRef<ApiDataValidation | undefined>`}),` — подробный результат валидации контракта.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: ComputedRef`}),` — обработанный массив данных. `,(0,c.jsx)(t.strong,{children:`Поддерживает Skeleton`}),`: если данные ещё не загружены и передан `,(0,c.jsx)(t.code,{children:`skeleton()`}),`, вернет заглушки. Учитывает фильтры поиска и форматтеры.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: ComputedRef<ApiData<Return> | undefined>`}),` — «сырые» реактивные данные из `,(0,c.jsx)(t.code,{children:`useApiRef`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorItem: ComputedRef<ApiErrorItem | undefined>`}),` — текущий объект ошибки, если запрос не удался.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`length: ComputedRef<number>`}),` — текущее количество элементов в `,(0,c.jsx)(t.code,{children:`list`}),` (динамически меняется при поиске).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lengthData: ComputedRef<number>`}),` — общее количество элементов в исходном `,(0,c.jsx)(t.code,{children:`data`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`starting: ComputedRef<boolean>`}),` — флаг первичной загрузки (когда данных еще нет).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reading: Ref<boolean>`}),` — флаг активного процесса чтения данных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loading: Ref<boolean>`}),` — общее состояние загрузки главного GET-запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loadingSearch: Ref<boolean>`}),` — состояние загрузки в процессе поиска.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loadingPost / loadingPut / loadingDelete`}),` — состояния загрузки для каждой мутации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSearch: ComputedRef<boolean>`}),` — активен ли поиск (есть ли поисковый запрос).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`search: Ref<string>`}),` — реактивная строка поиска (Proxy к переданному `,(0,c.jsx)(t.code,{children:`searchOptions.value`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`sendPost / sendPut / sendDelete: (request?: ApiFetch['request']) => Promise<any>`}),` — методы для вызова мутаций.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init: () => void`}),` — метод для явной ручной инициализации запроса и наблюдения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initSsr: () => void`}),` — метод для инициализации на стороне сервера (SSR).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reset: () => Promise<void>`}),` — принудительный перезапуск GET-запроса и очистка текущего состояния.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`abort: () => void`}),` — прерывание текущего сетевого запроса.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`асинхронная-версия`,children:`Асинхронная версия`}),`
`,(0,c.jsxs)(t.p,{children:[`Для случаев, когда требуется немедленная (не ленивая) инициализация запроса (например, для SSR), используйте `,(0,c.jsx)(t.a,{href:`./useApiManagementAsyncRef.ru.mdx`,children:(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`useApiManagementAsyncRef`})})}),`. Он автоматически вызывает `,(0,c.jsx)(t.code,{children:`initSsr()`}),` при создании.`]}),`
`,(0,c.jsx)(t.h2,{id:`ограничения-дженериков-generic-constraints`,children:`Ограничения дженериков (Generic Constraints)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Return extends ApiManagementValue`}),` — тип данных, возвращаемых API.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`FormattersOptions extends FormattersOptionsList`}),` — опциональные правила форматирования.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Post / Put / Delete extends Record<string, any>`}),` — типы данных для соответствующих запросов мутации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Type extends ApiManagementValue = Return`}),` — тип исходных данных (до трансформации).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Item extends ArrayToItem<Return>`}),` — тип одного элемента из списка данных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ItemFormatters extends FormattersListColumns<Item, FormattersOptions>[number]`}),` — тип элемента после применения форматировщиков.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Columns extends SearchColumns<ItemFormatters>`}),` — колонки, по которым производится поиск.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`как-с-ним-работать`,children:`Как с ним работать`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`useApiManagementRef`}),` — это центральный хаб для управления данными в CRUD-интерфейсах. Он объединяет сетевые запросы, локальный поиск и форматирование в единый автоматизированный цикл:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Инициализация и Ленивость (Lazy Loading)`}),`: Хук не отправляет сетевой запрос немедленно. GET-запрос ставится в очередь только тогда, когда ваш компонент впервые обращается к свойству `,(0,c.jsx)(t.code,{children:`list`}),` или `,(0,c.jsx)(t.code,{children:`data`}),`. Это экономит ресурсы, если данные не всегда нужны на экране.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Мгновенный отклик (Skeleton)`}),`: Если вы передали функцию `,(0,c.jsx)(t.code,{children:`skeleton`}),`, то в момент начала загрузки `,(0,c.jsx)(t.code,{children:`list`}),` сразу вернет массив "заглушек". Это позволяет отрисовать структуру таблицы или списка до того, как придет первый байт данных, исключая "прыжки" интерфейса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Умный список (`,(0,c.jsx)(t.code,{children:`list`}),`)`]}),`: Это основная точка взаимодействия. Свойство `,(0,c.jsx)(t.code,{children:`list`}),` автоматически переключается между:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Данными-скелетонами (при загрузке).`}),`
`,(0,c.jsx)(t.li,{children:`Результатами поиска (если введен поисковый запрос).`}),`
`,(0,c.jsxs)(t.li,{children:[`Отформатированными данными (если настроены `,(0,c.jsx)(t.code,{children:`formattersOptions`}),`).`]}),`
`,(0,c.jsx)(t.li,{children:`Исходными данными (если ничего из вышеперечисленного не применимо).`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синхронизация Поиска и Форматов`}),`: Поиск выполняется по уже загруженным и, если необходимо, отформатированным данным. Это гарантирует, что пользователь найдет "Иванов Иван", даже если в исходном JSON эти данные пришли в разных полях. Поиск происходит на стороне клиента (Client-side), что дает мгновенный результат.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Цикл Мутаций и Авто-обновление`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`При вызове методов `,(0,c.jsx)(t.code,{children:`sendPost`}),`, `,(0,c.jsx)(t.code,{children:`sendPut`}),` или `,(0,c.jsx)(t.code,{children:`sendDelete`}),` хук отслеживает статус ответа.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Если сервер вернул успех (проверка через `,(0,c.jsx)(t.code,{children:`isApiSuccess`}),`), хук `,(0,c.jsx)(t.strong,{children:`автоматически`}),` вызывает `,(0,c.jsx)(t.code,{children:`reset()`}),` для основного GET-запроса.`]}),`
`,(0,c.jsx)(t.li,{children:`Это приводит к повторной загрузке данных и обновлению всего списка. Таким образом, после удаления строки или добавления новой, ваш список всегда остается актуальным без написания лишнего кода.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Реактивность параметров`}),`: Если `,(0,c.jsx)(t.code,{children:`path`}),` или `,(0,c.jsx)(t.code,{children:`options`}),` (в `,(0,c.jsx)(t.code,{children:`propsGet`}),`) являются реактивными (Vue Ref), и вы установили `,(0,c.jsx)(t.code,{children:`reactivity: true`}),`, хук будет следить за их изменением и автоматически перезагружать данные при смене URL или параметров фильтрации.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ssr-и-инициализация`,children:`SSR и инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для обеспечения корректной работы `,(0,c.jsx)(t.strong,{children:`Server Side Rendering (SSR)`}),` рекомендуется использовать асинхронную версию `,(0,c.jsx)(t.a,{href:`./useApiManagementAsyncRef.ru.mdx`,children:(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`useApiManagementAsyncRef`})})}),`. Она автоматически инициализирует запрос для предзагрузки на сервере.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Если вы используете стандартный `,(0,c.jsx)(t.code,{children:`useApiManagementRef`}),`, вы можете вручную включить его в цикл SSR, вызвав `,(0,c.jsx)(t.code,{children:`initSsr()`}),` в `,(0,c.jsx)(t.code,{children:`setup()`}),` компонента. Это гарантирует, что данные будут загружены на стороне сервера.`]}),`
`,(0,c.jsx)(t.h2,{id:`архитектура`,children:`Архитектура`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`useApiManagementRef`}),` — это центральный оркестратор для CRUD-задач. Он объединяет четыре независимых хука (`,(0,c.jsx)(t.code,{children:`useApiRef`}),`, `,(0,c.jsx)(t.code,{children:`useFormattersRef`}),`, `,(0,c.jsx)(t.code,{children:`useSearchRef`}),` и мутации) в единую реактивную систему. Вместо управления десятками разрозненных состояний (загрузка, ошибки, данные, фильтры), разработчик описывает конфигурацию, а хук берет на себя синхронизацию их жизненных циклов.`]}),`
`,(0,c.jsx)(t.h2,{id:`типы-types`,children:`Типы (Types)`}),`
`,(0,c.jsx)(t.h3,{id:`apimanagementgetreturn-type`,children:(0,c.jsx)(t.code,{children:`ApiManagementGet<Return, Type>`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path?: string | Ref<string>`}),` — путь к API.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: ApiOptions`}),` — параметры запроса (метод, заголовки и т.д.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reactivity?: boolean`}),` — включить ли автоматическое обновление при изменении `,(0,c.jsx)(t.code,{children:`path`}),` или `,(0,c.jsx)(t.code,{children:`options`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`conditions?: Ref<boolean>`}),` — условие выполнения запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`transformation?: (data: Type, isResponseContractValid?: ApiDataValidation) => ApiData<Return>`}),` — функция трансформации данных после получения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validateResponseContract?: (data: Type) => ApiDataValidation`}),` — функция для проверки контракта данных ответа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorContract?: ApiErrorStorageList`}),` — хранилище контрактов ошибок ответа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`typeData?: ((data: Return) => boolean) | any`}),` — функция проверки данных или конструктор (например, `,(0,c.jsx)(t.code,{children:`Array`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`unmounted?: boolean`}),` — очищать ли данные после размонтирования компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`skeleton?: () => Return`}),` — функция, возвращающая данные-заглушки во время загрузки.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`apimanagementsearcht-k`,children:(0,c.jsx)(t.code,{children:`ApiManagementSearch<T, K>`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`columns: K`}),` — список колонок для поиска.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: Ref<string>`}),` — реактивная строка поиска.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: SearchOptions`}),` — дополнительные настройки поиска.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`apimanagementrequestt-return`,children:(0,c.jsx)(t.code,{children:`ApiManagementRequest<T, Return>`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path?: string | Ref<string>`}),` — путь для запроса мутации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`action?: (data: Return | undefined) => Promise<void> | void`}),` — коллбэк, вызываемый после выполнения запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`transformation?: (data: T) => Return`}),` — трансформация данных перед отправкой.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validateRequestContract?: (data: Request) => ApiDataValidation & Return`}),` — функция валидации контракта запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validateResponseContract?: (data: T) => ApiDataValidation & Return`}),` — функция валидации контракта ответа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorContract?: ApiErrorStorageList`}),` — хранилище контрактов ошибок ответа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toData?: boolean`}),` — оборачивать ли полезную нагрузку в свойство 'data'.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: ApiOptions`}),` — дополнительные параметры запроса.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { useApiManagementRef } from '@dxtmisha/functional'
import { FormattersType } from '@dxtmisha/functional-basic'

const searchVal = ref('')

const { 
  list, 
  loading, 
  sendPost, 
  sendDelete 
} = useApiManagementRef(
  // 1. GET Запрос
  { path: 'api/users', skeleton: () => [{ id: 0, name: 'Загрузка...' }] },
  // 2. Форматтеры
  {  price: { type: FormattersType.currency } },
  // 3. Поиск
  { columns: ['name'], value: searchVal },
  // 4. POST
  { path: 'api/users/create' },
  // 5. PUT (не используется)
  undefined,
  // 6. DELETE
  { path: 'api/users/delete' }
)

// Для создания пользователя:
// await sendPost({ data: { name: 'Новый' } })
// Будет вызван POST запрос, а затем таблица пользователей обновится автоматически!
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};
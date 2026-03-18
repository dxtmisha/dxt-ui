import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/ru/functional/Composables/useApiManagementRef - Управление API"}),`
`,e.jsx(n.h1,{id:"useapimanagementref",children:e.jsx(n.code,{children:"useApiManagementRef"})}),`
`,e.jsx(n.p,{children:"Мощный композабл для комплексной оркестрации API-запросов. Он централизованно управляет загрузкой данных (GET), форматированием списков, клиентским поиском и мутациями (POST, PUT, DELETE) через единый реактивный интерфейс."}),`
`,e.jsx(n.h2,{id:"параметры",children:"Параметры"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"propsGet: ApiManagementGet<Return, Type>"})," — настройки главного GET-запроса (path, reactivity, skeleton и т.д.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"formattersOptions?: FormattersOptions"})," — опциональные правила для реактивного форматирования данных (",e.jsx(n.code,{children:"useFormattersRef"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"searchOptions?: ApiManagementSearch<Item, Columns>"})," — опциональные настройки для клиентского поиска по списку (",e.jsx(n.code,{children:"useSearchRef"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"postRequest?: ApiManagementRequest<Post>"})," — опциональные настройки для POST-запроса создания."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"putRequest?: ApiManagementRequest<Put>"})," — опциональные настройки для PUT-запроса обновления."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"deleteRequest?: ApiManagementRequest<Delete>"})," — опциональные настройки для DELETE-запроса удаления."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"action?: function"})," — общий коллбэк для выполнения после любой успешной мутации."]}),`
`]}),`
`,e.jsx(n.h2,{id:"возвращает",children:"Возвращает"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"list: ComputedRef"})," — обработанный массив данных. ",e.jsx(n.strong,{children:"Поддерживает Skeleton"}),": если данные ещё не загружены и передан ",e.jsx(n.code,{children:"skeleton()"}),", вернет заглушки. Учитывает фильтры поиска и форматтеры."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: ComputedRef<ApiData<Return> | undefined>"})," — «сырые» реактивные данные из ",e.jsx(n.code,{children:"useApiRef"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"length: ComputedRef<number>"})," — текущее количество элементов в ",e.jsx(n.code,{children:"list"})," (динамически меняется при поиске)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lengthData: ComputedRef<number>"})," — общее количество элементов в исходном ",e.jsx(n.code,{children:"data"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"starting: ComputedRef<boolean>"})," — флаг первичной загрузки (когда данных еще нет)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reading: Ref<boolean>"})," — флаг активного процесса чтения данных."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"loading: Ref<boolean>"})," — общее состояние загрузки главного GET-запроса."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"loadingSearch: Ref<boolean>"})," — состояние загрузки в процессе поиска."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"loadingPost / loadingPut / loadingDelete"})," — состояния загрузки для каждой мутации."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isSearch: ComputedRef<boolean>"})," — активен ли поиск (есть ли поисковый запрос)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"search: Ref<string>"})," — реактивная строка поиска (Proxy к переданному ",e.jsx(n.code,{children:"searchOptions.value"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sendPost / sendPut / sendDelete: (request?: ApiFetch['request']) => Promise<any>"})," — методы для вызова мутаций."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reset: () => Promise<void>"})," — принудительный перезапуск GET-запроса и очистка текущего состояния."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"abort: () => void"})," — прерывание текущего сетевого запроса."]}),`
`]}),`
`,e.jsx(n.h2,{id:"ограничения-дженериков-generic-constraints",children:"Ограничения дженериков (Generic Constraints)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Return extends ApiManagementValue"})," — тип данных, возвращаемых API."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"FormattersOptions extends FormattersOptionsList"})," — опциональные правила форматирования."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Post / Put / Delete extends Record<string, any>"})," — типы данных для соответствующих запросов мутации."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Type extends ApiManagementValue = Return"})," — тип исходных данных (до трансформации)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Item extends ArrayToItem<Return>"})," — тип одного элемента из списка данных."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ItemFormatters extends FormattersListColumns<Item, FormattersOptions>[number]"})," — тип элемента после применения форматировщиков."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Columns extends SearchColumns<ItemFormatters>"})," — колонки, по которым производится поиск."]}),`
`]}),`
`,e.jsx(n.h2,{id:"как-с-ним-работать",children:"Как с ним работать"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useApiManagementRef"})," — это центральный хаб для управления данными в CRUD-интерфейсах. Он объединяет сетевые запросы, локальный поиск и форматирование в единый автоматизированный цикл:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Инициализация и Ленивость (Lazy Loading)"}),": Хук не отправляет сетевой запрос немедленно. GET-запрос ставится в очередь только тогда, когда ваш компонент впервые обращается к свойству ",e.jsx(n.code,{children:"list"})," или ",e.jsx(n.code,{children:"data"}),". Это экономит ресурсы, если данные не всегда нужны на экране."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Мгновенный отклик (Skeleton)"}),": Если вы передали функцию ",e.jsx(n.code,{children:"skeleton"}),", то в момент начала загрузки ",e.jsx(n.code,{children:"list"}),' сразу вернет массив "заглушек". Это позволяет отрисовать структуру таблицы или списка до того, как придет первый байт данных, исключая "прыжки" интерфейса.']}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Умный список (",e.jsx(n.code,{children:"list"}),")"]}),": Это основная точка взаимодействия. Свойство ",e.jsx(n.code,{children:"list"})," автоматически переключается между:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Данными-скелетонами (при загрузке)."}),`
`,e.jsx(n.li,{children:"Результатами поиска (если введен поисковый запрос)."}),`
`,e.jsxs(n.li,{children:["Отформатированными данными (если настроены ",e.jsx(n.code,{children:"formattersOptions"}),")."]}),`
`,e.jsx(n.li,{children:"Исходными данными (если ничего из вышеперечисленного не применимо)."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Синхронизация Поиска и Форматов"}),': Поиск выполняется по уже загруженным и, если необходимо, отформатированным данным. Это гарантирует, что пользователь найдет "Иванов Иван", даже если в исходном JSON эти данные пришли в разных полях. Поиск происходит на стороне клиента (Client-side), что дает мгновенный результат.']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Цикл Мутаций и Авто-обновление"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["При вызове методов ",e.jsx(n.code,{children:"sendPost"}),", ",e.jsx(n.code,{children:"sendPut"})," или ",e.jsx(n.code,{children:"sendDelete"})," хук отслеживает статус ответа."]}),`
`,e.jsxs(n.li,{children:["Если сервер вернул успех (проверка через ",e.jsx(n.code,{children:"isApiSuccess"}),"), хук ",e.jsx(n.strong,{children:"автоматически"})," вызывает ",e.jsx(n.code,{children:"reset()"})," для основного GET-запроса."]}),`
`,e.jsx(n.li,{children:"Это приводит к повторной загрузке данных и обновлению всего списка. Таким образом, после удаления строки или добавления новой, ваш список всегда остается актуальным без написания лишнего кода."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Реактивность параметров"}),": Если ",e.jsx(n.code,{children:"path"})," или ",e.jsx(n.code,{children:"options"})," (в ",e.jsx(n.code,{children:"propsGet"}),") являются реактивными (Vue Ref), и вы установили ",e.jsx(n.code,{children:"reactivity: true"}),", хук будет следить за их изменением и автоматически перезагружать данные при смене URL или параметров фильтрации."]}),`
`]}),`
`,e.jsx(n.h2,{id:"архитектура",children:"Архитектура"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useApiManagementRef"})," — это центральный оркестратор для CRUD-задач. Он объединяет четыре независимых хука (",e.jsx(n.code,{children:"useApiRef"}),", ",e.jsx(n.code,{children:"useFormattersRef"}),", ",e.jsx(n.code,{children:"useSearchRef"})," и мутации) в единую реактивную систему. Вместо управления десятками разрозненных состояний (загрузка, ошибки, данные, фильтры), разработчик описывает конфигурацию, а хук берет на себя синхронизацию их жизненных циклов."]}),`
`,e.jsx(n.h2,{id:"типы-types",children:"Типы (Types)"}),`
`,e.jsx(n.h3,{id:"apimanagementgetreturn-type",children:e.jsx(n.code,{children:"ApiManagementGet<Return, Type>"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path?: string | Ref<string>"})," — путь к API."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: ApiOptions"})," — параметры запроса (метод, заголовки и т.д.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reactivity?: boolean"})," — включить ли автоматическое обновление при изменении ",e.jsx(n.code,{children:"path"})," или ",e.jsx(n.code,{children:"options"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"conditions?: Ref<boolean>"})," — условие, при котором выполняется запрос."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"transformation?: (data: Type) => ApiData<Return>"})," — функция для трансформации данных после получения."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unmounted?: boolean"})," — удалять ли данные после размонтирования компонента."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"skeleton?: () => Return"})," — функция, возвращающая данные-заглушки во время загрузки."]}),`
`]}),`
`,e.jsx(n.h3,{id:"apimanagementsearcht-k",children:e.jsx(n.code,{children:"ApiManagementSearch<T, K>"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"columns: K"})," — список колонок для поиска."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: Ref<string>"})," — реактивная строка поиска."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: SearchOptions"})," — дополнительные настройки поиска."]}),`
`]}),`
`,e.jsx(n.h3,{id:"apimanagementrequestt-return",children:e.jsx(n.code,{children:"ApiManagementRequest<T, Return>"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path?: string | Ref<string>"})," — путь для запроса мутации."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"action?: (data: Return | undefined) => Promise<void> | void"})," — коллбэк, вызываемый после выполнения запроса."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"transformation?: (data: T) => Return"})," — трансформация данных перед отправкой."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toData?: boolean"})," — отправлять ли данные в теле запроса (в свойстве ",e.jsx(n.code,{children:"data"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: ApiOptions"})," — дополнительные параметры запроса."]}),`
`]}),`
`,e.jsx(n.h2,{id:"пример-использования",children:"Пример использования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ref } from 'vue'
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
`})})]})}function a(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{a as default};
